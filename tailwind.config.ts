import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: "#fef8f8",
        "surface-bright": "#fef8f8",
        "stone-grey": "#EAE7DD",
        "paper-white": "#F4EFEB",
        primary: "#6b5a5a",
        "primary-dim": "#5f4f4f",
        "on-surface-variant": "#645e5e",
        secondary: "#655d5d",
        "bronze-accent": "#AB8867",
        "deep-obsidian": "#1A1816",
        "on-primary-container": "#5e4e4e",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        headline: ["var(--font-bebas)", "Impact", "sans-serif"],
        body: ["var(--font-hanken)", "ui-sans-serif", "system-ui", "sans-serif"],
        label: ["var(--font-hanken)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // The mockup uses fixed pixel values; we keep desktop values and
        // expose clamp()-based responsive helpers via CSS utilities below.
        "display-lg": [
          "clamp(64px, 9vw, 120px)",
          { lineHeight: "0.833", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        "display-lg-mobile": [
          "72px",
          { lineHeight: "68px", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        "headline-lg": [
          "clamp(40px, 6.5vw, 64px)",
          { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "400" },
        ],
        "headline-md": [
          "clamp(22px, 2.4vw, 32px)",
          { lineHeight: "1.15", letterSpacing: "0.08em", fontWeight: "400" },
        ],
        "body-lg": ["20px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.2em", fontWeight: "700" }],
        "stat-lg": [
          "clamp(120px, 18vw, 240px)",
          { lineHeight: "0.8", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        "stat-unit": [
          "clamp(64px, 9vw, 120px)",
          { lineHeight: "0.8", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
      },
      spacing: {
        "margin-edge": "clamp(20px, 5vw, 64px)",
        "section-gap": "clamp(80px, 12vw, 160px)",
        gutter: "32px",
        "container-max": "1440px",
      },
      maxWidth: {
        "screen-lg": "1024px",
        "screen-xl": "1280px",
        "screen-2xl": "1600px",
      },
      borderRadius: {
        DEFAULT: "0",
        sm: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
