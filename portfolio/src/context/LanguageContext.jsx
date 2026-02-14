import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
const [language, setLanguage] = useState('pt');

const toggleLanguage = () => {
  setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
};

return (
  <LanguageContext.Provider value={{ language, toggleLanguage }}>
    {children}
  </LanguageContext.Provider>
);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
const context = useContext(LanguageContext);
if (!context) {
  throw new Error('useLanguage must be used within LanguageProvider');
}
return context;
};