import { ImageResponse } from "next/og";
import { site, defaultLocale } from "@/content/site";

export const runtime = "edge";
export const alt = site[defaultLocale].seo.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const surface = "#f3ece1";
  const ink = "#1a1a1a";
  const bronze = "#8a6a3b";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: surface,
          color: ink,
          display: "flex",
          flexDirection: "column",
          padding: 80,
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 6 }}>
          <span>DR. ANNA WITTICH</span>
          <span style={{ color: bronze }}>LABOR MARKET RESEARCH</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 140, lineHeight: 1, letterSpacing: -2, fontWeight: 700 }}>
            Architecting
          </div>
          <div style={{ fontSize: 140, lineHeight: 1, letterSpacing: -2, fontWeight: 700, color: bronze }}>
            Labor Markets.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 4 }}>
          <span>FUTURE OF WORK · AUTOMATION · RECRUITING</span>
          <span>annawittich.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
