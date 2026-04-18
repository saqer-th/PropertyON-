'use client';

import { motion, Variants } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { useLanguage } from '@/context/LanguageContext';

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export default function Features() {
    const { t, dir } = useLanguage();

    const getBentoClass = (index: number) => {
        // Creates a premium asymmetric bento grid for 6 items
        switch(index) {
            case 0: return "md:col-span-2 md:row-span-2 bg-primary text-white border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] group";
            case 1: return "md:col-span-1 md:row-span-1 bg-white border border-gray-200/60 shadow-sm hover:border-emerald-200/70";
            case 2: return "md:col-span-1 md:row-span-1 bg-white border border-gray-200/60 shadow-sm hover:border-emerald-200/70";
            case 3: return "md:col-span-1 md:row-span-1 bg-gray-50/50 border border-gray-200/60 shadow-sm hover:bg-white hover:border-emerald-200/70";
            case 4: return "md:col-span-2 md:row-span-1 bg-gradient-to-br from-emerald-50/50 to-teal-50/30 border border-emerald-100/50 shadow-sm";
            case 5: return "md:col-span-3 lg:col-span-1 md:row-span-1 bg-white border border-gray-200/60 shadow-sm hover:border-emerald-200/70";
            default: return "md:col-span-1 bg-white border border-gray-100";
        }
    };

    return (
        <section id="features" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-800 text-sm font-bold mb-6 tracking-wide"
                    >
                        {dir === 'rtl' ? 'ميزات صممت لراحتك' : 'Built for scale'}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl"
                    >
                        {t.features.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-6 text-xl text-gray-600 font-medium"
                    >
                        {t.features.subtitle}
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-6"
                >
                    {t.features.items.map((feature, index) => {
                        const isPrimary = index === 0;
                        const cardClass = getBentoClass(index);
                        const Icon = feature.icon;

                        return (
                            <motion.div key={index} variants={item} className="h-full flex">
                                <Tilt
                                    tiltMaxAngleX={isPrimary ? 3 : 6}
                                    tiltMaxAngleY={isPrimary ? 3 : 6}
                                    perspective={1000}
                                    transitionSpeed={1000}
                                    scale={isPrimary ? 1.01 : 1.02}
                                    className={`w-full flex flex-col rounded-3xl p-8 xl:p-10 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden ${cardClass}`}
                                >
                                    {/* Coming Soon Badge */}
                                    {feature.status === 'coming_soon' && (
                                        <div className={`absolute top-6 ${dir === 'rtl' ? 'left-6' : 'right-6'} bg-gray-900/10 backdrop-blur-md text-gray-800 border border-gray-900/10 text-xs font-bold px-3 py-1.5 rounded-full z-10`}>
                                            {t.features.comingSoon}
                                        </div>
                                    )}

                                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 relative z-10 ${isPrimary ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-600'}`}>
                                        <Icon className={`h-7 w-7 ${isPrimary ? 'text-white' : 'text-emerald-600'}`} />
                                    </div>
                                    
                                    <h3 className={`text-2xl font-bold mb-4 relative z-10 ${isPrimary ? 'text-white' : 'text-gray-900'}`}>
                                        {feature.title}
                                    </h3>
                                    
                                    <p className={`text-lg leading-relaxed relative z-10 ${isPrimary ? 'text-emerald-100/90' : 'text-gray-600'}`}>
                                        {feature.description}
                                    </p>

                                    {/* Aesthetic decorative element inside card */}
                                    {isPrimary && (
                                        <>
                                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:bg-emerald-500/30"></div>
                                            <div className="absolute -top-20 -left-20 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl pointer-events-none"></div>
                                            {/* Subtle Border Glow on Hover */}
                                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/10 transition-colors duration-500 pointer-events-none"></div>
                                        </>
                                    )}
                                </Tilt>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
