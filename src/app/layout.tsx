import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "David Parra - Arquitecto de Seguridad Enterprise | PREMIADO 2026",
  description: "Desarrollador Full-Stack y Arquitecto de Seguridad Enterprise. GANADOR DEL PREMIO MEJOR PROYECTO DIGITAL COLOMBIA 2026 por salentoalamano.com. 45+ proyectos en GitHub.",
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
              <p className="mb-2">
                PREMIADO: <a href="https://www.salentoalamano.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">salentoalamano.com</a>
                {" | "}
                <a href="https://quindiotravel.com.co" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">quindiotravel.com.co</a>
                {" | "}
                <a href="https://github.com/dphack1987/filandialamano.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">filandialamano.com</a>
              </p>
              <p>GitHub: <a href="https://github.com/dphack1987" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">github.com/dphack1987</a> (45+ proyectos)</p>
              <p className="mt-2">&copy; 2026 David Parra. Arquitecto de Seguridad Enterprise.</p>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
