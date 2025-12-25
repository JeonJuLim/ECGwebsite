import Link from "next/link";

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-600 text-white shadow-sm">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M3 13h4l2-7 4 14 2-7h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="text-[15px] font-extrabold tracking-tight text-slate-900">CardioAI</div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const linkBase =
    "rounded-md px-2 py-1 text-sm font-medium text-slate-600 hover:text-slate-900";

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="shrink-0">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <Link className={linkBase} href="/">Home</Link>
          <Link className={`${linkBase} text-teal-700`} href="/ecg-analysis">ECG Analysis</Link>
          <Link className={linkBase} href="/about">About</Link>
          <Link className={linkBase} href="/guide">Guide</Link>
          <Link className={linkBase} href="/contact">Contact</Link>
        </nav>

        <Link
          href="/ecg-analysis"
          className="inline-flex h-10 items-center justify-center rounded-full bg-teal-500 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-600"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
