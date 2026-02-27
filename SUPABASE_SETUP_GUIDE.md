# Supabase 회원가입/로그인 셋업 가이드

## ✅ 현재 상태
- **프론트엔드 연동**: 완료 ✅
- **서버 API 구현**: 완료 ✅
- **환경변수 설정**: 완료 ✅ (MAKE_PROJECT_URL, MAKE_PROJECT_ANON_KEY)
- **회원가입/로그인 기능**: 완료 ✅
- **Google OAuth 연동**: 설정 필요 ⚠️

## 🚀 빠른 시작

애플리케이션이 작동하려면 아래 **필수 단계**를 완료해야 합니다:

1. ✅ **데이터베이스 테이블 생성** (아래 SQL 실행)
2. ⚠️ **Google OAuth 설정** (선택사항이지만 Google 로그인 버튼이 활성화되어 있음)

---

## 📋 목차
1. [데이터베이스 테이블 생성 (필수)](#1-데이터베이스-테이블-생성-필수)
2. [Auth 설정](#2-auth-설정)
3. [Row Level Security (RLS) 설정](#3-row-level-security-rls-설정)
4. [Google OAuth 설정 (중요!)](#4-google-oauth-설정-중요)
5. [테스트 방법](#5-테스트-방법)

---

## 1. 데이터베이스 테이블 생성 (필수)

### Supabase Dashboard에서 실행할 SQL

Supabase Dashboard → SQL Editor → New query로 이동한 후 아래 SQL을 실행하세요.

```sql
-- ============================================
-- 사용자 프로필 테이블 생성
-- ============================================

CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  birth_date DATE,
  address TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 인덱스 생성 (검색 성능 향상)
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON public.user_profiles(email);

-- ============================================
-- RLS (Row Level Security) 활성화
-- ============================================

ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS 정책 생성
-- ============================================

-- 1. 사용자는 자신의 프로필만 조회 가능
CREATE POLICY "Users can view their own profile"
ON public.user_profiles
FOR SELECT
USING (auth.uid() = id);

-- 2. 사용자는 자신의 프로필만 생성 가능
CREATE POLICY "Users can insert their own profile"
ON public.user_profiles
FOR INSERT
WITH CHECK (auth.uid() = id);

-- 3. 사용자는 자신의 프로필만 수정 가능
CREATE POLICY "Users can update their own profile"
ON public.user_profiles
FOR UPDATE
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- 4. 사용자는 자신의 프로필만 삭제 가능
CREATE POLICY "Users can delete their own profile"
ON public.user_profiles
FOR DELETE
USING (auth.uid() = id);

-- ============================================
-- 트리거 함수: updated_at 자동 업데이트
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 트리거 생성
DROP TRIGGER IF EXISTS update_user_profiles_updated_at ON public.user_profiles;
CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 함수: 회원가입 시 자동으로 프로필 생성
-- ============================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 트리거: auth.users에 새 사용자 생성 시 자동으로 프로필 생성
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- 완료 확인
-- ============================================

SELECT 
  'user_profiles 테이블이 성공적으로 생성되었습니다!' as message,
  COUNT(*) as total_profiles
FROM public.user_profiles;
```

---

## 2. Auth 설정

### 2.1 이메일 인증 설정

Supabase Dashboard → Authentication → Settings로 이동

#### Enable Email Confirmations (개발 환경)
- **개발/테스트 환경**: `Disable` (즉시 회원가입 가능)
- **프로덕션 환경**: `Enable` (이메일 인증 필요)

현재는 테스트 목적이므로 **Disable**을 권장합니다.

### 2.2 Auth Email Template (선택사항)

Authentication → Email Templates에서 회원가입 확인 이메일 템플릿을 커스터마이징할 수 있습니다.

---

## 3. Row Level Security (RLS) 설정

위의 SQL 코드에 RLS 정책이 포함되어 있으므로 별도 작업이 필요하지 않습니다.

### RLS 정책 요약:
- ✅ 사용자는 **자신의 프로필만** 조회, 생성, 수정, 삭제 가능
- ✅ 다른 사용자의 데이터에는 접근 불가
- ✅ 인증되지 않은 사용자는 어떤 데이터에도 접근 불가

---

## 4. Google OAuth 설정 (중요!)

Google 로그인 기능을 활성화하려면 다음 단계를 따르세요.

### 4.1 Google Cloud Console 설정

1. [Google Cloud Console](https://console.cloud.google.com/)로 이동
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. **APIs & Services → Credentials** 이동
4. **Create Credentials → OAuth 2.0 Client ID** 선택
5. Application type: **Web application**
6. Authorized redirect URIs 추가:
   ```
   https://[YOUR_PROJECT_REF].supabase.co/auth/v1/callback
   ```
   (YOUR_PROJECT_REF는 Supabase 프로젝트 URL에서 확인)

7. Client ID와 Client Secret 복사

### 4.2 Supabase Dashboard 설정

1. Supabase Dashboard → Authentication → Providers로 이동
2. **Google** 활성화
3. Google Cloud Console에서 복사한 정보 입력:
   - Client ID
   - Client Secret
4. 저장

### 4.3 OAuth 동의 화면 설정

Google Cloud Console → OAuth consent screen에서:
- User Type: **External** 선택
- 앱 정보 입력 (앱 이름, 지원 이메일 등)
- Scopes: `email`, `profile` 추가
- 테스트 사용자 추가 (개발 중)

---

## 5. 테스트 방법

### 5.1 테이블 확인
Supabase Dashboard → Table Editor → user_profiles 테이블 확인

### 5.2 데이터 조회 (SQL Editor)
```sql
-- 모든 프로필 조회
SELECT * FROM public.user_profiles;

-- 특정 사용자 프로필 조회
SELECT * FROM public.user_profiles WHERE email = 'test@example.com';
```

### 5.3 Auth Users 확인
```sql
-- 모든 인증 사용자 조회
SELECT id, email, created_at, confirmed_at 
FROM auth.users 
ORDER BY created_at DESC;
```

---

## 6. 테이블 구조 확인

### user_profiles 테이블 스키마

| 컬럼명 | 타입 | 설명 | 제약조건 |
|--------|------|------|----------|
| `id` | UUID | 사용자 고유 ID | PRIMARY KEY, FK to auth.users |
| `email` | TEXT | 이메일 주소 | NOT NULL, UNIQUE |
| `name` | TEXT | 사용자 이름 | NULL 허용 |
| `birth_date` | DATE | 생년월일 | NULL 허용 (선택사항) |
| `address` | TEXT | 주소 | NULL 허용 (선택사항) |
| `created_at` | TIMESTAMP | 생성 일시 | DEFAULT NOW() |
| `updated_at` | TIMESTAMP | 수정 일시 | DEFAULT NOW() |

---

## 7. 다음 단계

✅ 프론트엔드 연동 완료 (회원가입/로그인 API 구현)  
✅ 서버 API 구현 완료  
✅ 환경변수 설정 완료  
⬜ SQL 실행 필요 (위의 1번 섹션)  
⬜ Google OAuth 연동 필요 (위의 4번 섹션)

---

## 📝 참고 자료

- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)
- [Google OAuth Setup](https://supabase.com/docs/guides/auth/social-login/auth-google)

---

## ⚠️ 중요 보안 사항

1. **환경 변수 보호**: API 키를 절대 클라이언트 코드에 하드코딩하지 마세요
2. **RLS 필수**: 모든 테이블에 RLS를 활성화하세요
3. **HTTPS 사용**: 프로덕션에서는 반드시 HTTPS를 사용하세요
4. **테스트 목적**: Figma Make는 프로토타입 용도이며, 실제 프로덕션 환경에서는 추가 보안 조치가 필요합니다

---

**셋업 완료 후 질문이나 오류가 발생하면 언제든지 문의해주세요!**