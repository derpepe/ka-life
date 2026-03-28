import React from "react";
import { InfographicSection, TimelineEvent } from "@/lib/infographic-data";

interface TimelineProps {
  section: InfographicSection;
}

export default function Timeline({ section }: TimelineProps) {
  const events: TimelineEvent[] = section.data.events || [];

  return (
    <div data-testid="timeline-section" style={{ position: "relative", paddingLeft: 28 }}>
      {/* Vertical line */}
      <div
        style={{
          position: "absolute",
          left: 10,
          top: 8,
          bottom: 8,
          width: 1.5,
          background: "#e5e7eb",
          borderRadius: 1,
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {events.map((event, i) => {
          const isLast = i === events.length - 1;
          return (
            <div
              key={i}
              data-testid={`timeline-event-${i}`}
              style={{
                position: "relative",
                paddingBottom: isLast ? 0 : 24,
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: -22,
                  top: 4,
                  width: event.highlight ? 12 : 8,
                  height: event.highlight ? 12 : 8,
                  borderRadius: "50%",
                  background: event.highlight ? "#1a5c3a" : "#d1d5db",
                  border: event.highlight ? "2px solid #1a5c3a" : "2px solid #e5e7eb",
                  boxShadow: event.highlight ? "0 0 0 3px rgba(26,92,58,0.12)" : "none",
                  transform: event.highlight ? "translateX(-2px)" : "none",
                  zIndex: 1,
                  transition: "all 0.2s",
                }}
              />
              {/* Content */}
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    fontWeight: 600,
                    color: event.highlight ? "#1a5c3a" : "#9ca3af",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase" as const,
                    marginBottom: 3,
                  }}
                >
                  {event.date}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: event.highlight ? 14 : 13,
                    fontWeight: event.highlight ? 600 : 400,
                    color: event.highlight ? "#111827" : "#4b5563",
                    lineHeight: 1.5,
                  }}
                >
                  {event.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
