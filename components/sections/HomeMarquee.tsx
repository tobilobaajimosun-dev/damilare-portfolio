const items = [
  "Entrepreneur",
  "Founder",
  "Mentor",
  "Speaker",
  "Author",
  "Builder",
];

// Doubled for seamless loop — animation translates by -50%
const track = [...items, ...items];

export function HomeMarquee() {
  return (
    <div className="overflow-hidden border-y border-border/60 py-[14px] select-none">
      <div
        className="flex items-center"
        style={{ animation: "marquee 36s linear infinite" }}
      >
        {track.map((label, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-[0.65rem] tracking-[0.3em] uppercase text-muted-foreground font-sans font-medium whitespace-nowrap px-7">
              {label}
            </span>
            <span
              aria-hidden
              className="w-[3px] h-[3px] rounded-full bg-primary/30 shrink-0"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
