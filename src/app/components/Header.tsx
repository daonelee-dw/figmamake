import { useState, useEffect } from "react";
import { LogOut, User } from "lucide-react";
import { LoginModal } from "./LoginModal";
import { SignupModal } from "./SignupModal";
import { supabase } from "../../lib/supabase";

export function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [loginSuccessMessage, setLoginSuccessMessage] = useState("");

  // 사용자 세션 확인
  useEffect(() => {
    checkUser();

    // 인증 상태 변경 리스너
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
    } catch (error) {
      console.error("세션 확인 오류:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      console.log("로그아웃 성공");
    } catch (error) {
      console.error("로그아웃 오류:", error);
    }
  };

  const handleSwitchToSignup = () => {
    setLoginSuccessMessage("");
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(true);
  };

  const handleSwitchToLogin = (message?: string) => {
    setIsSignupModalOpen(false);
    setIsLoginModalOpen(true);
    if (message) {
      setLoginSuccessMessage(message);
    }
  };

  return (
    <>
      <header 
        className="w-full border-b transition-all"
        style={{
          backgroundColor: 'var(--color-bg-secondary)',
          borderColor: 'var(--color-border-primary)'
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 
              className="title-7"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Logo
            </h1>
            <nav className="hidden md:flex items-center gap-6">
              {/* Menu placeholder */}
            </nav>
          </div>

          {loading ? (
            <div className="text-small" style={{ color: 'var(--color-text-tertiary)' }}>
              로딩 중...
            </div>
          ) : user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" style={{ color: 'var(--color-text-secondary)' }} />
                <span 
                  className="text-small"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {user.user_metadata?.name || user.email}
                </span>
              </div>
              <button 
                className="text-small transition-all hover:opacity-70 flex items-center gap-2"
                style={{ color: 'var(--color-text-secondary)' }}
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4" />
                <span>로그아웃</span>
              </button>
            </div>
          ) : (
            <button 
              className="text-small transition-all hover:opacity-70"
              style={{ color: 'var(--color-text-secondary)' }}
              onClick={() => setIsLoginModalOpen(true)}
            >
              로그인
            </button>
          )}
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToSignup={handleSwitchToSignup}
        successMessage={loginSuccessMessage}
      />

      <SignupModal 
        isOpen={isSignupModalOpen} 
        onClose={() => setIsSignupModalOpen(false)}
        onSwitchToLogin={handleSwitchToLogin}
      />
    </>
  );
}