import React from "react";
import { Link } from "wouter";
import KaLifeLogo from "@/components/brand/ka-life-logo";

export default function NotFound() {
  return (
    <div
      data-testid="not-found-page"
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        fontFamily: "'Inter', sans-serif",
        padding: 24,
        textAlign: "center",
      }}
    >
      <KaLifeLogo size={40} showText={true} />

      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 72,
          fontWeight: 600,
          color: "#e5e7eb",
          lineHeight: 1,
          marginTop: 32,
        }}
      >
        404
      </div>

      <h1
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 22,
          fontWeight: 600,
          color: "#111827",
          margin: "8px 0 0",
          letterSpacing: "-0.01em",
        }}
      >
        Seite nicht gefunden
      </h1>

      <p
        style={{
          color: "#6b7280",
          fontSize: 14,
          margin: "8px 0 28px",
          maxWidth: 340,
          lineHeight: 1.6,
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
          background: "#1a5c3a",
          color: "white",
          padding: "10px 22px",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: 600,
          fontSize: 13,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {"\u2190 Zur\u00FCck zur \u00DCbersicht"}
      </Link>
    </div>
  );
}
