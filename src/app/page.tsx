"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Technology Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <div className="mb-6 inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-bold text-lg animate-pulse shadow-lg">
            {t('hero.award')}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">{t('hero.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              <Link href="#projects">{t('hero.cta')}</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-6">
              <Link href="#awards">Ver Premios</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">{t('awards.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-yellow-400">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="Award Ceremony"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-5xl">🏆</span>
                  </div>
                  <h3 className="text-3xl font-bold text-center text-white">{t('awards.wsa2026')}</h3>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <p className="text-xl text-center mb-4 text-yellow-600 font-semibold">{t('awards.wsaCategory')}</p>
                <p className="text-lg text-center mb-6 text-gray-600">{t('awards.wsaProject')}</p>
                <p className="text-center text-gray-700 leading-relaxed mb-8">{t('awards.wsaDescription')}</p>
                <div className="text-center">
                  <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    <a href="https://www.salentoalamano.com" target="_blank" rel="noopener noreferrer">
                      Ver Proyecto Nominado
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('about.title')}</h2>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <p className="text-lg font-semibold text-blue-800">{t('about.awardHighlight')}</p>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">{t('about.description')}</p>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline">
                <a href="https://github.com/dphack1987" target="_blank" rel="noopener noreferrer">
                  Ver Portafolio GitHub
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
