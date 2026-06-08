export function BackgroundPattern({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  // Light: dark lines on pale bg. Dark: white lines on deep bg — higher opacity for visibility.
  const line = variant === "light"
    ? "rgba(0,0,0,0.025)"
    : "rgba(255,255,255,0.06)";
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className ?? ""}`}
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${line} 0px, ${line} 1px, transparent 1px, transparent 24px)`,
      }}
      aria-hidden
    />
  );
}
