import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext'; // Importa o contexto que criamos acima

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error('useLanguage deve ser usado dentro de um LanguageProvider');
    }

    return context;
};