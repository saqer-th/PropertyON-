import { Check } from 'lucide-react';

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
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        باقات تناسب الجميع
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        اختر الباقة التي تناسب حجم أعمالك، وابدأ فوراً.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 border ${plan.popular
                                    ? 'border-secondary shadow-xl scale-105 z-10 bg-white'
                                    : 'border-gray-200 shadow-sm bg-gray-50/50'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                                    ✨ موصى به
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                                <p className="text-sm text-gray-500 mt-2">{plan.target}</p>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                                    {plan.currency && <span className="text-xl text-gray-600">{plan.currency}</span>}
                                </div>
                                {plan.period && <p className="text-sm text-gray-500 mt-1">{plan.period}</p>}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full btn ${plan.popular ? 'btn-primary' : 'btn-secondary'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
