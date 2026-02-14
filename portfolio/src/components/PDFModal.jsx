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
            className="bg-dark-lighter border-2 border-primary rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b-2 border-primary">
              <h2 className="text-2xl font-bold text-primary">{title}</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-primary transition-colors"
              >
                <IoClose size={28} />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 relative">
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