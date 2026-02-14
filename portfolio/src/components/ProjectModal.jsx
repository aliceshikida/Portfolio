import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import TechBadge from './TechBadge';

const ProjectModal = ({ project, isOpen, onClose }) => {
if (!project) return null;

return (
  <AnimatePresence>
    {isOpen && (
      <>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="bg-dark-lighter border-2 border-primary rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-dark-lighter border-b-2 border-primary p-6 flex justify-between items-start">
              <h2 className="text-2xl font-bold text-primary">{project.name}</h2>
              <button
                onClick={onClose}
                className="text-white hover:text-primary transition-colors"
              >
                <IoClose size={28} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Image/GIF */}
              <div className="rounded-lg overflow-hidden border-2 border-primary/30">
                <img
                  src={project.gif || project.image}
                  alt={project.name}
                  className="w-full h-auto"
                />
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Descrição</h3>
                <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xl font-semibold text-primary mb-3">Tecnologias</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-dark font-semibold rounded-lg hover:bg-primary/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={20} />
                  Ver Repositório
                </motion.a>
                
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-dark transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={18} />
                    Ver Projeto
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);
};

export default ProjectModal;