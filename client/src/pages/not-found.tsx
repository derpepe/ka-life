import React from "react";
import { Link } from "wouter";
import KaLifeLogo from "@/components/brand/ka-life-logo";

export default function NotFound() {
  return (
    <div
      data-testid="not-found-page"
      style={{
        minHeight: "100vh",
        background: "#f8f6f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        fontFamily: "'Source Sans 3', sans-serif",
        padding: 24,
        textAlign: "center",
      }}
    >
      <KaLifeLogo size={48} showText={true} />

      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 80,
          fontWeight: 500,
          color: "#e5e7eb",
          lineHeight: 1,
          marginTop: 24,
        }}
      >
        404
      </div>

      <h1
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 28,
          fontWeight: 700,
          color: "#111827",
          margin: "8px 0 0",
        }}
      >
        Seite nicht gefunden
      </h1>

      <p
        style={{
          color: "#6b7280",
          fontSize: 15,
          margin: "8px 0 24px",
          maxWidth: 360,
          lineHeight: 1.5,
        }}
      >
        {"Diese Seite existiert nicht. Vielleicht wurde die Adresse ge\u00E4ndert oder die Infografik noch nicht ver\u00F6ffentlicht."}
      </p>

      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: "#2d6a4f",
          color: "white",
          padding: "10px 22px",
          borderRadius: 6,
          textDecoration: "none",
          fontWeight: 600,
          fontSize: 14,
          fontFamily: "'Source Sans 3', sans-serif",
          letterSpacing: "0.01em",
        }}
      >
        {"\u2190 Zur\u00FCck zur \u00DCbersicht"}
      </Link>
    </div>
  );
}
