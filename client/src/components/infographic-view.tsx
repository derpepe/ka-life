import React from "react";
import { WeeklyInfographic, InfographicSection } from "@/lib/infographic-data";
import TorteDerWahrheit from "@/components/charts/torte-der-wahrheit";
import NumberCards from "@/components/charts/number-cards";
import StackedBar from "@/components/charts/stacked-bar";
import Timeline from "@/components/charts/timeline";
import ComparisonBars from "@/components/charts/comparison-bars";
import QuoteBlock from "@/components/charts/quote-block";
import WaffleChart from "@/components/charts/waffle-chart";

interface InfographicViewProps {
  infographic: WeeklyInfographic;
}

function SectionWrapper({
  section,
  accent,
}: {
  section: InfographicSection;
  accent: string;
}) {
  return (
    <div
      data-testid={`section-${section.type}`}
      style={{
        background: "white",
        borderRadius: 10,
        padding: "28px 28px 32px",
        boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
        marginBottom: 0,
      }}
    >
      {section.title && (
        <div style={{ marginBottom: 20 }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              fontSize: 22,
              color: "#111827",
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            {section.title}
          </h2>
          {section.subtitle && (
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 14,
                color: "#6b7280",
                margin: "6px 0 0",
                lineHeight: 1.4,
              }}
            >
              {section.subtitle}
            </p>
          )}
          <div
            style={{
              height: 2,
              width: 40,
              background: accent,
              borderRadius: 1,
              marginTop: 12,
            }}
          />
        </div>
      )}
      <SectionContent section={section} />
    </div>
  );
}

function SectionContent({ section }: { section: InfographicSection }) {
  switch (section.type) {
    case "torte-der-wahrheit":
      return <TorteDerWahrheit section={section} />;
    case "number-cards":
      return <NumberCards section={section} />;
    case "stacked-bar":
      return <StackedBar section={section} />;
    case "timeline":
      return <Timeline section={section} />;
    case "comparison":
      return <ComparisonBars section={section} />;
    case "quote":
      return <QuoteBlock section={section} />;
    case "waffle":
      return <WaffleChart section={section} />;
    default:
      return (
        <div style={{ color: "#9ca3af", fontStyle: "italic", fontSize: 13 }}>
          Unbekannter Sektionstyp: {section.type}
        </div>
      );
  }
}

export default function InfographicView({ infographic }: InfographicViewProps) {
  const { theme } = infographic;

  return (
    <div
      data-testid="infographic-view"
      style={{
        background: theme.background,
        minHeight: "100vh",
        fontFamily: "'Source Sans 3', sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: theme.accentDark,
          color: "white",
          padding: "40px 24px 36px",
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 16,
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                background: theme.accentLight,
                color: theme.accentDark,
                padding: "3px 10px",
                borderRadius: 4,
              }}
            >
              {infographic.kicker}
            </span>
            <span
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.05em",
              }}
            >
              KW {infographic.weekNumber} &middot; {infographic.dateRange}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 900,
              fontSize: "clamp(28px, 5vw, 44px)",
              lineHeight: 1.1,
              margin: "0 0 14px",
              color: "white",
              letterSpacing: "-0.01em",
            }}
          >
            {infographic.title}
          </h1>

          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 17,
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.8)",
              margin: 0,
              maxWidth: 620,
            }}
          >
            {infographic.subtitle}
          </p>
        </div>
      </header>

      {/* Sections */}
      <main
        style={{
          maxWidth: 780,
          margin: "0 auto",
          padding: "32px 16px 48px",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {infographic.sections.map((section, i) => (
          <SectionWrapper key={i} section={section} accent={theme.accent} />
        ))}

        {/* Editor Note */}
        {infographic.editorNote && (
          <div
            data-testid="editor-note"
            style={{
              background: "#fffbeb",
              border: "1px solid #fde68a",
              borderRadius: 8,
              padding: "14px 18px",
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: 16 }}>&#9998;</span>
            <p
              style={{
                fontFamily: "'Source Sans 3', sans-serif",
                fontSize: 13,
                color: "#92400e",
                margin: 0,
                lineHeight: 1.5,
                fontStyle: "italic",
              }}
            >
              {infographic.editorNote}
            </p>
          </div>
        )}

        {/* Sources */}
        <div
          data-testid="sources"
          style={{
            borderTop: "1px solid #e5e7eb",
            paddingTop: 20,
          }}
        >
          <p
            style={{
              fontFamily: "'Source Sans 3', sans-serif",
              fontSize: 11,
              color: "#9ca3af",
              textTransform: "uppercase" as const,
              letterSpacing: "0.08em",
              fontWeight: 600,
              margin: "0 0 8px",
            }}
          >
            Quellen
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: "4px 20px" }}>
            {infographic.sources.map((src, i) => (
              <li
                key={i}
                style={{
                  fontFamily: "'Source Sans 3', sans-serif",
                  fontSize: 12,
                  color: "#6b7280",
                }}
              >
                {src}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
