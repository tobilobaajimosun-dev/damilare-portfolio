import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/metadata";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#171717",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "serif",
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
            background: "oklch(0.76 0.12 80)",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f9f9f9",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          {siteConfig.name}
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "oklch(0.65 0 0)",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Entrepreneur · Founder · Speaker
        </div>

        {/* Domain */}
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 80,
            fontSize: 18,
            color: "oklch(0.76 0.12 80)",
            letterSpacing: "0.08em",
          }}
        >
          damilareoshokoya.com
        </div>
      </div>
    ),
    { ...size }
  );
}
