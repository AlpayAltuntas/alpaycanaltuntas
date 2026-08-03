import type { LocaleContent } from '../types'

const de: LocaleContent = {
  nav: [
    { label: 'Über mich', href: '#about' },
    { label: 'Wirkung', href: '#impact' },
    { label: 'Erfahrung', href: '#experience' },
    { label: 'Fähigkeiten', href: '#skills' },
    { label: 'Leidenschaften', href: '#passions' },
    { label: 'Community', href: '#community' },
    { label: 'Ausbildung', href: '#education' },
    { label: 'Kontakt', href: '#contact' },
  ],

  person: {
    name: 'Alpay Can Altuntas',
    initials: 'ACA',
    title: 'Senior Software Engineer & Team Lead',
    roleLine: 'Senior Software Engineer · Team Lead · Product Owner',
    positioning:
      'Ich entwickle skalierbare, sichere und produktorientierte Software — von der Systemarchitektur bis zum fertigen Feature.',
    location: 'Wohnhaft in / Umzug nach Memphis, TN, USA',
    availability: 'Offen für Remote-Arbeit (USA)',
    funFact: 'Debugging fühlt sich manchmal an, als wäre man gleichzeitig Ermittler und Täter.',
    photo: `${import.meta.env.BASE_URL}profile.jpg`,
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/AlpayAltuntas', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alpay-can-altuntas-870649236/',
      icon: 'linkedin',
    },
    { label: 'E-Mail', href: 'mailto:' + 'Alpaycanaltuntas' + '@' + 'gmail.com', icon: 'mail' },
    { label: 'Lebenslauf', href: `${import.meta.env.BASE_URL}resume.pdf`, icon: 'file-down' },
  ],

  ui: {
    skipToContent: 'Zum Inhalt springen',
    backToTop: '— nach oben',
    primaryNav: 'Hauptnavigation',
    primaryNavMobile: 'Hauptnavigation mobil',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    switchToLight: 'Zum hellen Design wechseln',
    switchToDark: 'Zum dunklen Design wechseln',
    languageSelector: 'Sprache ändern',
    viewWork: 'Projekte ansehen',
    downloadResume: 'Lebenslauf herunterladen',
    scrollToAbout: 'Zum Abschnitt „Über mich" scrollen',
    closePhoto: 'Schließen',
    previousPhoto: 'Vorheriges Foto',
    nextPhoto: 'Nächstes Foto',
    viewLargerPhoto: 'Foto vergrößern',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    currentBadge: 'Aktuell',
    initialsMonogram: '— Initialen-Monogramm',
  },

  sections: {
    about: { index: '01 / Über mich', title: 'Ingenieur, Architekt, Product Owner.' },
    impact: {
      index: '02 / Wirkung',
      title: 'Ergebnisse, nicht nur Zuständigkeiten.',
      description: 'Messbare Resultate aus den Systemen, die ich entworfen und ausgeliefert habe.',
    },
    experience: {
      index: '03 / Erfahrung',
      title: 'Wo ich gestaltet habe.',
      description: 'Unternehmensarchitektur, Sicherheit und Produktverantwortung — durchgängig.',
    },
    skills: {
      index: '04 / Fähigkeiten',
      title: 'Das Werkzeug.',
      description: 'Sprachen, Frameworks und Methoden, die ich täglich einsetze.',
      spokenLanguagesLabel: 'Sprachkenntnisse',
    },
    passions: { index: '05 / Leidenschaften', title: 'Wofür ich brenne.' },
    community: { index: '06 / Community' },
    education: {
      index: '07 / Ausbildung',
      title: 'Zertifizierungen & Ausbildung.',
      educationLabel: 'Ausbildung',
      certificationsLabel: 'Zertifizierungen',
    },
    contact: {
      index: '08 / Kontakt',
      title: 'Lassen Sie uns etwas Sinnvolles bauen.',
      description:
        'Offen für Remote-Positionen in den USA. Melden Sie sich direkt — keine Formulare, kein Gatekeeping.',
    },
  },

  about: {
    paragraphs: [
      'Ich bin Senior Software Engineer an der Schnittstelle von Engineering, Architektur und Produkt. Ich entwerfe und liefere skalierbare, sichere Full-Stack-Systeme und leite die Teams, die sie bauen.',
      'Mein Hintergrund reicht von SAP-integrierten Unternehmensplattformen mit zehntausenden Nutzern in Dutzenden Ländern über Anwendungssicherheit (Threat Modeling, OWASP) bis hin zur durchgängigen Produktverantwortung.',
      'Ich habe Informatik in den USA studiert (Magna Cum Laude), war Leistungssportler im Hochschulsport und spreche fließend vier Sprachen. Mir sind Performance, langfristige Wartbarkeit und vertrauenswürdige Software wichtig.',
    ],
    fastFacts: [
      { label: 'Standort', value: 'Memphis, TN, USA' },
      { label: 'Sprachen', value: 'EN · DE · TR · FR' },
      { label: 'Schwerpunkt', value: 'Architektur · Sicherheit · Produkt' },
    ],
  },

  metrics: [
    {
      value: 53,
      suffix: '%',
      prefix: '+',
      label: 'Kundenzufriedenheit',
      detail: 'Aus einer von mir geleiteten Modernisierung der Kernanwendungen.',
    },
    {
      value: 15,
      suffix: '%',
      prefix: '+',
      label: 'Neue Vertragsabschlüsse',
      detail: 'Getrieben durch dieselbe Modernisierungsinitiative.',
    },
    {
      value: 70,
      suffix: '%',
      label: 'Schnellere Berechnung & Abfrage',
      detail: 'Reduktion bei Big-Data-Workloads für E-Invoicing & OCR.',
    },
    {
      value: 10000,
      suffix: '+',
      label: 'Aktive Nutzer',
      detail: 'Über alle von mir gebauten und ausgelieferten Plattformen hinweg.',
    },
  ],

  countryCoverage: {
    from: 27,
    to: 36,
    label: 'Unterstützte Länder über SAP-Integrationen & APIs',
  },

  experience: [
    {
      id: 'cbs',
      company: 'cbs Corporate Business Solutions',
      location: 'Hamburg, Deutschland',
      period: 'Mai 2024 – heute',
      blurb: 'Beratungsunternehmen mit Spezialisierung auf SAP-integrierte Unternehmenssoftware.',
      current: true,
      roles: [
        {
          title: 'Senior Software Engineer & Team Lead',
          period: 'Apr. 2026 – heute',
          bullets: [
            'Leitete die Modernisierung der Kernanwendungen: +55 % CSAT und +20 % neue Verträge.',
            'Verantwortung für die durchgängige Umsetzung und Systemarchitektur skalierbarer Full-Stack-Anwendungen, Microservices und Datenplattformen mit SAP-Integrationen.',
            'Sicherung der Systemarchitektur durch Threat Modeling, Kill-Chain-Analyse und OWASP SAMM / STRIDE.',
            'Zentralisierung gemeinsamer Prozesse für ein saubereres, wartbareres Design.',
            'Product Owner — Backlog, Roadmap und Delivery — und Leitung eines funktionsübergreifenden Agile/Scrum-Teams.',
          ],
        },
        {
          title: 'Software Engineer',
          period: 'Mai 2024 – Apr. 2026',
          bullets: [
            'Optimierung von Big-Data-Abfragen hinter E-Invoicing- & OCR-Pipelines, Reduktion der Verarbeitungszeit um 70 %.',
            'Erweiterung der Länderabdeckung von 30 auf 40 gemeinsam mit dem SAP-Team und neuen API-Integrationen.',
            'Entwicklung von Full-Stack- und mobilen Apps (React, React Native, Dart), Dashboards und Microservices für über 50.000 Nutzer.',
            'Automatisierung von Datenverarbeitung und Backend-Workflows in Perl; Betrieb auf PostgreSQL, Docker und Nginx.',
          ],
        },
      ],
    },
    {
      id: 'union-university',
      company: 'Union University',
      location: 'Jackson, TN, USA',
      period: 'Aug. 2021 – Apr. 2024',
      blurb: 'Software Engineer (Werkstudent)',
      roles: [
        {
          title: 'Software Engineer (Werkstudent)',
          period: 'Aug. 2021 – Apr. 2024',
          bullets: [
            'Entwicklung dynamischer Websites und Anwendungen mit Java, JavaScript, HTML/CSS, ColdFusion und SQL.',
            'Steigerung der Nutzerbindung um 20 % durch SQL-Analysen.',
            'Umsetzung von Sicherheitsrichtlinien auf Server- und Seitenebene, Reduktion der Schwachstellen um 19 %.',
            'Performance-Optimierung, Reduktion der Ladezeiten um 15 %.',
          ],
        },
      ],
    },
    {
      id: 'am-holding',
      company: 'A+M Holding',
      location: 'Hamburg, Deutschland',
      period: 'Mai 2018 – Jul. 2020',
      blurb: 'Software Engineer (Teilzeit)',
      roles: [
        {
          title: 'Software Engineer (Teilzeit)',
          period: 'Mai 2018 – Jul. 2020',
          bullets: [
            'Entwicklung von LAMP-Stack-Webanwendungen und interner Buchhaltungssoftware in Java.',
            'SEO-Strategie mit +35 % Website-Traffic und +25 % Interaktionsrate.',
            'Reduktion der Ladezeiten um 25 % durch gezielte Performance-Arbeit.',
          ],
        },
      ],
    },
  ],

  skillGroups: [
    {
      title: 'Sprachen',
      items: ['Python', 'Java', 'JavaScript / TypeScript', 'Dart', 'Perl', 'SQL'],
    },
    {
      title: 'Frameworks & Tools',
      items: ['Django', 'React', 'React Native', 'Node.js', 'Docker', 'Nginx', 'Git'],
    },
    {
      title: 'Architektur & Praktiken',
      items: ['Microservices', 'System Design', 'TDD', 'Agile/Scrum', 'Secure System Design'],
    },
    {
      title: 'Daten & APIs',
      items: ['PostgreSQL', 'MSSQL', 'MySQL', 'REST APIs', 'SOAP APIs', 'JSON'],
    },
    {
      title: 'Cloud & Sicherheit',
      items: ['AWS', 'Linux', 'Netzwerke', 'Cybersecurity', 'OWASP', 'Threat Modeling'],
    },
    {
      title: 'Produkt & Führung',
      items: ['Product Ownership', 'Backlog-Management', 'Stakeholder-Management', 'Mentoring'],
    },
  ],

  spokenLanguages: [
    { name: 'Englisch', level: 'C2' },
    { name: 'Deutsch', level: 'C2' },
    { name: 'Türkisch', level: 'C1' },
    { name: 'Französisch', level: 'A1' },
    { name: 'Spanisch', level: 'A1' },
  ],

  passions: [
    {
      title: 'Dezentrale Systeme',
      description: 'Die Zukunft eines offenen Internets — offene Protokolle, insbesondere Nostr.',
    },
    {
      title: 'KI/ML im Produktivbetrieb',
      description: 'Integration von KI-/ML-Funktionen in Full-Stack-Produkte, von Anfang bis Ende.',
    },
    {
      title: 'Secure-by-Design-Engineering',
      description: 'Performance und langfristige Wartbarkeit als zentrale Anforderungen behandelt.',
    },
    {
      title: 'Open Source',
      description: 'Ausbau meiner Open-Source-Beiträge, um den Tools, auf die ich mich verlasse, etwas zurückzugeben.',
    },
  ],

  community: {
    kicker: '25 Jahre OWASP · Wien, Juni 2026',
    title: 'OWASP Global AppSec — Wien',
    paragraphs: [
      'Ich habe an der OWASP Global AppSec Wien anlässlich des 25-jährigen Bestehens der Foundation teilgenommen, beginnend mit Adam Shostacks zweitägigem Threat Modeling Intensive. Trotz vorheriger Erfahrung mit Threat Modeling gaben mir zwei volle Tage im Mindset und den Techniken dahinter eine wirklich neue Perspektive — und praktische Ideen, die ich seitdem direkt in meinen Arbeitsalltag mitgenommen habe.',
      'Die Konferenz selbst war ebenso hochkarätig: die Vorstellung des AI Security Verification Standard (AISVS), vertiefte Einblicke in OWASP SAMM und eine Vielzahl an Vorträgen machten eines deutlich — die Art, wie wir über Sicherheit denken, muss sich genauso schnell weiterentwickeln wie die Branche selbst. Am meisten beeindruckt hat mich jedoch die Community selbst: offen, großzügig und in jedem Gespräch aufrichtig interessiert.',
    ],
    highlights: [
      'Threat Modeling Intensive mit Adam Shostack',
      'AISVS-Launch',
      'Vertiefung zu OWASP SAMM',
      'Community & Gespräche zwischen den Sessions',
    ],
    photos: [
      {
        src: `${import.meta.env.BASE_URL}owasp_alpay_adam.jpg`,
        alt: 'Alpay Can Altuntas mit Adam Shostack nach dem Threat Modeling Intensive',
        caption: 'Mit Adam Shostack, nach dem Threat Modeling Intensive',
        wide: true,
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_intro_keynote.jpg`,
        alt: 'Eröffnungs-Keynote der OWASP Global AppSec Wien, „Build Something Worth Building"',
        caption: 'Eröffnungs-Keynote — 25 Jahre Open-Source-Sicherheit',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_aisvs_launch.jpg`,
        alt: 'Podium zur Vorstellung des OWASP AI Security Verification Standard (AISVS)',
        caption: 'Vorstellung des AI Security Verification Standard',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_conference_talk.jpg`,
        alt: 'Publikum bei einem Vortrag der OWASP Global AppSec Wien',
        caption: 'Eine von vielen gut besuchten Konferenz-Sessions',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_intro.jpg`,
        alt: 'Alpay Can Altuntas bei der OWASP Global AppSec Wien, 25-jähriges Jubiläum',
        caption: 'OWASP Global AppSec Wien, 25 Jahre Open-Source-Sicherheit',
      },
    ],
  },

  certifications: [
    { name: 'AWS Solutions Architect', year: '2023' },
    { name: 'Cisco CCST Cybersecurity', year: '2023' },
    { name: 'Meta Backend Engineer', year: '2023' },
    { name: 'Meta Front-End Developer', year: '2023' },
    { name: 'Google Data Analytics', year: '2023' },
    { name: 'Google Project Management', year: '2023' },
  ],

  education: {
    degree: 'B.S. Informatik',
    school: 'Union University',
    date: 'Mai 2024',
    honors: ['Magna Cum Laude', 'President\'s List (2021–2024)', 'Auszeichnung als Student-Athlete (2020–2024)'],
  },

  affiliation: 'OWASP AppSec Mitglied',
}

export default de
