import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/personal';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = 'service_02bv9k9'; // Updated from user input
        const TEMPLATE_ID = 'template_d03igxo'; // Updated from user input
        const PUBLIC_KEY = 'UXlFj7v-FNBIP-OJc'; // Updated from user input

        if (SERVICE_ID === 'service_id' && process.env.NODE_ENV === 'development') {
            console.warn('EmailJS keys are missing. Please configure them in Contact.jsx');
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setIsSubmitting(false);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                setIsSubmitting(false);
            });
    };

    return (
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
            >
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-gradient">Get in Touch</h2>
                    <p className="text-white/60 text-lg">
                        Have a project in mind or want to collaborate? I'd love to hear from you.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 glass-card p-4">
                        <div className="bg-purple-500/20 p-3 rounded-full text-purple-300">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-white/50">Email</p>
                            <a href={personalInfo.social.email} className="text-lg hover:text-pink-400 transition-colors">
                                {personalInfo.email}
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 glass-card p-4">
                        <div className="bg-purple-500/20 p-3 rounded-full text-purple-300">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-white/50">Phone</p>
                            <p className="text-lg">{personalInfo.phone}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 glass-card p-4">
                        <div className="bg-purple-500/20 p-3 rounded-full text-purple-300">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-white/50">Location</p>
                            <p className="text-lg">{personalInfo.location}</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <a
                        href={personalInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/5 rounded-full hover:bg-white/20 hover:scale-110 transition-all cursor-pointer"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href={personalInfo.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/5 rounded-full hover:bg-white/20 hover:scale-110 transition-all cursor-pointer"
                    >
                        <Linkedin size={24} />
                    </a>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-8"
            >
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">Name</label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/70 mb-2">Message</label>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all resize-none"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full glass-btn bg-gradient-to-r from-purple-600 to-pink-600 border-none hover:opacity-90 flex items-center justify-center gap-2 mt-2"
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && <Send size={18} />}
                    </button>

                    {status === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm text-center"
                        >
                            Message sent successfully!
                        </motion.div>
                    )}

                    {status === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm text-center flex items-center justify-center gap-2"
                        >
                            <AlertCircle size={16} />
                            Failed to send. Please check the console or try again later.
                        </motion.div>
                    )}
                </form>
            </motion.div>

        </section>
    );
};

export default Contact;
