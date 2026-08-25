"use client";

import { t } from "@/lib/i18n/dict";

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between px-5 py-5 sm:px-8">
        <a href="#top" className="label text-[var(--color-fg)]">
          Ri Abba
        </a>
        <div className="flex items-center gap-6">
          <a href="#work" className="label transition hover:text-[var(--color-fg)]">
            {t.nav.work}
          </a>
          <a href="#about" className="label transition hover:text-[var(--color-fg)]">
            {t.nav.about}
          </a>
          <a href="#contact" className="label transition hover:text-[var(--color-fg)]">
            {t.nav.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
