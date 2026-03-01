// ARQUIVO: src/components/Technologies.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { FaAward } from 'react-icons/fa';
import TechBadge from './TechBadge';
import PDFModal from './PDFModal';

const Technologies = () => {
  const { language } = useLanguage();
  const [selectedPdf, setSelectedPdf] = useState(null);

  // Lista das tecnologias
  const myTechStack = [
    "Node.js", "React", "Jest", "Leaflet", "GeoLib", "JavaScript",
    "Tailwind CSS", "Python", "MongoDB", "Supabase", "Git", "Github", "Gitlab",
    "TypeScript", "HTML5", "CSS3", "Next.js", "Java", "Spring Boot",
    "MySQL", "Postman", "Junit", "Maven", "SCSS", "SQLite", "Knex.js",
    "Vitest", "SonarQube", "C", "PostgreSQL", "Azure", "Firebase", ".Net",
    "Bootstrap", "Wordpress", "Chart.js", "AdobeCC", "AdobeAI",
    "AdobePS", "Figma", "Swift", "Trello", "Jira", "Todoist"
  ];

  // Dados dos Certificados (pt e en)
  const docs = [
    {
      titlePt: "Microsoft Certified: Azure Fundamentals (AZ-900) – Conclusão: 07/2025",
      titleEn: "Microsoft Certified: Azure Fundamentals (AZ-900) — Completed: July 2025",
      type: "certificate",
      icon: <FaAward />
    },
    {
      titlePt: "Introduction to Cloud Computing 101: AWS (2025) – Conclusão: 08/2025",
      titleEn: "Introduction to Cloud Computing 101: AWS (2025) — Completed: August 2025",
      type: "certificate",
      icon: <FaAward />
    },
    {
      titlePt: "Algoritmos e Programação Orientada a Objetos com Swift: HackaTruck – 50 horas – Conclusão: 04/2025",
      titleEn: "Algorithms and Object-Oriented Programming with Swift — HackaTruck — 50 hours — Completed: April 2025",
      type: "certificate",
      icon: <FaAward />
    },
    {
      titlePt: "Full Stack Developer (C#, React): XP Inc. / DIO – 127 horas – Conclusão: 05/2025",
      titleEn: "Full Stack Developer (C#, React) — XP Inc. / DIO — 127 hours — Completed: May 2025",
      type: "certificate",
      icon: <FaAward />
    },
    {
      titlePt: "Java COMPLETO: Programação Orientada a Objetos + Projetos: Udemy – 54,5 horas – Conclusão: 11/2024",
      titleEn: "Complete Java: Object-Oriented Programming + Projects — Udemy — 54.5 hours — Completed: November 2024",
      type: "certificate",
      icon: <FaAward />
    },
    {
      titlePt: "Oracle SQL, PL/SQL e Modelagem de Banco de Dados: Udemy – 30 horas – Conclusão: 11/2024",
      titleEn: "Oracle SQL, PL/SQL, and Database Modeling — Udemy — 30 hours — Completed: November 2024",
      type: "certificate",
      icon: <FaAward />
    },
    {
      titlePt: "Power Bi Aplicado: Udemy – 23 horas – Conclusão: 04/2024",
      titleEn: "Applied Power BI — Udemy — 23 hours — Completed: April 2024",
      type: "certificate",
      icon: <FaAward />
    }
  ];

  const getTranslatedType = () => language === 'pt' ? 'Certificado' : 'Certificate';

  return (
      <section id="technologies" className="py-20 bg-dark relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16">

          {/* Coluna 1: Stack de Tecnologias */}
          <div>
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-3xl font-orbitron font-bold text-white mb-8 flex items-center gap-3"
            >
              <span className="text-primary">/</span>
              {language === 'pt' ? 'Minhas Tecnologias' : 'Tech Stack'}
            </motion.h2>

            <div className="flex flex-wrap gap-4">
              {myTechStack.map((tech) => (
                  <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>

          {/* Coluna 2: Certificações e Pesquisas */}
          <div>
            <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-3xl font-orbitron font-bold text-white mb-8 flex items-center gap-3"
            >
              <span className="text-primary">/</span>
              {language === 'pt' ? 'Certificações' : 'Certificates'}
            </motion.h2>

            <div className="space-y-4">
              {docs.map((doc, i) => (
                  <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => doc.file && setSelectedPdf(doc)}
                      className={`flex items-center justify-between p-4 bg-dark-lighter border border-gray-800 rounded-lg transition-all duration-300 hover:shadow-[0_0_15px_rgba(167,139,250,0.15)] ${doc.file ? 'hover:border-primary cursor-pointer' : 'cursor-default'}`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Ícone com brilho no hover */}
                      <div className="p-3 bg-dark rounded-full text-gray-400 group-hover:text-primary group-hover:shadow-[0_0_10px_#A78BFA] transition-all">
                        {doc.icon}
                      </div>

                      <div>
                        {/* Título do documento (sempre original) */}
                        <h4 className="text-white font-bold text-sm md:text-base group-hover:text-primary transition-colors">
                          {language === 'pt' ? doc.titlePt : doc.titleEn}
                        </h4>

                        {/* Tipo traduzido (Pesquisa/Research ou Certificado/Certificate) */}
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-orbitron">
                            {getTranslatedType(doc.type)}
                        </span>
                      </div>
                    </div>

                    {doc.file && (
                      <span className="text-gray-600 group-hover:text-white transform group-hover:translate-x-1 transition-all">
                          →
                      </span>
                    )}
                  </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal para exibir os PDFs */}
        <PDFModal
            isOpen={!!selectedPdf}
            onClose={() => setSelectedPdf(null)}
            pdfUrl={selectedPdf?.file}
            title={selectedPdf?.title}
        />
      </section>
  );
};

export default Technologies;