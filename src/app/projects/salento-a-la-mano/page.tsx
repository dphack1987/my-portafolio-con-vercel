import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Salento a la Mano - WSA 2026 Nominee | Case Study",
  description: "Caso de estudio detallado de Salento a la Mano - Plataforma turística nominada al World Summit Awards 2026. Arquitectura, implementación y resultados.",
  openGraph: {
    type: "article",
    title: "Salento a la Mano - WSA 2026 Nominee | Case Study",
    description: "Caso de estudio detallado de Salento a la Mano - Plataforma turística nominada al World Summit Awards 2026.",
    images: ["/media/nominacion-wsa-2026.webp"],
  },
};

export default function SalentoCaseStudy() {
  return (
    <main className="min-h-screen bg-[#070709]">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center border-b-2 border-[#ffd400] pt-16">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center">
            <p className="eyebrow mb-6">{"// CASE STUDY"}</p>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] uppercase leading-[0.9] tracking-tight text-white mb-6">
              Salento a la Mano
            </h1>
            <div className="inline-block bg-[#ffd400] px-6 py-2 mb-6">
              <span className="font-mono text-sm font-black uppercase tracking-widest">
                🏆 WSA 2026 NOMINEE
              </span>
            </div>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Plataforma turística de Salento, Quindío nominada al World Summit Awards 2026
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="h-12 rounded-none border-2 border-[#ffd400] bg-[#ffd400] px-8 text-sm font-black uppercase tracking-widest transition-all hover:-translate-y-1 hover:bg-black hover:text-[#ffd400]"
              >
                <a href="https://www.salentoalamano.com" target="_blank" rel="noopener noreferrer">
                  Visitar Sitio Web →
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-none border-2 border-zinc-600 bg-transparent px-8 text-sm font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:border-[#ffd400] hover:text-[#ffd400]"
              >
                <Link href="/#projects">
                  Volver a Proyectos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="border-b border-zinc-800 bg-[#0a0a0c] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400] mb-4">
                Client
              </h3>
              <p className="text-white">Turistas de Salento, Quindío</p>
            </div>
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400] mb-4">
                Timeline
              </h3>
              <p className="text-white">6 meses de desarrollo</p>
            </div>
            <div>
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400] mb-4">
                Recognition
              </h3>
              <p className="text-white">WSA 2026 Nominee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="border-b border-zinc-800 bg-[#070709] py-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <span className="eyebrow">{"// THE CHALLENGE"}</span>
            <h2 className="font-display text-5xl uppercase leading-none tracking-tight text-white mt-3">
              El Problema
            </h2>
            <span className="rule-gold mt-5" />
          </div>

          <div className="max-w-4xl">
            <p className="text-lg text-zinc-400 mb-6">
              Salento, uno de los destinos turísticos más emblemáticos del Eje Cafetero colombiano, enfrentaba varios desafíos que limitaban su potencial digital:
            </p>
            
            <ul className="space-y-4 text-zinc-300">
              <li className="flex gap-3">
                <span className="text-[#ffd400]">▸</span>
                <span><strong>Fragmentación de información:</strong> Los turistas no tenían una fuente centralizada y confiable sobre negocios, rutas y servicios locales.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ffd400]">▸</span>
                <span><strong>Baja visibilidad online:</strong> Las empresas locales tenían presencia digital limitada, compitiendo desventajosamente con plataformas globales.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ffd400]">▸</span>
                <span><strong>Pérdida de oportunidades:</strong> Sin un sistema de reservas directo, muchos negocios perdían clientes potenciales a intermediarios externos.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ffd400]">▸</span>
                <span><strong>Experiencia desconectada:</strong> Falta de información sobre el Valle de Cocora y otras atracciones clave para planificar visitas.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="border-b border-zinc-800 bg-[#0a0a0c] py-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <span className="eyebrow">{"// THE SOLUTION"}</span>
            <h2 className="font-display text-5xl uppercase leading-none tracking-tight text-white mt-3">
              La Solución
            </h2>
            <span className="rule-gold mt-5" />
          </div>

          <div className="max-w-4xl">
            <p className="text-lg text-zinc-400 mb-8">
              Desarrollo una plataforma turística digital integral que conecta directamente a turistas con negocios locales, con características avanzadas:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="rounded-none border-2 border-zinc-800 bg-[#0e0e12] p-6">
                <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-4">
                  Mapa Interactivo
                </h3>
                <p className="text-zinc-400">
                  Mapa de Salento con Leaflet y geolocalización. Los usuarios pueden ver la ubicación de negocios, rutas turísticas y puntos de interés en tiempo real.
                </p>
              </Card>

              <Card className="rounded-none border-2 border-zinc-800 bg-[#0e0e12] p-6">
                <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-4">
                  Reservas Directas
                </h3>
                <p className="text-zinc-400">
                  Sistema de reservas vía WhatsApp integrado, eliminando intermediarios y comisiones. Los clientes contactan directamente con los negocios.
                </p>
              </Card>

              <Card className="rounded-none border-2 border-zinc-800 bg-[#0e0e12] p-6">
                <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-4">
                  PWA Offline
                </h3>
                <p className="text-zinc-400">
                  Modo offline completo para el Valle de Cocora. Los turistas pueden acceder a información crítica sin conexión a internet.
                </p>
              </Card>

              <Card className="rounded-none border-2 border-zinc-800 bg-[#0e0e12] p-6">
                <h3 className="font-display text-2xl uppercase tracking-tight text-white mb-4">
                  Multi-idioma
                </h3>
                <p className="text-zinc-400">
                  Soporte para 6 idiomas (ES/EN/FR/DE/PT/IT) y múltiples monedas (COP/USD/EUR), atraen turistas internacionales.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="border-b border-zinc-800 bg-[#070709] py-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <span className="eyebrow">{"// TECHNICAL IMPLEMENTATION"}</span>
            <h2 className="font-display text-5xl uppercase leading-none tracking-tight text-white mt-3">
              Arquitectura Técnica
            </h2>
            <span className="rule-gold mt-5" />
          </div>

          <div className="max-w-4xl">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400] mb-4">
              Stack Tecnológico
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="border border-zinc-700 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                React 18
              </span>
              <span className="border border-zinc-700 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                Vite
              </span>
              <span className="border border-zinc-700 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                TypeScript
              </span>
              <span className="border border-zinc-700 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                Leaflet
              </span>
              <span className="border border-zinc-700 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                PWA
              </span>
              <span className="border border-zinc-700 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-zinc-300">
                SEO
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400] mb-2">
                  Arquitectura de 7 Capas Enterprise
                </h4>
                <p className="text-zinc-400">
                  Diseñé una arquitectura escalable siguiendo principios de clean architecture, separando concerns de presentación, lógica de negocio, datos e infraestructura.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400] mb-2">
                  SEO Defensivo
                </h4>
                <p className="text-zinc-400">
                  Implementé estrategias de SEO técnico y defensivo para proteger la marca y posicionarse contra desinformación y competidores.
                </p>
              </div>

              <div>
                <h4 className="font-mono text-[11px font-bold uppercase tracking-widest text-[#ffd400] mb-2">
                  CI/CD
                </h4>
                <p className="text-zinc-400">
                  Pipeline de despliegue continuo con Vercel para actualizaciones rápidas y rollback instantáneo si es necesario.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="border-b border-zinc-800 bg-[#0a0a0c] py-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <span className="eyebrow">{"// RESULTS"}</span>
            <h2 className="font-display text-5xl uppercase leading-none tracking-tight text-white mt-3">
              Resultados
            </h2>
            <span className="rule-gold mt-5" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="rounded-none border-2 border-[#ffd400] bg-[#ffd400] p-6 text-center">
              <div className="font-display text-5xl uppercase leading-none text-black mb-2">
                70+
              </div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-black">
                Negocios Verificados
              </p>
            </Card>

            <Card className="rounded-none border-2 border-zinc-800 bg-[#0e0e12] p-6 text-center">
              <div className="font-display text-5xl uppercase leading-none text-[#ffd400] mb-2">
                6
              </div>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                Idiomas
              </p>
            </Card>

            <Card className="rounded-none border-2 border-zinc-800 bg-[#0e0e12] p-6 text-center">
              <div className="font-display text-5xl uppercase leading-none text-[#ffd400] mb-2">
                100%
              </div>
              <p className="font-mono text-[11px font-bold uppercase tracking-widest text-zinc-400">
                Disponibilidad Offline
              </p>
            </Card>

            <Card className="rounded-none border-2 border-zinc-800 bg-[#e0e12] p-6 text-center">
              <div className="font-display text-5xl uppercase leading-none text-white mb-2">
                Top 10
              </div>
              <p className="font-mono text-[11px font-bold uppercase tracking-widest text-zinc-400">
                SEO Orgánico
              </p>
            </Card>
          </div>

          <div className="max-w-4xl">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400] mb-4">
              Impacto Cuantitativo
            </h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex gap-3">
                <span className="text-[#ffd400]">▸</span>
                <span><strong>Conexión directa:</strong> 70+ negocios ahora pueden recibir reservas sin intermediarios, aumentando sus ingresos.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ffd400]">▸</span>
                <span><strong>Accesibilidad global:</strong> Multi-idioma y multi-moneda hace el destino accesible a turistas internacionales.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ffd400]">▸</span>
                <span><strong>Confianza:</strong> Sistema de reseñas verificadas y negocio directo genera confianza en los usuarios.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ffd400]">▸</span>
                <span><strong>Experiencia mejorada:</strong> Información offline del Valle de Cocora permite planificación completa de visitas.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ffd400]">▸</span>
                <span><strong>Visibilidad SEO:</strong> Posicionamiento top 10 en búsquedas orgánicas para turismo en Salento.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="bg-[#070709] py-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-12">
            <span className="eyebrow">{"// RECOGNITION"}</span>
            <h2 className="font-display text-5xl uppercase leading-none tracking-tight text-white mt-3">
              Reconocimiento Internacional
            </h2>
            <span className="rule-gold mt-5" />
          </div>

          <div className="max-w-4xl border-2 border-[#ffd400] bg-[#0e0e12] p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="relative h-32 w-32 flex-shrink-0">
                <Image
                  src="/media/logo-wsa.jpg"
                  alt="World Summit Awards"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-display text-3xl uppercase tracking-tight text-white mb-4">
                  World Summit Awards 2026
                </h3>
                <p className="font-mono text-sm font-bold uppercase tracking-widest text-[#ffd400] mb-2">
                  Categoría: Negocios y Comercio
                </p>
                <p className="text-zinc-300">
                  Nominado como la solución digital más innovadora en Colombia en la 24ª edición del World Summit Awards. Este reconocimiento valida el impacto de la plataforma en el ecosistema de turismo digital.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              asChild
              className="h-14 rounded-none border-2 border-[#ffd400] bg-[#ffd400] px-10 text-sm font-black uppercase tracking-widest transition-all hover:-translate-y-1 hover:bg-black hover:text-[#ffd400]"
            >
              <a href="https://www.salentoalamano.com" target="_blank" rel="noopener noreferrer">
                Ver Proyecto en Producción →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#ffd400] bg-[#0a0a0c] py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
            © 2026 David Parra · Enterprise Security Architect · WSA 2026 Nominee
          </p>
        </div>
      </footer>
    </main>
  );
}
