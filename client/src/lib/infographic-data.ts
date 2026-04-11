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
    id: "kw16-2026",
    weekNumber: 16,
    year: 2026,
    dateRange: "13.\u201319. April 2026",
    title: "Dauerbaustelle F\u00E4cherstadt",
    subtitle: "Tram 4, Tram 5, S4, S5, Rheintalbahn \u2013 Karlsruhe buddelt sich durch 2026. Kaum eine Linie bleibt verschont, und nach Ostern geht es direkt weiter.",
    kicker: "Verkehr & Nahverkehr",
    theme: {
      accent: "#ea580c",
      accentLight: "#fb923c",
      accentDark: "#9a3412",
      secondary: "#1d4ed8",
      tertiary: "#374151",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Dauerbaustelle\nF\u00E4cherstadt",
      subline: "VBK \u00b7 AVG \u00b7 DB \u00b7 KW 16",
      keyNumber: "12+",
      keyLabel: "Linien gleichzeitig betroffen",
      gradient: "linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Das Bau-Chaos in Zahlen",
        subtitle: "Fr\u00FChjahr 2026 \u2013 Karlsruhe gr\u00E4bt sich um",
        data: {
          cards: [
            { value: "12+", unit: "Linien", label: "Gleichzeitig betroffen (Tram, S-Bahn, Bus)", color: "#ea580c" },
            { value: "7", unit: "Wochen", label: "Entenfang-Sperre: 13. April bis 11. Mai", color: "#9a3412" },
            { value: "+2", unit: "Std. Fahrzeit", label: "Rheintalbahn: Bus statt ICE nach Freiburg", color: "#1d4ed8" },
            { value: "12", unit: "Monate", label: "Stupferich: Busumleitung bis Ende 2026", color: "#374151" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was Karlsruher Pendler wirklich denken",
        data: {
          pies: [
            {
              title: "Reaktion auf SEV-Ansage",
              slices: [
                { label: "Schon wieder?!", value: 45, color: "#ea580c" },
                { label: "Fahrrad es ist", value: 25, color: "#fb923c" },
                { label: "Homeoffice", value: 20, color: "#1d4ed8" },
                { label: "Was ist SEV?", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Warum die VBK immer bauen",
              slices: [
                { label: "Marode Gleise", value: 35, color: "#ea580c" },
                { label: "Kombil\u00F6sungs-Nachwehen", value: 25, color: "#9a3412" },
                { label: "F\u00F6rdert\u00F6pfe laufen aus", value: 20, color: "#1d4ed8" },
                { label: "Tradition", value: 20, color: "#374151" },
              ] as PieSlice[],
            },
            {
              title: "Alternativen der Karlsruher",
              slices: [
                { label: "Fahrrad", value: 30, color: "#22c55e" },
                { label: "Auto (haha, Stau)", value: 25, color: "#ea580c" },
                { label: "Zu Fu\u00DF", value: 20, color: "#fb923c" },
                { label: "Einfach zu sp\u00E4t kommen", value: 15, color: "#1d4ed8" },
                { label: "Umziehen", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Baustellenkalender 2026",
        subtitle: "Es h\u00F6rt nicht auf",
        data: {
          events: [
            { date: "23. M\u00E4rz", label: "Schillerstra\u00DFe: Tram 4 umgeleitet, 3 Wochen" },
            { date: "28. M\u00E4rz", label: "DB Rheintalbahn: KA\u2013Basel massiv eingeschr\u00E4nkt", highlight: true },
            { date: "30. M\u00E4rz", label: "Osterferien-Paket: Tram 4, 5, S4 gesperrt", highlight: true },
            { date: "13. April", label: "Entenfang + Kronenplatz: 4 Wochen Sperrung", highlight: true },
            { date: "Mai\u2013Juli", label: "Gleisviereck Entenfang: Erneuerung bis Juli" },
            { date: "Sommer", label: "Waldstadt Tram 4: N\u00E4chste Gro\u00DFbaustelle geplant" },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Was alles gleichzeitig gesperrt ist",
        subtitle: "Betroffene Linien Osterferien 2026",
        data: {
          items: [
            { label: "Tram 4 (Schillerstr. + Oberreut)", value: 100, display: "SEV", color: "#ea580c" },
            { label: "Tram 5 (Umleitung Hirtenweg)", value: 90, display: "Umleitung", color: "#fb923c" },
            { label: "S4 Bretten\u2013KA (komplett Bus)", value: 95, display: "SEV", color: "#9a3412" },
            { label: "S5/S51 (n\u00E4chtl. Einschr.)", value: 60, display: "Teilausfall", color: "#1d4ed8" },
            { label: "Bus 42, 107 (5 Wochen)", value: 70, display: "Umleitung", color: "#374151" },
            { label: "Bus 50, 51 (Bulach)", value: 50, display: "Umleitung", color: "#6b7280" },
            { label: "DB RE7 Rheintalbahn", value: 85, display: "+2 Std.", color: "#1d4ed8" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Bautage pro Jahr",
        subtitle: "Tage mit Einschr\u00E4nkungen im KVV-Netz",
        data: {
          categories: ["2022", "2023", "2024", "2025", "2026*"],
          stacks: [
            { label: "Bautage", color: "#ea580c" },
          ],
          unit: "Tage",
          values: [
            [85],
            [110],
            [140],
            [165],
            [190],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Mit der B\u00FCndelung der Bauarbeiten in den Ferienzeiten werden die Auswirkungen auf den regul\u00E4ren Berufs- und Sch\u00FClerverkehr bewusst reduziert.",
          author: "VBK Pressemitteilung, M\u00E4rz 2026",
          color: "#ea580c",
        },
      },
      {
        type: "waffle",
        title: "Tram-Netz Karlsruhe",
        subtitle: "Wie viele Linien sind gerade betroffen?",
        data: {
          total: 20,
          filled: 12,
          filledColor: "#ea580c",
          emptyColor: "#e5e7eb",
          annotation: "12 von ca. 20 VBK/AVG-Linien im Stadtgebiet sind im Fr\u00FChjahr 2026 von Bauma\u00DFnahmen betroffen \u2013 entweder durch Sperrungen, Umleitungen oder Schienenersatzverkehr.",
          secondaryFilled: 0,
          secondaryColor: "#1d4ed8",
          filledLabel: "Betroffen (12 Linien)",
          secondaryLabel: "",
          emptyLabel: "Nicht betroffen (8 Linien)",
        },
      },
    ],
    sources: [
      "VBK Pressemitteilung, 13.03.2026",
      "KVV Verkehrsmeldungen, 10.04.2026",
      "Deutsche Bahn, Bauarbeiten Rheintalbahn, 26.03.2026",
      "SWR Aktuell, 27.03.2026",
      "die-neue-welle.de, 04.04.2026",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "12+ Linien gleichzeitig betroffen, 7 Wochen Entenfang-Sperre, Busse statt S-Bahn nach Bretten, +2 Stunden nach Freiburg. Willkommen in der Dauerbaustelle F\u00E4cherstadt.\n\n\u27a1 ka-life.de/#/kw/kw16-2026",
  },
  {
    id: "kw15-2026",
    weekNumber: 15,
    year: 2026,
    dateRange: "6.\u201312. April 2026",
    title: "18 Euro f\u00FCr 30 Quadratmeter",
    subtitle: "Die Mieten in Karlsruhe steigen weiter \u2013 Studis zahlen inzwischen 480 Euro f\u00FCr ein WG-Zimmer und 18,42 \u20ac/m\u00B2 f\u00FCr Kleinstwohnungen. Ein Stadtteil-Vergleich.",
    kicker: "Wohnen & Mieten",
    theme: {
      accent: "#b91c1c",
      accentLight: "#f87171",
      accentDark: "#7f1d1d",
      secondary: "#1e40af",
      tertiary: "#d97706",
      background: "#fafafa",
    },
    socialCard: {
      headline: "18 Euro f\u00FCr\n30 Quadratmeter",
      subline: "Karlsruhe Mietspiegel \u00b7 KW 15",
      keyNumber: "18\u20ac",
      keyLabel: "pro m\u00B2 f\u00FCr Kleinstwohnungen",
      gradient: "linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Karlsruhe in Zahlen",
        subtitle: "Mietpreise 2026 \u2013 Stand Q1",
        data: {
          cards: [
            { value: "18,42", unit: "\u20ac/m\u00B2", label: "Kleinstwohnungen (30 m\u00B2)", color: "#b91c1c" },
            { value: "5,2", unit: "% Anstieg", label: "Gegen\u00FCber Q1 2025", color: "#d97706" },
            { value: "480", unit: "\u20ac warm", label: "WG-Zimmer Durchschnitt", color: "#1e40af" },
            { value: "16,98", unit: "\u20ac/m\u00B2", label: "Nordstadt \u2013 teuerster Stadtteil", color: "#7f1d1d" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Die Wahrheit \u00FCber Karlsruher Mieten",
        data: {
          pies: [
            {
              title: "Was Karlsruher Studis von der Miete \u00FCbrig bleibt",
              slices: [
                { label: "Miete", value: 45, color: "#b91c1c" },
                { label: "Mensa", value: 20, color: "#d97706" },
                { label: "Semesterticket", value: 15, color: "#1e40af" },
                { label: "Leben", value: 20, color: "#6b7280" },
              ] as PieSlice[],
            },
            {
              title: "Wohnungsbesichtigung in KA",
              slices: [
                { label: "50 Bewerber vor dir", value: 40, color: "#b91c1c" },
                { label: "Vermieter ghostet", value: 25, color: "#7f1d1d" },
                { label: "Zu teuer", value: 20, color: "#d97706" },
                { label: "Zuschlag bekommen", value: 15, color: "#22c55e" },
              ] as PieSlice[],
            },
            {
              title: "Warum die Mieten steigen",
              slices: [
                { label: "Zu wenig Neubau", value: 35, color: "#b91c1c" },
                { label: "KIT zieht alle an", value: 25, color: "#1e40af" },
                { label: "Kombi-Aufwertung", value: 20, color: "#d97706" },
                { label: "Investor:innen", value: 20, color: "#7f1d1d" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "comparison",
        title: "Stadtteil-Ranking",
        subtitle: "Kaltmiete pro m\u00B2 nach Stadtteil (2026)",
        data: {
          items: [
            { label: "Nordstadt", value: 100, display: "16,98 \u20ac", color: "#b91c1c" },
            { label: "Innenstadt-West", value: 94, display: "15,90 \u20ac", color: "#dc2626" },
            { label: "S\u00fcdweststadt", value: 88, display: "14,95 \u20ac", color: "#ef4444" },
            { label: "Oststadt", value: 84, display: "14,20 \u20ac", color: "#f87171" },
            { label: "M\u00fchlburg", value: 74, display: "12,50 \u20ac", color: "#d97706" },
            { label: "Durlach", value: 70, display: "11,80 \u20ac", color: "#1e40af" },
            { label: "Stupferich", value: 61, display: "10,40 \u20ac", color: "#22c55e" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Mietpreisentwicklung",
        subtitle: "Durchschnittliche Kaltmiete in Karlsruhe",
        data: {
          categories: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"],
          stacks: [
            { label: "\u20ac/m\u00B2", color: "#b91c1c" },
          ],
          unit: "\u20ac/m\u00B2",
          values: [
            [11.10],
            [11.67],
            [12.03],
            [12.25],
            [12.48],
            [12.59],
            [14.54],
            [14.72],
            [14.77],
          ],
        },
      },
      {
        type: "timeline",
        title: "Mietexplosion in Karlsruhe",
        subtitle: "Von bezahlbar zu \u201Ewie bitte?!\u201C",
        data: {
          events: [
            { date: "2018", label: "Durchschnitt 11,10 \u20ac/m\u00B2 \u2013 noch moderat" },
            { date: "2020", label: "Corona-Knick: Mieten stagnieren kurz" },
            { date: "2023", label: "Baukosten explodieren, Neubau bricht ein" },
            { date: "2024", label: "+15,5% Sprung auf 14,54 \u20ac/m\u00B2", highlight: true },
            { date: "2025", label: "Mietpreisbremse verl\u00E4ngert \u2013 hilft kaum" },
            { date: "Q1 2026", label: "14,77 \u20ac/m\u00B2 Durchschnitt, Rekordstand", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Die Lage wird mindestens bis 2030 sehr angespannt bleiben.",
          author: "Ludwig Dorffmeister, ifo Institut, 2025",
          color: "#b91c1c",
        },
      },
      {
        type: "waffle",
        title: "BAf\u00f6G vs. Miete",
        subtitle: "Was vom H\u00f6chstsatz \u00fcbrig bleibt",
        data: {
          total: 100,
          filled: 55,
          filledColor: "#b91c1c",
          emptyColor: "#e5e7eb",
          annotation: "55% des BAf\u00f6G-H\u00f6chstsatzes (992 \u20ac) gehen f\u00fcr ein durchschnittliches WG-Zimmer in Karlsruhe drauf. F\u00fcr Essen, Versicherung und Leben bleiben 450 \u20ac.",
          secondaryFilled: 0,
          secondaryColor: "#d97706",
          filledLabel: "Miete (ca. 540 \u20ac f\u00fcr WG-Zimmer warm)",
          secondaryLabel: "",
          emptyLabel: "Rest f\u00fcr alles andere (450 \u20ac)",
        },
      },
    ],
    sources: [
      "Wohnungsb\u00f6rse.net, Mietspiegel Karlsruhe Q1 2026",
      "ImmoScout24, Mietspiegel Karlsruhe Q1 2026",
      "WG-Gesucht.de, Karlsruhe, April 2026",
      "ifo Institut, Wohnungsmarktprognose 2025",
      "Engel & V\u00f6lkers, Mietpreise Karlsruhe 2026",
    ],
    editorNote: "Die F\u00e4chertorten sind satirisch \u00fcberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "18,42 \u20ac pro Quadratmeter f\u00fcr 30 m\u00b2 in Karlsruhe. 480 \u20ac f\u00fcr ein WG-Zimmer. Und 55% vom BAf\u00f6G gehen nur f\u00fcr die Miete drauf. Willkommen auf dem Karlsruher Wohnungsmarkt 2026.\n\n\u27a1 ka-life.de/#/kw/kw15-2026",
  },
  {
    id: "kw14-2026",
    weekNumber: 14,
    year: 2026,
    dateRange: "30. M\u00E4rz\u20135. April 2026",
    title: "Zur\u00FCck zum Mond \u2013 mit deutscher Technik",
    subtitle: "Artemis II startet am 1. April 2026 mit 4 Astronauten zum Mond. An Bord: ein European Service Module aus Europa und ein deutscher Kleinsatellit.",
    kicker: "Raumfahrt & Technik",
    theme: {
      accent: "#1a237e",
      accentLight: "#5c6bc0",
      accentDark: "#0d1247",
      secondary: "#ff6f00",
      tertiary: "#b0bec5",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Zur\u00FCck zum Mond\n\u2013 mit deutscher Technik",
      subline: "Artemis II \u00b7 1. April 2026",
      keyNumber: "54",
      keyLabel: "Jahre seit dem letzten Mondflug",
      gradient: "linear-gradient(135deg, #1a237e 0%, #0d1247 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Artemis II in Zahlen",
        subtitle: "Die erste bemannte Mondmission seit Apollo 17",
        data: {
          cards: [
            { value: "54", unit: "Jahre", label: "Seit Apollo 17 (Dezember 1972)", color: "#1a237e" },
            { value: "4", unit: "Astronauten", label: "Erste Frau und erster Kanadier Richtung Mond", color: "#ff6f00" },
            { value: "10", unit: "Tage", label: "Missionsdauer Erde\u2013Mond\u2013Erde", color: "#5c6bc0" },
            { value: "5", unit: "Mrd. \u20ac", label: "Deutschlands neues ESA-Budget (3 Jahre)", color: "#1a237e" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was uns Artemis II wirklich lehrt",
        data: {
          pies: [
            {
              title: "Warum wir zum Mond fliegen",
              slices: [
                { label: "Wissenschaft", value: 25, color: "#1a237e" },
                { label: "Geopolitik", value: 35, color: "#ff6f00" },
                { label: "Nostalgie", value: 25, color: "#5c6bc0" },
                { label: "Elon hat's versprochen", value: 15, color: "#b0bec5" },
              ] as PieSlice[],
            },
            {
              title: "Was Karlsruher zum Mondflug sagen",
              slices: [
                { label: "Cool, aber Kombil\u00F6sung?", value: 40, color: "#1a237e" },
                { label: "Wann fliegt der KSC?", value: 25, color: "#5c6bc0" },
                { label: "Beeindruckend!", value: 20, color: "#ff6f00" },
                { label: "War das nicht ein Aprilscherz?", value: 15, color: "#b0bec5" },
              ] as PieSlice[],
            },
            {
              title: "Deutschlands Beitrag zu Artemis",
              slices: [
                { label: "ESM-Antrieb (Airbus Bremen)", value: 40, color: "#1a237e" },
                { label: "CubeSat TACHELES", value: 20, color: "#ff6f00" },
                { label: "ESA-Budget (5 Mrd. \u20ac)", value: 25, color: "#5c6bc0" },
                { label: "Moralische Unterst\u00FCtzung", value: 15, color: "#b0bec5" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Der lange Weg zur\u00FCck zum Mond",
        subtitle: "Von Apollo 17 bis Artemis II",
        data: {
          events: [
            { date: "Dez. 1972", label: "Apollo 17: Letzter bemannter Mondflug" },
            { date: "2004", label: "Constellation-Programm gestartet (sp\u00E4ter eingestellt)" },
            { date: "2017", label: "NASA k\u00FCndigt Artemis-Programm an" },
            { date: "Nov. 2022", label: "Artemis I: Unbemannter Testflug um den Mond", highlight: true },
            { date: "Jan. 2026", label: "Artemis II Rollout zur Startrampe 39B" },
            { date: "1. April 2026", label: "Artemis II: 4 Astronauten fliegen zum Mond", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Artemis vs. Apollo",
        subtitle: "Wie sich die Mondmissionen unterscheiden",
        data: {
          items: [
            { label: "Artemis II \u2013 Kosten pro Flug", value: 100, display: "4,1 Mrd. $", color: "#1a237e" },
            { label: "Apollo 11 \u2013 inflationsbereinigt", value: 65, display: "2,7 Mrd. $", color: "#ff6f00" },
            { label: "SLS-Raketenl\u00E4nge", value: 98, display: "98 m", color: "#5c6bc0" },
            { label: "Saturn V-Raketenl\u00E4nge", value: 88, display: "111 m", color: "#b0bec5" },
          ] as BarItem[],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "The next era of exploration begins.",
          author: "Jared Isaacman, NASA-Administrator, 1. April 2026",
          color: "#1a237e",
        },
      },
      {
        type: "stacked-bar",
        title: "ESA-Budget nach L\u00E4ndern",
        subtitle: "Top-Beitragszahler 2026\u20132028 (in Mrd. \u20ac)",
        data: {
          categories: ["Deutschland", "Frankreich", "Italien", "UK", "Spanien"],
          stacks: [
            { label: "ESA-Beitrag", color: "#1a237e" },
          ],
          unit: "Mrd. \u20ac",
          values: [
            [5.0],
            [3.8],
            [2.2],
            [1.8],
            [0.9],
          ],
        },
      },
    ],
    sources: [
      "NASA, Artemis II Mission Overview, 01.04.2026",
      "NASASpaceFlight.com, 31.03.2026",
      "DLR Pressemitteilung, 18.09.2024",
      "ESA Ministerial Council, Nov. 2025",
      "AP News, 01.04.2026",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "54 Jahre nach Apollo 17 fliegen wieder Menschen zum Mond. An Bord von Artemis II: ein europ\u00E4isches Antriebsmodul und ein deutscher Kleinsatellit. Was die Mission f\u00FCr Deutschland bedeutet.\n\n\u27A1 ka-life.de/#/kw/kw14-2026",
  },
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
          unit: "Tsd.",
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
          filledLabel: "Verbrenner (44 von 100)",
          secondaryLabel: "Elektro (28 von 100)",
          emptyLabel: "Sonstige (28 von 100)",
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
    socialPostText: "Der BGH in Karlsruhe hat entschieden: Autobauer m\u00FCssen nicht schneller aus dem Verbrenner raus, als die Politik es vorgibt. Was das f\u00FCr die Klimadebatte bedeutet \u2013 in unserer neuen Infografik.\n\n\u27A1 ka-life.de/#/kw/kw13-2026",
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
          filledLabel: "Unentschieden + Niederlagen (4+4)",
          secondaryLabel: "Siege (6 von 14)",
          emptyLabel: "Ausstehend (4 von 14)",
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
    socialPostText: "37 Punkte, Platz 8, Tordifferenz minus 8: Der KSC pendelt zwischen Gl\u00FCcksgef\u00FChlen und Frust. Ein Blick auf die Achterbahn-Saison in Blau-Wei\u00DF.\n\n\u27A1 ka-life.de/#/kw/kw12-2026",
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
          unit: "Mio. \u20ac",
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
    socialPostText: "Das KIT bleibt Exzellenzuniversit\u00E4t! 105 Millionen Euro F\u00F6rderung, Top 10 weltweit in Quantenforschung \u2013 was der Titel f\u00FCr Karlsruhe bedeutet.\n\n\u27A1 ka-life.de/#/kw/kw11-2026",
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
          unit: "%",
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
    socialPostText: "Landtagswahl 2026: Karlsruhe w\u00E4hlt mit 39% Gr\u00FCne deutlich gr\u00FCner als der Rest des Landes. Cem \u00d6zdemir wird Ministerpr\u00E4sident.\n\n\u27A1 ka-life.de/#/kw/kw10-2026",
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
          filledLabel: "Umgebaut erhalten (4 von 30)",
          secondaryLabel: "Original erhalten (18 von 30)",
          emptyLabel: "Abgerissen (8 von 30)",
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
    socialPostText: "Vor 200 Jahren starb Friedrich Weinbrenner \u2013 der Mann, der Karlsruhe geformt hat. Vom Marktplatz bis zur Pyramide: Was von seinem Erbe \u00FCbrig ist.\n\n\u27A1 ka-life.de/#/kw/kw09-2026",
  },
  {
    id: "kw08-2026",
    weekNumber: 8,
    year: 2026,
    dateRange: "16.\u201322. Feb. 2026",
    title: "500 K\u00E4fige f\u00FCr die Freiheit",
    subtitle: "THE CAGE von Fahar Al-Salih verwandelt die Stadtkirche in einen begehbaren K\u00E4fig aus 500 Vogelk\u00E4figen \u2013 Kunst zwischen Freiheit und Begrenzung.",
    kicker: "Kunst & Gesellschaft",
    theme: {
      accent: "#6b4c2a",
      accentLight: "#c9a96e",
      accentDark: "#3d2a14",
      secondary: "#d4a017",
      tertiary: "#5c7a3d",
      background: "#fafafa",
    },
    socialCard: {
      headline: "500 K\u00E4fige\nf\u00FCr die Freiheit",
      subline: "THE CAGE \u00b7 Stadtkirche \u00b7 KW 8",
      keyNumber: "500",
      keyLabel: "Handgefertigte Vogelk\u00E4fige",
      gradient: "linear-gradient(135deg, #6b4c2a 0%, #3d2a14 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "THE CAGE in Zahlen",
        subtitle: "Eine Installation, die bewegt",
        data: {
          cards: [
            { value: "500", unit: "K\u00E4fige", label: "Handgefertigt aus Palmbl\u00E4ttern", color: "#6b4c2a" },
            { value: "5", unit: "Meter hoch", label: "Begehbarer Raum in der Stadtkirche", color: "#d4a017" },
            { value: "8", unit: "Meter lang", label: "Monumentale Rauminstallation", color: "#5c7a3d" },
            { value: "3", unit: "Wochen", label: "7.\u201329. M\u00E4rz 2026", color: "#3d2a14" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was uns THE CAGE lehrt",
        data: {
          pies: [
            {
              title: "Warum Karlsruher in die Stadtkirche gehen",
              slices: [
                { label: "Wegen der Kunst", value: 45, color: "#6b4c2a" },
                { label: "Instagram-Foto", value: 25, color: "#d4a017" },
                { label: "Zuf\u00E4llig reingelaufen", value: 20, color: "#c9a96e" },
                { label: "Tats\u00E4chlich Gottesdienst", value: 10, color: "#adb5bd" },
              ] as PieSlice[],
            },
            {
              title: "Unsichtbare K\u00E4fige in Karlsruhe",
              slices: [
                { label: "Mietpreise", value: 35, color: "#6b4c2a" },
                { label: "Kombi-Baustellen", value: 25, color: "#d4a017" },
                { label: "B\u00FCrokratie", value: 25, color: "#5c7a3d" },
                { label: "KSC-Dauerkarte", value: 15, color: "#adb5bd" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Kunst in der Stadtkirche",
        subtitle: "Vom Weinbrenner-Bau zum Kunstort",
        data: {
          events: [
            { date: "1807", label: "Friedrich Weinbrenner erbaut die Stadtkirche" },
            { date: "2022", label: "Fahar Al-Salih schafft THE CAGE in Riad" },
            { date: "2024", label: "GAIA: 90.000 Besucher in der Stadtkirche", highlight: true },
            { date: "2025", label: "Stellar Sanctuary: 32.000 Besucher" },
            { date: "7. M\u00E4rz 2026", label: "THE CAGE er\u00F6ffnet in Karlsruhe", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Besuchermagneten Stadtkirche",
        subtitle: "Kunstinstallationen der letzten Jahre",
        data: {
          items: [
            { label: "GAIA (2024)", value: 90, display: "90.000", color: "#6b4c2a" },
            { label: "Stellar Sanctuary (2025)", value: 32, display: "32.000", color: "#d4a017" },
            { label: "THE CAGE (2026, Prognose)", value: 50, display: "50.000?", color: "#5c7a3d" },
          ] as BarItem[],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Wir sind hier in einem offenen K\u00E4fig. Das symbolisiert Optimismus: Man kann hinein- und hinausgehen.",
          author: "Fahar Al-Salih, K\u00FCnstler",
          color: "#6b4c2a",
        },
      },
      {
        type: "waffle",
        title: "Herkunft der K\u00E4fige",
        subtitle: "Traditionelle irakische Handwerkskunst",
        data: {
          total: 20,
          filled: 20,
          filledColor: "#6b4c2a",
          emptyColor: "#e5e7eb",
          annotation: "Alle 500+ K\u00E4fige sind aus Resten von Palmbl\u00E4ttern handgefertigt \u2013 ohne Kleber, ohne N\u00E4gel. Jeder ist ein Unikat.",
          secondaryFilled: 0,
          secondaryColor: "#d4a017",
          filledLabel: "Handgefertigt aus Palmbl\u00E4ttern (alle)",
          secondaryLabel: "",
          emptyLabel: "",
        },
      },
    ],
    sources: [
      "SWR Kultur, 04.03.2026",
      "karlsruhe-erleben.de, THE CAGE",
      "Sculpture Network",
      "thecage-stadtkirchekarlsruhe.de",
      "UNESCO City of Media Arts Karlsruhe",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "500 handgefertigte Vogelk\u00E4fige bilden einen begehbaren Raum in der Karlsruher Stadtkirche. THE CAGE von Fahar Al-Salih fragt: In welchen K\u00E4figen leben wir?\n\n\u27A1 ka-life.de/#/kw/kw08-2026",
  },
  {
    id: "kw06-2026",
    weekNumber: 6,
    year: 2026,
    dateRange: "2.\u20138. Feb. 2026",
    title: "Deutschlands gr\u00F6\u00DFte Kunstmesse",
    subtitle: "Die art karlsruhe 2026 bringt 180 Galerien aus 18 L\u00E4ndern, 50.000 Besucher und Kunst von 20 Euro bis 1,12 Millionen.",
    kicker: "Kunst & Kultur",
    theme: {
      accent: "#9b2335",
      accentLight: "#e06070",
      accentDark: "#5c0f1a",
      secondary: "#2c3e50",
      tertiary: "#f39c12",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Deutschlands gr\u00F6\u00DFte\nKunstmesse",
      subline: "art karlsruhe \u00b7 KW 6",
      keyNumber: "180",
      keyLabel: "Galerien aus 18 L\u00E4ndern",
      gradient: "linear-gradient(135deg, #9b2335 0%, #5c0f1a 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "art karlsruhe 2026",
        subtitle: "Vier Tage Kunst in vier Hallen",
        data: {
          cards: [
            { value: "180", unit: "Galerien", label: "Aus 18 L\u00E4ndern", color: "#9b2335" },
            { value: "50000", unit: "Besucher", label: "An vier Messetagen", color: "#2c3e50" },
            { value: "120", unit: "Jahre", label: "Kunstgeschichte unter einem Dach", color: "#f39c12" },
            { value: "18", unit: "Neuaussteller", label: "Frische Impulse aus dem Ausland", color: "#9b2335" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was auf der Messe wirklich passiert",
        data: {
          pies: [
            {
              title: "Was Besucher auf der art machen",
              slices: [
                { label: "Staunen", value: 35, color: "#9b2335" },
                { label: "Preisschilder suchen", value: 30, color: "#f39c12" },
                { label: "Sektempfang", value: 20, color: "#e06070" },
                { label: "Tats\u00E4chlich kaufen", value: 15, color: "#2c3e50" },
              ] as PieSlice[],
            },
            {
              title: "Preisspanne der Kunstwerke",
              slices: [
                { label: "Unter 1.000 \u20ac", value: 30, color: "#2c3e50" },
                { label: "1.000\u201310.000 \u20ac", value: 35, color: "#9b2335" },
                { label: "10.000\u2013100.000 \u20ac", value: 25, color: "#f39c12" },
                { label: "\u00dcber 100.000 \u20ac", value: 10, color: "#e06070" },
              ] as PieSlice[],
            },
            {
              title: "Woher die Galerien kommen",
              slices: [
                { label: "Deutschland", value: 70, color: "#2c3e50" },
                { label: "Frankreich/Schweiz", value: 12, color: "#9b2335" },
                { label: "Resteuropa", value: 12, color: "#f39c12" },
                { label: "\u00dcbersee", value: 6, color: "#e06070" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "comparison",
        title: "Kunst f\u00FCr jedes Budget",
        subtitle: "Die Preisspanne 2026",
        data: {
          items: [
            { label: "Teuerstes Werk", value: 100, display: "1,12 Mio. \u20ac", color: "#9b2335" },
            { label: "Richter-Druck", value: 40, display: "~50.000 \u20ac", color: "#2c3e50" },
            { label: "Nachwuchskunst", value: 8, display: "Ab 500 \u20ac", color: "#f39c12" },
            { label: "Vogel-Benefiz", value: 2, display: "Ab 20 \u20ac", color: "#e06070" },
          ] as BarItem[],
        },
      },
      {
        type: "timeline",
        title: "Messe-Historie",
        subtitle: "Vom Newcomer zur gr\u00F6\u00DFten Kunstmesse",
        data: {
          events: [
            { date: "2004", label: "Erste art karlsruhe \u2013 Startschuss" },
            { date: "2010", label: "\u00dcber 40.000 Besucher zum ersten Mal" },
            { date: "2020", label: "Letzte Messe vor Corona" },
            { date: "2023", label: "Neustart mit neuem Konzept" },
            { date: "Feb. 2026", label: "180 Galerien, 50.000 Besucher \u2013 Rekord!", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Die Messe funktioniert, f\u00FCr Galerien, f\u00FCr Besucher und f\u00FCr den Markt.",
          author: "Kristian Jarmuschek, Beiratsvorsitzender art karlsruhe",
          color: "#9b2335",
        },
      },
      {
        type: "stacked-bar",
        title: "Besucherentwicklung",
        subtitle: "art karlsruhe (in Tausend)",
        data: {
          categories: ["2018", "2019", "2020", "2023", "2024", "2026"],
          stacks: [
            { label: "Besucher", color: "#9b2335" },
          ],
          unit: "Tsd.",
          values: [
            [47],
            [52],
            [0],
            [42],
            [46],
            [50],
          ],
        },
      },
    ],
    sources: [
      "art-karlsruhe.de, Pressemitteilungen",
      "SWR Kultur, 09.02.2026",
      "Artnet News, 26.01.2026",
      "metropolregion.tv",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "180 Galerien, 18 L\u00E4nder, 50.000 Besucher: Die art karlsruhe 2026 zeigt, warum Karlsruhe Deutschlands wichtigster Kunstmesse-Standort ist.\n\n\u27A1 ka-life.de/#/kw/kw06-2026",
  },
];

export function getInfographicById(id: string): WeeklyInfographic | undefined {
  return infographics.find((ig) => ig.id === id);
}
