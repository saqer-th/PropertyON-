'use client';

import Link from 'next/link';
import { CheckCircle2, ArrowRight, ArrowLeft, BellRing, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
    const { t, dir } = useLanguage();
    const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

    return (
        <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40 bg-gradient-to-b from-white to-gray-50">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl opacity-50"></div>
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl lg:text-7xl leading-tight">
                                {t.hero.title} <br />
                                <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-blue-400">
                                    {t.hero.subtitle}
                                </span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="mt-8 text-xl leading-8 text-gray-600 font-light"
                        >
                            {t.hero.description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="mt-10 flex flex-col sm:flex-row gap-5"
                        >
                            <Link href="https://app.f4lcon.tech/login" className="btn btn-primary group text-lg px-8 py-4 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                                {t.hero.startNow}
                                <ArrowIcon className={`h-5 w-5 transition-transform ${dir === 'rtl' ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'}`} />
                            </Link>
                            <Link href="#contact" className="btn btn-secondary text-lg px-8 py-4 shadow-sm hover:shadow-md transition-all">
                                {t.hero.contactUs}
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="mt-12 space-y-4"
                        >
                            {t.hero.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                                        <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Abstract Visual / Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: dir === 'rtl' ? -2 : 2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="relative mx-auto w-full max-w-lg lg:max-w-none"
                    >
                        <div className="relative rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-3 shadow-2xl ring-1 ring-gray-900/10 lg:-m-4 lg:rounded-3xl lg:p-4 transform hover:scale-[1.02] transition-transform duration-500">
                            <div className="rounded-2xl bg-white/5 backdrop-blur-sm overflow-hidden border border-white/10">
                                {/* Abstract Dashboard Representation */}
                                <div className="aspect-[4/3] w-full bg-gray-900 flex flex-col p-6 relative overflow-hidden">
                                    {/* Glowing effect */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>

                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-8 z-10">
                                        <div className="w-32 h-4 bg-gray-700 rounded-full"></div>
                                        <div className="flex gap-2">
                                            <div className="w-8 h-8 rounded-full bg-gray-700"></div>
                                            <div className="w-8 h-8 rounded-full bg-secondary"></div>
                                        </div>
                                    </div>

                                    {/* Content Grid */}
                                    <div className="grid grid-cols-2 gap-4 z-10">
                                        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 mb-3"></div>
                                            <div className="w-16 h-3 bg-gray-600 rounded-full mb-2"></div>
                                            <div className="w-24 h-6 bg-gray-500 rounded-full"></div>
                                        </div>
                                        <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50">
                                            <div className="w-8 h-8 rounded-lg bg-green-500/20 mb-3"></div>
                                            <div className="w-16 h-3 bg-gray-600 rounded-full mb-2"></div>
                                            <div className="w-24 h-6 bg-gray-500 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Chart Area */}
                                    <div className="mt-6 flex-1 bg-gray-800/30 rounded-xl border border-gray-700/30 p-4 flex items-end justify-between gap-2 z-10">
                                        {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                animate={{ height: `${h}%` }}
                                                transition={{ duration: 1, delay: 1 + (i * 0.1) }}
                                                className="w-full bg-gradient-to-t from-secondary/50 to-secondary rounded-t-sm"
                                            ></motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Alerts */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className={`absolute -bottom-4 ${dir === 'rtl' ? '-left-4' : '-right-4'} bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20 hidden md:block max-w-xs`}
                        >
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 border-b border-gray-50 pb-2">
                                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <Clock className="h-4 w-4 text-red-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">{t.hero.alerts.contractExpiry}</p>
                                        <p className="text-sm font-bold text-gray-900">{t.hero.alerts.contractExpiryDesc}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                                        <BellRing className="h-4 w-4 text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">{t.hero.alerts.paymentDue}</p>
                                        <p className="text-sm font-bold text-gray-900">{t.hero.alerts.paymentDueDesc}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
