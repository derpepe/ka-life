import React from "react";
import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Impressum() {
  return (
    <div
      data-testid="impressum-page"
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
            Rechtliches
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
            Impressum
          </h1>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>

          <section>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              {"Angaben gem\u00E4\u00DF \u00A7 5 TMG"}
            </h2>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#4b5563",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: "0 0 2px", fontWeight: 600 }}>Decisions Made Easy GmbH</p>
              <p style={{ margin: "0 0 2px" }}>{"H\u00E4ndelstra\u00DFe 18"}</p>
              <p style={{ margin: "0 0 2px" }}>76185 Karlsruhe</p>
              <p style={{ margin: "0 0 2px" }}>Deutschland</p>
            </div>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              Vertreten durch
            </h2>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#4b5563",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: 0 }}>{"Peter Schneider (Gesch\u00E4ftsf\u00FChrer)"}</p>
            </div>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              Kontakt
            </h2>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#4b5563",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: "0 0 2px" }}>
                {"Telefon: "}
                <a href="tel:+4915115773041" style={{ color: "#1a5c3a", textDecoration: "none" }}>
                  +49 151 15 77 3041
                </a>
              </p>
              <p style={{ margin: "0 0 2px" }}>
                {"E-Mail: "}
                <a href="mailto:ka-life@pjs.de" style={{ color: "#1a5c3a", textDecoration: "none" }}>
                  ka-life@pjs.de
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              Registereintrag
            </h2>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#4b5563",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: "0 0 2px" }}>{"Registergericht: Amtsgericht Mannheim"}</p>
              <p style={{ margin: "0 0 2px" }}>{"Registernummer: HRB 753768"}</p>
            </div>
          </section>

          <section>
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              {"Verantwortlich f\u00FCr den Inhalt nach \u00A7 55 Abs. 2 RStV"}
            </h2>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: "#4b5563",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: "0 0 2px" }}>Peter Schneider</p>
              <p style={{ margin: "0 0 2px" }}>{"H\u00E4ndelstra\u00DFe 18"}</p>
              <p style={{ margin: "0 0 2px" }}>76185 Karlsruhe</p>
            </div>
          </section>

          {/* Datenschutz */}
          <section
            style={{
              background: "#fafafa",
              border: "1px solid #f0f0f0",
              borderRadius: 10,
              padding: "24px 28px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: "#111827",
                margin: "0 0 12px",
              }}
            >
              Datenschutz
            </h2>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "#4b5563",
                lineHeight: 1.8,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <p style={{ margin: 0 }}>
                {"Diese Website wird als statische Seite gehostet und setzt keine eigenen Cookies."}
              </p>
              <p style={{ margin: 0 }}>
                {"Es werden keine personenbezogenen Daten erhoben, gespeichert oder verarbeitet."}
              </p>
              <p style={{ margin: 0 }}>
                {"Die Website nutzt extern gehostete Schriftarten (Google Fonts). Dabei wird Ihre IP-Adresse an den Anbieter \u00FCbertragen. Mehr dazu in der Datenschutzerkl\u00E4rung von Google: "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1a5c3a", textDecoration: "underline", textUnderlineOffset: "2px" }}
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Back link */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid #f0f0f0" }}>
          <Link
            href="/"
            data-testid="back-to-overview-impressum"
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
