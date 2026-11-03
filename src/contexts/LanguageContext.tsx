"use client";

import React, { createContext, useContext, useState, useEffect, useSyncExternalStore } from 'react';

type Language = 'es' | 'en';

const es = {
  nav: {
    about: "Acerca de",
    projects: "Proyectos",
    contact: "Contacto",
    skills: "Habilidades",
    awards: "Premios"
  },
  hero: {
    title: "David Parra",
    subtitle: "NOMINADO World Summit Awards 2026 | Arquitecto de Seguridad Enterprise | Desarrollador Full-Stack",
    award: "🌟 NOMINADO: World Summit Awards 2026 - Categoría Negocios y Comercio",
    cta: "Ver Mis Proyectos",
    awardsCta: "Ver Premios",
    role1: "ARQUITECTO DE SEGURIDAD ENTERPRISE",
    role2: "DESARROLLADOR FULL-STACK",
    role3: "NOMINADO WSA 2026"
  },
  about: {
    title: "Acerca de Mí",
    description: "Arquitecto de Seguridad Enterprise y Desarrollador Full-Stack con reconocimiento internacional. NOMINADO AL PREMIO WSA 2026 por salentoalamano.com como la solución digital más innovadora en Negocios y Comercio de Colombia (24ª edición). Experto en arquitecturas de 7 capas enterprise, ELK Stack, Docker/Kubernetes, Machine Learning para seguridad y desarrollo de frameworks. Amplia experiencia en desarrollo de soluciones escalables con impacto real en seguridad y turismo digital.",
    awardHighlight: "Nominación Internacional: WSA 2026 - Categoría Negocios y Comercio",
    contact: "Contacto",
    viewGithub: "Ver Portafolio GitHub"
  },
  skills: {
    title: "Habilidades y Experiencia",
    core: "Competencias Principales",
    technical: "Habilidades Técnicas",
    security: "Herramientas de Seguridad",
    certifications: "Certificaciones"
  },
  projects: {
    title: "Proyectos Destacados",
    viewProject: "Ver Proyecto",
    keyFeatures: "Características Principales",
    toolsUsed: "Herramientas Utilizadas",
    award: "🌟 NOMINADO WSA 2026",
    star: "💎 PROYECTO ESTRELLA"
  },
  awards: {
    title: "Premios y Reconocimientos",
    wsa2026: "World Summit Awards 2026 - 24ª Edición",
    wsaCategory: "Categoría: Negocios y Comercio",
    wsaProject: "Proyecto Nominado: salentoalamano.com",
    wsaDescription: "Nominado como la solución digital más innovadora en Negocios y Comercio de Colombia. Reconocimiento global por el desarrollo de plataformas escalables que conectan miles de turistas con la cultura cafetera colombiana.",
    viewProject: "Ver Proyecto Nominado"
  },
  contact: {
    title: "Contáctame",
    name: "Nombre",
    email: "Correo Electrónico",
    message: "Mensaje",
    send: "Enviar Mensaje",
    directContact: "Contacto Directo",
    emailNotice: "Se abrirá tu aplicación de correo con el mensaje listo para enviar."
  },
  share: {
    title: "Compartir",
    copied: "¡URL copiada al portapapeles!"
  },
  footer: {
    awarded: "PREMIADO:",
    github: "github.com/dphack1987 · 45+ proyectos",
    rights: "© 2026 David Parra. Arquitecto de Seguridad Enterprise."
  },
  metrics: {
    repos: "Repositorios públicos",
    businesses: "Negocios integrados",
    pages: "Páginas pSEO generadas",
    languages: "Idiomas en producción"
  },
  cv: {
    download: "Descargar CV"
  }
} as const;

// `en` debe replicar exactamente las claves de `es` (lo exige el tipo).
const en: {
  [S in keyof typeof es]: {
    [K in keyof (typeof es)[S]]: string;
  };
} = {
  nav: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
    skills: "Skills",
    awards: "Awards"
  },
  hero: {
    title: "David Parra",
    subtitle: "World Summit Awards 2026 NOMINEE | Enterprise Security Architect | Full-Stack Developer",
    award: "🌟 NOMINEE: World Summit Awards 2026 - Business & Commerce Category",
    cta: "View My Projects",
    awardsCta: "View Awards",
    role1: "ENTERPRISE SECURITY ARCHITECT",
    role2: "FULL-STACK DEVELOPER",
    role3: "WSA 2026 NOMINEE"
  },
  about: {
    title: "About Me",
    description: "Enterprise Security Architect and Full-Stack Developer with international recognition. WSA 2026 NOMINEE for salentoalamano.com as the most innovative digital solution in Business & Commerce in Colombia (24th edition). Expert in 7-layer enterprise architectures, ELK Stack, Docker/Kubernetes, Machine Learning for security, and framework development. Extensive experience in developing scalable solutions with real impact on security and digital tourism.",
    awardHighlight: "International Nomination: WSA 2026 - Business & Commerce Category",
    contact: "Contact",
    viewGithub: "View GitHub Portfolio"
  },
  skills: {
    title: "Skills & Expertise",
    core: "Core Competencies",
    technical: "Technical Skills",
    security: "Security Tools",
    certifications: "Certifications"
  },
  projects: {
    title: "Featured Projects",
    viewProject: "View Project",
    keyFeatures: "Key Features",
    toolsUsed: "Tools Used",
    award: "🌟 WSA 2026 NOMINEE",
    star: "💎 STAR PROJECT"
  },
  awards: {
    title: "Awards & Recognition",
    wsa2026: "World Summit Awards 2026 - 24th Edition",
    wsaCategory: "Category: Business & Commerce",
    wsaProject: "Nominated Project: salentoalamano.com",
    wsaDescription: "Nominated as the most innovative digital solution in Business & Commerce in Colombia. Global recognition for developing scalable platforms connecting thousands of tourists with Colombian coffee culture.",
    viewProject: "View Nominated Project"
  },
  contact: {
    title: "Get in Touch",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send Message",
    directContact: "Direct Contact",
    emailNotice: "Your email app will open with the message ready to send."
  },
  share: {
    title: "Share",
    copied: "URL copied to clipboard!"
  },
  footer: {
    awarded: "AWARDED:",
    github: "github.com/dphack1987 · 45+ projects",
    rights: "© 2026 David Parra. Enterprise Security Architect."
  },
  metrics: {
    repos: "Public repositories",
    businesses: "Integrated businesses",
    pages: "Generated pSEO pages",
    languages: "Languages in production"
  },
  cv: {
    download: "Download CV"
  }
};

type Section = keyof typeof es;
type TranslationKey = {
  [S in Section]: (typeof es)[S] extends string
    ? S
    : `${S & string}.${keyof (typeof es)[S] & string}`;
}[Section];

const translations: Record<Language, Record<Section, Record<string, string>>> = {
  es,
  en,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribe(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange);
  return () => window.removeEventListener('storage', onStoreChange);
}

function getSnapshot(): Language {
  return localStorage.getItem('language') === 'en' ? 'en' : 'es';
}

function getServerSnapshot(): Language {
  return 'es';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const stored = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [override, setOverride] = useState<Language | null>(null);
  const language = override ?? stored;

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: TranslationKey): string => {
    const [section, sub] = key.split('.') as [Section, string?];
    const node = translations[language][section];
    if (sub === undefined) {
      return typeof node === 'string' ? node : key;
    }
    const value = (node as Record<string, string | undefined>)[sub];
    return value ?? key;
  };

  const handleSetLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    setOverride(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
