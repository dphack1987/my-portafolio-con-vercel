import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Parra - Cybersecurity Specialist & Full-Stack Developer",
  description: "Portfolio de David Parra - Especialista en Ciberseguridad y Desarrollador Full-Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
          <div className="min-h-screen bg-white">
            {children}
          </div>
          <footer className="bg-gray-50 py-8">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>&copy; 2024 David Parra. Todos los derechos reservados.</p>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
