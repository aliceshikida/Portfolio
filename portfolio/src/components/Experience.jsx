import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { experiences } from '../data/experiences';
import { FaGraduationCap, FaBriefcase, FaImage } from 'react-icons/fa';

const Experience = () => {
    const { language } = useLanguage();
    // Fallback para 'pt' se o idioma não estiver carregado
    const data = experiences[language] || experiences['pt'];
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="journey" className="py-20 bg-dark relative overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4"
                >
                    {language === 'pt' ? 'Minha Jornada' : 'My Journey'}
                </motion.h2>
                <div className="w-24 h-1 bg-primary mx-auto shadow-[0_0_10px_#A78BFA] rounded-full"></div>
            </div>

            <div ref={ref} className="container mx-auto px-4 relative max-w-5xl">
                {/* Linha Fundo */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-dark-lighter md:-translate-x-1/2"></div>

                {/* Linha Neon */}
                <motion.div
                    style={{ scaleY }}
                    className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary origin-top md:-translate-x-1/2 shadow-[0_0_15px_#A78BFA] z-10"
                />

                <div className="space-y-12">
                    {data.map((item, index) => (
                        <TimelineItem key={item.id} data={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ data, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} group`}
        >
            <div className="hidden md:block w-5/12" />

            {/* Ícone Central */}
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-12 h-12 bg-dark border-2 border-primary rounded-full group-hover:bg-primary group-hover:shadow-[0_0_20px_#A78BFA] transition-all duration-300">
                <span className="text-primary group-hover:text-dark transition-colors">
                    {data.type === 'academic' ? <FaGraduationCap size={20} /> : <FaBriefcase size={18} />}
                </span>
            </div>

            {/* Card */}
            <div className="ml-20 md:ml-0 w-full md:w-5/12">
                <div className="bg-dark-lighter p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-all duration-300 relative group-hover:shadow-[0_0_15px_rgba(167,139,250,0.15)]">

                    <span className="font-orbitron text-primary text-sm tracking-wider mb-2 block font-bold">
                        {data.year}
                    </span>

                    {/* Header: Logo + Títulos */}
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-white p-1 flex-shrink-0 overflow-hidden flex items-center justify-center">
                            {data.logo ? (
                                <img
                                    src={data.logo}
                                    alt={data.company}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'block';
                                    }}
                                />
                            ) : (
                                <FaImage className="text-gray-500 text-xl" />
                            )}
                            {/* Ícone de fallback caso a imagem falhe (hidden por padrão) */}
                            <FaImage className="text-gray-500 text-xl hidden" />
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white leading-tight">{data.role}</h3>
                            <h4 className="text-gray-400 text-sm font-orbitron mt-1">
                                {data.company}
                            </h4>
                        </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed text-justify border-t border-white/5 pt-3">
                        {data.description}
                    </p>

                    {/* Tags */}
                    {data.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                            {data.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-[10px] uppercase font-bold tracking-wide text-primary bg-primary/10 border border-primary/20 px-2 py-1 rounded cursor-default hover:bg-primary hover:text-dark transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Seta (Desktop) - CORRIGIDA AQUI */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-dark-lighter transform rotate-45 ${
                        isEven
                            ? '-right-2 border-t border-r border-white/5'   // Se card na Esquerda -> Seta na Direita
                            : '-left-2 border-b border-l border-white/5'    // Se card na Direita -> Seta na Esquerda
                    }`}></div>
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;