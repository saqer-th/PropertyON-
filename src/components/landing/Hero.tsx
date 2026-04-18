'use client';

import Link from 'next/link';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import DashboardMockup from './DashboardMockup';
import { useRef } from 'react';

export default function Hero() {
    const { t, dir } = useLanguage();
    const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
    const isAr = dir === 'rtl';
    
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });
    
    // Add subtle parallax/perspective effect on scroll
    const rotateX = useTransform(scrollYProgress, [0, 0.5], [10, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

    return (
        <section className="relative overflow-hidden pt-24 pb-16 lg:pt-36 lg:pb-32 bg-[#FAFAFA]" ref={targetRef}>
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-emerald-200/30 blur-[130px]"></motion.div>
                <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/20 blur-[120px]"></motion.div>
            </div>

            <div className="container-custom relative z-10 flex flex-col items-center text-center">
                
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold mb-8 shadow-sm">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        {isAr ? 'الإصدار الجديد متاح الآن • PropertyON' : 'New version available • PropertyON'}
                    </div>

                    <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-[1.2]">
                        {t.hero.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-teal-800 pb-2 inline-block">
                            {t.hero.subtitle}
                        </span>
                    </h1>

                    <p className="mt-6 text-xl leading-relaxed text-gray-600 font-medium max-w-2xl mx-auto">
                        {t.hero.description}
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="https://app.f4lcon.tech/login" className="btn btn-primary group px-8 py-4 text-lg">
                            {t.hero.startNow}
                            <ArrowIcon className={`h-5 w-5 transition-transform ${isAr ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'}`} />
                        </Link>
                        <Link href="#contact" className="btn btn-secondary px-8 py-4 text-lg">
                            {t.hero.contactUs}
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Dashboard Mockup Cinematic Frame */}
            <div id="demo-mockup" className="relative mt-24 mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 scroll-mt-24" style={{ perspective: '2500px' }}>
                <motion.div
                    style={{
                        rotateX,
                        scale,
                    }}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                    className="relative z-20 rounded-2xl p-2 bg-white/20 border border-white/80 backdrop-blur-xl shadow-[0_20px_70px_-10px_rgba(0,0,0,0.15)] mx-auto max-w-full overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] to-transparent rounded-2xl pointer-events-none opacity-50" />
                    <DashboardMockup />
                </motion.div>

                {/* Fade out bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-30 pointer-events-none"></div>
            </div>
        </section>
    );
}
