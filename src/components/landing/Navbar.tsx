'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const { language, setLanguage, t, dir } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'ar' : 'en');
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-lg border-b border-gray-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-4' : 'bg-transparent py-6'}`}>
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10">
                        <Image
                            src="/logo.png"
                            alt="PropertyON Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        PropertyON
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-gray-600 font-medium hover:text-emerald-600 transition-all">{t.navbar.features}</Link>
                    <Link href="#how-it-works" className="text-gray-600 font-medium hover:text-emerald-600 transition-all">{t.navbar.howItWorks}</Link>
                    <Link href="#contact" className="text-gray-600 font-medium hover:text-emerald-600 transition-all">{t.navbar.contact}</Link>
                </div>

                <div className="hidden md:flex items-center gap-5">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors px-3 py-2 rounded-xl hover:bg-emerald-50/50"
                    >
                        <Globe className="w-4 h-4" />
                        <span className="uppercase text-sm font-bold tracking-wider">{language === 'en' ? 'العربية' : 'English'}</span>
                    </button>
                    <Link href="#demo-mockup" className="text-gray-500 font-medium hover:text-emerald-600 transition-colors bg-gray-50/50 px-3 py-2 rounded-xl border border-gray-100">
                        {t.navbar.bookDemo}
                    </Link>
                    <Link href="https://app.f4lcon.tech/login" className="text-gray-900 font-bold hover:text-emerald-600 transition-colors">
                        {t.navbar.login}
                    </Link>
                    <Link href="https://app.f4lcon.tech/login" className="btn btn-primary">
                        {t.navbar.startFree}
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: dir === 'rtl' ? -100 : 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: dir === 'rtl' ? -100 : 100 }}
                            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                        >
                            <Link href="#features" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-gray-800">
                                {t.navbar.features}
                            </Link>
                            <Link href="#how-it-works" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-gray-800">
                                {t.navbar.howItWorks}
                            </Link>
                            <Link href="#contact" onClick={() => setIsOpen(false)} className="text-2xl font-medium text-gray-800">
                                {t.navbar.contact}
                            </Link>

                            <div className="flex flex-col items-center gap-6 mt-8 w-full px-8">
                                <button
                                    onClick={() => { toggleLanguage(); setIsOpen(false); }}
                                    className="flex items-center gap-2 text-lg font-medium text-gray-600"
                                >
                                    <Globe className="w-5 h-5" />
                                    <span>{language === 'en' ? 'العربية' : 'English'}</span>
                                </button>
                                <Link href="/login" onClick={() => setIsOpen(false)} className="text-primary font-medium text-xl">
                                    {t.navbar.login}
                                </Link>
                                <Link href="/register" onClick={() => setIsOpen(false)} className="btn btn-primary w-full text-center text-lg py-4">
                                    {t.navbar.startFree}
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
