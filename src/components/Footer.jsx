
import { Heart } from 'lucide-react';
import { personalInfo } from '../data/personal';

const Footer = () => {
    return (
        <footer className="py-6 text-center text-white/40 border-t border-white/5 mt-auto">
            <p className="flex items-center justify-center gap-2 text-sm">
                © {new Date().getFullYear()} {personalInfo.name}. Built with <Heart size={14} className="text-pink-500 fill-pink-500" /> using React & Tailwind.
            </p>
        </footer>
    );
};

export default Footer;
