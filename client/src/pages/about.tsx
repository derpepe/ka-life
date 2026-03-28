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
        background: "#ffffff",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Header />

      <main style={{ maxWidth: 680, margin: "0 auto", padding: "56px 24px 64px" }}>
        {/* Page title */}
        <div style={{ marginBottom: 48 }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: "#1a5c3a",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 12px",
            }}
          >
            Karlsruhe in Zahlen
          </p>
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 32,
              fontWeight: 700,
              color: "#111827",
              margin: 0,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
            }}
          >
            {"\u00DCber KA-Life"}
          </h1>
        </div>

        {/* Content sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>

          <section>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#111827",
                margin: "0 0 10px",
              }}
            >
              Was ist KA-Life?
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#4b5563",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {"KA-Life ist eine w\u00F6chentliche Infografik-Kolumne \u00FCber Karlsruhe. Jeden Samstag beleuchten wir ein aktuelles Thema aus der F\u00E4cherstadt \u2013 mit Daten, Fakten und einer guten Portion satirischem Humor."}
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#111827",
                margin: "0 0 10px",
              }}
            >
              Was erwartet dich?
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#4b5563",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {"Interaktive Infografiken zu den Themen, die Karlsruhe bewegen: Urteile vom Bundesverfassungsgericht und BGH, Forschung am KIT, der ewige Kampf des KSC, Lokalpolitik, Stadtentwicklung und Kombil\u00F6sung, lokale Wirtschaft, bekannte Karlsruher Pers\u00F6nlichkeiten und Kultur. Dazu gibt es jede Woche unsere F\u00E4chertorten \u2013 satirische Kreisdiagramme, inspiriert vom Karlsruher F\u00E4chergrundriss."}
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#111827",
                margin: "0 0 10px",
              }}
            >
              Wer steckt dahinter?
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#4b5563",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {"KA-Life ist ein Projekt der Decisions Made Easy GmbH aus Karlsruhe. Die Infografiken werden automatisiert recherchiert und aufbereitet \u2013 die Themenauswahl und redaktionelle Bearbeitung erfolgt durch Menschen."}
            </p>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 18,
                fontWeight: 600,
                color: "#111827",
                margin: "0 0 10px",
              }}
            >
              {"Mitmachen \u0026 Feedback"}
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#4b5563",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {"Du hast ein Thema f\u00FCr eine Infografik? Schreib uns an "}
              <a
                href="mailto:ka-life@pjs.de"
                style={{ color: "#1a5c3a", textDecoration: "underline", textUnderlineOffset: "2px" }}
              >
                ka-life@pjs.de
              </a>
              {"."}
            </p>
          </section>

        </div>

        {/* Back link */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid #f0f0f0" }}>
          <Link
            href="/"
            data-testid="back-to-overview"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
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
            {"\u2190 Zur\u00FCck zur \u00DCbersicht"}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
