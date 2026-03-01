import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaFileAlt } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';
import LanguageToggle from './LanguageToggle';
import PDFModal from './PDFModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCVOpen, setIsCVOpen] = useState(false);
    const { language } = useLanguage();

    const navLinks = [
        { name: language === 'pt' ? 'Sobre' : 'About', href: '#about' },
        { name: language === 'pt' ? 'Jornada' : 'Journey', href: '#journey' },
        { name: language === 'pt' ? 'Projetos' : 'Projects', href: '#projects' },
        { name: language === 'pt' ? 'Tecnologias' : 'Technologies', href: '#technologies' },
        { name: language === 'pt' ? 'Contato' : 'Contact', href: '#contact' },
    ];

    const cvConfig = language === 'pt'
        ? { file: '/pdfs/CV-PTBR.pdf', title: 'Meu Currículo (PT-BR)' }
        : { file: '/pdfs/CV-EN.pdf', title: 'My Resume (EN)' };

    return (
        <>
            <nav className="fixed w-full z-40 top-0 left-0 bg-dark-bg/80 backdrop-blur-md border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    {/* Nome / Home */}
                    <a href="#" className="text-white font-orbitron font-bold text-lg hover:text-primary transition-colors">
                        Alice Shikida
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex gap-8 items-center">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="relative text-gray-300 text-sm uppercase tracking-wider transition-colors duration-300 hover:text-primary group font-orbitron"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}

                            {/* Botão CV (Desktop) */}
                            <li>
                                <button
                                    onClick={() => setIsCVOpen(true)}
                                    className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-dark transition-all duration-300 text-sm font-bold font-orbitron shadow-[0_0_10px_rgba(167,139,250,0.2)] hover:shadow-[0_0_20px_rgba(167,139,250,0.5)] cursor-pointer"
                                >
                                    <FaFileAlt />
                                    CV
                                </button>
                            </li>
                        </ul>

                        {/* Botão de Idioma */}
                        <div className="border-l border-gray-700 pl-6">
                            <LanguageToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white hover:text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden bg-dark-lighter border-t border-gray-800"
                    >
                        <ul className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block text-gray-300 hover:text-primary font-medium font-orbitron"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}

                            {/* Botão CV (Mobile) */}
                            <li>
                                <button
                                    onClick={() => {
                                        setIsCVOpen(true);
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-2 text-primary font-bold"
                                >
                                    <FaFileAlt />
                                    {language === 'pt' ? 'Ver Currículo' : 'View Resume'}
                                </button>
                            </li>

                            <div className="pt-4 border-t border-gray-700">
                                <LanguageToggle />
                            </div>
                        </ul>
                    </motion.div>
                )}
            </nav>

            {/* Componente Modal */}
            <PDFModal
                isOpen={isCVOpen}
                onClose={() => setIsCVOpen(false)}
                pdfUrl={cvConfig.file}
                title={cvConfig.title}
            />
        </>
    );
};

export default Navbar;