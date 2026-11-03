import type { Metadata } from "next";
import { Inter, Anton, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://my-portafolio-con-vercel.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "David Parra - WSA 2026 Nominee | Enterprise Security Architect",
  description:
    "Portafolio de David Parra - Arquitecto de Seguridad Enterprise nominado al WSA 2026. Experto en desarrollo de soluciones digitales innovadoras en Negocios y Comercio.",
  keywords: [
    "David Parra",
    "portafolio",
    "arquitecto de seguridad enterprise",
    "WSA 2026",
    "salentoalamano.com",
    "full-stack developer",
    "ciberseguridad",
  ],
  authors: [{ name: "David Parra", url: "https://github.com/dphack1987" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "David Parra - Portfolio",
    title: "David Parra - WSA 2026 Nominee | Enterprise Security Architect",
    description:
      "Arquitecto de Seguridad Enterprise nominado al WSA 2026 por salentoalamano.com.",
    images: [
      {
        url: "/media/nominacion-wsa-2026.webp",
        width: 1024,
        height: 1024,
        alt: "Nominación WSA 2026 - Salento a la Mano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Parra - WSA 2026 Nominee",
    description:
      "Arquitecto de Seguridad Enterprise nominado al WSA 2026 por salentoalamano.com.",
    images: ["/media/nominacion-wsa-2026.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <body className={`${inter.variable} ${anton.variable} ${jetbrains.variable} font-sans`}>
        <LanguageProvider>
          <RevealObserver />
          <Navbar />
          <div className="min-h-screen bg-[#070709]">{children}</div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
