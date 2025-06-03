"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-400">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl mb-6">{t('hero.subtitle')}</p>
          <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="#about">{t('hero.cta')}</Link>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('about.title')}</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-700 mb-8">{t('about.description')}</p>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline">
                <a href="https://github.com/dphack1987" target="_blank" rel="noopener noreferrer">
                  {t('about.github')}
                </a>
              </Button>
              <Button asChild>
                <a href="#contact">{t('about.contact')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
