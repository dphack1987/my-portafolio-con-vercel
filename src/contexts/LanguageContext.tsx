"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    nav: {
      about: "Acerca de",
      projects: "Proyectos",
      contact: "Contacto",
      skills: "Habilidades",
      awards: "Premios"
    },
    hero: {
      title: "David Parra",
      subtitle: "NOMINADO WSA 2026 | Arquitecto de Seguridad Enterprise | Desarrollador Full-Stack",
      award: "🌟 NOMINADO: World Summit Awards 2026 - Categoría Negocios y Comercio",
      cta: "Ver Mis Proyectos"
    },
    about: {
      title: "Acerca de Mí",
      description: "Arquitecto de Seguridad Enterprise y Desarrollador Full-Stack con reconocimiento internacional. NOMINADO AL PREMIO WSA 2026 por salentoalamano.com como la solución digital más innovadora en Negocios y Comercio de Colombia (24ª edición). Experto en arquitecturas de 7 capas enterprise, ELK Stack, Docker/Kubernetes, Machine Learning para seguridad y desarrollo de frameworks. Amplia experiencia en desarrollo de soluciones escalables con impacto real en seguridad y turismo digital.",
      awardHighlight: "Nominación Internacional: WSA 2026 - Categoría Negocios y Comercio"
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
      award: "🌟 NOMINADO WSA 2026"
    },
    awards: {
      title: "Premios y Reconocimientos",
      wsa2026: "World Summit Awards 2026 - 24ª Edición",
      wsaCategory: "Categoría: Negocios y Comercio",
      wsaProject: "Proyecto Nominado: salentoalamano.com",
      wsaDescription: "Nominado como la solución digital más innovadora en Negocios y Comercio de Colombia. Reconocimiento global por el desarrollo de plataformas escalables que conectan miles de turistas con la cultura cafetera colombiana."
    },
    contact: {
      title: "Contáctame",
      name: "Nombre",
      email: "Correo Electrónico",
      message: "Mensaje",
      send: "Enviar Mensaje",
      directContact: "Contacto Directo"
    },
    share: {
      title: "Compartir",
      copied: "¡URL copiada al portapapeles!"
    }
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      skills: "Skills",
      awards: "Awards"
    },
    hero: {
      title: "David Parra",
      subtitle: "WSA 2026 NOMINEE | Enterprise Security Architect | Full-Stack Developer",
      award: "🌟 NOMINEE: World Summit Awards 2026 - Business & Commerce Category",
      cta: "View My Projects"
    },
    about: {
      title: "About Me",
      description: "Enterprise Security Architect and Full-Stack Developer with international recognition. WSA 2026 NOMINEE for salentoalamano.com as the most innovative digital solution in Business & Commerce in Colombia (24th edition). Expert in 7-layer enterprise architectures, ELK Stack, Docker/Kubernetes, Machine Learning for security, and framework development. Extensive experience in developing scalable solutions with real impact on security and digital tourism.",
      awardHighlight: "International Nomination: WSA 2026 - Business & Commerce Category"
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
      award: "🌟 WSA 2026 NOMINEE"
    },
    awards: {
      title: "Awards & Recognition",
      wsa2026: "World Summit Awards 2026 - 24th Edition",
      wsaCategory: "Category: Business & Commerce",
      wsaProject: "Nominated Project: salentoalamano.com",
      wsaDescription: "Nominated as the most innovative digital solution in Business & Commerce in Colombia. Global recognition for developing scalable platforms connecting thousands of tourists with Colombian coffee culture."
    },
    contact: {
      title: "Get in Touch",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      directContact: "Direct Contact"
    },
    share: {
      title: "Share",
      copied: "URL copied to clipboard!"
    }
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
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
