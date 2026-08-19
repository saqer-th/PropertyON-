import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "PropertyON operating system for Saudi real-estate offices";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const workspace = await readFile(path.join(process.cwd(), "public", "v2", "product", "property", "workspace-ar-desktop.png"));
  const arabicFont = await readFile(path.join(process.cwd(), "public", "fonts", "ibm-plex-sans-arabic-600.ttf"));
  const workspaceSrc = workspace.buffer.slice(workspace.byteOffset, workspace.byteOffset + workspace.byteLength) as ArrayBuffer;
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#040f1a", color: "#fff", fontFamily: "Arial, sans-serif" }}>
      <div style={{ position: "absolute", inset: 0, display: "flex", backgroundImage: "linear-gradient(rgba(105,229,180,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(105,229,180,.055) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      <div style={{ width: "50%", padding: "76px 0 68px 72px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", fontFamily: "Arial", fontSize: 34, fontWeight: 700, letterSpacing: "-1.5px" }}><span>Property</span><span style={{ color: "#69e5b4" }}>ON</span></div>
        <div dir="rtl" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 24, paddingRight: 36, fontFamily: "IBMPlexArabic", textAlign: "right" }}>
          <div style={{ display: "flex", color: "#69e5b4", fontSize: 20, fontWeight: 600 }}>السعودية في العقارية للمكاتب صُمم</div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 490, fontSize: 45, lineHeight: 1.22, fontWeight: 600 }}><span>العقاري. مكتبك عمليات كل</span><span>مترابطة. واحدة منظومة في</span></div>
          <div style={{ display: "flex", maxWidth: 470, color: "#b8c7cc", fontSize: 20, lineHeight: 1.6 }}>واحد. سياق في — والتقارير والمصروفات والسندات والتحصيلات والعقود العقارات</div>
        </div>
      </div>
      <div style={{ width: "50%", display: "flex", alignItems: "center", padding: "56px 42px 56px 18px" }}>
        <div style={{ width: "100%", height: 420, display: "flex", padding: 10, border: "1px solid rgba(105,229,180,.28)", borderRadius: 22, background: "rgba(255,255,255,.08)", boxShadow: "0 32px 70px rgba(0,0,0,.35)", transform: "rotate(-1.2deg)" }}>
          <img src={workspaceSrc as unknown as string} alt="" width="1440" height="900" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", borderRadius: 14 }} />
        </div>
      </div>
    </div>,
    { ...size, fonts: [{ name: "IBMPlexArabic", data: arabicFont.buffer.slice(arabicFont.byteOffset, arabicFont.byteOffset + arabicFont.byteLength) as ArrayBuffer, weight: 600, style: "normal" }] }
  );
}
