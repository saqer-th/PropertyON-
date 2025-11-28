import Image from 'next/image';

const screenshots = [
    {
        title: 'لوحة التحكم الرئيسية',
        description: 'نظرة شاملة على كل عقاراتك وأرقامك.',
        color: 'bg-blue-100',
    },
    {
        title: 'قائمة العقود',
        description: 'تابع حالات العقود وتواريخ الانتهاء والربط.',
        color: 'bg-indigo-100',
    },
    {
        title: 'سجل المدفوعات',
        description: 'فواتير آلية ومتابعة دقيقة للتحصيل.',
        color: 'bg-purple-100',
    },
    {
        title: 'التقارير المالية',
        description: 'اعرف أرباحك ومصاريفك بالتفصيل الممل.',
        color: 'bg-pink-100',
    },
    {
        title: 'واجهة المستأجر',
        description: 'سهولة في الدفع ورفع طلبات الصيانة.',
        color: 'bg-teal-100',
    },
];

export default function Screenshots() {
    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        صور من النظام
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        واجهة مستخدم عصرية وسهلة، صممت لتنجز مهامك بسرعة.
                    </p>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
                    {screenshots.map((shot, index) => (
                        <div
                            key={index}
                            className="min-w-[300px] md:min-w-[400px] snap-center first:pl-4 last:pr-4"
                        >
                            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                                <div className={`aspect-[16/10] w-full ${shot.color} flex items-center justify-center relative`}>
                                    <div className="absolute inset-0 bg-white/50"></div>
                                    <div className="z-10 text-center p-4">
                                        <span className="text-gray-400 font-medium">Screenshot Placeholder</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {shot.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-600">
                                        {shot.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
