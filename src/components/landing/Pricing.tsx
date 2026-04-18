import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
    {
        name: 'مجانية (Free)',
        target: 'للملاك الأفراد (أدر أملاكك بنفسك)',
        price: '0',
        currency: 'ر.س',
        period: '/ شهرياً',
        features: [
            'تجربة النظام كاملة',
            'إدارة حتى 3 عقارات',
            'دعم فني أساسي',
        ],
        cta: 'ابدأ مجاناً',
        link: 'https://app.f4lcon.tech/register-owner',
        popular: false,
    },
    {
        name: 'مكاتب (Offices)',
        target: 'للمكاتب العقارية',
        price: 'مجانية',
        currency: '',
        period: 'لفترة محدودة (كانت 199 ر.س)',
        features: [
            'عدد عقارات لا محدود',
            'إدارة العقود وقراءة عقود إيجار',
            'تنبيهات واتساب و SMS',
            'دعم فني مميز (أولوية)',
        ],
        cta: 'اشترك الآن',
        link: 'https://app.f4lcon.tech/register-office',
        popular: true,
    },
    {
        name: 'شركات (Companies)',
        target: 'للشركات الكبيرة',
        price: 'تواصل معنا',
        currency: '',
        period: '',
        features: [
            'كل مميزات باقة المكاتب',
            'تقارير وتحليلات متقدمة',
            'مدير حساب خاص',
            'API لربط الأنظمة الخاصة',
        ],
        cta: 'تواصل للمبيعات',
        link: '#contact',
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="mx-auto w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-emerald-100/50">
                        <Check className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl text-center">
                        باقات تناسب الجميع
                    </h2>
                    <p className="mt-4 text-xl text-gray-600 text-center font-medium">
                        اختر الباقة التي تناسب حجم أعمالك، وابدأ فوراً.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 lg:p-10 border transition-all duration-300 ${plan.popular
                                    ? 'border-emerald-500 shadow-[0_20px_60px_-15px_rgba(16,185,129,0.3)] scale-105 z-10 bg-primary text-white'
                                    : 'border-gray-200 shadow-sm hover:shadow-lg bg-white mt-4 mb-4'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg">
                                    ✨ الخيار المفضل
                                </div>
                            )}

                            <div className="mb-6 text-center">
                                <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                                <p className={`text-sm mt-2 font-medium ${plan.popular ? 'text-emerald-100/80' : 'text-gray-500'}`}>{plan.target}</p>
                            </div>

                            <div className="mb-8 text-center pb-8 border-b border-gray-200/20">
                                <div className="flex items-baseline justify-center gap-1">
                                    <span className={`text-5xl font-extrabold font-sans tracking-tight ${plan.popular ? 'text-white' : 'text-primary'}`}>{plan.price}</span>
                                    {plan.currency && <span className={`text-xl font-bold ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>{plan.currency}</span>}
                                </div>
                                {plan.period && <p className={`text-sm mt-2 font-medium ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>{plan.period}</p>}
                            </div>

                            <ul className="space-y-4 mb-10">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                                            <Check className="h-3 w-3" strokeWidth={3} />
                                        </div>
                                        <span className={`text-base font-medium ${plan.popular ? 'text-gray-300' : 'text-gray-700'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={plan.link}
                                className={`w-full btn text-center ${plan.popular ? 'btn-primary' : 'btn-secondary'
                                    }`}
                            >
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
