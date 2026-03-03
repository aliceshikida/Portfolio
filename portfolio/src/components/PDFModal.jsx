import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';

const PDFModal = ({ pdfUrl, title, isOpen, onClose }) => {
const [loading, setLoading] = useState(true);

return (
  <AnimatePresence>
    {isOpen && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-dark-lighter border-2 border-primary rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden"
          >
            {/* Apenas o PDF (páginas) — botão fechar em cima */}
            <div className="absolute top-2 right-2 z-10">
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-black/60 text-white hover:text-primary hover:bg-black/80 transition-colors"
                aria-label="Fechar"
              >
                <IoClose size={24} />
              </button>
            </div>

            {/* PDF Viewer — ocupa todo o espaço */}
            <div className="flex-1 relative min-h-0">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent" />
                </div>
              )}
              <iframe
                src={pdfUrl}
                className="w-full h-full"
                onLoad={() => setLoading(false)}
                title={title}
              />
            </div>
          </motion.div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);
};

export default PDFModal;