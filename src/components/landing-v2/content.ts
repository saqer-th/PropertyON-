export type PreviewLanguage = "ar" | "en";

export const proofTabs = {
  ar: [
    {
      id: "property",
      label: "مساحة العقار",
      image: "/v2/product/property/workspace-ar-desktop.png",
      alt: "مساحة العقار الحقيقية تعرض الوحدات والإشغال والعقود والمركز المالي ببيانات تجريبية",
      copy: "سياق العقار التشغيلي والمالي في مساحة واحدة.",
      evidence: ["12 وحدة، منها 10 مشغولة", "عقود ودخل ومصروفات مترابطة"]
    },
    {
      id: "contract",
      label: "تفاصيل العقد",
      image: "/v2/product/contract/detail-ar-desktop.png",
      alt: "مساحة عقد حقيقية تعرض الأطراف والدفعات والملخص المالي ببيانات تجريبية",
      copy: "العقد ليس ملفاً منفصلاً؛ بل مساحة عمل مرتبطة بالعقار والوحدة والدفعات.",
      evidence: ["الأطراف والوحدة في السياق نفسه", "حالة التحصيل والرصيد ظاهرة"]
    },
    {
      id: "report",
      label: "سجل الدفعات",
      image: "/v2/product/reports/payment-register-ar-desktop.png",
      alt: "تقرير سجل الدفعات الحقيقي يعرض الفلاتر والحالات والتصدير ببيانات تجريبية",
      copy: "دليل تقريري حقيقي من Reporting V3، دون إعادة بناء رسوم أو مؤشرات وهمية.",
      evidence: ["22 صفاً مع فلاتر تشغيلية", "طباعة وتصدير ظاهران في المنتج"]
    }
  ],
  en: [
    {
      id: "property",
      label: "Property workspace",
      image: "/v2/product/property/workspace-ar-desktop.png",
      alt: "Real Arabic property workspace showing units, occupancy, contracts and financial context with synthetic data",
      copy: "Operational and financial property context in one workspace.",
      evidence: ["12 units, including 10 occupied", "Contracts, income and expenses stay connected"]
    },
    {
      id: "contract",
      label: "Contract detail",
      image: "/v2/product/contract/detail-ar-desktop.png",
      alt: "Real contract workspace showing parties, installments and financial summary with synthetic data",
      copy: "A contract is a connected workspace—not a detached file.",
      evidence: ["Parties and unit share one context", "Collection state and balance stay visible"]
    },
    {
      id: "report",
      label: "Payment register",
      image: "/v2/product/reports/payment-register-ar-desktop.png",
      alt: "Real payment register report showing filters, statuses and export options with synthetic data",
      copy: "Real Reporting V3 evidence without reconstructed charts or invented KPIs.",
      evidence: ["22 rows with operational filters", "Print and export are visible in the product"]
    }
  ]
};

export const faqs = {
  ar: [
    ["ما هو PropertyON؟", "PropertyON منظومة تشغيل للمكاتب العقارية تربط العقارات والوحدات والعقود وجداول الدفعات والتحصيلات والسندات والمصروفات والتقارير في سياق واحد."],
    ["هل PropertyON مرتبط رسمياً بمنصة إيجار؟", "لا. يستورد PropertyON بيانات منظمة من مستندات PDF مدعومة من عائلة عقود إيجار، مع الأدلة والمراجعة البشرية. لا توجد مزامنة مباشرة أو ربط API رسمي."],
    ["هل يدعم الملفات الممسوحة ضوئياً؟", "لا نقدّم حالياً وعداً بدعم OCR للعقود الممسوحة ضوئياً. يعمل الاستيراد الذكي مع مستندات PDF المدعومة التي يستطيع النظام استخراج بنيتها."],
    ["هل يدفع المستأجر الإيجار عبر PropertyON؟", "لا. يسجل PropertyON عمليات التحصيل داخل المكتب ويوزعها ويوثقها بالسندات، لكنه لا يعمل كبوابة دفع إلكترونية للمستأجر."],
    ["كيف يعمل التحصيل الجزئي؟", "يمكن تسجيل مبلغ جزئي وتوزيعه على دفعة أو عدة دفعات، مع البدء من أقدم دفعة مؤهلة وإظهار الرصيد المتبقي والسند المرتبط."],
    ["هل الرسائل الآلية مفعلة دائماً؟", "يدعم النظام عائلات قواعد لأحداث الدفعات والعقود. يعتمد الإرسال الفعلي على تفعيل القاعدة والمزوّد وبيئة التشغيل."],
    ["هل يمكن للفريق العمل بصلاحيات مختلفة؟", "يدعم المنتج مسؤولي وموظفي المكتب وأدواراً ونطاقات وصول. لقطة المعاينة الحالية تعرض دليل الفريق والأدوار الفعلية، وليست مصفوفة صلاحيات."],
    ["ماذا يرى المالك أو المستأجر؟", "يرى كل طرف السجلات المرتبطة بعلاقته فقط. هذا وصول محدود، وليس تطبيقاً متكاملاً مستقلاً لكل طرف."],
    ["هل يعمل بالعربية والإنجليزية وعلى الجوال؟", "العربية هي التجربة الأقوى. توجد تجربة إنجليزية واسعة وسير عمل أساسية متجاوبة، لكن التكافؤ ليس كاملاً في كل شاشة."],
    ["كيف أبدأ؟", "ابدأ بتسجيل مكتبك من مسار إنشاء المكتب، أو تواصل مع فريق PropertyON لمناقشة احتياج مكتبك. لا تعرض الصفحة العامة أسعاراً أو مدة تجربة غير معتمدة."],
    ["كيف أعرف الباقة المناسبة؟", "تواصل مع فريق PropertyON أو ابدأ تسجيل المكتب للتعرف على الخيار المتاح وفق إعدادات الخدمة الحالية، من دون وعود سعرية غير منشورة."]
  ],
  en: [
    ["What is PropertyON?", "PropertyON is an operating system for real-estate offices that connects properties, units, contracts, payment schedules, collections, receipts, expenses and reports in one context."],
    ["Is PropertyON officially integrated with Ejar?", "No. PropertyON imports structured data from supported Ejar-family PDF documents with evidence and human review. It does not provide an official Ejar API connection or direct synchronization."],
    ["Does Smart Import support scanned files?", "We do not currently claim OCR support for scanned contracts. Smart Import works with supported PDFs whose structure can be extracted."],
    ["Can tenants pay rent through PropertyON?", "No. PropertyON records, allocates and documents office collections with linked receipts; it is not an online tenant payment gateway."],
    ["How are partial collections handled?", "A partial amount can be allocated across one or multiple eligible installments, starting with the oldest, while preserving the remaining balance and linked receipt."],
    ["Are automated messages always active?", "The system supports rule families for payment and contract events. Actual delivery depends on the rule, provider and runtime being active."],
    ["Can team members have different access?", "PropertyON supports office administrators, employees, roles and access scopes. The current preview capture shows the real team directory and assigned roles—not a fabricated permission matrix."],
    ["What can owners and tenants see?", "Each participant sees only relationship-scoped records. This is limited access, not a complete standalone owner or tenant application."],
    ["Does it work in English and on mobile?", "Arabic is the strongest experience. English support is substantial and core workflows are responsive, but parity is not complete on every screen."],
    ["How do I get started?", "Start through the office-registration flow, or contact the PropertyON team about your office needs. The public page does not publish unapproved prices or trial duration."],
    ["How do I choose a plan?", "Contact the PropertyON team or begin office registration to see what is currently available, without relying on unpublished pricing promises."]
  ]
};
