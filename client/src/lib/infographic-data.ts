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
  socialPostText: string;
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
      background: "#fafafa",
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
        title: "F\u00E4chertorten",
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
      "Stadt Karlsruhe, Mobilit\u00E4tsbericht 2025",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "Der BGH in Karlsruhe hat entschieden: Autobauer m\u00FCssen nicht schneller aus dem Verbrenner raus, als die Politik es vorgibt. Was das f\u00FCr die Klimadebatte bedeutet \u2013 in unserer neuen Infografik.\n\n\u27A1 ka-life.de",
  },
  {
    id: "kw12-2026",
    weekNumber: 12,
    year: 2026,
    dateRange: "16.\u201322. M\u00E4rz 2026",
    title: "Achterbahn in Blau-Wei\u00DF",
    subtitle: "Der KSC k\u00E4mpft in der 2. Liga um den Anschluss ans Mittelfeld \u2013 zwischen Hoffnung und Frustration.",
    kicker: "KSC & Fu\u00DFball",
    theme: {
      accent: "#1e3a5f",
      accentLight: "#5b8cb5",
      accentDark: "#0d1f33",
      secondary: "#e8b100",
      tertiary: "#c0392b",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Achterbahn\nin Blau-Wei\u00DF",
      subline: "KSC \u00b7 2. Liga \u00b7 KW 12",
      keyNumber: "37",
      keyLabel: "Punkte nach 27 Spieltagen",
      gradient: "linear-gradient(135deg, #1e3a5f 0%, #0d1f33 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Die Saison in Zahlen",
        subtitle: "Stand nach 27 Spieltagen",
        data: {
          cards: [
            { value: "37", unit: "Punkte", label: "Tabellenplatz 8", color: "#1e3a5f" },
            { value: "10", unit: "Siege", label: "Davon 3:1 gegen Gr. F\u00FCrth", color: "#2d6a4f" },
            { value: "43", unit: "Tore", label: "Geschossene Tore", color: "#e8b100" },
            { value: "51", unit: "Gegentore", label: "Minus 8 Tordifferenz", color: "#c0392b" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was im Wildpark wirklich passiert",
        data: {
          pies: [
            {
              title: "Stimmung im Wildparkstadion",
              slices: [
                { label: "Noch hoffen", value: 35, color: "#1e3a5f" },
                { label: "Bier trinken", value: 30, color: "#e8b100" },
                { label: "Abstieg ausrechnen", value: 20, color: "#c0392b" },
                { label: "N\u00E4chstes Jahr 1. Liga", value: 15, color: "#5b8cb5" },
              ] as PieSlice[],
            },
            {
              title: "Warum der KSC Gegentore kassiert",
              slices: [
                { label: "Abwehrfehler", value: 40, color: "#c0392b" },
                { label: "Standards", value: 25, color: "#e8b100" },
                { label: "Fehlp\u00E4sse", value: 20, color: "#1e3a5f" },
                { label: "Pech", value: 15, color: "#adb5bd" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "comparison",
        title: "Tabellenumfeld",
        subtitle: "So eng ist das Mittelfeld der 2. Liga",
        data: {
          items: [
            { label: "7. Darmstadt", value: 38, display: "38 Pkt.", color: "#5b8cb5" },
            { label: "8. Karlsruhe", value: 37, display: "37 Pkt.", color: "#1e3a5f" },
            { label: "9. N\u00FCrnberg", value: 36, display: "36 Pkt.", color: "#c0392b" },
            { label: "10. Braunschweig", value: 34, display: "34 Pkt.", color: "#e8b100" },
            { label: "11. Regensburg", value: 33, display: "33 Pkt.", color: "#adb5bd" },
          ] as BarItem[],
        },
      },
      {
        type: "timeline",
        title: "Die letzten 5 Spiele",
        subtitle: "Wie eine Achterbahn",
        data: {
          events: [
            { date: "21. Feb.", label: "KSC 2:0 Holstein Kiel \u2013 Sieg!", highlight: true },
            { date: "1. M\u00E4rz", label: "Magdeburg 1:3 KSC \u2013 Ausw\u00E4rtssieg!", highlight: true },
            { date: "8. M\u00E4rz", label: "KSC 1:2 Hertha \u2013 Heimpleite" },
            { date: "15. M\u00E4rz", label: "Kaiserslautern 3:0 KSC \u2013 Debakel" },
            { date: "20. M\u00E4rz", label: "KSC 3:1 Gr. F\u00FCrth \u2013 Befreiungsschlag!", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Wir m\u00FCssen jede Woche 100 Prozent bringen, sonst bestraft dich diese Liga sofort.",
          author: "Christian Eichner, KSC-Trainer",
          color: "#1e3a5f",
        },
      },
      {
        type: "waffle",
        title: "Heimst\u00E4rke?",
        subtitle: "Ergebnisse der 14 Heimspiele",
        data: {
          total: 14,
          filled: 10,
          filledColor: "#1e3a5f",
          emptyColor: "#e5e7eb",
          annotation: "6 Siege, 4 Unentschieden, 4 Niederlagen \u2013 der Wildpark ist keine Festung mehr.",
          secondaryFilled: 6,
          secondaryColor: "#2d6a4f",
        },
      },
    ],
    sources: [
      "kicker.de, Spieltag 27",
      "Transfermarkt.de, Saison 2025/26",
      "ka-news.de, KSC-Berichterstattung",
      "2. Bundesliga Tabelle, 22.03.2026",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "37 Punkte, Platz 8, Tordifferenz minus 8: Der KSC pendelt zwischen Gl\u00FCcksgef\u00FChlen und Frust. Ein Blick auf die Achterbahn-Saison in Blau-Wei\u00DF.\n\n\u27A1 ka-life.de",
  },
  {
    id: "kw11-2026",
    weekNumber: 11,
    year: 2026,
    dateRange: "9.\u201315. M\u00E4rz 2026",
    title: "Exzellent! KIT verteidigt den Titel",
    subtitle: "Das Karlsruher Institut f\u00FCr Technologie bleibt Exzellenzuniversit\u00E4t \u2013 mit bis zu 105 Millionen Euro F\u00F6rderung.",
    kicker: "KIT & Forschung",
    theme: {
      accent: "#00682f",
      accentLight: "#7cc47f",
      accentDark: "#003d1a",
      secondary: "#0072c6",
      tertiary: "#f5a623",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Exzellent!\nKIT verteidigt den Titel",
      subline: "Exzellenzstrategie \u00b7 KW 11",
      keyNumber: "105",
      keyLabel: "Mio. \u20ac F\u00f6rderung",
      gradient: "linear-gradient(135deg, #00682f 0%, #003d1a 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "KIT in Zahlen",
        subtitle: "Karlsruhes Wissensfabrik",
        data: {
          cards: [
            { value: "105", unit: "Mio. \u20ac", label: "F\u00F6rderung als Exzellenzuni", color: "#00682f" },
            { value: "22000", unit: "Studierende", label: "Am KIT eingeschrieben", color: "#0072c6" },
            { value: "10", unit: "Top-Unis", label: "Weltweit in Quantenforschung", color: "#f5a623" },
            { value: "14", unit: "F\u00E4cher", label: "Unter den weltbesten (QS 2026)", color: "#00682f" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was Exzellenz wirklich bedeutet",
        data: {
          pies: [
            {
              title: "Wof\u00FCr das KIT die F\u00F6rderung nutzt",
              slices: [
                { label: "Noch mehr Paper", value: 35, color: "#00682f" },
                { label: "Neue Labore", value: 25, color: "#0072c6" },
                { label: "Mensa-Upgrade", value: 25, color: "#f5a623" },
                { label: "Exzellenz-Schilder", value: 15, color: "#adb5bd" },
              ] as PieSlice[],
            },
            {
              title: "Was KIT-Studierende denken",
              slices: [
                { label: "Cool, aber mein Kaffee?", value: 40, color: "#0072c6" },
                { label: "Endlich WLAN im Audimax", value: 30, color: "#00682f" },
                { label: "Lebenslauf aufwerten", value: 20, color: "#f5a623" },
                { label: "Was ist Exzellenz?", value: 10, color: "#adb5bd" },
              ] as PieSlice[],
            },
            {
              title: "Was Karlsruhe von seinem KIT hat",
              slices: [
                { label: "Spitzenforschung", value: 30, color: "#00682f" },
                { label: "Startup-Szene", value: 25, color: "#0072c6" },
                { label: "Nerds in der Innenstadt", value: 25, color: "#f5a623" },
                { label: "Verkehrschaos Campus", value: 20, color: "#c0392b" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "KITs Weg zur Exzellenz",
        subtitle: "Von der TH zum Forschungsgiganten",
        data: {
          events: [
            { date: "2006", label: "Erste Runde Exzellenzinitiative: Uni Karlsruhe (TH) wird Exzellenzuni" },
            { date: "2009", label: "Fusion: Uni Karlsruhe + Forschungszentrum = KIT" },
            { date: "2012", label: "Exzellenzstatus verloren \u2013 Schock" },
            { date: "2019", label: "Zur\u00FCck! KIT wird wieder Exzellenzuni", highlight: true },
            { date: "11. M\u00E4rz 2026", label: "Titel erfolgreich verteidigt!", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Exzellenz-Rankings",
        subtitle: "KIT im QS-Ranking 2026 nach F\u00E4chern",
        data: {
          items: [
            { label: "Ingenieurwissenschaften", value: 95, display: "Top 2%", color: "#00682f" },
            { label: "Informatik", value: 90, display: "Top 3%", color: "#0072c6" },
            { label: "Physik", value: 85, display: "Top 5%", color: "#f5a623" },
            { label: "Materialwissenschaften", value: 80, display: "Top 5%", color: "#00682f" },
            { label: "Chemie", value: 75, display: "Top 8%", color: "#0072c6" },
          ] as BarItem[],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Science for Impact \u2013 Spitzenforschung zum Nutzen der Gesellschaft. Das ist unser Versprechen.",
          author: "Jan S. Hesthaven, KIT-Pr\u00E4sident, 11. M\u00E4rz 2026",
          color: "#00682f",
        },
      },
      {
        type: "stacked-bar",
        title: "Drittmittel am KIT",
        subtitle: "F\u00F6rdergelder in Mio. \u20ac pro Jahr",
        data: {
          categories: ["2020", "2021", "2022", "2023", "2024", "2025"],
          stacks: [
            { label: "Bund/Land", color: "#00682f" },
            { label: "EU", color: "#0072c6" },
            { label: "Industrie", color: "#f5a623" },
          ],
          values: [
            [220, 55, 85],
            [235, 60, 90],
            [250, 70, 95],
            [270, 75, 100],
            [290, 80, 110],
            [310, 90, 120],
          ],
        },
      },
    ],
    sources: [
      "KIT Pressemitteilung, 11.03.2026",
      "DFG Exzellenzstrategie, 11.03.2026",
      "QS World University Rankings 2026",
      "KIT Jahresbericht 2025",
      "Baden TV, 12.03.2026",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "Das KIT bleibt Exzellenzuniversit\u00E4t! 105 Millionen Euro F\u00F6rderung, Top 10 weltweit in Quantenforschung \u2013 was der Titel f\u00FCr Karlsruhe bedeutet.\n\n\u27A1 ka-life.de",
  },
  {
    id: "kw10-2026",
    weekNumber: 10,
    year: 2026,
    dateRange: "2.\u20138. M\u00E4rz 2026",
    title: "Karlsruhe w\u00E4hlt gr\u00FCn",
    subtitle: "Bei der Landtagswahl holt Cem \u00d6zdemir die Gr\u00FCnen auf Platz 1 \u2013 in Karlsruhe besonders deutlich.",
    kicker: "Landtagswahl BW",
    theme: {
      accent: "#1b7340",
      accentLight: "#6dbf73",
      accentDark: "#0f4024",
      secondary: "#111827",
      tertiary: "#3b82f6",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Karlsruhe\nw\u00E4hlt gr\u00FCn",
      subline: "Landtagswahl BW \u00b7 8. M\u00E4rz 2026",
      keyNumber: "39%",
      keyLabel: "Gr\u00FCne in Karlsruhe II",
      gradient: "linear-gradient(135deg, #1b7340 0%, #0f4024 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Karlsruhe hat gew\u00E4hlt",
        subtitle: "Ergebnisse im Wahlkreis Karlsruhe II",
        data: {
          cards: [
            { value: "39", unit: "% Gr\u00FCne", label: "St\u00E4rkste Kraft in Karlsruhe II", color: "#1b7340" },
            { value: "23", unit: "% CDU", label: "Manuel Hagel holt Platz 2", color: "#111827" },
            { value: "14", unit: "% AfD", label: "Dritts\u00E4rkste Kraft", color: "#3b82f6" },
            { value: "68", unit: "% Wahlbeteiligung", label: "Karlsruhe geht w\u00E4hlen", color: "#6b7280" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was am Wahlabend wirklich passierte",
        data: {
          pies: [
            {
              title: "Warum Karlsruhe gr\u00FCn w\u00E4hlt",
              slices: [
                { label: "\u00d6zdemir-Effekt", value: 35, color: "#1b7340" },
                { label: "Radwege!", value: 25, color: "#6dbf73" },
                { label: "Anti-CDU-Reflex", value: 25, color: "#111827" },
                { label: "Tats\u00E4chlich \u00FCberzeugt", value: 15, color: "#adb5bd" },
              ] as PieSlice[],
            },
            {
              title: "Was Karlsruher am Wahltag taten",
              slices: [
                { label: "W\u00E4hlen gegangen", value: 68, color: "#1b7340" },
                { label: "Vergessen", value: 15, color: "#adb5bd" },
                { label: "Im Schlossgarten", value: 12, color: "#6dbf73" },
                { label: "Wahlparty vorbereitet", value: 5, color: "#3b82f6" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "comparison",
        title: "Ergebnis Karlsruhe II",
        subtitle: "Erststimmen nach Partei",
        data: {
          items: [
            { label: "GR\u00dcNE \u2013 Bauer", value: 39, display: "39,3%", color: "#1b7340" },
            { label: "CDU \u2013 Sch\u00FCtz", value: 23, display: "22,8%", color: "#111827" },
            { label: "AfD \u2013 Stolz", value: 14, display: "13,9%", color: "#3b82f6" },
            { label: "LINKE \u2013 Fessmann", value: 10, display: "10,0%", color: "#c0392b" },
            { label: "SPD \u2013 Keller", value: 8, display: "7,9%", color: "#e63946" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Gr\u00FCne in BW \u00FCber die Jahre",
        subtitle: "Landesweites Zweitstimmen-Ergebnis in %",
        data: {
          categories: ["2006", "2011", "2016", "2021", "2026"],
          stacks: [
            { label: "Gr\u00FCne", color: "#1b7340" },
            { label: "CDU", color: "#111827" },
            { label: "Andere", color: "#adb5bd" },
          ],
          values: [
            [12, 44, 44],
            [24, 39, 37],
            [31, 27, 42],
            [33, 24, 43],
            [30, 30, 40],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Baden-W\u00FCrttemberg zeigt: Klimaschutz und Wirtschaft gehen zusammen. Dieses Vertrauen ehrt uns.",
          author: "Cem \u00d6zdemir, designierter Ministerpr\u00E4sident, 8. M\u00E4rz 2026",
          color: "#1b7340",
        },
      },
      {
        type: "timeline",
        title: "Gr\u00FCne Ministerpr\u00E4sidenten",
        subtitle: "Eine Baden-W\u00FCrttembergische Tradition",
        data: {
          events: [
            { date: "2011", label: "Kretschmann wird erster gr\u00FCner MP Deutschlands" },
            { date: "2016", label: "Wiederwahl: Gr\u00FCn-Schwarz" },
            { date: "2021", label: "Dritte Amtszeit: 32,6% f\u00FCr die Gr\u00FCnen" },
            { date: "Mai 2025", label: "Cem \u00d6zdemir wird Spitzenkandidat (97%)", highlight: true },
            { date: "8. M\u00E4rz 2026", label: "Wahlsieg: \u00d6zdemir folgt auf Kretschmann", highlight: true },
          ] as TimelineEvent[],
        },
      },
    ],
    sources: [
      "wahlergebnisse.komm.one, Karlsruhe II",
      "Landeswahlleiter BW, vorl\u00E4ufiges Endergebnis",
      "SWR Aktuell, 08.03.2026",
      "Wikipedia, Landtagswahl BW 2026",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "Landtagswahl 2026: Karlsruhe w\u00E4hlt mit 39% Gr\u00FCne deutlich gr\u00FCner als der Rest des Landes. Cem \u00d6zdemir wird Ministerpr\u00E4sident.\n\n\u27A1 ka-life.de",
  },
  {
    id: "kw09-2026",
    weekNumber: 9,
    year: 2026,
    dateRange: "23. Feb.\u20131. M\u00E4rz 2026",
    title: "200 Jahre ohne Weinbrenner",
    subtitle: "Am 1. M\u00E4rz j\u00E4hrt sich der Todestag von Friedrich Weinbrenner zum 200. Mal \u2013 dem Mann, der Karlsruhe sein Gesicht gab.",
    kicker: "Stadtgeschichte",
    theme: {
      accent: "#8b6914",
      accentLight: "#d4a017",
      accentDark: "#5c4400",
      secondary: "#8b4513",
      tertiary: "#2c3e50",
      background: "#fafafa",
    },
    socialCard: {
      headline: "200 Jahre\nohne Weinbrenner",
      subline: "Stadtgeschichte \u00b7 KW 9",
      keyNumber: "200",
      keyLabel: "Jahre seit seinem Tod",
      gradient: "linear-gradient(135deg, #8b6914 0%, #5c4400 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Weinbrenner in Zahlen",
        subtitle: "Der Architekt der F\u00E4cherstadt",
        data: {
          cards: [
            { value: "200", unit: "Jahre", label: "Seit seinem Tod am 1. M\u00E4rz 1826", color: "#8b6914" },
            { value: "59", unit: "Jahre alt", label: "Geboren 1766, gestorben 1826", color: "#8b4513" },
            { value: "30", unit: "Geb\u00E4ude", label: "Wichtigste Bauten in Karlsruhe", color: "#2c3e50" },
            { value: "1797", unit: "Baudirektor", label: "Seit 1797 Bauleiter der Stadt", color: "#d4a017" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was Weinbrenner heute denken w\u00FCrde",
        data: {
          pies: [
            {
              title: "Weinbrenner sieht den Marktplatz 2026",
              slices: [
                { label: "Pyramide steht noch!", value: 40, color: "#8b6914" },
                { label: "Was ist das f\u00FCr ein Loch?", value: 30, color: "#8b4513" },
                { label: "Wo ist meine Kirche hin?", value: 20, color: "#2c3e50" },
                { label: "Immerhin Caf\u00E9s", value: 10, color: "#d4a017" },
              ] as PieSlice[],
            },
            {
              title: "Was Karlsruher \u00FCber Weinbrenner wissen",
              slices: [
                { label: "Marktplatz-Typ", value: 40, color: "#8b6914" },
                { label: "Stra\u00DFenname", value: 30, color: "#2c3e50" },
                { label: "Architekt, glaub ich", value: 20, color: "#8b4513" },
                { label: "Weinsorte?", value: 10, color: "#adb5bd" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Weinbrenners Karlsruhe",
        subtitle: "Die wichtigsten Bauten und Daten",
        data: {
          events: [
            { date: "1766", label: "Geburt in Karlsruhe" },
            { date: "1788\u20131797", label: "Studienreisen nach Rom und Ausbildung" },
            { date: "1797", label: "Ernennung zum Baudirektor von Karlsruhe", highlight: true },
            { date: "1807", label: "Evangelische Stadtkirche am Marktplatz" },
            { date: "1823", label: "Pyramide \u00FCber dem Grab von Karl Wilhelm", highlight: true },
            { date: "1. M\u00E4rz 1826", label: "Tod in Karlsruhe", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Weinbrenners Erbe heute",
        subtitle: "Was noch steht \u2013 und was nicht",
        data: {
          items: [
            { label: "Pyramide am Marktplatz", value: 100, display: "Steht", color: "#2d6a4f" },
            { label: "Rathaus am Marktplatz", value: 90, display: "Steht (umgebaut)", color: "#8b6914" },
            { label: "M\u00FCnze / Stadtmuseum", value: 80, display: "Steht", color: "#2c3e50" },
            { label: "Ev. Stadtkirche", value: 70, display: "Wiederaufgebaut", color: "#d4a017" },
            { label: "Ettlinger Tor", value: 20, display: "Abgerissen", color: "#c0392b" },
          ] as BarItem[],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Wie der Architekt Friedrich Weinbrenner Karlsruhe pr\u00E4gte \u2013 und den Weg f\u00FCr das KIT ebnete.",
          author: "KIT, zum 200. Todestag, 1. M\u00E4rz 2026",
          color: "#8b6914",
        },
      },
      {
        type: "waffle",
        title: "Weinbrenner-Bauten",
        subtitle: "Von 30 wichtigen Geb\u00E4uden stehen noch...",
        data: {
          total: 30,
          filled: 22,
          filledColor: "#8b6914",
          emptyColor: "#e5e7eb",
          annotation: "22 von 30 seiner wichtigsten Geb\u00E4ude existieren noch \u2013 viele davon unter Denkmalschutz.",
          secondaryFilled: 18,
          secondaryColor: "#2c3e50",
        },
      },
    ],
    sources: [
      "KIT Pressemitteilung, 01.03.2026",
      "Stadtarchiv Karlsruhe, Jubil\u00E4umsliste 2026",
      "Kunsthalle Karlsruhe, Ausstellung Weinbrenner",
      "Wikipedia, Friedrich Weinbrenner",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "Vor 200 Jahren starb Friedrich Weinbrenner \u2013 der Mann, der Karlsruhe geformt hat. Vom Marktplatz bis zur Pyramide: Was von seinem Erbe \u00FCbrig ist.\n\n\u27A1 ka-life.de",
  },
];

export function getInfographicById(id: string): WeeklyInfographic | undefined {
  return infographics.find((ig) => ig.id === id);
}
