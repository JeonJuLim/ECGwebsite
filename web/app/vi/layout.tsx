// web/app/vi/layout.tsx
import "../globals.css";
import Link from "next/link";
import LanguageSwitch from "../../components/LanguageSwitch";

export const metadata = {
  title: "CardioAI",
  description: "Phân tích ECG bằng trí tuệ nhân tạo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <header className="topbar">
          <div className="container topbar__inner">
            {/* Logo → luôn về trang chủ tiếng Việt */}
            <Link href="/vi" className="brand">
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

            {/* Menu */}
            <nav className="nav">
              {/* Trang chủ */}
              <Link className="nav__link" href="/vi">
                Trang chủ
              </Link>

              {/* Nếu Phân tích ECG là section ở Home */}
              <Link className="nav__link" href="/vi/ecg-analysis">
                Phân tích ECG
              </Link>

              {/* About là trang RIÊNG */}
              <Link className="nav__link" href="/vi/about">
                Giới thiệu
              </Link>

              {/* Hướng dẫn là section ở Home */}
              <Link className="nav__link" href="/vi/guide">
                Hướng dẫn
              </Link>
            </nav>

            {/* Actions bên phải */}
            <div className="topbar__actions">
              <LanguageSwitch current="vi" />
              <Link className="btn btn--primary" href="/vi/ecg-analysis">
                Bắt đầu
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer__inner">
            <div className="footer__left">
              <div className="footer__brand">CardioAI</div>
              <div className="footer__muted">
                Giao diện demo phân tích ECG bằng AI.
              </div>
            </div>

            <div className="footer__right">
              © {new Date().getFullYear()} CardioAI
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
