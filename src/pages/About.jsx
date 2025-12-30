
import { motion } from 'framer-motion';
import { Download, GraduationCap, Target } from 'lucide-react';
import { personalInfo } from '../data/personal';

const About = () => {
    return (
        <section className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-6 flex flex-col items-center text-center sticky top-24"
                >
                    <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-pink-500/20 shadow-xl group">
                        <img
                            src={personalInfo.profileImage}
                            alt={personalInfo.name}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{personalInfo.name}</h3>
                    <p className="text-pink-300 text-sm mb-4">{personalInfo.role}</p>

                    <div className="w-full h-px bg-white/10 my-4" />

                    <div className="space-y-3 text-sm text-white/60 w-full text-left">
                        <div className="flex justify-between items-center">
                            <span className="text-white/40">Location</span>
                            <span className="text-white text-right">{personalInfo.location}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-white/40">Phone</span>
                            <span className="text-white text-right">{personalInfo.phone}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-white/40">Email</span>
                            <a href={personalInfo.social.email} className="text-pink-400 hover:underline truncate ml-2">
                                {personalInfo.email}
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="glass-card p-8 md:p-12"
                >
                    <h2 className="text-4xl font-bold mb-8 text-center md:text-left text-gradient">About Me</h2>

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

                    <div className="mt-10 flex justify-center md:justify-start">
                        <a
                            href={personalInfo.resume}
                            download="Pradeesh_Sivakumar_Resume.pdf"
                            className="glass-btn flex items-center gap-2 group"
                        >
                            <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
