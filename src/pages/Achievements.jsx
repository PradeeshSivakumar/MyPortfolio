
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar } from 'lucide-react';
import { achievements } from '../data/achievements';

const Achievements = () => {
    return (
        <section className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-gradient">Achievements</h2>
                <p className="text-white/60">Milestones and recognitions</p>
            </div>

            <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12">
                {achievements.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>

                        <div className="glass-card p-6 md:p-8 hover:bg-white/15 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-500/20 rounded-lg text-purple-300">
                                        {item.icon === 'trophy' ? <Trophy size={20} /> : <Users size={20} />}
                                    </div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-white/50 bg-white/5 px-3 py-1 rounded-full w-fit">
                                    <Calendar size={14} />
                                    {item.date}
                                </div>
                            </div>

                            <p className="text-lg text-white/90 mb-2">{item.organization}</p>
                            <p className="text-white/60 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
