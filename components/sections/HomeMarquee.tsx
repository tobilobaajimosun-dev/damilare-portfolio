import { Building2, Rocket, Users, Mic2, BookOpen, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const items: { label: string; Icon: LucideIcon }[] = [
  { label: "Entrepreneur", Icon: Building2 },
  { label: "Founder",      Icon: Rocket    },
  { label: "Mentor",       Icon: Users     },
  { label: "Speaker",      Icon: Mic2      },
  { label: "Author",       Icon: BookOpen  },
  { label: "Builder",      Icon: Wrench    },
];

// Doubled for seamless loop — animation translates by -50%
const track = [...items, ...items];

export function HomeMarquee() {
  return (
    <div className="overflow-hidden bg-primary/[0.04] py-5 flex flex-col gap-4 select-none">

      {/* Row 1 — scrolls left */}
      <div className="flex">
        <div
          className="flex shrink-0 gap-6"
          style={{ animation: "marquee 28s linear infinite" }}
        >
          {track.map(({ label, Icon }, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-5 py-2.5 border border-primary/20 rounded-xl bg-background text-primary text-[0.65rem] tracking-[0.22em] uppercase font-semibold whitespace-nowrap"
            >
              <Icon size={13} strokeWidth={1.5} className="shrink-0 opacity-70" />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="flex">
        <div
          className="flex shrink-0 gap-6"
          style={{ animation: "marquee 28s linear infinite reverse" }}
        >
          {track.map(({ label, Icon }, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 px-5 py-2.5 border border-primary/15 rounded-xl bg-background text-primary/60 text-[0.65rem] tracking-[0.22em] uppercase font-semibold whitespace-nowrap"
            >
              <Icon size={13} strokeWidth={1.5} className="shrink-0" />
              {label}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
