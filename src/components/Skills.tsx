"use client";

import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const getSkillCategories = (language: 'en' | 'es') => [
  {
    title: language === 'es' ? "Arquitectura Enterprise & DevOps" : "Enterprise Architecture & DevOps",
    skills: [
      "ELK Stack",
      "Docker",
      "Kubernetes",
      "Apache Kafka",
      "Redis",
      "WSL2",
      "Arquitectura 7 capas"
    ]
  },
  {
    title: language === 'es' ? "Security Operations & Ciberseguridad" : "Security Operations & Cybersecurity",
    skills: [
      "Wazuh SIEM",
      "TheHive",
      "Cortex",
      "MISP",
      "OpenCTI",
      "Threat Intelligence",
      "Nmap",
      "Metasploit",
      "Burpsuite",
      "Wireshark",
      "Nessus",
      "Hydra",
      "Hashcat"
    ]
  },
  {
    title: language === 'es' ? "Machine Learning & AI" : "Machine Learning & AI",
    skills: [
      "Jupyter",
      "MLflow",
      "TensorFlow",
      "PyTorch",
      "Detección de Anomalías",
      "ML para Seguridad"
    ]
  },
  {
    title: language === 'es' ? "Desarrollo Web Full-Stack" : "Full-Stack Web Development",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Java",
      "Python",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Vite"
    ]
  },
  {
    title: language === 'es' ? "SEO & Marketing Digital" : "SEO & Digital Marketing",
    skills: [
      "SEO Optimization",
      "Marketing Digital",
      "Análisis de Rendimiento Web",
      "Estrategias de Posicionamiento"
    ]
  },
  {
    title: language === 'es' ? "Certificaciones" : "Certifications",
    items: [
      {
        name: language === 'es' ? "Certificado EC-Council" : "EC-Council Certified",
        org: "EC-Council",
        date: "2024"
      },
      {
        name: language === 'es' ? "Gestión y Seguridad de Servidores Linux" : "Linux Server Management and Security",
        org: language === 'es' ? "Universidad de Colorado" : "University of Colorado",
        date: "2023"
      },
      {
        name: language === 'es' ? "Introducción a Ataques Cibernéticos" : "Introduction to Cyber Attacks",
        org: language === 'es' ? "NYU Escuela de Ingeniería Tandon" : "NYU Tandon School of Engineering",
        date: "2023"
      }
    ]
  }
];

export default function Skills() {
  const { language, t } = useLanguage();
  const skillCategories = getSkillCategories(language);

  return (
    <section id="skills" className="scroll-mt-20 border-t border-zinc-800 bg-[#0a0a0c] py-24">
      <div className="container mx-auto px-4">
        <div className="relative mb-14">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[9rem] leading-none text-white/[0.04] md:text-[12rem]"
          >
            05
          </span>
          <p className="eyebrow">{"// "}{t('nav.skills')}</p>
          <h2 className="display-hover relative mt-3 font-display text-5xl uppercase leading-none tracking-tight text-white md:text-7xl">
            {t('skills.title')}
          </h2>
          <span className="rule-gold mt-5" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="reveal rounded-none border border-zinc-800 bg-[#0e0e12] p-6 transition-colors hover:border-[#ffd400]"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#ffd400]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl uppercase tracking-wide text-white md:text-2xl">
                  {category.title}
                </h3>
              </div>

              {category.skills ? (
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="border border-zinc-700 px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-zinc-300 transition-colors hover:border-[#ffd400] hover:bg-[#ffd400] hover:text-black"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {category.items?.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-wrap items-baseline justify-between gap-2 border-b border-zinc-800 pb-2 last:border-0"
                    >
                      <p className="font-bold text-white">{item.name}</p>
                      <p className="font-mono text-xs uppercase tracking-widest text-[#ffd400]">
                        {item.org} · {item.date}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
