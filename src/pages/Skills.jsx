
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import SkillBar from '../components/SkillBar';
import { useState } from 'react';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", ...skills.map(s => s.category)];

    const filteredSkills = activeCategory === "All"
        ? skills
        : skills.filter(s => s.category === activeCategory);

    return (
        <section className="max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-10"
            >
                <h2 className="text-4xl font-bold mb-4 text-gradient">Technical Skills</h2>
                <p className="text-white/60">My technical proficiency and tools I use</p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === cat
                                ? 'bg-pink-600/20 border-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)]'
                                : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredSkills.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="glass-card p-6 md:p-8 hover:bg-white/15 transition-colors"
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-purple-300 border-b border-white/10 pb-2">
                            {skillGroup.category}
                        </h3>
                        <div className="space-y-4">
                            {skillGroup.items.map((skill) => (
                                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
