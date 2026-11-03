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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('skills.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <Card key={idx} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              {category.skills ? (
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {category.items?.map((item, itemIdx) => (
                    <div key={itemIdx} className="border-b pb-2 last:border-0">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        {item.org} • {item.date}
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
