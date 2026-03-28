import React from "react";
import { Link } from "wouter";
import { infographics } from "@/lib/infographic-data";
import SocialCard from "@/components/social-card";
import KaLifeLogo from "@/components/brand/ka-life-logo";

export default function Home() {
  return (
    <div
      data-testid="home-page"
      style={{
        minHeight: "100vh",
        background: "#f8f6f0",
        fontFamily: "'Source Sans 3', sans-serif",
      }}
    >
      {/* Header */}
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
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center" }}>
          <KaLifeLogo size={36} showText={true} />
        </div>
      </header>

      {/* Hero intro */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "48px 24px 32px",
        }}
      >
        <p
          style={{
            fontFamily: "'Source Sans 3', sans-serif",
            fontSize: 16,
            color: "#6b7280",
            margin: "0 0 40px",
            maxWidth: 540,
            lineHeight: 1.6,
          }}
        >
          {"Jeden Samstag eine neue Infografik aus der F\u00E4cherstadt. Daten, Fakten und Torten der Wahrheit \u2013 mit Karlsruhe-Bezug."}
        </p>

        {/* Grid */}
        <div
          data-testid="infographic-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {infographics.map((infographic) => (
            <Link
              key={infographic.id}
              href={`/kw/${infographic.id}`}
              data-testid={`infographic-link-${infographic.id}`}
              style={{
                textDecoration: "none",
                display: "block",
                borderRadius: 10,
                overflow: "hidden",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <SocialCard infographic={infographic} />
            </Link>
          ))}
        </div>

        {infographics.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
              color: "#9ca3af",
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 16,
            }}
          >
            Noch keine Infografiken vorhanden. Bald mehr.
          </div>
        )}
      </div>

      {/* Footer */}
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
          }}
        >
          ka-life.de &middot; Karlsruhe in Zahlen &middot; Jeden Samstag neu
        </p>
      </footer>
    </div>
  );
}
