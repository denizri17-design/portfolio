import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio";
const siteUrl = "https://denizri17-design.github.io/portfolio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ri Abba — Fullstack Developer",
    template: "%s · Ri Abba",
  },
  description:
    "Fullstack developer building AI-powered SaaS, multi-tenant CRMs, native iOS/Android apps and indie games (React Native + Unity). Selected work from 2024–2026.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Ri Abba — Fullstack Developer",
    description:
      "AI SaaS · Multi-tenant CRMs · Native iOS/Android · Indie games (React Native + Unity).",
    url: siteUrl,
    siteName: "Ri Abba",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ri Abba — Fullstack Developer",
    description:
      "AI SaaS · Multi-tenant CRMs · Native iOS/Android · Indie games (React Native + Unity).",
  },
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a09",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
