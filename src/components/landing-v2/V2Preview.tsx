"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  ChevronDown,
  CircleAlert,
  FileCheck2,
  FileText,
  Globe2,
  Languages,
  LockKeyhole,
  Menu,
  MessageSquareText,
  Network,
  Play,
  ReceiptText,
  ShieldCheck,
  Users,
  WalletCards,
  X
} from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { faqs, PreviewLanguage, proofTabs } from "./content";
import PropertyONWordmark from "./PropertyONWordmark";
import styles from "./V2Preview.module.css";

const OFFICE_REGISTRATION_URL = "https://app.f4lcon.tech/register-office";
const LOGIN_URL = "https://app.f4lcon.tech/login";
const CONTACT_EMAIL = "support@f4lcon.tech";
const CONTACT_PHONE_HREF = "tel:+966115075727";
const CONTACT_PHONE_LABEL = "+966 11 507 5727";

type Copy = {
  [key: string]: string | string[];
};

const copy: Record<PreviewLanguage, Copy> = {
  ar: {
    product: "المنتج",
    connected: "كيف يعمل",
    import: "الاستيراد الذكي",
    collections: "التحصيل والتقارير",
    contact: "تواصل معنا",
    login: "تسجيل الدخول",
    trial: "ابدأ مع PropertyON",
    preview: "وصول مبكر",
    eyebrow: "صُمم للمكاتب العقارية في السعودية",
    heroTitle: "كل عمليات مكتبك العقاري.\nفي منظومة واحدة مترابطة.",
    heroBody: "اربط العقارات والوحدات والعقود وجداول الدفعات والتحصيلات والسندات والمصروفات والتقارير، واعرف ما يحتاج إلى إجراء اليوم من منظومة تشغيل واحدة.",
    seeProduct: "شاهد PropertyON يعمل",
    support: ["واجهة عربية", "صلاحيات للفريق", "تقارير قابلة للتصدير"],
    synthetic: "بيانات تجريبية",
    heroChoice: "مساحة عقار حقيقية — اختيرت بدلاً من لوحة التشغيل المحجوبة",
    proofEyebrow: "من داخل PropertyON",
    proofTitle: "منتج تشغيلي حقيقي، وليس مجرد لوحة أرقام.",
    proofBody: "استعرض شاشات حقيقية من بيئة العرض التجريبية الاصطناعية. لا نعيد بناء واجهة المنتج داخل صفحة التسويق.",
    mapEyebrow: "سجل واحد، سياق كامل",
    mapTitle: "عندما تتصل السجلات، يصبح تشغيل المكتب أوضح.",
    mapBody: "العقار ووحداته وأطراف العقد وجدول الدفعات والتحصيلات والسندات والمصروفات ليست ملفات منفصلة. PropertyON يحافظ على العلاقة بينها حتى تصل إلى التقرير.",
    importEyebrow: "الاستيراد الذكي للعقود",
    importTitle: "من ملف العقد إلى بيانات جاهزة للمراجعة.",
    importBody: "ارفع مستند PDF مدعوماً، وراجع البيانات المستخرجة والأدلة ومستوى الثقة قبل اعتمادها داخل النظام.",
    importQual: "الاستيراد الذكي لا يمثل ربطاً رسمياً أو مزامنة مباشرة مع منصة إيجار.",
    importSteps: ["رفع الملف", "اختيار الملف", "الاستخراج", "المراجعة البشرية"],
    collectionEyebrow: "تحصيل حقيقي، موثّق",
    collectionTitle: "كل دفعة واضحة. وكل تحصيل موثّق.",
    collectionBody: "قصة حقيقية من محرك التحصيل: سُجّل مبلغ 30,000 ر.س على عقد تجريبي، وبدأ التوزيع من أقدم دفعة مؤهلة، ثم تحدّث الرصيد وظهر السند المرتبط.",
    before: "قبل التحصيل",
    result: "بعد التحصيل",
    allocation: "يبدأ التوزيع من أقدم دفعة مستحقة مؤهلة.",
    collectionQual: "يوثّق PropertyON تحصيلات المكتب ويطابقها؛ ولا يعالج دفع الإيجار إلكترونياً.",
    receipt: "سند مرتبط",
    propertyEyebrow: "مساحة تشغيل العقار",
    propertyTitle: "ليس مجرد سجل عقار. هذه مساحة عمل تشغيلية.",
    propertyBody: "الوحدات والإشغال والعقود والدخل والمصروفات والمركز المالي تظهر في سياق واحد حول برج الواحة للأعمال.",
    actionEyebrow: "مبدأ المنتج",
    actionTitle: "الإجراء قبل العرض.",
    actionBody: "التصميم التشغيلي يبدأ بما يحتاج إلى متابعة ثم يقود إلى السجل المرتبط. لقطة لوحة التشغيل غير معروضة هنا لأنها بقيت في حالة تحميل أثناء التحقق، ولم نستبدلها بواجهة وهمية.",
    reportsEyebrow: "Reporting V3",
    reportsTitle: "من الدفعة التشغيلية إلى تقرير قابل للمشاركة.",
    reportsBody: "سجل الدفعات الحقيقي يعرض الحالات والفلاتر و22 صفاً وخيارات الطباعة والتصدير. لم نستخدم الملخص المالي المحجوب أو نختلق رسوماً بديلة.",
    commEyebrow: "الإشعارات وسياق التواصل",
    commTitle: "التواصل يبدأ من سبب واضح.",
    commBody: "تدعم المنظومة الإشعارات وعائلات قواعد لأحداث الدفعات والعقود. لم تُستخدم واجهة رسائل يدوية لأن دور العرض التجريبي لم يكن مخولاً لها.",
    ruleSupport: "قاعدة مدعومة",
    ruleQual: "الإرسال الفعلي يعتمد على تفعيل القاعدة والمزوّد وبيئة التشغيل.",
    teamEyebrow: "فريق المكتب",
    teamTitle: "أدوار واضحة لمكتب يعمل كفريق.",
    teamBody: "تعرض اللقطة الحقيقية ثلاثة أعضاء وأدوارهم. الشرح التسويقي يوضح نطاقات العمل دون أن يتظاهر بأنه مصفوفة صلاحيات داخل المنتج.",
    scopes: ["مسؤول مكتب", "موظف تحصيل", "عرض التقارير"],
    accessEyebrow: "وصول مرتبط بالعلاقة",
    accessTitle: "المعلومات المناسبة للطرف المناسب.",
    accessBody: "وصول محدود للسجلات المرتبطة، وليس تطبيقاً متكاملاً مستقلاً للملاك أو المستأجرين.",
    owner: "المالك",
    tenant: "المستأجر",
    ownerRecords: ["عقارات مرتبطة", "عقود وجداول", "سندات ومصروفات", "إشعارات"],
    tenantRecords: ["عقد مرتبط", "جدول دفعات", "سندات", "إشعارات"],
    localEyebrow: "صُمم لسياق العمل في السعودية",
    localTitle: "عربي أولاً، ومتجاوب حيث يبدأ العمل الحقيقي.",
    localBody: "دليل فعلي من واجهة عربية لسطح المكتب، مساحة عقار متجاوبة على 390×844، وحالة إنجليزية/LTR مؤهلة للمراجعة.",
    localQual: "العربية هي التجربة الأقوى؛ الإنجليزية واسعة لكنها ليست مكتملة بالدرجة نفسها في كل شاشة.",
    evidence: ["RTL / LTR", "SAR", "أرقام ومدن سعودية", "تواريخ بتوقيت الرياض"],
    commercialEyebrow: "ابدأ مع PropertyON",
    commercialTitle: "ابدأ تشغيل مكتبك على PropertyON.",
    commercialBody: "ابدأ بتجهيز مكتبك واستكشف PropertyON باستخدام تجربة الوصول الحالية، أو تواصل معنا لمناقشة احتياج مكتبك.",
    talk: "تحدث معنا",
    contactNote: "تواصل مباشرة مع فريق PropertyON بشأن احتياج مكتبك.",
    faqEyebrow: "أسئلة عالية النية",
    faqTitle: "إجابات واضحة قبل أن تبدأ.",
    finalEyebrow: "الخطوة التالية",
    finalTitle: "اجعل تشغيل مكتبك أوضح من أول عقد إلى آخر تقرير.",
    finalBody: "ابدأ من مساحة عقار حقيقية، ودورة تحصيل موثّقة، وتقارير قابلة للمراجعة—داخل منظومة واحدة مترابطة.",
    book: "تحدث معنا",
    existing: "لديك حساب؟",
    footerLine: "منظومة التشغيل المتصلة للمكاتب العقارية في السعودية.",
    previewNotice: "PropertyON في مرحلة الإطلاق المبكر حالياً، وقد تتطور الميزات وإتاحة الوصول مع استمرار تطوير الخدمة."
  },
  en: {
    product: "Product",
    connected: "How it works",
    import: "Smart Import",
    collections: "Collections & reports",
    contact: "Contact",
    login: "Log in",
    trial: "Get started with PropertyON",
    preview: "Early access",
    eyebrow: "Built for Saudi real-estate offices",
    heroTitle: "Every operation in your office.\nConnected in one system.",
    heroBody: "Connect properties, units, contracts, payment schedules, collections, receipts, expenses and reports—and see what needs action from one operating system.",
    seeProduct: "See PropertyON in action",
    support: ["Arabic-first", "Team permissions", "Exportable reports"],
    synthetic: "Synthetic demo data",
    heroChoice: "Real property workspace—selected instead of the blocked dashboard",
    proofEyebrow: "Inside PropertyON",
    proofTitle: "A real operational product—not another decorative dashboard.",
    proofBody: "Explore real screens from the synthetic demo environment. The marketing page never rebuilds product UI and presents it as evidence.",
    mapEyebrow: "One record, full context",
    mapTitle: "When records stay connected, the office becomes easier to run.",
    mapBody: "Properties, units, contract parties, schedules, collections, receipts and expenses are not separate files. PropertyON preserves their context through reporting.",
    importEyebrow: "Smart Contract Import",
    importTitle: "From contract file to data ready for review.",
    importBody: "Upload a supported PDF, then review extracted data, evidence and confidence before anything becomes operational.",
    importQual: "Smart Import is not an official Ejar integration or direct synchronization.",
    importSteps: ["Upload", "File selected", "Extraction", "Human review"],
    collectionEyebrow: "Real, documented collection",
    collectionTitle: "Every installment stays clear. Every collection stays documented.",
    collectionBody: "A real engine transition: SAR 30,000 was recorded on a synthetic contract, allocated from the oldest eligible installment, then the balance updated and a linked receipt appeared.",
    before: "Before collection",
    result: "After collection",
    allocation: "Allocation starts with the oldest eligible due installment.",
    collectionQual: "PropertyON records and reconciles office collections; it does not process tenant rent online.",
    receipt: "Linked receipt",
    propertyEyebrow: "Property workspace",
    propertyTitle: "Not just a property record. An operational workspace.",
    propertyBody: "Units, occupancy, contracts, income, expenses and financial position share one context around the synthetic Oasis Business Tower.",
    actionEyebrow: "Product principle",
    actionTitle: "Action before display.",
    actionBody: "The operating model begins with work that needs attention, then leads into the connected record. The dashboard is not shown because verified capture remained in a loading state—and no fake UI replaced it.",
    reportsEyebrow: "Reporting V3",
    reportsTitle: "From operating record to a report ready to share.",
    reportsBody: "The real Payment Register shows statuses, filters, 22 rows, print and export. The blocked Financial Summary was not used and no substitute charts were invented.",
    commEyebrow: "Notifications and communication context",
    commTitle: "Communication starts with a clear reason.",
    commBody: "The system supports notifications and rule families for payment and contract events. Manual Messaging UI is not shown because the demo role was not authorized.",
    ruleSupport: "Supported rule",
    ruleQual: "Actual delivery depends on the rule, provider and runtime being active.",
    teamEyebrow: "Office team",
    teamTitle: "Clear roles for an office that works as a team.",
    teamBody: "The real capture shows three team members and assigned roles. Marketing explanation describes scopes without pretending to be a product permission matrix.",
    scopes: ["Office admin", "Collections employee", "Reporting viewer"],
    accessEyebrow: "Relationship-scoped access",
    accessTitle: "Relevant information for each participant.",
    accessBody: "Limited access to related records—not complete standalone owner or tenant applications.",
    owner: "Owner",
    tenant: "Tenant",
    ownerRecords: ["Related properties", "Contracts and schedules", "Receipts and expenses", "Notifications"],
    tenantRecords: ["Related contract", "Payment schedule", "Receipts", "Notifications"],
    localEyebrow: "Designed for Saudi operations",
    localTitle: "Arabic-first and responsive where real work begins.",
    localBody: "Real evidence from Arabic desktop, a responsive 390×844 property workspace, and a qualified English/LTR review state.",
    localQual: "Arabic is the strongest experience; English is substantial but not equally complete on every screen.",
    evidence: ["RTL / LTR", "SAR", "Saudi phones and cities", "Riyadh-aware dates"],
    commercialEyebrow: "Start with PropertyON",
    commercialTitle: "Start operating your office on PropertyON.",
    commercialBody: "Prepare your office and explore PropertyON through the current access experience, or talk to us about your office workflow.",
    talk: "Talk to us",
    contactNote: "Contact the PropertyON team directly about your office workflow.",
    faqEyebrow: "High-intent questions",
    faqTitle: "Clear answers before you begin.",
    finalEyebrow: "Your next step",
    finalTitle: "Make office operations clearer from the first contract to the final report.",
    finalBody: "Start with a real property workspace, a documented collection flow and reviewable reporting—inside one connected operating system.",
    book: "Talk to us",
    existing: "Already have an account?",
    footerLine: "The connected operating system for Saudi real-estate offices.",
    previewNotice: "PropertyON is currently in early access. Features and access availability may evolve as the service develops."
  }
};

const importImages = [
  "/v2/product/smart-import/upload-ar-desktop.png",
  "/v2/product/smart-import/selected-ar-desktop.png",
  "/v2/product/smart-import/processing-ar-desktop.png",
  "/v2/product/smart-import/review-ar-desktop.png"
];

function text(c: Copy, key: string) {
  return c[key] as string;
}

function list(c: Copy, key: string) {
  return c[key] as string[];
}

function ProductFigure({ src, alt, label, className = "", eager = false }: { src: string; alt: string; label: string; className?: string; eager?: boolean }) {
  return (
    <figure className={`${styles.productFigure} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={900}
        priority={eager}
        loading={eager ? undefined : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        sizes="(max-width: 700px) 94vw, (max-width: 1200px) 88vw, 800px"
      />
      <figcaption>{label}</figcaption>
    </figure>
  );
}

export default function V2Preview() {
  const [language, setLanguage] = useState<PreviewLanguage>("ar");
  const [menuOpen, setMenuOpen] = useState(false);
  const [proof, setProof] = useState(0);
  const [importStep, setImportStep] = useState(3);
  const [collectionState, setCollectionState] = useState<"before" | "result">("result");
  const [access, setAccess] = useState<"owner" | "tenant">("owner");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState("product-proof");
  const [scrolled, setScrolled] = useState(false);
  const [motionReady, setMotionReady] = useState(false);
  const [mapFocus, setMapFocus] = useState("flow");
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLDivElement>(null);
  const c = copy[language];
  const rtl = language === "ar";
  const Arrow = rtl ? ArrowLeft : ArrowRight;
  const activeProof = proofTabs[language][proof];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
    return () => {
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    };
  }, [language, rtl]);

  useEffect(() => {
    if (!menuOpen) return;
    const prior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
      if (event.key === "Tab") {
        const focusable = Array.from(menuPanel.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? []);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prior;
      window.removeEventListener("keydown", onKey);
      menuButton.current?.focus();
    };
  }, [menuOpen]);

  useEffect(() => {
    setMotionReady(true);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduced || !("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.setAttribute("data-revealed", "true"));
      return;
    }
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        (entry.target as HTMLElement).setAttribute("data-revealed", "true");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    revealTargets.forEach((target) => revealObserver.observe(target));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const ids = ["product-proof", "connected", "smart-import", "reports", "contact"];
    const targets = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-28% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] });
    targets.forEach((target) => sectionObserver.observe(target));
    return () => {
      window.removeEventListener("scroll", onScroll);
      sectionObserver.disconnect();
    };
  }, []);

  const nav = [
    ["product-proof", text(c, "product")],
    ["connected", text(c, "connected")],
    ["smart-import", text(c, "import")],
    ["reports", rtl ? "التقارير" : "Reports"],
    ["contact", text(c, "contact")]
  ];

  const switchLanguage = () => setLanguage(language === "ar" ? "en" : "ar");
  const moveProofTab = (event: ReactKeyboardEvent<HTMLButtonElement>, index: number) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const count = proofTabs[language].length;
    const next = event.key === "Home" ? 0 : event.key === "End" ? count - 1 : event.key === "ArrowRight" ? (index + 1) % count : (index - 1 + count) % count;
    setProof(next);
    requestAnimationFrame(() => document.getElementById(`proof-tab-${proofTabs[language][next].id}`)?.focus());
  };

  const activeMapEdges: Record<string, string[]> = {
    property: ["property-units", "property-contract", "property-expenses", "property-reports"],
    contract: ["units-contract", "owners-contract", "contract-tenants", "contract-schedule", "contract-expenses"],
    collection: ["schedule-collection", "collection-receipt", "collection-report"],
    flow: ["property-contract", "contract-schedule", "schedule-collection", "collection-receipt", "collection-report"]
  };
  const activeEdges = activeMapEdges[mapFocus] ?? activeMapEdges.flow;
  const connectedNodes: Record<string, string[]> = {
    property: ["property", "units", "contract", "expenses", "reports"],
    contract: ["contract", "owners", "tenants", "units", "schedule", "expenses"],
    collection: ["schedule", "collection", "receipts", "reports"],
    flow: ["property", "contract", "schedule", "collection", "receipts", "reports"]
  };
  const nodeActive = (node: string) => connectedNodes[mapFocus]?.includes(node);

  return (
    <div className={styles.preview} dir={rtl ? "rtl" : "ltr"} data-motion-ready={motionReady ? "true" : "false"}>
      <a className={styles.skipLink} href="#main">{rtl ? "انتقل إلى المحتوى" : "Skip to content"}</a>

      <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
        <div className={styles.navInner}>
          <a href="#top" className={styles.wordmark} aria-label="PropertyON">
            <PropertyONWordmark />
          </a>
          <nav className={styles.desktopNav} aria-label={rtl ? "التنقل الرئيسي" : "Primary navigation"}>
            {nav.map(([id, label]) => <a key={id} href={`#${id}`} className={activeSection === id ? styles.activeNavLink : ""} aria-current={activeSection === id ? "location" : undefined}>{label}</a>)}
          </nav>
          <div className={styles.navActions}>
            <button className={styles.languageButton} onClick={switchLanguage} aria-label={rtl ? "Switch to English" : "التبديل إلى العربية"}>
              <Languages aria-hidden="true" /> {rtl ? "EN" : "ع"}
            </button>
            <a className={styles.loginLink} href={LOGIN_URL}>{text(c, "login")}</a>
            <a className={styles.primaryButton} href={OFFICE_REGISTRATION_URL}>{text(c, "trial")}</a>
            <button ref={menuButton} className={styles.menuButton} onClick={() => setMenuOpen(true)} aria-expanded={menuOpen} aria-controls="v2-mobile-menu" aria-label={rtl ? "فتح القائمة" : "Open menu"}>
              <Menu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className={styles.menuBackdrop} role="dialog" aria-modal="true" aria-label={rtl ? "قائمة التنقل" : "Navigation menu"} id="v2-mobile-menu">
          <div className={styles.menuPanel} ref={menuPanel}>
            <div className={styles.menuTop}>
              <PropertyONWordmark />
              <button ref={closeButton} className={styles.iconButton} onClick={() => setMenuOpen(false)} aria-label={rtl ? "إغلاق القائمة" : "Close menu"}><X aria-hidden="true" /></button>
            </div>
            <nav aria-label={rtl ? "تنقل الجوال" : "Mobile navigation"}>
              {nav.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}<Arrow aria-hidden="true" /></a>)}
            </nav>
            <div className={styles.menuFooter}>
              <button className={styles.secondaryButton} onClick={switchLanguage}><Globe2 aria-hidden="true" />{rtl ? "English" : "العربية"}</button>
              <a href={LOGIN_URL} className={styles.secondaryButton}>{text(c, "login")}</a>
              <a href={OFFICE_REGISTRATION_URL} className={styles.primaryButton} onClick={() => setMenuOpen(false)}>{text(c, "trial")}</a>
            </div>
          </div>
        </div>
      )}

      <main id="main">
        <section className={styles.hero} id="top">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.previewBadge}><span />{text(c, "preview")}</div>
              <p className={styles.eyebrow}>{text(c, "eyebrow")}</p>
              <h1>{text(c, "heroTitle").split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
              <p className={styles.heroLead}>{text(c, "heroBody")}</p>
              <div className={styles.buttonRow}>
                <a className={styles.primaryButton} href={OFFICE_REGISTRATION_URL}>{text(c, "trial")}<Arrow aria-hidden="true" /></a>
                <a className={styles.secondaryButton} href="#product-proof"><Play aria-hidden="true" />{text(c, "seeProduct")}</a>
              </div>
              <ul className={styles.supportList}>
                {list(c, "support").map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
              </ul>
            </div>
            <div className={styles.heroVisual}>
              <ProductFigure src="/v2/product/property/workspace-ar-desktop.png" alt={rtl ? "مساحة عقار PropertyON الحقيقية تعرض الوحدات والإشغال والعقود والمركز المالي" : "Real PropertyON property workspace showing units, occupancy, contracts and financial position"} label={text(c, "synthetic")} className={styles.heroProduct} eager />
              <div className={`${styles.annotation} ${styles.annotationOne}`}><Building2 aria-hidden="true" />{rtl ? "12 وحدة — 10 مشغولة" : "12 units — 10 occupied"}</div>
              <div className={`${styles.annotation} ${styles.annotationTwo}`}><FileText aria-hidden="true" />{rtl ? "عقود مرتبطة" : "Connected contracts"}</div>
              <div className={`${styles.annotation} ${styles.annotationThree}`}><WalletCards aria-hidden="true" />{rtl ? "دخل ومصروفات" : "Income and expenses"}</div>
              <p className={styles.visualNote}>{text(c, "heroChoice")}</p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.proofSection}`} id="product-proof" data-reveal>
          <div className={styles.container}>
            <div className={styles.sectionIntroCentered}>
              <p className={styles.eyebrow}>{text(c, "proofEyebrow")}</p>
              <h2>{text(c, "proofTitle")}</h2>
              <p>{text(c, "proofBody")}</p>
            </div>
            <div className={styles.tabs} role="tablist" aria-label={rtl ? "شاشات المنتج" : "Product screens"}>
              {proofTabs[language].map((tab, index) => (
                <button key={tab.id} id={`proof-tab-${tab.id}`} role="tab" aria-selected={proof === index} aria-controls="proof-panel" tabIndex={proof === index ? 0 : -1} onKeyDown={(event) => moveProofTab(event, index)} onClick={() => setProof(index)}>{tab.label}</button>
              ))}
            </div>
            <div className={styles.proofStage} role="tabpanel" id="proof-panel" aria-labelledby={`proof-tab-${activeProof.id}`}>
              <div key={activeProof.id} className={styles.stateSwap}><ProductFigure src={activeProof.image} alt={activeProof.alt} label={text(c, "synthetic")} eager /></div>
              <div className={styles.proofCaption}>
                <p>{activeProof.copy}</p>
                <ul>{activeProof.evidence.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.mapSection}`} id="connected" data-reveal>
          <div className={styles.container}>
            <div className={styles.mapIntro}>
              <p className={styles.eyebrow}>{text(c, "mapEyebrow")}</p>
              <h2>{text(c, "mapTitle")}</h2>
              <p>{text(c, "mapBody")}</p>
            </div>
            <div className={`${styles.operatingMap} ${styles.mapInteractive}`} role="group" aria-label={rtl ? "خريطة العلاقات التشغيلية بين العقار والعقد والتحصيل والتقرير" : "Operating relationships connecting property, contract, collection and reporting"} onMouseLeave={() => setMapFocus("flow")}>
              <svg viewBox="0 0 1200 500" role="img" aria-hidden="true">
                <path className={activeEdges.includes("property-contract") ? styles.edgeActive : ""} d="M160 150 C300 150 320 230 465 230" />
                <path className={activeEdges.includes("units-contract") || activeEdges.includes("property-units") ? styles.edgeActive : ""} d="M300 85 C380 85 400 190 500 215" />
                <path className={activeEdges.includes("owners-contract") ? styles.edgeActive : ""} d="M600 80 L600 185" />
                <path className={activeEdges.includes("contract-tenants") ? styles.edgeActive : ""} d="M900 95 C810 95 790 190 700 215" />
                <path className={activeEdges.includes("contract-schedule") ? styles.edgeActive : ""} d="M715 245 C820 245 850 260 960 260" />
                <path className={activeEdges.includes("schedule-collection") ? `${styles.edgeActive} ${styles.flowPath}` : ""} d="M600 280 L600 355" />
                <path className={activeEdges.includes("collection-receipt") ? `${styles.edgeActive} ${styles.flowPath}` : ""} d="M600 405 C730 405 760 430 900 430" />
                <path className={activeEdges.includes("contract-expenses") || activeEdges.includes("property-expenses") ? styles.edgeActive : ""} d="M480 245 C360 265 315 325 250 385" />
                <path className={activeEdges.includes("collection-report") ? `${styles.edgeActive} ${styles.flowPath}` : ""} d="M600 405 L600 470" />
                <path className={activeEdges.includes("property-reports") ? styles.edgeActive : ""} d="M160 150 C120 440 390 495 520 495" />
              </svg>
              <button onMouseEnter={() => setMapFocus("property")} onFocus={() => setMapFocus("property")} onClick={() => setMapFocus("property")} aria-pressed={mapFocus === "property"} className={`${styles.mapNode} ${styles.propertyNode} ${nodeActive("property") ? styles.nodeActive : ""}`}><Building2 />{rtl ? "العقار" : "Property"}</button>
              <button onMouseEnter={() => setMapFocus("contract")} onFocus={() => setMapFocus("contract")} onClick={() => setMapFocus("contract")} className={`${styles.mapNode} ${styles.unitsNode} ${nodeActive("units") ? styles.nodeActive : ""}`}><Network />{rtl ? "الوحدات" : "Units"}</button>
              <button onMouseEnter={() => setMapFocus("contract")} onFocus={() => setMapFocus("contract")} onClick={() => setMapFocus("contract")} className={`${styles.mapNode} ${styles.ownerNode} ${nodeActive("owners") ? styles.nodeActive : ""}`}><Users />{rtl ? "الملاك" : "Owners"}</button>
              <button onMouseEnter={() => setMapFocus("contract")} onFocus={() => setMapFocus("contract")} onClick={() => setMapFocus("contract")} aria-pressed={mapFocus === "contract"} className={`${styles.mapNode} ${styles.contractNode} ${nodeActive("contract") ? styles.nodeActive : ""}`}><FileText />{rtl ? "العقد" : "Contract"}</button>
              <button onMouseEnter={() => setMapFocus("contract")} onFocus={() => setMapFocus("contract")} onClick={() => setMapFocus("contract")} className={`${styles.mapNode} ${styles.tenantNode} ${nodeActive("tenants") ? styles.nodeActive : ""}`}><Users />{rtl ? "المستأجرون" : "Tenants"}</button>
              <button onMouseEnter={() => setMapFocus("collection")} onFocus={() => setMapFocus("collection")} onClick={() => setMapFocus("collection")} className={`${styles.mapNode} ${styles.scheduleNode} ${nodeActive("schedule") ? styles.nodeActive : ""}`}><WalletCards />{rtl ? "جدول الدفعات" : "Payment schedule"}</button>
              <button onMouseEnter={() => setMapFocus("collection")} onFocus={() => setMapFocus("collection")} onClick={() => setMapFocus("collection")} aria-pressed={mapFocus === "collection"} className={`${styles.mapNode} ${styles.collectionNode} ${nodeActive("collection") ? styles.nodeActive : ""}`}><Check />{rtl ? "التحصيلات" : "Collections"}</button>
              <button onMouseEnter={() => setMapFocus("collection")} onFocus={() => setMapFocus("collection")} onClick={() => setMapFocus("collection")} className={`${styles.mapNode} ${styles.receiptNode} ${nodeActive("receipts") ? styles.nodeActive : ""}`}><ReceiptText />{rtl ? "السندات" : "Receipts"}</button>
              <button onMouseEnter={() => setMapFocus("property")} onFocus={() => setMapFocus("property")} onClick={() => setMapFocus("property")} className={`${styles.mapNode} ${styles.expenseNode} ${nodeActive("expenses") ? styles.nodeActive : ""}`}><CircleAlert />{rtl ? "المصروفات عبر النطاقات" : "Expenses across scopes"}</button>
              <button onMouseEnter={() => setMapFocus("collection")} onFocus={() => setMapFocus("collection")} onClick={() => setMapFocus("collection")} className={`${styles.mapNode} ${styles.reportNode} ${nodeActive("reports") ? styles.nodeActive : ""}`}><BarChart3 />{rtl ? "التقارير" : "Reports"}</button>
            </div>
            <ol className={styles.mobileMap}>
              <li><span>01</span><strong>{rtl ? "العقار والوحدات" : "Property and units"}</strong></li>
              <li><span>02</span><strong>{rtl ? "العقد والملاك والمستأجرون" : "Contract, owners and tenants"}</strong></li>
              <li><span>03</span><strong>{rtl ? "جدول الدفعات والتحصيلات والسندات" : "Schedule, collections and receipts"}</strong></li>
              <li><span>04</span><strong>{rtl ? "المصروفات والتقارير عبر السياق" : "Expenses and reports across context"}</strong></li>
            </ol>
          </div>
        </section>

        <section className={`${styles.section} ${styles.importSection}`} id="smart-import" data-reveal>
          <div className={`${styles.container} ${styles.splitGrid}`}>
            <div className={styles.productColumn}>
              <div key={importStep} className={styles.stateSwap}><ProductFigure src={importImages[importStep]} alt={rtl ? "حالة حقيقية من الاستيراد الذكي تنتهي عند المراجعة البشرية" : "Real Smart Import state ending at human review"} label={text(c, "synthetic")} /></div>
            </div>
            <div className={styles.copyColumn}>
              <p className={styles.eyebrow}>{text(c, "importEyebrow")}</p>
              <h2>{text(c, "importTitle")}</h2>
              <p>{text(c, "importBody")}</p>
              <div className={styles.stepList}>
                {list(c, "importSteps").map((step, index) => <button key={step} aria-pressed={importStep === index} onClick={() => setImportStep(index)}><span>{index + 1}</span>{step}</button>)}
              </div>
              <div className={styles.controlStatement}><FileCheck2 aria-hidden="true" /><div><strong>{rtl ? "النظام يستخرج. أنت تراجع." : "PropertyON extracts. You review."}</strong><span>{rtl ? "لا يصبح أي سجل تشغيلياً قبل أن يكون جاهزاً." : "Nothing becomes operational until it is ready."}</span></div></div>
              <p className={styles.qualification}><CircleAlert aria-hidden="true" />{text(c, "importQual")}</p>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.collectionSection}`} id="collections" data-reveal>
          <div className={styles.container}>
            <div className={styles.sectionIntroCentered}>
              <p className={styles.eyebrow}>{text(c, "collectionEyebrow")}</p>
              <h2>{text(c, "collectionTitle")}</h2>
              <p>{text(c, "collectionBody")}</p>
            </div>
            <div className={styles.collectionControls} role="group" aria-label={rtl ? "حالة التحصيل" : "Collection state"}>
              <button aria-pressed={collectionState === "before"} onClick={() => setCollectionState("before")}>{text(c, "before")}</button>
              <span><Arrow aria-hidden="true" />{text(c, "allocation")}</span>
              <button aria-pressed={collectionState === "result"} onClick={() => setCollectionState("result")}>{text(c, "result")}</button>
            </div>
            <div className={styles.collectionGrid}>
              <div key={collectionState} className={styles.stateSwap}><ProductFigure src={collectionState === "before" ? "/v2/product/collection/before-ar-desktop.png" : "/v2/product/collection/result-ar-desktop.png"} alt={collectionState === "before" ? (rtl ? "حالة التحصيل الحقيقية قبل تسجيل المبلغ" : "Real collection state before recording the amount") : (rtl ? "حالة العقد الحقيقية بعد تسجيل تحصيل بقيمة 30 ألف ريال" : "Real contract state after recording a SAR 30,000 collection")} label={text(c, "synthetic")} /></div>
              <aside className={`${styles.receiptPanel} ${collectionState === "result" ? styles.receiptActive : ""}`}>
                <div className={styles.receiptMetric}><span>{rtl ? "المبلغ المسجل" : "Recorded amount"}</span><strong>30,000 <small>SAR</small></strong></div>
                <div className={styles.receiptMetric}><span>{rtl ? "الرصيد المتبقي" : "Remaining balance"}</span><strong>30,000 <small>SAR</small></strong></div>
                <ol className={styles.allocationTrail} aria-label={rtl ? "شرح منطق التحصيل" : "Collection logic explanation"}>
                  <li><strong>30,000 {rtl ? "ر.س" : "SAR"}</strong><span>{rtl ? "تحصيل مسجل" : "recorded collection"}</span></li>
                  <li><strong>{rtl ? "الأقدم استحقاقاً أولاً" : "Oldest due first"}</strong><span>{rtl ? "منطق التوزيع" : "allocation logic"}</span></li>
                  <li><strong>{rtl ? "تحديث الرصيد" : "Balance updated"}</strong><span>{rtl ? "السياق محفوظ" : "context preserved"}</span></li>
                  <li><strong>{rtl ? "سند مرتبط" : "Linked receipt"}</strong><span>{rtl ? "سجل مالي موثّق" : "documented financial record"}</span></li>
                </ol>
                <ProductFigure src="/v2/product/receipts/register-ar-desktop.png" alt={rtl ? "سجل السندات الحقيقي يظهر السند المرتبط بالتحصيل" : "Real receipt register showing the receipt linked to the collection"} label={text(c, "receipt")} className={styles.receiptFigure} />
              </aside>
            </div>
            <p className={styles.qualificationCentered}>{text(c, "collectionQual")}</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.propertySection}`} id="property-workspace" data-reveal>
          <div className={`${styles.container} ${styles.storyGrid}`}>
            <div className={styles.storyCopy}>
              <p className={styles.eyebrow}>{text(c, "propertyEyebrow")}</p>
              <h2>{text(c, "propertyTitle")}</h2>
              <p>{text(c, "propertyBody")}</p>
              <ul className={styles.evidenceList}>
                {[rtl ? "الوحدات والإشغال" : "Units and occupancy", rtl ? "العقود المرتبطة" : "Connected contracts", rtl ? "الدخل والمصروفات" : "Income and expenses", rtl ? "المركز المالي" : "Financial position"].map((item) => <li key={item}><Check />{item}</li>)}
              </ul>
            </div>
            <ProductFigure src="/v2/product/property/workspace-ar-desktop.png" alt={rtl ? "مساحة العقار الحقيقية لبرج الواحة للأعمال" : "Real property workspace for the synthetic Oasis Business Tower"} label={text(c, "synthetic")} />
          </div>
        </section>

        <section className={styles.actionSection} id="action-principle" data-reveal>
          <div className={`${styles.container} ${styles.actionGrid}`}>
            <div>
              <p className={styles.eyebrow}>{text(c, "actionEyebrow")}</p>
              <h2>{text(c, "actionTitle")}</h2>
              <p>{text(c, "actionBody")}</p>
            </div>
            <div className={styles.signalList}>
              {[rtl ? "دفعات تحتاج متابعة" : "Payments needing follow-up", rtl ? "عقود مرتبطة بسياقها" : "Contracts in context", rtl ? "وحدات وإشغال" : "Units and occupancy", rtl ? "انتقال إلى السجل" : "Move into the record"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><Arrow /></div>)}
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reportSection}`} id="reports" data-reveal>
          <div className={`${styles.container} ${styles.storyGrid}`}>
            <div className={styles.storyCopy}>
              <p className={styles.eyebrow}>{text(c, "reportsEyebrow")}</p>
              <h2>{text(c, "reportsTitle")}</h2>
              <p>{text(c, "reportsBody")}</p>
              <div className={styles.reportFamilies}>{[rtl ? "العقارات" : "Properties", rtl ? "العقود" : "Contracts", rtl ? "المالية" : "Financial", rtl ? "العمليات" : "Operations"].map((item) => <span key={item}>{item}</span>)}</div>
            </div>
            <ProductFigure src="/v2/product/reports/payment-register-ar-desktop.png" alt={rtl ? "تقرير سجل الدفعات الحقيقي من Reporting V3" : "Real Reporting V3 Payment Register"} label={text(c, "synthetic")} />
          </div>
        </section>

        <section className={`${styles.section} ${styles.communicationSection}`} id="communications" data-reveal>
          <div className={styles.container}>
            <div className={styles.compactIntro}>
              <div>
                <p className={styles.eyebrow}>{text(c, "commEyebrow")}</p>
                <h2>{text(c, "commTitle")}</h2>
              </div>
              <p>{text(c, "commBody")}</p>
            </div>
            <div className={styles.ruleRail}>
              {[rtl ? "قبل الاستحقاق بـ7 أيام" : "Due in 7 days", rtl ? "يوم الاستحقاق" : "Due today", rtl ? "متأخر" : "Overdue", rtl ? "عقد ينتهي خلال 30 يوماً" : "Contract expires in 30 days"].map((rule) => <div key={rule}><MessageSquareText /><strong>{rule}</strong><span>{text(c, "ruleSupport")}</span></div>)}
            </div>
            <p className={styles.qualificationCentered}>{text(c, "ruleQual")}</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.teamSection}`} id="team" data-reveal>
          <div className={`${styles.container} ${styles.storyGrid}`}>
            <div className={styles.storyCopy}>
              <p className={styles.eyebrow}>{text(c, "teamEyebrow")}</p>
              <h2>{text(c, "teamTitle")}</h2>
              <p>{text(c, "teamBody")}</p>
              <div className={styles.scopeList}>{list(c, "scopes").map((scope, index) => <div key={scope}><span>{index + 1}</span><strong>{scope}</strong><ShieldCheck /></div>)}</div>
            </div>
            <ProductFigure src="/v2/product/team/directory-ar-desktop.png" alt={rtl ? "دليل الفريق الحقيقي يعرض ثلاثة أعضاء وأدوارهم" : "Real team directory showing three people and assigned roles"} label={text(c, "synthetic")} />
          </div>
        </section>

        <section className={`${styles.section} ${styles.accessSection}`} id="scoped-access" data-reveal>
          <div className={styles.container}>
            <div className={styles.sectionIntroCentered}>
              <p className={styles.eyebrow}>{text(c, "accessEyebrow")}</p>
              <h2>{text(c, "accessTitle")}</h2>
              <p>{text(c, "accessBody")}</p>
            </div>
            <div className={styles.accessSwitch} role="group" aria-label={rtl ? "اختيار الطرف" : "Choose participant"}>
              <button aria-pressed={access === "owner"} onClick={() => setAccess("owner")}><Building2 />{text(c, "owner")}</button>
              <button aria-pressed={access === "tenant"} onClick={() => setAccess("tenant")}><Users />{text(c, "tenant")}</button>
            </div>
            <div className={styles.accessGrid}>
              <div className={styles.accessVisual}><div className={styles.officeHub}><Building2 /><strong>{rtl ? "المكتب" : "Office"}</strong><span>{rtl ? "مصدر السياق" : "Source context"}</span></div><div className={styles.accessConnector} aria-hidden="true" /><div key={access} className={styles.stateSwap}><ProductFigure src={access === "owner" ? "/v2/product/access/owner-ar-desktop.png" : "/v2/product/access/tenant-ar-desktop.png"} alt={access === "owner" ? (rtl ? "تجربة المالك الحقيقية محدودة بالعقارات المرتبطة" : "Real owner experience limited to related properties") : (rtl ? "تجربة المستأجر الحقيقية محدودة بالعقد وجدول الدفعات" : "Real tenant experience limited to the related contract and schedule")} label={text(c, "synthetic")} /></div></div>
              <ul key={access} className={`${styles.accessRecords} ${styles.stateSwap}`}>{list(c, access === "owner" ? "ownerRecords" : "tenantRecords").map((item) => <li key={item}><LockKeyhole />{item}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.localSection}`} id="local-fit" data-reveal>
          <div className={styles.container}>
            <div className={styles.localIntro}>
              <div><p className={styles.eyebrow}>{text(c, "localEyebrow")}</p><h2>{text(c, "localTitle")}</h2></div>
              <div><p>{text(c, "localBody")}</p><p className={styles.localQual}>{text(c, "localQual")}</p></div>
            </div>
            <div className={styles.deviceStage}>
              <ProductFigure src="/v2/product/property/workspace-ar-desktop.png" alt="Arabic desktop property workspace" label="Arabic · RTL" className={styles.desktopDevice} />
              <ProductFigure src="/v2/product/mobile/property-workspace-ar-390x844.png" alt="Arabic mobile property workspace at 390 by 844" label="390×844 · RTL" className={styles.mobileDevice} />
              <ProductFigure src="/v2/product/english/smart-import-review-en-desktop.png" alt="Qualified real English LTR Smart Import review state" label="English · LTR · qualified" className={styles.englishDevice} />
            </div>
            <ul className={styles.localeEvidence}>{list(c, "evidence").map((item) => <li key={item}><Globe2 />{item}</li>)}</ul>
          </div>
        </section>

        <section className={`${styles.section} ${styles.commercialSection}`} id="contact" data-reveal>
          <div className={`${styles.container} ${styles.commercialGrid}`}>
            <div>
              <p className={styles.eyebrow}>{text(c, "commercialEyebrow")}</p>
              <h2>{text(c, "commercialTitle")}</h2>
              <p>{text(c, "commercialBody")}</p>
              <div className={styles.buttonRow}>
                <a className={styles.primaryButton} href={OFFICE_REGISTRATION_URL}>{text(c, "trial")}<Arrow aria-hidden="true" /></a>
                <a className={styles.secondaryButton} href={`mailto:${CONTACT_EMAIL}`}>{text(c, "talk")}</a>
              </div>
            </div>
            <aside className={styles.contactCard} aria-label={rtl ? "بيانات التواصل" : "Contact details"}>
              <MessageSquareText aria-hidden="true" />
              <p>{text(c, "contactNote")}</p>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <a href={CONTACT_PHONE_HREF} dir="ltr">{CONTACT_PHONE_LABEL}</a>
            </aside>
          </div>
        </section>

        <section className={`${styles.section} ${styles.faqSection}`} id="faq" data-reveal>
          <div className={styles.container}>
            <div className={styles.faqHeading}><p className={styles.eyebrow}>{text(c, "faqEyebrow")}</p><h2>{text(c, "faqTitle")}</h2></div>
            <div className={styles.faqList}>
              {faqs[language].map(([question, answer], index) => <article key={question}>
                <h3><button aria-expanded={openFaq === index} aria-controls={`faq-panel-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)}>{question}<ChevronDown className={openFaq === index ? styles.chevronOpen : ""} /></button></h3>
                {openFaq === index && <div id={`faq-panel-${index}`} className={styles.faqAnswer}><p>{answer}</p></div>}
              </article>)}
            </div>
          </div>
        </section>

        <section className={styles.finalCta} id="final-cta" data-reveal>
          <div className={styles.finalInner}>
            <p className={styles.eyebrow}>{text(c, "finalEyebrow")}</p>
            <h2>{text(c, "finalTitle")}</h2>
            <p>{text(c, "finalBody")}</p>
            <div className={styles.buttonRow}><a className={styles.primaryButton} href={OFFICE_REGISTRATION_URL}>{text(c, "trial")}</a><a className={styles.darkSecondaryButton} href={`mailto:${CONTACT_EMAIL}`}>{text(c, "book")}</a></div>
            <p className={styles.existing}>{text(c, "existing")} <a href={LOGIN_URL}>{text(c, "login")}</a></p>
          </div>
        </section>
      </main>

      <footer className={styles.footer} data-reveal>
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}><PropertyONWordmark dark /><p>{text(c, "footerLine")}</p><small>{text(c, "previewNotice")}</small></div>
          <div><h3>{text(c, "product")}</h3><a href="#product-proof">{text(c, "proofEyebrow")}</a><a href="#smart-import">{text(c, "import")}</a><a href="#collections">{text(c, "collections")}</a></div>
          <div><h3>{rtl ? "الموارد" : "Resources"}</h3><a href="#faq">{rtl ? "الأسئلة الشائعة" : "FAQ"}</a><a href="/privacy">{rtl ? "إشعار الخصوصية" : "Privacy Notice"}</a><a href="/terms">{rtl ? "شروط الاستخدام والوصول المبكر" : "Website & Early Access Terms"}</a></div>
          <div><h3>{rtl ? "الحساب والتواصل" : "Account & contact"}</h3><a href={OFFICE_REGISTRATION_URL}>{text(c, "trial")}</a><a href={LOGIN_URL}>{text(c, "login")}</a><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></div>
        </div>
      </footer>
    </div>
  );
}
