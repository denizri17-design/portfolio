"use client";

import dynamic from "next/dynamic";

const DeviceCanvas = dynamic(
  () => import("./DeviceCanvas").then((m) => m.DeviceCanvas),
  { ssr: false, loading: () => <div className="h-full w-full" /> },
);

export function DeviceStage({
  urls,
  kind,
}: {
  urls: string[];
  kind: "phone" | "screen";
}) {
  return (
    <div className="absolute inset-0">
      <DeviceCanvas urls={urls} kind={kind} />
    </div>
  );
}
