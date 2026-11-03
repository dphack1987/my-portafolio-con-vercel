"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const getProjects = (language: 'en' | 'es') => [
  {
    id: 1,
    title: language === 'es' ? "Salento a la Mano - PREMIADO" : "Salento a la Mano - AWARD WINNER",
    description: language === 'es'
      ? "GANADOR DEL PREMIO MEJOR PROYECTO DIGITAL COLOMBIA 2026 - Categoría Comercial y de Negocios. Plataforma de turismo digital líder con 70+ negocios verificados, guía bilingüe ES/EN y SEO avanzado."
      : "WINNER OF BEST DIGITAL PROJECT COLOMBIA 2026 - Commercial and Business Category. Leading digital tourism platform with 70+ verified businesses, bilingual guide ES/EN and advanced SEO.",
    details: language === 'es'
      ? [
          "PREMIADO Mejor Proyecto Digital Colombia 2026",
          "70+ negocios integrados verificados",
          "Guía bilingüe Español/Inglés",
          "SEO avanzado con posicionamiento orgánico",
          "545+ commits de desarrollo",
          "2,500+ palmas de cera protegidas",
          "15 km de senderos mantenidos"
        ]
      : [
          "AWARDED Best Digital Project Colombia 2026",
          "70+ integrated verified businesses",
          "Bilingual guide Spanish/English",
          "Advanced SEO with organic positioning",
          "545+ development commits",
          "2,500+ wax palms protected",
          "15 km of maintained trails"
        ],
    tools: ["React", "Next.js", "TypeScript", "SEO", "CI/CD"],
    tags: language === 'es'
      ? ["Premiado", "Turismo Digital", "SEO", "React"]
      : ["Award Winner", "Digital Tourism", "SEO", "React"],
    link: "https://www.salentoalamano.com"
  },
  {
    id: 2,
    title: "Filandia a la Mano",
    description: language === 'es'
      ? "Plataforma de turismo digital para Filandia, Quindío con tecnología moderna, mapa interactivo y SEO optimization."
      : "Digital tourism platform for Filandia, Quindío with modern technology, interactive map and SEO optimization.",
    details: language === 'es'
      ? [
          "Plataforma de turismo digital moderna",
          "Mapa interactivo avanzado",
          "SEO optimization",
          "Integración local de negocios"
        ]
      : [
          "Modern digital tourism platform",
          "Advanced interactive map",
          "SEO optimization",
          "Local business integration"
        ],
    tools: ["TypeScript", "Next.js", "React", "SEO"],
    tags: language === 'es'
      ? ["Turismo Digital", "TypeScript", "Next.js"]
      : ["Digital Tourism", "TypeScript", "Next.js"],
    link: "https://github.com/dphack1987/filandialamano.com"
  },
  {
    id: 3,
    title: "Quindio Travel",
    description: language === 'es'
      ? "Portal de turismo del Quindío con marketing digital y SEO avanzado. Integración de múltiples municipios."
      : "Quindío tourism portal with digital marketing and advanced SEO. Integration of multiple municipalities.",
    details: language === 'es'
      ? [
          "Portal completo de turismo regional",
          "Marketing digital avanzado",
          "SEO optimization",
          "Integración de múltiples municipios"
        ]
      : [
          "Complete regional tourism portal",
          "Advanced digital marketing",
          "SEO optimization",
          "Multiple municipality integration"
        ],
    tools: ["HTML", "CSS", "JavaScript", "SEO", "Marketing Digital"],
    tags: language === 'es'
      ? ["Turismo", "SEO", "Marketing Digital"]
      : ["Tourism", "SEO", "Digital Marketing"],
    link: "https://quindiotravel.com.co"
  },
  {
    id: 4,
    title: "CyberArma Framework",
    description: language === 'es'
      ? "Framework profesional de evaluación de seguridad con integración multi-herramienta enterprise. 1,000+ líneas de código Python."
      : "Professional security assessment framework with multi-tool enterprise integration. 1,000+ lines of Python code.",
    details: language === 'es'
      ? [
          "1,000+ líneas de código Python",
          "Integración multi-herramienta",
          "Framework de seguridad enterprise",
          "Documentación técnica completa",
          "100+ herramientas de seguridad"
        ]
      : [
          "1,000+ lines of Python code",
          "Multi-tool integration",
          "Enterprise security framework",
          "Complete technical documentation",
          "100+ security tools"
        ],
    tools: ["Python", "Bash", "Security", "System Integration"],
    tags: language === 'es'
      ? ["Ciberseguridad", "Python", "Framework"]
      : ["Cybersecurity", "Python", "Framework"],
    link: "https://github.com/dphack1987/weapon"
  },
  {
    id: 5,
    title: "Antidron System",
    description: language === 'es'
      ? "Sistema de detección y neutralización de drones con tecnología avanzada (2026). Aplicaciones en seguridad y defensa."
      : "Drone detection and neutralization system with advanced technology (2026). Security and defense applications.",
    details: language === 'es'
      ? [
          "Detección de drones",
          "Neutralización automatizada",
          "Integración hardware/software",
          "Tecnología de seguridad avanzada"
        ]
      : [
          "Drone detection",
          "Automated neutralization",
          "Hardware/software integration",
          "Advanced security technology"
        ],
    tools: ["Electrónica", "Software", "Python", "Hardware"],
    tags: language === 'es'
      ? ["Seguridad", "Electrónica", "Hardware"]
      : ["Security", "Electronics", "Hardware"],
    link: "https://github.com/dphack1987/antidron"
  },
  {
    id: 6,
    title: language === 'es' ? "Arquitectura Enterprise Security" : "Enterprise Security Architecture",
    description: language === 'es'
      ? "Sistema distribuido de alto rendimiento para 1000+ objetivos con ML y threat intelligence. Arquitectura de 7 capas."
      : "High-performance distributed system for 1000+ targets with ML and threat intelligence. 7-layer architecture.",
    details: language === 'es'
      ? [
          "Arquitectura de 7 capas enterprise",
          "ELK Stack, Docker, Kubernetes",
          "Apache Kafka, Redis",
          "Machine Learning para seguridad",
          "1000+ objetivos simultáneos"
        ]
      : [
          "7-layer enterprise architecture",
          "ELK Stack, Docker, Kubernetes",
          "Apache Kafka, Redis",
          "Machine Learning for security",
          "1000+ simultaneous targets"
        ],
    tools: ["ELK Stack", "Docker", "Kubernetes", "Kafka", "Redis", "ML"],
    tags: language === 'es'
      ? ["Arquitectura", "DevOps", "ML", "Security"]
      : ["Architecture", "DevOps", "ML", "Security"],
    link: "https://github.com/dphack1987"
  }
];

export default function Projects() {
  const { language, t } = useLanguage();
  const projects = getProjects(language);
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="space-y-4 mt-auto">
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">{t('projects.keyFeatures')}:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {project.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">{t('projects.toolsUsed')}:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button asChild variant="outline" className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {t('projects.viewProject')}
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
