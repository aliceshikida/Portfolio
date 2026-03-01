import React, { createContext, useState } from 'react';

// 1. Cria o Contexto (a "caixa" que guarda os dados)
export const LanguageContext = createContext();

// 2. Cria o Provider (o componente que envolve o App)
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt'); // Começa em português

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {children}
      </LanguageContext.Provider>
  );
};