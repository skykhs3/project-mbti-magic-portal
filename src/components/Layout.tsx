
import React from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-4 border-b bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            MBTI 성격유형 테스트
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-foreground/70 hover:text-primary transition-colors">
              홈
            </Link>
            <Link to="/test" className="text-foreground/70 hover:text-primary transition-colors">
              테스트 시작
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container py-8">
        {children}
      </main>
      <footer className="py-6 border-t bg-white/30 backdrop-blur-sm">
        <div className="container text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MBTI 성격유형 테스트. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
