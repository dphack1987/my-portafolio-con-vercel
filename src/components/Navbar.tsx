"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "David Parra Portfolio",
          text: language === 'es' ? 
            "¡Mira mi portafolio profesional!" : 
            "Check out my professional portfolio!",
          url: window.location.href,
        });
      } catch (error) {
        console.error("Error compartiendo:", error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert(t('share.copied'));
    }
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            David Parra
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/#about" className="text-gray-700 hover:text-blue-600">
              {t('nav.about')}
            </Link>
            <Link href="/#projects" className="text-gray-700 hover:text-blue-600">
              {t('nav.projects')}
            </Link>
            <Link href="/#skills" className="text-gray-700 hover:text-blue-600">
              {t('nav.skills')}
            </Link>
            <Button asChild variant="ghost">
              <Link href="/#contact">{t('nav.contact')}</Link>
            </Button>

            <div className="flex items-center space-x-2 border-l pl-6">
              <button
                onClick={() => setLanguage('es')}
                className={`px-2 py-1 rounded text-sm ${
                  language === 'es' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded text-sm ${
                  language === 'en' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                EN
              </button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleShare}
              className="text-gray-700 hover:text-blue-600"
            >
              {t('share.title')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#about"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link
                href="/#projects"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.projects')}
              </Link>
              <Link
                href="/#skills"
                className="text-gray-700 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.skills')}
              </Link>
              <div className="flex items-center justify-center space-x-4 py-2">
                <button
                  onClick={() => {
                    setLanguage('es');
                    setIsMenuOpen(false);
                  }}
                  className={`px-2 py-1 rounded text-sm ${
                    language === 'es' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  ES
                </button>
                <button
                  onClick={() => {
                    setLanguage('en');
                    setIsMenuOpen(false);
                  }}
                  className={`px-2 py-1 rounded text-sm ${
                    language === 'en' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  EN
                </button>
              </div>
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => {
                  handleShare();
                  setIsMenuOpen(false);
                }}
              >
                {t('share.title')}
              </Button>
              <Button
                asChild
                className="w-full"
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
