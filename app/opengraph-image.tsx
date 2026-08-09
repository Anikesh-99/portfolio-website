import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.role}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0b0e14",
          color: "#e8e4da",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", color: "#ffb454", fontSize: 28 }}>
          ~/{site.firstName.toLowerCase()}
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginTop: 24 }}>
          {site.name}
        </div>
        <div style={{ display: "flex", color: "#8f95a0", fontSize: 32, marginTop: 20 }}>
          {site.role.toLowerCase()} · {site.tagline.toLowerCase()}
        </div>
        <div
          style={{
            marginTop: 48,
            height: 2,
            width: 160,
            backgroundColor: "#ffb454",
          }}
        />
      </div>
    ),
    size,
  );
}
