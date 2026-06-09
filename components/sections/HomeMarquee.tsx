const baseItems = [
  "Entrepreneur",
  "Founder",
  "Mentor",
  "Speaker",
  "Author",
  "Builder",
];

// 5× repeat — ensures seamless loop on any viewport width
// Animation moves by -50% of total, which is exactly one full set
const track = Array.from({ length: 5 }, () => baseItems).flat();

export function HomeMarquee() {
  return (
    <div className="overflow-hidden border-y border-border/60 py-[14px] select-none">
      <div
        className="flex items-center"
        style={{
          animation: "marquee 45s linear infinite",
          willChange: "transform",
        }}
      >
        {track.map((label, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-[0.65rem] tracking-[0.12em] uppercase text-muted-foreground font-sans font-medium whitespace-nowrap px-8">
              {label}
            </span>
            <span
              aria-hidden
              className="w-[3px] h-[3px] rounded-full bg-primary/25 shrink-0"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
