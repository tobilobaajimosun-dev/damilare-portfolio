import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/metadata";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const heroBuffer = await readFile(
    join(process.cwd(), "public/images/hero.jpg")
  );
  const heroSrc = `data:image/jpeg;base64,${heroBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "#C4893A",
          }}
        />

        {/* Hero portrait — right side */}
        <img
          src={heroSrc}
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "500px",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />

        {/* Gradient: dark left → transparent right, blends photo into bg */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to right, #111111 50%, rgba(17,17,17,0.1) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "72px 80px",
            width: "680px",
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "#C4893A",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: 22,
              fontFamily: "sans-serif",
            }}
          >
            Oshokoya Damilare
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                fontSize: 68,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                fontFamily: "Georgia, serif",
              }}
            >
              Entrepreneur.
            </div>
            <div
              style={{
                fontSize: 68,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                fontFamily: "Georgia, serif",
              }}
            >
              Founder.
            </div>
            <div
              style={{
                fontSize: 68,
                fontWeight: 700,
                color: "#C4893A",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                fontFamily: "Georgia, serif",
              }}
            >
              Strategist.
            </div>
          </div>

          <div
            style={{
              fontSize: 18,
              color: "#777777",
              fontFamily: "sans-serif",
              letterSpacing: "0.06em",
            }}
          >
            damilareoshokoya.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
