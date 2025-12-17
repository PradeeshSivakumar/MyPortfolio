
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(projects.map(p => p.category))];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section>
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
                <p className="text-white/60">Real-world solutions I've built</p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 py-2 rounded-xl text-sm transition-all duration-300 ${filter === cat
                                ? 'bg-purple-600 text-white shadow-lg scale-105'
                                : 'bg-white/5 text-white/60 hover:bg-white/10'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {filteredProjects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        onClick={setSelectedProject}
                    />
                ))}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#1a103c] border border-white/20 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 text-white/50 hover:text-white"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-6">
                                <span className="text-purple-400 text-sm font-mono tracking-wider">{selectedProject.category}</span>
                                <h3 className="text-3xl font-bold mt-2 mb-4">{selectedProject.title}</h3>
                                <p className="text-white/80 leading-relaxed text-lg">
                                    {selectedProject.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-semibold text-white/90 mb-3">Key Features</h4>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {selectedProject.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                                            <span className="bg-pink-500 rounded-full w-1.5 h-1.5 mt-2 flex-shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-semibold text-white/90 mb-3">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.techStack.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-sm text-purple-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href={selectedProject.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-btn flex-1 flex items-center justify-center gap-2 py-3"
                                >
                                    <Github size={20} /> View Source
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
