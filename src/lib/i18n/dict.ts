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
    title: "One person. Idea to production.",
    body: [
      "I take products from idea to production — frontend, backend, database, AI integrations, mobile apps, deployment, and App Store releases. You don't need five contractors to get a working product.",
      "Most of my work is private client software: multi-tenant CRMs, AI SaaS, and native apps that are live in the stores. I stay through listing, billing, and the first real users — not just a Figma-to-HTML handoff.",
    ],
    highlights: [
      "Next.js 15 / 16 (App Router, RSC, Turbopack)",
      "React Native + Expo — shipped to App Store & Play",
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
    title: "A gallery of things I've shipped.",
    subtitle:
      "13 production pieces. Live URLs and tech are linked where public.",
    flagship: "Flagship",
    more: "More work",
    moreKicker: "Also shipped",
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
    title: "Have a project? Let's talk.",
    subtitle:
      "I take a small number of freelance and contract builds. Tell me what you're shipping — I reply within 24 hours.",
    emailCta: "Email me",
    ghCta: "GitHub",
    copyEmail: "Copy email",
    copied: "Copied!",
    start: "Start a Project",
    formKind: "What are you building?",
    formBudget: "Budget",
    formTimeline: "Timeline",
    formAbout: "Tell me about the project",
    formSend: "Send",
    formHint: "Opens your email with the brief filled in.",
  },
  footer: {
    built: "Built with Next.js, Three.js, React Three Fiber & Framer Motion.",
    backTop: "Back to top",
  },
} as const;

export type Dict = typeof t;
