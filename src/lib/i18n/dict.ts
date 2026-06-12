export type Lang = "en" | "ru";

export const dict = {
  en: {
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
      titleC: ", multi-tenant CRMs",
      titleD: " and native mobile apps",
      titleE: "that ship.",
      subtitle:
        "Fullstack developer focused on production-grade products: pixel-perfect frontends in Next.js + React Native, AI backends in FastAPI/Node, and the boring-but-critical infra around them.",
      ctaWork: "See selected work",
      ctaContact: "Get in touch",
      stats: [
        { k: "10+", v: "Production products shipped" },
        { k: "5", v: "Languages localized to" },
        { k: "iOS + Android", v: "Native apps on stores" },
      ],
    },
    about: {
      kicker: "About",
      title: "Fullstack across the whole product surface.",
      body: [
        "I'm Ri — a fullstack developer who ships end-to-end products: from the marketing site and the Stripe-billed SaaS dashboard, all the way down to the FastAPI service, the Postgres schema, the iOS build, the App Store listing and the Vercel deploy.",
        "Most of what I work on is private client work — CRMs for roofing, public-adjusting and auto-body shops, a multi-language AI career copilot, and two indie mobile games on iOS + Android. I care a lot about animation, accessibility, performance budgets, and that the code is still nice to read in six months.",
      ],
      highlights: [
        "Next.js 15 / 16 (App Router, RSC, Turbopack)",
        "React Native + Expo SDK 54 — shipped to App Store & Play",
        "FastAPI + Python · Node.js · Laravel/PHP",
        "Postgres / Supabase · MySQL · Drizzle ORM",
        "OpenAI / multi-judge LLM pipelines",
        "i18n in 7 locales (en, es, ru, pt, hi, …)",
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
        "All 10 of these are private client / personal projects. Live URLs and tech are linked where public.",
      filterAll: "All",
      filterSaas: "SaaS",
      filterCrm: "CRM",
      filterMobile: "Mobile",
      filterWeb: "Marketing",
      filterGame: "Games",
      live: "Live site",
      repo: "Repo",
      privateRepo: "Private repo",
      caseStudy: "Read more",
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
  },
  ru: {
    nav: {
      work: "Работы",
      about: "Обо мне",
      stack: "Стек",
      contact: "Связаться",
      hire: "Нанять",
    },
    hero: {
      eyebrow: "Открыт к фрилансу и full-time",
      titleA: "Делаю",
      titleB: "AI SaaS",
      titleC: ", multi-tenant CRM-системы",
      titleD: " и нативные мобильные приложения",
      titleE: "которые выходят в прод.",
      subtitle:
        "Фулстек разработчик. Делаю production-продукты целиком: pixel-perfect фронт на Next.js + React Native, AI бэк на FastAPI/Node и всю «скучно-но-критичную» инфраструктуру вокруг.",
      ctaWork: "Смотреть работы",
      ctaContact: "Написать",
      stats: [
        { k: "10+", v: "Продуктов в проде" },
        { k: "5", v: "Языков локализации" },
        { k: "iOS + Android", v: "Нативные приложения в сторах" },
      ],
    },
    about: {
      kicker: "Обо мне",
      title: "Закрываю продукт целиком — от лендинга до App Store.",
      body: [
        "Меня зовут Ri. Я фулстек, который делает продукт «под ключ»: маркетинговый сайт, SaaS-дашборд с биллингом Stripe, FastAPI-сервис, схема в Postgres, iOS-сборка, листинг в App Store и деплой на Vercel — всё на мне.",
        "Большая часть — приватная клиентская работа: CRM-ки для кровельщиков, public adjuster-ов и автомастерских; мультиязычный AI-копилот для карьеры; и две инди-игры на iOS + Android. Топлю за анимации, доступность, performance budgets и за то, чтобы код было приятно читать и через полгода.",
      ],
      highlights: [
        "Next.js 15 / 16 (App Router, RSC, Turbopack)",
        "React Native + Expo SDK 54 — выпущено в App Store и Play",
        "FastAPI + Python · Node.js · Laravel/PHP",
        "Postgres / Supabase · MySQL · Drizzle ORM",
        "OpenAI / multi-judge LLM-пайплайны",
        "i18n в 7 локалях (en, es, ru, pt, hi, …)",
      ],
    },
    stack: {
      kicker: "Стек",
      title: "Чем работаю.",
      subtitle:
        "Выбрано за скорость поставки, предсказуемость на масштабе и отсутствие vendor lock-in.",
    },
    work: {
      kicker: "Избранные работы",
      title: "Что собрал за последнее время.",
      subtitle:
        "Все 10 — клиентские/личные проекты. Ссылки и стек указаны там, где они публичные.",
      filterAll: "Все",
      filterSaas: "SaaS",
      filterCrm: "CRM",
      filterMobile: "Mobile",
      filterWeb: "Маркетинг",
      filterGame: "Игры",
      live: "Сайт",
      repo: "Репозиторий",
      privateRepo: "Приватный репо",
      caseStudy: "Подробнее",
    },
    contact: {
      kicker: "Контакты",
      title: "Есть продукт, который надо выпустить?",
      subtitle:
        "Беру небольшое количество новых проектов. Расскажи что строишь — отвечу в течение 24 часов.",
      emailCta: "Написать на почту",
      ghCta: "GitHub",
      copyEmail: "Скопировать email",
      copied: "Скопировано!",
    },
    footer: {
      built: "Сделано на Next.js 15, Tailwind v4 и Framer Motion.",
      backTop: "Наверх",
    },
  },
} as const;

export type Dict = (typeof dict)[Lang];
