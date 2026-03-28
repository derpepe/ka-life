import React from "react";
import { Link } from "wouter";
import KaLifeLogo from "@/components/brand/ka-life-logo";

export default function Header() {
  return (
    <header
      style={{
        background: "white",
        borderBottom: "1px solid #f0f0f0",
        padding: "14px 24px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <KaLifeLogo size={32} showText={true} />
        </Link>
        <div style={{ flex: 1 }} />
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <Link
            href="/ueber"
            data-testid="nav-ueber"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "#9ca3af",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#111827")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9ca3af")}
          >
            {"\u00DCber"}
          </Link>
          <Link
            href="/impressum"
            data-testid="nav-impressum"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              color: "#9ca3af",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#111827")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9ca3af")}
          >
            Impressum
          </Link>
        </nav>
      </div>
    </header>
  );
}
