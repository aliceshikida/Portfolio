import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useLanguage } from '../hooks/useLanguage'; // 1. Importando o Hook de idioma

const TechTag = ({ text }) => (
    <span className="flex items-center gap-2 px-3 py-1 text-sm font-bold text-white bg-teal-900/50 border border-teal-500 rounded-md">
        {text}
  </span>
);

const ProjectModal = ({ isOpen, onClose, project }) => {
    const { language } = useLanguage(); // 2. Pegando o idioma atual

    if (!isOpen || !project) return null;

    // 3. CORREÇÃO DO LINK: Usa githubUrl ou liveUrl (o que tiver disponível)
    const projectLink = project.githubUrl || project.liveUrl || "#";

    // 4. TRADUÇÃO DO BOTÃO
    const buttonText = language === 'pt' ? 'Ver Projeto' : 'See Project';

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="relative w-full max-w-4xl bg-[#0F0F0F] border border-primary/30 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(167,139,250,0.1)]"
                    onClick={(e) => e.stopPropagation()}
                >

                    {/* Botão Fechar */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors z-10"
                    >
                        <IoClose size={28} />
                    </button>

                    {/* Header Visual */}
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

                    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Lado Esquerdo */}
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-white">
                                {project.name} {/* Nota: Mudei de project.title para project.name para bater com seu JSON */}
                            </h2>

                            <div className="w-full h-48 md:h-64 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="object-contain max-h-full"
                                />
                            </div>

                            <div className="flex gap-4">
                                <div className="w-1 bg-primary rounded-full min-h-[100px]"></div>
                                <p className="text-gray-300 text-sm leading-relaxed text-justify font-light">
                                    {project.longDescription}
                                </p>
                            </div>
                        </div>

                        {/* Lado Direito */}
                        <div className="flex flex-col justify-between space-y-6">

                            <div className="p-6 border border-primary/20 rounded-xl bg-[#1a1a1a]">
                                <h3 className="text-xl font-bold text-white mb-4">
                                    {language === 'pt' ? 'Tecnologias' : 'Technologies'}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <TechTag key={tech} text={tech} />
                                    ))}
                                </div>
                            </div>

                            {/* 5. BOTÃO CORRIGIDO E ESTILIZADO */}
                            <a
                                href={projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 border border-white text-white rounded-lg flex items-center justify-center gap-3 transition-all duration-300 group hover:bg-primary hover:border-primary hover:text-black hover:shadow-[0_0_20px_#A78BFA]"
                            >
                                <FaGithub className="text-xl" /> {/* Mudei para ícone do Github já que é um githubUrl */}
                                <span className="font-bold text-lg font-orbitron tracking-wide">
                                    {buttonText}
                                </span>
                                <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 transition-transform"/>
                            </a>
                        </div>

                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectModal;