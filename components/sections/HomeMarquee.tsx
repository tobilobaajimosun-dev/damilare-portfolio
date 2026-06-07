import { Landmark } from "lucide-react";

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
    <div className="overflow-hidden border-y border-border bg-primary/[0.04] py-4 flex flex-col gap-3.5 select-none">

      {/* Row 1 — scrolls left */}
      <div className="flex">
        <div
          className="flex shrink-0 gap-12"
          style={{ animation: "marquee 24s linear infinite" }}
        >
          {track.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 text-primary text-[0.6rem] tracking-[0.28em] uppercase whitespace-nowrap font-medium"
            >
              <Landmark size={11} strokeWidth={1.5} className="shrink-0 opacity-60" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex">
        <div
          className="flex shrink-0 gap-12"
          style={{ animation: "marquee 24s linear infinite reverse" }}
        >
          {track.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 text-primary/50 text-[0.6rem] tracking-[0.28em] uppercase whitespace-nowrap font-medium"
            >
              <Landmark size={11} strokeWidth={1.5} className="shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
