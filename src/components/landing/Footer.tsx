'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-2xl font-bold text-white mb-6 block">
                            Property<span className="text-secondary">ON</span>
                        </Link>
                        <p className="text-gray-400 max-w-sm leading-relaxed mb-6">
                            {t.footer.description}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">{t.footer.quickLinks}</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                                    {t.navbar.features}
                                </Link>
                            </li>
                            <li>
                                <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                                    {t.navbar.howItWorks}
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                                    {t.navbar.contact}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6">{t.footer.contact}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="h-5 w-5" />
                                <span>support@propertyon.sa</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        {t.footer.rights}
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                            {t.footer.privacy}
                        </Link>
                        <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                            {t.footer.terms}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
