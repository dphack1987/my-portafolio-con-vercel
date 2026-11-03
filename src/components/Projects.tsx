"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  details: string[];
  tools: string[];
  tags: string[];
  link: string;
  link2?: string;
  link2Label?: string;
  award?: boolean;
  featured?: boolean;
  construction?: boolean;
  image?: string;
  imageAlt?: string;
};

const getProjects = (language: 'en' | 'es'): Project[] => [
  {
    id: 1,
    title: language === 'es' ? "Salento a la Mano - NOMINADO WSA 2026" : "Salento a la Mano - WSA 2026 NOMINEE",
    description: language === 'es'
      ? "PROYECTO ESTRELLA - Nominado al World Summit Awards 2026 (Negocios y Comercio, Colombia). Plataforma turística de Salento, Quindío: mapa interactivo con Leaflet, pedidos directos por WhatsApp, reseñas verificadas y modo offline para el Valle de Cocora. Multi-idioma (ES/EN/FR/DE/PT/IT), multi-moneda y SEO defensivo en producción."
      : "STAR PROJECT - WSA 2026 NOMINEE (Business & Commerce, Colombia). Tourism platform for Salento, Quindío: interactive Leaflet map, direct WhatsApp ordering, verified reviews and offline mode for Valle de Cocora. Multi-language (ES/EN/FR/DE/PT/IT), multi-currency and defensive SEO in production.",
    details: language === 'es'
      ? [
          "🏆 Nominado World Summit Awards 2026",
          "🗺️ Mapa interactivo con Leaflet y geolocalización",
          "📴 Modo offline total para Valle de Cocora (PWA)",
          "💬 Pedidos directos por WhatsApp + reseñas",
          "🌍 6 idiomas y multi-moneda (COP/USD/EUR)",
          "🛡️ SEO defensivo contra desinformación"
        ]
      : [
          "🏆 WSA 2026 NOMINEE",
          "🗺️ Interactive map with Leaflet geolocation",
          "📴 Full offline mode for Valle de Cocora (PWA)",
          "💬 Direct WhatsApp ordering + reviews",
          "🌍 6 languages and multi-currency (COP/USD/EUR)",
          "🛡️ Defensive SEO against disinformation"
        ],
    tools: ["React 18", "Vite", "TypeScript", "Leaflet", "PWA", "SEO"],
    tags: language === 'es'
      ? ["🏆 Joya del Portafolio", "WSA 2026", "Turismo Digital", "PWA"]
      : ["🏆 Portfolio Gem", "WSA 2026", "Digital Tourism", "PWA"],
    link: "https://www.salentoalamano.com",
    award: true,
    featured: true,
    image: "/media/logo-salentoalamano.com.webp",
    imageAlt: language === 'es' ? "Sello Salento a la Mano" : "Salento a la Mano seal",
  },
  {
    id: 2,
    title: language === 'es' ? "Quindío Travel - Portal Turístico" : "Quindío Travel - Tourism Portal",
    description: language === 'es'
      ? "Agencia de viajes del Eje Cafetero (RNT 18152). Frontend vanilla sin frameworks con SEO avanzado: Schema.org, hreflang ES/EN/ZH, Core Web Vitals, 30 artículos y 112 páginas pSEO generadas por script. Motor de cotización con precios en JSON y chatbot IA con fallback local."
      : "Travel agency for the Colombian Coffee Axis (RNT 18152). Vanilla frontend without frameworks plus advanced SEO: Schema.org, ES/EN/ZH hreflang, Core Web Vitals, 30 articles and 112 script-generated pSEO pages. Quote engine with JSON pricing and AI chatbot with local fallback.",
    details: language === 'es'
      ? [
          "📊 112 páginas pSEO + 30 artículos generados",
          "🔍 Schema.org, sitemap, hreflang ES/EN/ZH",
          "⚡ Core Web Vitals optimizados",
          "💰 Motor de cotización con tarifas en JSON",
          "🤖 Chatbot IA 'Don Chucho' con fallback local",
          "🖼️ 480 imágenes optimizadas"
        ]
      : [
          "📊 112 pSEO pages + 30 generated articles",
          "🔍 Schema.org, sitemap, ES/EN/ZH hreflang",
          "⚡ Optimized Core Web Vitals",
          "💰 Quote engine with JSON pricing",
          "🤖 'Don Chucho' AI chatbot with local fallback",
          "🖼️ 480 optimized images"
        ],
    tools: ["HTML5", "CSS3", "JavaScript", "Schema.org", "GitHub Actions", "SEO"],
    tags: language === 'es'
      ? ["Frontend", "SEO", "pSEO", "Performance"]
      : ["Frontend", "SEO", "pSEO", "Performance"],
    link: "https://quindiotravel.com.co",
  },
  {
    id: 3,
    title: language === 'es' ? "Mapa Turístico del Quindío" : "Quindío Tourist Map",
    description: language === 'es'
      ? "Plataforma programática que genera cientos de páginas turísticas por municipio con scripts Node: validación de datos maestros, generación de GeoJSON, sitemaps y verificación automática de canonicals. Arquitectura de internal linking documentada y headers de seguridad HSTS."
      : "Programmatic platform generating hundreds of municipality tourism pages via Node scripts: master data validation, GeoJSON generation, sitemaps and automatic canonical verification. Documented internal linking architecture and HSTS security headers.",
    details: language === 'es'
      ? [
          "⚙️ Generador programático de páginas (pSEO)",
          "🗺️ GeoJSON + sitemaps generados por script",
          "✅ Validación de datos y canonicals automatizada",
          "🔗 Arquitectura de internal linking documentada",
          "🔒 Headers de seguridad HSTS + X-Content-Type-Options",
          "📄 Informes técnicos de SEO y diagnóstico GSC"
        ]
      : [
          "⚙️ Programmatic page generator (pSEO)",
          "🗺️ Script-generated GeoJSON + sitemaps",
          "✅ Automated data and canonical validation",
          "🔗 Documented internal linking architecture",
          "🔒 HSTS + X-Content-Type-Options security headers",
          "📄 Technical SEO and GSC diagnostic reports"
        ],
    tools: ["Node.js", "JavaScript", "GeoJSON", "SEO Técnico", "Scripts"],
    tags: language === 'es'
      ? ["pSEO", "Arquitectura", "Automatización", "SEO"]
      : ["pSEO", "Architecture", "Automation", "SEO"],
    link: "https://www.mapaturisticodelquindio.com",
    image: "/media/logo-mapa-quindio.png",
    imageAlt: language === 'es' ? "Logo Mapa Turístico Quindío" : "Mapa Turístico Quindío logo",
  },
  {
    id: 4,
    title: "MAGNETO-ID - Pulsera con Magnetómetro",
    description: language === 'es'
      ? "Sistema de identificación médica basado en firmas magnéticas: hardware de pulsera con magnetómetro, decodificadores Python, base de datos de firmas, dashboard en tiempo real, app móvil y guías de fabricación con moldes 3D. Incluye investigación científica experimental y documentación completa de arquitectura."
      : "Medical identification system based on magnetic signatures: magnetometer bracelet hardware, Python decoders, signature database, real-time dashboard, mobile app and fabrication guides with 3D-printed molds. Includes experimental scientific research and full architecture documentation.",
    details: language === 'es'
      ? [
          "🧲 Sistema de identificación médica por firmas magnéticas",
          "⌚ Hardware de pulsera con magnetómetro",
          "🐍 Decodificadores y base de datos en Python",
          "📊 Dashboard en tiempo real + app móvil",
          "🔬 Investigación científica experimental documentada",
          "📐 Guías de fabricación con moldes 3D"
        ]
      : [
          "🧲 Medical identification via magnetic signatures",
          "⌚ Magnetometer bracelet hardware",
          "🐍 Python decoders and signature database",
          "📊 Real-time dashboard + mobile app",
          "🔬 Documented experimental scientific research",
          "📐 Fabrication guides with 3D-printed molds"
        ],
    tools: ["Python", "Magnetómetro", "Hardware", "Dashboard", "App Móvil", "3D Printing"],
    tags: ["IoT", "Hardware", "Python", "Innovación"],
    link: "https://github.com/dphack1987/magnetrometro",
  },
  {
    id: 5,
    title: "GeoTracker - GPS en Tiempo Real",
    description: language === 'es'
      ? "Sistema de tracking GPS en tiempo real con links cortos por plantilla (seguridad, logística, personas). API REST con creación de enlaces de seguimiento, panel Next.js, scripts de testing automatizado de la API y pipeline de despliegue a producción."
      : "Real-time GPS tracking system with template-based short links (security, logistics, people). REST API for tracking link creation, Next.js dashboard, automated API testing scripts and production deployment pipeline.",
    details: language === 'es'
      ? [
          "📍 Tracking GPS en tiempo real",
          "🔗 Links cortos por plantilla de caso de uso",
          "🧪 Tests automatizados de API (tracking-links)",
          "🗄️ Capa de datos con Drizzle ORM",
          "🚀 Scripts de despliegue a producción",
          "📱 Panel Next.js responsive"
        ]
      : [
          "📍 Real-time GPS tracking",
          "🔗 Short links per use-case template",
          "🧪 Automated API tests (tracking-links)",
          "🗄️ Data layer with Drizzle ORM",
          "🚀 Production deployment scripts",
          "📱 Responsive Next.js dashboard"
        ],
    tools: ["Next.js", "TypeScript", "Drizzle ORM", "REST API", "GPS", "Testing"],
    tags: ["Full-Stack", "GPS", "Next.js", "Tiempo Real"],
    link: "https://github.com/dphack1987/geotracker-real-time-gps-tracking",
  },
  {
    id: 6,
    title: language === 'es' ? "ApexStrike - Framework de Pentesting" : "ApexStrike - Pentesting Framework",
    description: language === 'es'
      ? "Framework profesional de pentesting con escaneo de puertos, análisis web/API/IoT, motor de exploits y automatización CI/CD. Diseñado para evaluación ofensiva automatizada con integración de herramientas de seguridad estándar y generación de reportes de vulnerabilidades. Licencia MIT con documentación bilingüe."
      : "Professional pentesting framework with port scanning, web/API/IoT analysis, exploit engine and CI/CD automation. Designed for automated offensive security assessment with standard security tool integration and vulnerability report generation. MIT license with bilingual documentation.",
    details: language === 'es'
      ? [
          "🛡️ Pentesting web, API e IoT automatizado",
          "🔍 Escaneo de puertos y motor de exploits",
          "⚙️ Automatización con CI/CD y escaneo continuo",
          "📊 Generación de reportes de vulnerabilidades",
          "🔧 Integración con Nmap, Metasploit y Burpsuite",
          "📜 Licencia MIT + documentación bilingüe"
        ]
      : [
          "🛡️ Automated web, API and IoT pentesting",
          "🔍 Port scanning and exploit engine",
          "⚙️ CI/CD automation and continuous scanning",
          "📊 Vulnerability report generation",
          "🔧 Integration with Nmap, Metasploit and Burpsuite",
          "📜 MIT license + bilingual documentation"
        ],
    tools: ["Python", "OWASP", "Nmap", "Metasploit", "Burpsuite", "Pentesting"],
    tags: language === 'es'
      ? ["Ataque", "Pentesting", "OWASP", "Framework"]
      : ["Offense", "Pentesting", "OWASP", "Framework"],
    link: "https://github.com/dphack1987/ApexStrike",
  },
  {
    id: 7,
    title: language === 'es' ? "Zenythos Sword - Threat Intelligence" : "Zenythos Sword - Threat Intelligence",
    description: language === 'es'
      ? "Framework de threat intelligence con integración SIEM, alertas con Machine Learning, dashboards en tiempo real y respuesta a incidentes automatizada. Proporciona monitoreo continuo de amenazas, correlación de eventos y forense digital con integración en Wazuh, Splunk y TheHive."
      : "Threat intelligence framework with SIEM integration, ML-powered alerts, real-time dashboards and automated incident response. Provides continuous threat monitoring, event correlation and digital forensics with integration in Wazuh, Splunk and TheHive.",
    details: language === 'es'
      ? [
          "⚔️ Threat intelligence en tiempo real",
          "🔗 Integración SIEM (Wazuh, Splunk, TheHive)",
          "🤖 Alertas con Machine Learning",
          "📊 Dashboards interactivos de monitoreo",
          "🔬 Forense digital y log analysis",
          "🚀 Respuesta a incidentes automatizada",
          "📈 Correlación de eventos y detección de anomalías"
        ]
      : [
          "⚔️ Real-time threat intelligence",
          "🔗 SIEM integration (Wazuh, Splunk, TheHive)",
          "🤖 ML-powered alerts",
          "📊 Interactive monitoring dashboards",
          "🔬 Digital forensics and log analysis",
          "🚀 Automated incident response",
          "📈 Event correlation and anomaly detection"
        ],
    tools: ["Python", "SIEM", "Threat Intelligence", "ML", "MISP", "OpenCTI", "Wazuh"],
    tags: language === 'es'
      ? ["Defensa", "Threat Intel", "SIEM", "ML"]
      : ["Defense", "Threat Intel", "SIEM", "ML"],
    link: "https://github.com/dphack1987/zenythos-sword",
  },
  {
    id: 8,
    title: language === 'es' ? "Antidron System - Detección y Neutralización" : "Antidron System - Detection & Neutralization",
    description: language === 'es'
      ? "Sistema de detección y neutralización de drones: integración hardware/software con microcontroladores, sensores electrónicos y comunicación RF. Desarrollo en Python para control de sensores y actuadores, con aplicaciones en seguridad física y defensa. Investigación activa (última actualización 2026)."
      : "Drone detection and neutralization system: hardware/software integration with microcontrollers, electronic sensors and RF communication. Python development for sensor and actuator control, with physical security and defense applications. Active research (last update 2026).",
    details: language === 'es'
      ? [
          "🎯 Detección y tracking de drones en tiempo real",
          "⚡ Neutralización automatizada con señales RF",
          "🔌 Integración hardware/software con microcontroladores",
          "🐍 Python para control de sensores y actuadores",
          "📡 Comunicación RF y protocolos inalámbricos",
          "🛡️ Aplicaciones en seguridad física y defensa"
        ]
      : [
          "🎯 Real-time drone detection and tracking",
          "⚡ Automated neutralization with RF signals",
          "🔌 Hardware/software integration with microcontrollers",
          "🐍 Python for sensor and actuator control",
          "📡 RF communication and wireless protocols",
          "🛡️ Physical security and defense applications"
        ],
    tools: ["Python", "Electronics", "Microcontrollers", "RF Systems", "IoT", "Sensors"],
    tags: language === 'es'
      ? ["IoT", "Hardware", "Python", "Seguridad Física"]
      : ["IoT", "Hardware", "Python", "Physical Security"],
    link: "https://github.com/dphack1987/antidron",
  },
];

export default function Projects() {
  const { language, t } = useLanguage();
  const projects = getProjects(language);

  return (
    <section id="projects" className="scroll-mt-20 border-t border-zinc-800 bg-[#070709] py-24">
      <div className="container mx-auto px-4">
        <div className="relative mb-14">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[9rem] leading-none text-white/[0.04] md:text-[12rem]"
          >
            06
          </span>
          <p className="eyebrow">{"// "}{t('nav.projects')}</p>
          <h2 className="display-hover relative mt-3 font-display text-5xl uppercase leading-none tracking-tight text-white md:text-7xl">
            {t('projects.title')}
          </h2>
          <span className="rule-gold mt-5" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`reveal flex flex-col rounded-none border-2 bg-[#0e0e12] p-5 transition-all hover:-translate-y-1 ${
                project.featured
                  ? 'border-[#ffd400] bg-gradient-to-br from-[#1c1705] to-[#0e0e12] md:col-span-2'
                  : project.award
                    ? 'border-[#ffd400]'
                    : 'border-zinc-800 hover:border-[#ffd400]'
              } ${project.construction ? 'border-zinc-700 opacity-90' : ''}`}
            >
              {project.image && (
                <div
                  className={`relative mb-3 border border-zinc-800 bg-[#f7f1e3] ${
                    project.featured ? 'h-48' : 'h-36'
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? project.title}
                    fill
                    className="object-contain p-3"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="mb-2 flex flex-wrap gap-2">
                {project.featured && (
                  <span className="bg-[#ffd400] px-3 py-1 font-mono text-[11px] font-black uppercase tracking-widest text-black">
                    {t('projects.star')}
                  </span>
                )}
                {project.award && !project.featured && (
                  <span className="border border-[#ffd400] px-3 py-1 font-mono text-[11px] font-black uppercase tracking-widest text-[#ffd400]">
                    {t('projects.award')}
                  </span>
                )}
                {project.construction && (
                  <span className="border border-zinc-600 px-3 py-1 font-mono text-[11px] font-black uppercase tracking-widest text-zinc-400">
                    🚧 {language === 'es' ? 'En Construcción' : 'Under Construction'}
                  </span>
                )}
              </div>

              <h3
                className={`font-display uppercase leading-tight tracking-tight text-white ${
                  project.featured ? 'text-3xl md:text-4xl' : 'text-2xl'
                }`}
              >
                {project.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-auto space-y-3 pt-4">
                <div>
                  <h4 className="mb-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400]">
                    {t('projects.keyFeatures')}
                  </h4>
                  <ul className="space-y-0.5 text-sm text-zinc-400">
                    {project.details.map((detail, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-[#ffd400]">▸</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400]">
                    {t('projects.toolsUsed')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="border border-zinc-700 px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-zinc-900 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <Button
                    asChild
                    className="h-12 w-full rounded-none border-2 border-[#ffd400] bg-transparent text-xs font-black uppercase tracking-widest text-[#ffd400] transition-all hover:bg-[#ffd400] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#ffd400] focus:ring-offset-2 focus:ring-offset-black"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`${t('projects.viewProject')}: ${project.title}`}>
                      {t('projects.viewProject')} →
                    </a>
                  </Button>
                  {project.link2 && (
                    <Button
                      asChild
                      variant="outline"
                      className="h-11 w-full rounded-none border border-zinc-600 bg-transparent text-xs font-black uppercase tracking-widest text-zinc-300 transition-all hover:border-[#ffd400] hover:text-[#ffd400] focus:outline-none focus:ring-2 focus:ring-[#ffd400] focus:ring-offset-2 focus:ring-offset-black"
                    >
                      <a href={project.link2} target="_blank" rel="noopener noreferrer" aria-label={`${project.link2Label}: ${project.title}`}>
                        {project.link2Label} →
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
