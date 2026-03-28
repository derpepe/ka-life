export interface PieSlice { label: string; value: number; color: string; }
export interface NumberCard { value: string; unit: string; label: string; color: string; }
export interface TimelineEvent { date: string; label: string; highlight?: boolean; }
export interface BarItem { label: string; value: number; display: string; color: string; }

export interface InfographicSection {
  type: "torte-der-wahrheit" | "bar-chart" | "number-cards" | "timeline" | "waffle" | "quote" | "comparison" | "stacked-bar";
  title: string;
  subtitle?: string;
  data: any;
}

export interface WeeklyInfographic {
  id: string;
  weekNumber: number;
  year: number;
  dateRange: string;
  title: string;
  subtitle: string;
  kicker: string;
  theme: {
    accent: string;
    accentLight: string;
    accentDark: string;
    secondary: string;
    tertiary: string;
    background: string;
  };
  sections: InfographicSection[];
  sources: string[];
  editorNote?: string;
  socialCard: {
    headline: string;
    subline: string;
    keyNumber: string;
    keyLabel: string;
    gradient: string;
  };
}

export const infographics: WeeklyInfographic[] = [
  {
    id: "kw13-2026",
    weekNumber: 13,
    year: 2026,
    dateRange: "22.\u201328. M\u00E4rz 2026",
    title: "Verbrenner d\u00FCrfen weiter brennen",
    subtitle: "Der BGH in Karlsruhe weist Klimaklagen gegen BMW und Mercedes ab \u2013 die Politik soll\u2019s richten, nicht die Richter.",
    kicker: "Klima & Justiz",
    theme: {
      accent: "#2d6a4f",
      accentLight: "#52b788",
      accentDark: "#1b4332",
      secondary: "#e63946",
      tertiary: "#457b9d",
      background: "#f8f6f0",
    },
    socialCard: {
      headline: "Verbrenner d\u00FCrfen\nweiter brennen",
      subline: "BGH Karlsruhe \u00b7 KW 13",
      keyNumber: "2035",
      keyLabel: "Fr\u00FChestens dann ist Schluss",
      gradient: "linear-gradient(135deg, #2d6a4f 0%, #1b4332 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Der Preis der Freiheit",
        subtitle: "Was das BGH-Urteil bedeutet",
        data: {
          cards: [
            { value: "2035", unit: "Jahr", label: "EU-Verbrenner-Verbot (fr\u00FChestens)", color: "#2d6a4f" },
            { value: "2030", unit: "Jahr", label: "DUH-Forderung (gescheitert)", color: "#e63946" },
            { value: "3", unit: "Instanzen", label: "Alle gegen die DUH entschieden", color: "#457b9d" },
            { value: "0", unit: "CO\u2082-Budgets", label: "F\u00FCr einzelne Firmen laut BGH", color: "#6b7280" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "Torten der Wahrheit",
        subtitle: "Karlsruhe urteilt \u2013 wir kommentieren",
        data: {
          pies: [
            {
              title: "Was BMW-Manager nach dem Urteil dachten",
              slices: [
                { label: "Erleichterung", value: 45, color: "#52b788" },
                { label: "Sekt bestellen", value: 25, color: "#d4a017" },
                { label: "E-Strategie \u00FCberdenken", value: 20, color: "#457b9d" },
                { label: "Mitgef\u00FChl mit DUH", value: 10, color: "#adb5bd" },
              ] as PieSlice[],
            },
            {
              title: "Wer rettet jetzt das Klima?",
              slices: [
                { label: "Die Politik (klar!)", value: 40, color: "#457b9d" },
                { label: "Wir Verbraucher", value: 35, color: "#e63946" },
                { label: "Die Industrie", value: 15, color: "#d4a017" },
                { label: "Die Gerichte", value: 10, color: "#adb5bd" },
              ] as PieSlice[],
            },
            {
              title: "Karlsruhes wichtigste Exporte",
              slices: [
                { label: "H\u00F6chstrichterliche Urteile", value: 35, color: "#2d6a4f" },
                { label: "KIT-Absolvent:innen", value: 30, color: "#457b9d" },
                { label: "Badischer Wein", value: 20, color: "#e63946" },
                { label: "Der KSC (leider)", value: 15, color: "#d4a017" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Chronik einer gescheiterten Klage",
        subtitle: "Vier Jahre, drei Instanzen, ein Ergebnis",
        data: {
          events: [
            { date: "2021", label: "DUH klagt gegen BMW und Mercedes" },
            { date: "2024", label: "Landgericht Stuttgart weist Klage ab" },
            { date: "2025", label: "OLG Stuttgart best\u00E4tigt: Klage abgewiesen" },
            { date: "2. M\u00E4rz 2026", label: "BGH verhandelt in Karlsruhe", highlight: true },
            { date: "23. M\u00E4rz 2026", label: "BGH weist Revision endg\u00FCltig ab", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "stacked-bar",
        title: "Verbrenner vs. E-Auto",
        subtitle: "Neuzulassungen in Deutschland (in Tausend)",
        data: {
          categories: ["2020", "2021", "2022", "2023", "2024", "2025"],
          stacks: [
            { label: "Verbrenner", color: "#e63946" },
            { label: "E-Auto", color: "#2d6a4f" },
          ],
          values: [
            [2650, 194],
            [2380, 356],
            [2220, 471],
            [2050, 524],
            [1800, 680],
            [1550, 820],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Die Festlegung k\u00FCnftiger Klimaschutzma\u00DFnahmen obliegt dem Gesetzgeber.",
          author: "Stephan Seiters, Vorsitzender Richter am BGH, 23. M\u00E4rz 2026",
          color: "#2d6a4f",
        },
      },
      {
        type: "comparison",
        title: "Klimaklagen weltweit",
        subtitle: "Wie andere Gerichte entschieden haben",
        data: {
          items: [
            { label: "Shell-Urteil Niederlande (2021)", value: 100, display: "Gewonnen", color: "#2d6a4f" },
            { label: "Montana Youth (2023)", value: 80, display: "Gewonnen", color: "#52b788" },
            { label: "Schweiz EGMR (2024)", value: 60, display: "Gewonnen", color: "#457b9d" },
            { label: "BMW/Mercedes BGH (2026)", value: 40, display: "Verloren", color: "#e63946" },
          ] as BarItem[],
        },
      },
      {
        type: "waffle",
        title: "Karlsruher Autos",
        subtitle: "Anteil Verbrenner bei Neuzulassungen in KA 2025",
        data: {
          total: 100,
          filled: 72,
          filledColor: "#e63946",
          emptyColor: "#d8d3c8",
          annotation: "72 von 100 neu zugelassenen Autos in Karlsruhe fahren noch mit Verbrenner \u2013 Tendenz sinkend.",
          secondaryFilled: 28,
          secondaryColor: "#2d6a4f",
        },
      },
    ],
    sources: [
      "Tagesschau, 23.03.2026",
      "Deutschlandfunk, 23.03.2026",
      "Bayerischer Rundfunk, 23.03.2026",
      "KBA Neuzulassungsstatistik 2025",
      "Stadt Karlsruhe, Mobili\u00E4tsbericht 2025",
    ],
    editorNote: "Die Torten der Wahrheit sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
  },
];

export function getInfographicById(id: string): WeeklyInfographic | undefined {
  return infographics.find((ig) => ig.id === id);
}
