import { ImageResponse } from "next/og";

export const runtime = "edge";

const NAME = "DecisionGraph Core";
const TAGLINE = "Deterministic kernel for replayable human decisions";

export async function GET(req: Request) {
  // Same-origin fetch (works on Edge)
  const regularUrl = new URL("/fonts/PTSerif-Regular.ttf", req.url);
  const boldUrl = new URL("/fonts/PTSerif-Bold.ttf", req.url);

  const [regular, bold] = await Promise.all([
    fetch(regularUrl).then((r) => r.arrayBuffer()),
    fetch(boldUrl).then((r) => r.arrayBuffer()),
  ]);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc",
        color: "#0f172a",
        fontFamily: "system-ui",
      }}
    >
      {/* Graph mark */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#94a3b8",
          }}
        />
        <div style={{ width: 80, height: 2, background: "#94a3b8" }} />
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#94a3b8",
          }}
        />
      </div>

      {/* Brand (serif) */}
      <div style={{ fontFamily: "BrandSerif", fontSize: 72, fontWeight: 400 }}>
        {NAME}
      </div>

      {/* Tagline (sans) */}
      <div style={{ marginTop: 20, fontSize: 28, color: "#64748b" }}>
        {TAGLINE}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "BrandSerif", data: regular, weight: 400, style: "normal" },
        { name: "BrandSerif", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
