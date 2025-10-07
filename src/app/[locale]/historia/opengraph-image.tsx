// src/app/[locale]/historia/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05), rgba(0,0,0,0.55)), url(https://santa-frida-farm.vercel.app/images/history-maria-aguacates.jpg) center/cover no-repeat",
          color: "white",
          padding: "48px",
          fontSize: 60,
          fontWeight: 800,
          lineHeight: 1.05,
        }}
      >
        Historia — Santa Frida Farm
      </div>
    ),
    { ...size }
  );
}
