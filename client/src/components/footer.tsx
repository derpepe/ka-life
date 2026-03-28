import React from "react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e7eb",
        padding: "24px",
        textAlign: "center",
        marginTop: 40,
      }}
    >
      <p
        style={{
          fontFamily: "'Source Sans 3', sans-serif",
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
        <span style={{ color: "#d1d5db" }}>{"\u00B7"}</span>
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
        <span style={{ color: "#d1d5db" }}>{"\u00B7"}</span>
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
      </p>
    </footer>
  );
}
