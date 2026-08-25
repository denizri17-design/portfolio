"use client";

import dynamic from "next/dynamic";

const Atmosphere = dynamic(
  () => import("./Atmosphere").then((m) => m.Atmosphere),
  { ssr: false, loading: () => null },
);

export function AtmosphereStage() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Atmosphere />
    </div>
  );
}
