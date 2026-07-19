import type { LocaleContent } from '../types'

const fr: LocaleContent = {
  nav: [
    { label: 'À propos', href: '#about' },
    { label: 'Impact', href: '#impact' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Passions', href: '#passions' },
    { label: 'Communauté', href: '#community' },
    { label: 'Formation', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],

  person: {
    name: 'Alpay Can Altuntas',
    initials: 'ACA',
    title: 'Senior Software Engineer & Team Lead',
    roleLine: 'Senior Software Engineer · Team Lead · Product Owner',
    positioning:
      "Je conçois des logiciels évolutifs, sécurisés et orientés produit — de l'architecture système jusqu'aux fonctionnalités livrées.",
    location: 'Basé à / en cours de déménagement à Memphis, TN, USA',
    availability: 'Ouvert au télétravail (États-Unis)',
    funFact: "Déboguer donne parfois l'impression d'être à la fois l'enquêteur et le coupable.",
    photo: `${import.meta.env.BASE_URL}profile.jpg`,
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/AlpayAltuntas', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alpay-can-altuntas-870649236/',
      icon: 'linkedin',
    },
    { label: 'E-mail', href: 'mailto:' + 'Alpaycanaltuntas' + '@' + 'gmail.com', icon: 'mail' },
    { label: 'CV', href: `${import.meta.env.BASE_URL}resume.pdf`, icon: 'file-down' },
  ],

  ui: {
    skipToContent: 'Aller au contenu',
    backToTop: '— retour en haut',
    primaryNav: 'Navigation principale',
    primaryNavMobile: 'Navigation principale mobile',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    switchToLight: 'Passer au thème clair',
    switchToDark: 'Passer au thème sombre',
    languageSelector: 'Changer de langue',
    viewWork: 'Voir mes projets',
    downloadResume: 'Télécharger le CV',
    scrollToAbout: 'Défiler vers la section À propos',
    closePhoto: 'Fermer',
    previousPhoto: 'Photo précédente',
    nextPhoto: 'Photo suivante',
    viewLargerPhoto: 'Agrandir la photo',
    allRightsReserved: 'Tous droits réservés.',
    currentBadge: 'Actuel',
    initialsMonogram: '— monogramme des initiales',
  },

  sections: {
    about: { index: '01 / À propos', title: 'Ingénieur, architecte, product owner.' },
    impact: {
      index: '02 / Impact',
      title: 'Des résultats, pas seulement des responsabilités.',
      description: "Résultats mesurés des systèmes que j'ai conçus et livrés.",
    },
    experience: {
      index: '03 / Expérience',
      title: "Là où j'ai construit.",
      description: "Architecture d'entreprise, sécurité et product ownership — de bout en bout.",
    },
    skills: {
      index: '04 / Compétences',
      title: "La boîte à outils.",
      description: "Langages, frameworks et pratiques que j'utilise au quotidien.",
      spokenLanguagesLabel: 'Langues parlées',
    },
    passions: { index: '05 / Passions', title: 'Ce qui me passionne.' },
    community: { index: '06 / Communauté' },
    education: {
      index: '07 / Formation',
      title: 'Certifications & formation.',
      educationLabel: 'Formation',
      certificationsLabel: 'Certifications',
    },
    contact: {
      index: '08 / Contact',
      title: 'Construisons quelque chose qui en vaut la peine.',
      description:
        'Ouvert aux postes en télétravail à travers les États-Unis. Contactez-moi directement — sans formulaire, sans intermédiaire.',
    },
  },

  about: {
    paragraphs: [
      "Je suis ingénieur logiciel senior, à la croisée de l'ingénierie, de l'architecture et du produit. Je conçois et livre des systèmes full-stack évolutifs et sécurisés, et je dirige les équipes qui les construisent.",
      "Mon parcours couvre des plateformes d'entreprise intégrées à SAP au service de dizaines de milliers d'utilisateurs dans des dizaines de pays, la sécurité applicative (threat modeling, OWASP), et la gestion de produit de bout en bout.",
      "J'ai étudié l'informatique aux États-Unis (Magna Cum Laude), j'ai été athlète universitaire, et je parle couramment quatre langues. J'attache une grande importance à la performance, à la maintenabilité à long terme et à la fiabilité des logiciels que je construis.",
    ],
    fastFacts: [
      { label: 'Localisation', value: 'Memphis, TN, USA' },
      { label: 'Langues', value: 'EN · DE · TR · FR' },
      { label: 'Domaines', value: 'Architecture · Sécurité · Produit' },
    ],
  },

  metrics: [
    {
      value: 53,
      suffix: '%',
      prefix: '+',
      label: 'Satisfaction client',
      detail: "Issue d'une modernisation d'applications cœur de métier que j'ai dirigée.",
    },
    {
      value: 15,
      suffix: '%',
      prefix: '+',
      label: 'Croissance de nouveaux contrats',
      detail: 'Portée par cette même initiative de modernisation.',
    },
    {
      value: 70,
      suffix: '%',
      label: 'Calculs et recherches plus rapides',
      detail: 'Réduction sur des charges big data de facturation électronique & OCR.',
    },
    {
      value: 10000,
      suffix: '+',
      label: 'Utilisateurs servis',
      detail: "À travers l'ensemble des plateformes que j'ai construites et livrées.",
    },
  ],

  countryCoverage: {
    from: 27,
    to: 36,
    label: 'Pays pris en charge via des intégrations et API SAP',
  },

  experience: [
    {
      id: 'cbs',
      company: 'cbs Corporate Business Solutions',
      location: 'Hambourg, Allemagne',
      period: 'Mai 2024 – Aujourd\'hui',
      blurb: "Cabinet de conseil d'entreprise spécialisé dans les logiciels intégrés à SAP.",
      current: true,
      roles: [
        {
          title: 'Senior Software Engineer & Team Lead',
          period: 'Avr. 2026 – Aujourd\'hui',
          bullets: [
            'Direction de la modernisation des applications cœur de métier : +55 % de satisfaction client et +20 % de nouveaux contrats.',
            "Responsable de bout en bout de la livraison et de l'architecture système d'applications full-stack évolutives, de microservices et de plateformes de données intégrées à SAP.",
            'Sécurisation de l\'architecture système via threat modeling, analyse de kill-chain et OWASP SAMM / STRIDE.',
            'Centralisation des processus communs pour une conception plus claire et plus maintenable.',
            'Product Owner — backlog, roadmap et livraison — et direction d\'une équipe Agile/Scrum transverse.',
          ],
        },
        {
          title: 'Software Engineer',
          period: 'Mai 2024 – Avr. 2026',
          bullets: [
            "Optimisation de requêtes big data derrière des pipelines de facturation électronique & OCR, réduisant le temps de traitement de 70 %.",
            "Extension de la couverture pays de 30 à 40 avec l'équipe SAP et de nouvelles intégrations API.",
            'Développement d\'applications full-stack et mobiles (React, React Native, Dart), de tableaux de bord et de microservices au service de plus de 50 000 utilisateurs.',
            "Automatisation du traitement des données et des workflows backend en Perl ; déploiement sur PostgreSQL, Docker et Nginx.",
          ],
        },
      ],
    },
    {
      id: 'union-university',
      company: 'Union University',
      location: 'Jackson, TN, USA',
      period: 'Août 2021 – Avr. 2024',
      blurb: 'Software Engineer (étudiant salarié)',
      roles: [
        {
          title: 'Software Engineer (étudiant salarié)',
          period: 'Août 2021 – Avr. 2024',
          bullets: [
            'Développement de sites web et applications dynamiques avec Java, JavaScript, HTML/CSS, ColdFusion et SQL.',
            "Utilisation d'analyses SQL pour augmenter l'engagement utilisateur de 20 %.",
            'Mise en place de politiques de sécurité au niveau serveur et page, réduisant les vulnérabilités de 19 %.',
            'Optimisation des performances, réduisant les temps de chargement de 15 %.',
          ],
        },
      ],
    },
    {
      id: 'am-holding',
      company: 'A+M Holding',
      location: 'Hambourg, Allemagne',
      period: 'Mai 2018 – Juil. 2020',
      blurb: 'Software Engineer (temps partiel)',
      roles: [
        {
          title: 'Software Engineer (temps partiel)',
          period: 'Mai 2018 – Juil. 2020',
          bullets: [
            'Développement d\'applications web en stack LAMP et de logiciels comptables internes en Java.',
            'Stratégie SEO ayant généré +35 % de trafic et +25 % d\'engagement.',
            'Réduction des temps de chargement de 25 % grâce à un travail ciblé sur la performance.',
          ],
        },
      ],
    },
  ],

  skillGroups: [
    {
      title: 'Langages',
      items: ['Python', 'Java', 'JavaScript / TypeScript', 'Dart', 'Perl', 'SQL'],
    },
    {
      title: 'Frameworks & outils',
      items: ['Django', 'React', 'React Native', 'Node.js', 'Docker', 'Nginx', 'Git'],
    },
    {
      title: 'Architecture & pratiques',
      items: ['Microservices', 'System Design', 'TDD', 'Agile/Scrum', 'Secure System Design'],
    },
    {
      title: 'Données & API',
      items: ['PostgreSQL', 'MSSQL', 'MySQL', 'REST APIs', 'SOAP APIs', 'JSON'],
    },
    {
      title: 'Cloud & sécurité',
      items: ['AWS', 'Linux', 'Réseaux', 'Cybersécurité', 'OWASP', 'Threat Modeling'],
    },
    {
      title: 'Produit & leadership',
      items: ['Product Ownership', 'Gestion de backlog', 'Gestion des parties prenantes', 'Mentorat'],
    },
  ],

  spokenLanguages: [
    { name: 'Anglais', level: 'C2' },
    { name: 'Allemand', level: 'C2' },
    { name: 'Turc', level: 'C1' },
    { name: 'Français', level: 'A1' },
    { name: 'Espagnol', level: 'A1' },
  ],

  passions: [
    {
      title: 'Systèmes décentralisés',
      description: "L'avenir d'un internet ouvert — les protocoles ouverts, et Nostr en particulier.",
    },
    {
      title: "L'IA/ML en production",
      description: "Intégration de capacités d'IA/ML dans des produits full-stack, de bout en bout.",
    },
    {
      title: 'Ingénierie secure-by-design',
      description: 'La performance et la maintenabilité à long terme, traitées comme des exigences de premier ordre.',
    },
    {
      title: 'Open source',
      description: "Développer mes contributions open source, pour redonner aux outils sur lesquels je m'appuie.",
    },
  ],

  community: {
    kicker: '25 ans d\'OWASP · Vienne, juin 2026',
    title: 'OWASP Global AppSec — Vienne',
    paragraphs: [
      "J'ai participé à l'OWASP Global AppSec Vienne pour le 25ᵉ anniversaire de la Fondation, en commençant par le Threat Modeling Intensive de deux jours animé par Adam Shostack. Même avec une expérience préalable du threat modeling, ces deux jours immergés dans cet état d'esprit et ces techniques m'ont offert une perspective vraiment nouvelle — et des idées concrètes que j'ai depuis intégrées directement à mon travail quotidien.",
      "La conférence elle-même était tout aussi pointue : le lancement de l'AI Security Verification Standard (AISVS), des approfondissements sur OWASP SAMM, et un large éventail de conférences ont montré une chose clairement — notre façon de penser la sécurité doit évoluer aussi vite que le secteur lui-même. Ce qui m'a le plus marqué, cependant, c'est la communauté elle-même : ouverte, généreuse et sincèrement attentive dans chaque échange.",
    ],
    highlights: [
      'Threat Modeling Intensive avec Adam Shostack',
      'Lancement de l\'AISVS',
      'Approfondissement OWASP SAMM',
      'Communauté & échanges informels',
    ],
    photos: [
      {
        src: `${import.meta.env.BASE_URL}owasp_alpay_adam.jpg`,
        alt: 'Alpay Can Altuntas avec Adam Shostack après le Threat Modeling Intensive',
        caption: 'Avec Adam Shostack, après le Threat Modeling Intensive',
        wide: true,
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_intro_keynote.jpg`,
        alt: 'Keynote d\'ouverture de l\'OWASP Global AppSec Vienne, « Build Something Worth Building »',
        caption: "Keynote d'ouverture — 25 ans de sécurité open source",
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_aisvs_launch.jpg`,
        alt: "Panel de lancement de l'OWASP AI Security Verification Standard (AISVS)",
        caption: "Lancement de l'AI Security Verification Standard",
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_conference_talk.jpg`,
        alt: "Public lors d'une conférence à l'OWASP Global AppSec Vienne",
        caption: 'Une des nombreuses sessions combles de la conférence',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_intro.jpg`,
        alt: 'Alpay Can Altuntas à l\'OWASP Global AppSec Vienne, 25ᵉ anniversaire',
        caption: "OWASP Global AppSec Vienne, 25 ans de sécurité open source",
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
    degree: 'Licence en informatique (B.S.)',
    school: 'Union University',
    date: 'Mai 2024',
    honors: ['Magna Cum Laude', 'President\'s List (2021–2024)', 'Distinction Student-Athlete (2020–2024)'],
  },

  affiliation: 'Membre OWASP AppSec',
}

export default fr
