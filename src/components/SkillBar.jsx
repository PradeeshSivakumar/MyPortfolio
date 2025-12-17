
import { motion } from 'framer-motion';

const SkillBar = ({ name, level }) => {
    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-white/90">{name}</span>
                <span className="text-sm font-medium text-white/70">{level}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5 backdrop-blur-sm shadow-inner">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                ></motion.div>
            </div>
        </div>
    );
};

export default SkillBar;
