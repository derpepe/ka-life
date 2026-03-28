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
        background: "#ffffff",
        fontFamily: "'Inter', sans-serif",
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
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            fontWeight: 400,
            color: "#6b7280",
            margin: "0 0 40px",
            maxWidth: 560,
            lineHeight: 1.7,
          }}
        >
          {"Jeden Samstag erscheint auf KA-Life eine neue Infografik rund um Karlsruhe: Daten, Fakten und satirische F\u00E4chertorten \u2013 zu den Themen, die die F\u00E4cherstadt bewegen."}
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
                borderRadius: 12,
                overflow: "hidden",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.08)";
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
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
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
