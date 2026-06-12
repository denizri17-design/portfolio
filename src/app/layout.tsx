import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/i18n/LangProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
    "Fullstack developer building AI-powered SaaS, multi-tenant CRMs, native mobile apps and beautifully animated web products. Selected work from 2024–2026.",
  metadataBase: new URL("https://riabba.dev"),
  openGraph: {
    title: "Ri Abba — Fullstack Developer",
    description:
      "AI SaaS · Multi-tenant CRMs · Native iOS/Android · Beautiful marketing sites.",
    url: "https://riabba.dev",
    siteName: "Ri Abba",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ri Abba — Fullstack Developer",
    description:
      "AI SaaS · Multi-tenant CRMs · Native iOS/Android · Beautiful marketing sites.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
