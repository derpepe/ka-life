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
    id: "kw37-2026",
    weekNumber: 37,
    year: 2026,
    dateRange: "7.\u201313. September 2026",
    title: "ARMAR-7 f\u00E4hrt zum Minister",
    subtitle: "Am Cyber Valley Day in T\u00FCbingen hat das KIT diese Woche seinen humanoiden Assistenzroboter ARMAR-7 vorgestellt \u2013 vor Ministerpr\u00E4sident Cem \u00D6zdemir. 26 Jahre nach dem ersten Karlsruher Humanoid ist die F\u00E4cherstadt still und leise zur deutschen ARMAR-Metropole geworden.",
    kicker: "KIT-Robotik",
    theme: {
      accent: "#0891b2",
      accentLight: "#67e8f9",
      accentDark: "#0e2a4b",
      secondary: "#f59e0b",
      tertiary: "#64748b",
      background: "#fafafa",
    },
    socialCard: {
      headline: "ARMAR-7 f\u00E4hrt\nzum Minister",
      subline: "KIT beim Cyber Valley Day \u00B7 11.\u202F9.\u202F2026 \u00B7 KW 37",
      keyNumber: "7",
      keyLabel: "ARMAR-Generation aus Karlsruhe \u2013 seit 26 Jahren am H\u00B2T des KIT entwickelt",
      gradient: "linear-gradient(135deg, #0891b2 0%, #164e63 50%, #0e2a4b 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "ARMAR-7 in Zahlen",
        subtitle: "Der humanoide Assistenzroboter am KIT-Institut f\u00FCr Anthropomatik und Robotik",
        data: {
          cards: [
            { value: "30", unit: "+ Gelenke", label: "Freiheitsgrade in Kopf, Torso, zwei Armen und der mobilen Plattform", color: "#0891b2" },
            { value: "7", unit: ". Generation", label: "ARMAR-Modell seit 2000 \u2013 die Familie geh\u00F6rt zu Europas ersten Humanoiden", color: "#164e63" },
            { value: "3", unit: "Rechner", label: "Sitzen in der mobilen Basis \u2013 zusammen mit Batterien und drei R\u00E4dern", color: "#f59e0b" },
            { value: "5\u201310", unit: "Jahre", label: "Sch\u00E4tzt Prof. Tamim Asfour, bis solche Roboter im echten Pflegealltag stehen", color: "#0e2a4b" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Drei Karlsruher Perspektiven auf einen Roboter, der Ministerpr\u00E4sidenten trifft",
        data: {
          pies: [
            {
              title: "Was ARMAR-7 tats\u00E4chlich schon kann",
              slices: [
                { label: "Sp\u00FClmaschine ausr\u00E4umen, ohne den Cappuccino-L\u00F6ffel im Karnies liegen zu lassen", value: 30, color: "#0891b2" },
                { label: "W\u00E4sche nach hell und dunkel sortieren, wenn Kleidung nicht dazwischen liegt", value: 24, color: "#164e63" },
                { label: "Objekte auf Gesten erkennen und in Zeitlupe \u00FCbergeben", value: 18, color: "#67e8f9" },
                { label: "Sich merken, wo die K\u00FCchenutensilien vor zwei Stunden lagen", value: 14, color: "#f59e0b" },
                { label: "Menschen bei einer Handlung zuschauen und daraus ein Modell bauen", value: 10, color: "#64748b" },
                { label: "Ministerpr\u00E4sidenten die Hand sch\u00FCtteln, ohne den PR-Termin zu ruinieren", value: 4, color: "#0e2a4b" },
              ] as PieSlice[],
            },
            {
              title: "Was Karlsruher Kolleg:innen fragen, wenn ARMAR im Videocall auftaucht",
              slices: [
                { label: "\u201EWann kann der endlich meinen Wochenendputz machen?\u201C", value: 30, color: "#0891b2" },
                { label: "\u201EKann der auch mal die Balkonpflanze gie\u00DFen?\u201C", value: 22, color: "#164e63" },
                { label: "\u201EWie lernt der eigentlich \u2013 mit oder ohne DSGVO-Vermerk?\u201C", value: 18, color: "#f59e0b" },
                { label: "\u201EIst das ein K\u00FCnstler von der Karlsruher Kunsthochschule?\u201C", value: 14, color: "#67e8f9" },
                { label: "\u201EReden wir hier von 5 Jahren oder von den KIT-5-Jahren?\u201C", value: 10, color: "#64748b" },
                { label: "\u201EWas kostet mich das denn dann?\u201C, gleich zweimal", value: 6, color: "#0e2a4b" },
              ] as PieSlice[],
            },
            {
              title: "Wie eine Karlsruher Pflegeeinrichtung sich einen ARMAR im Jahr 2032 vorstellt",
              slices: [
                { label: "Hilft nachts, wenn der Pflegedienst nur zu zweit unterwegs ist", value: 30, color: "#0891b2" },
                { label: "Bringt Wasser und Fernbedienung, wenn Bewohner klingeln", value: 22, color: "#164e63" },
                { label: "Wird nach zwei Wochen \u201EHerr Doktor\u201C genannt, weil er so ruhig spricht", value: 20, color: "#f59e0b" },
                { label: "L\u00E4sst sich vom 92-j\u00E4hrigen Herrn Meier beim Skat schlagen", value: 14, color: "#67e8f9" },
                { label: "Erkl\u00E4rt geduldig, warum er das WLAN-Passwort nicht kennt", value: 10, color: "#64748b" },
                { label: "Wird dennoch vom Chef als \u201Eeigentlich unn\u00F6tig\u201C bezeichnet", value: 4, color: "#0e2a4b" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "26 Jahre ARMAR in Karlsruhe",
        subtitle: "Vom 25-DoF-K\u00FCchenroboter bis zum Cyber-Valley-Auftritt",
        data: {
          events: [
            { date: "2000", label: "ARMAR-I wird am damaligen Forschungszentrum Karlsruhe fertig \u2013 der erste Karlsruher Humanoid mit 25 Freiheitsgraden" },
            { date: "2002", label: "ARMAR-II geht in Betrieb, aus dem DFG-Sonderforschungsbereich 588 \u201ELernende und kooperierende multimodale Roboter\u201C" },
            { date: "2006\u20132008", label: "ARMAR-III kommt als K\u00FCchenroboter in die Labore \u2013 das Modell, das die \u00D6ffentlichkeit als \u201Eden KIT-Roboter\u201C kennenlernt" },
            { date: "2012", label: "ARMAR-4 wird zum ersten laufenden Humanoiden der Karlsruher Familie \u2013 zwei Beine, zwei Arme, ein Torso" },
            { date: "April 2026", label: "ARMAR-7 tritt auf der Hannover Messe erstmals \u00F6ffentlich als lernender Assistent auf \u2013 mit VINCENT-H\u00E4nden aus Karlsruhe", highlight: true },
            { date: "9. September 2026", label: "Cyber Valley Day in T\u00FCbingen: 10 Jahre KI- und Robotik-Zentrum, MP Cem \u00D6zdemir er\u00F6ffnet das Programm", highlight: true },
            { date: "11. September 2026", label: "KIT ver\u00F6ffentlicht die offizielle Meldung: ARMAR-7 hat den Ministerpr\u00E4sidenten in T\u00FCbingen begr\u00FC\u00DFt", highlight: true },
            { date: "2031\u20132036", label: "Erwartetes Zeitfenster f\u00FCr die ersten produktiven Eins\u00E4tze humanoider Assistenzroboter in deutschen Pflegeeinrichtungen" },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "ARMAR-Familie im Vergleich",
        subtitle: "Freiheitsgrade der Karlsruher Humanoiden im Verlauf der Generationen (grob)",
        data: {
          items: [
            { label: "ARMAR-I (2000)", value: 25, display: "25 Gelenke", color: "#64748b" },
            { label: "ARMAR-III (2006)", value: 43, display: "43 Gelenke", color: "#67e8f9" },
            { label: "ARMAR-4 (2012)", value: 63, display: "63 Gelenke", color: "#0891b2" },
            { label: "ARMAR-6 (2018)", value: 27, display: "27 Gelenke", color: "#164e63" },
            { label: "ARMAR-7 (2026)", value: 32, display: "\u00FCber 30 Gelenke", color: "#0e2a4b" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Woraus die Cyber Valley Familie besteht",
        subtitle: "Beteiligungen am 2016 gegr\u00FCndeten Cyber Valley Innovation Campus \u2013 grobe Verteilung nach Cluster",
        data: {
          categories: [
            "Max-Planck-Institute (Intelligente Systeme)",
            "Universit\u00E4t T\u00FCbingen (Cluster ML/AI)",
            "Universit\u00E4t Stuttgart",
            "Karlsruher Institut f\u00FCr Technologie (seit 2024)",
            "Industriepartner (Bosch, Amazon, Mercedes\u2026)",
            "Start-ups und Ausgr\u00FCndungen",
          ],
          stacks: [
            { label: "Aktive Forschungsgruppen (grob)", color: "#0891b2" },
          ],
          unit: "Gruppen",
          values: [
            [24],
            [18],
            [10],
            [8],
            [12],
            [22],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Der Roboter soll in der Lage sein, die Intention des Menschen zu erkennen. Solange ich meinen Arm nicht ausstrecke, wird er nicht versuchen, mir das Objekt zu \u00FCbergeben. Aber in dem Moment wird er das tun.",
          author: "Prof. Tamim Asfour, Leiter des H\u00B2T-Labors am KIT (Hannover Messe 2026)",
          color: "#0891b2",
        },
      },
      {
        type: "waffle",
        title: "Wie viele Sekunden pro Aufgabe braucht ARMAR-7\u202F?",
        subtitle: "Grobe Sch\u00E4tzung f\u00FCr eine 100er-Aufgabe wie \u201ESp\u00FClmaschine ausr\u00E4umen\u201C \u2013 im Vergleich zum ge\u00FCbten Menschen",
        data: {
          total: 100,
          filled: 70,
          filledColor: "#0891b2",
          emptyColor: "#e5e7eb",
          annotation: "F\u00FCr eine 100 Sekunden lange Alltagsaufgabe braucht der ge\u00FCbte Mensch rund 30 Sekunden, ARMAR-7 rund 100 \u2013 der Unterschied ist noch gro\u00DF. Prof. Asfour beziffert die verbleibende Reifezeit f\u00FCr flexible, sichere humanoide Assistenz auf f\u00FCnf bis zehn Jahre. Genau daran arbeitet das H\u00B2T-Labor am KIT jeden Werktag.",
          secondaryFilled: 30,
          secondaryColor: "#f59e0b",
          filledLabel: "Der zus\u00E4tzliche Zeitbedarf des Roboters (70)",
          secondaryLabel: "Reiner Bearbeitungsanteil des Menschen (30)",
          emptyLabel: "",
        },
      },
    ],
    sources: [
      "kit.edu, KIT zeigt humanoiden Roboter ARMAR beim Cyber Valley Day (11.\u202F9.\u202F2026)",
      "kit.edu (english), KIT Showcases Humanoid Robot ARMAR at Cyber Valley Day (11.\u202F9.\u202F2026)",
      "h2t.iar.kit.edu, ARMAR-Familie und ARMAR-7 (Stand 2026)",
      "SWR Aktuell, W\u00E4sche sortieren, Geschirr ausr\u00E4umen: Humanoider Roboter ARMAR-7 (22.\u202F4.\u202F2026)",
      "vincentsystems.de, Robotik-Kooperation mit KIT ARMAR-7",
      "cyber-valley.de, Cyber Valley Day 2026 \u2013 10 Jahre Innovation Campus (10.\u202F9.\u202F2026)",
      "landtag-bw.de, Cem \u00D6zdemir zum Ministerpr\u00E4sidenten gew\u00E4hlt (13.\u202F5.\u202F2026)",
      "Asfour et al., The Karlsruhe ARMAR Humanoid Robot (2017, Fachbeitrag)",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt. Die Cyber-Valley-Cluster-Verteilung und die Aufgaben-Sekundenwerte sind grobe Sch\u00E4tzungen zur Illustration; die Freiheitsgrade der ARMAR-Generationen entsprechen den ver\u00F6ffentlichten Angaben des H\u00B2T-Labors am KIT.",
    socialPostText: "ARMAR-7 hat sich diese Woche vor Ministerpr\u00E4sident \u00D6zdemir vorgestellt: 7. Generation, \u00FCber 30 Gelenke, seit 26 Jahren wird die Karlsruher Roboterfamilie entwickelt. Bis er wirklich im Pflegealltag steht, kalkuliert der KIT-Chefentwickler 5 bis 10 Jahre. Wir freuen uns schon aufs Skatspielen.\n\n\u27A1 ka-life.de/#/kw/kw37-2026",
  },
  {
    id: "kw36-2026",
    weekNumber: 36,
    year: 2026,
    dateRange: "31. August \u2013 6. September 2026",
    title: "62 Disziplinen, 1.048 Tage \u2013 Karlsruhe legt los",
    subtitle: "Am 3. September hat die IWGA das finale Sportprogramm der World Games 2029 verk\u00FCndet: 62 Disziplinen aus 36 Sportarten, so viele wie noch nie. Als erste Stadt der Geschichte wird Karlsruhe die World Games zum zweiten Mal ausrichten \u2013 und die Fassade der F\u00E4cherstadt wird bald in neuen Farben leuchten.",
    kicker: "World Games 2029",
    theme: {
      accent: "#059669",
      accentLight: "#6ee7b7",
      accentDark: "#064e3b",
      secondary: "#f59e0b",
      tertiary: "#0ea5e9",
      background: "#fafafa",
    },
    socialCard: {
      headline: "62 Disziplinen,\nein zweites Mal",
      subline: "World Games 2029 \u00B7 19.\u201329.\u202F7.\u202F2029 \u00B7 KW 36",
      keyNumber: "62",
      keyLabel: "Disziplinen aus 36 Sportarten \u2013 gr\u00F6\u00DFtes World-Games-Programm aller Zeiten",
      gradient: "linear-gradient(135deg, #059669 0%, #0d9488 45%, #0e7490 75%, #064e3b 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Die Spiele in Zahlen",
        subtitle: "Das am 3. September 2026 ratifizierte Sportprogramm f\u00FCr die 13. World Games in Karlsruhe",
        data: {
          cards: [
            { value: "62", unit: "Disziplinen", label: "Aus 36 Sportarten \u2013 mehr als bei jeder World-Games-Ausgabe zuvor", color: "#059669" },
            { value: "4.000", unit: "+ Athlet:innen", label: "Aus rund 100 L\u00E4ndern werden im Juli 2029 in der F\u00E4cherstadt erwartet", color: "#0ea5e9" },
            { value: "2", unit: ". Mal Ausrichter", label: "Karlsruhe ist die erste Stadt weltweit, die die World Games zweimal ausrichtet", color: "#f59e0b" },
            { value: "1.048", unit: "Tage bis Anpfiff", label: "Vom heutigen Samstag bis zum 19. Juli 2029 \u2013 der Countdown l\u00E4uft", color: "#064e3b" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Drei Karlsruher Innenansichten, w\u00E4hrend 1.048 Tage rasend schnell verrinnen",
        data: {
          pies: [
            {
              title: "Wie Karlsruher am Donnerstag von dem finalen Programm erfahren haben",
              slices: [
                { label: "BNN-Push-Notification zwischen zwei Bratwurst-Bestellungen", value: 28, color: "#059669" },
                { label: "OB-Mentrup-Reel auf Instagram, mit ungl\u00FCcklichem Sonnenlicht", value: 22, color: "#0d9488" },
                { label: "Kollege in der Kantine: \u201EJetzt kommt auch noch Sumo\u201C", value: 18, color: "#0ea5e9" },
                { label: "KIT-Newsletter, den die meisten sowieso schon abbestellt hatten", value: 14, color: "#f59e0b" },
                { label: "Vom Nachbarn, der beim TC Blau-Wei\u00DF im Turnen aktiv ist", value: 10, color: "#064e3b" },
                { label: "Gar nicht \u2013 sie sind noch im Urlaub am Turmberg", value: 8, color: "#6ee7b7" },
              ] as PieSlice[],
            },
            {
              title: "Welche der 62 Disziplinen im Karlsruher Kollegenkreis nachgefragt werden",
              slices: [
                { label: "Kunstradfahren, weil das 1989 der ganze Stolz war", value: 26, color: "#059669" },
                { label: "Beach-Handball, weil es \u201Ewie Urlaub, aber mit Regeln\u201C klingt", value: 22, color: "#0d9488" },
                { label: "Tauziehen, weil man endlich seine Kollegen einladen kann", value: 18, color: "#f59e0b" },
                { label: "Flossenschwimmen, weil niemand vorher wusste, dass das existiert", value: 16, color: "#0ea5e9" },
                { label: "Frisbeesport, weil man das 2029 dann Erwachsenensport nennen darf", value: 12, color: "#064e3b" },
                { label: "Sumo, weil man das ja mal live erlebt haben m\u00FCsste", value: 8, color: "#6ee7b7" },
              ] as PieSlice[],
            },
            {
              title: "Was zwischen 2026 und 2029 in Karlsruhe passieren muss, damit alles klappt",
              slices: [
                { label: "Die Stadthalle muss endlich fertigmodernisiert werden", value: 30, color: "#059669" },
                { label: "Der VBK muss lernen, gleichzeitig zu bauen und zu fahren", value: 24, color: "#0d9488" },
                { label: "Die Ehrenamtsdatenbank braucht 5.000 Freiwillige, nicht 500", value: 20, color: "#f59e0b" },
                { label: "Jemand muss die englische Beschilderung schreiben, ohne KI", value: 12, color: "#0ea5e9" },
                { label: "Der Wildpark bleibt am Wochenende bitte trocken", value: 8, color: "#064e3b" },
                { label: "Karlsruhe muss aufh\u00F6ren, sich f\u00FCr die eigene Ambition zu entschuldigen", value: 6, color: "#6ee7b7" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Der Weg zu den 62 Disziplinen",
        subtitle: "Wie sich das Programm der 13. World Games in Karlsruhe verdichtet hat",
        data: {
          events: [
            { date: "1989", label: "Karlsruhe richtet die 3. World Games aus \u2013 Kunstradfahren ist zum ersten und bis 2026 einzigen Mal Programmpunkt" },
            { date: "17. August 2025", label: "Staffelstab-\u00DCbergabe in Chengdu: Karlsruhe erh\u00E4lt offiziell das Recht, die 13. World Games auszurichten" },
            { date: "25. April 2026", label: "Erste 30 Sportarten stehen fest \u2013 IWGA-Mitglieder ratifizieren die Basisliste auf der AGM in Lausanne" },
            { date: "3. September 2026", label: "Das finale Programm mit 62 Disziplinen aus 36 Sportarten ist beschlossen, Para- und Einladungssportarten inklusive", highlight: true },
            { date: "4. September 2026", label: "Kunstradfahren feiert sein Comeback \u2013 nach exakt 40 Jahren wieder World-Games-Sport in Karlsruhe", highlight: true },
            { date: "23. Oktober 2026", label: "\u201E1.000 Days To Go\u201C \u2013 offizielle Countdown-Aktion im Karlsruher Stadtbild geplant", highlight: true },
            { date: "2027", label: "Detaillierte Venue-Zuordnung wird bekannt gegeben \u2013 Festplatz, Schwarzwaldhalle, Stadthalle, Messe stehen fest" },
            { date: "19. Juli 2029", label: "Er\u00F6ffnungsfeier: Karlsruhe wird als erste Stadt der Geschichte zum zweiten Mal Gastgeber der World Games", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Wachstum der World Games",
        subtitle: "Anzahl der offiziellen Sportarten je Ausgabe \u2013 von Santa Clara 1981 bis Karlsruhe 2029",
        data: {
          items: [
            { label: "1981 Santa Clara (I.)", value: 18, display: "18 Sportarten", color: "#94a3b8" },
            { label: "1989 Karlsruhe (III.)", value: 19, display: "19 Sportarten", color: "#6ee7b7" },
            { label: "2017 Breslau (X.)", value: 27, display: "27 Sportarten", color: "#0ea5e9" },
            { label: "2022 Birmingham (XI.)", value: 30, display: "30 Sportarten", color: "#0d9488" },
            { label: "2025 Chengdu (XII.)", value: 34, display: "34 Sportarten", color: "#0e7490" },
            { label: "2029 Karlsruhe (XIII.)", value: 36, display: "36 Sportarten", color: "#059669" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Woraus die 62 Disziplinen bestehen",
        subtitle: "Verteilung der Disziplinen nach Cluster \u2013 gesch\u00E4tzt auf Basis des IWGA-Programms vom 3. September 2026",
        data: {
          categories: [
            "Ballsport",
            "Kampfsport & Kraftsport",
            "Artistic & Tanzsport",
            "Trend- & Wassersport",
            "Pr\u00E4zisionssport & Sonstige",
            "Para- und Einladungssport",
          ],
          stacks: [
            { label: "Disziplinen", color: "#059669" },
          ],
          unit: "Disziplinen",
          values: [
            [14],
            [12],
            [10],
            [10],
            [6],
            [10],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Die internationale Sportwelt kann sich 2029 in Karlsruhe auf die vielseitigsten World Games aller Zeiten freuen \u2013 mit 62 Disziplinen.",
          author: "IWGA, Ank\u00FCndigung des finalen Sportprogramms \u00B7 3.\u202F9.\u202F2026",
          color: "#059669",
        },
      },
      {
        type: "waffle",
        title: "Karlsruhe ist das erste seiner Art",
        subtitle: "Von 12 bisher ausgetragenen World Games hat noch nie eine Stadt sie zweimal ausgerichtet \u2013 bis Karlsruhe 2029",
        data: {
          total: 12,
          filled: 1,
          filledColor: "#059669",
          emptyColor: "#e5e7eb",
          annotation: "Bislang hat jede World-Games-Stadt genau eine Ausgabe ausgerichtet \u2013 von Santa Clara 1981 \u00FCber London, Karlsruhe, Den Haag, Lahti, Akita, Duisburg, Kaohsiung, Cali, Breslau und Birmingham bis Chengdu 2025. Karlsruhe wird 2029 als erste Stadt \u00FCberhaupt zum zweiten Mal Ausrichter.",
          secondaryFilled: 11,
          secondaryColor: "#6ee7b7",
          filledLabel: "Karlsruhe 1989 + 2029 (1 Stadt, 2 Ausgaben)",
          secondaryLabel: "Andere St\u00E4dte mit je einer World-Games-Ausgabe (11)",
          emptyLabel: "",
        },
      },
    ],
    sources: [
      "IWGA, The World Games 2029 Sports Programme unveiled (25.\u202F4.\u202F2026)",
      "IWGA, Karlsruhe 2029 confirmed programme (Stand 4.\u202F9.\u202F2026)",
      "karlsruhe.de, The World Games 2029 Karlsruhe (Stand 4.\u202F9.\u202F2026)",
      "sportschau.de, Diese Sportarten sind dabei (3.\u202F9.\u202F2026)",
      "SWR Sport, The World Games Karlsruhe \u2013 das Programm steht (3.\u202F9.\u202F2026)",
      "zeit.de, World Games 2029 in Karlsruhe so gro\u00DF wie noch nie (3.\u202F9.\u202F2026)",
      "km.baden-wuerttemberg.de, Staffelstab f\u00FCr die World Games \u00FCbergeben (17.\u202F8.\u202F2025)",
      "twg2029.com, Factsheet und Sportarten (Stand 2026)",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt. Die Cluster-Verteilung der 62 Disziplinen ist eine Sch\u00E4tzung auf Basis der von der IWGA ver\u00F6ffentlichten Programmliste vom 3.\u202F9.\u202F2026; die Zahl der Sportarten je Ausgabe ist historisch belegt (Wikipedia, IWGA-Archiv).",
    socialPostText: "62 Disziplinen aus 36 Sportarten, 4.000 Athlet:innen aus 100 L\u00E4ndern und ein Karlsruhe, das als erste Stadt \u00FCberhaupt zum zweiten Mal Ausrichter wird. Vom 19. bis 29. Juli 2029 \u2013 und Kunstradfahren feiert dabei ein 40-Jahre-Comeback am selben Ort.\n\n\u27A1 ka-life.de/#/kw/kw36-2026",
  },
  {
    id: "kw32-2026",
    weekNumber: 32,
    year: 2026,
    dateRange: "27. Juli \u2013 2. August 2026",
    title: "Karlsruhe zieht 30 Millionen f\u00FCr die Sonne",
    subtitle: "Das Bundesforschungsministerium hat das KIT am 29. Juli zu einem von drei deutschen Fusionshubs bestimmt. Ergebnis: rund 30 Millionen Euro Anschub, ein Standort mitten in der F\u00E4cherstadt und die Ansage, dass die Sonne im Reagenzglas ein Karlsruher Job wird.",
    kicker: "KIT wird Fusionshub",
    theme: {
      accent: "#14b8a6",
      accentLight: "#5eead4",
      accentDark: "#0f766e",
      secondary: "#d946ef",
      tertiary: "#3b82f6",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Ein Fusionshub\nim Hardtwald",
      subline: "BMFTR-F\u00F6rderung 30 Mio. \u20AC \u00B7 KIT \u00B7 29.\u202F7.\u202F2026 \u00B7 KW 32",
      keyNumber: "30",
      keyLabel: "Millionen Euro Anschubf\u00F6rderung f\u00FCr das KIT als deutscher Fusionshub",
      gradient: "linear-gradient(135deg, #14b8a6 0%, #0369a1 40%, #7c3aed 75%, #d946ef 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Der Hub in Zahlen",
        subtitle: "Was das Bundesministerium f\u00FCr Forschung, Technologie und Raumfahrt am 29. Juli entschieden hat",
        data: {
          cards: [
            { value: "30", unit: "Mio. \u20AC", label: "F\u00F6rderung fliesst als Anschub in den KIT-Fusionshub \u2013 langfristig sollen es deutlich mehr werden", color: "#14b8a6" },
            { value: "125", unit: "Mio. \u20AC", label: "Beziffert die Gesamtf\u00F6rderung f\u00FCr alle drei deutschen Fusionshubs zusammen", color: "#0369a1" },
            { value: "34", unit: "Partner", label: "Forschungseinrichtungen und Unternehmen ziehen in dem Programm mit \u2013 vier davon am KIT", color: "#7c3aed" },
            { value: "150", unit: "Mio. \u00B0C", label: "So hei\u00DF muss ein Fusionsplasma werden, damit Wasserstoffkerne verschmelzen", color: "#d946ef" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Drei Karlsruher Perspektiven auf 30 Millionen Euro f\u00FCr die k\u00FCnstliche Sonne",
        data: {
          pies: [
            {
              title: "Was der Karlsruher am Mittwochabend im Freundeskreis erkl\u00E4rt",
              slices: [
                { label: "\u201EWir bauen jetzt eine Sonne im Hardtwald, also so ungef\u00E4hr\u201C", value: 30, color: "#14b8a6" },
                { label: "\u201E30 Millionen sind ja auch kein Kombil\u00F6sungs-Geld\u201C", value: 22, color: "#0369a1" },
                { label: "\u201EIch kenne einen, der bei Proxima im Praktikum war\u201C", value: 18, color: "#d946ef" },
                { label: "\u201EEinstein war ja auch kein Physiker, nur Patentbeamter\u201C", value: 14, color: "#7c3aed" },
                { label: "\u201EMerkel hatte doch damals versprochen, das kommt aus Garching\u201C", value: 10, color: "#5eead4" },
                { label: "\u201EWir haben gerade noch das Elfmeter-Ding aufgearbeitet\u201C", value: 6, color: "#94a3b8" },
              ] as PieSlice[],
            },
            {
              title: "Was der neue Karlsruher Fusionshub sofort besch\u00E4ftigt",
              slices: [
                { label: "Die Frage, wo die Cryo-K\u00E4lteanlage bl\u00F6\u00DF hin soll", value: 30, color: "#14b8a6" },
                { label: "Vier Start-ups mit vier IT-Systemen, die niemand zusammenkriegt", value: 24, color: "#7c3aed" },
                { label: "Der KIT-Bereich Materialforschung, der pl\u00F6tzlich alle Ex-CERN-Leute anschreibt", value: 18, color: "#0369a1" },
                { label: "Ein Presse-Interview zum Thema, bei dem niemand \u201EStellarator\u201C sagen darf", value: 14, color: "#d946ef" },
                { label: "Eine erste Bewerbung von einem Physik-Studenten der TU M\u00FCnchen", value: 10, color: "#5eead4" },
                { label: "Die Kaffeek\u00FCche im INR, in der jetzt vier Fluoreszenzr\u00F6hren mehr brennen", value: 4, color: "#94a3b8" },
              ] as PieSlice[],
            },
            {
              title: "Wie Karlsruher die Fusion in zehn Jahren beschreiben werden",
              slices: [
                { label: "\u201EWir hatten damals schon den Hub, bevor die anderen ihn brauchten\u201C", value: 28, color: "#14b8a6" },
                { label: "\u201EAm Anfang hatten alle noch gedacht, das wird ein KIT-Institut wie sonst\u201C", value: 22, color: "#0369a1" },
                { label: "\u201EProxima ist doch inzwischen die deutsche Tesla, oder?\u201C", value: 20, color: "#d946ef" },
                { label: "\u201EJa, damals sind die ersten Fusionsingenieurinnen hier zur\u00FCckgekehrt\u201C", value: 16, color: "#7c3aed" },
                { label: "\u201EOhne die 30 Millionen h\u00E4tten wir nichts \u2013 die 3 Milliarden kamen ja sp\u00E4ter\u201C", value: 14, color: "#5eead4" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Wie Karlsruhe zur Fusionshauptstadt wurde",
        subtitle: "Vom ersten kleinen Reaktor 1959 zur bundesweiten Rolle 2026",
        data: {
          events: [
            { date: "1959", label: "Der erste deutsche Forschungsreaktor FR2 geht am damaligen Kernforschungszentrum Karlsruhe in Betrieb" },
            { date: "1970er", label: "Karlsruhe wird zu einem europ\u00E4ischen Zentrum f\u00FCr Materialforschung und Kryotechnik \u2013 Grundlagen der sp\u00E4teren Fusionsarbeit" },
            { date: "2009", label: "Aus Forschungszentrum und Universit\u00E4t wird das KIT \u2013 die Zusammenlegung schafft die kritische Masse f\u00FCr Gro\u00DFprojekte" },
            { date: "2023", label: "Karlsruhe wird deutscher Partnerstandort im europ\u00E4ischen ITER-Programm mit Beitr\u00E4gen zur Blanket- und Divertorforschung" },
            { date: "M\u00E4rz 2026", label: "BMFTR schreibt die drei nationalen Fusionshubs aus \u2013 KIT reicht ein Konsortium mit Proxima, Gauss, Focused Energy und Marvel Fusion ein" },
            { date: "29. Juli 2026", label: "Bundesministerium k\u00FCrt den Karlsruher Antrag zum Hub f\u00FCr Grundlagentechnologien \u2013 30 Mio. \u20AC Anschub, langfristig deutlich mehr", highlight: true },
            { date: "2027 +", label: "Aufbau der ersten Hub-Werkst\u00E4tten, gemeinsame Berufungen mit den Fusions-Start-ups, erste Doktoranden-Kohorte startet", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Die drei deutschen Fusionshubs im Vergleich",
        subtitle: "F\u00F6rderanteil pro Hub aus den 125 Mio. Euro BMFTR-Programm \u2013 grob gerundet",
        data: {
          items: [
            { label: "KIT Karlsruhe (Grundlagentechnologien)", value: 30, display: "\u2248 30 Mio. \u20AC", color: "#14b8a6" },
            { label: "IPP Garching / Max-Planck (Magnetfusion)", value: 55, display: "\u2248 55 Mio. \u20AC", color: "#0369a1" },
            { label: "HZDR Dresden-Rossendorf (Laserfusion)", value: 40, display: "\u2248 40 Mio. \u20AC", color: "#d946ef" },
            { label: "KIT-Fusionsbudget bisher (pro Jahr, gesch\u00E4tzt)", value: 12, display: "\u2248 12 Mio. \u20AC", color: "#7c3aed" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Woran Karlsruher Fusionsforscher schon jetzt arbeiten",
        subtitle: "Grobe Aufteilung der KIT-Aktivit\u00E4ten in der Fusionsforschung nach Themenbereich (Stand 2026, gesch\u00E4tzt)",
        data: {
          categories: [
            "Materialien f\u00FCr die erste Wand",
            "Supraleitende Magnete und Kryotechnik",
            "Blanket, Tritiumkreislauf und Brennstoff",
            "Laser- und Zieltechnik",
            "Sicherheits- und Ausbildungssysteme",
          ],
          stacks: [
            { label: "Anteil der Fusionsprojekte", color: "#14b8a6" },
          ],
          unit: "%",
          values: [
            [32],
            [26],
            [22],
            [12],
            [8],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Wir setzen langfristig auf Karlsruhe als zentralen Nukleus f\u00FCr die Industrialisierung der Fusionstechnologie.",
          author: "Bundesministerium f\u00FCr Forschung, Technologie und Raumfahrt (BMFTR), 29.\u202F7.\u202F2026",
          color: "#14b8a6",
        },
      },
      {
        type: "waffle",
        title: "Wie realistisch ist die Fusion 2035?",
        subtitle: "Von 100 Energieexpertinnen und -experten \u2013 wer h\u00E4lt kommerzielle Fusion bis 2035 f\u00FCr wahrscheinlich?",
        data: {
          total: 100,
          filled: 12,
          filledColor: "#14b8a6",
          emptyColor: "#e5e7eb",
          annotation: "Umfragen unter deutschen Fachleuten deuten an: Rund 12 von 100 halten kommerzielle Fusionsenergie schon vor 2035 f\u00FCr realistisch, weitere 45 rechnen mit den 2040ern. Der Karlsruher Hub soll die Br\u00FCcke bauen \u2013 von der Kryogen-Werkstatt zur Serienproduktion.",
          secondaryFilled: 45,
          secondaryColor: "#7c3aed",
          filledLabel: "Halten Fusion vor 2035 f\u00FCr m\u00F6glich (12)",
          secondaryLabel: "Erwarten Durchbruch in den 2040ern (45)",
          emptyLabel: "Sp\u00E4ter oder nie (43)",
        },
      },
    ],
    sources: [
      "baden-wuerttemberg.de, KIT wird Forschungshub f\u00FCr Fusionstechnologie (29.\u202F7.\u202F2026)",
      "beteiligungsportal.baden-wuerttemberg.de, Pressemitteilung KIT Fusionshub (29.\u202F7.\u202F2026)",
      "forschung-und-lehre.de, BMFTR gibt die gef\u00F6rderten Hubs bekannt (29.\u202F7.\u202F2026)",
      "BMFTR, Hightech Agenda \u2013 Fusionshubs (Sommer 2026)",
      "kit.edu, Fusionsforschung am KIT (Stand 7/2026)",
      "proxima-fusion.com, Partnerschaftsank\u00FCndigung mit KIT (2026)",
      "tagesschau.de, Zur\u00FCck zur Kernfusion \u2013 Deutschland startet Fusionshubs (30.\u202F7.\u202F2026)",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt. Die F\u00F6rderaufteilung zwischen den drei Hubs ist eine grobe Sch\u00E4tzung auf Basis der \u00F6ffentlichen Kommunikation; genaue Zahlen ver\u00F6ffentlicht das BMFTR erst mit den Bewilligungsbescheiden.",
    socialPostText: "30 Millionen Euro, ein Bundesministerium, ein Hardtwald: Das KIT ist seit Mittwoch offiziell einer der drei deutschen Fusionshubs. Karlsruhe baut also mit an der k\u00FCnstlichen Sonne \u2013 zwischen ITER-Nachfolgern, Proxima Fusion und einem Kaffeeautomaten im INR.\n\n\u27A1 ka-life.de/#/kw/kw32-2026",
  },
  {
    id: "kw31-2026",
    weekNumber: 31,
    year: 2026,
    dateRange: "20.\u201326. Juli 2026",
    title: "Morgen, 16:30 Uhr: 16 zu 0 zu Karlsruhe",
    subtitle: "Der amtierende italienische Meister hat sein erstes Vorbereitungsspiel gegen SV Aasen 16:0 gewonnen. Am Sonntag steht Inter Mailand im BBBank Wildpark \u2013 f\u00FCr Trainer Senft die erste Feuerprobe, f\u00FCr Karlsruhe ein Nachmittag, den man sich vorher notieren m\u00F6chte.",
    kicker: "KSC \u2013 Inter Mailand",
    theme: {
      accent: "#1e40af",
      accentLight: "#60a5fa",
      accentDark: "#020617",
      secondary: "#fbbf24",
      tertiary: "#0369a1",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Ein 16:0 im\nR\u00FCcken, dann KSC",
      subline: "KSC \u2013 Inter Mailand \u00B7 So 26.\u202F7. 16:30 \u00B7 BBBank Wildpark",
      keyNumber: "16:0",
      keyLabel: "So verlie\u00DF Inter am 22. Juli sein erstes Sommer-Testspiel gegen den SV Aasen",
      gradient: "linear-gradient(135deg, #1e40af 0%, #1e293b 55%, #020617 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Das Match in Zahlen",
        subtitle: "Karlsruher SC empf\u00E4ngt am 26. Juli den amtierenden italienischen Meister im Wildpark",
        data: {
          cards: [
            { value: "16:30", unit: "Uhr", label: "Anpfiff am Sonntag im BBBank Wildpark \u2013 letzter Test Inters in Deutschland", color: "#1e40af" },
            { value: "16:0", unit: "vs. SV Aasen", label: "So gewann Inter am 22. Juli sein Sommer-Auftaktspiel im Trainingslager", color: "#020617" },
            { value: "27:0", unit: "und 13:0", label: "So begann Senfts KSC seine Vorbereitung \u2013 in Untergrombach und Gaggenau", color: "#0369a1" },
            { value: "4:4", unit: "vs. Freiberg", label: "Ergebnis des ersten ernsten Tests am 9. Juli \u2013 auch als Warnung zu lesen", color: "#fbbf24" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Drei Karlsruher Perspektiven, 24 Stunden vor dem Nerazzurro-Anpfiff im Wildpark",
        data: {
          pies: [
            {
              title: "Was der Karlsruher am Sonntag um 16:29 Uhr wirklich hofft",
              slices: [
                { label: "Dass der KSC einmal in die H\u00E4lfte des amtierenden Meisters kommt", value: 32, color: "#1e40af" },
                { label: "Ein Foto mit Pio Esposito, der gerade f\u00FCnf Tore geschossen hat", value: 22, color: "#fbbf24" },
                { label: "Dass Lautaro nach dem WM-Finale wirklich mitspielt", value: 18, color: "#60a5fa" },
                { label: "Kein Ergebnis wie am Dienstag \u2013 bitte h\u00F6chstens einstellig", value: 14, color: "#0369a1" },
                { label: "Dass die neue Wildpark-K\u00FChltheke die Radler-Menge \u00FCberlebt", value: 10, color: "#020617" },
                { label: "Autogramm von Chivu, weil den kennt hier gerade jeder", value: 4, color: "#94a3b8" },
              ] as PieSlice[],
            },
            {
              title: "Worauf Karlsruher Familien in der Halbzeit umsteigen",
              slices: [
                { label: "Die Fanshop-Schlange, weil das Kind ein KSC-Wildpark-Trikot m\u00F6chte", value: 30, color: "#1e40af" },
                { label: "Currywurst-Bude C, weil A und B chronisch \u00FCberf\u00FCllt sind", value: 22, color: "#fbbf24" },
                { label: "Die Toilette bei der Nordtrib\u00FCne, die niemand kennt", value: 18, color: "#60a5fa" },
                { label: "WhatsApp-Familienchat, um Fotos zu verschicken, ohne Freigabe zu haben", value: 14, color: "#0369a1" },
                { label: "YouTube, um noch mal das 16:0-Highlight in Aasen zu sehen", value: 10, color: "#94a3b8" },
                { label: "Nach Hause \u2013 die Kinder m\u00FCssen ins Bett und Papa fluchen", value: 6, color: "#020617" },
              ] as PieSlice[],
            },
            {
              title: "Worauf sich Karlsruher Sportkneipen am Sonntagabend vorbereiten",
              slices: [
                { label: "Nachanalyse am Tisch: \u201EEigentlich waren wir gar nicht so schlecht\u201C", value: 28, color: "#1e40af" },
                { label: "Alte Videos vom KSC-1993-CL-Wunder gegen Valencia, geteilt \u00FCber TikTok", value: 22, color: "#fbbf24" },
                { label: "Der Standardsatz \u201EInter hat halt eine ganz andere Liga gespielt\u201C", value: 20, color: "#60a5fa" },
                { label: "Reklamation, weil das Lieferservice-Zelt schon dicht ist", value: 14, color: "#0369a1" },
                { label: "Ein selbst gestreamter Interview-Ausschnitt mit Senft f\u00FCr Instagram", value: 10, color: "#020617" },
                { label: "Weinen. In leiser B\u00FCrgerlichkeit. Dann Ligastart planen.", value: 6, color: "#94a3b8" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Die zwei Wege zum Wildpark",
        subtitle: "Wie sich Inter und der KSC in den letzten Wochen auf denselben Rasen vorbereitet haben",
        data: {
          events: [
            { date: "28. Juni 2026", label: "Trainingsauftakt Senft-KSC im Wildpark, rund 1.200 Fans schauen zu", highlight: true },
            { date: "1. Juli 2026", label: "KSC \u2013 FC Untergrombach 27:0 (Kreisklasse A). Kein Druckfehler" },
            { date: "9. Juli 2026", label: "KSC \u2013 SGV Freiberg 4:4. Der erste ernste Test endet mit Nachdenklichkeit" },
            { date: "16. Juli 2026", label: "Inter Mailand bezieht das Trainingslager in Donaueschingen \u2013 alle Einheiten hinter verschlossenen T\u00FCren", highlight: true },
            { date: "18. Juli 2026", label: "KSC beendet sein Trainingslager mit zwei Tests gegen Shimizu S-Pulse in Garmisch" },
            { date: "22. Juli 2026", label: "Inter \u2013 SV Aasen 16:0. Pio Esposito trifft f\u00FCnfmal, Topalovic dreimal", highlight: true },
            { date: "26. Juli 2026, 16:30 Uhr", label: "Anpfiff KSC \u2013 Inter Mailand im BBBank Wildpark. Chivu gegen Senft, ein Wunder gegen einen Meister", highlight: true },
            { date: "1. August 2026", label: "Inter fliegt am Abend nach Hongkong, KSC f\u00E4hrt nach Sinsheim zur TSG Hoffenheim" },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Inters Torfestival gegen SV Aasen",
        subtitle: "Die Torsch\u00FCtzen des 16:0 am 22. Juli \u2013 wer morgen in Karlsruhe treffen k\u00F6nnte",
        data: {
          items: [
            { label: "Pio Esposito", value: 5, display: "5 Tore", color: "#1e40af" },
            { label: "Luka Topalovic", value: 3, display: "3 Tore", color: "#0369a1" },
            { label: "Davide Frattesi", value: 2, display: "2 Tore", color: "#60a5fa" },
            { label: "Andy Diouf", value: 2, display: "2 Tore", color: "#fbbf24" },
            { label: "Jamal Iddrissou", value: 2, display: "2 Tore", color: "#94a3b8" },
            { label: "Federico Dimarco und Mattia Mosconi", value: 2, display: "je 1 Tor", color: "#020617" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Ausl\u00E4nder mit Bekanntheitsgrad im Wildpark",
        subtitle: "Anzahl der Google-Treffer f\u00FCr Inter-Namen in deutschen Sportmedien der letzten 30 Tage (grob gerundet, in Tausend)",
        data: {
          categories: [
            "Cristian Chivu (Trainer)",
            "Pio Esposito",
            "Federico Dimarco",
            "Hakan Calhanoglu",
            "Lautaro Martinez",
          ],
          stacks: [
            { label: "Erw\u00E4hnungen", color: "#1e40af" },
          ],
          unit: "Tsd. Treffer",
          values: [
            [42],
            [38],
            [28],
            [55],
            [72],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Zwei Wochen vor dem Saisonstart wartet auf den KSC und seine Fans ein echtes Highlight: Der italienische Spitzenclub gibt seine Visitenkarte im BBBank Wildpark ab.",
          author: "KSC-Mitteilung, Mai 2026 \u2013 morgen wird sie eingel\u00F6st",
          color: "#1e40af",
        },
      },
      {
        type: "waffle",
        title: "Der letzte italienische Meister im Wildpark",
        subtitle: "Von den 21 italienischen Serie-A-Meistern kamen bisher fast keine als Gast nach Karlsruhe \u2013 morgen bricht Inter die Serie",
        data: {
          total: 21,
          filled: 1,
          filledColor: "#1e40af",
          emptyColor: "#e5e7eb",
          annotation: "Inter Mailand hat 21 italienische Meistertitel gewonnen (Scudetti), zuletzt am 4. Mai 2026. In den letzten Jahrzehnten war jedoch keiner dieser Kader je Gast im BBBank Wildpark. Morgen ist es soweit \u2013 der einzige Vergleichspunkt bleibt das Karlsruher CL-Wunder gegen den FC Valencia im Herbst 1993.",
          secondaryFilled: 3,
          secondaryColor: "#fbbf24",
          filledLabel: "Inter am 26.\u202F7.\u202F2026 im Wildpark (1)",
          secondaryLabel: "Andere Ex-Serie-A-Meister als Gast in Karlsruhe (3, Freundschaftsspiele)",
          emptyLabel: "Nie zu Gast im Wildpark (17)",
        },
      },
    ],
    sources: [
      "inter.it, Pre-season friendly: Karlsruher SC (Anpfiff 16:30, 17.\u202F7.\u202F2026)",
      "inter.it, Inter beat SV Aasen 16-0 in a friendly (22.\u202F7.\u202F2026)",
      "corrieredellosport.it, L'Inter scalda i motori, contro l'SV Aasen ne fa 16 (22.\u202F7.\u202F2026)",
      "gazzetta.it, Inter in Black Forest Training Camp \u2013 Chivu-Methode (17.\u202F7.\u202F2026)",
      "ka-news.de, KSC erlebt Woche des Umbruchs mit Senft-Deb\u00FCt (3.\u202F7.\u202F2026)",
      "kicker.de, Senfts Liebe f\u00FCrs Detail (5.\u202F7.\u202F2026)",
      "SWR Sport, Zweitligastart im Blick \u2013 Sommerfahrplan KSC (15.\u202F7.\u202F2026)",
      "KSC.de, Saisoner\u00F6ffnung gegen FC Internazionale Milano (27.\u202F5.\u202F2026)",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt. Die Google-Trefferzahlen sind Sch\u00E4tzungen \u00FCber Sportmedien im deutschsprachigen Raum. Lautaros Einsatz h\u00E4ngt von seiner R\u00FCckreise nach dem WM-Finale ab.",
    socialPostText: "Morgen 16:30 im Wildpark: KSC gegen den italienischen Meister, der gerade 16:0 gegen die sechste Liga gewonnen hat. Chivu gegen Senft, ein Wunder gegen einen Titeltr\u00E4ger. Wir wissen, wo wir sitzen.\n\n\u27A1 ka-life.de/#/kw/kw31-2026",
  },
  {
    id: "kw30-2026",
    weekNumber: 30,
    year: 2026,
    dateRange: "13.\u201319. Juli 2026",
    title: "18:45 Uhr, und der Himmel fiel",
    subtitle: "Am Donnerstagabend zog eine Superzelle mit Downburst \u00FCber Karlsruhe. Sturmb\u00F6en bis 130\u202Fkm/h, \u00FCber 250 Feuerwehreins\u00E4tze, ein Mensch tot. Freitag begann die F\u00E4cherstadt mit dem Aufr\u00E4umen \u2013 und der DAS-FEST-Woche im Nacken.",
    kicker: "Karlsruher Unwetter",
    theme: {
      accent: "#334155",
      accentLight: "#94a3b8",
      accentDark: "#0f172a",
      secondary: "#eab308",
      tertiary: "#3b82f6",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Superzelle, Downburst,\nAusnahmezustand",
      subline: "16.\u202F7.\u202F2026 \u00B7 Karlsruhe \u00B7 KW 30",
      keyNumber: "130",
      keyLabel: "km/h \u2013 st\u00E4rkste gemessene Sturmb\u00F6e beim Downburst am Donnerstagabend",
      gradient: "linear-gradient(135deg, #475569 0%, #1e293b 50%, #0f172a 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Die Sturmnacht in Zahlen",
        subtitle: "Karlsruher Feuerwehr, Polizei und Stadt Karlsruhe \u00FCber die Nacht vom 16. auf den 17. Juli 2026",
        data: {
          cards: [
            { value: "130", unit: "km/h", label: "St\u00E4rkste gemessene Sturmb\u00F6e beim Downburst \u00FCber dem Stadtgebiet", color: "#334155" },
            { value: "250", unit: "+ Eins\u00E4tze", label: "F\u00FChrte die Karlsruher Feuerwehr allein im Stadtgebiet in wenigen Stunden aus", color: "#0f172a" },
            { value: "400", unit: "Feuerwehr", label: "Kr\u00E4fte plus rund 50 vom THW waren im Ausnahmezustand im Einsatz", color: "#3b82f6" },
            { value: "1", unit: "Todesopfer", label: "Ein 60-J\u00E4hriger wurde in der Michiganstra\u00DFe von einem Baum erschlagen", color: "#eab308" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Drei Karlsruher Innenansichten des Tages danach \u2013 der Trauerfall selbst bleibt drau\u00DFen",
        data: {
          pies: [
            {
              title: "Wo Karlsruher am Donnerstag um 18:45 wirklich standen",
              slices: [
                { label: "Am Bahnsteig, kurz vor der eingestellten Stra\u00DFenbahn", value: 28, color: "#334155" },
                { label: "Im B\u00FCro, mit Blick auf den kippenden Trompetenbaum drau\u00DFen", value: 22, color: "#3b82f6" },
                { label: "Auf dem Fahrrad in der Nordstadt \u2013 und keine Sekunde zu fr\u00FCh abgebogen", value: 18, color: "#0f172a" },
                { label: "Beim FEST AM SEE, das gerade um 19:45 abgebrochen wurde", value: 16, color: "#eab308" },
                { label: "Zu Hause, mit Blick auf den Wetter-Push \u201Estufe rot\u201C", value: 12, color: "#94a3b8" },
                { label: "An der Tiefgaragenausfahrt, hoffend, dass es reicht", value: 4, color: "#f59e0b" },
              ] as PieSlice[],
            },
            {
              title: "Was Karlsruher am Freitag um 7 Uhr auf ihrem Grundst\u00FCck vorfanden",
              slices: [
                { label: "Einen Ast, so lang wie das Nachbargrundst\u00FCck breit ist", value: 30, color: "#334155" },
                { label: "Den Balkonstuhl, jetzt in einem g\u00E4nzlich anderen Bezirk", value: 22, color: "#3b82f6" },
                { label: "Eine Dachrinne, die niemand mehr als solche erkennt", value: 18, color: "#94a3b8" },
                { label: "Blumenerde auf dem Tempo-30-Schild vor dem Kindergarten", value: 14, color: "#eab308" },
                { label: "Ein Zelt vom FEST AM SEE, in der Hecke, weiter n\u00F6rdlich", value: 10, color: "#0f172a" },
                { label: "Nichts. Der Sturm hatte die Adresse verwechselt.", value: 6, color: "#f59e0b" },
              ] as PieSlice[],
            },
            {
              title: "Woran die F\u00E4cherstadt diesen Sturm noch in zehn Jahren erkennen wird",
              slices: [
                { label: "Die neuen L\u00FCcken im Kronenkleid der Alleen", value: 32, color: "#334155" },
                { label: "Die Sperrung der KVV-Linien, die niemand mehr rekonstruiert bekommt", value: 22, color: "#3b82f6" },
                { label: "Den Anruf beim Baumkataster, der zum WhatsApp-Klassiker wurde", value: 18, color: "#94a3b8" },
                { label: "Das Foto der leeren FEST-AM-SEE-B\u00FChne, das alle geteilt haben", value: 16, color: "#eab308" },
                { label: "Den Moment, in dem Karlsruhe kollektiv \u201Egut, dass es vorbei ist\u201C dachte", value: 12, color: "#0f172a" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Sechs Stunden Ausnahmezustand",
        subtitle: "Vom ersten DWD-Warnhinweis bis zum \u201EEnde der au\u00DFergew\u00F6hnlichen Einsatzlage\u201C",
        data: {
          events: [
            { date: "16. Juli, 14 Uhr", label: "DWD warnt vor Unwetter mit schweren Sturmb\u00F6en, Hagel und Starkregen f\u00FCr Baden-W\u00FCrttemberg" },
            { date: "18:45 Uhr", label: "Superzelle mit Downburst zieht \u00FCber Karlsruhe, Sturmb\u00F6en bis 130\u202Fkm/h, B\u00E4ume kippen im gesamten Stadtgebiet", highlight: true },
            { date: "19:00 Uhr", label: "Erste Notrufe erreichen die Integrierte Leitstelle im Sekundentakt" },
            { date: "19:45 Uhr", label: "DAS FEST AM SEE in der G\u00FCnther-Klotz-Anlage wird abgebrochen, ein Mitarbeiter verletzt", highlight: true },
            { date: "ca. 20 Uhr", label: "Stadt Karlsruhe ruft \u201Eau\u00DFergew\u00F6hnliche Einsatzlage\u201C nach Landeskatastrophenschutzgesetz aus", highlight: true },
            { date: "Nacht auf Freitag", label: "Etwa 400 Feuerwehrleute und 50 THW-Kr\u00E4fte arbeiten \u00FCber 250 Eins\u00E4tze ab, Stra\u00DFenbahnverkehr steht komplett" },
            { date: "17. Juli, ab 6 Uhr", label: "Der Freitag beginnt mit Motors\u00E4gen, Kehrmaschinen und der Nachricht: ein Radfahrer ist tot", highlight: true },
            { date: "17. Juli, mittags", label: "Gr\u00F6tzinger Tunnel wieder freigegeben, Stadt richtet Sturmsch\u00E4den-Hotline ein" },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Der KA-Sturm im historischen Vergleich",
        subtitle: "Feuerwehr-Eins\u00E4tze in einer Nacht \u2013 grob gerundet, gr\u00F6\u00DFere BW-Unwetter der letzten Jahre",
        data: {
          items: [
            { label: "Karlsruhe, 16.\u202F7.\u202F2026 (Downburst)", value: 250, display: "\u2248 250", color: "#334155" },
            { label: "Landkreis Karlsruhe, Juni 2024 (Hochwasser)", value: 500, display: "\u2248 500", color: "#3b82f6" },
            { label: "Karlsruhe, August 2019 (Gewitterfront)", value: 186, display: "\u2248 186", color: "#94a3b8" },
            { label: "Stuttgart, Juli 2013 (Hagelsturm Andreas)", value: 300, display: "\u2248 300", color: "#eab308" },
            { label: "Karlsruhe, Juni 2019 (Bernd-Woche)", value: 120, display: "\u2248 120", color: "#0f172a" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Woran sich die 250 Eins\u00E4tze verteilen",
        subtitle: "Anteil der bekannten Schadenskategorien in Karlsruhe \u2013 gesch\u00E4tzt auf Basis der Presseberichte",
        data: {
          categories: [
            "Umgest\u00FCrzte B\u00E4ume und \u00C4ste",
            "\u00DCberflutete Stra\u00DFen und Keller",
            "Dach- und Fassadensch\u00E4den",
            "Fahrzeugsch\u00E4den (Autos, Fahrr\u00E4der)",
            "Blitzsch\u00E4den und Br\u00E4nde",
          ],
          stacks: [
            { label: "Anteil der Eins\u00E4tze", color: "#334155" },
          ],
          unit: "%",
          values: [
            [55],
            [22],
            [12],
            [8],
            [3],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Wir haben in wenigen Stunden mehr als 250 Eins\u00E4tze zu bew\u00E4ltigen \u2013 das ist ein Ausnahmezustand, wie ihn Karlsruhe seit Jahren nicht mehr gesehen hat.",
          author: "Karlsruher Feuerwehr, Einsatzleitung in der Nacht vom 16. auf den 17.\u202F7.\u202F2026",
          color: "#334155",
        },
      },
      {
        type: "waffle",
        title: "Bereits ein Jahr harter Wetterjahre",
        subtitle: "Von 12 Monaten haben Karlsruhe und Umgebung 2025/26 in mindestens f\u00FCnf ein Extremwetterereignis erlebt",
        data: {
          total: 12,
          filled: 5,
          filledColor: "#334155",
          emptyColor: "#e5e7eb",
          annotation: "Die 12 Monate seit August 2025: Hitzewelle im Sommer, Hochwasser im Landkreis KA im Herbst, Sturmtief im Winter, Hitzewelle mit 37,5\u202F\u00B0C im Juni 2026, jetzt der Downburst im Juli. F\u00FCnf klare Extremwetter-Ereignisse in einem Jahr \u2013 Klimafolgen sind hier keine Statistik mehr, sondern Alltag.",
          secondaryFilled: 3,
          secondaryColor: "#3b82f6",
          filledLabel: "Monate mit Extremwetter im Stadtgebiet (5)",
          secondaryLabel: "Monate mit erh\u00F6htem Wetter-Stress (3)",
          emptyLabel: "Weitgehend ruhige Monate (4)",
        },
      },
    ],
    sources: [
      "tagesschau.de, Unwetter in Karlsruhe: Radfahrer erschlagen, \u00FCber 250 Eins\u00E4tze im Stadtgebiet (17.\u202F7.\u202F2026)",
      "ZEIT ONLINE, Superzelle, Toter, Verletzte: Die Bilanz der Unwetter-Nacht (17.\u202F7.\u202F2026)",
      "SWR Aktuell, Mann bei Unwetter in Karlsruhe von Baum erschlagen (17.\u202F7.\u202F2026)",
      "Nonstopnews.de, Superzelle zieht mit Downburst \u00FCber Karlsruhe hinweg (16.\u202F7.\u202F2026)",
      "Durlacher.de, Unwetter trifft Karlsruhe \u2013 \u00FCber 250 Eins\u00E4tze und ein Todesopfer (17.\u202F7.\u202F2026)",
      "Focus Online, Videos zeigen Hagel-Chaos \u00FCber BW (17.\u202F7.\u202F2026)",
      "Karlsruhe.de, Meldungen zum Unwetter und Baumschadensmanagement (Stand 17.\u202F7.\u202F2026)",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt. Die Prozentwerte zu Schadenskategorien und die historischen Einsatzzahlen sind Sch\u00E4tzungen aus \u00F6ffentlich zug\u00E4nglichen Berichten. Die Redaktion denkt an das Todesopfer und seine Angeh\u00F6rigen \u2013 die Satire in dieser Ausgabe bezieht sich ausschlie\u00DFlich auf die kollektive Aufr\u00E4umerfahrung der Stadt.",
    socialPostText: "18:45\u202FUhr, Superzelle mit Downburst, 130\u202Fkm/h Sturmb\u00F6en, \u00FCber 250 Feuerwehreins\u00E4tze, ein Toter, DAS FEST AM SEE abgebrochen. Karlsruhe hat am Freitag mit dem Aufr\u00E4umen begonnen \u2013 und mit dem Nachdenken \u00FCber Wetter, das nicht mehr die Ausnahme ist.\n\n\u27A1 ka-life.de/#/kw/kw30-2026",
  },
  {
    id: "kw29-2026",
    weekNumber: 29,
    year: 2026,
    dateRange: "6.\u201312. Juli 2026",
    title: "Elf Tage bis Mount Klotz",
    subtitle: "Vom 23. bis 26. Juli klettert die G\u00FCnther-Klotz-Anlage wieder auf ihren Sommer-Gipfel. 36 Bands auf vier B\u00FChnen, Nico Santos am Donnerstag, Beatsteaks am Freitag, Zartmann am Samstag, Max Herre am Sonntag \u2013 und Karlsruhe zwischendrin.",
    kicker: "DAS FEST 2026",
    theme: {
      accent: "#db2777",
      accentLight: "#f9a8d4",
      accentDark: "#831843",
      secondary: "#f59e0b",
      tertiary: "#8b5cf6",
      background: "#fafafa",
    },
    socialCard: {
      headline: "36 Bands, 4 B\u00FChnen,\nein Mount Klotz",
      subline: "DAS FEST 23.\u201326.\u202F7.\u202F2026 \u00B7 KW 29",
      keyNumber: "41",
      keyLabel: "Ausgabe von DAS FEST \u2013 seit 1985 gr\u00F6\u00DFtes Karlsruher Open-Air",
      gradient: "linear-gradient(135deg, #db2777 0%, #a21caf 45%, #4c1d95 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Das Fest in Zahlen",
        subtitle: "Die 41. Ausgabe des gr\u00F6\u00DFten Karlsruher Sommer-Open-Airs",
        data: {
          cards: [
            { value: "41", unit: "Ausgabe", label: "So oft steigt DAS FEST 2026 auf dem Mount Klotz \u2013 seit dem ersten Fest 1985", color: "#db2777" },
            { value: "36", unit: "Bands", label: "stehen auf vier B\u00FChnen \u2013 von Beatsteaks bis zum SWR Symphonieorchester", color: "#a21caf" },
            { value: "250", unit: "Tsd. G\u00E4ste", label: "kamen 2024 in die G\u00FCnther-Klotz-Anlage \u2013 ein Karlsruhe im Karlsruhe", color: "#8b5cf6" },
            { value: "70", unit: "% gratis", label: "des Programms sind ohne Ticket zug\u00E4nglich \u2013 Feld-, Kultur- und FEST-Floor", color: "#f59e0b" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Drei Karlsruher Perspektiven, elf Tage vor dem Fassanstich am Mount Klotz",
        data: {
          pies: [
            {
              title: "Wo Karlsruher am Fest-Donnerstag um 20 Uhr wirklich stehen",
              slices: [
                { label: "Vorne bei Nico Santos, mit einem viel zu warmen Radler", value: 30, color: "#db2777" },
                { label: "Auf der Kulturb\u00FChne, weil es dort halb so voll ist", value: 22, color: "#a21caf" },
                { label: "Am Ausschank in Krusig\u2019s Dorf, sechster Platz von hinten", value: 18, color: "#f59e0b" },
                { label: "Im Ausl\u00E4nderweg, weil das Handy nur da noch Netz hat", value: 14, color: "#8b5cf6" },
                { label: "Auf dem Weg zur Toilette, seit zwanzig Minuten", value: 10, color: "#f9a8d4" },
                { label: "Zu Hause, weil das Wetter zu unklar war", value: 6, color: "#831843" },
              ] as PieSlice[],
            },
            {
              title: "Welche Line-up-Debatte diese Woche im KA-Freundeskreis l\u00E4uft",
              slices: [
                { label: "Zartmann ist der neue Peter Fox, versprochen", value: 30, color: "#db2777" },
                { label: "Beatsteaks h\u00E4tten schon vor 2015 der Freitagsheadliner sein sollen", value: 24, color: "#a21caf" },
                { label: "Ich kenne Max Herre nur wegen meiner \u00E4lteren Schwester", value: 20, color: "#8b5cf6" },
                { label: "Ist der Sonntag mit Leony jetzt Familientag oder Studi-Kater?", value: 14, color: "#f59e0b" },
                { label: "Ehrlich? Ich gehe wegen dem Karaokeshow am Sonntag um 15:45", value: 12, color: "#f9a8d4" },
              ] as PieSlice[],
            },
            {
              title: "Woran Karlsruher DAS FEST tats\u00E4chlich erinnern werden",
              slices: [
                { label: "Eine Regenpause, in der der Mount Klotz zur Schlammrutsche wurde", value: 28, color: "#db2777" },
                { label: "Den Song, bei dem die Handylichter angingen \u2013 alle wei\u00DF es", value: 22, color: "#a21caf" },
                { label: "Die Bratwurst, die trotz aller Kritik wieder gekauft wurde", value: 18, color: "#f59e0b" },
                { label: "Wen man am Rand des Kulturb\u00FChnenzelts nach acht Jahren wiedertraf", value: 16, color: "#8b5cf6" },
                { label: "Die Frage: \u201EWar\u2019s fr\u00FCher wirklich besser oder werde ich nur \u00E4lter?\u201C", value: 16, color: "#831843" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Von Reggae-Woche zu Ray Dalton",
        subtitle: "Die wichtigsten Stationen der 41 Jahre am Mount Klotz",
        data: {
          events: [
            { date: "1985", label: "Erste Ausgabe von DAS FEST in der G\u00FCnther-Klotz-Anlage \u2013 als Reggae-Woche mit ein paar tausend G\u00E4sten" },
            { date: "2003", label: "Erstmals \u00FCber 100.000 Besucher, DAS FEST wird bundesweit ernst genommen" },
            { date: "2019", label: "Rekordjahr mit rund 250.000 G\u00E4sten \u2013 Peter Fox l\u00E4sst den Mount Klotz beben" },
            { date: "2020\u20132021", label: "Corona-Pause, DAS FEST verlegt sich auf abgesagte Termine und Frust" },
            { date: "2025", label: "40. Jubil\u00E4um mit Amy Macdonald, Clueso und Faithless", highlight: true },
            { date: "15. Juli 2026", label: "DAS FEST AM SEE er\u00F6ffnet die Festwoche in kleiner Kulisse", highlight: true },
            { date: "23.\u201326. Juli 2026", label: "41. Ausgabe am Mount Klotz \u2013 vier Tage, vier B\u00FChnen, ein Karlsruhe im Ausnahmezustand", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Mount Klotz gegen den Rest der Republik",
        subtitle: "Gesch\u00E4tzte Besucherzahlen gro\u00DFer deutscher Sommerfestivals (Rekord- oder Standardjahr)",
        data: {
          items: [
            { label: "Rock am Ring (Nurburgring)", value: 92, display: "\u2248 92.000", color: "#8b5cf6" },
            { label: "Wacken Open Air", value: 85, display: "\u2248 85.000", color: "#a21caf" },
            { label: "DAS FEST Karlsruhe (2024)", value: 250, display: "\u2248 250.000", color: "#db2777" },
            { label: "Southside Festival", value: 65, display: "\u2248 65.000", color: "#f59e0b" },
            { label: "Deichbrand", value: 62, display: "\u2248 62.000", color: "#f9a8d4" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Wie sich die Tages-Charts verteilen",
        subtitle: "Anteil der 36 best\u00E4tigten Fest-Acts pro Festivaltag \u2013 quer \u00FCber alle vier B\u00FChnen",
        data: {
          categories: [
            "Donnerstag (Nico Santos)",
            "Freitag (Beatsteaks)",
            "Samstag (Zartmann)",
            "Sonntag (Max Herre & Joy Denalane)",
          ],
          stacks: [
            { label: "Acts pro Tag", color: "#db2777" },
          ],
          unit: "Acts",
          values: [
            [5],
            [10],
            [12],
            [9],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Auf DAS FEST trifft man Leute, die man sonst nur bei Beerdigungen sieht \u2013 nur mit besserer Musik und schlechterem Bier.",
          author: "Ungeschriebene Regel unter Karlsruher Alt-Festgehern",
          color: "#db2777",
        },
      },
      {
        type: "waffle",
        title: "Karlsruher Fest-Typologie",
        subtitle: "Von 100 erwachsenen Karlsruher\u00B4innen \u2013 wer geht wann und wie oft auf den Mount Klotz?",
        data: {
          total: 100,
          filled: 55,
          filledColor: "#db2777",
          emptyColor: "#e5e7eb",
          annotation: "Rund 55 von 100 erwachsenen Karlsruher\u00B4innen besuchen 2026 mindestens einen Tag am Mount Klotz. Etwa 25 nehmen das gesamte Wochenende mit, die anderen 20 bleiben zu Hause \u2013 aus Prinzip, wegen der Kinder oder weil das Line-up dieses Jahr \u201Enicht ganz so ihres\u201C ist.",
          secondaryFilled: 25,
          secondaryColor: "#8b5cf6",
          filledLabel: "Ein oder zwei Fest-Tage (55)",
          secondaryLabel: "Alle vier Tage vom Mount Klotz (25)",
          emptyLabel: "Bleiben zu Hause (20)",
        },
      },
    ],
    sources: [
      "dasfest.de, Line-up und Programm 2026 (Stand 07/2026)",
      "SWR3, DAS FEST 2026 in Karlsruhe (9.\u202F7.\u202F2026)",
      "karlsruhe.de, Haltung und Glitzer \u2013 DAS FEST 2026 (1/2026)",
      "karlsruhe-erleben.de, DAS FEST 2026",
      "Wikipedia, Das Fest (Karlsruhe) \u2013 Historie und Besucherzahlen",
      "Wikipedia, G\u00FCnther-Klotz-Anlage",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt. Die Besucherzahlen anderer Festivals sind Sch\u00E4tzungen aus \u00F6ffentlichen Quellen und schwanken jahresabh\u00E4ngig.",
    socialPostText: "Elf Tage bis Mount Klotz: DAS FEST 2026 macht Karlsruhe vom 23. bis 26. Juli wieder zum Festivalstaat. 36 Bands, vier B\u00FChnen, Beatsteaks, Nico Santos, Zartmann und Max Herre \u2013 und ein Sonntag, an dem die Karaokeshow um 15:45 alles retten kann.\n\n\u27A1 ka-life.de/#/kw/kw29-2026",
  },
  {
    id: "kw28-2026",
    weekNumber: 28,
    year: 2026,
    dateRange: "29. Juni \u2013 5. Juli 2026",
    title: "Karlsruhe hat eine eigene Ameisenkoordinatorin",
    subtitle: "Die Gro\u00DFe Dr\u00FCsenameise Tapinoma magnum ist in acht Karlsruher Stadtteilen angekommen, unterh\u00F6hlt Gehwege und nistet sich in Stromk\u00E4sten ein. Im nur 80 Kilometer entfernten Kehl legt sie ganze Stromnetze lahm.",
    kicker: "Karlsruher Ameisenplage",
    theme: {
      accent: "#92400e",
      accentLight: "#fbbf24",
      accentDark: "#451a03",
      secondary: "#dc2626",
      tertiary: "#a16207",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Karlsruhe hat eine\nAmeisenkoordinatorin",
      subline: "Tapinoma magnum in KA \u00B7 8 Stadtteile befallen \u00B7 KW 28",
      keyNumber: "8",
      keyLabel: "Karlsruher Stadtteile mit Tapinoma-magnum-Superkolonien \u2013 Tendenz steigend",
      gradient: "linear-gradient(135deg, #a16207 0%, #92400e 50%, #451a03 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Die Ameiseninvasion in Zahlen",
        subtitle: "Was das Karlsruher Umweltamt und die Nachbarstadt Kehl bisher wissen",
        data: {
          cards: [
            { value: "8", unit: "Stadtteile", label: "In Karlsruhe hat sich Tapinoma magnum bereits ausgebreitet \u2013 mit Superkolonien", color: "#92400e" },
            { value: "1", unit: "Koordinatorin", label: "Karen E\u00DFer arbeitet seit 2025 in Vollzeit gegen die Dr\u00FCsenameise", color: "#a16207" },
            { value: "50.000", unit: "\u20AC/Woche", label: "So teuer ist laut Kehl die Bek\u00E4mpfung einer einzelnen Superkolonie", color: "#dc2626" },
            { value: "5", unit: "Spray-Runden", label: "Hat Kehl bisher versucht \u2013 die Kolonien wachsen trotzdem weiter", color: "#451a03" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Drei Karlsruher Innenansichten zum Superkolonien-Alltag",
        data: {
          pies: [
            {
              title: "Wo Karlsruher zuerst gemerkt haben, dass etwas nicht stimmt",
              slices: [
                { label: "Ameisenstra\u00DFe zwischen Bordstein und Kaffeevollautomat", value: 32, color: "#92400e" },
                { label: "Der Stromkasten in der Weststadt piepst neuerdings", value: 22, color: "#a16207" },
                { label: "Ein Gehwegplatte in der Oststadt kippt seit April", value: 20, color: "#dc2626" },
                { label: "Beim Grillen in der S\u00FCdstadt Terrasse wurde die Wurst betreut", value: 14, color: "#fbbf24" },
                { label: "Nachbar sprach seit drei Wochen von \u201Eschwarzen B\u00E4chen\u201C", value: 12, color: "#451a03" },
              ] as PieSlice[],
            },
            {
              title: "Was auf Karen E\u00DFers Schreibtisch heute morgen lag",
              slices: [
                { label: "37 Meldungen aus B\u00FCrger*innen-Postfach \u201EStadt Karlsruhe\u201C", value: 30, color: "#92400e" },
                { label: "Ein Foto einer Ameisenstra\u00DFe, gel\u00E4ndeorientiert bis Grabenstra\u00DFe", value: 22, color: "#dc2626" },
                { label: "Anfrage aus Kehl, ob man mal telefonieren k\u00F6nne", value: 20, color: "#a16207" },
                { label: "Neue Absage vom Insektizid-H\u00E4ndler \u2013 wieder ausverkauft", value: 16, color: "#451a03" },
                { label: "Studie aus Freiburg, deren Kernaussage: \u201Enichts hilft\u201C", value: 12, color: "#fbbf24" },
              ] as PieSlice[],
            },
            {
              title: "Welche Ameisen-Mythen im Karlsruher Nachbarschaftschat kursieren",
              slices: [
                { label: "Backpulver in die Ritzen, kennt die Schwiegermutter aus Durlach", value: 30, color: "#92400e" },
                { label: "Einfach viel gie\u00DFen, die m\u00F6gen kein Wasser", value: 24, color: "#a16207" },
                { label: "Sind angeblich mit dem letzten Ficus aus Italien gekommen", value: 20, color: "#dc2626" },
                { label: "Der Nachbar hat gesagt, sie meiden Fair-Trade-Kaffee", value: 14, color: "#fbbf24" },
                { label: "Wenn nichts hilft, gibt es doch die Koordinatorin \u2013 zust\u00E4ndig ist sie", value: 12, color: "#451a03" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Wie eine Mittelmeerameise Karlsruhe eroberte",
        subtitle: "Sechs Etappen einer Invasion, die bis 2019 noch niemand ernst nahm",
        data: {
          events: [
            { date: "vor 2010", label: "Erste Sichtungen von Tapinoma magnum in Deutschland \u2013 wohl mit Mediterranpflanzen eingeschleppt" },
            { date: "2020", label: "Ausbreitung im Rheingraben nimmt Fahrt auf, Kehl meldet erste Nester" },
            { date: "Herbst 2024", label: "Kehl ruft den ersten stadtweiten \u201EAmeisenalarm\u201C aus \u2013 Millionen Ameisen legen Stromk\u00E4sten lahm", highlight: true },
            { date: "2025", label: "Karlsruhe schafft die bundesweit erste \u201EAmeisenkoordinatorin\u201C \u2013 Karen E\u00DFer \u00FCbernimmt", highlight: true },
            { date: "April 2026", label: "Karlsruher Umweltamt best\u00E4tigt: In acht Stadtteilen sind Superkolonien nachgewiesen", highlight: true },
            { date: "3. Juli 2026", label: "SPIEGEL widmet der Ameisenplage in KA einen gro\u00DFen Beitrag \u2013 die Republik lernt E\u00DFer kennen", highlight: true },
            { date: "2027 +", label: "BW-Landesumweltministerium: Bek\u00E4mpfung wird zur Daueraufgabe, Bundesmittel gefordert" },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Superkolonie gegen Karlsruhe",
        subtitle: "Gr\u00F6\u00DFenverh\u00E4ltnisse, wenn man Zahlen sortiert wie eine Ameise sortiert Kr\u00FCmel",
        data: {
          items: [
            { label: "Ameisen pro Superkolonie (Kehl, gesch\u00E4tzt)", value: 100, display: "mehrere Millionen", color: "#dc2626" },
            { label: "Karlsruher Einwohner", value: 32, display: "\u2248 310.000", color: "#92400e" },
            { label: "Wildpark-Zuschauer bei Vollhaus", value: 3, display: "33.180", color: "#a16207" },
            { label: "Karlsruher Zoo-Besuche pro Tag (Schnitt)", value: 0.4, display: "\u2248 3.500", color: "#fbbf24" },
            { label: "Ameisenkoordinator*innen in Deutschland", value: 0.05, display: "1 (Karen E\u00DFer)", color: "#451a03" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Was die Ameise wirklich lahmlegt",
        subtitle: "Anteil der bekannten Sch\u00E4den bei Tapinoma magnum in Karlsruhe und Kehl \u2013 gesch\u00E4tzt in Prozent",
        data: {
          categories: [
            "Unterh\u00F6hlte Gehwege",
            "Stromk\u00E4sten und Verteiler",
            "Hausfundamente und Terrassen",
            "K\u00FCchen und Vorratsr\u00E4ume",
            "Internet- und Datenleitungen",
          ],
          stacks: [
            { label: "Anteil der Schadensmeldungen", color: "#92400e" },
          ],
          unit: "%",
          values: [
            [42],
            [24],
            [15],
            [12],
            [7],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Sie sind \u00FCberall. In Stromk\u00E4sten, in Hausfundamenten, unter Gehwegen. Und es gibt aktuell nichts, was zuverl\u00E4ssig gegen sie hilft.",
          author: "Karen E\u00DFer, Karlsruher Ameisenkoordinatorin, im SPIEGEL (3.\u202F7.\u202F2026)",
          color: "#92400e",
        },
      },
      {
        type: "waffle",
        title: "Karlsruhe und seine Stadtteile",
        subtitle: "Von 27 Karlsruher Stadtteilen sind bereits acht bef\u00E4llen, die anderen bangen mit",
        data: {
          total: 27,
          filled: 8,
          filledColor: "#dc2626",
          emptyColor: "#e5e7eb",
          annotation: "Karlsruhe hat 27 Stadtteile. In acht davon sind Tapinoma-magnum-Superkolonien nachgewiesen \u2013 die Tendenz ist steigend. In Kehl haben die Ameisen Superkolonien mit mehreren Millionen Tieren aufgebaut und mehrfach Strom- und Internetausf\u00E4lle verursacht.",
          secondaryFilled: 5,
          secondaryColor: "#fbbf24",
          filledLabel: "Best\u00E4tigte Superkolonien (8)",
          secondaryLabel: "Verdachtsf\u00E4lle, noch nicht best\u00E4tigt (5)",
          emptyLabel: "Bisher unauff\u00E4llig (14)",
        },
      },
    ],
    sources: [
      "DER SPIEGEL, Karlsruhe hat ein Ameisenproblem (Paula Haase, 3.\u202F7.\u202F2026)",
      "t-online.de, Dr\u00FCsenameise in Karlsruhe: Invasive Art bedroht Gehwege und Wohnh\u00E4user (24.\u202F4.\u202F2026)",
      "SWR Aktuell, Ameisen sorgen f\u00FCr Stromausf\u00E4lle in Kehl",
      "BILD, Millionen Ameisen l\u00F6sen Stromausf\u00E4lle aus (Kehl 2024)",
      "karlsruhe.de, Tapinoma magnum und die Karlsruher Umweltverwaltung (Stand 6/2026)",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt. Die Prozentangaben zu Schadensarten sind Sch\u00E4tzungen auf Basis der \u00F6ffentlich zug\u00E4nglichen Berichte.",
    socialPostText: "Karlsruhe hat als bisher einzige Stadt in Deutschland eine Ameisenkoordinatorin. Warum? In acht Stadtteilen breitet sich die Gro\u00DFe Dr\u00FCsenameise aus. In der Nachbarstadt Kehl legen ihre Kolonien schon Stromk\u00E4sten lahm.\n\n\u27A1 ka-life.de/#/kw/kw28-2026",
  },
  {
    id: "kw27-2026",
    weekNumber: 27,
    year: 2026,
    dateRange: "22.\u201328. Juni 2026",
    title: "Der neue Mann im Wildpark spielt kein Poker mehr",
    subtitle: "Maximilian Senft ist 36, Wiener, ehemaliger Poker-Profi und seit Freitag offiziell Cheftrainer des Karlsruher SC. Am Sonntag steht er erstmals mit der Mannschaft auf dem Platz \u2013 vier Wochen sp\u00E4ter wartet Inter Mailand im Wildpark.",
    kicker: "KSC-Trainerwechsel",
    theme: {
      accent: "#0f766e",
      accentLight: "#5eead4",
      accentDark: "#134e4a",
      secondary: "#f59e0b",
      tertiary: "#10b981",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Vom Pokertisch\nan die Seitenlinie",
      subline: "Maximilian Senft \u00B7 neuer KSC-Cheftrainer \u00B7 KW 27",
      keyNumber: "36",
      keyLabel: "Jahre alt, Wiener, UEFA Pro-Lizenz, fr\u00FCher Poker-Profi \u2013 jetzt Eichner-Nachfolger",
      gradient: "linear-gradient(135deg, #0f766e 0%, #134e4a 50%, #042f2e 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Der Neue in Zahlen",
        subtitle: "Maximilian Senft \u00B7 Cheftrainer Karlsruher SC ab 28. Juni 2026",
        data: {
          cards: [
            { value: "36", unit: "Jahre", label: "Alt ist Senft \u2013 in Wien geboren am 4. August 1989, j\u00FCnger als sein Vorg\u00E4nger Eichner", color: "#0f766e" },
            { value: "2,17", unit: "Pkt./Spiel", label: "Schnitt bei der SV Ried 2024/25 \u2013 Aufstieg in die \u00F6sterreichische Bundesliga", color: "#10b981" },
            { value: "6,5", unit: "Jahre", label: "War Christian Eichner KSC-Chefcoach \u2013 die Wildpark-\u00C4ra, die jetzt endet", color: "#f59e0b" },
            { value: "28", unit: "6. 11 Uhr", label: "Trainingsstart Sonntag im Wildpark \u2013 Senfts erste Aufstellung als KSC-Coach", color: "#134e4a" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Drei Karlsruher Innenansichten zur \u00C4ra Senft",
        data: {
          pies: [
            {
              title: "Was beim KSC-Fan h\u00E4ngenbleibt, wenn er den Namen Senft h\u00F6rt",
              slices: [
                { label: "Der hat doch fr\u00FCher Poker gespielt, oder?", value: 38, color: "#0f766e" },
                { label: "\u00D6sterreicher, das wird kompliziert mit dem Dialekt", value: 22, color: "#10b981" },
                { label: "Hat in Ried den Aufstieg geschafft \u2013 wo war Ried noch?", value: 18, color: "#f59e0b" },
                { label: "36 Jahre alt? Ich habe l\u00E4ngere KSC-Mitgliedschaften", value: 14, color: "#134e4a" },
                { label: "Hoffentlich nicht der n\u00E4chste Slomka-Moment", value: 8, color: "#5eead4" },
              ] as PieSlice[],
            },
            {
              title: "Was Senft am Sonntag um 11 Uhr im Wildpark wirklich denkt",
              slices: [
                { label: "Welcher Wiener Coffeeshop hat hier um die Ecke ge\u00F6ffnet?", value: 30, color: "#0f766e" },
                { label: "Eichner hat sechs Jahre lang dieselbe Bank besessen", value: 24, color: "#f59e0b" },
                { label: "In vier Wochen kommt Inter \u2013 das war wirklich vereinbart?", value: 20, color: "#10b981" },
                { label: "Beim Pressetermin nicht \u00FCber Pokerregeln reden", value: 16, color: "#134e4a" },
                { label: "Wie viele Wildpark-Pfauen sehen den ersten Aufgalopp mit?", value: 10, color: "#5eead4" },
              ] as PieSlice[],
            },
            {
              title: "Welche Skills aus der Pokerkarriere im Wildpark wirklich helfen",
              slices: [
                { label: "Lesen, ob der Gegner auf der Trib\u00FCne bluffen wird (Mario Eggimann)", value: 32, color: "#0f766e" },
                { label: "Ruhig bleiben, wenn der Schiri einen Karlsruher Joker zieht", value: 26, color: "#10b981" },
                { label: "Implied Odds als Argument bei der Aufstellungsdebatte", value: 20, color: "#f59e0b" },
                { label: "Pokerface bei Trainerumfragen der BNN", value: 14, color: "#134e4a" },
                { label: "All-In als Saisonziel \u2013 die Fans w\u00FCrden mitgehen", value: 8, color: "#5eead4" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Von der Trainerentscheidung zum Saisonstart",
        subtitle: "Wie sich die KSC-Abl\u00F6sesaison 2026 verdichtet hat",
        data: {
          events: [
            { date: "8. April 2026", label: "KSC und Eichner verk\u00FCnden: gemeinsame Wege enden nach 6,5 Jahren im Sommer" },
            { date: "21. Mai 2026", label: "Maximilian Senft wird als Nachfolger offiziell vorgestellt \u2013 von der SV Ried in die F\u00E4cherstadt", highlight: true },
            { date: "17. Mai 2026", label: "Eichners letzter Heimsieg, Verabschiedung im Wildpark" },
            { date: "6. Juni 2026", label: "DFB-Pokalauslosung: KSC trifft in der 1. Runde auf Preu\u00DFen M\u00FCnster" },
            { date: "26. Juni 2026", label: "Senft stellt sich auf der Auftakt-Pressekonferenz im Wildpark erstmals den Fragen", highlight: true },
            { date: "28. Juni 2026", label: "Trainingsauftakt um 11 Uhr \u2013 die Senft-\u00C4ra beginnt auf dem Rasen", highlight: true },
            { date: "26. Juli 2026", label: "Saisoner\u00F6ffnung gegen Inter Mailand im Wildpark \u2013 Senfts erstes gro\u00DFes Heimspiel", highlight: true },
            { date: "August 2026", label: "DFB-Pokalauftakt bei Preu\u00DFen M\u00FCnster (Freitagabend)" },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Senft im KSC-Trainervergleich",
        subtitle: "Letzte Cheftrainer des Karlsruher SC \u2013 wie alt sie zum Amtsantritt waren (Jahre)",
        data: {
          items: [
            { label: "Maximilian Senft (ab 2026)", value: 36, display: "36 Jahre", color: "#0f766e" },
            { label: "Christian Eichner (2020\u20132026)", value: 37, display: "37 Jahre", color: "#134e4a" },
            { label: "Alois Schwartz (2017\u20132019)", value: 50, display: "50 Jahre", color: "#f59e0b" },
            { label: "Mirko Slomka (2016\u20132017)", value: 48, display: "48 Jahre", color: "#10b981" },
            { label: "Tomas Oral (2014\u20132016)", value: 41, display: "41 Jahre", color: "#5eead4" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Senfts \u00D6sterreich-Bilanz, kompakt",
        subtitle: "Punkteschnitt pro Spiel in den letzten drei Spielzeiten bei der SV Ried",
        data: {
          categories: ["Saison 2023/24 (2. Liga \u00D6)", "Saison 2024/25 (2. Liga \u00D6, Meister)", "Saison 2025/26 (Bundesliga \u00D6)"],
          stacks: [
            { label: "Punkte pro Spiel", color: "#0f766e" },
          ],
          unit: "Pkt./Spiel",
          values: [
            [1.55],
            [2.17],
            [1.18],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Aktuell spiele ich seit einigen Jahren \u00FCberhaupt kein Poker mehr. Eigentlich habe ich damit aufgeh\u00F6rt, als ich den Kindertrainerkurs gemacht und mich voll auf die Trainerprofession konzentriert habe.",
          author: "Maximilian Senft \u00B7 Auftakt-Pressekonferenz 26.\u202F6.\u202F2026 im Wildpark",
          color: "#0f766e",
        },
      },
      {
        type: "waffle",
        title: "Wie viele KSC-Trainer kommen aus \u00D6sterreich?",
        subtitle: "Von den 30 KSC-Cheftrainern der vergangenen 50 Jahre haben nur die wenigsten einen \u00F6sterreichischen Pass",
        data: {
          total: 30,
          filled: 1,
          filledColor: "#0f766e",
          emptyColor: "#e5e7eb",
          annotation: "Senft ist nach Klubchronik der erste Cheftrainer mit \u00F6sterreichischem Pass im Karlsruher Profibereich seit Jahrzehnten. Die KSC-Trainerb\u00E4nke der letzten 50 Jahre wurden zu \u00FCber 90\u202F% von deutschen Coaches besetzt, sechs kamen aus dem Ausland \u2013 vor allem aus den Niederlanden und der Schweiz.",
          secondaryFilled: 5,
          secondaryColor: "#f59e0b",
          filledLabel: "\u00D6sterreichischer Pass (Senft, 1)",
          secondaryLabel: "Andere Auslandsp\u00E4sse (NL, CH, BiH \u2026, 5)",
          emptyLabel: "Deutsche Cheftrainer (24)",
        },
      },
    ],
    sources: [
      "ksc.de, Maximilian Senft wird neuer Cheftrainer beim KSC (21.\u202F5.\u202F2026)",
      "sportschau.de, Ehemaliger Poker-Profi: Das ist der neue KSC-Trainer (26.\u202F6.\u202F2026)",
      "Stuttgarter Zeitung, Senft wird neuer Trainer beim KSC (21.\u202F5.\u202F2026)",
      "de.wikipedia.org, Maximilian Senft (Stand 6/2026)",
      "ksc.de, KSC gastiert im DFB-Pokal bei Preu\u00DFen M\u00FCnster (6.\u202F6.\u202F2026)",
      "swr.de, Auftakt-Pressekonferenz Maximilian Senft (26.\u202F6.\u202F2026)",
      "DFB-Pokal 2026/27, Ansetzungen 1. Hauptrunde (24.\u202F6.\u202F2026)",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt. Die Punkteschnitte gelten f\u00FCr Senfts Zeit als Cheftrainer der SV Ried in den letzten drei Spielzeiten.",
    socialPostText: "Vom Pokertisch an die Seitenlinie: Maximilian Senft (36, Wien) ist ab Sonntag KSC-Cheftrainer. Vier Wochen Vorbereitung, dann steht Inter Mailand im Wildpark. Lust auf ein Spiel?\n\n\u27A1 ka-life.de/#/kw/kw27-2026",
  },
  {
    id: "kw26-2026",
    weekNumber: 26,
    year: 2026,
    dateRange: "15.\u201321. Juni 2026",
    title: "37,5 Grad und der Rest schmilzt mit",
    subtitle: "Wagh\u00E4usel-Kirrlach im Landkreis Karlsruhe meldete am Freitag 37,5 Grad \u2013 nur eine Handbreit unter dem Juni-Rekord von 2019. Die Hitzewelle h\u00E4lt mindestens bis Mittwoch, der Hitzeaktionsplan ist gerade erst ein Jahr alt.",
    kicker: "Hitzewelle KA",
    theme: {
      accent: "#dc2626",
      accentLight: "#fca5a5",
      accentDark: "#7f1d1d",
      secondary: "#f59e0b",
      tertiary: "#ea580c",
      background: "#fafafa",
    },
    socialCard: {
      headline: "37,5 Grad,\nund der Rest schmilzt mit",
      subline: "Hitzewelle in KA \u00B7 Wagh\u00E4usel-Kirrlach am 19.6. \u00B7 KW 26",
      keyNumber: "37,5",
      keyLabel: "Grad Celsius am 19. Juni in Wagh\u00E4usel-Kirrlach \u2013 1,4 Grad unter dem Juni-Rekord",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 45%, #7f1d1d 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Die Hitze in Zahlen",
        subtitle: "DWD-Messwerte vom 19. Juni 2026 und Langzeitdaten f\u00FCr Karlsruhe",
        data: {
          cards: [
            { value: "37,5", unit: "\u00B0C", label: "In Wagh\u00E4usel-Kirrlach am 19. Juni \u2013 BW-Spitzenwert, deutschlandweit Platz 3", color: "#dc2626" },
            { value: "38,9", unit: "\u00B0C", label: "Juni-Rekord BW von 2019 (Mannheim) \u2013 wackelt am Sonntag und Montag", color: "#f59e0b" },
            { value: "40,2", unit: "\u00B0C", label: "All-Time-Rekord Karlsruhe, gemessen im August 2003", color: "#7f1d1d" },
            { value: "70", unit: "Hitzetage", label: "Erwartet KA bis Ende des Jahrhunderts \u2013 heute sind es 15 bis 20", color: "#ea580c" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Drei Studien zur Karlsruher Lebensf\u00FChrung bei 37,5 Grad im Schatten",
        data: {
          pies: [
            {
              title: "Wo der Karlsruher um 14 Uhr wirklich steht",
              slices: [
                { label: "Im obersten Altbau-Stock, Fenster zu wegen Sonne", value: 32, color: "#dc2626" },
                { label: "Vor dem K\u00FChlregal bei Edeka in der S\u00FCdstadt, l\u00E4nger als n\u00F6tig", value: 24, color: "#ea580c" },
                { label: "Im Schloss-Schlauch zwischen zwei Tagungspausen", value: 18, color: "#f59e0b" },
                { label: "Im KIT-Audimax, weil dort die Klimaanlage l\u00E4uft", value: 14, color: "#7f1d1d" },
                { label: "Demonstrativ im Stadtgarten, mit Eis als Argument", value: 12, color: "#fca5a5" },
              ] as PieSlice[],
            },
            {
              title: "Hitze-Strategien, die wir uns selbst gegen\u00FCber nie zugeben",
              slices: [
                { label: "\u201EFr\u00FChsommer am Rhein\u201C, eigentlich vier Stunden im Schatten einer Pappel", value: 30, color: "#dc2626" },
                { label: "Drei Duschen am Tag, klimatechnisch verbucht als Sport", value: 24, color: "#ea580c" },
                { label: "Nasses T-Shirt im Tiefk\u00FChler \u2013 Schwiegermutter-Trick aus Durlach", value: 20, color: "#f59e0b" },
                { label: "Die Wohnung um 4:30 Uhr l\u00FCften, als w\u00E4re das normal", value: 14, color: "#7f1d1d" },
                { label: "Im B\u00FCro l\u00E4nger bleiben \u2013 da geht die Klimaanlage", value: 12, color: "#fca5a5" },
              ] as PieSlice[],
            },
            {
              title: "Was im Karlsruher Hitzeaktionsplan steht \u2013 und was wir davon nutzen",
              slices: [
                { label: "Trinkbrunnen im Schlossgarten, lokalisiert per Google Maps", value: 28, color: "#dc2626" },
                { label: "Schwimmb\u00E4der mit \u00DCberlauf-Warteschlange ab 11 Uhr", value: 22, color: "#ea580c" },
                { label: "Klimatisierter Lesesaal der BLB, getarnt als Goethelekt\u00FCre", value: 18, color: "#f59e0b" },
                { label: "K\u00FChle Kirchen der Innenstadt, neuerdings auch atheistisch genutzt", value: 16, color: "#7f1d1d" },
                { label: "Die Nachbarschaftshilfe-App, von der wir wussten, aber\u2026", value: 10, color: "#fca5a5" },
                { label: "Eigentlich alles \u2013 wir kennen den Plan einfach nicht", value: 6, color: "#9ca3af" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Eine Woche heizt sich auf",
        subtitle: "Die Karlsruher Hitzewelle, Stunde f\u00FCr Schwei\u00DFperle",
        data: {
          events: [
            { date: "17. Juni 2026", label: "DWD warnt: \u201EHistorisch lange Hitzewelle\u201C \u2013 mindestens sieben Tage \u00FCber 30 Grad" },
            { date: "18. Juni 2026", label: "Wagh\u00E4usel-Kirrlach passiert die 35-Grad-Marke, BW-Spitzenwert" },
            { date: "19. Juni 2026", label: "37,5 Grad in Wagh\u00E4usel-Kirrlach \u2013 deutschlandweit Platz 3 hinter Kitzingen und Bad Kreuznach", highlight: true },
            { date: "19. Juni 2026", label: "Bunte Nacht der Digitalisierung in KA \u2013 Thema \u201Edigitale Souver\u00E4nit\u00E4t\u201C bei 35 Grad in der Innenstadt" },
            { date: "21. Juni 2026", label: "Kalendarischer Sommeranfang, Prognose 38 Grad \u2013 wackelt der Juni-Rekord?", highlight: true },
            { date: "22. Juni 2026", label: "Montag: DWD h\u00E4lt 39 Grad im Rheingraben f\u00FCr m\u00F6glich \u2013 Juni-Allzeit-Rekord 38,9 Grad wackelt", highlight: true },
            { date: "24. Juni 2026", label: "Mittwoch: Gewitter und Abk\u00FChlung erwartet \u2013 jedenfalls vorerst" },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Wo Karlsruhe in den Rekorden steht",
        subtitle: "H\u00F6chsttemperaturen der letzten Jahre an deutschen Messstationen, in Grad Celsius",
        data: {
          items: [
            { label: "Karlsruhe / Freiburg, August 2003", value: 40.2, display: "40,2\u00A0\u00B0C", color: "#7f1d1d" },
            { label: "T\u00F6nisvorst & Duisburg, Juli 2019 (DE-Allzeit)", value: 41.2, display: "41,2\u00A0\u00B0C", color: "#dc2626" },
            { label: "Bernburg, Juni 2019 (Juni-Allzeit DE)", value: 39.6, display: "39,6\u00A0\u00B0C", color: "#ea580c" },
            { label: "Mannheim, Juni 2019 (Juni-Rekord BW)", value: 38.9, display: "38,9\u00A0\u00B0C", color: "#f59e0b" },
            { label: "Wagh\u00E4usel-Kirrlach, 19. Juni 2026", value: 37.5, display: "37,5\u00A0\u00B0C", color: "#fca5a5" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Wie hei\u00DF wird es in Karlsruhe?",
        subtitle: "Anzahl der Hitzetage \u00FCber 30 Grad pro Jahr in Karlsruhe \u2013 heute und in der Worst-Case-Prognose",
        data: {
          categories: [
            "Heute (15\u201320 Hitzetage)",
            "Mitte Jahrhundert (Worst Case)",
            "Ende Jahrhundert (Worst Case)",
          ],
          stacks: [
            { label: "Hitzetage pro Jahr", color: "#dc2626" },
          ],
          unit: "Tage",
          values: [
            [18],
            [50],
            [70],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Wir haben eine Hitzewelle, die ungew\u00F6hnlich lange anh\u00E4lt, mit Temperaturen \u00FCber 30 Grad, mindestens sieben bis zehn, vielleicht sogar 14 Tage lang.",
          author: "SWR-Wetterexperte Karsten Schwanke, 19. Juni 2026",
          color: "#dc2626",
        },
      },
      {
        type: "waffle",
        title: "Karlsruhe vor und nach der Klima-Anpassung",
        subtitle: "Von 100 Karlsruhern erreichen heute nur ein Teil eine k\u00FChle Gr\u00FCnfl\u00E4che in 400 Metern \u2013 die Stadt will das \u00E4ndern",
        data: {
          total: 100,
          filled: 65,
          filledColor: "#dc2626",
          emptyColor: "#e5e7eb",
          annotation: "Heute erreichen sch\u00E4tzungsweise 65 von 100 Karlsruhern in weniger als 400 Metern eine echte Gr\u00FCnfl\u00E4che. Der Hitzeaktionsplan zielt darauf, das in den n\u00E4chsten Jahren auf 100 zu bringen \u2013 weil bei 70 Hitzetagen pro Jahr eine Eisdiele allein nicht reicht.",
          secondaryFilled: 20,
          secondaryColor: "#ea580c",
          filledLabel: "K\u00FChle Gr\u00FCnfl\u00E4che in unter 400\u202Fm erreichbar (65)",
          secondaryLabel: "Gr\u00FCnfl\u00E4che vorhanden, aber zu weit oder zu klein (20)",
          emptyLabel: "Keine k\u00FChle R\u00FCckzugsfl\u00E4che in der Nachbarschaft (15)",
        },
      },
    ],
    sources: [
      "DWD-Vorl\u00E4ufige Messwerte 19.\u00A0Juni 2026",
      "tagesschau.de, Hitzewelle in Deutschland (19.\u00A06.\u00A02026)",
      "zeit.de, Hitzewelle Deutschland (20.\u00A06.\u00A02026)",
      "SWR Aktuell, Historisch lange Hitzewelle in BW (19.\u00A06.\u00A02026)",
      "karlsruhe.de, Hitzeaktionsplan Karlsruhe (beschlossen 2025)",
      "karlsruhe.de, Stadtklima und W\u00E4rmeinsel (Stand 5/2026)",
      "Statista, Heisse Tage Worst-Case-Szenario, Region Karlsruhe (2021)",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt. Die Erreichbarkeitsquote ist eine Sch\u00E4tzung in Anlehnung an die Karlsruher Klimaanpassungsstrategie.",
    socialPostText: "37,5\u202F\u00B0C in Wagh\u00E4usel-Kirrlach, mindestens sieben Tage Hitze in Folge, Juni-Rekord am Montag in Reichweite. Der Karlsruher Hitzeaktionsplan ist ein Jahr alt \u2013 unsere Strategien sind \u00E4lter und kreativer.\n\n\u27A1 ka-life.de/#/kw/kw26-2026",
  },
  {
    id: "kw25-2026",
    weekNumber: 25,
    year: 2026,
    dateRange: "8.\u201314. Juni 2026",
    title: "Schufa-Schmerz beim Karlsruher BGH",
    subtitle: "Der Bundesgerichtshof stoppt eine beliebte Inkasso-Praxis: Bonit\u00E4tsauskunfts-Kosten von 1,35 \u20AC d\u00FCrfen nicht mehr auf den Schuldner abgew\u00E4lzt werden. Klein bei der Summe \u2013 gro\u00DF bei der Wirkung f\u00FCr 68 Millionen Verbraucher.",
    kicker: "BGH-Urteil aus Karlsruhe",
    theme: {
      accent: "#0e7490",
      accentLight: "#67e8f9",
      accentDark: "#164e63",
      secondary: "#f59e0b",
      tertiary: "#0891b2",
      background: "#fafafa",
    },
    socialCard: {
      headline: "1,35 \u20AC, die der BGH\nVerbrauchern erspart",
      subline: "BGH-Urteil 11.06.2026 \u00B7 VII ZR 93/25 \u00B7 KW 25",
      keyNumber: "1,35",
      keyLabel: "Euro f\u00FCr eine Schufa-Auskunft \u2013 jetzt nicht mehr auf den Schuldner umlegbar",
      gradient: "linear-gradient(135deg, #0e7490 0%, #0891b2 50%, #164e63 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Das Urteil in Zahlen",
        subtitle: "BGH VII. Zivilsenat \u2013 Urteile vom 11. Juni 2026",
        data: {
          cards: [
            { value: "1,35", unit: "\u20AC", label: "Kosten einer Schufa-Bonit\u00E4tsauskunft, die nicht mehr abw\u00E4lzbar sind", color: "#0e7490" },
            { value: "68", unit: "Mio.", label: "Verbraucher in Deutschland sind bei der Schufa gespeichert", color: "#164e63" },
            { value: "29,95", unit: "\u20AC", label: "Kostet die offizielle Schufa-Bonit\u00E4tsAuskunft f\u00FCr Vermieter immer noch", color: "#f59e0b" },
            { value: "12", unit: "Kriterien", label: "Bestimmen seit 17.\u202F3.\u202F2026 den neuen, transparenten Schufa-Score", color: "#0891b2" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Drei Innenansichten eines 1,35-\u20AC-Urteils, das niemand bezahlen wollte",
        data: {
          pies: [
            {
              title: "Was eine Karlsruher Wohnungsbewerbung wirklich pr\u00FCft",
              slices: [
                { label: "Schufa-Score, vom Algorithmus gef\u00FChlt", value: 38, color: "#0e7490" },
                { label: "Ob das Foto im S\u00FCdstadt-Caf\u00E9 aufgenommen wurde", value: 22, color: "#0891b2" },
                { label: "K\u00FCndigungsdatum der Vor-WG (zwei Wochen zu lang)", value: 18, color: "#f59e0b" },
                { label: "Beruf der Eltern, h\u00F6flich \u201Eaus Interesse\u201C erfragt", value: 14, color: "#164e63" },
                { label: "Ob du ein KIT-Sweater im Bewerbungsvideo tr\u00E4gst", value: 8, color: "#67e8f9" },
              ] as PieSlice[],
            },
            {
              title: "Mahnschreiben Version 2.0 \u2013 was jetzt 1,35\u202F\u20AC ersetzt",
              slices: [
                { label: "\u201EBearbeitungsgeb\u00FChr Auslandsdatenbank\u201C, 4,90\u202F\u20AC", value: 30, color: "#f59e0b" },
                { label: "\u201EZustellpauschale Briefumschlag\u201C, plus Mehrwertsteuer", value: 24, color: "#0e7490" },
                { label: "Ein Anwalt aus K\u00F6ln, dessen Stundensatz du auch tr\u00E4gst", value: 20, color: "#164e63" },
                { label: "Drohung mit dem Karlsruher Amtsgericht, das nichts dazu kann", value: 16, color: "#0891b2" },
                { label: "H\u00F6flicher Hinweis, dass die Mahnung an sich freiwillig war", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Was Karlsruher \u00FCber ihren Schufa-Score wissen",
              slices: [
                { label: "Genug, um nerv\u00F6s zu werden, zu wenig, um zu handeln", value: 42, color: "#0e7490" },
                { label: "Den genauen Score \u2013 seit der Wohnung in der Oststadt weg war", value: 22, color: "#0891b2" },
                { label: "Dass app.schufa.de existiert (gelernt im f\u00FCnften Tab)", value: 18, color: "#67e8f9" },
                { label: "Dass Eintr\u00E4ge nach 36 Monaten verschwinden \u2013 \u00E4hnlich wie Studienkredite", value: 12, color: "#f59e0b" },
                { label: "Alles. Mein Schwager arbeitet bei einer Bank.", value: 6, color: "#164e63" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Schufa-Beben aus Karlsruhe",
        subtitle: "Wie ein 1,35-Euro-Streit zum Bundesurteil wurde",
        data: {
          events: [
            { date: "17. M\u00E4rz 2026", label: "Schufa f\u00FChrt neuen, transparenten Score mit 12 Kriterien ein \u2013 Verbraucher k\u00F6nnen ihn erstmals kostenlos einsehen" },
            { date: "M\u00E4rz/April 2026", label: "Kostenloser digitaler Schufa-Account \u00FCber app.schufa.de geht online" },
            { date: "11. Juni 2026", label: "BGH-Urteil aus Karlsruhe: Schufa-Auskunft vor Klage ist kein Verzugsschaden \u2013 VII ZR 93/25 und 96/25", highlight: true },
            { date: "Sofort", label: "Inkassob\u00FCros m\u00FCssen 1,35\u202F\u20AC-Position aus Mahnschreiben streichen", highlight: true },
            { date: "Bis Ende 2028", label: "\u00DCbergangsfrist f\u00FCr Unternehmen zur Anpassung an den neuen Schufa-Score" },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Wo Karlsruher die Schufa treffen",
        subtitle: "Anteil der Lebenslagen, in denen ein Bonit\u00E4tsnachweis verlangt wird (Sch\u00E4tzung)",
        data: {
          items: [
            { label: "Wohnungssuche", value: 95, display: "\u2248 95\u202F%", color: "#0e7490" },
            { label: "Mobilfunkvertrag", value: 80, display: "\u2248 80\u202F%", color: "#0891b2" },
            { label: "Ratenkauf / BNPL", value: 70, display: "\u2248 70\u202F%", color: "#f59e0b" },
            { label: "Kreditkartenantrag", value: 65, display: "\u2248 65\u202F%", color: "#164e63" },
            { label: "Stromvertrag-Wechsel", value: 35, display: "\u2248 35\u202F%", color: "#67e8f9" },
            { label: "Online-Rechnungskauf", value: 25, display: "\u2248 25\u202F%", color: "#9ca3af" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Was eine Bonit\u00E4tspr\u00FCfung wirklich kostet",
        subtitle: "Direkte Schufa-Geb\u00FChren in Euro \u2013 ohne versteckte Folgekosten",
        data: {
          categories: [
            "BGH-Streitwert (Urteil)",
            "Selbstauskunft Datenkopie",
            "Schufa-Account online",
            "BonitatsAuskunft (Vermieter)",
          ],
          stacks: [
            { label: "Kosten", color: "#0e7490" },
          ],
          unit: "\u20AC",
          values: [
            [1.35],
            [0],
            [0],
            [29.95],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Um ein gerichtliches Verfahren einzuleiten und am Ende einen rechtskr\u00E4ftigen Titel zu erlangen, ben\u00F6tigt ein Gl\u00E4ubiger schlichtweg keine Bonit\u00E4tsauskunft.",
          author: "BGH, VII. Zivilsenat \u00B7 Urteil vom 11.\u202F6.\u202F2026",
          color: "#0e7490",
        },
      },
      {
        type: "waffle",
        title: "Wie viele Karlsruher betrifft das?",
        subtitle: "Von 100 Erwachsenen in Karlsruhe haben fast alle einen Schufa-Eintrag",
        data: {
          total: 100,
          filled: 92,
          filledColor: "#0e7490",
          emptyColor: "#e5e7eb",
          annotation: "Rund 92 von 100 Erwachsenen sind in der Schufa gespeichert. Davon haben rund 10 mindestens einen Negativeintrag \u2013 oft aus banalen Gr\u00FCnden wie einer ungekl\u00E4rten Mobilfunkrechnung. Das BGH-Urteil schont jetzt jedem von ihnen mindestens 1,35\u202F\u20AC pro Inkasso-Fall.",
          secondaryFilled: 10,
          secondaryColor: "#f59e0b",
          filledLabel: "Schufa-Eintrag ohne Negativmerkmal (82)",
          secondaryLabel: "Mit mindestens einem Negativeintrag (10)",
          emptyLabel: "Kein Schufa-Eintrag (8)",
        },
      },
    ],
    sources: [
      "BGH, Pressemitteilung Nr. 100/2026 vom 11.06.2026 (VII ZR 93/25, VII ZR 96/25)",
      "beck-aktuell.de, BGH verneint Erstattung Schufa-Kosten (11.06.2026)",
      "wbs.legal, BGH: Keine Erstattung f\u00FCr Schufa-Auskunft (11.06.2026)",
      "verbraucherrecht.io, Neuer SCHUFA-Score 2026 (10.4.2026)",
      "postbank.de, SCHUFA-Auskunft kostenlos beantragen (5/2026)",
      "advoneo-schuldnerberatung.de, SCHUFA Score, Eintr\u00E4ge und L\u00F6schfristen (4/2026)",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt. Die Lebenslagen-Anteile sind branchen\u00FCbliche Sch\u00E4tzungen.",
    socialPostText: "Der BGH in Karlsruhe stoppt eine beliebte Inkasso-Praxis: 1,35\u202F\u20AC f\u00FCr eine Schufa-Auskunft d\u00FCrfen nicht mehr auf den Schuldner abgew\u00E4lzt werden. Klein in der Summe, gro\u00DF in der Wirkung f\u00FCr 68 Mio. Verbraucher.\n\n\u27A1 ka-life.de/#/kw/kw25-2026",
  },
  {
    id: "kw24-2026",
    weekNumber: 24,
    year: 2026,
    dateRange: "1.\u20137. Juni 2026",
    title: "286 Mess\u2019n und kein bisschen leise",
    subtitle: "Die Karlsruher Fr\u00FChjahrsmess\u2019 geht in den Endspurt: 11 Tage Volksfest, ANUBIS mit 55 Metern, Bratw\u00FCrste ohne Ende und am 8. Juni das Abschluss-Feuerwerk. F\u00FCr viele DER emotionale Heimat-Moment im Sommer.",
    kicker: "Karlsruher Mess\u2019",
    theme: {
      accent: "#ea580c",
      accentLight: "#fdba74",
      accentDark: "#7c2d12",
      secondary: "#facc15",
      tertiary: "#dc2626",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Mess\u2019, Bratwurst,\nRiesenrad-Romantik",
      subline: "286. Karlsruher Fr\u00FChjahrsmess\u2019 \u00b7 bis 8. Juni \u00b7 KW 24",
      keyNumber: "286",
      keyLabel: "Ausgaben hat die Karlsruher Mess\u2019 \u2013 mehr als jeder Karlsruher SC",
      gradient: "linear-gradient(135deg, #ea580c 0%, #c2410c 50%, #7c2d12 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Mess\u2019 in Zahlen",
        subtitle: "Die 286. Karlsruher Fr\u00FChjahrsmess\u2019 auf dem Messplatz an der Durlacher Allee",
        data: {
          cards: [
            { value: "286", unit: "Auflage", label: "So oft gab es die Karlsruher Mess\u2019 schon \u2013 zweimal pro Jahr, seit Generationen", color: "#ea580c" },
            { value: "55", unit: "Meter h\u00F6chstes Fahrgesch.", label: "H\u00F6he der neuen Looping-Schaukel ANUBIS \u2013 mit bis zu 120 km/h", color: "#dc2626" },
            { value: "11", unit: "Tage", label: "L\u00E4uft die Fr\u00FChjahrsmess\u2019 \u2013 vom 29. Mai bis 8. Juni 2026", color: "#facc15" },
            { value: "4", unit: "Premieren", label: "ANUBIS, Alpen Coaster, Diablos Residenz, Familien-Wildwasserbahn \u2013 erstmals in KA", color: "#7c2d12" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was auf dem Messplatz wirklich passiert",
        data: {
          pies: [
            {
              title: "Warum Karlsruher die Mess\u2019 besuchen",
              slices: [
                { label: "Eine Bratwurst, drei Langos, ein Cr\u00EApe", value: 30, color: "#ea580c" },
                { label: "Auf ANUBIS Adrenalin schreien", value: 22, color: "#dc2626" },
                { label: "Mit Kindern im Babyflug fahren", value: 18, color: "#facc15" },
                { label: "Lose ziehen bis die Karte leer ist", value: 15, color: "#7c2d12" },
                { label: "Klassentreffen am Riesenrad", value: 10, color: "#fdba74" },
                { label: "Verlaufen und Sandhausen suchen", value: 5, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Was auf dem Heimweg \u00FCbrig bleibt",
              slices: [
                { label: "Eine wabbelige Plastikrose", value: 28, color: "#dc2626" },
                { label: "Eine halbe Lebkuchen-Brezel", value: 22, color: "#ea580c" },
                { label: "Ein 6-Euro-Goldfisch im Beutel", value: 18, color: "#facc15" },
                { label: "Schwere Beine vom Riesenrad-Treppensteigen", value: 14, color: "#7c2d12" },
                { label: "Eine Schramme vom Autoscooter", value: 10, color: "#fdba74" },
                { label: "Restalkohol vom Krusig-Biergarten", value: 8, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Warum Eltern wirklich auf die Mess\u2019 gehen",
              slices: [
                { label: "Kinder ruhigstellen mit Zuckerwatte", value: 32, color: "#ea580c" },
                { label: "Selbst mal wieder Break Dance fahren", value: 24, color: "#dc2626" },
                { label: "Erinnerungen an die eigene Jugend", value: 20, color: "#facc15" },
                { label: "In Krusig\u2019s Dorf ein Bier ohne Stress", value: 14, color: "#7c2d12" },
                { label: "Weil man halt einmal im Jahr muss", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Vom Fassanstich bis zum Feuerwerk",
        subtitle: "11 Tage Mess\u2019 \u2013 wer wann wo was macht",
        data: {
          events: [
            { date: "29. Mai 2026", label: "Er\u00F6ffnung 14 Uhr, Fassanstich durch OB Mentrup um 17 Uhr in Krusig\u2019s Dorf", highlight: true },
            { date: "31. Mai 2026", label: "Erster Sonntag: Kostenloses Kinderschminken in Krusig\u2019s Dorf" },
            { date: "2. Juni 2026", label: "\u00DC-65-Nachmittag: Kostenlose Riesenrad-Fahrt f\u00FCr Senior:innen" },
            { date: "3. Juni 2026", label: "Familientag mit erm\u00E4\u00DFigten Preisen an allen Gesch\u00E4ften", highlight: true },
            { date: "5. Juni 2026", label: "Premiere: Kindergeburtstag direkt auf der Mess\u2019 \u2013 25 \u20AC pro Kind, 7 Stationen" },
            { date: "6.\u20137. Juni 2026", label: "Endspurt-Wochenende, Theater of Illusions im Hotel Edelweiss" },
            { date: "8. Juni 2026", label: "Abschluss-Feuerwerk gegen 22:30 Uhr \u2013 Bis zur Herbst-Mess\u2019!", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Wie schnell f\u00E4hrt was?",
        subtitle: "Spitzengeschwindigkeit in km/h \u2013 Mess\u2019-Fahrgesch\u00E4fte gegen Karlsruher Alltag",
        data: {
          items: [
            { label: "ANUBIS Looping-Schaukel", value: 120, display: "120 km/h", color: "#dc2626" },
            { label: "ICE durch den HBF Karlsruhe", value: 100, display: "\u2248 100 km/h (Limit)", color: "#ea580c" },
            { label: "Alpen Coaster (gesch\u00E4tzt)", value: 60, display: "\u2248 60 km/h", color: "#facc15" },
            { label: "Auto durch die Innenstadt", value: 50, display: "50 km/h", color: "#7c2d12" },
            { label: "Tram der VBK auf der Kaiserstra\u00DFe", value: 30, display: "30 km/h", color: "#fdba74" },
            { label: "Riesenrad Grand Soleil", value: 5, display: "\u2248 5 km/h", color: "#9ca3af" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Kalorien-Hochrechnung eines Mess\u2019-Abends",
        subtitle: "Eine typische Mess\u2019-Bestellung pro Person \u2013 schmecken muss es",
        data: {
          categories: ["Bratwurst mit Br\u00F6tchen", "Langos mit K\u00E4se", "Cr\u00EApe Nutella", "Pommes gro\u00DF", "Zuckerwatte"],
          stacks: [
            { label: "Kalorien", color: "#ea580c" },
          ],
          unit: "kcal",
          values: [
            [450],
            [700],
            [550],
            [600],
            [400],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Auf der Mess\u2019 trifft man Leute, die man sonst nie sieht \u2013 und isst Sachen, die man sonst nie essen w\u00FCrde. Genau deshalb gehen wir hin.",
          author: "Karlsruher Mess\u2019-Tradition seit 1741",
          color: "#ea580c",
        },
      },
      {
        type: "waffle",
        title: "Mess\u2019-Fahrer-Typologie",
        subtitle: "Von 100 Karlsruhern auf der Mess\u2019 \u2013 wer traut sich auf welche Bahn?",
        data: {
          total: 100,
          filled: 60,
          filledColor: "#ea580c",
          emptyColor: "#e5e7eb",
          annotation: "60 von 100 fahren maximal Riesenrad oder Babyflug. 30 wagen Klassiker wie Break Dance oder Autoscooter. Nur 10 trauen sich auf die neue ANUBIS-Schaukel in 55 Metern H\u00F6he.",
          secondaryFilled: 30,
          secondaryColor: "#dc2626",
          filledLabel: "Riesenrad, Babyflug, Kinderkarussell (60)",
          secondaryLabel: "Break Dance, Autoscooter, Geisterbahn (30)",
          emptyLabel: "ANUBIS \u2013 nur f\u00FCr Adrenalin-Junkies (10)",
        },
      },
    ],
    sources: [
      "karlsruhe.de/kultur-freizeit/maerkte/jahrmaerkte-karlsruher-mess (Stadt Karlsruhe Marktamt)",
      "durlacher.de, 286. Fr\u00FChjahrsmess\u2019 mit neuen Attraktionen (27.5.2026)",
      "karlsruhe-erleben.de, Karlsruher Fr\u00FChjahrsmess\u2019 2026",
      "meinka.de, Erfahrungsberichte zur Karlsruher Mess\u2019",
      "Kalorienangaben gem\u00E4\u00DF n\u00E4hrwerttabelle.de / DGE Durchschnittswerte",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt. Kalorien sind Durchschnittsangaben handels\u00FCblicher Portionen.",
    socialPostText: "286 Mess\u2019n und kein bisschen leise: Die Karlsruher Fr\u00FChjahrsmess\u2019 geht bis 8. Juni in den Endspurt. ANUBIS mit 120 km/h, Bratw\u00FCrste ohne Ende und am Montag das Feuerwerk. Wer war schon da?\n\n\u27a1 ka-life.de/#/kw/kw24-2026",
  },
  {
    id: "kw23-2026",
    weekNumber: 23,
    year: 2026,
    dateRange: "25.\u201331. Mai 2026",
    title: "Inter Mailand kommt in den Wildpark",
    subtitle: "Der amtierende italienische Meister gegen den KSC \u2013 am 26. Juli ist im BBBank Wildpark Champions-League-Atmosph\u00E4re. F\u00FCr viele Karlsruher das gr\u00F6\u00DFte Heimspiel seit Jahren.",
    kicker: "KSC vs. Inter",
    theme: {
      accent: "#1e3a8a",
      accentLight: "#60a5fa",
      accentDark: "#0f172a",
      secondary: "#000000",
      tertiary: "#0284c7",
      background: "#fafafa",
    },
    socialCard: {
      headline: "KSC empf\u00E4ngt\nden italienischen Meister",
      subline: "26. Juli 2026 \u00b7 BBBank Wildpark \u00b7 KW 23",
      keyNumber: "21",
      keyLabel: "Scudetti hat Inter \u2013 KSC hat einen Cup von 1956",
      gradient: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Das Duell in Zahlen",
        subtitle: "Karlsruher SC vs. FC Internazionale Milano",
        data: {
          cards: [
            { value: "26. 7.", unit: "2026", label: "Saisoner\u00F6ffnung im BBBank Wildpark, Anpfiff 16:30 Uhr", color: "#1e3a8a" },
            { value: "33.180", unit: "Pl\u00E4tze", label: "Stadionkapazit\u00E4t Wildpark \u2013 d\u00FCrfte ausverkauft sein", color: "#0f172a" },
            { value: "21", unit: "Scudetti", label: "Italienische Meistertitel von Inter, der j\u00FCngste am 4. Mai 2026", color: "#0284c7" },
            { value: "3", unit: "Ligen Abstand", label: "Inter: Serie A Platz 1 \u00B7 KSC: 2. Bundesliga Platz 10", color: "#60a5fa" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was die F\u00E4cherstadt am 26. Juli umtreibt",
        data: {
          pies: [
            {
              title: "Was Wildpark-Besucher beim Anpfiff denken",
              slices: [
                { label: "Endlich wieder Champions-League-Feeling", value: 35, color: "#1e3a8a" },
                { label: "Bitte nicht zweistellig verlieren", value: 25, color: "#0284c7" },
                { label: "Selfie mit Lautaro im Kopf", value: 20, color: "#60a5fa" },
                { label: "Wer war nochmal Calhanoglu?", value: 12, color: "#0f172a" },
                { label: "Ich bin nur wegen der Currywurst hier", value: 8, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Womit Inter-Spieler in Karlsruhe rechnen",
              slices: [
                { label: "Schwarzwaldluft und gutes Klima", value: 30, color: "#1e3a8a" },
                { label: "Pfauen im Schlossgarten als Mitspieler", value: 25, color: "#0284c7" },
                { label: "Currywurst statt Carbonara", value: 20, color: "#60a5fa" },
                { label: "\u201EWo bitte ist der Mail\u00E4nder Dom?\u201C", value: 15, color: "#0f172a" },
                { label: "Wein vom Turmberg im Hotel", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Karlsruher Ticketkauf-Verhalten",
              slices: [
                { label: "Dauerkartenbesitzer freuen sich diebisch", value: 35, color: "#1e3a8a" },
                { label: "Gucken ob noch was bei Kleinanzeigen", value: 25, color: "#0284c7" },
                { label: "Familien-Block-Sondersitzung n\u00F6tig", value: 20, color: "#60a5fa" },
                { label: "Lieber Public Viewing im Biergarten", value: 12, color: "#0f172a" },
                { label: "Was, der KSC spielt im Sommer?", value: 8, color: "#9ca3af" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Vom Aufstieg bis zum gro\u00DFen Test",
        subtitle: "KSC-Sommer 2026 \u2013 was bis zum Inter-Spiel passiert",
        data: {
          events: [
            { date: "17. Mai 2026", label: "Saisonende 2. Liga: KSC landet auf Platz 10 mit 44 Punkten" },
            { date: "22. Mai 2026", label: "Schleusener-Abschied: Topscorer verl\u00E4sst nach 71 Toren in 216 Spielen den Verein", highlight: true },
            { date: "27. Mai 2026", label: "KSC verk\u00FCndet: Inter Mailand kommt zur Saisoner\u00F6ffnung", highlight: true },
            { date: "28. Juni 2026", label: "Trainingsauftakt unter Christian Eichner\u2019s Nachfolge" },
            { date: "Juli 2026", label: "Trainingslager und Testspiele zur Vorbereitung" },
            { date: "26. Juli 2026", label: "Anpfiff KSC \u2013 Inter Mailand, 16:30 Uhr im Wildpark", highlight: true },
            { date: "8. August 2026", label: "Erster Spieltag 2. Bundesliga \u2013 zur\u00FCck im Alltag" },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Marktwerte im Vergleich",
        subtitle: "Kaderwert in Mio. \u20AC (Transfermarkt, Saison 2025/26)",
        data: {
          items: [
            { label: "Inter Mailand", value: 100, display: "\u2248 530 Mio", color: "#1e3a8a" },
            { label: "Bayern M\u00FCnchen (Referenz)", value: 175, display: "\u2248 925 Mio", color: "#dc2626" },
            { label: "VfB Stuttgart (Referenz)", value: 56, display: "\u2248 295 Mio", color: "#0284c7" },
            { label: "Karlsruher SC", value: 7, display: "\u2248 37 Mio", color: "#60a5fa" },
            { label: "SV Sandhausen (Referenz)", value: 1.5, display: "\u2248 8 Mio", color: "#9ca3af" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Inters Top-Torsch\u00FCtzen 2025/26",
        subtitle: "Tore in der Serie A \u2013 wer am 26. Juli in Karlsruhe trifft, wei\u00DF noch keiner",
        data: {
          categories: ["Lautaro Mart\u00EDnez", "Marcus Thuram", "Hakan Calhanoglu", "Federico Dimarco", "Pio Esposito"],
          stacks: [
            { label: "Serie A Tore 25/26", color: "#1e3a8a" },
          ],
          unit: "Tore",
          values: [
            [17],
            [13],
            [9],
            [7],
            [7],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Zwei Wochen vor dem Saisonstart wartet auf den KSC und seine Fans ein echtes Highlight: Der italienische Spitzenclub gibt seine Visitenkarte im BBBank Wildpark ab.",
          author: "KSC-Mitteilung, 27. Mai 2026",
          color: "#1e3a8a",
        },
      },
      {
        type: "waffle",
        title: "Wie selten so ein Gast ist",
        subtitle: "Von 100 Sommer-Testspielen des KSC ist eines gegen einen amtierenden europ\u00E4ischen Top-Liga-Meister",
        data: {
          total: 100,
          filled: 100,
          filledColor: "#0f172a",
          emptyColor: "#e5e7eb",
          annotation: "Inter ist amtierender Meister der Serie A und Italienpokalsieger 2025/26. KSC-Testspiele gegen einen aktuellen europ\u00E4ischen Liga-Champion sind extrem selten \u2013 zuletzt 2019 gegen den FC Liverpool im Wildpark.",
          secondaryFilled: 1,
          secondaryColor: "#1e3a8a",
          filledLabel: "Gegner aus Liga 2/3 oder Nachwuchsteams (99)",
          secondaryLabel: "Amtierender europ\u00E4ischer Liga-Meister (1)",
          emptyLabel: "",
        },
      },
    ],
    sources: [
      "KSC.de, Saisoner\u00F6ffnung gegen FC Internazionale Milano (27.5.2026)",
      "Inter.it, Summer Training Camp in Germany (29.5.2026)",
      "bundesliga.com, Tabelle 2. Bundesliga 2025/26",
      "ESPN, Internazionale 2025-26 Stats",
      "Transfermarkt.de, Kaderwerte Saison 2025/26",
      "KSC.de, Stadionkapazit\u00E4t BBBank Wildpark",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt. Marktwerte sind gerundete Sch\u00E4tzungen.",
    socialPostText: "Am 26. Juli kommt Inter Mailand in den Wildpark \u2013 der amtierende italienische Meister gegen unseren KSC. 21 Scudetti gegen einen Cup von 1956. F\u00FCr viele das gr\u00F6\u00DFte Heimspiel seit Jahren.\n\n\u27a1 ka-life.de/#/kw/kw23-2026",
  },
  {
    id: "kw22-2026",
    weekNumber: 22,
    year: 2026,
    dateRange: "18.\u201324. Mai 2026",
    title: "75 Jahre H\u00FCter des Grundgesetzes",
    subtitle: "Das Bundesverfassungsgericht in Karlsruhe wird 75. Vom Prinz-Max-Palais zum wichtigsten Gericht der Republik \u2013 4.800 Verfassungsbeschwerden pro Jahr, 1,7% Erfolgsquote, und ein Standort, der Geschichte schrieb.",
    kicker: "Bundesverfassungsgericht",
    theme: {
      accent: "#991b1b",
      accentLight: "#fca5a5",
      accentDark: "#450a0a",
      secondary: "#1f2937",
      tertiary: "#d4a017",
      background: "#fafafa",
    },
    socialCard: {
      headline: "75 Jahre H\u00FCter\ndes Grundgesetzes",
      subline: "Bundesverfassungsgericht \u00b7 KW 22",
      keyNumber: "75",
      keyLabel: "Jahre Bundesverfassungsgericht in Karlsruhe",
      gradient: "linear-gradient(135deg, #991b1b 0%, #450a0a 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Karlsruhes wichtigste Beh\u00F6rde",
        subtitle: "Das BVerfG in Zahlen",
        data: {
          cards: [
            { value: "75", unit: "Jahre", label: "Seit 28. September 1951 in Karlsruhe", color: "#991b1b" },
            { value: "4.800", unit: "Verfahren", label: "Pro Jahr \u2013 95% sind Verfassungsbeschwerden", color: "#1f2937" },
            { value: "1,7", unit: "% Erfolg", label: "Nur 55 von 4.800 Beschwerden waren 2023 erfolgreich", color: "#d4a017" },
            { value: "16", unit: "Richter:innen", label: "In zwei Senaten, halb Bundestag, halb Bundesrat", color: "#fca5a5" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Wahrheiten \u00FCber Karlsruhes obersten Gerichtshof",
        data: {
          pies: [
            {
              title: "Was Karlsruher \u00FCber das BVerfG sagen",
              slices: [
                { label: "Wichtigstes Geb\u00E4ude der Stadt", value: 30, color: "#991b1b" },
                { label: "Sieht aus wie Schuhkarton", value: 25, color: "#1f2937" },
                { label: "Stolz, dass es hier ist", value: 25, color: "#d4a017" },
                { label: "Bin schonmal vorbeigefahren", value: 15, color: "#fca5a5" },
                { label: "Welches Verfassungs-was?", value: 5, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Warum Karlsruhe und nicht Berlin?",
              slices: [
                { label: "Distanz zur Politik (Bonn 1951)", value: 40, color: "#991b1b" },
                { label: "BGH war auch schon hier", value: 25, color: "#1f2937" },
                { label: "Wein und Klima", value: 15, color: "#d4a017" },
                { label: "Niemand weiss es genau", value: 15, color: "#fca5a5" },
                { label: "Bauen halt in Karlsruhe gerne", value: 5, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Wer beschwert sich beim BVerfG?",
              slices: [
                { label: "B\u00FCrger:innen (Verfassungsbeschw.)", value: 60, color: "#991b1b" },
                { label: "Bundesl\u00E4nder (gegen Bundesgesetze)", value: 15, color: "#1f2937" },
                { label: "Politische Parteien", value: 12, color: "#d4a017" },
                { label: "Andere Gerichte (Vorlagen)", value: 10, color: "#fca5a5" },
                { label: "Der Bundespraesident", value: 3, color: "#9ca3af" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Die wichtigsten Karlsruher Urteile",
        subtitle: "75 Jahre, die Deutschland gepraegt haben",
        data: {
          events: [
            { date: "28. Sept. 1951", label: "Feierliche Er\u00F6ffnung im Prinz-Max-Palais durch Adenauer & Heuss", highlight: true },
            { date: "1956", label: "KPD-Verbot \u2013 zweite und letzte Parteiverbot der BRD" },
            { date: "1969", label: "Umzug ins neue Geb\u00E4ude am Schlosspark \u2013 Transparenz als Architektur" },
            { date: "1975", label: "Erstes Abtreibungsurteil \u2013 Schutz des ungeborenen Lebens" },
            { date: "1995", label: "Kruzifix-Beschluss \u2013 Kein Pflichtkreuz in bayerischen Schulen" },
            { date: "2009", label: "Lissabon-Urteil \u2013 EU-Integration nur mit Grundgesetz-Grenzen" },
            { date: "2021", label: "Klimaschutz-Urteil \u2013 Generationengerechtigkeit als Grundrecht", highlight: true },
            { date: "2026", label: "75-Jahr-Jubil\u00E4um \u2013 Festakt mit Bundespr\u00E4sident in Karlsruhe", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "BVerfG vs. die obersten Gerichte der Welt",
        subtitle: "Anzahl Richter:innen im Vergleich",
        data: {
          items: [
            { label: "BVerfG Karlsruhe", value: 100, display: "16", color: "#991b1b" },
            { label: "US Supreme Court", value: 56, display: "9", color: "#1f2937" },
            { label: "\u00D6sterreich VfGH", value: 88, display: "14", color: "#d4a017" },
            { label: "Schweiz BGer", value: 240, display: "38", color: "#fca5a5" },
            { label: "Frankreich Conseil constitutionnel", value: 56, display: "9", color: "#9ca3af" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Verfassungsbeschwerden im Zeitverlauf",
        subtitle: "Eingaenge pro Jahr beim BVerfG",
        data: {
          categories: ["1951", "1970", "1990", "2010", "2023"],
          stacks: [
            { label: "Beschwerden", color: "#991b1b" },
          ],
          unit: "Beschwerden",
          values: [
            [137],
            [1700],
            [3200],
            [6200],
            [4843],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Was in Karlsruhe entschieden wird, gilt f\u00FCr ganz Deutschland \u2013 und manchmal weit dar\u00FCber hinaus.",
          author: "Bundespr\u00E4sident Frank-Walter Steinmeier, Festakt 75 Jahre BVerfG, Mai 2026",
          color: "#991b1b",
        },
      },
      {
        type: "waffle",
        title: "Wie viele Beschwerden Erfolg haben",
        subtitle: "Von 100 Verfassungsbeschwerden in 2023",
        data: {
          total: 100,
          filled: 100,
          filledColor: "#1f2937",
          emptyColor: "#e5e7eb",
          annotation: "Von 100 Verfassungsbeschwerden in 2023 waren nur etwa 2 erfolgreich. 95% werden gar nicht erst zur Entscheidung angenommen. Karlsruhes Senate sieben streng \u2013 nicht jeder \u00C4rger ist ein Grundrechtsverstoss.",
          secondaryFilled: 2,
          secondaryColor: "#991b1b",
          filledLabel: "Nicht angenommen oder abgewiesen (98)",
          secondaryLabel: "Erfolgreich (2 von 100)",
          emptyLabel: "",
        },
      },
    ],
    sources: [
      "Bundesverfassungsgericht, Statistik 2023",
      "Statista, Verfassungsbeschwerden 2013\u20132023",
      "Deutscher Bundestag, BVerfGG Historie",
      "Stadtarchiv Karlsruhe, Prinz-Max-Palais",
      "Wikipedia, Bundesverfassungsgericht",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "75 Jahre Bundesverfassungsgericht in Karlsruhe: 4.800 Verfassungsbeschwerden pro Jahr, 1,7% Erfolgsquote und Urteile, die Deutschland gepr\u00E4gt haben. Vom Prinz-Max-Palais zum H\u00FCter des Grundgesetzes.\n\n\u27a1 ka-life.de/#/kw/kw22-2026",
  },
  {
    id: "kw21-2026",
    weekNumber: 21,
    year: 2026,
    dateRange: "18.\u201324. Mai 2026",
    title: "27.000 muessen raus",
    subtitle: "In Pforzheim wird heute eine 1,35-Tonnen-Luftmine aus dem Zweiten Weltkrieg entschaerft. Es ist die groesste Evakuierung der Region seit Jahrzehnten \u2013 und der Zugverkehr nach Karlsruhe ist eingestellt.",
    kicker: "Region & Geschichte",
    theme: {
      accent: "#7c2d12",
      accentLight: "#fb923c",
      accentDark: "#431407",
      secondary: "#1f2937",
      tertiary: "#dc2626",
      background: "#fafafa",
    },
    socialCard: {
      headline: "27.000 muessen raus",
      subline: "Pforzheim \u00b7 Bombenentsch\u00E4rfung \u00b7 KW 21",
      keyNumber: "27.000",
      keyLabel: "Menschen evakuiert",
      gradient: "linear-gradient(135deg, #7c2d12 0%, #431407 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Die Entsch\u00E4rfung in Zahlen",
        subtitle: "17. Mai 2026 \u2013 Pforzheimer Oststadt",
        data: {
          cards: [
            { value: "27.000", unit: "Menschen", label: "M\u00FCssen bis 8 Uhr ihre Wohnungen verlassen", color: "#7c2d12" },
            { value: "1,35", unit: "Tonnen", label: "Sprengstoff in der Luftmine HC 4000", color: "#dc2626" },
            { value: "1,5", unit: "km Radius", label: "Sperrgebiet um Damm-/St\u00FCckelh\u00E4ldenstra\u00DFe", color: "#fb923c" },
            { value: "1.000", unit: "Einsatzkr\u00E4fte", label: "Polizei, Feuerwehr, THW vor Ort", color: "#1f2937" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was Pforzheimer und Karlsruher Pendler heute denken",
        data: {
          pies: [
            {
              title: "Was Pforzheimer heute machen",
              slices: [
                { label: "Bei Verwandten in KA", value: 30, color: "#7c2d12" },
                { label: "Wochenend-Trip Schwarzwald", value: 25, color: "#fb923c" },
                { label: "Notunterkunft Congress-Centrum", value: 20, color: "#dc2626" },
                { label: "Live-Ticker im Caf\u00E9 nebenan", value: 15, color: "#1f2937" },
                { label: "Doch zu Hause geblieben (Achtung!)", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Karlsruher Pendler-Reaktion",
              slices: [
                { label: "Endlich Sonntag \u2013 nicht mein Problem", value: 35, color: "#fb923c" },
                { label: "Mist, kein Zug nach Pforzheim", value: 20, color: "#dc2626" },
                { label: "S5/Stadtbahn-Check", value: 20, color: "#7c2d12" },
                { label: "Spende fuer Notunterkunft", value: 15, color: "#1f2937" },
                { label: "\u201EWieder eine?\u201C-Achselzucken", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Wer hat die Bombe damals abgeworfen",
              slices: [
                { label: "Royal Air Force (Briten)", value: 75, color: "#1f2937" },
                { label: "US-Bomber (vereinzelt)", value: 15, color: "#dc2626" },
                { label: "Wei\u00DF keiner mehr genau", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Pforzheim: Vom Inferno zur Entsch\u00E4rfung",
        subtitle: "81 Jahre Bombenlast aus 22 Minuten",
        data: {
          events: [
            { date: "23. Feb. 1945, 19:50", label: "RAF-Angriff beginnt \u2013 368 Bomber, 1.575 Tonnen Bomben", highlight: true },
            { date: "23. Feb. 1945, 20:12", label: "Letzte Bombe f\u00E4llt. 22 Minuten, 17.600 Tote", highlight: true },
            { date: "1945\u201360", label: "Wiederaufbau \u2013 98% des Zentrums war zerst\u00F6rt" },
            { date: "2014", label: "Letzte gr\u00F6\u00DFere Entsch\u00E4rfung \u2013 ca. 3.000 Evakuierte" },
            { date: "13. Mai 2026", label: "Bauarbeiter finden Luftmine am Quartierspark" },
            { date: "17. Mai 2026, 8 Uhr", label: "Sperrgebiet ger\u00E4umt. Mittags Entsch\u00E4rfung.", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Gr\u00F6\u00DFte Evakuierungen der Region",
        subtitle: "Bombenentsch\u00E4rfungen im Vergleich",
        data: {
          items: [
            { label: "Frankfurt, Sept. 2017", value: 100, display: "65.000", color: "#dc2626" },
            { label: "Augsburg, Weihnachten 2016", value: 83, display: "54.000", color: "#fb923c" },
            { label: "Pforzheim, 17. Mai 2026", value: 42, display: "27.000", color: "#7c2d12" },
            { label: "Pforzheim, 2014", value: 5, display: "~3.000", color: "#1f2937" },
            { label: "Rastatt, Okt. 2025", value: 2, display: "~1.300", color: "#9ca3af" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Blindg\u00E4nger in Deutschland",
        subtitle: "Gefundene Weltkriegsbomben pro Jahr",
        data: {
          categories: ["2020", "2021", "2022", "2023", "2024", "2025"],
          stacks: [
            { label: "Bombenfunde", color: "#7c2d12" },
          ],
          unit: "Funde",
          values: [
            [4500],
            [4200],
            [3900],
            [3700],
            [3500],
            [3300],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Bei einer Luftmine dieser Gr\u00F6\u00DFenordnung in dicht bebautem Stadtgebiet gibt es keine zweite Chance.",
          author: "Matthias Peter, Kampfmittelbeseitigungsdienst Baden-W\u00FCrttemberg",
          color: "#7c2d12",
        },
      },
      {
        type: "waffle",
        title: "Was bedeuten 27.000 Menschen?",
        subtitle: "Vergleich zur Bev\u00F6lkerung von Pforzheim",
        data: {
          total: 100,
          filled: 22,
          filledColor: "#7c2d12",
          emptyColor: "#e5e7eb",
          annotation: "22 von 100 Pforzheimern m\u00FCssen heute ihre Wohnung verlassen. Pforzheim hat rund 125.000 Einwohner \u2013 die Evakuierung betrifft also gut ein F\u00FCnftel der gesamten Stadt.",
          secondaryFilled: 0,
          secondaryColor: "#fb923c",
          filledLabel: "Evakuiert (27.000 \u2248 22%)",
          secondaryLabel: "",
          emptyLabel: "Nicht direkt betroffen (\u2248 78%)",
        },
      },
    ],
    sources: [
      "Stadt Pforzheim, Pressemitteilung 13.\u201316.05.2026",
      "Tagesschau, 16.05.2026",
      "SWR Aktuell Karlsruhe, 14.\u201316.05.2026",
      "Pforzheim Geschichte, Bombenentsch\u00E4rfungen",
      "Wikipedia, Bombing of Pforzheim in WWII",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "27.000 Pforzheimer m\u00FCssen heute Morgen ihre Wohnungen verlassen \u2013 1,35 Tonnen Sprengstoff aus dem Zweiten Weltkrieg liegen unter der Oststadt. Auch der Zugverkehr nach Karlsruhe ist eingestellt. Eine Bilanz in Zahlen.\n\n\u27a1 ka-life.de/#/kw/kw21-2026",
  },
  {
    id: "muttertag-2026",
    weekNumber: 19,
    year: 2026,
    dateRange: "10. Mai 2026",
    title: "Eine Milliarde f\u00FCr Mama",
    subtitle: "Heute ist Muttertag. Deutschland gibt 1,05 Milliarden Euro f\u00FCr Geschenke aus, Karlsruher Caf\u00E9s sind komplett ausgebucht. Was Mama wirklich will und wie viel ein Brunch heute kostet.",
    kicker: "Muttertag Spezial",
    theme: {
      accent: "#ec4899",
      accentLight: "#f9a8d4",
      accentDark: "#831843",
      secondary: "#16a34a",
      tertiary: "#f59e0b",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Eine Milliarde\nf\u00FCr Mama",
      subline: "Muttertag Spezial \u00b7 10. Mai 2026",
      keyNumber: "1,05",
      keyLabel: "Mrd. \u20ac geben Deutsche heute aus",
      gradient: "linear-gradient(135deg, #ec4899 0%, #831843 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Muttertag in Zahlen",
        subtitle: "Was Deutschland heute der Mama schenkt",
        data: {
          cards: [
            { value: "1,05", unit: "Mrd. \u20ac", label: "Geschenkausgaben in Deutschland", color: "#ec4899" },
            { value: "18,72", unit: "\u20ac/Kopf", label: "Durchschnittlich pro Person", color: "#f59e0b" },
            { value: "30", unit: "%", label: "Aller Deutschen kaufen ein Geschenk", color: "#16a34a" },
            { value: "1923", unit: "Premiere", label: "Erster Muttertag in Deutschland", color: "#831843" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Karlsruher Muttertags-Wahrheiten",
        data: {
          pies: [
            {
              title: "Was Karlsruher heute zur Mama bringen",
              slices: [
                { label: "Blumen (Klassiker)", value: 35, color: "#ec4899" },
                { label: "Pralinen", value: 20, color: "#831843" },
                { label: "Selbstgebasteltes", value: 18, color: "#f59e0b" },
                { label: "Brunch-Einladung", value: 15, color: "#16a34a" },
                { label: "Vergessen, schnell tanken", value: 12, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Was Karlsruher Muettern heute wirklich w\u00FCnschen",
              slices: [
                { label: "Ruhe", value: 35, color: "#ec4899" },
                { label: "Anruf gen\u00FCgt", value: 25, color: "#16a34a" },
                { label: "Endlich aufger\u00E4umtes Kinderzimmer", value: 20, color: "#f59e0b" },
                { label: "Den teuren Brunch", value: 15, color: "#831843" },
                { label: "Enkelkinder", value: 5, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Wo Karlsruher heute brunchen",
              slices: [
                { label: "Wilma Wunder (Marktplatz)", value: 25, color: "#ec4899" },
                { label: "Zuhause (selbst gemacht)", value: 35, color: "#16a34a" },
                { label: "Caf\u00E9 Galerie Durlach", value: 15, color: "#f59e0b" },
                { label: "Schlosshotel", value: 10, color: "#831843" },
                { label: "Nirgends, Bett ist Pflicht", value: 15, color: "#9ca3af" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "comparison",
        title: "Muttertag vs. die Konkurrenz",
        subtitle: "Geschenkausgaben in Deutschland (2026)",
        data: {
          items: [
            { label: "Weihnachten", value: 100, display: "~120 Mrd. \u20ac", color: "#16a34a" },
            { label: "Valentinstag", value: 17, display: "~1,4 Mrd. \u20ac", color: "#dc2626" },
            { label: "Muttertag", value: 13, display: "1,05 Mrd. \u20ac", color: "#ec4899" },
            { label: "Vatertag", value: 5, display: "~0,4 Mrd. \u20ac", color: "#1e40af" },
            { label: "Ostern", value: 22, display: "~1,8 Mrd. \u20ac", color: "#f59e0b" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Was im Geschenkkorb landet",
        subtitle: "Beliebteste Muttertagsgeschenke 2026",
        data: {
          categories: ["Blumen", "S\u00FC\u00DFigkeiten", "Restaurant-Einladung", "Schmuck", "Selbstgebastelt"],
          stacks: [
            { label: "%-Anteil", color: "#ec4899" },
          ],
          unit: "%",
          values: [
            [42],
            [29],
            [22],
            [14],
            [11],
          ],
        },
      },
      {
        type: "timeline",
        title: "Vom Gedenktag zum Konsumfest",
        subtitle: "Eine kleine Muttertags-Geschichte",
        data: {
          events: [
            { date: "1908", label: "Anna Jarvis organisiert ersten Muttertag in West Virginia" },
            { date: "1914", label: "USA: Woodrow Wilson erkl\u00E4rt Muttertag zum Nationalfeiertag" },
            { date: "1923", label: "Muttertag kommt nach Deutschland \u2013 importiert vom Verband Deutscher Blumengesch\u00E4ftsinhaber", highlight: true },
            { date: "1934", label: "Nazis machen Muttertag zum Staatsfeiertag (Propaganda)" },
            { date: "1948", label: "Anna Jarvis stirbt mittellos \u2013 sie verklagte zuletzt Bl\u00FCmchenfirmen wegen Kommerzialisierung", highlight: true },
            { date: "10. Mai 2026", label: "Deutschland gibt 1,05 Mrd. \u20ac aus \u2013 Anna Jarvis w\u00FCrde sich im Grab umdrehen", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Eine Karte, die du ein paar Cent gekostet hat, oder ein Telefonanruf druecken die wahre Liebe besser aus als ein gekauftes Geschenk.",
          author: "Anna Jarvis, Begr\u00FCnderin und sp\u00E4tere Gegnerin des Muttertags",
          color: "#ec4899",
        },
      },
      {
        type: "waffle",
        title: "Wer denkt an die Mama?",
        subtitle: "30 von 100 Deutschen kaufen ein Geschenk",
        data: {
          total: 100,
          filled: 30,
          filledColor: "#ec4899",
          emptyColor: "#e5e7eb",
          annotation: "30% der Deutschen kaufen ein Muttertagsgeschenk. Die anderen 70% telefonieren, basteln, kochen \u2013 oder haben es schlicht vergessen. Tipp: Tankstellen-Blumen z\u00E4hlen auch.",
          secondaryFilled: 0,
          secondaryColor: "#16a34a",
          filledLabel: "Kaufen ein Geschenk (30%)",
          secondaryLabel: "",
          emptyLabel: "Anders ehren oder vergessen (70%)",
        },
      },
    ],
    sources: [
      "Handelsverband Deutschland (HDE), Umfrage 28.04.2026",
      "n-tv, 28.04.2026",
      "GEO, Geschichte des Muttertags",
      "Wikipedia, Anna Marie Jarvis",
      "OpenTable Karlsruhe Muttertags-Reservierungen",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "1,05 Milliarden Euro f\u00FCr Geschenke, 30% der Deutschen kaufen \u2013 und Karlsruhes Caf\u00E9s sind komplett ausgebucht. Heute zum Muttertag: Was Mama wirklich will und warum die Erfinderin des Tages ihn am Ende abschaffen wollte.\n\n\u27a1 ka-life.de/#/kw/muttertag-2026",
  },
  {
    id: "kw20-2026",
    weekNumber: 20,
    year: 2026,
    dateRange: "11.\u201317. Mai 2026",
    title: "7.458 laufen 8,88889 Kilometer",
    subtitle: "Die 35. Badische Meile sprengt alle Rekorde \u2013 mit 1.052 Startern aus dem KIT als gr\u00F6\u00DFter Mannschaft und einer Strecke, die nur Karlsruhe haben kann.",
    kicker: "Sport & Stadtkultur",
    theme: {
      accent: "#0e7490",
      accentLight: "#22d3ee",
      accentDark: "#164e63",
      secondary: "#f59e0b",
      tertiary: "#dc2626",
      background: "#fafafa",
    },
    socialCard: {
      headline: "7.458 laufen\n8,88889 Kilometer",
      subline: "Badische Meile \u00b7 KW 20",
      keyNumber: "7.458",
      keyLabel: "Finisher der 35. Badischen Meile",
      gradient: "linear-gradient(135deg, #0e7490 0%, #164e63 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Die 35. Badische Meile in Zahlen",
        subtitle: "3. Mai 2026 \u2013 Karlsruhe l\u00E4uft",
        data: {
          cards: [
            { value: "7.458", unit: "Finisher", label: "Auf 8,88889 km Strecke", color: "#0e7490" },
            { value: "1.052", unit: "Starter", label: "Vom KIT \u2013 gr\u00F6\u00DFte Mannschaft", color: "#f59e0b" },
            { value: "27:35", unit: "Minuten", label: "Siegerzeit Simon St\u00FCtzel (LGR Karlsruhe)", color: "#22d3ee" },
            { value: "35", unit: "Auflage", label: "Seit 1990 Tradition in der F\u00E4cherstadt", color: "#dc2626" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Wahrheiten \u00FCber Karlsruhes gr\u00F6\u00DFten Volkslauf",
        data: {
          pies: [
            {
              title: "Warum Karlsruher die Badische Meile laufen",
              slices: [
                { label: "Tradition (lief Opa schon)", value: 30, color: "#0e7490" },
                { label: "Firmenchallenge", value: 25, color: "#f59e0b" },
                { label: "Eis im Ziel", value: 20, color: "#dc2626" },
                { label: "Sport", value: 15, color: "#22d3ee" },
                { label: "Aus Versehen angemeldet", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Was Teilnehmer auf der Strecke denken",
              slices: [
                { label: "Warum sind das nicht 8 km?", value: 35, color: "#0e7490" },
                { label: "Nie wieder!", value: 25, color: "#dc2626" },
                { label: "Wo ist die Wasserstation?", value: 20, color: "#22d3ee" },
                { label: "N\u00E4chstes Jahr unter 50 Min.", value: 20, color: "#f59e0b" },
              ] as PieSlice[],
            },
            {
              title: "Karlsruher Laufausreden bei Regen",
              slices: [
                { label: "Knie tut weh", value: 30, color: "#0e7490" },
                { label: "Brauche neue Schuhe", value: 25, color: "#f59e0b" },
                { label: "Letztens schon 5 km", value: 20, color: "#22d3ee" },
                { label: "Wetter zu schlecht", value: 15, color: "#9ca3af" },
                { label: "Habs trotzdem gemacht", value: 10, color: "#dc2626" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Eine ungew\u00F6hnliche Distanz",
        subtitle: "Wie Karlsruhe zu seiner eigenen Meile kam",
        data: {
          events: [
            { date: "1715", label: "Karl Wilhelm gr\u00FCndet Karlsruhe \u2013 Stadtgrundma\u00DF entsteht" },
            { date: "18. Jh.", label: "Eine \u201EBadische Meile\u201C = 8.888,89 m (ca. 5 r\u00F6mische Meilen)" },
            { date: "1990", label: "Erste Badische Meile zum 275. Stadtjubil\u00E4um", highlight: true },
            { date: "2019", label: "30-j\u00E4hriges Jubil\u00E4um \u2013 erste Massenveranstaltung mit 7.000+" },
            { date: "2020\u201321", label: "Pause wegen Corona" },
            { date: "3. Mai 2026", label: "35. Auflage \u2013 7.458 Finisher, KIT als gr\u00F6\u00DFter Verein", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Die schnellsten Karlsruher",
        subtitle: "Top-Zeiten 2026 (Top 5 jeweils)",
        data: {
          items: [
            { label: "Simon St\u00FCtzel (LGR)", value: 100, display: "27:35", color: "#0e7490" },
            { label: "Christian St\u00F6ckl (Liedolsheim)", value: 92, display: "28:56", color: "#22d3ee" },
            { label: "Samuel M\u00F6hler (RP KA)", value: 91, display: "29:00", color: "#f59e0b" },
            { label: "Celine Kistner (LGR) \u2013 Frauen-Siegerin", value: 88, display: "29:44", color: "#dc2626" },
            { label: "Melina Wolf (LGR)", value: 87, display: "29:51", color: "#9ca3af" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Karlsruhes Sport-Massenveranstaltungen",
        subtitle: "Teilnehmerzahlen 2025/26",
        data: {
          categories: ["Bad. Meile (Lauf)", "Baden Marathon", "Sport-Stadtmeisterschaft", "KSC-Kids-Tag", "Karlsruher Triathlon"],
          stacks: [
            { label: "Teilnehmer", color: "#0e7490" },
          ],
          unit: "Teilnehmer",
          values: [
            [7458],
            [4500],
            [3200],
            [2800],
            [1200],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Auf nasser Strecke gewann St\u00FCtzel hochverdient \u2013 in 27:35 Minuten lie\u00DF er keine Zweifel aufkommen.",
          author: "Runner's World, 3. Mai 2026",
          color: "#0e7490",
        },
      },
      {
        type: "waffle",
        title: "Wer rennt eigentlich beim KIT mit?",
        subtitle: "1.052 KIT-Starter unter 7.458 Finishern",
        data: {
          total: 100,
          filled: 14,
          filledColor: "#f59e0b",
          emptyColor: "#e5e7eb",
          annotation: "14 von 100 Finishern liefen unter dem KIT-Banner. Das KIT war damit gr\u00F6\u00DFter Verein \u2013 vor Stadtwerken, Polizei und Feuerwehr. Karlsruhe ist eben Wissens- UND Sportstadt.",
          secondaryFilled: 0,
          secondaryColor: "#22d3ee",
          filledLabel: "KIT-L\u00E4ufer:innen (14% aller Starter)",
          secondaryLabel: "",
          emptyLabel: "Andere Vereine, Firmen, Privat (86%)",
        },
      },
    ],
    sources: [
      "Runner's World, 3. Mai 2026",
      "badischemeile.de, Veranstalter LG Region Karlsruhe",
      "KIT, Pressemitteilung 04.05.2026",
      "Stadtwiki Karlsruhe, Badische Meile",
      "raceresult.com, Ergebnisse 2026",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "7.458 Karlsruher rannten am Sonntag \u00FCber 8,88889 km \u2013 mit 1.052 Startern war das KIT gr\u00F6\u00DFter Verein. Warum die Strecke krumm ist, wer am schnellsten lief und was Teilnehmer wirklich denken.\n\n\u27a1 ka-life.de/#/kw/kw20-2026",
  },
  {
    id: "kw19-2026",
    weekNumber: 19,
    year: 2026,
    dateRange: "4.\u201310. Mai 2026",
    title: "Das Ende einer \u00C4ra",
    subtitle: "Christian Eichner verl\u00E4sst den KSC nach 6 Jahren. \u00DCber 8.000 Fans unterschreiben gegen die Trennung. Die Bilanz eines Trainers, der mehr war als nur ein Trainer.",
    kicker: "KSC & Vereinspolitik",
    theme: {
      accent: "#1e3a8a",
      accentLight: "#60a5fa",
      accentDark: "#0c1e4a",
      secondary: "#f59e0b",
      tertiary: "#dc2626",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Das Ende\neiner \u00C4ra",
      subline: "Eichner & der KSC \u00b7 KW 19",
      keyNumber: "227",
      keyLabel: "Spiele auf der KSC-Bank",
      gradient: "linear-gradient(135deg, #1e3a8a 0%, #0c1e4a 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Die Eichner-\u00C4ra in Zahlen",
        subtitle: "Februar 2020 bis Sommer 2026",
        data: {
          cards: [
            { value: "227", unit: "Spiele", label: "Auf der Bank seit 3. Februar 2020", color: "#1e3a8a" },
            { value: "85", unit: "Siege", label: "37,4% Siegquote in der 2. Liga", color: "#60a5fa" },
            { value: "6+", unit: "Jahre", label: "L\u00E4ngste KSC-Trainerzeit seit Winfried Sch\u00E4fer", color: "#f59e0b" },
            { value: "8000+", unit: "Stimmen", label: "Petition gegen seine Entlassung", color: "#dc2626" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was Karlsruher zur Trennung sagen",
        data: {
          pies: [
            {
              title: "Reaktionen aus dem Wildpark",
              slices: [
                { label: "Petition unterschrieben", value: 35, color: "#1e3a8a" },
                { label: "Eggimann muss weg!", value: 25, color: "#dc2626" },
                { label: "Endlich frische Impulse", value: 15, color: "#f59e0b" },
                { label: "Erstmal Bier", value: 15, color: "#60a5fa" },
                { label: "Wer ist Eichner?", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Was Eichner f\u00FCr den KSC war",
              slices: [
                { label: "Trainer", value: 30, color: "#1e3a8a" },
                { label: "Kindheitsverein-Identit\u00E4t", value: 30, color: "#f59e0b" },
                { label: "Stabilit\u00E4tsanker", value: 20, color: "#60a5fa" },
                { label: "Pressekonferenz-Talent", value: 20, color: "#dc2626" },
              ] as PieSlice[],
            },
            {
              title: "Eichners Zukunft (Spekulation)",
              slices: [
                { label: "Bundesligaverein", value: 35, color: "#1e3a8a" },
                { label: "Erstmal Sabbatical", value: 25, color: "#60a5fa" },
                { label: "Ausland (England?)", value: 20, color: "#f59e0b" },
                { label: "R\u00FCckkehr KSC 2030", value: 20, color: "#dc2626" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Sechs Jahre Eichner",
        subtitle: "Die wichtigsten Stationen",
        data: {
          events: [
            { date: "3. Februar 2020", label: "Eichner \u00FCbernimmt vom Wildpark-Profi zum Cheftrainer", highlight: true },
            { date: "Mai 2020", label: "Klassenerhalt in Corona-Geisterspielen" },
            { date: "Saison 21/22", label: "Vorzeitiger Klassenerhalt, Aufbruchstimmung" },
            { date: "Saison 23/24", label: "Beste KSC-Saison seit Aufstieg, Platz 5", highlight: true },
            { date: "Dez. 2025", label: "Co-Trainer Bajramovic muss gehen \u2013 erste Risse" },
            { date: "23. April 2026", label: "KSC verk\u00FCndet Trennung zum Saisonende", highlight: true },
            { date: "Sommer 2026", label: "Letzte Bank-Sitzung. \u00C4ra zu Ende.", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "KSC-Trainer im Langzeit-Vergleich",
        subtitle: "Anzahl Spiele beim KSC",
        data: {
          items: [
            { label: "Winfried Sch\u00E4fer (1986\u201391)", value: 100, display: "~200 Spiele", color: "#f59e0b" },
            { label: "Christian Eichner (2020\u201326)", value: 113, display: "227 Spiele", color: "#1e3a8a" },
            { label: "Joe Albert Z. (2017\u201319)", value: 38, display: "~75 Spiele", color: "#60a5fa" },
            { label: "Markus Kauczinski (2012\u201316)", value: 75, display: "~150 Spiele", color: "#dc2626" },
            { label: "Alois Schwartz (2017)", value: 12, display: "~25 Spiele", color: "#9ca3af" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Eichners Saison-Bilanz",
        subtitle: "Punkte pro Saison in der 2. Bundesliga",
        data: {
          categories: ["19/20*", "20/21", "21/22", "22/23", "23/24", "24/25", "25/26"],
          stacks: [
            { label: "Punkte", color: "#1e3a8a" },
          ],
          unit: "Punkte",
          values: [
            [13],
            [40],
            [44],
            [44],
            [60],
            [49],
            [40],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Welcher Chef kann so etwas schon von sich behaupten, wenn er den Klub wechselt?",
          author: "Christian Eichner \u00FCber die Welle der Dankesnachrichten, April 2026",
          color: "#1e3a8a",
        },
      },
      {
        type: "waffle",
        title: "Eichners Siegquote",
        subtitle: "227 Pflichtspiele in der KSC-Karriere",
        data: {
          total: 100,
          filled: 67,
          filledColor: "#1e3a8a",
          emptyColor: "#e5e7eb",
          annotation: "37 Siege, 30 Unentschieden, 33 Niederlagen pro 100 Spiele \u2013 Eichners Bilanz: solide, aber selten triumphal. Doch die Identit\u00E4t mit dem Verein war sein gr\u00F6\u00DFtes Asset.",
          secondaryFilled: 37,
          secondaryColor: "#60a5fa",
          filledLabel: "Unentschieden + Siege (67 von 100)",
          secondaryLabel: "Davon Siege (37 von 100)",
          emptyLabel: "Niederlagen (33 von 100)",
        },
      },
    ],
    sources: [
      "ksc.de, Pressemitteilung Trainerwechsel, 23.04.2026",
      "SWR Sport, 29.04.2026",
      "footystats.org, Eichner Manager Stats",
      "Wikipedia, Christian Eichner",
      "news.de, KSC Saisontabelle 25/26",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "Sechs Jahre, 227 Spiele, 8.000 Petitions-Stimmen: Christian Eichner verl\u00E4sst den KSC im Sommer. Die Bilanz einer \u00C4ra \u2013 und was Karlsruher Fans wirklich \u00FCber die Trennung denken.\n\n\u27a1 ka-life.de/#/kw/kw19-2026",
  },
  {
    id: "kw18-2026",
    weekNumber: 18,
    year: 2026,
    dateRange: "27. April \u2013 3. Mai 2026",
    title: "Karlsruhe wird zum Genuss-Tempel",
    subtitle: "Fest der Sinne am 25./26. April \u2013 40 Genussst\u00E4nde, 300 Oldtimer, 100 Jahre Berufsfeuerwehr und ein verkaufsoffener Sonntag. Die F\u00E4cherstadt feiert den Fr\u00FChling.",
    kicker: "Stadtleben & Genuss",
    theme: {
      accent: "#65a30d",
      accentLight: "#a3e635",
      accentDark: "#365314",
      secondary: "#dc2626",
      tertiary: "#f59e0b",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Karlsruhe wird\nzum Genuss-Tempel",
      subline: "Fest der Sinne \u00b7 KW 18",
      keyNumber: "40+",
      keyLabel: "Genussst\u00E4nde auf dem Marktplatz",
      gradient: "linear-gradient(135deg, #65a30d 0%, #365314 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "Das Fest der Sinne in Zahlen",
        subtitle: "Karlsruhes gr\u00F6\u00DFtes Fr\u00FChlingsfest",
        data: {
          cards: [
            { value: "40+", unit: "St\u00E4nde", label: "Genussmarkt auf dem Marktplatz", color: "#65a30d" },
            { value: "100", unit: "Jahre", label: "Berufsfeuerwehr Karlsruhe \u2013 Jubil\u00E4um", color: "#dc2626" },
            { value: "4", unit: "Pl\u00E4tze", label: "Markt-, Schloss-, Kirch- und Stephanplatz", color: "#f59e0b" },
            { value: "5", unit: "Stunden", label: "Verkaufsoffener Sonntag (13\u201318 Uhr)", color: "#365314" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was Karlsruher beim Fest der Sinne wirklich machen",
        data: {
          pies: [
            {
              title: "Wo Karlsruher das Wochenende verbringen",
              slices: [
                { label: "Genussmarkt (Bratwurst)", value: 35, color: "#65a30d" },
                { label: "Verkaufsoffener Sonntag", value: 25, color: "#dc2626" },
                { label: "Schlosspark", value: 20, color: "#f59e0b" },
                { label: "Im Stau auf der Kriegsstr.", value: 12, color: "#9ca3af" },
                { label: "Zuhause auf dem Balkon", value: 8, color: "#365314" },
              ] as PieSlice[],
            },
            {
              title: "Was wir am Genussmarkt kaufen",
              slices: [
                { label: "Flammkuchen", value: 30, color: "#dc2626" },
                { label: "Bratwurst (klassisch)", value: 25, color: "#a3e635" },
                { label: "Wein \u00FCberteuert", value: 20, color: "#f59e0b" },
                { label: "Etwas Veganes (probieren)", value: 15, color: "#65a30d" },
                { label: "Nichts (zu voll)", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Karlsruher Reaktionen auf Oldtimer",
              slices: [
                { label: "Oma! Sieh dir den an!", value: 30, color: "#dc2626" },
                { label: "Foto f\u00FCr Insta", value: 25, color: "#f59e0b" },
                { label: "Mein Opa fuhr genau so", value: 20, color: "#365314" },
                { label: "Was Verbrenner...", value: 15, color: "#65a30d" },
                { label: "Hauptsache nicht im Weg", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Karlsruhes Fest-Saison 2026",
        subtitle: "Vom Fr\u00FChling bis zum Herbst feiert die F\u00E4cherstadt",
        data: {
          events: [
            { date: "25.\u201326. April", label: "Fest der Sinne \u2013 Genuss, Familie, Oldtimer", highlight: true },
            { date: "Mai", label: "Schlosslichtspiele beginnen am 14. August" },
            { date: "Juni", label: "Karlsruhe Pride Parade" },
            { date: "Juli", label: "DAS FEST \u2013 Klotzanlage mit 250.000+ Besuchern", highlight: true },
            { date: "August", label: "Schlosslichtspiele \u2013 G\u00E4nsehaut am Schloss" },
            { date: "Oktober", label: "Christkindlesmarkt-Aufbau beginnt" },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Karlsruher Festivals im Vergleich",
        subtitle: "Besucherzahlen 2025",
        data: {
          items: [
            { label: "DAS FEST (Juli)", value: 100, display: "268.000", color: "#dc2626" },
            { label: "Christkindlesmarkt", value: 95, display: "~250.000", color: "#65a30d" },
            { label: "Schlosslichtspiele (gesamt)", value: 90, display: "~240.000", color: "#f59e0b" },
            { label: "Fest der Sinne (Sch\u00E4tzung)", value: 30, display: "~80.000", color: "#365314" },
            { label: "Brigantenfest Durlach", value: 15, display: "~40.000", color: "#a3e635" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Wof\u00FCr Karlsruher beim Fest Geld ausgeben",
        subtitle: "Durchschnittliche Ausgaben pro Person",
        data: {
          categories: ["Essen", "Getr\u00E4nke", "Shopping", "Eis/Snacks", "Sonstiges"],
          stacks: [
            { label: "Euro", color: "#65a30d" },
          ],
          unit: "\u20ac",
          values: [
            [18],
            [15],
            [25],
            [6],
            [4],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Im Fr\u00FChling zeigt sich Karlsruhe mit dem Fest der Sinne von seiner farbenpr\u00E4chtigsten Seite und l\u00E4dt zu einer wahren Genussreise ein.",
          author: "KTG Karlsruhe Tourismus GmbH",
          color: "#65a30d",
        },
      },
      {
        type: "waffle",
        title: "100 Jahre Berufsfeuerwehr",
        subtitle: "Ein Jahrhundert Karlsruhe in Einsatz",
        data: {
          total: 100,
          filled: 100,
          filledColor: "#dc2626",
          emptyColor: "#e5e7eb",
          annotation: "Seit 1926 sch\u00FCtzt die Berufsfeuerwehr Karlsruhe die Stadt. 100 Jahre Einsatz \u2013 von Br\u00E4nden \u00FCber Hochwasser bis Verkehrsunf\u00E4lle. Beim Fest der Sinne pr\u00E4sentiert die Feuerwehr historische Fahrzeuge auf dem Schlossplatz.",
          secondaryFilled: 0,
          secondaryColor: "#f59e0b",
          filledLabel: "100 Jahre Berufsfeuerwehr (1926\u20132026)",
          secondaryLabel: "",
          emptyLabel: "",
        },
      },
    ],
    sources: [
      "karlsruhe-erleben.de, Fest der Sinne 2026",
      "Karlsruhe Marketing und Event GmbH, 04.2026",
      "meinka.de, 24.04.2026",
      "karlsruhe.de, City-Initiative Stadtmarketing",
      "Berufsfeuerwehr Karlsruhe Jubil\u00E4um",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "40 Genussst\u00E4nde, historische Feuerwehr-Oldtimer, verkaufsoffener Sonntag und 100 Jahre Berufsfeuerwehr: Karlsruhe feiert dieses Wochenende das Fest der Sinne. Was Karlsruher dabei wirklich tun \u2013 satirisch in F\u00E4chertorten.\n\n\u27a1 ka-life.de/#/kw/kw18-2026",
  },
  {
    id: "kw17-2026",
    weekNumber: 17,
    year: 2026,
    dateRange: "20.\u201326. April 2026",
    title: "Vier Tore gegen die Angst",
    subtitle: "KSC zerlegt Bielefeld 4:1 im Wildpark \u2013 der h\u00F6chste Heimsieg der Saison. Pl\u00F6tzlich redet Karlsruhe \u00FCber Aufstieg statt Abstieg.",
    kicker: "KSC & Fu\u00DFball",
    theme: {
      accent: "#003399",
      accentLight: "#4d88ff",
      accentDark: "#001a4d",
      secondary: "#ffffff",
      tertiary: "#d4a017",
      background: "#fafafa",
    },
    socialCard: {
      headline: "Vier Tore\ngegen die Angst",
      subline: "KSC 4:1 Bielefeld \u00b7 KW 17",
      keyNumber: "4:1",
      keyLabel: "H\u00F6chster Heimsieg der Saison",
      gradient: "linear-gradient(135deg, #003399 0%, #001a4d 100%)",
    },
    sections: [
      {
        type: "number-cards",
        title: "KSC nach dem 29. Spieltag",
        subtitle: "Endlich wieder Wildpark-Feiern",
        data: {
          cards: [
            { value: "4:1", unit: "Endstand", label: "Kantersieg gegen Bielefeld", color: "#003399" },
            { value: "8", unit: "Platz", label: "Nur 6 Punkte hinter Platz 3", color: "#4d88ff" },
            { value: "40", unit: "Punkte", label: "Nach 29 Spieltagen", color: "#d4a017" },
            { value: "5", unit: "Tore", label: "Wanitzek in den letzten 3 Spielen", color: "#003399" },
          ] as NumberCard[],
        },
      },
      {
        type: "torte-der-wahrheit",
        title: "F\u00E4chertorten",
        subtitle: "Was der Wildpark wirklich denkt",
        data: {
          pies: [
            {
              title: "Stimmung nach dem 4:1",
              slices: [
                { label: "Aufstieg!!!", value: 35, color: "#003399" },
                { label: "Erstmal Bier", value: 30, color: "#d4a017" },
                { label: "N\u00E4chste Woche wieder Zittern", value: 25, color: "#4d88ff" },
                { label: "War ja nur Bielefeld", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Wer hat den KSC gerettet?",
              slices: [
                { label: "Wanitzek (Legende)", value: 30, color: "#003399" },
                { label: "Zivzivadze (Maschine)", value: 25, color: "#d4a017" },
                { label: "Eichner (Taktikgenie)", value: 20, color: "#4d88ff" },
                { label: "Die Fans (laut!)", value: 15, color: "#001a4d" },
                { label: "Bielefeld (schwach)", value: 10, color: "#9ca3af" },
              ] as PieSlice[],
            },
            {
              title: "Was KSC-Fans ihren Kollegen sagen",
              slices: [
                { label: "Hab ich doch gesagt!", value: 40, color: "#003399" },
                { label: "Ich war im Stadion!", value: 25, color: "#d4a017" },
                { label: "N\u00E4chstes Jahr erste Liga", value: 20, color: "#4d88ff" },
                { label: "Kein Kommentar (noch)", value: 15, color: "#9ca3af" },
              ] as PieSlice[],
            },
          ],
        },
      },
      {
        type: "timeline",
        title: "Das Spiel in 90 Minuten",
        subtitle: "KSC 4:1 Arminia Bielefeld \u2013 10. April 2026",
        data: {
          events: [
            { date: "11'", label: "0:1 \u2013 Knoche trifft f\u00FCr Bielefeld. Wildpark verstummt." },
            { date: "18'", label: "1:1 \u2013 Ben Farhat gleicht aus! Sofortige Antwort.", highlight: true },
            { date: "62'", label: "2:1 \u2013 Kobald k\u00F6pft nach Ecke. Wildpark bebt!", highlight: true },
            { date: "77'", label: "3:1 \u2013 Wanitzek! Freisto\u00DF ins Eck. Genie.", highlight: true },
            { date: "89'", label: "4:1 \u2013 Fukuda macht den Deckel drauf.", highlight: true },
          ] as TimelineEvent[],
        },
      },
      {
        type: "comparison",
        title: "Topspieler der Saison",
        subtitle: "Torbeteiligungen 2025/26",
        data: {
          items: [
            { label: "Marvin Wanitzek", value: 100, display: "8 Tore, 6 Assists", color: "#003399" },
            { label: "Budu Zivzivadze", value: 85, display: "10 Tore, 2 Assists", color: "#d4a017" },
            { label: "Lamine Ben Farhat", value: 55, display: "4 Tore, 5 Assists", color: "#4d88ff" },
            { label: "Shuto Fukuda", value: 45, display: "5 Tore, 2 Assists", color: "#001a4d" },
          ] as BarItem[],
        },
      },
      {
        type: "stacked-bar",
        title: "Zuschauerschnitt Wildpark",
        subtitle: "Heimspiele 2025/26",
        data: {
          categories: ["Saison 21/22", "Saison 22/23", "Saison 23/24", "Saison 24/25", "Saison 25/26"],
          stacks: [
            { label: "Zuschauer", color: "#003399" },
          ],
          unit: "Zuschauer",
          values: [
            [15200],
            [22500],
            [28700],
            [31200],
            [33800],
          ],
        },
      },
      {
        type: "quote",
        title: "Zitat",
        data: {
          text: "Wenn wir so auftreten, brauchen wir uns vor niemandem zu verstecken.",
          author: "Christian Eichner, KSC-Trainer, nach dem 4:1",
          color: "#003399",
        },
      },
      {
        type: "waffle",
        title: "Punkteausbeute seit der Winterpause",
        subtitle: "R\u00FCckrunde bisher: 8 Spiele",
        data: {
          total: 24,
          filled: 16,
          filledColor: "#003399",
          emptyColor: "#e5e7eb",
          annotation: "16 von 24 m\u00F6glichen Punkten in der R\u00FCckrunde geholt \u2013 das w\u00E4re auf die ganze Saison hochgerechnet Platz 3.",
          secondaryFilled: 0,
          secondaryColor: "#d4a017",
          filledLabel: "Geholte Punkte (16 von 24)",
          secondaryLabel: "",
          emptyLabel: "Liegengelassene Punkte (8)",
        },
      },
    ],
    sources: [
      "ksc.de, Matchcenter 29. Spieltag",
      "kicker.de, 2. Bundesliga Spieltag 29",
      "Transfermarkt.de, KSC Saison 2025/26",
      "ka-news.de, KSC-Berichterstattung",
    ],
    editorNote: "Die F\u00E4chertorten sind satirisch \u00FCberspitzt. Die Fakten in den anderen Grafiken sind recherchiert und belegt.",
    socialPostText: "4:1 gegen Bielefeld \u2013 der h\u00F6chste Heimsieg der Saison! Wanitzek trifft per Freisto\u00DF, Fukuda macht den Deckel drauf. Pl\u00F6tzlich redet der Wildpark \u00FCber Aufstieg statt Abstieg.\n\n\u27a1 ka-life.de/#/kw/kw17-2026",
  },
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
