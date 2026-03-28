import React from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div
      data-testid="about-page"
      style={{
        minHeight: "100vh",
        background: "#f8f6f0",
        fontFamily: "'Source Sans 3', sans-serif",
      }}
    >
      <Header />

      <main style={{ maxWidth: 780, margin: "0 auto", padding: "48px 24px 64px" }}>
        {/* Page title */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: "#2d6a4f",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 12px",
            }}
          >
            Karlsruhe in Zahlen
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 40,
              fontWeight: 700,
              color: "#111827",
              margin: "0 0 8px",
              lineHeight: 1.2,
            }}
          >
            {"\u00DCber KA-Life"}
          </h1>
          <div
            style={{
              width: 48,
              height: 3,
              background: "#2d6a4f",
              borderRadius: 2,
              marginTop: 16,
            }}
          />
        </div>

        {/* Content sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>

          {/* Was ist KA-Life? */}
          <section>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              Was ist KA-Life?
            </h2>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {"KA-Life ist eine w\u00F6chentliche Infografik-Kolumne \u00FCber Karlsruhe. Jeden Samstag beleuchten wir ein aktuelles Thema aus der F\u00E4cherstadt \u2013 mit Daten, Fakten und einer guten Portion satirischem Humor."}
            </p>
          </section>

          {/* Was erwartet dich? */}
          <section>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              Was erwartet dich?
            </h2>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {"Interaktive Infografiken zu den Themen, die Karlsruhe bewegen: Urteile vom Bundesverfassungsgericht und BGH, Forschung am KIT, der ewige Kampf des KSC, Lokalpolitik, Stadtentwicklung und Kombil\u00F6sung, lokale Wirtschaft, bekannte Karlsruher Pers\u00F6nlichkeiten und Kultur. Dazu gibt es jede Woche unsere F\u00E4chertorten \u2013 satirische Kreisdiagramme, inspiriert vom Karlsruher F\u00E4chergrundriss."}
            </p>
          </section>

          {/* Wer steckt dahinter? */}
          <section>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              Wer steckt dahinter?
            </h2>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {"KA-Life ist ein Projekt der Decisions Made Easy GmbH aus Karlsruhe. Die Infografiken werden automatisiert recherchiert und aufbereitet \u2013 die Themenauswahl und redaktionelle Bearbeitung erfolgt durch Menschen."}
            </p>
          </section>

          {/* Mitmachen & Feedback */}
          <section>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              {"Mitmachen \u0026 Feedback"}
            </h2>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {"Du hast ein Thema f\u00FCr eine Infografik? Schreib uns an "}
              <a
                href="mailto:peter@pjs.de"
                style={{ color: "#2d6a4f", textDecoration: "underline" }}
              >
                peter@pjs.de
              </a>
              {"."}
            </p>
          </section>

        </div>

        {/* Back link */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid #e5e7eb" }}>
          <Link
            href="/"
            data-testid="back-to-overview"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 14,
              color: "#6b7280",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#111827")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6b7280")}
          >
            {"\u2190 Zur\u00FCck zur \u00DCbersicht"}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
