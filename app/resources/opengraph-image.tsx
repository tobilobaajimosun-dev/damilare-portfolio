import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/metadata";

export const alt = "Resources — Oshokoya Damilare";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fafafa",
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
        <div
          style={{
            fontSize: 22,
            color: "#C4893A",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Resources
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 700,
            color: "#111111",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#666666",
            letterSpacing: "0.04em",
          }}
        >
          Books · Speaking · Mentorship
        </div>
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 80,
            fontSize: 18,
            color: "#C4893A",
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
