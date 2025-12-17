
import { motion } from 'framer-motion';
import { Download, GraduationCap, Target } from 'lucide-react';
import { personalInfo } from '../data/personal';

const About = () => {
    return (
        <section className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 md:p-12 mb-8"
            >
                <h2 className="text-4xl font-bold mb-8 text-center text-gradient">About Me</h2>

                <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                    <p>{personalInfo.about.short}</p>

                    <div className="flex items-start gap-3 mt-6">
                        <Target className="text-pink-400 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Career Objective</h3>
                            <p>{personalInfo.about.objective}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 mt-6">
                        <GraduationCap className="text-purple-400 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <h4 className="font-bold text-lg">{personalInfo.role}</h4>
                                <p className="text-pink-300">{personalInfo.college}</p>
                                <div className="flex justify-between mt-2 text-sm text-white/60">
                                    <span>{personalInfo.year}</span>
                                    <span>CGPA: <span className="text-white">{personalInfo.cgpa}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <button className="glass-btn flex items-center gap-2 group">
                        <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                        Download Resume
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
