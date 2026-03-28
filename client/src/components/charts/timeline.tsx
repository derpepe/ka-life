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
          width: 2,
          background: "linear-gradient(to bottom, #e5e7eb 0%, #e5e7eb 100%)",
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
                paddingBottom: isLast ? 0 : 28,
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
                  width: event.highlight ? 14 : 10,
                  height: event.highlight ? 14 : 10,
                  borderRadius: "50%",
                  background: event.highlight ? "#2d6a4f" : "#d1d5db",
                  border: event.highlight ? "2px solid #2d6a4f" : "2px solid #e5e7eb",
                  boxShadow: event.highlight ? "0 0 0 3px rgba(45,106,79,0.15)" : "none",
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
                    fontSize: 11,
                    fontWeight: 500,
                    color: event.highlight ? "#2d6a4f" : "#9ca3af",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase" as const,
                    marginBottom: 3,
                  }}
                >
                  {event.date}
                </div>
                <div
                  style={{
                    fontFamily: "'Source Sans 3', sans-serif",
                    fontSize: event.highlight ? 16 : 15,
                    fontWeight: event.highlight ? 600 : 400,
                    color: event.highlight ? "#111827" : "#374151",
                    lineHeight: 1.4,
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
