import React from "react";
import { Link, useParams } from "wouter";
import { getInfographicById } from "@/lib/infographic-data";
import InfographicView from "@/components/infographic-view";
import KaLifeLogo from "@/components/brand/ka-life-logo";

export default function InfographicPage() {
  const params = useParams<{ id: string }>();
  const infographic = getInfographicById(params.id || "");

  if (!infographic) {
    return (
      <div
        data-testid="infographic-not-found"
        style={{
          minHeight: "100vh",
          background: "#f8f6f0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          fontFamily: "'Source Sans 3', sans-serif",
          padding: 24,
          textAlign: "center",
        }}
      >
        <KaLifeLogo size={48} showText={true} />
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 32,
            fontWeight: 700,
            color: "#111827",
            margin: "16px 0 0",
          }}
        >
          Infografik nicht gefunden
        </h1>
        <p style={{ color: "#6b7280", fontSize: 16, margin: "8px 0 24px" }}>
          Die Ausgabe &bdquo;{params.id}&ldquo; existiert nicht.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "#2d6a4f",
            color: "white",
            padding: "10px 20px",
            borderRadius: 6,
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 14,
            fontFamily: "'Source Sans 3', sans-serif",
          }}
        >
          {"\u2190 Zur\u00FCck zur \u00DCbersicht"}
        </Link>
      </div>
    );
  }

  return (
    <div data-testid="infographic-page">
      {/* Back navigation bar */}
      <div
        style={{
          background: "white",
          borderBottom: "1px solid #e5e7eb",
          padding: "12px 16px",
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 16 }}>
          <Link
            href="/"
            data-testid="back-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#6b7280",
              textDecoration: "none",
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 14,
              fontWeight: 400,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#111827")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
          >
            &larr; Alle Ausgaben
          </Link>
          <div style={{ flex: 1 }} />
          <KaLifeLogo size={24} showText={false} />
        </div>
      </div>

      <InfographicView infographic={infographic} />
    </div>
  );
}
