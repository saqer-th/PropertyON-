import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'محمد العتيبي',
        role: 'مدير مكتب عقاري',
        comment: 'النظام ريحنا كثير في متابعة التحصيل، كنا نعاني من الفوضى والحين كل شيء مرتب. الله يعطيكم العافية.',
        initial: 'م',
    },
    {
        name: 'شركة الأفق للتطوير',
        role: 'إدارة أملاك',
        comment: 'واجهة سهلة جداً والمستأجرين مرتاحين معها لأنهم ما يحتاجون يسجلون دخول معقد. تجربة ممتازة.',
        initial: 'أ',
    },
    {
        name: 'سعد الدوسري',
        role: 'مالك عقار',
        comment: 'أفضل شيء ميزة قراءة العقود تلقائياً، وفرت علي وقت طويل في إدخال البيانات يدوياً. أنصح فيه.',
        initial: 'س',
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        ماذا يقول عملاؤنا؟
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        شركاء نجاح يثقون في PropertyON لإدارة أملاكهم.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative"
                        >
                            <Quote className="absolute top-8 left-8 h-8 w-8 text-gray-100" />
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                                    {testimonial.initial}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 relative z-10">
                                "{testimonial.comment}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
