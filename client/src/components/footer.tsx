import React from "react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #f0f0f0",
        padding: "24px",
        textAlign: "center",
        marginTop: 40,
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          color: "#9ca3af",
          margin: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <span>{"\u00A9 2026 Decisions Made Easy GmbH \u00B7 Karlsruhe"}</span>
        <span style={{ color: "#e5e7eb" }}>{"\u00B7"}</span>
        <Link
          href="/ueber"
          style={{
            color: "#9ca3af",
            textDecoration: "none",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9ca3af")}
        >
          {"\u00DCber KA-Life"}
        </Link>
        <span style={{ color: "#e5e7eb" }}>{"\u00B7"}</span>
        <Link
          href="/impressum"
          style={{
            color: "#9ca3af",
            textDecoration: "none",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9ca3af")}
        >
          Impressum
        </Link>
        <span style={{ color: "#e5e7eb" }}>{"\u00B7"}</span>
        <a
          href="/rss.xml"
          title="RSS-Feed abonnieren"
          aria-label="RSS-Feed"
          style={{
            color: "#9ca3af",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ea580c")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9ca3af")}
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 11a9 9 0 0 1 9 9" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <circle cx="5" cy="19" r="1.5" fill="currentColor" stroke="none" />
          </svg>
          RSS
        </a>
        <a
          href="/atom.xml"
          title="Atom-Feed abonnieren"
          aria-label="Atom-Feed"
          style={{
            color: "#9ca3af",
            textDecoration: "none",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9ca3af")}
        >
          Atom
        </a>
      </p>
    </footer>
  );
}
