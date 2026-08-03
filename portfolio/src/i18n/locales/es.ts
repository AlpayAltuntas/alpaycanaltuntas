import type { LocaleContent } from '../types'

const es: LocaleContent = {
  nav: [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Impacto', href: '#impact' },
    { label: 'Experiencia', href: '#experience' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Pasiones', href: '#passions' },
    { label: 'Comunidad', href: '#community' },
    { label: 'Formación', href: '#education' },
    { label: 'Contacto', href: '#contact' },
  ],

  person: {
    name: 'Alpay Can Altuntas',
    initials: 'ACA',
    title: 'Senior Software Engineer & Team Lead',
    roleLine: 'Senior Software Engineer · Team Lead · Product Owner',
    positioning:
      'Diseño software escalable, seguro y orientado al producto — desde la arquitectura del sistema hasta las funcionalidades entregadas.',
    location: 'Radicado en / mudándome a Memphis, TN, EE. UU.',
    availability: 'Abierto a trabajo remoto (EE. UU.)',
    funFact: 'Depurar código a veces se siente como ser el investigador y el culpable al mismo tiempo.',
    photo: `${import.meta.env.BASE_URL}profile.jpg`,
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/AlpayAltuntas', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alpay-can-altuntas-870649236/',
      icon: 'linkedin',
    },
    { label: 'Correo', href: 'mailto:' + 'Alpaycanaltuntas' + '@' + 'gmail.com', icon: 'mail' },
    { label: 'CV', href: `${import.meta.env.BASE_URL}resume.pdf`, icon: 'file-down' },
  ],

  ui: {
    skipToContent: 'Saltar al contenido',
    backToTop: '— volver arriba',
    primaryNav: 'Navegación principal',
    primaryNavMobile: 'Navegación principal móvil',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    switchToLight: 'Cambiar a tema claro',
    switchToDark: 'Cambiar a tema oscuro',
    languageSelector: 'Cambiar idioma',
    viewWork: 'Ver proyectos',
    downloadResume: 'Descargar CV',
    scrollToAbout: 'Desplazarse a la sección Sobre mí',
    closePhoto: 'Cerrar',
    previousPhoto: 'Foto anterior',
    nextPhoto: 'Foto siguiente',
    viewLargerPhoto: 'Ver foto más grande',
    allRightsReserved: 'Todos los derechos reservados.',
    currentBadge: 'Actual',
    initialsMonogram: '— monograma de iniciales',
  },

  sections: {
    about: { index: '01 / Sobre mí', title: 'Ingeniero, arquitecto, product owner.' },
    impact: {
      index: '02 / Impacto',
      title: 'Resultados, no solo responsabilidades.',
      description: 'Resultados medibles de los sistemas que he diseñado y entregado.',
    },
    experience: {
      index: '03 / Experiencia',
      title: 'Dónde he construido.',
      description: 'Arquitectura empresarial, seguridad y gestión de producto — de principio a fin.',
    },
    skills: {
      index: '04 / Habilidades',
      title: 'Las herramientas.',
      description: 'Lenguajes, frameworks y prácticas que uso a diario.',
      spokenLanguagesLabel: 'Idiomas',
    },
    passions: { index: '05 / Pasiones', title: 'Lo que me apasiona.' },
    community: { index: '06 / Comunidad' },
    education: {
      index: '07 / Formación',
      title: 'Certificaciones y formación.',
      educationLabel: 'Formación',
      certificationsLabel: 'Certificaciones',
    },
    contact: {
      index: '08 / Contacto',
      title: 'Construyamos algo que valga la pena.',
      description:
        'Abierto a puestos remotos en todo EE. UU. Contáctame directamente — sin formularios ni intermediarios.',
    },
  },

  about: {
    paragraphs: [
      'Soy ingeniero de software senior, en la intersección de la ingeniería, la arquitectura y el producto. Diseño y entrego sistemas full-stack escalables y seguros, y lidero los equipos que los construyen.',
      'Mi trayectoria abarca plataformas empresariales integradas con SAP que atienden a decenas de miles de usuarios en docenas de países, seguridad de aplicaciones (threat modeling, OWASP) y gestión de producto de principio a fin.',
      'Estudié Ciencias de la Computación en EE. UU. (Magna Cum Laude), fui deportista universitario y hablo cuatro idiomas con fluidez. Me importan el rendimiento, la mantenibilidad a largo plazo y construir software en el que la gente realmente confíe.',
    ],
    fastFacts: [
      { label: 'Ubicación', value: 'Memphis, TN, EE. UU.' },
      { label: 'Idiomas', value: 'EN · DE · TR · FR' },
      { label: 'Enfoque', value: 'Arquitectura · Seguridad · Producto' },
    ],
  },

  metrics: [
    {
      value: 53,
      suffix: '%',
      prefix: '+',
      label: 'Satisfacción del cliente',
      detail: 'A partir de una modernización de aplicaciones clave que lideré.',
    },
    {
      value: 15,
      suffix: '%',
      prefix: '+',
      label: 'Crecimiento en nuevos contratos',
      detail: 'Impulsado por esa misma iniciativa de modernización.',
    },
    {
      value: 70,
      suffix: '%',
      label: 'Cómputo y búsquedas más rápidos',
      detail: 'Reducción en cargas de big data para facturación electrónica y OCR.',
    },
    {
      value: 10000,
      suffix: '+',
      label: 'Usuarios atendidos',
      detail: 'A través de las plataformas que he construido y entregado.',
    },
  ],

  countryCoverage: {
    from: 27,
    to: 36,
    label: 'Países soportados mediante integraciones y API de SAP',
  },

  experience: [
    {
      id: 'cbs',
      company: 'cbs Corporate Business Solutions',
      location: 'Hamburgo, Alemania',
      period: 'Mayo 2024 – Actualidad',
      blurb: 'Firma de consultoría empresarial especializada en software integrado con SAP.',
      current: true,
      roles: [
        {
          title: 'Senior Software Engineer & Team Lead',
          period: 'Abr. 2026 – Actualidad',
          bullets: [
            'Lideré la modernización de aplicaciones clave, logrando +55 % en CSAT y +20 % en nuevos contratos.',
            'Responsable de principio a fin de la entrega y la arquitectura de sistemas de aplicaciones full-stack escalables, microservicios y plataformas de datos con integraciones SAP.',
            'Aseguré la arquitectura del sistema mediante threat modeling, análisis de kill-chain y OWASP SAMM / STRIDE.',
            'Centralicé procesos comunes para un diseño más limpio y mantenible.',
            'Actué como Product Owner — backlog, roadmap y entrega — liderando un equipo Agile/Scrum multifuncional.',
          ],
        },
        {
          title: 'Software Engineer',
          period: 'Mayo 2024 – Abr. 2026',
          bullets: [
            'Optimicé consultas de big data detrás de pipelines de facturación electrónica y OCR, reduciendo el tiempo de procesamiento en un 70 %.',
            'Amplié la cobertura de países de 30 a 40 junto con el equipo de SAP y nuevas integraciones de API.',
            'Construí aplicaciones full-stack y móviles (React, React Native, Dart), dashboards y microservicios para más de 50.000 usuarios.',
            'Automaticé el procesamiento de datos y flujos de trabajo de backend en Perl; desplegado sobre PostgreSQL, Docker y Nginx.',
          ],
        },
      ],
    },
    {
      id: 'union-university',
      company: 'Union University',
      location: 'Jackson, TN, EE. UU.',
      period: 'Ago. 2021 – Abr. 2024',
      blurb: 'Software Engineer (estudiante empleado)',
      roles: [
        {
          title: 'Software Engineer (estudiante empleado)',
          period: 'Ago. 2021 – Abr. 2024',
          bullets: [
            'Desarrollé sitios web y aplicaciones dinámicas con Java, JavaScript, HTML/CSS, ColdFusion y SQL.',
            'Utilicé análisis de SQL para aumentar la interacción de usuarios en un 20 %.',
            'Implementé políticas de seguridad a nivel de servidor y página, reduciendo vulnerabilidades en un 19 %.',
            'Optimicé el rendimiento, reduciendo los tiempos de carga en un 15 %.',
          ],
        },
      ],
    },
    {
      id: 'am-holding',
      company: 'A+M Holding',
      location: 'Hamburgo, Alemania',
      period: 'Mayo 2018 – Jul. 2020',
      blurb: 'Software Engineer (tiempo parcial)',
      roles: [
        {
          title: 'Software Engineer (tiempo parcial)',
          period: 'Mayo 2018 – Jul. 2020',
          bullets: [
            'Construí aplicaciones web en stack LAMP y software contable interno en Java.',
            'Impulsé una estrategia SEO que aumentó el tráfico del sitio en un 35 % y la interacción en un 25 %.',
            'Reduje los tiempos de carga en un 25 % mediante trabajo específico de rendimiento.',
          ],
        },
      ],
    },
  ],

  skillGroups: [
    {
      title: 'Lenguajes',
      items: ['Python', 'Java', 'JavaScript / TypeScript', 'Dart', 'Perl', 'SQL'],
    },
    {
      title: 'Frameworks y herramientas',
      items: ['Django', 'React', 'React Native', 'Node.js', 'Docker', 'Nginx', 'Git'],
    },
    {
      title: 'Arquitectura y prácticas',
      items: ['Microservices', 'System Design', 'TDD', 'Agile/Scrum', 'Secure System Design'],
    },
    {
      title: 'Datos y APIs',
      items: ['PostgreSQL', 'MSSQL', 'MySQL', 'REST APIs', 'SOAP APIs', 'JSON'],
    },
    {
      title: 'Cloud y seguridad',
      items: ['AWS', 'Linux', 'Redes', 'Ciberseguridad', 'OWASP', 'Threat Modeling'],
    },
    {
      title: 'Producto y liderazgo',
      items: ['Product Ownership', 'Gestión de backlog', 'Gestión de stakeholders', 'Mentoría'],
    },
  ],

  spokenLanguages: [
    { name: 'Inglés', level: 'C2' },
    { name: 'Alemán', level: 'C2' },
    { name: 'Turco', level: 'C1' },
    { name: 'Francés', level: 'A1' },
    { name: 'Español', level: 'A1' },
  ],

  passions: [
    {
      title: 'Sistemas descentralizados',
      description: 'El futuro de un internet abierto — protocolos abiertos, y Nostr en particular.',
    },
    {
      title: 'IA/ML en producción',
      description: 'Integrar capacidades de IA/ML en productos full-stack, de principio a fin.',
    },
    {
      title: 'Ingeniería secure-by-design',
      description: 'Rendimiento y mantenibilidad a largo plazo, tratados como requisitos de primer nivel.',
    },
    {
      title: 'Código abierto',
      description: 'Ampliar mis contribuciones de código abierto, devolviendo algo a las herramientas en las que confío.',
    },
  ],

  community: {
    kicker: '25 años de OWASP · Viena, junio de 2026',
    title: 'OWASP Global AppSec — Viena',
    paragraphs: [
      'Asistí a OWASP Global AppSec Viena por el 25.º aniversario de la Fundación, comenzando con el Threat Modeling Intensive de dos días impartido por Adam Shostack. Aun con experiencia previa en threat modeling, dos días completos inmerso en esa mentalidad y esas técnicas me dieron una perspectiva genuinamente nueva, y ideas prácticas que desde entonces he aplicado directamente en mi trabajo diario.',
      'La conferencia en sí fue igual de destacable: el lanzamiento del AI Security Verification Standard (AISVS), profundizaciones sobre OWASP SAMM y una amplia variedad de charlas dejaron algo claro — la forma en que pensamos la seguridad debe evolucionar tan rápido como lo hace la industria. Sin embargo, lo que más me impactó fue la comunidad misma: abierta, generosa y genuinamente atenta en cada conversación.',
    ],
    highlights: [
      'Threat Modeling Intensive con Adam Shostack',
      'Lanzamiento del AISVS',
      'Profundización en OWASP SAMM',
      'Comunidad y conversaciones informales',
    ],
    photos: [
      {
        src: `${import.meta.env.BASE_URL}owasp_alpay_adam.jpg`,
        alt: 'Alpay Can Altuntas con Adam Shostack tras el Threat Modeling Intensive',
        caption: 'Con Adam Shostack, tras el Threat Modeling Intensive',
        wide: true,
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_intro_keynote.jpg`,
        alt: 'Keynote de apertura de OWASP Global AppSec Viena, «Build Something Worth Building»',
        caption: 'Keynote de apertura — 25 años de seguridad de código abierto',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_aisvs_launch.jpg`,
        alt: 'Panel de lanzamiento del OWASP AI Security Verification Standard (AISVS)',
        caption: 'Lanzamiento del AI Security Verification Standard',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_conference_talk.jpg`,
        alt: 'Público durante una charla en OWASP Global AppSec Viena',
        caption: 'Una de las muchas sesiones concurridas de la conferencia',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_intro.jpg`,
        alt: 'Alpay Can Altuntas en OWASP Global AppSec Viena, 25.º aniversario',
        caption: 'OWASP Global AppSec Viena, 25 años de seguridad de código abierto',
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
    degree: 'Licenciatura en Ciencias de la Computación (B.S.)',
    school: 'Union University',
    date: 'Mayo 2024',
    honors: ['Magna Cum Laude', 'President\'s List (2021–2024)', 'Distinción Student-Athlete (2020–2024)'],
  },

  affiliation: 'Miembro de OWASP AppSec',
}

export default es
