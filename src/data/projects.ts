export type ProjectCategory = "saas" | "crm" | "mobile" | "web" | "game";

export type Project = {
  slug: string;
  name: string;
  tagline: { en: string; ru: string };
  description: { en: string; ru: string };
  bullets: { en: string[]; ru: string[] };
  category: ProjectCategory[];
  year: string;
  status: "shipped" | "in-production" | "live";
  stack: string[];
  links: {
    live?: string;
    repo?: string;
  };
  isPrivate: boolean;
  /** Tailwind gradient classes used for the card cover when no screenshot is available. */
  cover: {
    gradient: string;
    accent: string;
    icon: string; // lucide icon name
  };
};

export const projects: Project[] = [
  {
    slug: "nextstep",
    name: "NextStep",
    tagline: {
      en: "AI Career Copilot — from job search to job offer.",
      ru: "AI-копилот для карьеры — от поиска работы до оффера.",
    },
    description: {
      en: "A full AI career platform: resume builder, multi-judge LLM feedback, job tracker, interview coach. Next.js 15 web + Expo mobile + FastAPI backend + Supabase + Stripe billing, localized in 5 languages.",
      ru: "Полноценная AI-платформа для карьеры: конструктор резюме, обратная связь от нескольких LLM-«судей», трекер вакансий, тренер собеседований. Next.js 15 + Expo + FastAPI + Supabase + Stripe, локализация на 5 языков.",
    },
    bullets: {
      en: [
        "Turborepo monorepo: Next.js 15 web, Expo SDK 52 mobile, FastAPI backend",
        "Multi-judge LLM pipeline with versioned prompts package",
        "Supabase auth + RLS, Stripe billing, demo preview mode",
        "5 locales: EN, ES, PT, HI, RU",
      ],
      ru: [
        "Монорепо на Turborepo: Next.js 15, Expo SDK 52, FastAPI",
        "LLM-пайплайн с несколькими «судьями» и версионированными промптами",
        "Supabase + RLS, биллинг Stripe, demo preview-режим",
        "5 локалей: EN, ES, PT, HI, RU",
      ],
    },
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
    cover: {
      gradient: "from-violet-500/30 via-fuchsia-500/15 to-cyan-500/30",
      accent: "ring-violet-400/40",
      icon: "Sparkles",
    },
  },
  {
    slug: "skallix-crm",
    name: "Skallix CRM",
    tagline: {
      en: "Multi-tenant CRM for roofing companies.",
      ru: "Multi-tenant CRM для кровельных компаний.",
    },
    description: {
      en: "End-to-end business OS for roofing contractors: leads, clients, jobs, estimates & invoices, appointments, RBAC, multi-company tenancy, marketing analytics. Ships at skallix.com.",
      ru: "Полная операционная система для кровельщиков: лиды, клиенты, заказы, сметы и счета, календарь, RBAC, multi-tenant, маркетинг-аналитика. Прод: skallix.com.",
    },
    bullets: {
      en: [
        "Multi-department architecture (Marketing + CRM)",
        "Role-based access control (Owner / Manager / Sales / Office)",
        "Multi-tenant: many companies, isolated data",
        "Door-knocking module with map + native mobile app",
      ],
      ru: [
        "Multi-department: маркетинг + CRM",
        "RBAC (Owner / Manager / Sales / Office)",
        "Multi-tenant: несколько компаний, изолированные данные",
        "Модуль door-knocking с картой и нативным мобильным клиентом",
      ],
    },
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
      repo: "https://github.com/denizri17-design/skallix-crm",
    },
    isPrivate: true,
    cover: {
      gradient: "from-emerald-500/30 via-sky-500/15 to-indigo-500/30",
      accent: "ring-emerald-400/40",
      icon: "Building2",
    },
  },
  {
    slug: "skallix-doorknocking-mobile",
    name: "Skallix Doorknocking",
    tagline: {
      en: "Native iOS + Android field-rep app for the Skallix CRM.",
      ru: "Нативное iOS + Android приложение для полевых агентов Skallix CRM.",
    },
    description: {
      en: "Standalone mobile app for door-to-door sales reps. Native Mapbox SDK on both platforms, photo capture, JWT auth, runtime backend switching, ships to App Store + Google Play as com.skallix.doorknocking.",
      ru: "Отдельное мобильное приложение для агентов «от двери до двери». Нативный Mapbox SDK на обеих платформах, съёмка фото, JWT-авторизация, переключение бэкенда без ребилда. В App Store + Google Play как com.skallix.doorknocking.",
    },
    bullets: {
      en: [
        "Expo SDK 54, React Native 0.81, React 19",
        "Native Mapbox via @rnmapbox/maps (iOS + Android)",
        "JWT in expo-secure-store, axios interceptors, 401 auto-logout",
        "Pin disposition, knocks feed, KPI dashboard, photo upload",
      ],
      ru: [
        "Expo SDK 54, React Native 0.81, React 19",
        "Нативный Mapbox через @rnmapbox/maps (iOS + Android)",
        "JWT в expo-secure-store, axios-интерсепторы, авто-логаут на 401",
        "Маркеры по диспозициям, лента стуков, KPI-дашборд, аплоад фото",
      ],
    },
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
    cover: {
      gradient: "from-orange-500/30 via-rose-500/15 to-amber-500/30",
      accent: "ring-orange-400/40",
      icon: "MapPin",
    },
  },
  {
    slug: "dlgplatform",
    name: "DLG Platform",
    tagline: {
      en: "Custom CRM platform built on Laravel.",
      ru: "Кастомная CRM-платформа на Laravel.",
    },
    description: {
      en: "PHP/Laravel-based CRM platform with a TypeScript-augmented admin surface. Custom workflows, dashboards and data import pipelines for an internal operations team.",
      ru: "CRM-платформа на PHP/Laravel с TypeScript-админкой. Кастомные воркфлоу, дашборды и пайплайны импорта данных для внутренней операционной команды.",
    },
    bullets: {
      en: [
        "Laravel 11 with Blade + custom TypeScript modules",
        "Role-based permissions, audit logging",
        "CSV / Excel import & export pipelines",
        "Hosted on a Hetzner VPS, deployed via Forge",
      ],
      ru: [
        "Laravel 11 + Blade и кастомные TypeScript-модули",
        "RBAC и лог аудита",
        "Пайплайны импорта/экспорта CSV / Excel",
        "Деплой на Hetzner VPS через Forge",
      ],
    },
    category: ["crm"],
    year: "2025",
    status: "in-production",
    stack: ["Laravel", "PHP", "Blade", "TypeScript", "MySQL"],
    links: { repo: "https://github.com/denizri17-design/dlgplatform" },
    isPrivate: true,
    cover: {
      gradient: "from-slate-400/20 via-zinc-500/10 to-stone-500/20",
      accent: "ring-zinc-400/40",
      icon: "Database",
    },
  },
  {
    slug: "public-adjuster",
    name: "Public Adjuster SaaS",
    tagline: {
      en: "SaaS platform for public insurance adjusters.",
      ru: "SaaS-платформа для public insurance adjuster-ов.",
    },
    description: {
      en: "End-to-end SaaS for public adjusters: claims pipeline, client + carrier directory, document generation, signature flows. Laravel + Blade with a polished admin UI.",
      ru: "SaaS для public adjuster-ов: пайплайн страховых случаев, справочник клиентов и страховщиков, генерация документов, флоу подписания. Laravel + Blade с проработанной админкой.",
    },
    bullets: {
      en: [
        "Claims lifecycle with statuses, assignees, deadlines",
        "PDF generation + e-signature flows",
        "Carrier / agent / client directories",
        "Calendar + task automation",
      ],
      ru: [
        "Цикл claim-ов: статусы, ответственные, дедлайны",
        "Генерация PDF + e-signature",
        "Справочники страховщиков, агентов, клиентов",
        "Календарь и автоматизация задач",
      ],
    },
    category: ["saas", "crm"],
    year: "2025",
    status: "live",
    stack: ["Laravel", "PHP", "Blade", "MySQL", "Tailwind"],
    links: { repo: "https://github.com/denizri17-design/public-adjuster" },
    isPrivate: true,
    cover: {
      gradient: "from-teal-500/30 via-emerald-500/15 to-cyan-500/30",
      accent: "ring-teal-400/40",
      icon: "ShieldCheck",
    },
  },
  {
    slug: "mv-auto-body-site",
    name: "M&V Auto Body",
    tagline: {
      en: "Animated multilingual website + internal staff CRM.",
      ru: "Анимированный мультиязычный сайт + внутренняя CRM для команды.",
    },
    description: {
      en: "Public marketing site for an auto-body shop in North Hollywood with a private staff CRM hidden behind a footer lock icon. 3 languages, dark theme with emerald accents, Recharts financial dashboard, Vercel Blob document storage.",
      ru: "Публичный сайт автомастерской в North Hollywood + приватная CRM команды под значком замка в футере. 3 языка, тёмная тема с изумрудными акцентами, финансовый дашборд на Recharts, документы в Vercel Blob.",
    },
    bullets: {
      en: [
        "Next.js 16 (App Router) + React 19 + Tailwind v4",
        "i18n EN / ES / RU with first-visit modal + autodetect",
        "Drizzle + Vercel Postgres, RBAC (Owner / Manager)",
        "Client cards: claims, notes, files, transactions, reports",
      ],
      ru: [
        "Next.js 16 (App Router) + React 19 + Tailwind v4",
        "i18n EN / ES / RU с модалкой при первом визите и автодетектом",
        "Drizzle + Vercel Postgres, RBAC (Owner / Manager)",
        "Карточки клиентов: claims, заметки, файлы, транзакции, отчёты",
      ],
    },
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
    cover: {
      gradient: "from-emerald-500/30 via-green-500/15 to-lime-500/30",
      accent: "ring-emerald-400/40",
      icon: "Car",
    },
  },
  {
    slug: "abbari-website",
    name: "Abbari Studio",
    tagline: {
      en: "Marketing site for an indie game studio.",
      ru: "Маркетинговый сайт инди игровой студии.",
    },
    description: {
      en: "Forest-themed marketing & legal site for Abbari Studio (Bricko, Linko, …). Animated hero with chipmunks, butterflies, sun rays and looping forest ambience. App-Store-ready privacy + terms pages, press kit, support flow.",
      ru: "Маркетинговый сайт студии Abbari (Bricko, Linko, …) в лесной эстетике. Анимированный hero с бурундуками, бабочками, лучами солнца и зацикленным эмбиентом леса. Privacy + Terms готовые для App Store, press-kit, support-флоу.",
    },
    bullets: {
      en: [
        "Next.js 16 + Tailwind v4 (CSS-first, no config)",
        "Framer Motion + GSAP animations",
        "Howler.js forest ambience with sound toggle",
        "Sitemap, robots, OG, JSON-LD",
      ],
      ru: [
        "Next.js 16 + Tailwind v4 (CSS-first, без конфига)",
        "Анимации на Framer Motion + GSAP",
        "Эмбиент леса через Howler.js с переключателем звука",
        "Sitemap, robots, OG, JSON-LD",
      ],
    },
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
    cover: {
      gradient: "from-lime-500/30 via-emerald-500/15 to-amber-500/30",
      accent: "ring-lime-400/40",
      icon: "Trees",
    },
  },
  {
    slug: "linko",
    name: "Linko",
    tagline: {
      en: "One-line path puzzle game for iOS + Android.",
      ru: "Головоломка «одна линия» для iOS + Android.",
    },
    description: {
      en: "LinkedIn-Zip-style puzzle game: draw one continuous path through all numbered dots. Hamiltonian-path generator with Warnsdorff's heuristic, daily/weekly modes, IAP, AdMob, 7 locales, full ASO + screenshots pipeline.",
      ru: "Головоломка в духе LinkedIn Zip: одна непрерывная линия через все пронумерованные точки. Генератор Гамильтонова пути с эвристикой Warnsdorff, daily/weekly режимы, IAP, AdMob, 7 локалей, полный ASO-пайплайн + скриншоты.",
    },
    bullets: {
      en: [
        "Expo SDK 54 + expo-router (file-based routing)",
        "Pure-TS puzzle engine with seeded RNG",
        "expo-iap (StoreKit + Play Billing) + AdMob rewarded/interstitial",
        "i18n in 7 languages, EAS build + submit pipeline",
      ],
      ru: [
        "Expo SDK 54 + expo-router (file-based routing)",
        "Pure-TS движок головоломки с seed-RNG",
        "expo-iap (StoreKit + Play Billing) + AdMob rewarded/interstitial",
        "i18n в 7 языках, EAS build + submit пайплайн",
      ],
    },
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
    links: { repo: "https://github.com/denizri17-design/linko" },
    isPrivate: true,
    cover: {
      gradient: "from-pink-500/30 via-fuchsia-500/15 to-violet-500/30",
      accent: "ring-pink-400/40",
      icon: "Spline",
    },
  },
  {
    slug: "bricko-game",
    name: "Bricko",
    tagline: {
      en: "Indie mobile game on iOS + Android.",
      ru: "Инди мобильная игра на iOS + Android.",
    },
    description: {
      en: "Mobile game built with React Native + TypeScript and a small Python tooling layer for asset generation. First title from Abbari Studio.",
      ru: "Мобильная игра на React Native + TypeScript с небольшим Python-слоем для генерации ассетов. Первый тайтл студии Abbari.",
    },
    bullets: {
      en: [
        "React Native + Expo, game loop in TypeScript",
        "Python asset/level generation scripts",
        "App Store + Google Play release pipeline",
        "Marketing site at abbaristudio.com",
      ],
      ru: [
        "React Native + Expo, игровой цикл на TypeScript",
        "Python-скрипты генерации ассетов / уровней",
        "Релизный пайплайн в App Store + Google Play",
        "Маркетинг-сайт: abbaristudio.com",
      ],
    },
    category: ["mobile", "game"],
    year: "2026",
    status: "shipped",
    stack: ["React Native", "Expo", "TypeScript", "Python"],
    links: { repo: "https://github.com/denizri17-design/bricko-game" },
    isPrivate: true,
    cover: {
      gradient: "from-cyan-500/30 via-sky-500/15 to-blue-500/30",
      accent: "ring-cyan-400/40",
      icon: "Gamepad2",
    },
  },
  {
    slug: "skallix_mobile",
    name: "Skallix Mobile",
    tagline: {
      en: "Companion mobile app for the Skallix CRM.",
      ru: "Companion-приложение для Skallix CRM.",
    },
    description: {
      en: "Earlier React Native + Expo companion app for the Skallix CRM, focused on lightweight on-the-go workflows for managers and reps.",
      ru: "Ранний companion-клиент Skallix CRM на React Native + Expo: лёгкие on-the-go воркфлоу для менеджеров и агентов.",
    },
    bullets: {
      en: [
        "Expo + React Native",
        "JWT auth against the Skallix CRM API",
        "Lightweight, optimized for low-bandwidth field use",
      ],
      ru: [
        "Expo + React Native",
        "JWT-авторизация против API Skallix CRM",
        "Лёгкий, оптимизирован для слабой связи в полях",
      ],
    },
    category: ["mobile"],
    year: "2025",
    status: "shipped",
    stack: ["Expo", "React Native", "JavaScript"],
    links: { repo: "https://github.com/denizri17-design/skallix_mobile" },
    isPrivate: true,
    cover: {
      gradient: "from-indigo-500/30 via-blue-500/15 to-cyan-500/30",
      accent: "ring-indigo-400/40",
      icon: "Smartphone",
    },
  },
];
