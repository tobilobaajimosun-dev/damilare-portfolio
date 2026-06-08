export function BackgroundPattern({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const c = variant === "light" ? "0,0,0" : "255,255,255";
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className ?? ""}`}
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, rgba(${c},0.025) 0px, rgba(${c},0.025) 1px, transparent 1px, transparent 24px)`,
      }}
      aria-hidden
    />
  );
}
