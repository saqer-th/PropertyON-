import { FileText, CreditCard, Wrench, Smartphone, FileSearch, UserCheck, UserPlus, FileSignature, Key } from 'lucide-react';

export const content = {
    en: {
        navbar: {
            features: 'Features',
            howItWorks: 'How it Works',
            contact: 'Contact',
            login: 'Login',
            startFree: 'Start Free',
        },
        hero: {
            title: 'Manage Properties Smartly..',
            subtitle: 'Relax Your Mind',
            description: 'A comprehensive cloud system for real estate offices and landlords. Complete automation for contracts, payments, and maintenance in one place.',
            startNow: 'Start Now',
            contactUs: 'Contact Us',
            features: [
                'Automatic Ejar Contract Reading',
                'Payment Notifications for Tenant & Landlord',
                'Comprehensive & Easy Dashboard',
            ],
            alerts: {
                contractExpiry: 'Contract Expiry',
                contractExpiryDesc: 'Contract #1024 expires in 7 days',
                paymentDue: 'Payment Due',
                paymentDueDesc: 'Payment due in 30 days',
            }
        },
        features: {
            title: 'Why PropertyON?',
            subtitle: 'Everything you need to manage your properties efficiently and professionally in one platform.',
            comingSoon: 'Coming Soon',
            items: [
                {
                    title: 'Contract Management',
                    description: 'Create and renew unified contracts with a click. The system automatically reads "Ejar" contract data to ensure accuracy.',
                    icon: FileText,
                    status: 'active'
                },
                {
                    title: 'Payment Management',
                    description: 'Track payments and invoices in real-time. The system sends reminders to tenants before due dates.',
                    icon: CreditCard,
                    status: 'active'
                },
                {
                    title: 'Maintenance Management',
                    description: 'Receive maintenance requests from tenants and forward them to maintenance companies directly from the system.',
                    icon: Wrench,
                    status: 'coming_soon'
                },
                {
                    title: 'Tenant Access',
                    description: 'Tenants can access without registration using their mobile number to view contracts and invoices instantly.',
                    icon: Smartphone,
                    status: 'active'
                },
                {
                    title: 'Landlord Portal',
                    description: 'Landlords can access the system to view their contracts, payments, and reports as easily as tenants.',
                    icon: UserCheck,
                    status: 'active'
                },
                {
                    title: 'Auto Contract Reading',
                    description: 'Upload the PDF contract and our smart system will extract and populate the data for you. Save time!',
                    icon: FileSearch,
                    status: 'active'
                },
            ]
        },
        howItWorks: {
            title: 'How it Works?',
            subtitle: 'Start managing your properties in 4 simple steps.',
            steps: [
                {
                    title: 'Register Account',
                    description: 'Create your account as a landlord or office in seconds.',
                    icon: UserPlus,
                },
                {
                    title: 'Add Properties & Contracts',
                    description: 'Add your properties and upload Ejar contracts. The system reads them automatically.',
                    icon: FileSignature,
                },
                {
                    title: 'Automated Management',
                    description: 'The system sends payment reminders and manages maintenance requests.',
                    icon: CreditCard,
                },
                {
                    title: 'Relax',
                    description: 'Follow up on everything from your dashboard while you relax.',
                    icon: Key,
                },
            ]
        },
        faq: {
            title: 'Frequently Asked Questions',
            subtitle: 'Answers to the most common inquiries about PropertyON.',
            items: [
                {
                    question: 'Is the system completely free?',
                    answer: 'Yes, the system is currently free for a limited time for all offices and landlords. You can use all features without any fees.',
                },
                {
                    question: 'Can I use the system as a landlord without an office?',
                    answer: 'Absolutely! PropertyON is designed to serve individual landlords as well. You can register as a landlord and manage your properties, contracts, and tenants yourself.',
                },
                {
                    question: 'How does automatic "Ejar" contract reading work?',
                    answer: 'Simply upload the contract PDF file issued from the Ejar platform, and our smart system will extract all data (tenant name, rent amount, dates) and store it instantly.',
                },
                {
                    question: 'Does the system support WhatsApp notifications?',
                    answer: 'Yes, the system sends automatic notifications to tenants for payment due dates, and to landlords when the office receives the payment, via WhatsApp to ensure quick delivery.',
                },
                {
                    question: 'What about maintenance service?',
                    answer: 'The maintenance management system is currently under development and will be launched very soon. It will allow you to receive maintenance requests from tenants and manage them completely.',
                },
            ]
        },
        footer: {
            description: 'A comprehensive cloud system for managing real estate properties. We help you automate your work and increase your efficiency.',
            quickLinks: 'Quick Links',
            contact: 'Contact',
            rights: '© 2025 F4LCON. All rights reserved.',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
        },
        contactForm: {
            title: 'Get in Touch',
            subtitle: 'Have questions? We are here to help.',
            emailLabel: 'Email Us',
            phoneLabel: 'Call Us',
            workingHours: 'Sun-Thu from 9am to 5pm',
            name: 'Name',
            email: 'Email',
            phone: 'Phone Number',
            message: 'Message',
            send: 'Send Message',
            sending: 'Sending...',
            success: 'Message sent successfully!',
            error: 'Something went wrong. Please try again.',
        }
    },
    ar: {
        navbar: {
            features: 'المميزات',
            howItWorks: 'كيف يعمل',
            contact: 'تواصل معنا',
            login: 'تسجيل الدخول',
            startFree: 'ابدأ مجاناً',
        },
        hero: {
            title: 'أفضل برنامج إدارة أملاك وعقارات',
            subtitle: 'نظام سحابي شامل',
            description: 'نظام PropertyON هو الخيار الأول للمكاتب العقارية والملاك في السعودية. أتمتة كاملة لعقود الإيجار، متابعة المستأجرين، إدارة الدفعات والصيانة في منصة واحدة.',
            startNow: 'جرب النظام مجاناً',
            contactUs: 'تواصل معنا',
            features: [
                'قراءة عقود إيجار تلقائيًا',
                'تنبيهات سداد للمستأجر والمالك',
                'لوحة تحكم سهلة وشاملة',
            ],
            alerts: {
                contractExpiry: 'تنبيه انتهاء عقد',
                contractExpiryDesc: 'ينتهي عقد #1024 خلال 7 أيام',
                paymentDue: 'استحقاق دفعة',
                paymentDueDesc: 'دفعة مستحقة بعد 30 يوم',
            }
        },
        features: {
            title: 'لماذا PropertyON هو أفضل نظام عقاري؟',
            subtitle: 'كل ما تحتاجه لإدارة عقاراتك بكفاءة واحترافية في منصة واحدة.',
            comingSoon: 'قريباً',
            items: [
                {
                    title: 'إدارة عقود الإيجار',
                    description: 'أنشئ وجدّد العقود الموحدة بضغطة زر. النظام يقرأ بيانات عقود "إيجار" تلقائياً لضمان دقة البيانات وتوفير الوقت.',
                    icon: FileText,
                    status: 'active'
                },
                {
                    title: 'نظام إدارة الدفعات',
                    description: 'تابع الدفعات والفواتير أول بأول. يرسل النظام تذكيرات تلقائية للمستأجرين قبل وقت السداد لضمان التحصيل.',
                    icon: CreditCard,
                    status: 'active'
                },
                {
                    title: 'إدارة الصيانة',
                    description: 'استقبل طلبات الصيانة من المستأجرين وحولها لشركات الصيانة مباشرة. تتبع حالة الطلب من البداية للنهاية.',
                    icon: Wrench,
                    status: 'coming_soon'
                },
                {
                    title: 'بوابة المستأجرين',
                    description: 'دخول سهل للمستأجرين برقم الجوال للاطلاع على العقود والفواتير وتقديم الطلبات دون الحاجة لتطبيق.',
                    icon: Smartphone,
                    status: 'active'
                },
                {
                    title: 'بوابة الملاك',
                    description: 'امنح الملاك صلاحية الدخول لمتابعة عقاراتهم، عقودهم، وتقاريرهم المالية بكل شفافية وسهولة.',
                    icon: UserCheck,
                    status: 'active'
                },
                {
                    title: 'أتمتة العقود',
                    description: 'ارفع ملف العقد PDF والنظام الذكي يستخرج البيانات ويعبيها لك. تقنية متطورة لخدمة المكاتب العقارية.',
                    icon: FileSearch,
                    status: 'active'
                },
            ]
        },
        howItWorks: {
            title: 'كيف يعمل برنامج إدارة الأملاك؟',
            subtitle: 'ابدأ إدارة محفظتك العقارية في 4 خطوات بسيطة.',
            steps: [
                {
                    title: 'سجّل حسابك',
                    description: 'أنشئ حسابك كمالك أو مكتب عقاري في ثوانٍ وابدأ التجربة المجانية.',
                    icon: UserPlus,
                },
                {
                    title: 'أضف العقارات والعقود',
                    description: 'أضف وحداتك العقارية وارفع عقود إيجار. النظام يقرأ البيانات تلقائياً.',
                    icon: FileSignature,
                },
                {
                    title: 'الإدارة الآلية',
                    description: 'يقوم النظام بإرسال تذكيرات السداد، الفواتير، وإدارة طلبات الصيانة نيابة عنك.',
                    icon: CreditCard,
                },
                {
                    title: 'تابع وريّح بالك',
                    description: 'راقب أداء عقاراتك من لوحة التحكم الشاملة واستمتع براحة البال.',
                    icon: Key,
                },
            ]
        },
        faq: {
            title: 'الأسئلة الشائعة حول نظام العقار',
            subtitle: 'إجابات على أكثر الاستفسارات شيوعاً حول PropertyON.',
            items: [
                {
                    question: 'هل برنامج إدارة الأملاك مجاني؟',
                    answer: 'نعم، نظام PropertyON مجاني حالياً لفترة محدودة لجميع المكاتب والملاك. يمكنك استخدام كافة المميزات دون أي رسوم.',
                },
                {
                    question: 'هل يصلح النظام للملاك الأفراد؟',
                    answer: 'بالتأكيد! PropertyON مصمم ليخدم الملاك الأفراد والمكاتب العقارية على حد سواء. يمكنك إدارة عقاراتك بنفسك بسهولة.',
                },
                {
                    question: 'كيف تعمل ميزة قراءة عقود "إيجار"؟',
                    answer: 'ببساطة، قم بتحميل ملف العقد (PDF) من منصة إيجار، وسيقوم نظامنا باستخراج كافة البيانات (اسم المستأجر، الإيجار، التواريخ) وتخزينها.',
                },
                {
                    question: 'هل يرسل النظام تنبيهات واتساب؟',
                    answer: 'نعم، يدعم النظام إرسال تنبيهات تلقائية للمستأجرين بمواعيد السداد، وللملاك عند التحصيل، عبر رسائل واتساب.',
                },
                {
                    question: 'متى تتوفر خدمة إدارة الصيانة؟',
                    answer: 'نظام إدارة الصيانة قيد التطوير وسيتم إطلاقه قريباً. سيمكنك من استقبال وإدارة طلبات الصيانة بشكل كامل.',
                },
            ]
        },
        footer: {
            description: 'نظام سحابي متكامل لإدارة الأملاك العقارية في السعودية. نساعدك في أتمتة أعمالك وزيادة كفاءتك.',
            quickLinks: 'روابط سريعة',
            contact: 'تواصل معنا',
            rights: '© 2025 PropertyON. جميع الحقوق محفوظة.',
            privacy: 'سياسة الخصوصية',
            terms: 'الشروط والأحكام',
        },
        contactForm: {
            title: 'تواصل معنا',
            subtitle: 'هل لديك استفسار حول برنامج إدارة العقارات؟ نحن هنا للمساعدة.',
            emailLabel: 'راسلنا',
            phoneLabel: 'اتصل بنا',
            workingHours: 'الأحد - الخميس من 9 صباحاً حتى 5 مساءً',
            name: 'الاسم',
            email: 'البريد الإلكتروني',
            phone: 'رقم الجوال',
            message: 'الرسالة',
            send: 'إرسال الرسالة',
            sending: 'جاري الإرسال...',
            success: 'تم إرسال رسالتك بنجاح!',
            error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى.',
        }
    }
};
