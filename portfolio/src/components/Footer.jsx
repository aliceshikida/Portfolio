import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const COPYRIGHT_NAME = 'Alice Shikida';

const Footer = () => {
    const { language } = useLanguage();
    const currentYear = new Date().getFullYear();

    // Textos traduzidos apenas para o Footer
    const content = {
        pt: {
            pucRole: 'Engenharia de Software',
            dtiRole: 'Desenvolvedor Full Stack',
            copyright: 'Todos os direitos reservados.',
            rights: 'Feito com React & Tailwind.'
        },
        en: {
            pucRole: 'Software Engineering',
            dtiRole: 'Full Stack Developer',
            copyright: 'All rights reserved.',
            rights: 'Built with React & Tailwind.'
        }
    };

    const text = content[language];

    return (
        <footer className="bg-dark pt-10 pb-8 relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6">

                {/* 1. Área das Badges (Centralizadas) */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">

                    {/* Badge PUC Minas */}
                    <div className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:bg-white/10 group">
                        <div className="w-10 h-10 rounded-lg bg-white p-1 overflow-hidden flex items-center justify-center">
                            <img
                                src="/logos/Puc.png"
                                alt="PUC Minas"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="text-left">
                            <div className="font-bold text-white text-sm group-hover:text-primary transition-colors">
                                PUC Minas
                            </div>
                            <div className="text-gray-400 text-xs font-orbitron tracking-wide">
                                {text.pucRole}
                            </div>
                        </div>
                    </div>



                </div>

                {/* 2. Linha Divisória Sutil (Opcional, pois já tem a borda no topo do footer) */}
                {/* <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div> */}

                {/* 3. Copyright */}
                <div className="text-center">
                    <p className="text-gray-500 text-sm font-orbitron">
                        &copy; {currentYear} <span className="text-white font-bold">{COPYRIGHT_NAME}</span> · {text.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;