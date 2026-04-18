import { FileText, CreditCard, Wrench, Smartphone, FileSearch, UserCheck, UserPlus, FileSignature, Key, Activity, LineChart, ShieldCheck } from 'lucide-react';

export const content = {
    en: {
        navbar: {
            features: 'Platform',
            howItWorks: 'How it Works',
            contact: 'Contact Sales',
            login: 'Login',
            startFree: 'Start Free Trial',
            bookDemo: 'Book a Demo',
        },
        hero: {
            title: 'The Premium Cloud Platform',
            subtitle: 'for Smart Property Management',
            description: 'End-to-end automation for Ejar contracts, rent collection, and maintenance. Total control over your real estate portfolio, all in one place.',
            startNow: 'Start Free Trial',
            contactUs: 'Book a Demo',
            features: [
                'Smart Ejar Integration',
                'Automated Rent Collection',
                'Detailed Financial Reports',
            ],
            alerts: {
                contractExpiry: 'Expiring Soon',
                contractExpiryDesc: 'Al Malqa Villa contract expires in 7 days',
                paymentDue: 'Payment Due',
                paymentDueDesc: 'Rent due (SAR 45,000) for Elite Tower',
            }
        },
        features: {
            title: 'Turn Chaos into Clarity',
            subtitle: 'Everything you need to manage your properties with enterprise-level precision and ease.',
            comingSoon: 'Coming Soon',
            items: [
                {
                    title: 'Automated Contracts',
                    description: 'Smart Ejar integration with instant data extraction. Never miss a renewal date again.',
                    icon: FileSignature,
                    status: 'active'
                },
                {
                    title: 'Guaranteed Collection',
                    description: 'Automated WhatsApp reminders and precise overdue tracking. Stop chasing rent manually.',
                    icon: CreditCard,
                    status: 'active'
                },
                {
                    title: 'Financial Clarity',
                    description: 'Your revenue, expenses, and ROI in one powerful dashboard. Crystal clear reporting.',
                    icon: LineChart,
                    status: 'active'
                },
                {
                    title: 'Digital Archiving',
                    description: 'Securely store and organize all property documents, IDs, and contracts in one searchable cloud vault.',
                    icon: FileSearch,
                    status: 'active'
                },
                {
                    title: 'Tenant Portal',
                    description: 'Zero-friction access for tenants via mobile number to view invoices and submit requests.',
                    icon: Smartphone,
                    status: 'active'
                },
                {
                    title: 'Landlord Transparency',
                    description: 'Give landlords real-time access to their portfolio performance and financial statements.',
                    icon: ShieldCheck,
                    status: 'active'
                },
            ]
        },
        howItWorks: {
            title: 'Automate in 3 Simple Steps',
            subtitle: 'From chaos to complete control in minutes.',
            steps: [
                {
                    title: '1. Register your Office',
                    description: 'Create your account as a property manager or landlord in seconds.',
                    icon: UserPlus,
                },
                {
                    title: '2. Upload Active Contracts',
                    description: 'Upload Ejar PDFs. Our AI extracts and maps all dates and financial data instantly.',
                    icon: FileSearch,
                },
                {
                    title: '3. Sit Back & Monitor',
                    description: 'The system automates reminders, tracks payments, and generates your reports.',
                    icon: Activity,
                },
            ]
        },
        faq: {
            title: 'Frequently Asked Questions',
            subtitle: 'Everything you need to know about PropertyON.',
            items: [
                {
                    question: 'Is the system completely free?',
                    answer: 'Yes, PropertyON is currently entirely free for a limited time for all offices and landlords to experience the premium features without risk.',
                },
                {
                    question: 'How does the Ejar integration work?',
                    answer: 'Simply upload the standard PDF contract issued by Ejar. Our proprietary system extracts the tenant name, ID, rent values, and dates automatically.',
                },
                {
                    question: 'Does the system send WhatsApp notifications?',
                    answer: 'Yes! Automated WhatsApp notifications are sent to tenants for upcoming payments, and to landlords when payments are marked as collected.',
                },
            ]
        },
        footer: {
            description: 'The premium cloud backbone for property management in Saudi Arabia.',
            quickLinks: 'Quick Links',
            contact: 'Contact',
            rights: '© 2026 PropertyON. All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
        },
        contactForm: {
            title: 'Elevate Your Portfolio',
            subtitle: 'Ready to upgrade your property management? We are here to help.',
            emailLabel: 'Email Us',
            phoneLabel: 'Call Us',
            workingHours: 'Sun-Thu from 9am to 6pm',
            name: 'Full Name',
            email: 'Business Email',
            phone: 'Mobile Number',
            message: 'How can we help you?',
            send: 'Send Inquiry',
            sending: 'Sending...',
            success: 'Message sent successfully!',
            error: 'Something went wrong. Please try again.',
        }
    },
    ar: {
        navbar: {
            features: 'المنصة',
            howItWorks: 'كيف نعمل',
            contact: 'المبيعات',
            login: 'تسجيل الدخول',
            startFree: 'ابدأ تجربتك مجاناً',
            bookDemo: 'تصفح الديمو',
        },
        hero: {
            title: 'النظام السحابي الأول لإدارة',
            subtitle: 'الأملاك والمحافظ العقارية',
            description: 'أتمتة كاملة لعقود "إيجار"، تحصيل الدفعات، ومتابعة الصيانة. منصة واحدة تمنحك السيطرة الكاملة وراحة البال لمعاملاتك العقارية.',
            startNow: 'ابدأ تجربتك مجاناً',
            contactUs: 'احجز جلسة تعريفية',
            features: [
                'قراءة آلية لعقود منصة إيجار',
                'تحصيل إيجارات مؤتمت بالكامل',
                'تقارير مالية مفصلة ودقيقة',
            ],
            alerts: {
                contractExpiry: 'عقد شارف على الانتهاء',
                contractExpiryDesc: 'يتبقى ٧ أيام لعقد فيلا حي الملقا',
                paymentDue: 'دفعة مستحقة',
                paymentDueDesc: 'إيجار مستحق (٤٥,٠٠٠ ريال) لبرج النخبة',
            }
        },
        features: {
            title: 'حوّل فوضى الإدارة إلى نظام متكامل',
            subtitle: 'كل ما تحتاجه لإدارة عقاراتك بدقة واحترافية وبدون أي مجهود يدوي.',
            comingSoon: 'قريباً',
            items: [
                {
                    title: 'أتمتة عقود إيجار',
                    description: 'ارفع العقد، ونظامنا الذكي يستخرج البيانات، التواريخ والقيمة الإيجارية لحظياً.',
                    icon: FileSignature,
                    status: 'active'
                },
                {
                    title: 'تحصيل مضمون وإشعارات ذكية',
                    description: 'رسائل واتساب تلقائية للمستأجرين للتذكير بالسداد. تتبع المبالغ المتأخرة بدقة.',
                    icon: CreditCard,
                    status: 'active'
                },
                {
                    title: 'أرقامك واضحة.. تقارير مالية',
                    description: 'إيراداتك، مصروفاتك، والعائد على الاستثمار، كلها في لوحة تحكم واحدة.',
                    icon: LineChart,
                    status: 'active'
                },
                {
                    title: 'أرشفة إلكترونية للوثائق',
                    description: 'احفظ جميع أوراق العقار، هويات المستأجرين، والعقود في مساحة سحابية آمنة وسهلة البحث.',
                    icon: FileSearch,
                    status: 'active'
                },
                {
                    title: 'بوابة المستأجر',
                    description: 'دخول سريع للمستأجر برقم الجوال للوصول للفواتير وتقديم الطلبات بدون تعقيد.',
                    icon: Smartphone,
                    status: 'active'
                },
                {
                    title: 'شفافية كاملة للمُلاك',
                    description: 'صلاحيات مخصصة للملاك تتيح لهم متابعة أداء المحفظة والدفعات بشكل مباشر.',
                    icon: ShieldCheck,
                    status: 'active'
                },
            ]
        },
        howItWorks: {
            title: 'أدر أملاكك بثلاث خطوات فقط',
            subtitle: 'من الإدارة اليدوية المرهقة.. إلى أتمتة كاملة في دقائق معدودة.',
            steps: [
                {
                    title: '1. أضف العقارات والمكتب',
                    description: 'صمم هيكل محفظتك العقارية وأنشئ حسابك في ثوانٍ.',
                    icon: UserPlus,
                },
                {
                    title: '2. ارفع عقودك الحالية',
                    description: 'ارفع ملفات الـ PDF الخاصة بعقود إيجار وسيقوم النظام بجدولة الدفعات تلقائياً.',
                    icon: FileSearch,
                },
                {
                    title: '3. راقب لوحة التحكم وريّح بالك',
                    description: 'النظام يرسل التذكيرات ويحدث حالة العقود، وأنت تراقب النمو.',
                    icon: Activity,
                },
            ]
        },
        faq: {
            title: 'الأسئلة الشائعة من عملائنا',
            subtitle: 'إجابات على الاستفسارات الأكثر شيوعاً حول اعتماد PropertyON.',
            items: [
                {
                    question: 'هل يمكنني تجربة كامل ميزات النظام مجاناً؟',
                    answer: 'نعم، في الفترة الحالية إطلاق النظام متاح للاستخدام المجاني بالكامل بدون أي قيود على عدد العقود أو العقارات.',
                },
                {
                    question: 'كيف تعمل ميزة استخراج البيانات من عقد إيجار؟',
                    answer: 'تقنية الذكاء الاصطناعي الخاصة بنا تحلل ملف PDF لعقد شبكة إيجار وتستخرج بيانات المستأجر، الدفعات، والتواريخ وتحفظها لك.',
                },
                {
                    question: 'هل فعلاً يرسل النظام رسائل واتساب؟',
                    answer: 'بالتأكيد، تم ربط النظام لتوجيه إشعارات واتساب تلقائية لتذكير المستأجرين قبل موعد الاستحقاق وعند التأخر.',
                },
            ]
        },
        footer: {
            description: 'العمود الفقري السحابي الأول لإدارة المحافظ العقارية والأملاك في السعودية.',
            quickLinks: 'روابط سريعة',
            contact: 'المساعدة',
            rights: '© 2026 PropertyON. جميع الحقوق محفوظة.',
            privacy: 'سياسة الخصوصية',
            terms: 'الشروط والأحكام',
        },
        contactForm: {
            title: 'ارتقِ بإدارة محفظتك العقارية',
            subtitle: 'مستعد لنقل أعمالك لمستوى آخر؟ فريقنا هنا لخدمتك.',
            emailLabel: 'تواصل معنا إلكترونياً',
            phoneLabel: 'الخط المباشر',
            workingHours: 'من الأحد إلى الخميس، ٩ ص - ٦ م',
            name: 'الاسم كامل',
            email: 'البريد الإلكتروني',
            phone: 'رقم الجوال',
            message: 'كيف يمكننا مساعدتك؟',
            send: 'إرسال الطلب',
            sending: 'جاري الإرسال...',
            success: 'تم الاستلام! سنتواصل معك قريباً.',
            error: 'حدث خطأ، الرجاء المحاولة مرة أخرى.',
        }
    }
};
