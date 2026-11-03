'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Code, Globe, Award, ExternalLink, GitBranch, Mail, Phone, ChevronRight, Github } from 'lucide-react';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = 'David Parra > Arquitecto de Seguridad Enterprise | Experto SEO | PREMIADO MEJOR PROYECTO DIGITAL COLOMBIA 2026';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const skills = [
    { name: 'Arquitectura Enterprise', level: 95, tools: 'ELK Stack, Docker, K8s, Kafka, Redis' },
    { name: 'Security Operations', level: 90, tools: 'Wazuh, TheHive, Cortex, MISP, OpenCTI' },
    { name: 'Machine Learning', level: 85, tools: 'Jupyter, MLflow, TensorFlow, PyTorch' },
    { name: 'Desarrollo Web', level: 92, tools: 'React, Next.js, TypeScript, Java, Python' },
    { name: 'Ciberseguridad', level: 88, tools: 'CyberArma, Nmap, Metasploit, Burpsuite' },
    { name: 'SEO & Marketing', level: 80, tools: 'SEO Optimization, Marketing Digital' },
  ];

  const projects = [
    { name: 'Salento a la Mano', link: 'https://www.salentoalamano.com', description: 'PREMIADO Mejor Proyecto Digital Colombia 2026 - 70+ negocios, 545+ commits', icon: Award },
    { name: 'Filandia a la Mano', link: 'https://github.com/dphack1987/filandialamano.com', description: 'Plataforma de turismo digital para Filandia, Quindío', icon: Globe },
    { name: 'Quindio Travel', link: 'https://quindiotravel.com.co', description: 'Portal de turismo del Quindío con marketing digital', icon: Globe },
    { name: 'CyberArma Framework', link: 'https://github.com/dphack1987/weapon', description: 'Framework de seguridad enterprise (1,000+ líneas Python)', icon: Terminal },
    { name: 'Mapa Digital Salento', link: 'https://github.com/dphack1987/mapa-digital-salento', description: 'Plataforma de mapas interactivos (317 commits)', icon: Globe },
    { name: 'Antidron System', link: 'https://github.com/dphack1987/antidron', description: 'Sistema de detección de drones (2026)', icon: Shield },
    { name: 'Portafolio GitHub', link: 'https://github.com/dphack1987', description: '45+ proyectos públicos en GitHub', icon: GitBranch },
  ];

  const certifications = [
    { name: 'EC-Council', year: '2024', description: 'Ciberseguridad y Hacking Ético' },
    { name: 'Universidad de Colorado', year: '2023', description: 'Gestión y Seguridad de Servidores Linux' },
    { name: 'NYU', year: '2023', description: 'Introducción a Ataques Cibernéticos' },
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header Terminal */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="border-b border-green-900/30 bg-black/50 backdrop-blur-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex-1 bg-green-900/20 rounded px-4 py-2 text-sm sm:text-base">
              <span className="text-green-600">root@davidparr</span>
              <span className="text-green-400">:~$ </span>
              <span className="text-green-300">{typedText}</span>
              {isTyping && <span className="animate-pulse">_</span>}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 mb-4">
            DAVID PARRA
          </h1>
          <p className="text-green-600 text-base sm:text-lg mb-6 max-w-3xl">
            Arquitecto de Seguridad Enterprise y Desarrollador Full-Stack con experiencia en ELK Stack,
            Docker/Kubernetes, Machine Learning para seguridad y SEO avanzado. <span className="text-green-400 font-semibold">GANADOR DEL PREMIO MEJOR PROYECTO DIGITAL COLOMBIA 2026</span> por salentoalamano.com.
            Desarrollado CyberArma Framework (1,000+ líneas Python) y 45+ proyectos en GitHub.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
            <a href="mailto:parraprietodavid87@gmail.com" className="flex items-center gap-2 hover:text-green-300 transition-colors">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">parraprietodavid87@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a href="tel:+573026047592" className="flex items-center gap-2 hover:text-green-300 transition-colors">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">+57 302 604 7592</span>
              <span className="sm:hidden">Teléfono</span>
            </a>
            <a href="https://github.com/dphack1987" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-300 transition-colors">
              <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>github.com/dphack1987</span>
            </a>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6 sm:w-8 sm:h-8" />
            COMPETENCIAS CLAVE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-green-900/10 border border-green-900/30 rounded-lg p-4 sm:p-6 hover:border-green-500/50 transition-all hover:scale-105"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-300 font-semibold text-sm sm:text-base">{skill.name}</span>
                  <span className="text-green-500 text-xs sm:text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-green-900/30 rounded-full h-2 mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                    className="bg-green-500 h-2 rounded-full"
                  />
                </div>
                <p className="text-green-600 text-xs sm:text-sm">{skill.tools}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 sm:w-8 sm:h-8" />
            PROYECTOS DESTACADOS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group bg-green-900/10 border border-green-900/30 rounded-lg p-4 sm:p-6 hover:border-green-500/50 transition-all hover:scale-105 block"
              >
                <div className="flex items-start justify-between mb-3">
                  <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:text-green-400 transition-colors" />
                </div>
                <h3 className="text-green-300 font-semibold text-base sm:text-lg mb-2">{project.name}</h3>
                <p className="text-green-600 text-sm">{project.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-6 flex items-center gap-2">
            <Award className="w-6 h-6 sm:w-8 sm:h-8" />
            PREMIOS Y RECONOCIMIENTOS
          </h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-gradient-to-r from-green-900/20 to-yellow-900/20 border-2 border-yellow-500/50 rounded-lg p-6 sm:p-8 text-center"
          >
            <div className="text-yellow-400 text-lg sm:text-xl font-bold mb-2">
              PREMIO MEJOR PROYECTO DIGITAL COLOMBIA 2026
            </div>
            <div className="text-green-300 text-sm sm:text-base mb-4">
              Categoría Comercial y de Negocios
            </div>
            <div className="text-green-400 text-xs sm:text-sm mb-4">
              Proyecto: salentoalamano.com
            </div>
            <div className="text-green-600 text-xs sm:text-sm max-w-2xl mx-auto">
              Reconocimiento nacional por excelencia en desarrollo de plataformas digitales turísticas con impacto en el Quindío (70+ negocios integrados, 2,500+ palmas de cera protegidas, 15 km de senderos mantenidos)
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
            CERTIFICACIONES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="bg-green-900/10 border border-green-900/30 rounded-lg p-4 sm:p-6 text-center hover:border-green-500/50 transition-all"
              >
                <div className="text-green-400 text-xs sm:text-sm mb-2">{cert.year}</div>
                <h3 className="text-green-300 font-semibold text-sm sm:text-base mb-1">{cert.name}</h3>
                <p className="text-green-600 text-xs sm:text-sm">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
            LOGROS CLAVE
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              'PREMIO MEJOR PROYECTO DIGITAL COLOMBIA 2026: salentoalamano.com - Categoría Comercial y Negocios',
              'CyberArma Framework: 1,000+ líneas de código para evaluación de seguridad profesional',
              'Arquitectura Enterprise: Sistema capaz de procesar 1000+ objetivos simultáneos',
              'Security Operations Center: SOC completo con threat intelligence y respuesta automatizada',
              'Plataformas SEO: 3 sitios de turismo digital con 545+ commits cada uno (70+ negocios integrados)',
              'Documentación Técnica: 100+ herramientas de seguridad documentadas profesionalmente',
              '45+ Proyectos: GitHub con enfoque en seguridad enterprise y desarrollo web'
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                className="flex items-start gap-3 bg-green-900/10 border border-green-900/30 rounded-lg p-3 sm:p-4"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-green-300 text-sm sm:text-base">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="border-t border-green-900/30 pt-6 sm:pt-8 text-center"
        >
          <p className="text-green-600 text-xs sm:text-sm mb-2">
            PREMIADO: <a href="https://www.salentoalamano.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 mx-1">salentoalamano.com</a>
            <span className="mx-1">|</span>
            <a href="https://quindiotravel.com.co" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 mx-1">quindiotravel.com.co</a>
            <span className="mx-1">|</span>
            <a href="https://github.com/dphack1987/filandialamano.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 mx-1">filandialamano.com</a>
          </p>
          <p className="text-green-600 text-xs sm:text-sm">
            GitHub: <a href="https://github.com/dphack1987" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300">github.com/dphack1987</a>
          </p>
          <p className="text-green-700 text-xs mt-2">
            © 2025 David Parra | Arquitecto de Seguridad Enterprise
          </p>
        </motion.div>
      </div>
    </div>
  );
}
