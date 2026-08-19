"use client";

import { ArrowLeft, ArrowRight, Languages, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import PropertyONWordmark from "@/components/landing-v2/PropertyONWordmark";
import styles from "./LegalDocument.module.css";

type Language = "ar" | "en";
type DocumentKind = "privacy" | "terms";

type Section = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
};

type LegalCopy = {
  title: string;
  kicker: string;
  summary: string;
  updated: string;
  toc: string;
  sections: Section[];
};

const CONTACT_EMAIL = "support@f4lcon.tech";
const CONTACT_PHONE = "+966 11 507 5727";

const privacy: Record<Language, LegalCopy> = {
  ar: {
    title: "إشعار الخصوصية",
    kicker: "الموقع وخدمة الوصول المبكر",
    summary: "يوضح هذا الإشعار، بنطاقه الحالي، كيفية التعامل مع المعلومات المقدمة عبر موقع PropertyON وخدمة الوصول المبكر.",
    updated: "آخر تحديث: 19 أغسطس 2026",
    toc: "محتويات الإشعار",
    sections: [
      {
        id: "introduction",
        title: "1. مقدمة",
        paragraphs: [
          "PropertyON منتج برمجي لتشغيل أعمال المكاتب العقارية، وهو متاح حالياً في مرحلة الوصول المبكر. يصف هذا الإشعار المعلومات التي قد تُعالج عند زيارة الموقع، أو التواصل معنا، أو إنشاء حساب وصول مبكر واستخدام الوظائف المتاحة.",
          "نستخدم اسم PropertyON في هذا الإشعار للإشارة إلى المنتج والخدمة. لا يقدّم هذا الإشعار PropertyON على أنه شركة مسجلة أو كيان قانوني لم يتم اعتماده."
        ]
      },
      {
        id: "information-you-provide",
        title: "2. البيانات التي قد تقدمها لنا",
        paragraphs: ["قد تتضمن المعلومات التي تقدمها مباشرة، بحسب طريقة استخدامك للخدمة:"],
        bullets: [
          "الاسم ورقم الجوال والبريد الإلكتروني.",
          "اسم المكتب أو النشاط، وبيانات التسجيل والترخيص والعنوان التي تختار إدخالها عند إنشاء حساب مكتب.",
          "محتوى طلب التواصل أو الدعم والمعلومات اللازمة للرد عليه.",
          "معلومات الحساب، وأعضاء الفريق، والأدوار والصلاحيات التي يديرها المكتب."
        ]
      },
      {
        id: "service-data",
        title: "3. بيانات تشغيل الخدمة",
        paragraphs: ["عند استخدام وظائف PropertyON، قد يُدخل المكتب أو المستخدمون المصرح لهم معلومات تشغيلية تشمل، بحسب الوظائف المستخدمة:"],
        bullets: [
          "العقارات والوحدات والملاك والمستأجرين والأطراف ذات الصلة.",
          "العقود وجداول الدفعات وسجلات التحصيل والسندات.",
          "المصروفات والصيانة والإشعارات والسجلات التشغيلية.",
          "المستندات والملفات التي يرفعها المستخدمون، بما فيها ملفات PDF المدعومة."
        ],
        note: "تظل المكاتب والمستخدمون مسؤولين عن المعلومات التي يدخلونها وعن امتلاك الصلاحية اللازمة لتقديمها. لا يَدّعي PropertyON ملكية محتوى المكتب لمجرد استخدام الخدمة."
      },
      {
        id: "purposes",
        title: "4. لماذا نستخدم المعلومات",
        bullets: [
          "الرد على الاستفسارات وطلبات الدعم.",
          "إنشاء حسابات الوصول المبكر والتحقق من المستخدمين بواسطة رمز تحقق لمرة واحدة (OTP).",
          "تشغيل وظائف PropertyON التي يطلبها المستخدم وحفظ السياق بين السجلات المرتبطة.",
          "إدارة وصول أعضاء الفريق والأدوار والصلاحيات.",
          "إرسال رسائل مرتبطة بالخدمة عندما تكون الوظيفة مهيأة ومتاحة.",
          "حماية الخدمة، ومعالجة الأعطال، ومتابعة الأحداث التشغيلية والأمنية."
        ]
      },
      {
        id: "sharing",
        title: "5. مشاركة البيانات ومعالجتها بواسطة مقدمي الخدمة",
        paragraphs: [
          "قد تُعالج المعلومات عبر مقدمي خدمات وتقنيات لازمة لتشغيل الموقع والخدمة، مثل الاستضافة، وتخزين الملفات، والرسائل، والدعم، والوظائف التقنية ذات الصلة. لا ننشر هنا قائمة غير مؤكدة بأسماء مقدمي الخدمة أو مواقع المعالجة.",
          "يُقصد أن يكون استخدام مقدمي الخدمة في الحدود اللازمة للتشغيل، وبما يراعي الترتيبات المناسبة والمتطلبات المطبقة. وقد نحتاج أيضاً إلى التعامل مع المعلومات عندما يكون ذلك مطلوباً بموجب متطلب نظامي منطبق."
        ]
      },
      {
        id: "messages",
        title: "6. الرسائل والتواصل",
        paragraphs: [
          "قد يُستخدم رقم الجوال أو البريد الإلكتروني لإرسال رموز التحقق، أو الرد على طلب، أو تقديم دعم، أو إرسال إشعار مرتبط بالخدمة عندما تكون هذه الوظيفة متاحة. لا يعني إنشاء الحساب موافقة تلقائية على رسائل تسويقية غير مرتبطة بالخدمة."
        ]
      },
      {
        id: "smart-import",
        title: "7. ملفات العقود والاستيراد الذكي",
        paragraphs: [
          "يمكن لوظيفة الاستيراد الذكي معالجة مستندات PDF مدعومة لاستخراج معلومات يعرضها النظام للمراجعة والتصحيح قبل الاعتماد. يجب على المستخدم مراجعة النتائج وعدم افتراض دقتها دون تحقق.",
          "لا تمثل هذه الوظيفة ربطاً رسمياً بواجهة منصة إيجار، ولا مزامنة مباشرة معها."
        ]
      },
      {
        id: "retention",
        title: "8. مدة الاحتفاظ",
        paragraphs: [
          "نحتفظ بالمعلومات بالقدر اللازم لتقديم الخدمة وإدارة الحسابات والطلبات والالتزامات التشغيلية ذات الصلة، مع مراعاة المتطلبات النظامية المطبقة. وتخضع مدد الاحتفاظ التفصيلية للمراجعة والتحديث مع اكتمال الإطار التشغيلي والقانوني للخدمة.",
          "قد لا يكون حذف بعض معلومات الحساب ممكناً فوراً عندما تكون مرتبطة بسجلات تشغيلية أو سجلات تدقيق محفوظة. لا يحدد هذا الإشعار مدة أو موعد حذف مضموناً."
        ]
      },
      {
        id: "requests",
        title: "9. طلبات الخصوصية",
        paragraphs: [
          "يمكنك التواصل معنا لطلب الوصول إلى معلوماتك أو تصحيحها، أو لتقديم طلب يتعلق بحذفها أو بطريقة التعامل معها. قد نطلب التحقق من الهوية أو الصلاحية قبل تنفيذ الطلب، وتخضع الاستجابة لطبيعة الحساب والسجلات والمتطلبات المطبقة.",
          `أرسل طلبك إلى ${CONTACT_EMAIL} مع وصف واضح للطلب والحساب أو المكتب المعني. لا يَعِد هذا الإشعار بأن كل طلب سيؤدي دائماً إلى الحذف الكامل.`
        ]
      },
      {
        id: "security",
        title: "10. الأمان والوصول",
        paragraphs: [
          "تتضمن الخدمة ضوابط تشغيلية مدعومة حالياً مثل التحقق برمز OTP، والوصول المرتبط بالمكتب، وأدوار المستخدمين وصلاحيات الموظفين، والتحقق من نوع وحجم بعض الملفات المرفوعة، وسجلات للأحداث التشغيلية.",
          "لا تشكل هذه الإشارة ضماناً مطلقاً للأمان أو ادعاءً بشهادة أمنية أو تدقيق مستقل."
        ]
      },
      {
        id: "updates",
        title: "11. تحديث هذا الإشعار",
        paragraphs: ["قد نحدّث هذا الإشعار مع تطور PropertyON أو تغير طرق التعامل مع المعلومات. سيظهر تاريخ آخر تحديث في أعلى الصفحة."]
      },
      {
        id: "contact",
        title: "12. التواصل",
        paragraphs: [
          `البريد الإلكتروني: ${CONTACT_EMAIL}`,
          `الهاتف: ${CONTACT_PHONE}`
        ],
        note: "PropertyON في مرحلة الإطلاق المبكر حالياً، وقد يتم تحديث هذا الإشعار مع اكتمال الإطار التشغيلي والقانوني للخدمة."
      }
    ]
  },
  en: {
    title: "Privacy Notice",
    kicker: "Website and early-access service",
    summary: "This notice describes, within its current scope, how information provided through the PropertyON website and early-access service is handled.",
    updated: "Last updated: August 19, 2026",
    toc: "Notice contents",
    sections: [
      {
        id: "introduction",
        title: "1. Introduction",
        paragraphs: [
          "PropertyON is software for operating real-estate offices and is currently available in an early-access stage. This notice describes information that may be processed when you visit the website, contact us, or create and use an early-access account.",
          "PropertyON refers to the product and service in this notice. This notice does not represent PropertyON as a registered company or name a legal entity that has not been finalized."
        ]
      },
      {
        id: "information-you-provide",
        title: "2. Information you may provide",
        paragraphs: ["Depending on how you use the service, information you provide directly may include:"],
        bullets: [
          "Your name, mobile number, and email address.",
          "Office or business name and registration, licensing, and address details you choose to enter when creating an office account.",
          "The contents of an inquiry or support request and information needed to respond.",
          "Account, team-member, role, and permission information managed by the office."
        ]
      },
      {
        id: "service-data",
        title: "3. Service operating data",
        paragraphs: ["When using PropertyON, an office or its authorized users may enter operating information that includes, depending on the functions used:"],
        bullets: [
          "Properties, units, owners, tenants, and relevant parties.",
          "Contracts, payment schedules, collection records, and receipts.",
          "Expenses, maintenance, notifications, and operating records.",
          "Documents and files uploaded by users, including supported PDFs."
        ],
        note: "Offices and users remain responsible for information they enter and for having authority to provide it. PropertyON does not claim ownership of office content merely because the service is used."
      },
      {
        id: "purposes",
        title: "4. Why information is used",
        bullets: [
          "Responding to inquiries and support requests.",
          "Creating early-access accounts and authenticating users with a one-time code (OTP).",
          "Operating requested PropertyON functions and preserving context between related records.",
          "Managing team-member access, roles, and permissions.",
          "Sending service-related messages when the relevant function is configured and available.",
          "Protecting, troubleshooting, and monitoring the service and its operating or security events."
        ]
      },
      {
        id: "sharing",
        title: "5. Sharing and service-provider processing",
        paragraphs: [
          "Information may be processed through service providers and technologies needed to operate the website and service, such as hosting, file storage, messaging, support, and related technical functions. We do not publish an unverified list of providers or processing locations here.",
          "Service-provider use is intended to remain within what is necessary to operate the service, with appropriate arrangements and applicable requirements considered. Information may also need to be handled where required by an applicable legal requirement."
        ]
      },
      {
        id: "messages",
        title: "6. Messages and communications",
        paragraphs: ["A mobile number or email address may be used to deliver verification codes, respond to a request, provide support, or send a service-related notice when that function is available. Creating an account does not automatically indicate consent to unrelated marketing messages."]
      },
      {
        id: "smart-import",
        title: "7. Contract files and Smart Import",
        paragraphs: [
          "Smart Import can process supported PDF documents to extract information for review and correction before it is accepted. Users should review results and must not assume they are accurate without verification.",
          "This function is not represented as an official Ejar API integration or direct synchronization."
        ]
      },
      {
        id: "retention",
        title: "8. Retention",
        paragraphs: [
          "Information is retained to the extent needed to provide the service and manage accounts, requests, and related operating obligations, taking applicable requirements into account. Detailed retention periods remain subject to review and update as the service's operating and legal framework is finalized.",
          "Immediate deletion of some account information may not be possible where it is connected to preserved operating or audit records. This notice does not promise a fixed retention or deletion deadline."
        ]
      },
      {
        id: "requests",
        title: "9. Privacy requests",
        paragraphs: [
          "You may contact us to request access to or correction of your information, or to make a request concerning deletion or how your information is handled. Identity or authority may need to be verified, and the response depends on the account, records, and applicable requirements.",
          `Send a clear description of the request and the relevant account or office to ${CONTACT_EMAIL}. This notice does not promise that every request will always result in complete deletion.`
        ]
      },
      {
        id: "security",
        title: "10. Security and access",
        paragraphs: [
          "The service currently supports operating controls such as OTP authentication, office-scoped access, user roles and employee permissions, validation of the type and size of certain uploaded files, and operating event records.",
          "This description is not an absolute security guarantee or a claim of security certification or independent audit."
        ]
      },
      {
        id: "updates",
        title: "11. Updates to this notice",
        paragraphs: ["This notice may be updated as PropertyON evolves or its information-handling practices change. The latest update date will appear at the top of this page."]
      },
      {
        id: "contact",
        title: "12. Contact",
        paragraphs: [
          `Email: ${CONTACT_EMAIL}`,
          `Phone: ${CONTACT_PHONE}`
        ],
        note: "PropertyON is currently in an early-access stage. This notice may be updated as the service's operating and legal framework is finalized."
      }
    ]
  }
};

const terms: Record<Language, LegalCopy> = {
  ar: {
    title: "شروط الاستخدام والوصول المبكر",
    kicker: "شروط الموقع والتقييم الحالي للمنتج",
    summary: "تنظم هذه الشروط استخدام موقع PropertyON وحسابات الوصول المبكر والوظائف المتاحة حالياً. وهي ليست شروط اشتراك تجاري مدفوع.",
    updated: "آخر تحديث: 19 أغسطس 2026",
    toc: "محتويات الشروط",
    sections: [
      {
        id: "scope",
        title: "1. نطاق هذه الشروط",
        paragraphs: [
          "يُقدَّم PropertyON حالياً في مرحلة الوصول المبكر قبل الإطلاق التجاري المكتمل. تنظم هذه الشروط استخدام الموقع، وتقييم المنتج، وحسابات الوصول المبكر، والوظائف المتاحة في المرحلة الحالية.",
          "قد تتطور الميزات وإتاحة الوصول أثناء هذه المرحلة. لا يعرض الموقع أسعار اشتراك تجاري عامة، ولا تشكل هذه الشروط اتفاق اشتراك مدفوع. إذا قُدمت اشتراكات مدفوعة مستقبلاً، فستُعرض الشروط التجارية المطبقة بصورة منفصلة قبل أن تحكم ذلك الاشتراك."
        ]
      },
      {
        id: "acceptance",
        title: "2. قبول الشروط",
        paragraphs: ["باستخدام الموقع أو إنشاء حساب وصول مبكر، فإنك تقر بقراءة هذه الشروط وقبولها ضمن نطاقها الحالي. إذا كنت تستخدم PropertyON نيابة عن مكتب، فيجب أن تكون مخولاً بذلك."]
      },
      {
        id: "accounts",
        title: "3. الحسابات والوصول",
        bullets: [
          "قدّم معلومات حساب وتواصل دقيقة وحدّثها عند الحاجة.",
          "لا تسيء استخدام رمز التحقق (OTP) أو وسيلة الوصول إلى حسابك، ولا تسمح بوصول غير مصرح به.",
          "يتحمل مسؤول المكتب مسؤولية تعيين وصول مناسب للموظفين ومراجعة الأدوار والصلاحيات.",
          "لا تحاول الوصول إلى حساب أو مكتب أو سجل لا تملك صلاحية استخدامه.",
          "قد تعتمد إتاحة الوصول المبكر على الجاهزية الحالية والأهلية والقدرة التشغيلية."
        ]
      },
      {
        id: "acceptable-use",
        title: "4. الاستخدام المناسب",
        paragraphs: ["استخدم PropertyON لأغراض مشروعة ومصرح بها تتعلق بتشغيل المكتب وتقييم المنتج. لا تعطل الخدمة، أو تتحايل على ضوابط الوصول، أو ترفع محتوى ضاراً، أو تستخدم الخدمة لانتهاك حقوق الآخرين."]
      },
      {
        id: "office-data",
        title: "5. مسؤولية بيانات المكتب",
        paragraphs: [
          "يتحمل المكتب والمستخدمون مسؤولية صحة المعلومات التي يدخلونها أو يرفعونها، ومراجعتها، وامتلاك الصلاحية اللازمة للتعامل معها عبر PropertyON. يشمل ذلك، عند انطباقه، بيانات الملاك والمستأجرين والعقود وأرقام التواصل والمستندات.",
          "يحتفظ المكتب بحقوقه في محتواه. ويجوز معالجة ذلك المحتوى بالقدر اللازم لتقديم الوظائف التي يطلبها المستخدم وتشغيل الخدمة ودعمها."
        ]
      },
      {
        id: "smart-import",
        title: "6. العقود والاستيراد الذكي",
        bullets: [
          "يعمل الاستيراد الذكي مع مستندات PDF مدعومة، وليس مع كل ملف أو تنسيق بالضرورة.",
          "قد تتطلب البيانات المستخرجة مراجعة أو تصحيحاً.",
          "يتحمل المستخدم مسؤولية مراجعة المعلومات المستخرجة قبل اعتمادها أو الاعتماد عليها.",
          "لا يمثل PropertyON هذه الوظيفة كربط رسمي بواجهة منصة إيجار أو مزامنة مباشرة معها."
        ]
      },
      {
        id: "collections",
        title: "7. جداول الدفعات والتحصيل",
        paragraphs: [
          "يساعد PropertyON المكتب على تتبع جداول الدفعات، وتسجيل تحصيلات المكتب، وتوزيع المبالغ على الدفعات المؤهلة، وربط السندات ومطابقتها ضمن السجلات التشغيلية.",
          "لا يعالج PropertyON حالياً دفع الإيجار من المستأجر إلكترونياً، ولا يقدم نفسه كبوابة دفع لتحصيل الإيجار. ويتحمل المستخدم مسؤولية التحقق من السجلات والمبالغ قبل الاعتماد عليها."
        ]
      },
      {
        id: "messaging",
        title: "8. الرسائل والإشعارات",
        paragraphs: [
          "يتحمل المكتب مسؤولية التأكد من امتلاكه صلاحية التواصل مع المستلمين واستخدام بيانات اتصالهم. وقد تعتمد إتاحة الرسائل على الإعدادات ومقدم الخدمة وبيئة التشغيل.",
          "إن إعداد رسالة أو طلب إرسالها لا يضمن وصولها، وعلى المكتب استخدام وسائل متابعة مناسبة عندما تكون الرسالة مهمة."
        ]
      },
      {
        id: "scoped-access",
        title: "9. وصول الملاك والمستأجرين",
        paragraphs: ["يكون وصول المالك أو المستأجر، عندما يكون متاحاً، مرتبطاً بالعلاقة ومحدوداً بالسجلات المدعومة ذات الصلة. لا تقدّم هذه الشروط ذلك الوصول على أنه تطبيق مستقل متكامل لكل طرف."]
      },
      {
        id: "availability",
        title: "10. إتاحة الوصول المبكر وتطور الميزات",
        paragraphs: [
          "قد تُضاف الميزات أو تتغير أو تُقيّد أو تُحسّن خلال الوصول المبكر. وقد تحدث صيانة أو فترات عدم إتاحة مؤقتة.",
          "لا تتضمن هذه الشروط التزاماً رقمياً بوقت تشغيل أو اتفاقية مستوى خدمة. راجع المعلومات التشغيلية والمخرجات قبل الاعتماد عليها لأن الوظائف ما زالت تتطور."
        ]
      },
      {
        id: "commercial",
        title: "11. لا توجد شروط فوترة تجارية عامة ضمن هذه الوثيقة",
        paragraphs: [
          "لا تشمل هذه الشروط أسعاراً أو تجديداً تلقائياً أو التزامات دفع اشتراك أو سياسة إلغاء أو استرداد. شروط الاشتراك التجاري العام المدفوع ليست جزءاً من شروط الوصول المبكر هذه.",
          "إذا قُدمت اشتراكات مدفوعة أو طُرحت لاحقاً، فستُعرض الشروط التجارية المطبقة بصورة منفصلة قبل أن تحكم ذلك الاشتراك."
        ]
      },
      {
        id: "product-rights",
        title: "12. المنتج والمحتوى",
        paragraphs: ["تظل حقوق المنتج والتصميم والبرمجيات والعلامة والمحتوى الذي يقدمه PropertyON محفوظة لأصحابها. لا تمنحك مرحلة الوصول المبكر حق نسخ المنتج أو إعادة بيعه أو محاولة استخراج شفرته، باستثناء ما تسمح به الأنظمة المطبقة صراحة."]
      },
      {
        id: "changes-and-ending-access",
        title: "13. التغييرات وإنهاء الوصول",
        paragraphs: [
          "قد نحدّث الخدمة وهذه الشروط مع تطور مرحلة الوصول المبكر. سيظهر تاريخ آخر تحديث في أعلى الصفحة.",
          "يمكن تقييد أو إنهاء الوصول عند إساءة الاستخدام، أو وجود خطر أمني، أو استخدام غير مصرح به، أو عند تغير إتاحة برنامج الوصول المبكر. تخضع معالجة بيانات الحساب عند انتهاء الوصول لإشعار الخصوصية والمتطلبات المطبقة."
        ]
      },
      {
        id: "legal-framework",
        title: "14. الإطار التجاري المستقبلي",
        paragraphs: [
          "لا تحدد شروط الوصول المبكر هذه محكمة مختصة أو تحكيماً أو سقف مسؤولية تجارياً، ولا تذكر جهة تعاقد مسجلة لم يتم اعتمادها. يجب اعتماد هذه المسائل ضمن الشروط النهائية قبل الإطلاق التجاري المدفوع.",
          "ينبغي للمستخدمين في المرحلة الحالية التحقق من المعلومات التشغيلية قبل اتخاذ قرار يعتمد عليها، مع إدراك أن وظائف الوصول المبكر قد تتطور."
        ]
      },
      {
        id: "contact",
        title: "15. التواصل",
        paragraphs: [`البريد الإلكتروني: ${CONTACT_EMAIL}`, `الهاتف: ${CONTACT_PHONE}`],
        note: "هذه شروط محدودة للموقع والوصول المبكر، وليست بديلاً عن الشروط التجارية النهائية التي ستلزم قبل طرح اشتراكات عامة مدفوعة."
      }
    ]
  },
  en: {
    title: "Website & Early Access Terms",
    kicker: "Website use and current product evaluation",
    summary: "These terms govern the PropertyON website, early-access accounts, and currently available functions. They are not paid commercial subscription terms.",
    updated: "Last updated: August 19, 2026",
    toc: "Terms contents",
    sections: [
      {
        id: "scope",
        title: "1. Scope of these terms",
        paragraphs: [
          "PropertyON is currently offered in an early-access stage before a finalized commercial launch. These terms govern use of the website, product evaluation, early-access accounts, and functions available at this stage.",
          "Features and access availability may evolve during this stage. The website does not present public commercial subscription prices, and these terms are not a paid subscription agreement. If paid subscriptions are introduced, applicable commercial terms will be presented separately before they govern that subscription."
        ]
      },
      {
        id: "acceptance",
        title: "2. Accepting these terms",
        paragraphs: ["By using the website or creating an early-access account, you acknowledge these terms and accept them within their current scope. If you use PropertyON for an office, you must be authorized to do so."]
      },
      {
        id: "accounts",
        title: "3. Accounts and access",
        bullets: [
          "Provide accurate account and contact information and update it where needed.",
          "Do not misuse a one-time verification code (OTP) or your means of account access, and do not permit unauthorized access.",
          "Office administrators are responsible for assigning appropriate employee access and reviewing roles and permissions.",
          "Do not attempt to access an account, office, or record you are not authorized to use.",
          "Early-access availability may depend on current readiness, eligibility, and operating capacity."
        ]
      },
      {
        id: "acceptable-use",
        title: "4. Appropriate use",
        paragraphs: ["Use PropertyON for lawful and authorized purposes related to office operations and product evaluation. Do not disrupt the service, bypass access controls, upload harmful content, or use the service to violate another person's rights."]
      },
      {
        id: "office-data",
        title: "5. Responsibility for office data",
        paragraphs: [
          "The office and its users are responsible for the accuracy and review of information they enter or upload and for having authority to handle it through PropertyON. Where relevant, this includes owner and tenant information, contracts, contact details, and documents.",
          "The office retains its rights in its content. That content may be processed to the extent needed to provide requested functions and operate and support the service."
        ]
      },
      {
        id: "smart-import",
        title: "6. Contracts and Smart Import",
        bullets: [
          "Smart Import works with supported PDF documents and may not work with every file or format.",
          "Extracted information may need review or correction.",
          "Users are responsible for reviewing extracted information before accepting or relying on it.",
          "PropertyON does not represent this function as an official Ejar API integration or direct synchronization."
        ]
      },
      {
        id: "collections",
        title: "7. Payment schedules and collections",
        paragraphs: [
          "PropertyON helps an office track payment schedules, record office collections, allocate amounts to eligible installments, and link and reconcile receipts within operating records.",
          "PropertyON does not currently process tenant rent payments electronically and is not presented as a rent-payment gateway. Users are responsible for verifying records and amounts before relying on them."
        ]
      },
      {
        id: "messaging",
        title: "8. Messages and notifications",
        paragraphs: [
          "Offices are responsible for ensuring they are authorized to contact recipients and use their contact information. Messaging availability may depend on configuration, provider availability, and the operating environment.",
          "Preparing or requesting a message does not guarantee delivery. Offices should use appropriate follow-up methods where a communication is important."
        ]
      },
      {
        id: "scoped-access",
        title: "9. Owner and tenant access",
        paragraphs: ["Owner or tenant access, where available, is relationship-scoped and limited to supported related records. These terms do not describe it as a complete standalone application for either participant."]
      },
      {
        id: "availability",
        title: "10. Early-access availability and feature evolution",
        paragraphs: [
          "Features may be added, changed, limited, or refined during early access. Maintenance or temporary unavailability may occur.",
          "These terms do not promise a numerical uptime level or service-level agreement. Review operating information and outputs before relying on them because early-access functions may continue to evolve."
        ]
      },
      {
        id: "commercial",
        title: "11. No public commercial billing terms in this document",
        paragraphs: [
          "These terms contain no prices, automatic renewal, subscription-payment obligations, cancellation policy, or refund policy. Public paid commercial terms are not part of these Early Access Terms.",
          "If paid subscriptions are introduced or offered, the applicable commercial terms will be presented separately before they govern that subscription."
        ]
      },
      {
        id: "product-rights",
        title: "12. Product and content",
        paragraphs: ["Rights in the PropertyON product, design, software, brand, and PropertyON-provided content remain with their respective owners. Early access does not allow you to copy, resell, or attempt to derive the product's source code, except where applicable law expressly permits it."]
      },
      {
        id: "changes-and-ending-access",
        title: "13. Changes and ending access",
        paragraphs: [
          "The service and these terms may be updated as early access develops. The latest update date will appear at the top of this page.",
          "Access may be limited or ended for misuse, security risk, unauthorized use, or a change in early-access availability. Account information is handled under the Privacy Notice and applicable requirements when access ends."
        ]
      },
      {
        id: "legal-framework",
        title: "14. Future commercial framework",
        paragraphs: [
          "These early-access terms do not select a court or arbitration process, set a commercial liability cap, or name a registered contracting entity that has not been finalized. Those matters require approval in final terms before a paid commercial launch.",
          "At this stage, users should verify operating information before making decisions based on it and understand that early-access functions may evolve."
        ]
      },
      {
        id: "contact",
        title: "15. Contact",
        paragraphs: [`Email: ${CONTACT_EMAIL}`, `Phone: ${CONTACT_PHONE}`],
        note: "These are limited website and early-access terms. They are not a substitute for the final commercial terms required before public paid subscriptions are introduced."
      }
    ]
  }
};

export default function LegalDocument({ kind }: { kind: DocumentKind }) {
  const [language, setLanguage] = useState<Language>("ar");
  const rtl = language === "ar";
  const copy = (kind === "privacy" ? privacy : terms)[language];
  const otherHref = kind === "privacy" ? "/terms" : "/privacy";
  const Arrow = rtl ? ArrowLeft : ArrowRight;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    return () => {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    };
  }, [language, rtl]);

  return (
    <div className={styles.page} dir={rtl ? "rtl" : "ltr"}>
      <a className={styles.skipLink} href="#legal-main">{rtl ? "انتقل إلى الوثيقة" : "Skip to document"}</a>
      <header className={styles.header}>
        <a href="/" aria-label={rtl ? "العودة إلى الصفحة الرئيسية" : "Back to homepage"}><PropertyONWordmark /></a>
        <div className={styles.headerActions}>
          <a className={styles.homeLink} href="/"><Arrow aria-hidden="true" />{rtl ? "الصفحة الرئيسية" : "Homepage"}</a>
          <button className={styles.languageButton} onClick={() => setLanguage(rtl ? "en" : "ar")} aria-label={rtl ? "Switch to English" : "التبديل إلى العربية"}>
            <Languages aria-hidden="true" />{rtl ? "EN" : "ع"}
          </button>
        </div>
      </header>

      <main id="legal-main">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>{copy.kicker}</p>
            <h1>{copy.title}</h1>
            <p className={styles.summary}>{copy.summary}</p>
            <p className={styles.updated}>{copy.updated}</p>
          </div>
        </section>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label={copy.toc}>
            <strong>{copy.toc}</strong>
            <ol>{copy.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title.replace(/^\d+\.\s*/, "")}</a></li>)}</ol>
          </nav>

          <article className={styles.article}>
            {copy.sections.map((section) => (
              <section id={section.id} key={section.id} className={styles.section}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.note && <div className={styles.note}>{section.note}</div>}
              </section>
            ))}
          </article>
        </div>
      </main>

      <footer className={styles.footer}>
        <div><PropertyONWordmark dark /><p>{rtl ? "تشغيل أوضح للمكاتب العقارية." : "Clearer operations for real-estate offices."}</p></div>
        <div className={styles.footerLinks}>
          <a href={`mailto:${CONTACT_EMAIL}`}><Mail aria-hidden="true" />{CONTACT_EMAIL}</a>
          <a href="tel:+966115075727" dir="ltr"><Phone aria-hidden="true" />{CONTACT_PHONE}</a>
          <a href={otherHref}>{kind === "privacy" ? (rtl ? "شروط الاستخدام والوصول المبكر" : "Website & Early Access Terms") : (rtl ? "إشعار الخصوصية" : "Privacy Notice")}</a>
        </div>
      </footer>
    </div>
  );
}
