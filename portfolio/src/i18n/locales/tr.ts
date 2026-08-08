import type { LocaleContent } from '../types'

const tr: LocaleContent = {
  nav: [
    { label: 'Hakkımda', href: '#about' },
    { label: 'Etki', href: '#impact' },
    { label: 'Topluluk', href: '#community' },
    { label: 'Deneyim', href: '#experience' },
    { label: 'Yetenekler', href: '#skills' },
    { label: 'İlgi Alanlarım', href: '#passions' },
    { label: 'Eğitim', href: '#education' },
    { label: 'İletişim', href: '#contact' },
  ],

  person: {
    name: 'Alpay Can Altuntas',
    initials: 'ACA',
    title: 'Kıdemli Yazılım Mühendisi & Takım Lideri',
    roleLine: 'Kıdemli Yazılım Mühendisi · Takım Lideri · Ürün Sahibi',
    positioning:
      'Sistem mimarisinden canlıya alınan özelliklere kadar ölçeklenebilir, güvenli ve ürün odaklı yazılımlar geliştiriyorum.',
    location: "Memphis, TN, ABD'de yaşıyor / oraya taşınıyor",
    availability: 'Uzaktan çalışmaya açık (ABD)',
    funFact: 'Debug yapmak bazen hem dedektif hem de zanlı olmak gibi hissettiriyor.',
    photo: `${import.meta.env.BASE_URL}profile.jpg`,
  },

  socials: [
    { label: 'GitHub', href: 'https://github.com/AlpayAltuntas', icon: 'github' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alpay-can-altuntas-870649236/',
      icon: 'linkedin',
    },
    { label: 'E-posta', href: 'mailto:' + 'Alpaycanaltuntas' + '@' + 'gmail.com', icon: 'mail' },
    { label: 'Özgeçmiş', href: `${import.meta.env.BASE_URL}resume.pdf`, icon: 'file-down' },
  ],

  ui: {
    skipToContent: 'İçeriğe geç',
    backToTop: '— başa dön',
    primaryNav: 'Ana menü',
    primaryNavMobile: 'Ana menü (mobil)',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    switchToLight: 'Açık temaya geç',
    switchToDark: 'Koyu temaya geç',
    languageSelector: 'Dili değiştir',
    viewWork: 'Çalışmalarımı Gör',
    downloadResume: 'Özgeçmişi İndir',
    scrollToAbout: "Hakkımda bölümüne kaydır",
    closePhoto: 'Kapat',
    previousPhoto: 'Önceki fotoğraf',
    nextPhoto: 'Sonraki fotoğraf',
    viewLargerPhoto: 'Fotoğrafı büyüt',
    allRightsReserved: 'Tüm hakları saklıdır.',
    currentBadge: 'Güncel',
    initialsMonogram: '— baş harf monogramı',
    availableStatus: 'müsait',
  },

  sections: {
    about: { index: '01 / Hakkımda', title: 'Mühendis, mimar, ürün sahibi.' },
    impact: {
      index: '02 / Etki',
      title: 'Sadece sorumluluk değil, sonuç.',
      description: 'Tasarladığım ve hayata geçirdiğim sistemlerden ölçülebilir sonuçlar.',
    },
    experience: {
      index: '04 / Deneyim',
      title: 'Neler inşa ettim.',
      description: 'Kurumsal mimari, güvenlik ve uçtan uca ürün sahipliği.',
    },
    skills: {
      index: '05 / Yetenekler',
      title: 'Araç kutusu.',
      description: 'Her gün başvurduğum diller, framework’ler ve pratikler.',
      spokenLanguagesLabel: 'Konuşulan Diller',
    },
    passions: { index: '06 / İlgi Alanlarım', title: 'Tutkuyla bağlı olduğum şeyler.' },
    community: { index: '03 / Topluluk' },
    education: {
      index: '07 / Eğitim',
      title: 'Sertifikalar & eğitim.',
      educationLabel: 'Eğitim',
      certificationsLabel: 'Sertifikalar',
    },
    contact: {
      index: '08 / İletişim',
      title: 'Değer katacak bir şeyler inşa edelim.',
      description: 'ABD genelinde uzaktan rollere açığım. Doğrudan ulaşın — form yok, engel yok.',
    },
  },

  about: {
    paragraphs: [
      'Mühendislik, mimari ve ürünün kesişiminde çalışan kıdemli bir yazılım mühendisiyim. Ölçeklenebilir, güvenli full-stack sistemler tasarlıyor, hayata geçiriyor ve bu sistemleri kuran ekiplere liderlik ediyorum.',
      'Geçmişim, onlarca ülkede on binlerce kullanıcıya hizmet veren SAP entegreli kurumsal platformlardan uygulama güvenliğine (tehdit modelleme, OWASP) ve uçtan uca ürün sahipliğine kadar uzanıyor.',
      "ABD'de Bilgisayar Bilimleri okudum (Magna Cum Laude), üniversite döneminde sporcu öğrenciydim ve dört dili akıcı konuşuyorum. Performans, uzun vadeli sürdürülebilirlik ve insanların gerçekten güvendiği yazılımlar üretmek benim için önemli.",
    ],
    fastFacts: [
      { label: 'Konum', value: 'Memphis, TN, USA' },
      { label: 'Diller', value: 'EN · DE · TR · FR' },
      { label: 'Odak', value: 'Mimari · Güvenlik · Ürün' },
    ],
  },

  metrics: [
    {
      value: 53,
      suffix: '%',
      prefix: '+',
      label: 'Müşteri memnuniyeti',
      detail: 'Liderliğini yaptığım bir çekirdek uygulama modernizasyonundan.',
    },
    {
      value: 15,
      suffix: '%',
      prefix: '+',
      label: 'Yeni sözleşme büyümesi',
      detail: 'Aynı modernizasyon çalışmasıyla sağlandı.',
    },
    {
      value: 70,
      suffix: '%',
      label: 'Daha hızlı hesaplama & arama',
      detail: 'Büyük veri e-fatura ve OCR iş yüklerinde sağlanan azalma.',
    },
    {
      value: 10000,
      suffix: '+',
      label: 'Hizmet verilen kullanıcı',
      detail: 'Geliştirdiğim ve canlıya aldığım platformlar genelinde.',
    },
  ],

  countryCoverage: {
    from: 27,
    to: 36,
    label: "SAP entegrasyonları & API'ler ile desteklenen ülke sayısı",
  },

  experience: [
    {
      id: 'cbs',
      company: 'cbs Corporate Business Solutions',
      location: 'Hamburg, Almanya',
      period: 'Mayıs 2024 – Günümüz',
      blurb: 'SAP entegreli kurumsal yazılımlar konusunda uzmanlaşmış kurumsal danışmanlık firması.',
      current: true,
      roles: [
        {
          title: 'Kıdemli Yazılım Mühendisi & Takım Lideri',
          period: 'Nis 2026 – Günümüz',
          bullets: [
            'Çekirdek uygulamaların modernizasyonuna liderlik ederek müşteri memnuniyetini %55, yeni sözleşmeleri %20 artırdım.',
            "SAP entegrasyonlu ölçeklenebilir full-stack uygulamalar, mikroservisler ve veri platformları için uçtan uca teslimat ve sistem mimarisinden sorumluyum.",
            'Tehdit modelleme, kill-chain analizi ve OWASP SAMM / STRIDE ile sistem mimarisini güvence altına alıyorum.',
            'Daha temiz ve sürdürülebilir bir tasarım için ortak süreçleri merkezileştirdim.',
            'Ürün Sahibi olarak backlog, yol haritası ve teslimattan sorumluyum; fonksiyonlar arası bir Agile/Scrum ekibine liderlik ediyorum.',
          ],
        },
        {
          title: 'Yazılım Mühendisi',
          period: 'Mayıs 2024 – Nis 2026',
          bullets: [
            'E-fatura ve OCR hatlarının arkasındaki büyük veri sorgularını optimize ederek işlem süresini %70 azalttım.',
            "SAP ekibiyle birlikte ve yeni API entegrasyonlarıyla desteklenen ülke sayısını 30'dan 40'a çıkardım.",
            "50.000'den fazla kullanıcıya hizmet veren full-stack ve mobil uygulamalar (React, React Native, Dart), gösterge panelleri ve mikroservisler geliştirdim.",
            'Perl ile veri işleme ve backend iş akışlarını otomatikleştirdim; PostgreSQL, Docker ve Nginx üzerinde teslimat yaptım.',
          ],
        },
      ],
    },
    {
      id: 'union-university',
      company: 'Union University',
      location: 'Jackson, TN, ABD',
      period: 'Ağu 2021 – Nis 2024',
      blurb: 'Yazılım Mühendisi (Öğrenci Çalışan)',
      roles: [
        {
          title: 'Yazılım Mühendisi (Öğrenci Çalışan)',
          period: 'Ağu 2021 – Nis 2024',
          bullets: [
            'Java, JavaScript, HTML/CSS, ColdFusion ve SQL kullanarak dinamik web siteleri ve uygulamalar geliştirdim.',
            'SQL analitiğiyle kullanıcı etkileşimini %20 artırdım.',
            'Sunucu ve sayfa düzeyinde güvenlik politikaları uygulayarak güvenlik açıklarını %19 azalttım.',
            'Performansı optimize ederek sayfa yüklenme sürelerini %15 kısalttım.',
          ],
        },
      ],
    },
    {
      id: 'am-holding',
      company: 'A+M Holding',
      location: 'Hamburg, Almanya',
      period: 'Mayıs 2018 – Tem 2020',
      blurb: 'Yazılım Mühendisi (Yarı Zamanlı)',
      roles: [
        {
          title: 'Yazılım Mühendisi (Yarı Zamanlı)',
          period: 'Mayıs 2018 – Tem 2020',
          bullets: [
            'LAMP yığını web uygulamaları ve Java ile şirket içi muhasebe yazılımı geliştirdim.',
            'Site trafiğini %35, etkileşimi %25 artıran bir SEO stratejisi yürüttüm.',
            'Hedefli performans çalışmalarıyla yüklenme sürelerini %25 azalttım.',
          ],
        },
      ],
    },
  ],

  skillGroups: [
    {
      title: 'Diller',
      items: ['Python', 'Java', 'JavaScript / TypeScript', 'Dart', 'Perl', 'SQL'],
    },
    {
      title: "Framework'ler & Araçlar",
      items: ['Django', 'React', 'React Native', 'Node.js', 'Docker', 'Nginx', 'Git'],
    },
    {
      title: 'Mimari & Pratikler',
      items: ['Microservices', 'Sistem Tasarımı', 'TDD', 'Agile/Scrum', 'Güvenli Sistem Tasarımı'],
    },
    {
      title: "Veri & API'ler",
      items: ['PostgreSQL', 'MSSQL', 'MySQL', "REST API'ler", "SOAP API'ler", 'JSON'],
    },
    {
      title: 'Bulut & Güvenlik',
      items: ['AWS', 'Linux', 'Ağ Yapıları', 'Siber Güvenlik', 'OWASP', 'Tehdit Modelleme'],
    },
    {
      title: 'Ürün & Liderlik',
      items: ['Ürün Sahipliği', 'Backlog Yönetimi', 'Paydaş Yönetimi', 'Mentorluk'],
    },
  ],

  spokenLanguages: [
    { name: 'İngilizce', level: 'C2' },
    { name: 'Almanca', level: 'C2' },
    { name: 'Türkçe', level: 'C1' },
    { name: 'Fransızca', level: 'A1' },
    { name: 'İspanyolca', level: 'A1' },
  ],

  passions: [
    {
      title: 'Merkeziyetsiz sistemler',
      description: 'Açık bir internetin geleceği — açık protokoller ve özellikle Nostr.',
    },
    {
      title: 'Üretimde AI/ML',
      description: "AI/ML yeteneklerini uçtan uca full-stack ürünlere entegre etmek.",
    },
    {
      title: 'Tasarımdan itibaren güvenli mühendislik',
      description: 'Performansı ve uzun vadeli sürdürülebilirliği birinci sınıf gereksinimler olarak ele almak.',
    },
    {
      title: 'Açık kaynak',
      description: 'Açık kaynak katkılarımı büyütmek ve güvendiğim araçlara geri vermek.',
    },
  ],

  community: {
    kicker: "OWASP'ın 25. Yılı · Viyana, Haziran 2026",
    title: 'OWASP Global AppSec — Viyana',
    paragraphs: [
      "Foundation'ın 25. yıl dönümü için OWASP Global AppSec Viyana'ya katıldım; etkinlik Adam Shostack'in iki günlük Tehdit Modelleme Yoğun Programı ile açıldı. Daha önce tehdit modelleme deneyimim olsa da, bu yaklaşımın ardındaki zihniyet ve tekniklerle geçirdiğim iki tam gün bana gerçekten yeni bir bakış açısı kazandırdı — ve o zamandan beri günlük işime doğrudan taşıdığım pratik fikirler edindim.",
      "Konferansın kendisi de bir o kadar etkileyiciydi: AI Security Verification Standard (AISVS)'in lansmanı, OWASP SAMM'a daha derinlemesine bakışlar ve geniş bir yelpazedeki konuşmalar bir şeyi net bir şekilde ortaya koydu — güvenliği ele alış biçimimiz, sektör kadar hızlı gelişmek zorunda. Ancak en çok etkileyen, topluluğun kendisiydi: açık, cömert ve her sohbette gerçekten düşünceli.",
    ],
    highlights: [
      'Adam Shostack ile Tehdit Modelleme Yoğun Programı',
      'AISVS lansmanı',
      'OWASP SAMM derinlemesine incelemeleri',
      'Topluluk & koridor sohbetleri',
    ],
    photos: [
      {
        src: `${import.meta.env.BASE_URL}owasp_alpay_adam.jpg`,
        alt: 'Alpay Can Altuntas, Tehdit Modelleme Yoğun Programı sonrası Adam Shostack ile birlikte',
        caption: 'Tehdit Modelleme Yoğun Programı sonrası Adam Shostack ile',
        wide: true,
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_intro_keynote.jpg`,
        alt: 'OWASP Global AppSec Viyana açılış konuşması, "Build Something Worth Building"',
        caption: 'Açılış konuşması — açık kaynak güvenliğinin 25 yılı',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_aisvs_launch.jpg`,
        alt: 'OWASP AI Security Verification Standard (AISVS) lansman paneli',
        caption: 'AI Security Verification Standard lansmanı',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_conference_talk.jpg`,
        alt: 'OWASP Global AppSec Viyana konferans oturumunda izleyiciler',
        caption: 'Dolu dolu geçen konferans oturumlarından biri',
      },
      {
        src: `${import.meta.env.BASE_URL}owasp_intro.jpg`,
        alt: "Alpay Can Altuntas, OWASP Global AppSec Viyana'da, 25. yıl dönümünde",
        caption: 'OWASP Global AppSec Viyana, açık kaynak güvenliğinin 25 yılı',
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
    degree: 'Bilgisayar Bilimleri Lisansı (B.S.)',
    school: 'Union University',
    date: 'Mayıs 2024',
    honors: ['Magna Cum Laude', "Rektörlük Onur Listesi (2021–2024)", 'Öğrenci-Sporcu Onur Ödülü (2020–2024)'],
  },

  affiliation: 'OWASP AppSec Üyesi',
}

export default tr
