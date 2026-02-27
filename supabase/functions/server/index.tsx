import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// Supabase client setup
const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-14228a6e/health", (c) => {
  return c.json({ status: "ok" });
});

// ============================================
// 회원가입 엔드포인트
// ============================================
app.post("/make-server-14228a6e/auth/signup", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password, name, birthDate, address } = body;

    if (!email || !password) {
      return c.json({ error: "이메일과 비밀번호는 필수입니다." }, 400);
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // 사용자 생성
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { name },
      email_confirm: true // 이메일 자동 확인 (개발 환경)
    });

    if (error) {
      console.log(`회원가입 오류: ${error.message}`);
      return c.json({ error: error.message }, 400);
    }

    // 추가 프로필 정보 업데이트 (선택사항)
    if (data.user && (birthDate || address)) {
      const { error: updateError } = await supabase
        .from('user_profiles')
        .update({
          birth_date: birthDate || null,
          address: address || null
        })
        .eq('id', data.user.id);

      if (updateError) {
        console.log(`프로필 업데이트 오류: ${updateError.message}`);
      }
    }

    return c.json({ 
      success: true, 
      message: "회원가입이 완료되었습니다.",
      user: {
        id: data.user?.id,
        email: data.user?.email
      }
    });

  } catch (err) {
    console.log(`회원가입 중 예외 발생: ${err}`);
    return c.json({ error: "회원가입 처리 중 오류가 발생했습니다." }, 500);
  }
});

// ============================================
// 로그인 엔드포인트
// ============================================
app.post("/make-server-14228a6e/auth/login", async (c) => {
  try {
    const body = await c.req.json();
    const { email, password } = body;

    if (!email || !password) {
      return c.json({ error: "이메일과 비밀번호를 입력해주세요." }, 400);
    }

    // 프론트엔드에서 직접 signInWithPassword를 호출하도록 안내
    // 서버에서는 토큰 검증만 수행
    return c.json({ 
      message: "프론트엔드에서 Supabase 클라이언트로 직접 로그인하세요." 
    });

  } catch (err) {
    console.log(`로그인 중 예외 발생: ${err}`);
    return c.json({ error: "로그인 처리 중 오류가 발생했습니다." }, 500);
  }
});

// ============================================
// 사용자 프로필 조회 엔드포인트
// ============================================
app.get("/make-server-14228a6e/auth/profile", async (c) => {
  try {
    const accessToken = c.req.header('Authorization')?.split(' ')[1];
    
    if (!accessToken) {
      return c.json({ error: "인증 토큰이 필요합니다." }, 401);
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    
    // 토큰으로 사용자 확인
    const { data: { user }, error: authError } = await supabase.auth.getUser(accessToken);

    if (authError || !user) {
      return c.json({ error: "유효하지 않은 토큰입니다." }, 401);
    }

    // 프로필 정보 조회
    const { data: profile, error: profileError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (profileError) {
      console.log(`프로필 조회 오류: ${profileError.message}`);
      return c.json({ error: "프로필을 찾을 수 없습니다." }, 404);
    }

    return c.json({ success: true, profile });

  } catch (err) {
    console.log(`프로필 조회 중 예외 발생: ${err}`);
    return c.json({ error: "프로필 조회 중 오류가 발생했습니다." }, 500);
  }
});

Deno.serve(app.fetch);