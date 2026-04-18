'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function HowItWorks() {
    const { t } = useLanguage();

    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                    >
                        {t.howItWorks.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-lg text-gray-600"
                    >
                        {t.howItWorks.subtitle}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[4.5rem] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10"></div>

                    {t.howItWorks.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative bg-white pt-4 text-center group"
                        >
                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8 transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgba(16,185,129,0.15)] group-hover:border-emerald-200">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                                <step.icon className="h-10 w-10 text-emerald-600 relative z-10 transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
