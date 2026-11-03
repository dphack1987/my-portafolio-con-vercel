"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import Typewriter from "@/components/Typewriter";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const TICKER_ITEMS = [
  "Enterprise Security",
  "7-Layer Architecture",
  "WSA 2026 Nominee",
  "Next.js",
  "Docker",
  "Kubernetes",
  "ELK Stack",
  "Threat Intelligence",
  "Machine Learning",
  "Pentesting",
  "SEO Enterprise",
  "Full-Stack",
];

const TERMINAL_LINES = [
  { prompt: true, text: "nmap -sV salentoalamano.com" },
  { prompt: false, text: "443/tcp  open  https   nginx/1.24" },
  { prompt: false, text: "STATUS  ✓  WSA 2026 NOMINEE" },
  { prompt: true, text: "kubectl get skills" },
  { prompt: false, text: "elk · k8s · kafka · redis  READY" },
  { prompt: true, text: "deploy --env production" },
  { prompt: false, text: "✓ build 12.4s   ✓ live" },
];

export default function Home() {
  const { t } = useLanguage();
  const [firstName, ...restName] = t('hero.title').split(' ');
  const lastName = restName.join(' ');

  const metrics = [
    { to: 45, suffix: "+", label: t('metrics.repos') },
    { to: 70, suffix: "+", label: t('metrics.businesses') },
    { to: 112, suffix: "", label: t('metrics.pages') },
    { to: 6, suffix: "", label: t('metrics.languages') },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#070709] pt-16">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="hud-scan" style={{ top: 0 }} />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rotate-12 bg-[#ffd400]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[28rem] w-[28rem] -rotate-12 bg-[#2563eb]/15 blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Barra de estado del sistema */}
          <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
            <span className="flex items-center gap-2 text-zinc-300">
              <span className="status-dot" /> SYS.ONLINE
            </span>
            <span className="text-[#ffd400]">WSA.2026</span>
            <span>BUILD ✓ PASSING</span>
            <span className="hidden sm:inline">LAT 12MS</span>
            <span className="hidden md:inline">TLS ✓ HSTS</span>
            <span className="hidden lg:inline">V2.0.26</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-5">
            {/* Nombre + rol */}
            <div className="lg:col-span-3">
              <p className="eyebrow mb-6">{"// "}{t('hero.award')}</p>

              <h1 className="font-display text-[clamp(3.5rem,12vw,10rem)] uppercase leading-[0.85] tracking-tight text-white">
                <span className="display-hover block">{firstName}</span>
                {lastName && <span className="text-outline-gold block">{lastName}</span>}
              </h1>

              <p className="mt-6 font-mono text-lg font-bold uppercase tracking-widest text-[#ffd400] md:text-2xl">
                <Typewriter
                  words={[t('hero.role1'), t('hero.role2'), t('hero.role3')]}
                />
              </p>

              <p className="mt-5 max-w-2xl border-l-4 border-[#ffd400] pl-4 text-base leading-relaxed text-zinc-400 md:text-xl">
                {t('hero.subtitle')}
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  className="h-14 rounded-none border-2 border-[#ffd400] bg-[#ffd400] px-10 text-sm font-black uppercase tracking-widest text-black transition-all hover:-translate-y-1 hover:bg-black hover:text-[#ffd400] md:text-base"
                >
                  <Link href="#projects">{t('hero.cta')}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-14 rounded-none border-2 border-zinc-600 bg-transparent px-10 text-sm font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:border-[#ffd400] hover:text-[#ffd400] md:text-base"
                >
                  <Link href="#awards">{t('hero.awardsCta')}</Link>
                </Button>
              </div>
            </div>

            {/* Terminal */}
            <div className="hidden lg:col-span-2 lg:block">
              <div className="border border-zinc-800 bg-black/80 shadow-2xl shadow-[#ffd400]/5">
                <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                  <span className="ml-3 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                    david@parra: ~
                  </span>
                </div>
                <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
                  {TERMINAL_LINES.map((line, idx) => (
                    <div
                      key={idx}
                      className={`term-line ${
                        line.prompt ? "text-zinc-200" : "text-[#ffd400]"
                      }`}
                      style={{ animationDelay: `${0.6 + idx * 0.45}s` }}
                    >
                      {line.prompt && <span className="text-[#22c55e]">$ </span>}
                      {line.text}
                    </div>
                  ))}
                  <div
                    className="term-line cursor-blink text-zinc-400"
                    style={{ animationDelay: `${0.6 + TERMINAL_LINES.length * 0.45}s` }}
                  >
                    _
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker */}
        <div className="relative z-10 overflow-hidden border-y-2 border-[#ffd400] bg-black py-3">
          <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
              <span
                key={idx}
                className="flex items-center gap-10 font-mono text-sm font-bold uppercase tracking-widest text-zinc-300"
              >
                {item}
                <span className="text-[#ffd400]">◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas duras */}
      <section className="border-b border-zinc-800 bg-[#0a0a0c]">
        <div className="container mx-auto grid grid-cols-2 divide-x divide-y divide-zinc-800 px-0 md:grid-cols-4 md:divide-y-0">
          {metrics.map((metric) => (
            <div key={metric.label} className="px-6 py-10 text-center">
              <div className="font-display text-5xl uppercase leading-none text-[#ffd400] md:text-6xl">
                <Counter to={metric.to} suffix={metric.suffix} />
              </div>
              <div className="mt-3 font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section
        id="awards"
        className="scroll-mt-20 border-b border-zinc-800 bg-[#0a0a0c] py-24"
      >
        <div className="container mx-auto px-4">
          <div className="relative mb-14">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[9rem] leading-none text-white/[0.04] md:text-[12rem]"
            >
              01
            </span>
            <p className="eyebrow">{"// "}{t('nav.awards')}</p>
            <h2 className="display-hover relative mt-3 font-display text-5xl uppercase leading-none tracking-tight text-white md:text-7xl">
              {t('awards.title')}
            </h2>
            <span className="rule-gold mt-5" />
          </div>

          <div className="reveal mx-auto max-w-4xl border-2 border-[#ffd400] bg-[#0e0e12]">
            <div className="relative h-72 border-b-2 border-[#ffd400] bg-[#f7f1e3] md:h-96">
              <Image
                src="/media/nominacion-wsa-2026.webp"
                alt="Nominación WSA 2026 - Salento a la Mano"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="mb-6 inline-block bg-white p-3">
                <Image
                  src="/media/logo-wsa.jpg"
                  alt="World Summit Awards"
                  width={424}
                  height={324}
                  className="h-16 w-auto md:h-20"
                />
              </div>
              <h3 className="font-display text-3xl uppercase leading-none tracking-tight text-white md:text-5xl">
                {t('awards.wsa2026')}
              </h3>
              <p className="mt-4 font-mono text-sm font-bold uppercase tracking-widest text-[#ffd400]">
                {t('awards.wsaCategory')}
              </p>
              <p className="mt-2 text-lg text-zinc-400">{t('awards.wsaProject')}</p>
              <p className="mt-6 leading-relaxed text-zinc-300">
                {t('awards.wsaDescription')}
              </p>
              <Button
                asChild
                className="mt-8 h-14 rounded-none border-2 border-[#ffd400] bg-[#ffd400] px-10 text-sm font-black uppercase tracking-widest text-black transition-all hover:-translate-y-1 hover:bg-black hover:text-[#ffd400]"
              >
                <a href="https://www.salentoalamano.com" target="_blank" rel="noopener noreferrer">
                  {t('awards.viewProject')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20 bg-[#070709] py-24">
        <div className="container mx-auto px-4">
          <div className="relative mb-14">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[9rem] leading-none text-white/[0.04] md:text-[12rem]"
            >
              02
            </span>
            <p className="eyebrow">{"// "}{t('nav.about')}</p>
            <h2 className="display-hover relative mt-3 font-display text-5xl uppercase leading-none tracking-tight text-white md:text-7xl">
              {t('about.title')}
            </h2>
            <span className="rule-gold mt-5" />
          </div>

          <div className="max-w-4xl">
            <p className="reveal mb-8 border-2 border-[#ffd400] bg-[#ffd400]/10 p-6 font-mono text-sm font-bold uppercase leading-relaxed tracking-widest text-[#ffd400] md:text-base">
              {t('about.awardHighlight')}
            </p>
            <p className="reveal reveal-delay-1 text-lg leading-relaxed text-zinc-300 md:text-2xl">
              {t('about.description')}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                variant="outline"
                className="h-14 rounded-none border-2 border-zinc-600 bg-transparent px-8 text-sm font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:border-[#ffd400] hover:text-[#ffd400]"
              >
                <a href="https://github.com/dphack1987" target="_blank" rel="noopener noreferrer">
                  {t('about.viewGithub')}
                </a>
              </Button>
              <Button
                asChild
                className="h-14 rounded-none border-2 border-[#ffd400] bg-[#ffd400] px-8 text-sm font-black uppercase tracking-widest text-black transition-all hover:-translate-y-1 hover:bg-black hover:text-[#ffd400]"
              >
                <a href="#contact">{t('about.contact')}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
