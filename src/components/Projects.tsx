"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const getProjects = (language: 'en' | 'es') => [
  {
    id: 1,
    title: language === 'es' ? "💎 Salento a la Mano - NOMINADO WSA 2026" : "💎 Salento a la Mano - WSA 2026 NOMINEE",
    description: language === 'es'
      ? "PROYECTO ESTRELLA - NOMINADO AL PREMIO World Summit Awards 2026 como la solución digital más innovadora en Negocios y Comercio de Colombia (24ª edición). Plataforma de turismo digital enterprise con 70+ negocios verificados, arquitectura escalable y SEO avanzado que posiciona orgánicamente en Google."
      : "STAR PROJECT - WSA 2026 NOMINEE as the most innovative digital solution in Business & Commerce in Colombia (24th edition). Enterprise digital tourism platform with 70+ verified businesses, scalable architecture and advanced SEO with organic Google positioning.",
    details: language === 'es'
      ? [
          "🏆 NOMINADO World Summit Awards 2026 - Negocios y Comercio",
          "🏗️ Arquitectura escalable enterprise (Next.js + TypeScript)",
          "🎯 SEO avanzado con posicionamiento orgánico top 10",
          "🌍 70+ negocios integrados verificados",
          "📱 Guía bilingüe Español/Inglés",
          "💳 Sistema de reservas y pagos integrados",
          "🗺️ Mapa interactivo con geolocalización",
          "⚡ CI/CD pipeline para despliegues continuos"
        ]
      : [
          "🏆 NOMINATED World Summit Awards 2026 - Business & Commerce",
          "🏗️ Scalable enterprise architecture (Next.js + TypeScript)",
          "🎯 Advanced SEO with organic top 10 positioning",
          "🌍 70+ integrated verified businesses",
          "📱 Bilingual guide Spanish/English",
          "💳 Booking and payment integration system",
          "🗺️ Interactive map with geolocation",
          "⚡ CI/CD pipeline for continuous deployments"
        ],
    tools: ["Next.js", "TypeScript", "React", "SEO Enterprise", "CI/CD", "API Integration", "Geolocation"],
    tags: language === 'es'
      ? ["🏆 Joya del Portafolio", "WSA 2026", "Enterprise Architecture", "SEO"]
      : ["🏆 Portfolio Gem", "WSA 2026", "Enterprise Architecture", "SEO"],
    link: "https://www.salentoalamano.com",
    award: true,
    featured: true,
    image: "https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 2,
    title: language === 'es' ? "🏗️ Filandia a la Mano - En Construcción" : "🏗️ Filandia a la Mano - Under Construction",
    description: language === 'es'
      ? "Plataforma de turismo digital enterprise para Filandia, Quindío. Implementación de arquitectura moderna con TypeScript, integración de mapas interactivos y optimización SEO. Demostración de habilidades en desarrollo full-stack escalable."
      : "Enterprise digital tourism platform for Filandia, Quindío. Modern architecture implementation with TypeScript, interactive map integration and SEO optimization. Demonstration of scalable full-stack development skills.",
    details: language === 'es'
      ? [
          "🚧 En construcción activo",
          "⚛️ Desarrollo con React y Next.js",
          "📘 TypeScript para type safety",
          "🎨 Tailwind CSS para diseño responsivo",
          "🗺️ Integración de mapas interactivos",
          "📊 SEO optimization técnica",
          "🔗 API RESTful para integración de datos"
        ]
      : [
          "🚧 Active construction",
          "⚛️ React and Next.js development",
          "📘 TypeScript for type safety",
          "🎨 Tailwind CSS for responsive design",
          "🗺️ Interactive map integration",
          "📊 Technical SEO optimization",
          "🔗 RESTful API for data integration"
        ],
    tools: ["TypeScript", "Next.js", "React", "Tailwind CSS", "REST API", "Maps API"],
    tags: language === 'es'
      ? ["Full-Stack", "TypeScript", "Next.js", "En Construcción"]
      : ["Full-Stack", "TypeScript", "Next.js", "Under Construction"],
    link: "https://github.com/dphack1987/filandialamano.com",
    construction: true,
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 3,
    title: language === 'es' ? "🌐 Quindio Travel - Portal Regional" : "🌐 Quindio Travel - Regional Portal",
    description: language === 'es'
      ? "Portal de turismo regional del Quindío con integración de múltiples municipios. Desarrollo frontend avanzado con HTML5, CSS3 y JavaScript vanilla. Implementación de estrategias de marketing digital y SEO técnico para visibilidad regional."
      : "Regional tourism portal for Quindío with multiple municipality integration. Advanced frontend development with HTML5, CSS3 and vanilla JavaScript. Implementation of digital marketing strategies and technical SEO for regional visibility.",
    details: language === 'es'
      ? [
          "📊 Analytics y tracking de usuarios",
          "🎨 Diseño responsivo cross-browser",
          "⚡ Optimización de rendimiento web",
          "🔍 SEO técnico on-page",
          "📱 Mobile-first responsive design",
          "🎯 Estrategias de marketing digital",
          "🔗 Integración con redes sociales"
        ]
      : [
          "📊 User analytics and tracking",
          "🎨 Cross-browser responsive design",
          "⚡ Web performance optimization",
          "🔍 Technical on-page SEO",
          "📱 Mobile-first responsive design",
          "🎯 Digital marketing strategies",
          "🔗 Social media integration"
        ],
    tools: ["HTML5", "CSS3", "JavaScript ES6+", "Web Performance", "Analytics", "SEO"],
    tags: language === 'es'
      ? ["Frontend", "SEO", "Marketing Digital", "Performance"]
      : ["Frontend", "SEO", "Digital Marketing", "Performance"],
    link: "https://quindiotravel.com.co",
    image: "https://images.pexels.com/photos/322800/pexels-photo-322800.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 4,
    title: language === 'es' ? "🛡️ CyberArma Framework - Enterprise Security" : "🛡️ CyberArma Framework - Enterprise Security",
    description: language === 'es'
      ? "Framework profesional de evaluación de seguridad con integración multi-herramienta enterprise. Desarrollo en Python con 1,000+ líneas de código para automatización de pentesting y escaneo de vulnerabilidades. Demostración de habilidades en scripting, automatización y ciberseguridad ofensiva."
      : "Professional security assessment framework with multi-tool enterprise integration. Python development with 1,000+ lines of code for pentesting automation and vulnerability scanning. Demonstration of scripting, automation and offensive cybersecurity skills.",
    details: language === 'es'
      ? [
          "🐍 Python avanzado con scripting de seguridad",
          "🔧 Automatización de herramientas de pentesting",
          "📊 Generación de reportes de vulnerabilidades",
          "🔍 Escaneo automatizado de puertos y servicios",
          "🤖 Integración con Nmap, Metasploit, Burpsuite",
          "📝 Documentación técnica completa",
          "⚙️ Configuración modular y extensible"
        ]
      : [
          "🐍 Advanced Python security scripting",
          "🔧 Pentesting tool automation",
          "📊 Vulnerability report generation",
          "🔍 Automated port and service scanning",
          "🤖 Integration with Nmap, Metasploit, Burpsuite",
          "📝 Complete technical documentation",
          "⚙️ Modular and extensible configuration"
        ],
    tools: ["Python Advanced", "Bash Scripting", "Nmap", "Metasploit", "Burpsuite", "Automation"],
    tags: language === 'es'
      ? ["Ciberseguridad", "Python", "Pentesting", "Automation"]
      : ["Cybersecurity", "Python", "Pentesting", "Automation"],
    link: "https://github.com/dphack1987/weapon",
    image: "https://images.pexels.com/photos/5380666/pexels-photo-5380666.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 5,
    title: language === 'es' ? "🚁 Antidron System - Hardware/Software Integration" : "🚁 Antidron System - Hardware/Software Integration",
    description: language === 'es'
      ? "Sistema de detección y neutralización de drones con tecnología avanzada (2026). Integración hardware/software para aplicaciones en seguridad y defensa. Desarrollo en Python con sensores electrónica y firmware. Demostración de habilidades en sistemas embebidos, IoT y seguridad física."
      : "Drone detection and neutralization system with advanced technology (2026). Hardware/software integration for security and defense applications. Python development with electronic sensors and firmware. Demonstration of embedded systems, IoT and physical security skills.",
    details: language === 'es'
      ? [
          "🎯 Detección y tracking de drones en tiempo real",
          "⚡ Neutralización automatizada con señales RF",
          "🔌 Integración hardware/software con microcontroladores",
          "🐍 Python para control de sensores y actuadores",
          "📡 Comunicación RF y protocolos inalámbricos",
          "🛡️ Aplicaciones en seguridad física y defensa",
          "🔬 Pruebas de laboratorio y field testing"
        ]
      : [
          "🎯 Real-time drone detection and tracking",
          "⚡ Automated neutralization with RF signals",
          "🔌 Hardware/software integration with microcontrollers",
          "🐍 Python for sensor and actuator control",
          "📡 RF communication and wireless protocols",
          "🛡️ Physical security and defense applications",
          "🔬 Laboratory testing and field testing"
        ],
    tools: ["Python", "Electronics", "Microcontrollers", "RF Systems", "IoT", "Sensors"],
    tags: language === 'es'
      ? ["IoT", "Hardware", "Python", "Seguridad Física"]
      : ["IoT", "Hardware", "Python", "Physical Security"],
    link: "https://github.com/dphack1987/antidron",
    image: "https://images.pexels.com/photos/2589256/pexels-photo-2589256.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 6,
    title: language === 'es' ? "🏛️ Arquitectura Enterprise Security - 7 Capas" : "🏛️ Enterprise Security Architecture - 7 Layers",
    description: language === 'es'
      ? "Sistema distribuido de alto rendimiento para 1000+ objetivos con Machine Learning y threat intelligence. Implementación de arquitectura de 7 capas enterprise con ELK Stack, Docker, Kubernetes, Apache Kafka y Redis. Demostración de habilidades en DevOps, arquitectura de sistemas y monitoreo de seguridad a escala."
      : "High-performance distributed system for 1000+ targets with Machine Learning and threat intelligence. Implementation of 7-layer enterprise architecture with ELK Stack, Docker, Kubernetes, Apache Kafka and Redis. Demonstration of DevOps, system architecture and security monitoring at scale skills.",
    details: language === 'es'
      ? [
          "🏗️ Arquitectura de 7 capas enterprise",
          "🐳 Docker y Kubernetes para orquestración",
          "📊 ELK Stack para logging y análisis",
          "⚡ Apache Kafka para streaming de eventos",
          "💾 Redis para caching de alta velocidad",
          "🤖 Machine Learning para detección de anomalías",
          "📈 Threat intelligence en tiempo real",
          "🚀 1000+ objetivos monitoreados simultáneamente"
        ]
      : [
          "🏗️ 7-layer enterprise architecture",
          "🐳 Docker and Kubernetes for orchestration",
          "📊 ELK Stack for logging and analysis",
          "⚡ Apache Kafka for event streaming",
          "💾 Redis for high-speed caching",
          "🤖 Machine Learning for anomaly detection",
          "📈 Real-time threat intelligence",
          "🚀 1000+ simultaneous monitored targets"
        ],
    tools: ["Docker", "Kubernetes", "ELK Stack", "Kafka", "Redis", "Machine Learning", "DevOps"],
    tags: language === 'es'
      ? ["DevOps", "Enterprise Architecture", "ML", "Kubernetes"]
      : ["DevOps", "Enterprise Architecture", "ML", "Kubernetes"],
    link: "https://github.com/dphack1987",
    image: "https://images.pexels.com/photos/1555922/pexels-photo-1555922.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 7,
    title: language === 'es' ? "🎯 ApexStrike - Pentesting Tool" : "🎯 ApexStrike - Pentesting Tool",
    description: language === 'es'
      ? "Herramienta profesional de pentesting para evaluación de vulnerabilidades en aplicaciones web. Desarrollo en TypeScript con análisis automatizado de seguridad, testing de autenticación y reportes detallados. Demostración de habilidades en pruebas de penetración, análisis de seguridad y desarrollo de herramientas defensivas."
      : "Professional penetration testing tool for web application vulnerability assessment. TypeScript development with automated security analysis, authentication testing and detailed reports. Demonstration of penetration testing, security analysis and defensive tool development skills.",
    details: language === 'es'
      ? [
          "🔍 Análisis automatizado de vulnerabilidades OWASP Top 10",
          "🌐 Testing de aplicaciones web (XSS, SQLi, CSRF)",
          "🔐 Evaluación de autenticación y autorización",
          "📊 Reportes detallados con recomendaciones de remediation",
          "⚙️ Integración con herramientas de seguridad (Burpsuite, OWASP ZAP)",
          "🛡️ Testing de seguridad API RESTful",
          "🚨 Scanning de configuraciones inseguras"
        ]
      : [
          "🔍 Automated OWASP Top 10 vulnerability analysis",
          "🌐 Web application testing (XSS, SQLi, CSRF)",
          "🔐 Authentication and authorization evaluation",
          "📊 Detailed reports with remediation recommendations",
          "⚙️ Security tool integration (Burpsuite, OWASP ZAP)",
          "🛡️ RESTful API security testing",
          "🚨 Insecure configuration scanning"
        ],
    tools: ["TypeScript", "OWASP", "Web Security", "API Security", "Burpsuite", "OWASP ZAP"],
    tags: language === 'es'
      ? ["Pentesting", "Web Security", "TypeScript", "OWASP"]
      : ["Pentesting", "Web Security", "TypeScript", "OWASP"],
    link: "https://github.com/dphack1987/ApexStrike",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    id: 8,
    title: language === 'es' ? "⚔️ Zenythos Sword - Threat Intelligence" : "⚔️ Zenythos Sword - Threat Intelligence",
    description: language === 'es'
      ? "Framework de seguridad para análisis y mitigación de amenazas en tiempo real. Desarrollo en Python con herramientas avanzadas de monitoreo, integración SIEM y alertas inteligentes. Demostración de habilidades en threat intelligence, SOC operations y respuesta a incidentes."
      : "Security framework for real-time threat analysis and mitigation. Python development with advanced monitoring tools, SIEM integration and intelligent alerts. Demonstration of threat intelligence, SOC operations and incident response skills.",
    details: language === 'es'
      ? [
          "🔍 Análisis de amenazas en tiempo real",
          "🤖 Mitigación automatizada de riesgos",
          "📊 Monitoreo de actividad sospechosa 24/7",
          "🔗 Integración con SIEM (Wazuh, Splunk)",
          "🚨 Alertas inteligentes con ML",
          "📈 Dashboards de seguridad en tiempo real",
          "🛡️ Response automation para incidentes",
          "🔬 Forense digital y log analysis"
        ]
      : [
          "🔍 Real-time threat analysis",
          "🤖 Automated risk mitigation",
          "📊 24/7 suspicious activity monitoring",
          "🔗 SIEM integration (Wazuh, Splunk)",
          "🚨 Intelligent ML-powered alerts",
          "📈 Real-time security dashboards",
          "🛡️ Incident response automation",
          "🔬 Digital forensics and log analysis"
        ],
    tools: ["Python", "SIEM", "Wazuh", "Splunk", "Threat Intelligence", "Incident Response"],
    tags: language === 'es'
      ? ["Threat Intelligence", "SOC", "SIEM", "Python"]
      : ["Threat Intelligence", "SOC", "SIEM", "Python"],
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
            <Card key={project.id} className={`p-6 hover:shadow-lg transition-shadow duration-300 ${project.award ? 'border-4 border-yellow-400 shadow-xl' : ''} ${project.construction ? 'border-4 border-gray-400' : ''} ${project.featured ? 'col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-yellow-50 to-orange-50' : ''}`}>
              <div className="flex flex-col h-full">
                {project.image && (
                  <div className={`relative ${project.featured ? 'h-64' : 'h-48'} mb-4 rounded-lg overflow-hidden`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {project.featured && (
                  <div className="mb-3">
                    <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold animate-pulse">
                      💎 PROYECTO ESTRELLA
                    </span>
                  </div>
                )}
                {project.award && !project.featured && (
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
                <h3 className={`font-semibold mb-3 ${project.featured ? 'text-2xl' : 'text-xl'}`}>{project.title}</h3>
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
