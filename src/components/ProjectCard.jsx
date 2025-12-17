
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectCard = ({ project, index, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-6 flex flex-col h-full group hover:border-pink-500/30 transition-colors"
        >
            <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-white/5 rounded-lg text-pink-400 group-hover:scale-110 transition-transform duration-300">
                    <Code size={24} />
                </div>
                <span className="text-xs font-mono py-1 px-2 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {project.category}
                </span>
            </div>

            <h3 className="text-2xl font-bold mb-3 group-hover:text-pink-400 transition-colors">
                {project.title}
            </h3>

            <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded border border-white/5">
                        {tech}
                    </span>
                ))}
                {project.techStack.length > 3 && (
                    <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded border border-white/5">
                        +{project.techStack.length - 3}
                    </span>
                )}
            </div>

            <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                    <Github size={16} /> Code
                </a>
                <button
                    onClick={() => onClick(project)}
                    className="flex items-center gap-2 text-sm text-pink-400 hover:text-pink-300 ml-auto"
                >
                    Details <ExternalLink size={16} />
                </button>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
