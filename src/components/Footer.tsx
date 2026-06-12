"use client";

import { ArrowUp, Github } from "lucide-react";
import { t } from "@/lib/i18n/dict";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400">
            <span className="absolute inset-0.5 rounded-full bg-[var(--color-bg)]" />
            <span className="relative font-display text-[13px] font-bold tracking-tight text-white">
              R
            </span>
          </span>
          <div>
            <div className="font-display text-sm font-semibold text-white">
              Ri Abba
            </div>
            <div className="text-xs text-white/45">
              © {year} · {t.footer.built}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/denizri17-design"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/65 transition hover:border-white/25 hover:text-white"
          >
            <Github size={13} />
            denizri17-design
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/65 transition hover:border-white/25 hover:text-white"
          >
            <ArrowUp size={13} />
            {t.footer.backTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
