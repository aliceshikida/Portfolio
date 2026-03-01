// ARQUIVO: src/components/Technologies.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { FaAward, FaSearch } from 'react-icons/fa';
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

  // Dados dos Certificados e Pesquisas
  // Mantive os tipos como chaves ("research", "certificate") para facilitar a tradução
  const docs = [
    {
      title: "Segurança na Injeção de Dependência",
      file: "/pdfs/Segurança_na_Injeção_de_Dependência__Melhores_Práticas_em_Sistemas_Orientados_a_Objetos.pdf",
      type: "research", // Use chave interna
      icon: <FaSearch />
    },
    {
      title: "Red Hat System Admin I",
      file: "/pdfs/certificates/CourseAttendance20250723-31-9dw13f.pdf",
      type: "certificate",
      icon: <FaAward />
    },
    {
      title: "GFT Start #7 Java",
      file: "/pdfs/certificates/GFTStart.pdf",
      type: "certificate",
      icon: <FaAward />
    },
    {
      title: "Algoritmos e Programação com Swift",
      file: "/pdfs/certificates/Conceitos_e_Fundamentos_Algoritmos_e_Programação_Orientada_a_Objetos_com_Swift-Certificado_1815.pdf",
      type: "certificate",
      icon: <FaAward />
    }
  ];

  // Função auxiliar para traduzir o tipo
  const getTranslatedType = (type) => {
    if (language === 'pt') {
      return type === 'research' ? 'Pesquisa' : 'Certificado';
    } else {
      return type === 'research' ? 'Research' : 'Certificate';
    }
  };

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
              {language === 'pt' ? 'Certificações & Pesquisas' : 'Certificates & Research'}
            </motion.h2>

            <div className="space-y-4">
              {docs.map((doc, i) => (
                  <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      onClick={() => setSelectedPdf(doc)}
                      className="flex items-center justify-between p-4 bg-dark-lighter border border-gray-800 rounded-lg hover:border-primary cursor-pointer group transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)]"
                  >
                    <div className="flex items-center gap-4">
                      {/* Ícone com brilho no hover */}
                      <div className="p-3 bg-dark rounded-full text-gray-400 group-hover:text-primary group-hover:shadow-[0_0_10px_#00FF00] transition-all">
                        {doc.icon}
                      </div>

                      <div>
                        {/* Título do documento (sempre original) */}
                        <h4 className="text-white font-bold text-sm md:text-base group-hover:text-primary transition-colors">
                          {doc.title}
                        </h4>

                        {/* Tipo traduzido (Pesquisa/Research ou Certificado/Certificate) */}
                        <span className="text-xs text-gray-500 uppercase tracking-wider font-orbitron">
                            {getTranslatedType(doc.type)}
                        </span>
                      </div>
                    </div>

                    <span className="text-gray-600 group-hover:text-white transform group-hover:translate-x-1 transition-all">
                        →
                    </span>
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