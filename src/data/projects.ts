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
  /** Tailwind gradient + icon used as fallback / framing when image is absent. */
  cover: {
    gradient: string;
    accent: string;
    icon: string;
  };
};

export const projects: Project[] = [
  {
    slug: "nextstep",
    name: "NextStep",
    tagline: "AI Career Copilot — from job search to job offer.",
    description:
      "A full AI career platform: resume builder, multi-judge LLM feedback, job tracker, interview coach. Next.js 15 web + Expo mobile + FastAPI backend + Supabase + Stripe billing, localized in 5 languages.",
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
    links: { repo: "https://github.com/denizri17-design/nextstep" },
    isPrivate: true,
    images: [
      "/projects/nextstep-tracker.webp",
      "/projects/nextstep-resumes.webp",
    ],
    imageFit: "cover",
    cover: {
      gradient: "from-violet-500/30 via-fuchsia-500/15 to-cyan-500/30",
      accent: "ring-violet-400/40",
      icon: "Sparkles",
    },
  },
  {
    slug: "skallix-crm",
    name: "Skallix CRM",
    tagline: "Multi-tenant CRM for roofing companies.",
    description:
      "End-to-end business OS for roofing contractors: leads, clients, jobs, estimates & invoices, appointments, RBAC, multi-company tenancy, marketing analytics. Ships at skallix.com.",
    bullets: [
      "Multi-department architecture (Marketing + CRM)",
      "Role-based access control (Owner / Manager / Sales / Office)",
      "Multi-tenant: many companies, isolated data",
      "Door-knocking module with map + native mobile app",
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
      repo: "https://github.com/denizri17-design/skallix-crm",
    },
    isPrivate: true,
    image: "/projects/skallix-crm.webp",
    imageFit: "cover",
    cover: {
      gradient: "from-emerald-500/30 via-sky-500/15 to-indigo-500/30",
      accent: "ring-emerald-400/40",
      icon: "Building2",
    },
  },
  {
    slug: "skallix-doorknocking-mobile",
    name: "Skallix Doorknocking",
    tagline: "Native iOS + Android field-rep app for the Skallix CRM.",
    description:
      "Standalone mobile app for door-to-door sales reps. Native Mapbox SDK on both platforms, photo capture, JWT auth, runtime backend switching, ships to App Store + Google Play as com.skallix.doorknocking.",
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
    tagline: "Multi-department CRM for a service business at 11K+ jobs.",
    description:
      "Operations CRM running on real production data (11K+ jobs, multi-market). Clients, meetings, jobs board with status pipeline, call-center, sales, monitoring, SMS, reports. Role-based UI per department (Marketing / Sales / Call Center / Reports).",
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
    tagline: "SaaS platform for public insurance adjusters.",
    description:
      "End-to-end SaaS for public adjusters with a cinematic Le Petit Prince-themed auth flow (light + dark mode), claims pipeline, client + carrier directory, document generation and signature flows. Laravel + Blade with a polished admin UI.",
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
      live: "https://local-adjuster.com/admin/login",
      repo: "https://github.com/denizri17-design/public-adjuster",
    },
    isPrivate: true,
    images: [
      "/projects/public-adjuster.webp",
      "/projects/public-adjuster-light.webp",
    ],
    imageFit: "cover",
    cover: {
      gradient: "from-amber-500/30 via-orange-500/15 to-indigo-500/30",
      accent: "ring-amber-400/40",
      icon: "ShieldCheck",
    },
  },
  {
    slug: "mv-auto-body-site",
    name: "M&V Auto Body",
    tagline: "Animated multilingual website + internal staff CRM.",
    description:
      "Public marketing site for an auto-body shop in North Hollywood with a private staff CRM hidden behind a footer lock icon. 3 languages, dark theme with emerald accents, Recharts financial dashboard, Vercel Blob document storage.",
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
    image: "/projects/mv-auto-body.webp",
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
    tagline: "Marketing site for an indie game studio.",
    description:
      "Forest-themed marketing & legal site for Abbari Studio (Bricko, Linko, …). Animated hero with chipmunks, butterflies, sun rays and looping forest ambience. App-Store-ready privacy + terms pages, press kit, support flow.",
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
      live: "https://abbari-website.vercel.app",
      repo: "https://github.com/denizri17-design/abbari-website",
    },
    isPrivate: true,
    image: "/projects/abbari-website.webp",
    imageFit: "cover",
    cover: {
      gradient: "from-lime-500/30 via-emerald-500/15 to-amber-500/30",
      accent: "ring-lime-400/40",
      icon: "Trees",
    },
  },
  {
    slug: "linko",
    name: "Linko",
    tagline: "One-line path puzzle game for iOS + Android.",
    description:
      "LinkedIn-Zip-style puzzle game: draw one continuous path through all numbered dots. Hamiltonian-path generator with Warnsdorff's heuristic, daily/weekly modes, IAP, AdMob, 7 locales, full ASO + screenshots pipeline.",
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
    image: "/projects/linko.webp",
    imageFit: "contain",
    cover: {
      gradient: "from-pink-500/30 via-fuchsia-500/15 to-violet-500/30",
      accent: "ring-pink-400/40",
      icon: "Spline",
    },
  },
  {
    slug: "bricko-game",
    name: "Bricko",
    tagline: "Indie mobile game built in React Native + Unity tooling.",
    description:
      "Mobile game built with React Native + TypeScript, with Python tooling for asset generation and Unity for additional 2D/3D experiments. First title from Abbari Studio.",
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
    image: "/projects/bricko-game.webp",
    imageFit: "contain",
    cover: {
      gradient: "from-cyan-500/30 via-sky-500/15 to-blue-500/30",
      accent: "ring-cyan-400/40",
      icon: "Gamepad2",
    },
  },
  {
    slug: "skallix_mobile",
    name: "Skallix Mobile",
    tagline: "Companion mobile app for the Skallix CRM.",
    description:
      "React Native + Expo companion client for the Skallix CRM. Market-aware navigation (San Francisco / multi-region), dashboard with conversion funnel KPIs, lead-source breakdown, sales-rep performance, and full clients / leads / jobs / appointments / estimates / documents / finance / reports modules.",
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
      "/projects/skallix-mobile-dashboard.webp",
      "/projects/skallix-mobile-menu.webp",
    ],
    imageFit: "contain",
    cover: {
      gradient: "from-indigo-500/30 via-blue-500/15 to-cyan-500/30",
      accent: "ring-indigo-400/40",
      icon: "Smartphone",
    },
  },
];
