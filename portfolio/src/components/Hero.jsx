import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../context/LanguageContext'; // Ou useLanguage hook se preferir
import { content } from '../data/content';

const Hero = () => {
    const { language } = useContext(LanguageContext);
    const text = content[language].hero;

    return (
        <section id="about" className="min-h-screen bg-dark relative overflow-hidden pt-20 pb-20 flex items-center">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />

            <div className="container mx-auto px-6 z-10 w-full">

                {/* Coluna de Texto — mesma largura máxima que Contact para alinhar com o resto da página */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    {/* Saudação */}
                    <h2 className="text-primary font-orbitron text-lg mb-2 tracking-wider">
                        {text.greeting}
                    </h2>

                    {/* Nome */}
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                        Alice <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">
                           Shikida
                        </span>
                    </h1>

                    {/* Cargo */}
                    <h3 className="text-gray-300 text-xl font-orbitron mb-6">
                        {text.title}
                    </h3>

                    {/* Bio */}
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                        {text.description}
                    </p>

                    {/* --- ÁREA DE AÇÃO (BOTÕES + REDES) --- */}
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-10">

                        <div className="flex gap-4">
                            {/* Botão 1: Projetos (Preenchido) */}
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-primary text-dark font-bold rounded hover:bg-white hover:shadow-neon transition-all duration-300 text-center"
                            >
                                {text.cta}
                            </a>

                            {/* Botão 2: Contato (Outline/Borda) - Fica mais elegante */}
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-primary text-primary font-bold rounded hover:bg-primary hover:text-dark hover:shadow-neon transition-all duration-300 text-center"
                            >
                                {/* Fallback caso cta2 não exista no content.js */}
                                {text.cta2 || (language === 'pt' ? 'Contato' : 'Contact')}
                            </a>
                        </div>
                    </div>

                    {/* --- ÁREA DE BADGES (PUC / DTI) --- */}
                    {/* Adicionei border-t para separar visualmente */}
                    <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-6">

                        {/* Badge PUC Minas */}
                        <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg border border-white/5 hover:border-primary/30 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-white p-1 overflow-hidden flex items-center justify-center">
                                <img src="/logos/Puc.png" alt="PUC Minas" className="w-full h-full object-contain" />
                            </div>
                            <div className="text-sm">
                                <div className="font-bold text-white group-hover:text-primary transition-colors">PUC Minas</div>
                                <div className="text-gray-400 text-xs font-orbitron">
                                    {language === 'pt' ? 'Engenharia de Software' : 'Software Engineering'}
                                </div>
                            </div>
                        </div>

                        {/* Badge dti digital */}


                    </div>
                    {/* --- FIM DAS BADGES --- */}

                </motion.div>


            </div>
        </section>
    );
};

export default Hero;