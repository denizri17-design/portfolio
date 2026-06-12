"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n/LangProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#stack", label: t.nav.stack },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5",
      )}
    >
      <div className="container-page">
        <nav
          className={cn(
            "flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300",
            scrolled
              ? "glass shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
              : "bg-transparent",
          )}
        >
          <a
            href="#top"
            className="group flex items-center gap-2.5 text-sm font-semibold tracking-wide"
          >
            <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-cyan-400">
              <span className="absolute inset-0.5 rounded-full bg-[var(--color-bg)]" />
              <span className="relative font-display text-[13px] font-bold tracking-tight text-white">
                R
              </span>
            </span>
            <span className="hidden sm:inline font-display text-base text-white/90 group-hover:text-white transition">
              Ri Abba
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative rounded-full px-3.5 py-2 text-sm text-white/70 transition hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center rounded-full border border-white/10 p-0.5 text-[11px] font-medium uppercase tracking-wider">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "rounded-full px-2.5 py-1 transition",
                  lang === "en"
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-white",
                )}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("ru")}
                className={cn(
                  "rounded-full px-2.5 py-1 transition",
                  lang === "ru"
                    ? "bg-white text-black"
                    : "text-white/60 hover:text-white",
                )}
              >
                RU
              </button>
            </div>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90"
            >
              {t.nav.hire}
              <span aria-hidden>→</span>
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/80 md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-3 overflow-hidden md:hidden"
            >
              <ul className="glass flex flex-col gap-1 rounded-2xl p-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-3 py-2.5 text-sm text-white/80 hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-1 flex items-center justify-between rounded-xl px-3 py-2">
                  <span className="text-xs uppercase tracking-wider text-white/40">
                    Lang
                  </span>
                  <div className="flex items-center rounded-full border border-white/10 p-0.5 text-[11px] font-medium uppercase">
                    <button
                      type="button"
                      onClick={() => setLang("en")}
                      className={cn(
                        "rounded-full px-2.5 py-1 transition",
                        lang === "en"
                          ? "bg-white text-black"
                          : "text-white/60 hover:text-white",
                      )}
                    >
                      EN
                    </button>
                    <button
                      type="button"
                      onClick={() => setLang("ru")}
                      className={cn(
                        "rounded-full px-2.5 py-1 transition",
                        lang === "ru"
                          ? "bg-white text-black"
                          : "text-white/60 hover:text-white",
                      )}
                    >
                      RU
                    </button>
                  </div>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="mt-1 block rounded-xl bg-white px-3 py-2.5 text-center text-sm font-medium text-black"
                  >
                    {t.nav.hire}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
