"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "#features", label: "المغامرات" },
  { href: "#languages", label: "اللغات" },
  { href: "#journey", label: "رحلتك" },
  { href: "#community", label: "المجتمع" },
  { href: "#faq", label: "الأسئلة" }
];

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-white/50 bg-white/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#hero" className="flex items-center gap-2">
          <span className="text-3xl">🌍</span>
          <span className="text-lg font-semibold text-slate-900">LinguaQuest</span>
        </Link>
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#download"
            className="rounded-full border border-primary/20 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
          >
            تسجيل مجاني
          </a>
          <a
            href="#hero"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-primary/30 transition hover:bg-primary/90"
          >
            ابدأ التعلم
          </a>
        </div>
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 md:hidden"
          aria-label="فتح القائمة"
        >
          <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-slate-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white"
            >
              ابدأ الآن
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
