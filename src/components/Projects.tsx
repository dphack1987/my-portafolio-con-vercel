"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const getProjects = (language: 'en' | 'es') => [
  {
    id: 1,
    title: language === 'es' ? "Salento a la Mano - NOMINADO WSA 2026" : "Salento a la Mano - WSA 2026 NOMINEE",
    description: language === 'es'
      ? "NOMINADO AL PREMIO WSA 2026 como la solución digital más innovadora en Negocios y Comercio de Colombia (24ª edición). Plataforma de turismo digital líder con 70+ negocios verificados, guía bilingüe ES/EN y SEO avanzado."
      : "WSA 2026 NOMINEE as the most innovative digital solution in Business & Commerce in Colombia (24th edition). Leading digital tourism platform with 70+ verified businesses, bilingual guide ES/EN and advanced SEO.",
    details: language === 'es'
      ? [
          "🌟 NOMINADO WSA 2026 - Categoría Negocios y Comercio",
          "70+ negocios integrados verificados",
          "Guía bilingüe Español/Inglés",
          "SEO avanzado con posicionamiento orgánico",
          "Sistema de reservas en tiempo real",
          "Integración con pagos electrónicos",
          "Mapa interactivo de la región"
        ]
      : [
          "🌟 WSA 2026 NOMINEE - Business & Commerce Category",
          "70+ integrated verified businesses",
          "Bilingual guide Spanish/English",
          "Advanced SEO with organic positioning",
          "Real-time booking system",
          "Electronic payment integration",
          "Interactive regional map"
        ],
    tools: ["React", "Next.js", "TypeScript", "SEO", "CI/CD"],
    tags: language === 'es'
      ? ["WSA 2026 NOMINADO", "Turismo Digital", "SEO", "React"]
      : ["WSA 2026 NOMINEE", "Digital Tourism", "SEO", "React"],
    link: "https://www.salentoalamano.com",
    award: true,
    image: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: language === 'es' ? "Filandia a la Mano - En Construcción" : "Filandia a la Mano - Under Construction",
    description: language === 'es'
      ? "Plataforma de turismo digital para Filandia, Quindío con tecnología moderna, mapa interactivo y SEO optimization. Proyecto actualmente en desarrollo."
      : "Digital tourism platform for Filandia, Quindío with modern technology, interactive map and SEO optimization. Currently under development.",
    details: language === 'es'
      ? [
          "🚧 En construcción",
          "Plataforma de turismo digital moderna",
          "Mapa interactivo avanzado",
          "SEO optimization",
          "Integración local de negocios"
        ]
      : [
          "🚧 Under Construction",
          "Modern digital tourism platform",
          "Advanced interactive map",
          "SEO optimization",
          "Local business integration"
        ],
    tools: ["TypeScript", "Next.js", "React", "SEO"],
    tags: language === 'es'
      ? ["En Construcción", "Turismo Digital", "TypeScript"]
      : ["Under Construction", "Digital Tourism", "TypeScript"],
    link: "https://github.com/dphack1987/filandialamano.com",
    construction: true,
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
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
    link: "https://quindiotravel.com.co",
    image: "https://images.pexels.com/photos/322800/pexels-photo-322800.jpeg?auto=compress&cs=tinysrgb&w=800"
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
    link: "https://github.com/dphack1987/weapon",
    image: "https://images.pexels.com/photos/5380666/pexels-photo-5380666.jpeg?auto=compress&cs=tinysrgb&w=800"
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
    link: "https://github.com/dphack1987/antidron",
    image: "https://images.pexels.com/photos/2589256/pexels-photo-2589256.jpeg?auto=compress&cs=tinysrgb&w=800"
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
    link: "https://github.com/dphack1987",
    image: "https://images.pexels.com/photos/1555922/pexels-photo-1555922.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 7,
    title: "ApexStrike",
    description: language === 'es'
      ? "Herramienta de pentesting para evaluación de vulnerabilidades en aplicaciones web. Análisis automatizado de seguridad."
      : "Penetration testing tool for web application vulnerability assessment. Automated security analysis.",
    details: language === 'es'
      ? [
          "Análisis automatizado de vulnerabilidades",
          "Evaluación de seguridad web",
          "Reportes detallados de hallazgos",
          "Integración con herramientas de seguridad",
          "Testing de autenticación y autorización"
        ]
      : [
          "Automated vulnerability analysis",
          "Web security assessment",
          "Detailed finding reports",
          "Security tool integration",
          "Authentication and authorization testing"
        ],
    tools: ["TypeScript", "Security", "Web Testing", "Penetration Testing"],
    tags: language === 'es'
      ? ["Pentesting", "Seguridad Web", "TypeScript"]
      : ["Pentesting", "Web Security", "TypeScript"],
    link: "https://github.com/dphack1987/ApexStrike",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 8,
    title: "Zenythos Sword",
    description: language === 'es'
      ? "Framework de seguridad para análisis y mitigación de amenazas. Herramientas avanzadas de monitoreo y respuesta."
      : "Security framework for threat analysis and mitigation. Advanced monitoring and response tools.",
    details: language === 'es'
      ? [
          "Análisis de amenazas en tiempo real",
          "Mitigación automatizada de riesgos",
          "Monitoreo de actividad sospechosa",
          "Integración con SIEM",
          "Alertas inteligentes"
        ]
      : [
          "Real-time threat analysis",
          "Automated risk mitigation",
          "Suspicious activity monitoring",
          "SIEM integration",
          "Intelligent alerts"
        ],
    tools: ["Python", "Security", "Threat Analysis", "Monitoring"],
    tags: language === 'es'
      ? ["Seguridad", "Threat Analysis", "Python"]
      : ["Security", "Threat Analysis", "Python"],
    link: "https://github.com/dphack1987/zenythos-sword",
    image: "https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=800"
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
            <Card key={project.id} className={`p-6 hover:shadow-lg transition-shadow duration-300 ${project.award ? 'border-4 border-yellow-400' : ''} ${project.construction ? 'border-4 border-gray-400' : ''}`}>
              <div className="flex flex-col h-full">
                {project.image && (
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {project.award && (
                  <div className="mb-3">
                    <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      {t('projects.award')}
                    </span>
                  </div>
                )}
                {project.construction && (
                  <div className="mb-3">
                    <span className="inline-block bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                      🚧 {language === 'es' ? 'En Construcción' : 'Under Construction'}
                    </span>
                  </div>
                )}
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
