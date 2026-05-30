import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#4A2C1E",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "3px",
        }}
      >
        <span
          style={{
            color: "#C49A6C",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          AW
        </span>
      </div>
    ),
    { ...size }
  );
}
