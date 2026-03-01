import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

const LanguageToggle = () => {
const { language, toggleLanguage } = useLanguage();

return (
  <motion.button
    onClick={toggleLanguage}
    className="relative w-16 h-8 bg-dark-lighter rounded-full border-2 border-primary flex items-center px-1 hover:border-primary transition-colors"
    whileTap={{ scale: 0.95 }}
    title={language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
  >
    <motion.div
      className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-dark font-orbitron font-bold text-xs"
      animate={{ x: language === 'pt' ? 0 : 28 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    >
      {language.toUpperCase()}
    </motion.div>
  </motion.button>
);
};

export default LanguageToggle;