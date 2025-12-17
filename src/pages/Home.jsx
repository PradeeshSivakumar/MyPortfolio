
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../data/personal';
import { useState, useEffect } from 'react';

const Home = () => {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = personalInfo.roles;
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];

            if (isDeleting) {
                setText(currentRole.substring(0, text.length - 1));
            } else {
                setText(currentRole.substring(0, text.length + 1));
            }

            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex, roles]);

    return (
        <section className="min-h-[80vh] flex flex-col justify-center items-center text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm mb-6 backdrop-blur-md">
                    Welcome to my portfolio
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">{personalInfo.name.split(' ')[0]}</span> <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
                </h1>

                <div className="h-10 mb-8 text-2xl md:text-3xl text-white/80 font-light">
                    I am a <span className="font-semibold text-pink-400">{text}</span>
                    <span className="animate-pulse">|</span>
                </div>

                <p className="max-w-2xl mx-auto text-lg text-white/60 mb-10 leading-relaxed">
                    {personalInfo.tagline}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/projects" className="glass-btn flex items-center justify-center gap-2 group">
                        View Projects
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </Link>
                    <Link to="/contact" className="glass-btn bg-pink-600/20 hover:bg-pink-600/30 flex items-center justify-center gap-2">
                        Contact Me
                        <Mail size={20} />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default Home;
