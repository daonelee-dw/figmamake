import { X } from "lucide-react";
import { useState, FormEvent } from "react";
import svgPaths from "../../imports/svg-xrqm5iym2i";
import { supabase, serverUrl } from "../../lib/supabase";
import { publicAnonKey } from '/utils/supabase/info';

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: (message?: string) => void;
}

export function SignupModal({ isOpen, onClose, onSwitchToLogin }: SignupModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    // 유효성 검사
    if (!email || !password) {
      setError("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (password.length < 6) {
      setError("비밀번호는 최소 6자 이상이어야 합니다.");
      return;
    }

    setIsLoading(true);

    try {
      // 서버로 회원가입 요청
      const response = await fetch(`${serverUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          email,
          password,
          name,
          birthDate: birthDate || null,
          address: address || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "회원가입에 실패했습니다.");
      }

      // 회원가입 성공
      console.log("회원가입 성공:", data);
      
      // 폼 초기화
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");
      setBirthDate("");
      setAddress("");
      setError("");
      
      // 로그인 모달로 전환하며 성공 메시지 전달
      onSwitchToLogin("회원가입이 완료되었습니다! 로그인해주세요.");

    } catch (err: any) {
      console.error("회원가입 오류:", err);
      setError(err.message || "회원가입 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md rounded-xl p-6 md:p-8 my-8"
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
            회원가입
          </h2>
          <p 
            className="text-small text-center"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            새 계정을 만들어 ScreenFlow를 시작하세요
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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

          {/* Password Confirm Field */}
          <div className="flex flex-col gap-2">
            <label 
              className="text-small px-0.5"
              style={{ color: 'var(--color-text-primary)' }}
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
              className="w-full px-3 py-3 rounded-lg text-small transition-all focus:outline-none"
              style={{
                backgroundColor: 'var(--color-bg-tertiary)',
                border: '1px solid var(--color-border-primary)',
                color: 'var(--color-text-primary)',
                transition: 'var(--transition-fast)'
              }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Name Field */}
          <div className="flex flex-col gap-2">
            <label 
              className="text-small px-0.5"
              style={{ color: 'var(--color-text-primary)' }}
            >
              이름
            </label>
            <input
              type="text"
              placeholder="이름을 입력하세요"
              className="w-full px-3 py-3 rounded-lg text-small transition-all focus:outline-none"
              style={{
                backgroundColor: 'var(--color-bg-tertiary)',
                border: '1px solid var(--color-border-primary)',
                color: 'var(--color-text-primary)',
                transition: 'var(--transition-fast)'
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Birth Date Field (Optional) */}
          <div className="flex flex-col gap-2">
            <label 
              className="text-small px-0.5"
              style={{ color: 'var(--color-text-primary)' }}
            >
              생년월일(선택사항)
            </label>
            <input
              type="text"
              placeholder="dd.mm.yyyy"
              className="w-full px-3 py-3 rounded-lg text-small transition-all focus:outline-none"
              style={{
                backgroundColor: 'var(--color-bg-tertiary)',
                border: '1px solid var(--color-border-primary)',
                color: 'var(--color-text-primary)',
                transition: 'var(--transition-fast)'
              }}
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>

          {/* Address Field (Optional) */}
          <div className="flex flex-col gap-2">
            <label 
              className="text-small px-0.5"
              style={{ color: 'var(--color-text-primary)' }}
            >
              주소(선택사항)
            </label>
            <input
              type="text"
              placeholder="서울특별시 강남구"
              className="w-full px-3 py-3 rounded-lg text-small transition-all focus:outline-none"
              style={{
                backgroundColor: 'var(--color-bg-tertiary)',
                border: '1px solid var(--color-border-primary)',
                color: 'var(--color-text-primary)',
                transition: 'var(--transition-fast)'
              }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {/* Signup Button */}
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
            {isLoading ? "회원가입 중..." : "회원가입"}
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

        {/* Google Signup Button */}
        <button
          type="button"
          className="w-full px-4 py-3 rounded-lg text-small flex items-center justify-center gap-3 transition-all hover:opacity-90"
          style={{
            backgroundColor: 'var(--color-bg-tertiary)',
            border: '1px solid var(--color-border-primary)',
            color: 'var(--color-text-primary)',
            transition: 'var(--transition-base)'
          }}
          onClick={handleGoogleSignup}
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
              이미 계정이 있으신가요?
            </span>
            {' '}
            <button 
              type="button"
              className="transition-all hover:opacity-70"
              style={{ 
                color: 'var(--color-accent-blue)',
                fontWeight: 'var(--font-medium)'
              }}
              onClick={onSwitchToLogin}
            >
              로그인
            </button>
          </p>
          <button 
            type="button"
            className="text-small transition-all hover:opacity-70"
            style={{ color: 'var(--color-text-tertiary)' }}
            onClick={onClose}
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
      </div>
    </div>
  );
}