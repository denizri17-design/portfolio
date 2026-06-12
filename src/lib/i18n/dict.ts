export const t = {
  nav: {
    work: "Work",
    about: "About",
    stack: "Stack",
    contact: "Contact",
    hire: "Hire me",
  },
  hero: {
    eyebrow: "Available for freelance & full-time",
    titleA: "I build",
    titleB: "AI-powered SaaS",
    titleC: ", multi-tenant CRMs,",
    titleD: "native iOS/Android apps and indie games",
    titleE: "that ship.",
    subtitle:
      "Fullstack developer focused on production-grade products: pixel-perfect frontends in Next.js + React Native, AI backends in FastAPI/Node, and 2D/3D games in React Native and Unity (C#). I do the design, the database, the App Store listing and the deploy.",
    ctaWork: "See selected work",
    ctaContact: "Get in touch",
    stats: [
      { k: "50+", v: "Production products shipped" },
      { k: "iOS + Android", v: "Native apps on stores" },
      { k: "React + Unity", v: "Game dev across both stacks" },
    ],
  },
  about: {
    kicker: "About",
    title: "Fullstack across the whole product surface.",
    body: [
      "I'm Ri — a fullstack developer who ships end-to-end products: from the marketing site and the Stripe-billed SaaS dashboard, all the way down to the FastAPI service, the Postgres schema, the iOS build, the App Store listing and the Vercel deploy.",
      "Most of what I work on is private client work — CRMs for roofing, public-adjusting and auto-body shops, a multi-language AI career copilot, and indie mobile games on iOS + Android built with React Native and Unity. I care a lot about animation, accessibility, performance budgets, and that the code is still nice to read in six months.",
    ],
    highlights: [
      "Next.js 15 / 16 (App Router, RSC, Turbopack)",
      "React Native + Expo SDK 54 — shipped to App Store & Play",
      "Unity (C#) for 2D & 3D mobile games",
      "FastAPI + Python · Node.js · Laravel/PHP",
      "Postgres / Supabase · MySQL · Drizzle ORM",
      "OpenAI / multi-judge LLM pipelines",
    ],
  },
  stack: {
    kicker: "Stack",
    title: "Tools I reach for.",
    subtitle:
      "Picked because they ship fast, scale predictably and don't lock anyone in.",
  },
  work: {
    kicker: "Selected work",
    title: "Things I've built recently.",
    subtitle:
      "10 production / personal projects. Live URLs and tech are linked where public.",
    filterAll: "All",
    filterSaas: "SaaS",
    filterCrm: "CRM",
    filterMobile: "Mobile",
    filterWeb: "Marketing",
    filterGame: "Games",
    live: "Live site",
    repo: "Repo",
    privateRepo: "Private repo",
  },
  contact: {
    kicker: "Contact",
    title: "Got a product to ship?",
    subtitle:
      "I'm picking up a small number of new projects. Tell me what you're building — I'll reply within 24 hours.",
    emailCta: "Email me",
    ghCta: "GitHub",
    copyEmail: "Copy email",
    copied: "Copied!",
  },
  footer: {
    built: "Built with Next.js 15, Tailwind v4 & Framer Motion.",
    backTop: "Back to top",
  },
} as const;

export type Dict = typeof t;
