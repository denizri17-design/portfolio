export function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[var(--color-bg)]" />
      <div className="absolute inset-0 bg-grid opacity-80" />
      <div
        className="absolute -left-24 top-[-10%] h-[520px] w-[520px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,156,255,0.16), transparent 72%)",
        }}
      />
      <div
        className="absolute -right-20 top-[28%] h-[480px] w-[480px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(110,243,197,0.12), transparent 72%)",
        }}
      />
      <div className="absolute inset-0 bg-noise" />
    </div>
  );
}
