import React, { useState } from "react";
import { Link, useParams } from "wouter";
import { getInfographicById } from "@/lib/infographic-data";
import InfographicView from "@/components/infographic-view";
import KaLifeLogo from "@/components/brand/ka-life-logo";
import Footer from "@/components/footer";

export default function InfographicPage() {
  const params = useParams<{ id: string }>();
  const infographic = getInfographicById(params.id || "");
  const [copied, setCopied] = useState(false);

  if (!infographic) {
    return (
      <div
        data-testid="infographic-not-found"
        style={{
          minHeight: "100vh",
          background: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          fontFamily: "'Inter', sans-serif",
          padding: 24,
          textAlign: "center",
        }}
      >
        <KaLifeLogo size={40} showText={true} />
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 24,
            fontWeight: 600,
            color: "#111827",
            margin: "16px 0 0",
            letterSpacing: "-0.01em",
          }}
        >
          Infografik nicht gefunden
        </h1>
        <p style={{ color: "#6b7280", fontSize: 14, margin: "4px 0 24px" }}>
          Die Ausgabe &bdquo;{params.id}&ldquo; existiert nicht.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "#1a5c3a",
            color: "white",
            padding: "10px 20px",
            borderRadius: 8,
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 13,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {"\u2190 Zur\u00FCck zur \u00DCbersicht"}
        </Link>
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(infographic.socialPostText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div data-testid="infographic-page">
      {/* Back navigation bar */}
      <div
        style={{
          background: "white",
          borderBottom: "1px solid #f0f0f0",
          padding: "12px 16px",
          position: "sticky",
          top: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 16 }}>
          <Link
            href="/"
            data-testid="back-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#9ca3af",
              textDecoration: "none",
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 500,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#111827")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#9ca3af")}
          >
            &larr; Alle Ausgaben
          </Link>
          <div style={{ flex: 1 }} />
          <KaLifeLogo size={22} showText={false} />
        </div>
      </div>

      <InfographicView infographic={infographic} />

      {/* Share section */}
      <div
        data-testid="share-section"
        style={{
          borderTop: "1px solid #f0f0f0",
          background: "white",
          padding: "32px 24px",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h3
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#111827",
              margin: "0 0 16px",
            }}
          >
            Teile diese Ausgabe
          </h3>

          {/* Social post text */}
          <div style={{ position: "relative", marginBottom: 16 }}>
            <textarea
              data-testid="social-post-text"
              readOnly
              value={infographic.socialPostText}
              rows={4}
              style={{
                width: "100%",
                boxSizing: "border-box",
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "#4b5563",
                background: "#fafafa",
                border: "1px solid #f0f0f0",
                borderRadius: 8,
                padding: "12px 14px",
                resize: "none",
                lineHeight: 1.6,
                outline: "none",
              }}
            />
            <button
              data-testid="copy-social-post"
              onClick={handleCopy}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: copied ? "#1a5c3a" : "#111827",
                color: "white",
                border: "none",
                borderRadius: 6,
                padding: "5px 12px",
                fontSize: 11,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
            >
              {copied ? "Kopiert!" : "Kopieren"}
            </button>
          </div>

          {/* Social PNG link */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: "#9ca3af",
              margin: 0,
            }}
          >
            {"Bild zum Posten: "}
            <a
              href={`/social/${infographic.id}.png`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="social-png-link"
              style={{ color: "#1a5c3a", textDecoration: "underline", textUnderlineOffset: "2px" }}
            >
              {`social/${infographic.id}.png`}
            </a>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
