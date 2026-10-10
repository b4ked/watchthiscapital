import { ImageResponse } from "next/og";
import { TAGLINE } from "@/lib/site";

export const alt = "Watch This Capital — Managed AI agents for business workflows";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#131313",
          padding: 72,
          borderLeft: "12px solid #26c6da",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#26c6da" }}>
          WATCH THIS CAPITAL
        </div>
        <div style={{ display: "flex", fontSize: 68, lineHeight: 1.05, letterSpacing: -2, color: "#ffffff", maxWidth: 980 }}>
          {TAGLINE}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#b0bec5" }}>
          Sourced · Approved by a person · Scored
        </div>
      </div>
    ),
    size
  );
}
