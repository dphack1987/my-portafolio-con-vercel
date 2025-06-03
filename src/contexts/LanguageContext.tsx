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
      skills: "Habilidades"
    },
    hero: {
      title: "David Parra",
      subtitle: "Especialista en Ciberseguridad | Desarrollador Full-Stack | Investigador de Seguridad",
      cta: "Conoce más"
    },
    about: {
      title: "Acerca de Mí",
      description: "Desarrollador Full-Stack y Especialista en Ciberseguridad con experiencia en el desarrollo de aplicaciones seguras y escalables. Especializado en pruebas de penetración, evaluación de vulnerabilidades y desarrollo de aplicaciones seguras."
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
      toolsUsed: "Herramientas Utilizadas"
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
      skills: "Skills"
    },
    hero: {
      title: "David Parra",
      subtitle: "Cybersecurity Specialist | Full-Stack Developer | Security Researcher",
      cta: "Learn More"
    },
    about: {
      title: "About Me",
      description: "Full-Stack Developer and Cybersecurity Specialist with expertise in developing secure, scalable applications. Specializing in penetration testing, vulnerability assessment, and secure application development."
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
      toolsUsed: "Tools Used"
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
