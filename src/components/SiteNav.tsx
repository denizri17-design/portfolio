"use client";

import { t } from "@/lib/i18n/dict";

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="label text-[var(--color-fg)]">
          Ri Abba
        </a>
        <div className="flex items-center gap-5 sm:gap-6">
          <a href="#work" className="label transition hover:text-[var(--color-fg)]">
            {t.nav.work}
          </a>
          <a href="#about" className="label hidden transition hover:text-[var(--color-fg)] sm:inline">
            {t.nav.about}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition hover:border-white/50 hover:bg-white hover:text-black"
          >
            {t.nav.hire}
          </a>
        </div>
      </nav>
    </header>
  );
}
