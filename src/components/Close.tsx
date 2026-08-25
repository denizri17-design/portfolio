"use client";

import { t } from "@/lib/i18n/dict";
import { LeadForm } from "./LeadForm";

const EMAIL = "info@abbaristudio.com";

export function Close() {
  const year = new Date().getFullYear();

  return (
    <>
      <section
        id="about"
        className="chapter relative flex flex-col justify-center px-5 py-24 sm:px-10"
      >
        <p className="label">{t.about.kicker}</p>
        <h2 className="mt-4 max-w-4xl font-display text-[clamp(2rem,5vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
          {t.about.title}
        </h2>
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-white/55">
          {t.about.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="label mt-10 max-w-xl text-white/35">
          Next.js · React Native · FastAPI · Node · Laravel · Stripe ·
          Supabase · App Store
        </p>
      </section>

      <section
        id="contact"
        className="chapter relative flex flex-col justify-center px-5 py-24 sm:px-10"
      >
        <p className="label">{t.contact.kicker}</p>
        <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em]">
          {t.contact.title}
        </h2>
        <p className="mt-6 max-w-lg text-white/50">{t.contact.subtitle}</p>
        <LeadForm />
        <a
          href={`mailto:${EMAIL}`}
          className="mt-10 text-sm text-white/40 transition hover:text-white"
        >
          {EMAIL}
        </a>
        <p className="label mt-16 text-white/30">
          {year} / {t.footer.built}
        </p>
      </section>
    </>
  );
}
