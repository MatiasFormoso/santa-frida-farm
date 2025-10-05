// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg,#ecfdf5,#f5fff9,#ffffff)",
          fontSize: 72,
          color: "#0f172a",
          fontWeight: 900,
          letterSpacing: "-0.02em",
        }}
      >
        Santa Frida Farm
      </div>
    ),
    { ...size }
  );
}
