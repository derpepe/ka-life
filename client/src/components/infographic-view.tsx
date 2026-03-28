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
        borderRadius: 12,
        padding: "24px 24px 28px",
        border: "1px solid #f0f0f0",
        marginBottom: 0,
      }}
    >
      {section.title && (
        <div style={{ marginBottom: 20 }}>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 17,
              color: "#111827",
              margin: 0,
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            {section.title}
          </h2>
          {section.subtitle && (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "#6b7280",
                margin: "6px 0 0",
                lineHeight: 1.5,
              }}
            >
              {section.subtitle}
            </p>
          )}
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
        background: "#fafafa",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
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
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
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
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                background: "rgba(255,255,255,0.15)",
                color: "white",
                padding: "4px 10px",
                borderRadius: 4,
              }}
            >
              {infographic.kicker}
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.03em",
              }}
            >
              KW {infographic.weekNumber} &middot; {infographic.dateRange}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(26px, 5vw, 38px)",
              lineHeight: 1.15,
              margin: "0 0 12px",
              color: "white",
              letterSpacing: "-0.025em",
            }}
          >
            {infographic.title}
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
              margin: 0,
              maxWidth: 560,
              fontWeight: 400,
            }}
          >
            {infographic.subtitle}
          </p>
        </div>
      </header>

      {/* Sections */}
      <main
        style={{
          maxWidth: 680,
          margin: "0 auto",
          padding: "28px 16px 48px",
          display: "flex",
          flexDirection: "column",
          gap: 20,
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
              background: "#fafafa",
              border: "1px solid #f0f0f0",
              borderRadius: 10,
              padding: "14px 18px",
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
            }}
          >
            <span style={{ fontSize: 14, opacity: 0.5 }}>&#9998;</span>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                color: "#6b7280",
                margin: 0,
                lineHeight: 1.6,
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
            borderTop: "1px solid #f0f0f0",
            paddingTop: 20,
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 10,
              color: "#9ca3af",
              textTransform: "uppercase" as const,
              letterSpacing: "0.1em",
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
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  color: "#9ca3af",
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
