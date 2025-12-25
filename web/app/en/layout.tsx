// web/app/en/layout.tsx
import "../globals.css";
import Link from "next/link";
import LanguageSwitch from "../../components/LanguageSwitch";

export const metadata = {
  title: "CardioAI",
  description: "AI-powered ECG analysis",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="topbar">
          <div className="container topbar__inner">
            <Link href="/en" className="brand">
              <span className="brand__logo" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 12h3l2-5 4 10 3-7 2 2h4"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="brand__name">CardioAI</span>
            </Link>

            <nav className="nav">
              {/* Khi đang ở /en/about, click Home sẽ quay về trang Home đúng */}
              <Link className="nav__link" href="/en">
                Home
              </Link>

              {/* Nếu ECG Analysis là section ở Home thì dùng /en#ecg-analysis */}
              <Link className="nav__link" href="/en/ecg-analysis">
                ECG Analysis
              </Link>

              {/* About là trang riêng */}
              <Link className="nav__link" href="/en/about">
                About
              </Link>

              {/* Guide nếu vẫn là section ở Home */}
              <Link className="nav__link" href="/en/guide">
                Guide
              </Link>
            </nav>

            <div className="topbar__actions">
              <LanguageSwitch current="en" />
              <Link className="btn btn--primary" href="/en/ecg-analysis">
                Get Started
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer__inner">
            <div className="footer__left">
              <div className="footer__brand">CardioAI</div>
              <div className="footer__muted">AI-powered ECG analysis demo UI.</div>
            </div>
            <div className="footer__right">© {new Date().getFullYear()} CardioAI</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
