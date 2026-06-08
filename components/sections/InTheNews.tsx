import { ArrowUpRight } from "lucide-react";
import { press } from "@/content/press";

async function fetchOGImage(url: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.microlink.io?url=${encodeURIComponent(url)}`,
      { next: { revalidate: 86400 } }
    );
    const data = await res.json();
    return (data?.data?.image?.url as string) ?? null;
  } catch {
    return null;
  }
}

export async function InTheNews() {
  const pressWithImages = await Promise.all(
    press.map(async (item) => ({
      ...item,
      ogImage: await fetchOGImage(item.url),
    }))
  );

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-background">
      <div className="mx-auto w-full max-w-[var(--container-default)]">
        <div className="flex flex-col gap-3 mb-10">
          <p className="text-[0.65rem] tracking-[0.22em] uppercase text-primary font-sans">
            In The News
          </p>
          <h2 className="font-display font-normal text-[clamp(1.9rem,3.5vw,3rem)] tracking-tight text-foreground">
            Ideas in the{" "}
            <span className="text-muted-foreground">public square.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pressWithImages.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col border border-border rounded-2xl overflow-hidden hover:border-primary/25 hover:shadow-sm transition-all duration-300"
            >
              {/* OG image or outlet fallback */}
              <div className="aspect-[16/9] bg-surface relative overflow-hidden border-b border-border">
                {item.ogImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.ogImage}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6">
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground/50 font-sans text-center">
                      {item.outlet}
                    </span>
                  </div>
                )}
                {/* Outlet badge */}
                <span className="absolute bottom-2 left-3 text-[0.58rem] tracking-[0.18em] uppercase font-sans px-2 py-0.5 rounded bg-background/80 backdrop-blur-sm text-foreground/60 border border-border/50">
                  {item.outlet}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="font-display text-base font-normal text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                  {item.excerpt}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary mt-1">
                  Read article
                  <ArrowUpRight size={12} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
