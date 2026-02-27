import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '/utils/supabase/info';

// Supabase 클라이언트 싱글톤
const supabaseUrl = `https://${projectId}.supabase.co`;
const supabaseAnonKey = publicAnonKey;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 서버 API URL - Edge Function 이름은 'server'
export const serverUrl = `${supabaseUrl}/functions/v1/server/make-server-14228a6e`;