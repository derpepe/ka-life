import React from "react";
import { Link } from "wouter";
import KaLifeLogo from "@/components/brand/ka-life-logo";

export default function Header() {
  return (
    <header
      style={{
        background: "white",
        borderBottom: "1px solid #e5e7eb",
        padding: "16px 24px",
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
          <KaLifeLogo size={36} showText={true} />
        </Link>
        <div style={{ flex: 1 }} />
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <Link
            href="/ueber"
            data-testid="nav-ueber"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 14,
              color: "#6b7280",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#111827")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
          >
            {"\u00DCber"}
          </Link>
          <Link
            href="/impressum"
            data-testid="nav-impressum"
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 14,
              color: "#6b7280",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#111827")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
          >
            Impressum
          </Link>
        </nav>
      </div>
    </header>
  );
}
