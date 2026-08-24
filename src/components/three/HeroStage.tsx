"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(
  () => import("./HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false, loading: () => <div className="h-full w-full" /> },
);

export function HeroStage() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <HeroCanvas />
    </div>
  );
}
