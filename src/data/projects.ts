export type ProjectCategory = "saas" | "crm" | "mobile" | "web" | "game";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  category: ProjectCategory[];
  year: string;
  status: "shipped" | "in-production" | "live";
  stack: string[];
  links: {
    /** Primary live web URL (marketing/app site). */
    live?: string;
    /** Apple App Store listing URL. */
    appStore?: string;
    /** Google Play Store listing URL. */
    googlePlay?: string;
    /** Source repository URL. */
    repo?: string;
  };
  isPrivate: boolean;
  /** Optional single real screenshot in /public/projects/{slug}.webp */
  image?: string;
  /**
   * Optional multiple screenshots — renders a swipeable carousel with
   * pagination dots. Takes precedence over `image` if both are set.
   */
  images?: string[];
  /** Crop behaviour for the cover image. Phone screenshots need "contain". */
  imageFit?: "cover" | "contain";
  /** Flagship cases shown full-screen in the reel. */
  featured?: boolean;
  /** Short commercial proof points under the description. */
  metrics?: string[];
  /** Tailwind gradient + icon used as fallback / framing when image is absent. */
  cover: {
    gradient: string;
    accent: string;
    icon: string;
  };
};

export const projects: Project[] = [
  {
    slug: "runkoda",
    name: "RunKoda",
    featured: true,
    tagline: "A multi-agent dev platform where a team and its AI agents build together.",
    description:
      "Built a platform where every teammate works with their own OpenAI or Claude agent — in RunKoda containers or on the team's own servers. Per-project policies decide what each agent may run, risky commands wait for approval, and a shared project memory lets every agent pick up where a teammate's stopped.",
    metrics: ["Live product", "Multi-agent", "OpenAI + Claude", "Own servers"],
    bullets: [
      "Run OpenAI and Claude agents in isolated containers or on your own servers",
      "Per-project policy: allowed, ask first, or blocked — per action and per target",
      "One-click approvals for migrations, deploys, and shell on production",
      "Shared project memory, team agent orchestra, full browser IDE with Git",
    ],
    category: ["saas", "web"],
    year: "2026",
    status: "live",
    stack: [
      "AI Agents",
      "OpenAI",
      "Claude",
      "Docker",
      "TypeScript",
      "Git",
    ],
    links: {
      live: "https://runkoda.com",
    },
    isPrivate: true,
    images: [
      "/projects/runkoda-agents.webp",
      "/projects/runkoda-home.webp",
      "/projects/runkoda-policy.webp",
      "/projects/runkoda-memory.webp",
    ],
    imageFit: "cover",
    cover: {
      gradient: "from-yellow-400/25 via-neutral-800/20 to-amber-500/20",
      accent: "ring-yellow-300/40",
      icon: "Cloud",
    },
  },
  {
    slug: "nextstep",
    name: "NextStep",
    featured: true,
    tagline: "An AI career copilot that takes people from job search to offer.",
    description:
      "Built the full product — resume builder, multi-judge LLM feedback, job tracker, and interview coach — so a candidate can go from a pasted job post to a ready package in under a minute. Web, iOS, billing, and five languages ship as one system.",
    metrics: ["Web + iOS", "Stripe billing", "5 languages", "LLM pipeline"],
    bullets: [
      "Turborepo monorepo: Next.js 15 web, Expo SDK 52 mobile, FastAPI backend",
      "Multi-judge LLM pipeline with versioned prompts package",
      "Supabase auth + RLS, Stripe billing, demo preview mode",
      "5 locales: EN, ES, PT, HI, RU",
    ],
    category: ["saas"],
    year: "2026",
    status: "in-production",
    stack: [
      "Next.js 15",
      "Expo SDK 52",
      "TypeScript",
      "Python",
      "FastAPI",
      "Supabase",
      "Stripe",
      "OpenAI",
      "Turborepo",
      "Tailwind",
    ],
    links: {
      live: "https://nextstep-today.com",
      repo: "https://github.com/denizri17-design/nextstep",
    },
    isPrivate: true,
    images: [
      "/projects/live-nextstep.webp",
      "/projects/nextstep-today.webp",
    ],
    imageFit: "cover",
    cover: {
      gradient: "from-amber-700/25 via-orange-500/15 to-stone-400/25",
      accent: "ring-amber-500/40",
      icon: "Newspaper",
    },
  },
  {
    slug: "ourfit",
    name: "OurFit",
    featured: true,
    tagline: "An AI coach that checks form, builds the plan, and ships on both stores.",
    description:
      "Built the fitness product end to end: film a set, get form feedback, then follow a plan that adapts. One React Native codebase on iOS and Android, a FastAPI pose API, and a marketing site — live at ourfit.co.",
    metrics: ["App Store + Play", "75 exercises", "AI form check", "iOS + Android"],
    bullets: [
      "Monorepo: Expo app, Next.js marketing site, FastAPI pose API",
      "AI form check — frame-by-frame analysis, rep count, coaching cues",
      "75 exercises with real video, personalized weekly plans, nutrition log",
      "App Store + web app (app.ourfit.co) sharing the same React Native codebase",
    ],
    category: ["saas", "mobile"],
    year: "2026",
    status: "live",
    stack: [
      "Expo SDK 54",
      "React Native",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "Supabase",
    ],
    links: {
      live: "https://ourfit.co",
      appStore: "https://apps.apple.com/app/id6791250652",
      googlePlay:
        "https://play.google.com/store/apps/details?id=com.denizri17.formcheck",
      repo: "https://github.com/denizri17-design/ourfit",
    },
    isPrivate: true,
    images: ["/projects/live-ourfit.webp", "/projects/ourfit-ui-wide.webp"],
    imageFit: "cover",
    cover: {
      gradient: "from-lime-500/30 via-emerald-500/15 to-sky-500/30",
      accent: "ring-lime-400/40",
      icon: "Dumbbell",
    },
  },
  {
    slug: "skallix-crm",
    name: "Skallix CRM",
    featured: true,
    tagline: "One place for the lead and the job — the CRM a whole roofing company runs on.",
    description:
      "Built a multi-tenant CRM where leads, estimates, the schedule, and the invoice live on one board the office and the crew share. A lead network, affiliate webhooks, a marketing hub, and AI estimate comparison sit inside the same login — plus native iOS and Android apps for the crew.",
    metrics: ["Production", "444+ users", "4K+ jobs", "iOS + Android"],
    bullets: [
      "Lead board (list or kanban) fed by forms, phone, partner webhooks, and a ZIP-based lead network",
      "AI Studio: compares your estimate to the insurance carrier's line by line and flags missing items",
      "Multi-tenant and multi-market: isolated data, seven roles from owner to the crew",
      "Drag-and-drop crew schedule, job files and photos, invoices and profit per job",
    ],
    category: ["crm", "saas"],
    year: "2025–26",
    status: "live",
    stack: [
      "Node.js",
      "Express",
      "EJS",
      "MySQL",
      "JavaScript",
      "Mapbox",
      "Multi-tenant",
    ],
    links: {
      live: "https://skallix.com",
      appStore: "https://apps.apple.com/us/app/skallix-crm/id6762063674",
      googlePlay: "https://play.google.com/store/apps/details?id=com.skallix",
      repo: "https://github.com/denizri17-design/skallix-crm",
    },
    isPrivate: true,
    images: [
      "/projects/skallix-hero.webp",
      "/projects/skallix-leads.webp",
      "/projects/skallix-ops.webp",
      "/projects/skallix-crm.webp",
      "/projects/skallix-estimates.webp",
    ],
    imageFit: "cover",
    cover: {
      gradient: "from-blue-600/35 via-sky-400/15 to-indigo-700/35",
      accent: "ring-sky-400/40",
      icon: "Building2",
    },
  },
  {
    slug: "skallix-doorknocking-mobile",
    name: "Skallix Doorknocking",
    tagline: "A field app so door-to-door reps log every knock without a laptop.",
    description:
      "Built the companion app roofing reps actually carry: map pins, photo capture, and knock disposition, synced back to Skallix. Native Mapbox on iOS and Android — no more paper routes.",
    metrics: ["iOS + Android", "Native Mapbox", "Photo capture", "Live CRM sync"],
    bullets: [
      "Expo SDK 54, React Native 0.81, React 19",
      "Native Mapbox via @rnmapbox/maps (iOS + Android)",
      "JWT in expo-secure-store, axios interceptors, 401 auto-logout",
      "Pin disposition, knocks feed, KPI dashboard, photo upload",
    ],
    category: ["mobile"],
    year: "2026",
    status: "in-production",
    stack: [
      "Expo SDK 54",
      "React Native",
      "TypeScript",
      "Mapbox",
      "expo-secure-store",
      "axios",
    ],
    links: {
      repo: "https://github.com/denizri17-design/skallix-doorknocking-mobile",
    },
    isPrivate: true,
    image: "/projects/skallix-doorknocking-mobile.webp",
    imageFit: "contain",
    cover: {
      gradient: "from-orange-500/30 via-rose-500/15 to-amber-500/30",
      accent: "ring-orange-400/40",
      icon: "MapPin",
    },
  },
  {
    slug: "dlgplatform",
    name: "DLG Platform",
    tagline: "The operations CRM behind 11K+ real jobs, not a demo dataset.",
    description:
      "Built a multi-department CRM so marketing, sales, and the call center work from one jobs board. Status pipeline, SMS, reports, and role-based UI — running on production data across markets.",
    metrics: ["11K+ jobs", "Multi-market", "Live production", "Dept. RBAC"],
    bullets: [
      "Jobs board with case-status pipeline + claim-status filters",
      "11K+ jobs in production, multi-market filtering",
      "Department-scoped permissions: Marketing / Sales / Call Center",
      "Excel export, full audit trail",
    ],
    category: ["crm"],
    year: "2025",
    status: "live",
    stack: ["Laravel", "PHP", "Blade", "TypeScript", "MySQL"],
    links: {
      live: "https://dlgplatform.com/marketing/login.php",
      repo: "https://github.com/denizri17-design/dlgplatform",
    },
    isPrivate: true,
    image: "/projects/dlgplatform.webp",
    imageFit: "cover",
    cover: {
      gradient: "from-violet-500/30 via-indigo-500/15 to-purple-500/30",
      accent: "ring-violet-400/40",
      icon: "Database",
    },
  },
  {
    slug: "public-adjuster",
    name: "Your Local Adjuster",
    tagline: "A claims SaaS so public adjusters run the file from intake to signature.",
    description:
      "Built the web platform adjusters use every day: claims pipeline, client and carrier directories, document generation, and e-signature. The field team then picks up the same files in the iOS app.",
    metrics: ["Live SaaS", "Claims pipeline", "E-signature", "iOS companion"],
    bullets: [
      "Themed sign-in with day / night mode toggle",
      "Claims lifecycle with statuses, assignees, deadlines",
      "PDF generation + e-signature flows",
      "Carrier / agent / client directories",
    ],
    category: ["saas", "crm"],
    year: "2025",
    status: "live",
    stack: ["Laravel", "PHP", "Blade", "MySQL", "Tailwind"],
    links: {
      live: "https://local-adjuster.com",
      appStore: "https://apps.apple.com/us/app/local-adjuster/id6793198183",
      repo: "https://github.com/denizri17-design/public-adjuster",
    },
    isPrivate: true,
    images: [
      "/projects/live-adjuster.webp",
      "/projects/public-adjuster.webp",
    ],
    imageFit: "cover",
    cover: {
      gradient: "from-amber-500/30 via-orange-500/15 to-indigo-500/30",
      accent: "ring-amber-400/40",
      icon: "ShieldCheck",
    },
  },
  {
    slug: "local-adjuster-mobile",
    name: "Local Adjuster",
    tagline: "The iOS field app adjusters open on the driveway, not back at the desk.",
    description:
      "Built the native companion so claim work happens on site: review the file, update status, capture notes and photos offline, then sync back to the SaaS. Communications stay on web; the phone is for the field.",
    metrics: ["App Store", "Offline-first", "Face ID", "Photo + notes"],
    bullets: [
      "Expo SDK 57 + React Native, JWT auth against the Local Adjuster API",
      "Offline-first claims, clients, notes, tasks, and photo attachments",
      "Face ID unlock, camera for claim documents, Maps and Email shortcuts",
      "Ships on the App Store as Local Adjuster (com.localadjuster.app)",
    ],
    category: ["mobile"],
    year: "2026",
    status: "shipped",
    stack: [
      "Expo SDK 57",
      "React Native",
      "TypeScript",
      "TanStack Query",
      "expo-secure-store",
    ],
    links: {
      live: "https://local-adjuster.com",
      appStore: "https://apps.apple.com/us/app/local-adjuster/id6793198183",
      repo: "https://github.com/denizri17-design/local-adjuster-mobile",
    },
    isPrivate: true,
    images: [
      "/projects/local-adjuster-overview.webp",
      "/projects/local-adjuster-claims.webp",
      "/projects/local-adjuster-clients.webp",
    ],
    imageFit: "contain",
    cover: {
      gradient: "from-amber-600/30 via-stone-500/15 to-orange-500/30",
      accent: "ring-amber-400/40",
      icon: "ClipboardList",
    },
  },
  {
    slug: "mv-auto-body-site",
    name: "M&V Auto Body",
    tagline: "A shop site that also hides a staff CRM behind the marketing page.",
    description:
      "Built the public site for a North Hollywood auto-body shop and a private staff CRM in the same product — claims, files, and a financial dashboard, in English, Spanish, and Russian.",
    metrics: ["Live site", "EN / ES / RU", "Staff CRM", "Vercel + Postgres"],
    bullets: [
      "Next.js 16 (App Router) + React 19 + Tailwind v4",
      "i18n EN / ES / RU with first-visit modal + autodetect",
      "Drizzle + Vercel Postgres, RBAC (Owner / Manager)",
      "Client cards: claims, notes, files, transactions, reports",
    ],
    category: ["web", "crm"],
    year: "2026",
    status: "live",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind v4",
      "Framer Motion",
      "Drizzle",
      "Vercel Postgres",
      "Vercel Blob",
      "Resend",
      "Recharts",
    ],
    links: {
      live: "https://www.mivbodyshop.com",
      repo: "https://github.com/denizri17-design/mv-auto-body-site",
    },
    isPrivate: true,
    images: ["/projects/mv-auto-body.webp", "/projects/mv-gallery.webp"],
    imageFit: "cover",
    cover: {
      gradient: "from-emerald-500/30 via-green-500/15 to-lime-500/30",
      accent: "ring-emerald-400/40",
      icon: "Car",
    },
  },
  {
    slug: "abbari-website",
    name: "Abbari Studio",
    tagline: "A walk-through showroom for an indie studio — four products, four rooms.",
    description:
      "Built the home of Abbari Studio as a cinematic showroom: Bricko, Linko, NextStep, and OurFit each get a room with a live \"how it plays\" demo, plus the privacy, terms, press kit, and support pages the stores actually ask for.",
    metrics: ["Live site", "4 products", "Interactive demos", "Press kit"],
    bullets: [
      "Next.js 16 + Tailwind v4 (CSS-first, no config)",
      "Framer Motion + GSAP animations",
      "Howler.js forest ambience with sound toggle",
      "Sitemap, robots, OG, JSON-LD",
    ],
    category: ["web"],
    year: "2026",
    status: "live",
    stack: [
      "Next.js 16",
      "Tailwind v4",
      "Framer Motion",
      "GSAP",
      "Howler.js",
      "TypeScript",
    ],
    links: {
      live: "https://www.abbaristudio.com",
      repo: "https://github.com/denizri17-design/abbari-website",
    },
    isPrivate: true,
    images: [
      "/projects/abbari-hero.webp",
      "/projects/abbari-rooms.webp",
      "/projects/abbari-bricko.webp",
      "/projects/abbari-linko.webp",
      "/projects/abbari-nextstep.webp",
      "/projects/abbari-ourfit.webp",
    ],
    imageFit: "cover",
    cover: {
      gradient: "from-amber-500/30 via-stone-800/20 to-emerald-700/30",
      accent: "ring-amber-400/40",
      icon: "Trees",
    },
  },
  {
    slug: "linko",
    name: "Linko",
    tagline: "A one-line puzzle game that shipped to the App Store with IAP and ads.",
    description:
      "Designed and shipped a path-puzzle game: generate solvable boards, run daily modes, take payments, and show ads. Seven languages and a full store-listing pipeline, not a prototype.",
    metrics: ["App Store", "IAP + ads", "7 languages", "Daily modes"],
    bullets: [
      "Expo SDK 54 + expo-router (file-based routing)",
      "Pure-TS puzzle engine with seeded RNG",
      "expo-iap (StoreKit + Play Billing) + AdMob rewarded/interstitial",
      "i18n in 7 languages, EAS build + submit pipeline",
    ],
    category: ["mobile", "game"],
    year: "2026",
    status: "shipped",
    stack: [
      "Expo SDK 54",
      "React Native",
      "TypeScript",
      "expo-router",
      "expo-iap",
      "AdMob",
      "i18next",
    ],
    links: {
      appStore: "https://apps.apple.com/us/app/linko-one-line-path/id6774304399",
      repo: "https://github.com/denizri17-design/linko",
    },
    isPrivate: true,
    images: ["/projects/linko-cinematic.webp", "/projects/linko-cleared.webp"],
    imageFit: "cover",
    cover: {
      gradient: "from-pink-500/30 via-fuchsia-500/15 to-violet-500/30",
      accent: "ring-pink-400/40",
      icon: "Spline",
    },
  },
  {
    slug: "bricko-game",
    name: "Bricko",
    tagline: "An indie game that made it through App Store review, not just a demo build.",
    description:
      "Shipped the first Abbari Studio title: a React Native game loop, Python tooling for assets, and the store pipeline. Built to be played, listed, and updated.",
    metrics: ["App Store", "React Native", "Store pipeline", "Abbari Studio"],
    bullets: [
      "React Native + Expo, game loop in TypeScript",
      "Python asset/level generation scripts",
      "Unity (C#) for prototyping additional 2D/3D modes",
      "App Store + Google Play release pipeline",
    ],
    category: ["mobile", "game"],
    year: "2026",
    status: "shipped",
    stack: ["React Native", "Expo", "TypeScript", "Unity", "C#", "Python"],
    links: {
      appStore: "https://apps.apple.com/us/app/bricko-brick-photo-art/id6768135258",
      repo: "https://github.com/denizri17-design/bricko-game",
    },
    isPrivate: true,
    images: ["/projects/bricko-cinematic.webp", "/projects/bricko-garden.webp"],
    imageFit: "cover",
    cover: {
      gradient: "from-cyan-500/30 via-sky-500/15 to-blue-500/30",
      accent: "ring-cyan-400/40",
      icon: "Gamepad2",
    },
  },
  {
    slug: "skallix_mobile",
    name: "Skallix Mobile",
    tagline: "The Skallix CRM in a phone — funnel, jobs, and money in one drawer.",
    description:
      "Built the companion so owners and managers check conversion, leads, and jobs from the field. Market switcher, period dashboards, and the same modules as the desktop CRM.",
    metrics: ["App Store", "KPI funnel", "Multi-market", "Full CRM modules"],
    bullets: [
      "Expo + React Native, JWT auth against the Skallix CRM API",
      "Market switcher (multi-region) in the side drawer",
      "Period-scoped dashboard (Today / Week / Month / Quarter / Year)",
      "Lead → Opportunity → Production → Collection conversion funnel",
    ],
    category: ["mobile"],
    year: "2025",
    status: "shipped",
    stack: ["Expo", "React Native", "JavaScript"],
    links: {
      appStore: "https://apps.apple.com/us/app/skallix-crm/id6762063674",
      repo: "https://github.com/denizri17-design/skallix_mobile",
    },
    isPrivate: true,
    images: [
      "/projects/skallix-dashboard.webp",
      "/projects/skallix-mobile-dashboard.webp",
    ],
    imageFit: "cover",
    cover: {
      gradient: "from-indigo-500/30 via-blue-500/15 to-cyan-500/30",
      accent: "ring-indigo-400/40",
      icon: "Smartphone",
    },
  },
];
