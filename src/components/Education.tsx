"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

type Certification = {
  id: number;
  title: string;
  institution: string;
  year: string;
  image: string;
  imageAlt: string;
  credential?: string;
};

const getCertifications = (language: 'en' | 'es'): Certification[] => [
  {
    id: 1,
    title: language === 'es' ? "EC-Council Certified" : "EC-Council Certified",
    institution: "EC-Council",
    year: "2024",
    image: "/media/cert-ec-council_trim.png",
    imageAlt: language === 'es' ? "Certificado EC-Council" : "EC-Council Certificate",
    credential: language === 'es' ? "Certificación Oficial EC-Council" : "Official EC-Council Certification"
  },
  {
    id: 2,
    title: language === 'es' ? "Gestión y Seguridad de Servidores Linux" : "Linux Server Management and Security",
    institution: language === 'es' ? "Universidad de Colorado" : "University of Colorado",
    year: "2023",
    image: "/media/cert-colorado_trim.png",
    imageAlt: language === 'es' ? "Certificado Universidad de Colorado" : "University of Colorado Certificate",
    credential: language === 'es' ? "Curso Oficial de Gestión de Servidores Linux" : "Official Linux Server Management Course"
  },
  {
    id: 3,
    title: language === 'es' ? "Introducción a Ataques Cibernéticos" : "Introduction to Cyber Attacks",
    institution: language === 'es' ? "NYU Tandon School of Engineering" : "NYU Tandon School of Engineering",
    year: "2023",
    image: "/media/cert-nyu_trim.png",
    imageAlt: language === 'es' ? "Certificado NYU Tandon" : "NYU Tandon Certificate",
    credential: language === 'es' ? "Curso de Ataques Cibernéticos" : "Cyber Attacks Course"
  },
  {
    id: 4,
    title: language === 'es' ? "Técnico en Publicidad y Mercadeo" : "Technician in Advertising and Marketing",
    institution: language === 'es' ? "Escuela de Administración del Quindío" : "School of Administration of Quindío",
    year: "2007",
    image: "/media/diploma-publicidad_trim.png",
    imageAlt: language === 'es' ? "Diploma Técnico en Publicidad y Mercadeo" : "Technician Diploma in Advertising and Marketing",
    credential: language === 'es' ? "Título Técnico Profesional" : "Professional Technician Degree"
  }
];

export default function Education() {
  const { t, language } = useLanguage();
  const certifications = getCertifications(language);

  return (
    <section id="education" className="scroll-mt-20 border-t border-zinc-800 bg-[#0a0a0c] py-24">
      <div className="container mx-auto px-4">
        <div className="relative mb-14">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[9rem] leading-none text-white/[0.04] md:text-[12rem]"
          >
            04
          </span>
          <p className="eyebrow">{"// "}{t('nav.education')}</p>
          <h2 className="display-hover relative mt-3 font-display text-5xl uppercase leading-none tracking-tight text-white md:text-7xl">
            {t('education.title')}
          </h2>
          <span className="rule-gold mt-5" />
        </div>

        <p className="mb-12 max-w-4xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          {t('education.subtitle')}
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="reveal group rounded-none border-2 border-zinc-800 bg-[#0e0e12] p-6 transition-all hover:border-[#ffd400] hover:-translate-y-1"
            >
              <div className="relative mb-5 h-48 border border-zinc-800 bg-[#f7f1e3]">
                <Image
                  src={cert.image}
                  alt={cert.imageAlt}
                  fill
                  className="object-contain p-4"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="mb-3">
                <h3 className="font-display text-xl uppercase leading-tight tracking-tight text-white">
                  {cert.title}
                </h3>
              </div>

              <div className="mb-2 flex items-center gap-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400]">
                  {t('education.institution')}
                </span>
                <span className="text-zinc-400">:</span>
                <span className="text-sm text-zinc-300">{cert.institution}</span>
              </div>

              <div className="mb-2 flex items-center gap-2">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400]">
                  {t('education.year')}
                </span>
                <span className="text-zinc-400">:</span>
                <span className="text-sm text-zinc-300">{cert.year}</span>
              </div>

              {cert.credential && (
                <div className="mb-4 flex items-center gap-2">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ffd400]">
                    {t('education.credentials')}
                  </span>
                  <span className="text-zinc-400">:</span>
                  <span className="text-sm text-zinc-300">{cert.credential}</span>
                </div>
              )}

              <Button
                className="h-12 w-full rounded-none border-2 border-[#ffd400] bg-transparent text-xs font-black uppercase tracking-widest text-[#ffd400] transition-all hover:bg-[#ffd400] hover:text-black focus:outline-none focus:ring-2 focus:ring-[#ffd400] focus:ring-offset-2 focus:ring-offset-black"
                onClick={() => window.open(cert.image, '_blank')}
              >
                {t('education.viewCertificate')} →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
