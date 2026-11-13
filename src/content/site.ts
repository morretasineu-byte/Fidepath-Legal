import { Lang } from '../types/i18n';

export interface SiteStrings {
  nav: {
    services: string;
    methodology: string;
    practice: string;
    contact: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    regionsLabel: string;
    regionsValue: string;
    diagramTitle: string;
    diagramBaseline: string;
    diagramAsBuilt: string;
    diagramCriticalEvent: string;
    diagramEntitlement: string;
  };
  services: {
    heading: string;
    intro: string;
    items: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  methodology: {
    heading: string;
    intro: string;
    standards: Array<{
      title: string;
      detail: string;
    }>;
  };
  practice: {
    heading: string;
    name: string;
    role: string;
    qualification: string;
    summary: string;
    facts: Array<{
      label: string;
      value: string;
    }>;
  };
  contact: {
    heading: string;
    intro: string;
    emailLabel: string;
    phoneLabel: string;
    linkedinLabel: string;
    linkedinAction: string;
    addressLabel: string;
    addressValue: string;
  };
  footer: {
    copyright: string;
    tagline: string;
    legalLinks: {
      legalNotice: string;
      privacyPolicy: string;
      cookiePolicy: string;
    };
  };
  legalUi: {
    backToHome: string;
  };
}

export const SITE_COPY: Record<Lang, SiteStrings> = {
  en: {
    nav: {
      services: 'Services',
      methodology: 'Methodology',
      practice: 'Practice',
      contact: 'Contact',
    },
    hero: {
      kicker: 'Independent Technical Consultancy',
      headline: 'Forensic planning and construction delay analysis.',
      subheadline:
        'FidePath Expert Services provides objective schedule interrogation, extension of time assessment, disruption analysis, and independent expert reports for complex infrastructure and building projects.',
      primaryCta: 'Contact directly',
      secondaryCta: 'View services',
      regionsLabel: 'Jurisdictions served',
      regionsValue: 'United Kingdom · Europe · Middle East',
      diagramTitle: 'Critical Path & Delay Attribution',
      diagramBaseline: 'Baseline Programme (As-Planned)',
      diagramAsBuilt: 'As-Built Critical Sequence',
      diagramCriticalEvent: 'Employer / Neutral Delay Event',
      diagramEntitlement: 'Evaluated Extension of Time (EoT)',
    },
    services: {
      heading: 'Core Capabilities',
      intro:
        'Technical analysis built on contemporaneous project records, CPM schedule logic, and recognised international protocols.',
      items: [
        {
          number: '01',
          title: 'Forensic Planning & Delay Analysis',
          description:
            'Retrospective critical path analysis using Time Impact Analysis, Windows Analysis, As-Planned vs. As-Built, and Collapsed As-Built methodologies.',
        },
        {
          number: '02',
          title: 'Extension of Time (EoT) Assessment',
          description:
            'Preparation and independent review of Extension of Time claims and responses, addressing concurrency, float ownership, and critical path shifts.',
        },
        {
          number: '03',
          title: 'Disruption & Productivity Analysis',
          description:
            'Quantification of lost labour and plant productivity through Measured Mile, earned value, and contemporaneous progress record reconciliation.',
        },
        {
          number: '04',
          title: 'Independent Expert Reports & Dispute Support',
          description:
            'Clear, defensible technical expert reports and schedule reconstructions supporting negotiation, adjudication, dispute boards, litigation, and arbitration.',
        },
      ],
    },
    methodology: {
      heading: 'Analytical Standards & Practice',
      intro:
        'Every engagement follows transparent, auditable schedule forensics aligned with international dispute resolution standards.',
      standards: [
        {
          title: 'Schedule Interrogation',
          detail:
            'Audit of Primavera P6 (.xer) and Asta Powerproject native schedules, baseline integrity checks, logic overrides, constraints, and progress updates.',
        },
        {
          title: 'Protocol Alignment',
          detail:
            'Methods grounded in the Society of Construction Law (SCL) Delay and Disruption Protocol and AACE International Recommended Practice 29R-03.',
        },
        {
          title: 'Contemporaneous Evidence',
          detail:
            'Cross-verification of programme updates against site diaries, RFIs, instructions, progress photographs, and procurement logs.',
        },
      ],
    },
    practice: {
      heading: 'Principal Practice',
      name: 'Joan Perelló',
      role: 'Founder & Lead Forensic Planner',
      qualification:
        'Ingeniero de Caminos, Canales y Puertos — Universitat Politècnica de Catalunya (UPC)',
      summary:
        'Over fifteen years of planning, project controls, and forensic delay analysis across civil infrastructure, energy, rail, and commercial building developments in the United Kingdom, Spain, continental Europe, and the Middle East.',
      facts: [
        { label: 'Location', value: 'Palma (Balears), Spain' },
        { label: 'Working Languages', value: 'English · Catalan · Spanish' },
        { label: 'Practice Scope', value: 'UK · Europe · Middle East' },
      ],
    },
    contact: {
      heading: 'Contact',
      intro:
        'Enquiries are handled directly without automated intermediaries. Please reach out by e-mail, telephone or LinkedIn.',
      emailLabel: 'E-mail',
      phoneLabel: 'Telephone',
      linkedinLabel: 'LinkedIn',
      linkedinAction: 'Connect on LinkedIn',
      addressLabel: 'Office',
      addressValue: 'Carrer Desbach 3, 1r esquerra, Palma (Balears), Spain',
    },
    footer: {
      copyright: 'FidePath Expert Services',
      tagline: 'Independent Forensic Planning & Construction Delay Analysis',
      legalLinks: {
        legalNotice: 'Legal Notice',
        privacyPolicy: 'Privacy Policy',
        cookiePolicy: 'Cookie Policy',
      },
    },
    legalUi: {
      backToHome: 'Back to home',
    },
  },
  ca: {
    nav: {
      services: 'Serveis',
      methodology: 'Metodologia',
      practice: 'Pràctica',
      contact: 'Contacte',
    },
    hero: {
      kicker: 'Consultoria Tècnica Independent',
      headline: 'Planificació forense i anàlisi de retards en construcció.',
      subheadline:
        "FidePath Expert Services ofereix auditoria objectiva de programacions, avaluació d'ampliacions de termini, anàlisi de disrupcions i informes pericials independents per a projectes complexos d'infraestructura i edificació.",
      primaryCta: 'Contactar directament',
      secondaryCta: 'Veure serveis',
      regionsLabel: 'Àmbit territorial',
      regionsValue: 'Regne Unit · Europa · Orient Mitjà',
      diagramTitle: 'Camí Crític i Atribució de Retards',
      diagramBaseline: 'Programa Base (As-Planned)',
      diagramAsBuilt: 'Seqüència Crítica Real (As-Built)',
      diagramCriticalEvent: 'Esdeveniment de Retard / Impacte',
      diagramEntitlement: "Ampliació de Termini Avaluada (EoT)",
    },
    services: {
      heading: 'Capacitats Principals',
      intro:
        "Anàlisi tècnica fonamentada en registres contemporanis d'obra, lògica de camí crític i protocols internacionals reconeguts.",
      items: [
        {
          number: '01',
          title: 'Planificació Forense i Anàlisi de Retards',
          description:
            'Anàlisi retrospectiva del camí crític mitjançant Time Impact Analysis, Windows Analysis, As-Planned vs. As-Built i Collapsed As-Built.',
        },
        {
          number: '02',
          title: "Avaluació d'Ampliacions de Termini (EoT)",
          description:
            "Preparació i revisió independent de reclamacions d'ampliació de termini, abordant concurrència, titularitat del marge (float) i variacions de criticitat.",
        },
        {
          number: '03',
          title: 'Anàlisi de Disrupcions i Productivitat',
          description:
            'Quantificació de pèrdues de productivitat de mà d’obra i maquinària mitjançant Measured Mile, valor guanyat i conciliació de registres de progrés.',
        },
        {
          number: '04',
          title: 'Informes Pericials i Suport en Controvèrsies',
          description:
            'Informes tècnics pericials clars i defensables per a negociacions, adjudication, dispute boards, procediments judicials i arbitratge.',
        },
      ],
    },
    methodology: {
      heading: 'Estàndards Analítics i Pràctica',
      intro:
        'Cada encàrrec aplica tècniques de planificació forense auditables i alineades amb els estàndards internacionals de resolució de conflictes.',
      standards: [
        {
          title: 'Auditoria de Programacions',
          detail:
            'Revisió de fitxers natius Primavera P6 (.xer) i Asta Powerproject, validació del programa base, lògica, restriccions i actualitzacions mensuals.',
        },
        {
          title: 'Alineació amb Protocols',
          detail:
            'Metodologies basades en el Protocol de la Society of Construction Law (SCL) i la Pràctica Recomanada 29R-03 d’AACE International.',
        },
        {
          title: 'Evidència Contemporània',
          detail:
            'Verificació creuada entre les programacions i els llibres d’obra, RFIs, instruccions, fotografies de progrés i registres de subministraments.',
        },
      ],
    },
    practice: {
      heading: 'Direcció Tècnica',
      name: 'Joan Perelló',
      role: 'Fundador i Planificador Forense Principal',
      qualification:
        'Ingeniero de Caminos, Canales y Puertos — Universitat Politècnica de Catalunya (UPC)',
      summary:
        "Més de quinze anys d'experiència en planificació, control de projectes i anàlisi forense de retards en infraestructures civils, energia, ferrocarril i edificació al Regne Unit, Espanya, Europa continental i l'Orient Mitjà.",
      facts: [
        { label: 'Ubicació', value: 'Palma (Balears), Espanya' },
        { label: 'Idiomes de treball', value: 'Anglès · Català · Castellà' },
        { label: 'Àmbit de pràctica', value: 'Regne Unit · Europa · Orient Mitjà' },
      ],
    },
    contact: {
      heading: 'Contacte',
      intro:
        'Les consultes s’atenen directament sense intermediaris automatitzats. Pots posar-te en contacte per correu electrònic, telèfon o LinkedIn.',
      emailLabel: 'Correu electrònic',
      phoneLabel: 'Telèfon',
      linkedinLabel: 'LinkedIn',
      linkedinAction: 'Perfil a LinkedIn',
      addressLabel: 'Despatx',
      addressValue: 'Carrer Desbach 3, 1r esquerra, Palma (Balears), Espanya',
    },
    footer: {
      copyright: 'FidePath Expert Services',
      tagline: 'Planificació Forense Independent i Anàlisi de Retards en Construcció',
      legalLinks: {
        legalNotice: 'Avís legal',
        privacyPolicy: 'Política de privadesa',
        cookiePolicy: 'Política de cookies',
      },
    },
    legalUi: {
      backToHome: "Tornar a l'inici",
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      methodology: 'Metodología',
      practice: 'Práctica',
      contact: 'Contacto',
    },
    hero: {
      kicker: 'Consultoría Técnica Independiente',
      headline: 'Planificación forense y análisis de retrasos en construcción.',
      subheadline:
        'FidePath Expert Services ofrece auditoría objetiva de programaciones, evaluación de ampliaciones de plazo, análisis de disrupciones e informes periciales independientes para proyectos complejos de infraestructura y edificación.',
      primaryCta: 'Contactar directamente',
      secondaryCta: 'Ver servicios',
      regionsLabel: 'Ámbito territorial',
      regionsValue: 'Reino Unido · Europa · Oriente Medio',
      diagramTitle: 'Camino Crítico y Atribución de Retrasos',
      diagramBaseline: 'Programa Base (As-Planned)',
      diagramAsBuilt: 'Secuencia Crítica Real (As-Built)',
      diagramCriticalEvent: 'Evento de Retraso / Impacto',
      diagramEntitlement: 'Ampliación de Plazo Evaluada (EoT)',
    },
    services: {
      heading: 'Capacidades Principales',
      intro:
        'Análisis técnico fundamentado en registros contemporáneos de obra, lógica de camino crítico y protocolos internacionales reconocidos.',
      items: [
        {
          number: '01',
          title: 'Planificación Forense y Análisis de Retrasos',
          description:
            'Análisis retrospectivo del camino crítico mediante Time Impact Analysis, Windows Analysis, As-Planned vs. As-Built y Collapsed As-Built.',
        },
        {
          number: '02',
          title: 'Evaluación de Ampliaciones de Plazo (EoT)',
          description:
            'Preparación y revisión independiente de reclamaciones de ampliación de plazo, abordando concurrencia, titularidad de la holgura (float) y cambios de criticidad.',
        },
        {
          number: '03',
          title: 'Análisis de Disrupciones y Productividad',
          description:
            'Cuantificación de pérdidas de productividad de mano de obra y maquinaria mediante Measured Mile, valor ganado y conciliación de registros de avance.',
        },
        {
          number: '04',
          title: 'Informes Periciales y Apoyo en Controversias',
          description:
            'Informes técnicos periciales claros y defendibles para negociaciones, adjudication, dispute boards, procedimientos judiciales y arbitraje.',
        },
      ],
    },
    methodology: {
      heading: 'Estándares Analíticos y Práctica',
      intro:
        'Cada encargo aplica técnicas de planificación forense auditables y alineadas con los estándares internacionales de resolución de controversias.',
      standards: [
        {
          title: 'Auditoría de Programaciones',
          detail:
            'Revisión de archivos nativos Primavera P6 (.xer) y Asta Powerproject, validación del programa base, lógica, restricciones y actualizaciones periódicas.',
        },
        {
          title: 'Alineación con Protocolos',
          detail:
            'Metodologías basadas en el Protocolo de la Society of Construction Law (SCL) y la Práctica Recomendada 29R-03 de AACE International.',
        },
        {
          title: 'Evidencia Contemporánea',
          detail:
            'Verificación cruzada entre las programaciones y los diarios de obra, RFIs, instrucciones, fotografías de avance y registros de suministros.',
        },
      ],
    },
    practice: {
      heading: 'Dirección Técnica',
      name: 'Joan Perelló',
      role: 'Fundador y Planificador Forense Principal',
      qualification:
        'Ingeniero de Caminos, Canales y Puertos — Universitat Politècnica de Catalunya (UPC)',
      summary:
        'Más de quince años de experiencia en planificación, control de proyectos y análisis forense de retrasos en infraestructuras civiles, energía, ferrocarril y edificación en Reino Unido, España, Europa continental y Oriente Medio.',
      facts: [
        { label: 'Ubicación', value: 'Palma (Balears), España' },
        { label: 'Idiomas de trabajo', value: 'Inglés · Catalán · Español' },
        { label: 'Ámbito de práctica', value: 'Reino Unido · Europa · Oriente Medio' },
      ],
    },
    contact: {
      heading: 'Contacto',
      intro:
        'Las consultas se atienden directamente sin intermediarios automatizados. Puedes ponerte en contacto por correo electrónico, teléfono o LinkedIn.',
      emailLabel: 'Correo electrónico',
      phoneLabel: 'Teléfono',
      linkedinLabel: 'LinkedIn',
      linkedinAction: 'Perfil en LinkedIn',
      addressLabel: 'Oficina',
      addressValue: 'Carrer Desbach 3, 1r esquerra, Palma (Balears), España',
    },
    footer: {
      copyright: 'FidePath Expert Services',
      tagline: 'Planificación Forense Independiente y Análisis de Retrasos en Construcción',
      legalLinks: {
        legalNotice: 'Aviso legal',
        privacyPolicy: 'Política de privacidad',
        cookiePolicy: 'Política de cookies',
      },
    },
    legalUi: {
      backToHome: 'Volver al inicio',
    },
  },
};
