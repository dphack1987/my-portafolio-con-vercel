"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const getProjects = (language: 'en' | 'es') => [
  {
    id: 1,
    title: "Mapa Turístico del Quindío",
    description: language === 'es' 
      ? "Plataforma turística completa para la región del Quindío, con mapas interactivos, atracciones turísticas, hoteles y negocios locales."
      : "A comprehensive tourism platform for the Quindío region, featuring interactive maps, tourist attractions, hotels, and local businesses.",
    details: language === 'es' 
      ? [
          "Integración de mapas interactivos",
          "Gestión de paquetes turísticos",
          "Directorio de negocios integrado",
          "Diseño responsivo para todos los dispositivos"
        ]
      : [
          "Interactive map integration",
          "Tourism package management",
          "Business directory integration",
          "Responsive design for all devices"
        ],
    tools: ["React", "Next.js", "Tailwind CSS", "Interactive Maps"],
    tags: language === 'es' 
      ? ["Desarrollo Web", "Turismo", "UX/UI"]
      : ["Web Development", "Tourism", "UX/UI"],
    link: "https://www.mapaturisticodelquindio.com"
  },
  {
    id: 2,
    title: language === 'es' ? "Análisis de Ciberseguridad & Pruebas de Penetración" : "Cybersecurity Analysis & Penetration Testing",
    description: language === 'es'
      ? "Experto en evaluación de vulnerabilidades y pruebas de penetración para aplicaciones web, redes y sistemas. Especializado en implementación de protocolos de seguridad y forense digital."
      : "Expert in vulnerability assessment and penetration testing for web applications, networks, and systems. Specializing in security protocol implementation and digital forensics.",
    details: language === 'es'
      ? [
          "Implementación de firewalls y sistemas IDS/IPS",
          "Monitoreo y análisis de seguridad de red",
          "Evaluación y remediación de vulnerabilidades",
          "Forense digital y respuesta a incidentes"
        ]
      : [
          "Implementation of firewalls, IDS/IPS systems",
          "Network security monitoring and analysis",
          "Vulnerability assessment and remediation",
          "Digital forensics and incident response"
        ],
    tools: ["Nmap", "Metasploit", "Wireshark", "Burpsuite", "Nessus"],
    tags: language === 'es'
      ? ["Seguridad", "Pruebas de Penetración", "Defensa de Red"]
      : ["Security", "Penetration Testing", "Network Defense"],
    link: "https://github.com/dphack1987"
  },
  {
    id: 3,
    title: language === 'es' ? "Herramientas de Seguridad & Automatización" : "Security Tools & Automation",
    description: language === 'es'
      ? "Desarrollo de herramientas de seguridad personalizadas y scripts de automatización para evaluación de vulnerabilidades y fortalecimiento de sistemas."
      : "Development of custom security tools and automation scripts for vulnerability assessment and system hardening.",
    details: language === 'es'
      ? [
          "Desarrollo de herramientas de seguridad personalizadas",
          "Automatización de procesos de seguridad",
          "Scripts de fortalecimiento de sistemas",
          "Herramientas de cumplimiento de seguridad"
        ]
      : [
          "Custom security tool development",
          "Automation of security processes",
          "System hardening scripts",
          "Security compliance tools"
        ],
    tools: ["Python", "Bash", "Linux", "Security Tools"],
    tags: language === 'es'
      ? ["Desarrollo de Herramientas", "Automatización", "Seguridad"]
      : ["Tool Development", "Automation", "Security"],
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
