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
            Rechtliches
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
            Impressum
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

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>

          {/* Angaben gem. § 5 TMG */}
          <section>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 16px",
              }}
            >
              {"Angaben gem\u00E4\u00DF \u00A7 5 TMG"}
            </h2>
            <div
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: "0 0 4px", fontWeight: 600 }}>PJS GmbH</p>
              <p style={{ margin: "0 0 4px" }}>{"Wiesbadener Stra\u00DFe 50"}</p>
              <p style={{ margin: "0 0 4px" }}>76185 Karlsruhe</p>
              <p style={{ margin: "0 0 4px" }}>Deutschland</p>
            </div>
          </section>

          {/* Vertreten durch */}
          <section>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 16px",
              }}
            >
              Vertreten durch
            </h2>
            <div
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: "0 0 4px" }}>{"Peter Schneider (Gesch\u00E4ftsf\u00FChrer)"}</p>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 16px",
              }}
            >
              Kontakt
            </h2>
            <div
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: "0 0 4px" }}>
                {"Telefon: "}
                <a href="tel:+4915115773041" style={{ color: "#2d6a4f", textDecoration: "none" }}>
                  +49 151 15 77 3041
                </a>
              </p>
              <p style={{ margin: "0 0 4px" }}>
                {"E-Mail: "}
                <a href="mailto:peter@pjs.de" style={{ color: "#2d6a4f", textDecoration: "none" }}>
                  peter@pjs.de
                </a>
              </p>
            </div>
          </section>

          {/* Registereintrag */}
          <section>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 16px",
              }}
            >
              Registereintrag
            </h2>
            <div
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: "0 0 4px" }}>{"Registergericht: Amtsgericht Mannheim"}</p>
              <p style={{ margin: "0 0 4px" }}>{"Registernummer: HRB 753768"}</p>
            </div>
          </section>

          {/* Verantwortlich für Inhalt */}
          <section>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 16px",
              }}
            >
              {"Verantwortlich f\u00FCr den Inhalt nach \u00A7 55 Abs. 2 RStV"}
            </h2>
            <div
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.8,
              }}
            >
              <p style={{ margin: "0 0 4px" }}>Peter Schneider</p>
              <p style={{ margin: "0 0 4px" }}>{"Wiesbadener Stra\u00DFe 50"}</p>
              <p style={{ margin: "0 0 4px" }}>76185 Karlsruhe</p>
            </div>
          </section>

          {/* Datenschutz */}
          <section
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
              padding: "28px 32px",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 16px",
              }}
            >
              Datenschutz
            </h2>
            <div
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 16,
                color: "#374151",
                lineHeight: 1.8,
                display: "flex",
                flexDirection: "column",
                gap: 12,
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
                  style={{ color: "#2d6a4f", textDecoration: "underline" }}
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </div>
          </section>

        </div>

        {/* Back link */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid #e5e7eb" }}>
          <Link
            href="/"
            data-testid="back-to-overview-impressum"
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
