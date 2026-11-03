"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV_LINKS = [
  { hash: "#about", key: "nav.about" },
  { hash: "#awards", key: "nav.awards" },
  { hash: "#projects", key: "nav.projects" },
  { hash: "#skills", key: "nav.skills" },
] as const;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? doc.scrollTop / max : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "David Parra Portfolio",
          text:
            language === 'es'
              ? "¡Mira mi portafolio profesional!"
              : "Check out my professional portfolio!",
          url: window.location.href,
        });
        return;
      } catch (error) {
        // Cancelado por el usuario: copiamos la URL como alternativa.
        console.error("Error compartiendo:", error);
      }
    }
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard no disponible (contexto inseguro).
    }
  };

  const languageButton = (lang: 'es' | 'en') => (
    <button
      onClick={() => setLanguage(lang)}
      aria-pressed={language === lang}
      className={`border px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest transition-colors ${
        language === lang
          ? 'border-[#ffd400] bg-[#ffd400] text-black'
          : 'border-zinc-700 text-zinc-400 hover:border-[#ffd400] hover:text-[#ffd400]'
      }`}
    >
      {lang}
    </button>
  );

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-800 bg-black/85 backdrop-blur-md">
      {/* Barra de progreso de scroll */}
      <div
        className="absolute left-0 top-0 h-[3px] bg-[#ffd400] transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl uppercase tracking-wide text-white transition-colors hover:text-[#ffd400]"
          >
            David<span className="text-[#ffd400]">.</span>Parra
          </Link>

          {/* Desktop */}
          <div className="hidden items-center space-x-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.hash}
                href={`/${link.hash}`}
                className="px-3 py-2 text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-[#ffd400]"
              >
                {t(link.key)}
              </Link>
            ))}
            <Button
              asChild
              className="ml-2 rounded-none border-2 border-[#ffd400] bg-[#ffd400] px-5 text-xs font-black uppercase tracking-widest text-black hover:bg-black hover:text-[#ffd400]"
            >
              <Link href="/#contact">{t('nav.contact')}</Link>
            </Button>

            <div className="ml-4 flex items-center gap-2 border-l border-zinc-800 pl-4">
              {languageButton('es')}
              {languageButton('en')}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="ml-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-[#ffd400]"
            >
              {t('share.title')}
            </Button>

            {copied && (
              <span className="ml-2 font-mono text-xs text-[#ffd400]" role="status">
                {t('share.copied')}
              </span>
            )}
          </div>

          {/* Mobile toggle */}
          <button
            className="p-2 text-white md:hidden"
            aria-label="Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="square"
              strokeLinejoin="miter"
              strokeWidth="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="border-t border-zinc-800 py-4 md:hidden">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.hash}
                  href={`/${link.hash}`}
                  className="border-b border-zinc-900 py-3 text-sm font-bold uppercase tracking-widest text-zinc-300 transition-colors hover:text-[#ffd400]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="flex items-center gap-3 py-4">
                {languageButton('es')}
                {languageButton('en')}
              </div>
              <Button
                variant="ghost"
                className="justify-start px-0 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-[#ffd400]"
                onClick={() => {
                  handleShare();
                  setIsMenuOpen(false);
                }}
              >
                {t('share.title')}
              </Button>
              {copied && (
                <p className="font-mono text-xs text-[#ffd400]" role="status">
                  {t('share.copied')}
                </p>
              )}
              <Button
                asChild
                className="mt-2 w-full rounded-none border-2 border-[#ffd400] bg-[#ffd400] text-xs font-black uppercase tracking-widest text-black hover:bg-black hover:text-[#ffd400]"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link href="/#contact">{t('nav.contact')}</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
