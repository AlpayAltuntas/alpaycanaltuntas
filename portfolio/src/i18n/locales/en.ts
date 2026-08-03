import type { LocaleContent } from '../types'

const en: LocaleContent = {
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Impact', href: '#impact' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Passions', href: '#passions' },
    { label: 'Community', href: '#community' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],

  person: {
    name: 'Alpay Can Altuntas',
    initials: 'ACA',
    title: 'Senior Software Engineer & Team Lead',
    roleLine: 'Senior Software Engineer · Team Lead · Product Owner',
    positioning:
      'I build scalable, secure, product-minded software — from system architecture to shipped features.',
    location: 'Based in / relocating to Memphis, TN, USA',
    availability: 'Open to remote (U.S.)',
    funFact: 'Debugging sometimes feels like being the investigator and the culprit at the same time.',
    photo: `${import.meta.env.BASE_URL}profile.jpg`,
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/AlpayAltuntas', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alpay-can-altuntas-870649236/',
      icon: 'linkedin',
    },
    { label: 'Email', href: 'mailto:' + 'Alpaycanaltuntas' + '@' + 'gmail.com', icon: 'mail' },
    { label: 'Résumé', href: `${import.meta.env.BASE_URL}resume.pdf`, icon: 'file-down' },
  ],

  ui: {
    skipToContent: 'Skip to content',
    backToTop: '— back to top',
    primaryNav: 'Primary',
    primaryNavMobile: 'Primary mobile',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    languageSelector: 'Change language',
    viewWork: 'View Work',
    downloadResume: 'Download Résumé',
    scrollToAbout: 'Scroll to About section',
    closePhoto: 'Close',
    previousPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    viewLargerPhoto: 'View larger photo',
    allRightsReserved: 'All rights reserved.',
    currentBadge: 'Current',
    initialsMonogram: '— initials monogram',
  },

  sections: {
    about: { index: '01 / About', title: 'Engineer, architect, product owner.' },
    impact: {
      index: '02 / Impact',
      title: 'Results, not just responsibilities.',
      description: "Measured outcomes from the systems I've architected and shipped.",
    },
    experience: {
      index: '03 / Experience',
      title: "Where I've built.",
      description: 'Enterprise architecture, security, and product ownership — end to end.',
    },
    skills: {
      index: '04 / Skills',
      title: 'The toolkit.',
      description: 'Languages, frameworks, and practices I reach for daily.',
      spokenLanguagesLabel: 'Spoken Languages',
    },
    passions: { index: '05 / Passions', title: "What I'm passionate about." },
    community: { index: '06 / Community' },
    education: {
      index: '07 / Education',
      title: 'Certifications & education.',
      educationLabel: 'Education',
      certificationsLabel: 'Certifications',
    },
    contact: {
      index: '08 / Contact',
      title: "Let's build something worth shipping.",
      description: 'Open to remote roles across the U.S. Reach out directly — no forms, no gatekeeping.',
    },
  },

  about: {
    paragraphs: [
      "I'm a senior software engineer working at the intersection of engineering, architecture, and product. I design and ship scalable, secure full-stack systems and lead the teams that build them.",
      'My background spans enterprise SAP-integrated platforms serving tens of thousands of users across dozens of countries, application security (threat modeling, OWASP), and end-to-end product ownership.',
      "I studied Computer Science in the U.S. (Magna Cum Laude), I'm a former collegiate student-athlete, and I speak four languages fluently. I care about performance, long-term maintainability, and building software people actually trust.",
    ],
    fastFacts: [
      { label: 'Location', value: 'Memphis, TN, USA' },
      { label: 'Languages', value: 'EN · DE · TR · FR' },
      { label: 'Focus', value: 'Architecture · Security · Product' },
    ],
  },

  metrics: [
    {
      value: 53,
      suffix: '%',
      prefix: '+',
      label: 'Customer satisfaction',
      detail: 'From a core-application modernization I led.',
    },
    {
      value: 15,
      suffix: '%',
      prefix: '+',
      label: 'New contract growth',
      detail: 'Driven by that same modernization effort.',
    },
    {
      value: 70,
      suffix: '%',
      label: 'Faster compute & lookup',
      detail: 'Reduction on big-data e-invoicing & OCR workloads.',
    },
    {
      value: 10000,
      suffix: '+',
      label: 'Users served',
      detail: 'Across the platforms I have built and shipped.',
    },
  ],

  countryCoverage: {
    from: 27,
    to: 36,
    label: 'Supported countries via SAP integrations & APIs',
  },

  experience: [
    {
      id: 'cbs',
      company: 'cbs Corporate Business Solutions',
      location: 'Hamburg, Germany',
      period: 'May 2024 – Present',
      blurb: 'Enterprise consulting firm specializing in SAP-integrated business software.',
      current: true,
      roles: [
        {
          title: 'Senior Software Engineer & Team Lead',
          period: 'Apr 2026 – Present',
          bullets: [
            'Led modernization of core applications, driving +55% CSAT and +20% new contracts.',
            'Own end-to-end delivery and system architecture for scalable full-stack apps, microservices, and data platforms with SAP integrations.',
            'Secure system architecture via threat modeling, kill-chain analysis, and OWASP SAMM / STRIDE.',
            'Centralized common processes for cleaner, more maintainable design.',
            'Serve as Product Owner — backlog, roadmap, and delivery — and lead a cross-functional Agile/Scrum team.',
          ],
        },
        {
          title: 'Software Engineer',
          period: 'May 2024 – Apr 2026',
          bullets: [
            'Optimized big-data queries behind e-invoicing & OCR pipelines, cutting processing time by 70%.',
            'Expanded country solution coverage from 30 to 40 with the SAP team and new API integrations.',
            'Built full-stack and mobile apps (React, React Native, Dart), dashboards, and microservices serving 50,000+ users.',
            'Automated data processing and backend workflows in Perl; delivered on PostgreSQL, Docker, and Nginx.',
          ],
        },
      ],
    },
    {
      id: 'union-university',
      company: 'Union University',
      location: 'Jackson, TN, USA',
      period: 'Aug 2021 – Apr 2024',
      blurb: 'Software Engineer (Student Employee)',
      roles: [
        {
          title: 'Software Engineer (Student Employee)',
          period: 'Aug 2021 – Apr 2024',
          bullets: [
            'Built dynamic websites and applications using Java, JavaScript, HTML/CSS, ColdFusion, and SQL.',
            'Used SQL analytics to lift user engagement by 20%.',
            'Implemented server- and page-level security policies, reducing vulnerabilities by 19%.',
            'Optimized performance, cutting page load times by 15%.',
          ],
        },
      ],
    },
    {
      id: 'am-holding',
      company: 'A+M Holding',
      location: 'Hamburg, Germany',
      period: 'May 2018 – Jul 2020',
      blurb: 'Software Engineer (Part Time)',
      roles: [
        {
          title: 'Software Engineer (Part Time)',
          period: 'May 2018 – Jul 2020',
          bullets: [
            'Built LAMP-stack web apps and internal accounting software in Java.',
            'Drove an SEO strategy that grew site traffic by 35% and engagement by 25%.',
            'Cut load times by 25% through targeted performance work.',
          ],
        },
      ],
    },
  ],

  skillGroups: [
    {
      title: 'Languages',
      items: ['Python', 'Java', 'JavaScript / TypeScript', 'Dart', 'Perl', 'SQL'],
    },
    {
      title: 'Frameworks & Tools',
      items: ['Django', 'React', 'React Native', 'Node.js', 'Docker', 'Nginx', 'Git'],
    },
    {
      title: 'Architecture & Practices',
      items: ['Microservices', 'System Design', 'TDD', 'Agile/Scrum', 'Secure System Design'],
    },
    {
      title: 'Data & APIs',
      items: ['PostgreSQL', 'MSSQL', 'MySQL', 'REST APIs', 'SOAP APIs', 'JSON'],
    },
    {
      title: 'Cloud & Security',
      items: ['AWS', 'Linux', 'Networking', 'Cybersecurity', 'OWASP', 'Threat Modeling'],
    },
    {
      title: 'Product & Leadership',
      items: ['Product Ownership', 'Backlog Management', 'Stakeholder Management', 'Mentoring'],
    },
  ],

  spokenLanguages: [
    { name: 'English', level: 'C2' },
    { name: 'German', level: 'C2' },
    { name: 'Turkish', level: 'C1' },
    { name: 'French', level: 'A1' },
    { name: 'Spanish', level: 'A1' },
  ],

  passions: [
    {
      title: 'Decentralized systems',
      description: 'The future of an open internet — open protocols, and Nostr in particular.',
    },
    {
      title: 'AI/ML in production',
      description: 'Integrating AI/ML capabilities into full-stack products, end to end.',
    },
    {
      title: 'Secure-by-design engineering',
      description: 'Performance and long-term maintainability, treated as first-class requirements.',
    },
    {
      title: 'Open source',
      description: 'Growing my open-source contributions and giving back to the tools I rely on.',
    },
  ],

  community: {
    kicker: '25 Years of OWASP · Vienna, June 2026',
    title: 'OWASP Global AppSec — Vienna',
    paragraphs: [
      "I attended OWASP Global AppSec Vienna for the Foundation's 25th anniversary, opening with Adam Shostack's two-day Threat Modeling Intensive. Even with prior threat-modeling experience, two full days inside the mindset and techniques behind it gave me a genuinely new perspective — and practical ideas I've since brought straight into my day-to-day work.",
      'The conference itself was just as sharp: the launch of the AI Security Verification Standard (AISVS), deeper dives into OWASP SAMM, and a wide range of talks made one thing clear — the way we think about security has to evolve as fast as the industry does. What stood out most, though, was the community itself: open, generous, and genuinely thoughtful in every conversation.',
    ],
    highlights: [
      'Threat Modeling Intensive with Adam Shostack',
      'AISVS launch',
      'OWASP SAMM deep dives',
      'Community & hallway conversations',
    ],
    photos: [
      {
        src: `${import.meta.env.BASE_URL}owasp_alpay_adam.jpg`,
        alt: 'Alpay Can Altuntas with Adam Shostack after the Threat Modeling Intensive workshop',
        caption: 'With Adam Shostack, after the Threat Modeling Intensive',
        wide: true,
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_intro_keynote.jpg`,
        alt: 'OWASP Global AppSec Vienna opening keynote, "Build Something Worth Building"',
        caption: 'Opening keynote — 25 years of open source security',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_aisvs_launch.jpg`,
        alt: 'Panel launching the OWASP AI Security Verification Standard (AISVS)',
        caption: 'Launch of the AI Security Verification Standard',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_conference_talk.jpg`,
        alt: 'Audience at an OWASP Global AppSec Vienna conference talk',
        caption: 'One of many packed conference sessions',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_intro.jpg`,
        alt: 'Alpay Can Altuntas at OWASP Global AppSec Vienna, 25th anniversary',
        caption: 'OWASP Global AppSec Vienna, 25 years of open source security',
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
    degree: 'B.S. Computer Science',
    school: 'Union University',
    date: 'May 2024',
    honors: ['Magna Cum Laude', "President's List (2021–2024)", 'Student-Athlete Honors (2020–2024)'],
  },

  affiliation: 'OWASP AppSec Member',
}

export default en
