'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { t, dir } = useLanguage();

    return (
        <section className="py-24 bg-white">
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mx-auto w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-100/50"
                    >
                        <HelpCircle className="w-7 h-7 text-emerald-600" />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                    >
                        {t.faq.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-lg text-gray-600"
                    >
                        {t.faq.subtitle}
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {t.faq.items.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.06)] hover:border-emerald-100 transition-all duration-300 group"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className={`flex items-center justify-between w-full p-6 lg:p-8 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                            >
                                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-emerald-700' : 'text-gray-900 group-hover:text-emerald-600'}`}>{faq.question}</span>
                                <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors ${openIndex === index ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-50 text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-500'}`}>
                                    <ChevronDown
                                        className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 lg:px-8 pb-6 lg:pb-8 text-gray-600 leading-relaxed pt-2 text-lg">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
