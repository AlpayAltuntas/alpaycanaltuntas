export type LanguageCode = 'en' | 'de' | 'fr' | 'es' | 'pt'

export interface NavLink {
  label: string
  href: string
}

export interface FastFact {
  label: string
  value: string
}

export interface Metric {
  value: number
  suffix: string
  prefix?: string
  label: string
  detail: string
}

export interface ExperienceRole {
  title: string
  period: string
  bullets: string[]
}

export interface ExperienceEntry {
  id: string
  company: string
  location: string
  period: string
  blurb: string
  roles: ExperienceRole[]
  current?: boolean
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface SpokenLanguage {
  name: string
  level: string
}

export interface Passion {
  title: string
  description: string
}

export interface Certification {
  name: string
  year: string
}

export interface CommunityPhoto {
  src: string
  alt: string
  caption: string
  wide?: boolean
}

export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'file-down'
}

export interface LocaleContent {
  nav: NavLink[]

  person: {
    name: string
    initials: string
    title: string
    roleLine: string
    positioning: string
    location: string
    availability: string
    funFact: string
    photo: string
  }

  socials: SocialLink[]

  ui: {
    skipToContent: string
    backToTop: string
    primaryNav: string
    primaryNavMobile: string
    openMenu: string
    closeMenu: string
    switchToLight: string
    switchToDark: string
    languageSelector: string
    viewWork: string
    downloadResume: string
    scrollToAbout: string
    closePhoto: string
    previousPhoto: string
    nextPhoto: string
    viewLargerPhoto: string
    allRightsReserved: string
    currentBadge: string
    initialsMonogram: string
  }

  sections: {
    about: { index: string; title: string }
    impact: { index: string; title: string; description: string }
    experience: { index: string; title: string; description: string }
    skills: { index: string; title: string; description: string; spokenLanguagesLabel: string }
    passions: { index: string; title: string }
    community: { index: string }
    education: { index: string; title: string; educationLabel: string; certificationsLabel: string }
    contact: { index: string; title: string; description: string }
  }

  about: {
    paragraphs: string[]
    fastFacts: FastFact[]
  }

  metrics: Metric[]

  countryCoverage: {
    from: number
    to: number
    label: string
  }

  experience: ExperienceEntry[]

  skillGroups: SkillGroup[]

  spokenLanguages: SpokenLanguage[]

  passions: Passion[]

  community: {
    kicker: string
    title: string
    paragraphs: string[]
    highlights: string[]
    photos: CommunityPhoto[]
  }

  certifications: Certification[]

  education: {
    degree: string
    school: string
    date: string
    honors: string[]
  }

  affiliation: string
}
