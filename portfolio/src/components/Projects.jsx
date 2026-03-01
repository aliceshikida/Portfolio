import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../context/LanguageContext';
import { projects } from '../data/projects'; // Importe seus dados
import ProjectModal from './ProjectModal';

const Projects = () => {
    const { language } = useContext(LanguageContext);
    const [selectedProject, setSelectedProject] = useState(null);

    const projectList = projects[language];

    return (
        <section id="projects" className="py-20 bg-dark-lighter">
            <div className="container mx-auto px-6">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-16 text-center"
                >
                    {language === 'pt' ? 'Projetos' : 'Projects'} <span className="text-primary">.</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectList.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                            className="group cursor-pointer bg-dark border border-gray-800 rounded-xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-neon"
                        >
                            {/* Imagem do Card */}
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            {/* Conteúdo do Card */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                                    {project.description}
                                </p>

                                {/* Tags de tecnologia (resumidas) */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map(tech => (
                                        <span key={tech} className="text-xs text-primary border border-primary/30 px-2 py-1 rounded">
                      {tech}
                    </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="text-xs text-gray-500 px-2 py-1">+ {project.technologies.length - 3}</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Integration */}
            <ProjectModal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                project={selectedProject}
            />
        </section>
    );
};

export default Projects;