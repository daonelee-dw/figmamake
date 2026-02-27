import { X } from "lucide-react";
import { useState, FormEvent } from "react";
import svgPaths from "../../imports/svg-2gcwh4cunv";
import { supabase } from "../../lib/supabase";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
  successMessage?: string;
}

export function LoginModal({ isOpen, onClose, onSwitchToSignup, successMessage }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  // 성공 메시지가 있을 때 표시
  if (successMessage && !showSuccess) {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    setIsLoading(true);

    try {
      // Supabase로 로그인
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) {
        throw loginError;
      }

      // 로그인 성공
      console.log("로그인 성공:", data);
      
      // 폼 초기화 및 모달 닫기
      setEmail("");
      setPassword("");
      setError("");
      onClose();

    } catch (err: any) {
      console.error("로그인 오류:", err);
      setError(err.message || "로그인에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });

      if (error) {
        setError("Google 로그인에 실패했습니다.");
        console.error("Google OAuth 오류:", error);
      }
    } catch (err) {
      console.error("Google 로그인 오류:", err);
      setError("Google 로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md rounded-xl p-6 md:p-8"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          border: '1px solid var(--color-border-primary)',
          boxShadow: 'var(--shadow-2xl)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-lg transition-all hover:opacity-70"
          style={{
            color: 'var(--color-text-tertiary)',
            backgroundColor: 'var(--color-bg-tertiary)'
          }}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col gap-2 items-center mb-8">
          <h2 
            className="title-3"
            style={{ color: 'var(--color-text-primary)' }}
          >
            로그인
          </h2>
          <p 
            className="text-small text-center text-[14px]"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            계정에 로그인하여 ScreenFlow를 시작하세요
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label 
              className="text-small px-0.5"
              style={{ color: 'var(--color-text-primary)' }}
            >
              이메일
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full px-3 py-3 rounded-lg text-small transition-all focus:outline-none"
              style={{
                backgroundColor: 'var(--color-bg-tertiary)',
                border: '1px solid var(--color-border-primary)',
                color: 'var(--color-text-primary)',
                transition: 'var(--transition-fast)'
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <label 
              className="text-small px-0.5"
              style={{ color: 'var(--color-text-primary)' }}
            >
              비밀번호
            </label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-3 rounded-lg text-small transition-all focus:outline-none"
              style={{
                backgroundColor: 'var(--color-bg-tertiary)',
                border: '1px solid var(--color-border-primary)',
                color: 'var(--color-text-primary)',
                transition: 'var(--transition-fast)'
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-lg text-small transition-all hover:opacity-90 active:scale-[0.98]"
            style={{
              backgroundColor: 'var(--color-accent-blue)',
              color: 'var(--color-text-primary)',
              fontWeight: 'var(--font-medium)',
              transition: 'var(--transition-base)'
            }}
            disabled={isLoading}
          >
            {isLoading ? "로그인 중..." : "로그인"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div 
            className="flex-1 h-px"
            style={{ backgroundColor: 'var(--color-border-primary)' }}
          />
          <span 
            className="text-mini"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            또는
          </span>
          <div 
            className="flex-1 h-px"
            style={{ backgroundColor: 'var(--color-border-primary)' }}
          />
        </div>

        {/* Google Login Button */}
        <button
          type="button"
          className="w-full px-4 py-3 rounded-lg text-small flex items-center justify-center gap-3 transition-all hover:opacity-90"
          style={{
            backgroundColor: 'var(--color-bg-tertiary)',
            border: '1px solid var(--color-border-primary)',
            color: 'var(--color-text-primary)',
            transition: 'var(--transition-base)'
          }}
          onClick={handleGoogleLogin}
        >
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 20 20" fill="none">
            <path d={svgPaths.p30690780} fill="#4285F4" />
            <path d={svgPaths.p15764280} fill="#34A853" />
            <path d={svgPaths.p22ffb080} fill="#FBBC05" />
            <path d={svgPaths.p11c26d00} fill="#EA4335" />
          </svg>
          <span>구글로 로그인</span>
        </button>

        {/* Footer Links */}
        <div className="mt-6 flex flex-col gap-3 items-center">
          <p className="text-small">
            <span style={{ color: 'var(--color-text-tertiary)' }}>
              계정이 없으신가요?
            </span>
            {' '}
            <button 
              type="button"
              className="transition-all hover:opacity-70"
              style={{ 
                color: 'var(--color-accent-blue)',
                fontWeight: 'var(--font-medium)'
              }}
              onClick={onSwitchToSignup}
            >
              회원가입
            </button>
          </p>
          <button 
            type="button"
            className="text-small transition-all hover:opacity-70"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            ← 홈으로 돌아가기
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div 
            className="mt-4 p-3 rounded-lg text-small"
            style={{
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              color: '#ef4444',
              border: '1px solid rgba(239, 68, 68, 0.3)'
            }}
          >
            {error}
          </div>
        )}

        {/* Success Message */}
        {showSuccess && (
          <div 
            className="mt-4 p-3 rounded-lg text-small"
            style={{
              backgroundColor: 'rgba(34, 197, 94, 0.1)',
              color: '#22c55e',
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}
          >
            {successMessage}
          </div>
        )}
      </div>
    </div>
  );
}