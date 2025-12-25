"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  current: "vi" | "en";
};

export default function LanguageSwitch({ current }: Props) {
  const pathname = usePathname();

  const target: "vi" | "en" = current === "vi" ? "en" : "vi";

  // Giữ nguyên route con khi chuyển ngôn ngữ:
  // /vi/abc -> /en/abc, /en/abc -> /vi/abc
  const nextPath =
    pathname === "/"
      ? `/${target}`
      : pathname.startsWith("/vi")
      ? pathname.replace(/^\/vi/, `/${target}`)
      : pathname.startsWith("/en")
      ? pathname.replace(/^\/en/, `/${target}`)
      : `/${target}`;

  return (
    <Link className="btn btn--ghost" href={nextPath}>
      {target === "vi" ? "Tiếng Việt" : "English"}
    </Link>
  );
}
