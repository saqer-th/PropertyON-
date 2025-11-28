'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Features() {
    const { t, dir } = useLanguage();

    return (
        <section id="features" className="py-24 bg-gray-50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                    >
                        {t.features.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="mt-4 text-lg text-gray-600"
                    >
                        {t.features.subtitle}
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {t.features.items.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                        >
                            {feature.status === 'coming_soon' && (
                                <div className={`absolute top-4 ${dir === 'rtl' ? 'left-4' : 'right-4'} bg-secondary/10 text-secondary text-xs font-bold px-2 py-1 rounded-full`}>
                                    {t.features.comingSoon}
                                </div>
                            )}

                            <div className="h-12 w-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <feature.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
