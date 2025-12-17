
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Skills', path: '/skills' },
        { name: 'Projects', path: '/projects' },
        { name: 'Achievements', path: '/achievements' },
        { name: 'Contact', path: '/contact' },
    ];

    const variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold flex items-center gap-2 group">
                    <Code className="text-pink-400 group-hover:rotate-12 transition-transform" />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Pradeesh
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative font-medium transition-colors duration-300 ${isActive ? 'text-pink-400' : 'text-white/70 hover:text-white'
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-400 rounded-full"
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white/80 hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-indigo-900/90 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {navLinks.map((link, index) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `block text-lg font-medium transition-colors ${isActive ? 'text-pink-400' : 'text-white/70'
                                        }`
                                    }
                                >
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={variants}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        {link.name}
                                    </motion.div>
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
