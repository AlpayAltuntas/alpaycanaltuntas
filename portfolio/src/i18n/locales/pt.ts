import type { LocaleContent } from '../types'

const pt: LocaleContent = {
  nav: [
    { label: 'Sobre mim', href: '#about' },
    { label: 'Impacto', href: '#impact' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Paixões', href: '#passions' },
    { label: 'Comunidade', href: '#community' },
    { label: 'Formação', href: '#education' },
    { label: 'Contato', href: '#contact' },
  ],

  person: {
    name: 'Alpay Can Altuntas',
    initials: 'ACA',
    title: 'Senior Software Engineer & Team Lead',
    roleLine: 'Senior Software Engineer · Team Lead · Product Owner',
    positioning:
      'Eu construo software escalável, seguro e orientado a produto — da arquitetura de sistemas até as funcionalidades entregues.',
    location: 'Baseado em / mudando-se para Memphis, TN, EUA',
    availability: 'Aberto a trabalho remoto (EUA)',
    funFact: 'Depurar código às vezes parece ser o investigador e o culpado ao mesmo tempo.',
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
    { label: 'Currículo', href: `${import.meta.env.BASE_URL}resume.pdf`, icon: 'file-down' },
  ],

  ui: {
    skipToContent: 'Pular para o conteúdo',
    backToTop: '— voltar ao topo',
    primaryNav: 'Navegação principal',
    primaryNavMobile: 'Navegação principal móvel',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    switchToLight: 'Mudar para o tema claro',
    switchToDark: 'Mudar para o tema escuro',
    languageSelector: 'Alterar idioma',
    viewWork: 'Ver projetos',
    downloadResume: 'Baixar currículo',
    scrollToAbout: 'Rolar até a seção Sobre mim',
    closePhoto: 'Fechar',
    previousPhoto: 'Foto anterior',
    nextPhoto: 'Próxima foto',
    viewLargerPhoto: 'Ver foto ampliada',
    allRightsReserved: 'Todos os direitos reservados.',
    currentBadge: 'Atual',
    initialsMonogram: '— monograma de iniciais',
  },

  sections: {
    about: { index: '01 / Sobre mim', title: 'Engenheiro, arquiteto, product owner.' },
    impact: {
      index: '02 / Impacto',
      title: 'Resultados, não apenas responsabilidades.',
      description: 'Resultados mensuráveis dos sistemas que arquitetei e entreguei.',
    },
    experience: {
      index: '03 / Experiência',
      title: 'Onde eu construí.',
      description: 'Arquitetura corporativa, segurança e gestão de produto — de ponta a ponta.',
    },
    skills: {
      index: '04 / Habilidades',
      title: 'O ferramental.',
      description: 'Linguagens, frameworks e práticas que uso diariamente.',
      spokenLanguagesLabel: 'Idiomas',
    },
    passions: { index: '05 / Paixões', title: 'O que me apaixona.' },
    community: { index: '06 / Comunidade' },
    education: {
      index: '07 / Formação',
      title: 'Certificações e formação.',
      educationLabel: 'Formação',
      certificationsLabel: 'Certificações',
    },
    contact: {
      index: '08 / Contato',
      title: 'Vamos construir algo que valha a pena.',
      description:
        'Aberto a vagas remotas nos EUA. Entre em contato diretamente — sem formulários, sem intermediários.',
    },
  },

  about: {
    paragraphs: [
      'Sou engenheiro de software sênior, na interseção entre engenharia, arquitetura e produto. Projeto e entrego sistemas full-stack escaláveis e seguros, e lidero as equipes que os constroem.',
      'Minha trajetória abrange plataformas corporativas integradas ao SAP que atendem dezenas de milhares de usuários em dezenas de países, segurança de aplicações (threat modeling, OWASP) e gestão de produto de ponta a ponta.',
      'Estudei Ciência da Computação nos EUA (Magna Cum Laude), fui atleta universitário e falo quatro idiomas fluentemente. Valorizo desempenho, manutenibilidade de longo prazo e a construção de software em que as pessoas realmente confiam.',
    ],
    fastFacts: [
      { label: 'Localização', value: 'Memphis, TN, EUA' },
      { label: 'Idiomas', value: 'EN · DE · TR · FR' },
      { label: 'Foco', value: 'Arquitetura · Segurança · Produto' },
    ],
  },

  metrics: [
    {
      value: 53,
      suffix: '%',
      prefix: '+',
      label: 'Satisfação do cliente',
      detail: 'A partir de uma modernização de aplicações centrais que liderei.',
    },
    {
      value: 15,
      suffix: '%',
      prefix: '+',
      label: 'Crescimento em novos contratos',
      detail: 'Impulsionado pela mesma iniciativa de modernização.',
    },
    {
      value: 70,
      suffix: '%',
      label: 'Cálculo e busca mais rápidos',
      detail: 'Redução em cargas de big data de faturamento eletrônico e OCR.',
    },
    {
      value: 10000,
      suffix: '+',
      label: 'Usuários atendidos',
      detail: 'Em todas as plataformas que construí e entreguei.',
    },
  ],

  countryCoverage: {
    from: 27,
    to: 36,
    label: 'Países suportados via integrações e APIs SAP',
  },

  experience: [
    {
      id: 'cbs',
      company: 'cbs Corporate Business Solutions',
      location: 'Hamburgo, Alemanha',
      period: 'Maio de 2024 – Atual',
      blurb: 'Empresa de consultoria corporativa especializada em software integrado ao SAP.',
      current: true,
      roles: [
        {
          title: 'Senior Software Engineer & Team Lead',
          period: 'Abr. 2026 – Atual',
          bullets: [
            'Liderei a modernização de aplicações centrais, alcançando +55% de CSAT e +20% em novos contratos.',
            'Responsável de ponta a ponta pela entrega e arquitetura de sistemas de aplicações full-stack escaláveis, microsserviços e plataformas de dados com integrações SAP.',
            'Segurança da arquitetura de sistemas via threat modeling, análise de kill-chain e OWASP SAMM / STRIDE.',
            'Centralização de processos comuns para um design mais limpo e sustentável.',
            'Atuação como Product Owner — backlog, roadmap e entrega — liderando uma equipe Agile/Scrum multifuncional.',
          ],
        },
        {
          title: 'Software Engineer',
          period: 'Maio de 2024 – Abr. 2026',
          bullets: [
            'Otimizei consultas de big data por trás de pipelines de faturamento eletrônico e OCR, reduzindo o tempo de processamento em 70%.',
            'Ampliei a cobertura de países de 30 para 40 junto com a equipe SAP e novas integrações de API.',
            'Construí aplicações full-stack e mobile (React, React Native, Dart), dashboards e microsserviços para mais de 50.000 usuários.',
            'Automatizei o processamento de dados e fluxos de trabalho de backend em Perl; implantado sobre PostgreSQL, Docker e Nginx.',
          ],
        },
      ],
    },
    {
      id: 'union-university',
      company: 'Union University',
      location: 'Jackson, TN, EUA',
      period: 'Ago. 2021 – Abr. 2024',
      blurb: 'Software Engineer (estudante contratado)',
      roles: [
        {
          title: 'Software Engineer (estudante contratado)',
          period: 'Ago. 2021 – Abr. 2024',
          bullets: [
            'Construí sites e aplicações dinâmicas com Java, JavaScript, HTML/CSS, ColdFusion e SQL.',
            'Usei análises em SQL para aumentar o engajamento dos usuários em 20%.',
            'Implementei políticas de segurança em nível de servidor e página, reduzindo vulnerabilidades em 19%.',
            'Otimizei o desempenho, reduzindo o tempo de carregamento das páginas em 15%.',
          ],
        },
      ],
    },
    {
      id: 'am-holding',
      company: 'A+M Holding',
      location: 'Hamburgo, Alemanha',
      period: 'Maio de 2018 – Jul. 2020',
      blurb: 'Software Engineer (meio período)',
      roles: [
        {
          title: 'Software Engineer (meio período)',
          period: 'Maio de 2018 – Jul. 2020',
          bullets: [
            'Construí aplicações web em stack LAMP e software de contabilidade interno em Java.',
            'Conduzi uma estratégia de SEO que aumentou o tráfego do site em 35% e o engajamento em 25%.',
            'Reduzi o tempo de carregamento em 25% com trabalho focado em desempenho.',
          ],
        },
      ],
    },
  ],

  skillGroups: [
    {
      title: 'Linguagens',
      items: ['Python', 'Java', 'JavaScript / TypeScript', 'Dart', 'Perl', 'SQL'],
    },
    {
      title: 'Frameworks e ferramentas',
      items: ['Django', 'React', 'React Native', 'Node.js', 'Docker', 'Nginx', 'Git'],
    },
    {
      title: 'Arquitetura e práticas',
      items: ['Microservices', 'System Design', 'TDD', 'Agile/Scrum', 'Secure System Design'],
    },
    {
      title: 'Dados e APIs',
      items: ['PostgreSQL', 'MSSQL', 'MySQL', 'REST APIs', 'SOAP APIs', 'JSON'],
    },
    {
      title: 'Cloud e segurança',
      items: ['AWS', 'Linux', 'Redes', 'Cibersegurança', 'OWASP', 'Threat Modeling'],
    },
    {
      title: 'Produto e liderança',
      items: ['Product Ownership', 'Gestão de backlog', 'Gestão de stakeholders', 'Mentoria'],
    },
  ],

  spokenLanguages: [
    { name: 'Inglês', level: 'C2' },
    { name: 'Alemão', level: 'C2' },
    { name: 'Turco', level: 'C1' },
    { name: 'Francês', level: 'A1' },
    { name: 'Espanhol', level: 'A1' },
  ],

  passions: [
    {
      title: 'Sistemas descentralizados',
      description: 'O futuro de uma internet aberta — protocolos abertos, e o Nostr em particular.',
    },
    {
      title: 'IA/ML em produção',
      description: 'Integrar capacidades de IA/ML em produtos full-stack, de ponta a ponta.',
    },
    {
      title: 'Engenharia secure-by-design',
      description: 'Desempenho e manutenibilidade de longo prazo, tratados como requisitos essenciais.',
    },
    {
      title: 'Código aberto',
      description: 'Ampliar minhas contribuições em código aberto, retribuindo às ferramentas em que confio.',
    },
  ],

  community: {
    kicker: '25 anos da OWASP · Viena, junho de 2026',
    title: 'OWASP Global AppSec — Viena',
    paragraphs: [
      'Participei da OWASP Global AppSec Viena pelo 25º aniversário da Fundação, começando pelo Threat Modeling Intensive de dois dias com Adam Shostack. Mesmo com experiência prévia em threat modeling, dois dias inteiros imerso nessa mentalidade e nessas técnicas me deram uma perspectiva genuinamente nova — e ideias práticas que já levei diretamente para o meu dia a dia de trabalho.',
      'A conferência em si foi igualmente marcante: o lançamento do AI Security Verification Standard (AISVS), aprofundamentos sobre o OWASP SAMM e uma ampla variedade de palestras deixaram uma coisa clara — a forma como pensamos segurança precisa evoluir tão rápido quanto o setor. O que mais se destacou, porém, foi a própria comunidade: aberta, generosa e genuinamente atenciosa em cada conversa.',
    ],
    highlights: [
      'Threat Modeling Intensive com Adam Shostack',
      'Lançamento do AISVS',
      'Aprofundamento em OWASP SAMM',
      'Comunidade e conversas nos corredores',
    ],
    photos: [
      {
        src: `${import.meta.env.BASE_URL}owasp_alpay_adam.jpg`,
        alt: 'Alpay Can Altuntas com Adam Shostack após o Threat Modeling Intensive',
        caption: 'Com Adam Shostack, após o Threat Modeling Intensive',
        wide: true,
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_intro_keynote.jpg`,
        alt: 'Keynote de abertura da OWASP Global AppSec Viena, "Build Something Worth Building"',
        caption: 'Keynote de abertura — 25 anos de segurança open source',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_aisvs_launch.jpg`,
        alt: 'Painel de lançamento do OWASP AI Security Verification Standard (AISVS)',
        caption: 'Lançamento do AI Security Verification Standard',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_conference_talk.jpg`,
        alt: 'Público em uma palestra da OWASP Global AppSec Viena',
        caption: 'Uma das muitas sessões lotadas da conferência',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_intro.jpg`,
        alt: 'Alpay Can Altuntas na OWASP Global AppSec Viena, 25º aniversário',
        caption: 'OWASP Global AppSec Viena, 25 anos de segurança open source',
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
    degree: 'Bacharelado em Ciência da Computação (B.S.)',
    school: 'Union University',
    date: 'Maio de 2024',
    honors: ['Magna Cum Laude', 'President\'s List (2021–2024)', 'Honraria Student-Athlete (2020–2024)'],
  },

  affiliation: 'Membro da OWASP AppSec',
}

export default pt
