import React from "react";
import { Link } from "wouter";
import { infographics } from "@/lib/infographic-data";
import SocialCard from "@/components/social-card";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
      <Header />

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
            maxWidth: 600,
            lineHeight: 1.6,
          }}
        >
          {"Jeden Samstag erscheint auf KA-Life eine neue Infografik rund um Karlsruhe: Daten, Fakten und satirische F\u00E4chertorten \u2013 zu den Themen, die die F\u00E4cherstadt bewegen. Von Bundesverfassungsgericht bis KSC, von KIT-Forschung bis Lokalpolitik, von bekannten Karlsruher Pers\u00F6nlichkeiten bis Kombil\u00F6sung."}
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

      <Footer />
    </div>
  );
}
