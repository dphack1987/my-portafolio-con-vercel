"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t-2 border-[#ffd400] bg-[#0a0a0c] py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm uppercase tracking-widest text-zinc-400">
          <span className="bg-[#ffd400] px-2 py-1 font-bold text-black">
            {t('footer.awarded')}
          </span>
          <a
            href="https://www.salentoalamano.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 underline decoration-[#ffd400] decoration-2 underline-offset-4 transition-colors hover:text-[#ffd400]"
          >
            salentoalamano.com
          </a>
          <span className="text-zinc-700">/</span>
          <a
            href="https://quindiotravel.com.co"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-300 underline decoration-[#ffd400] decoration-2 underline-offset-4 transition-colors hover:text-[#ffd400]"
          >
            quindiotravel.com.co
          </a>
        </p>
        <p className="mb-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <a
            href="https://github.com/dphack1987"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[#ffd400] transition-colors hover:text-white"
          >
            {t('footer.github')}
          </a>
          <span className="text-zinc-700">/</span>
          <a
            href="https://www.linkedin.com/in/david-parra-4b5a27313"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[#ffd400] transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-600">
          {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
