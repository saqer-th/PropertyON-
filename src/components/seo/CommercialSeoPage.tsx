import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ExternalLink, MessageCircle } from "lucide-react";
import PropertyONWordmark from "@/components/landing-v2/PropertyONWordmark";
import { getPropertyONWhatsAppUrl } from "@/lib/propertyon-contact";
import type { SeoPage } from "@/data/seo-pages";
import { seoPageBySlug } from "@/data/seo-pages";
import styles from "./CommercialSeoPage.module.css";

const REGISTER_URL = "https://app.f4lcon.tech/register-office";

export default function CommercialSeoPage({ page }: { page: SeoPage }) {
  const whatsappUrl = getPropertyONWhatsAppUrl("ar");

  return (
    <div className={`${styles.page} ${styles[page.variant]}`} dir="rtl">
      <a className={styles.skipLink} href="#seo-content">انتقل إلى المحتوى</a>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" aria-label="العودة إلى الصفحة الرئيسية لـ PropertyON" className={styles.wordmark}>
            <PropertyONWordmark />
          </Link>
          <nav aria-label="التنقل الرئيسي" className={styles.headerNav}>
            <Link href="/">الرئيسية</Link>
            <Link href="/ar/property-management-software">الحلول</Link>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">تواصل معنا</a>
          </nav>
          <a className={styles.headerCta} href={REGISTER_URL}>ابدأ مع PropertyON</a>
        </div>
      </header>

      <main id="seo-content">
        <section className={styles.hero}>
          <div className={styles.shell}>
            <nav className={styles.breadcrumb} aria-label="مسار التنقل">
              <ol>
                <li><Link href="/">PropertyON</Link></li>
                {page.slug !== "property-management-software" && (
                  <li><Link href="/ar/property-management-software">الحلول</Link></li>
                )}
                <li aria-current="page">{page.primaryKeyword}</li>
              </ol>
            </nav>
            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.eyebrow}>{page.eyebrow}</p>
                <h1>{page.h1}</h1>
                <p className={styles.lead}>{page.lead}</p>
                <div className={styles.actions}>
                  <a className={styles.primaryButton} href={REGISTER_URL}>
                    ابدأ الوصول المبكر <ArrowLeft aria-hidden="true" />
                  </a>
                  <a className={styles.secondaryButton} href={whatsappUrl} target="_blank" rel="noreferrer">
                    <MessageCircle aria-hidden="true" /> راسلنا على واتساب
                  </a>
                </div>
                <p className={styles.earlyAccess}>PropertyON متاح حالياً ضمن الوصول المبكر، ولا توجد أسعار عامة منشورة.</p>
              </div>
              <div className={styles.heroSignal} aria-label="نطاق الصفحة">
                <span>المشتري</span>
                <strong>مكتب عقاري سعودي</strong>
                <span>النية</span>
                <strong>{page.primaryKeyword}</strong>
                <span>الدليل</span>
                <strong>واجهة حقيقية من المنتج</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`${styles.shell} ${styles.twoColumn}`}>
            <div>
              <p className={styles.sectionLabel}>المشكلة التشغيلية</p>
              <h2>{page.problemTitle}</h2>
            </div>
            <div className={styles.prose}>{page.problemParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.softSection}`}>
          <div className={`${styles.shell} ${styles.solutionGrid}`}>
            <div className={styles.proofCard}>
              <Image
                src={page.proof.src}
                alt={page.proof.alt}
                width={page.proof.width}
                height={page.proof.height}
                sizes="(max-width: 760px) 92vw, (max-width: 1100px) 86vw, 54vw"
                className={page.proof.width < 600 ? styles.mobileProof : styles.proofImage}
              />
              <p>{page.proof.caption}</p>
            </div>
            <div className={styles.solutionCopy}>
              <p className={styles.sectionLabel}>كيف يساعد PropertyON</p>
              <h2>{page.solutionTitle}</h2>
              <div className={styles.prose}>{page.solutionParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              {page.qualifier && <aside className={styles.qualifier}><strong>حدود واضحة:</strong> {page.qualifier}</aside>}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.shell}>
            <div className={styles.centerHeading}>
              <p className={styles.sectionLabel}>المسار العملي</p>
              <h2>{page.workflowTitle}</h2>
            </div>
            <ol className={styles.workflow}>
              {page.workflow.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={`${styles.section} ${styles.darkSection}`}>
          <div className={`${styles.shell} ${styles.capabilityGrid}`}>
            <div>
              <p className={styles.sectionLabel}>نطاق المنتج الحالي</p>
              <h2>{page.capabilitiesTitle}</h2>
              <p className={styles.darkLead}>قدرات موثقة من المنتج الحالي، من دون تسعير أو تكاملات أو أرقام عملاء غير معتمدة.</p>
            </div>
            <ul>
              {page.capabilities.map((capability) => <li key={capability}><Check aria-hidden="true" />{capability}</li>)}
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`${styles.shell} ${styles.connectedCard}`}>
            <p className={styles.sectionLabel}>لماذا يهم الترابط؟</p>
            <h2>{page.connectedTitle}</h2>
            <div className={styles.connectedCopy}>{page.connectedParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.softSection}`}>
          <div className={styles.shell}>
            <div className={styles.centerHeading}>
              <p className={styles.sectionLabel}>حلول مرتبطة</p>
              <h2>تابع المسار التشغيلي من الصفحة الأقرب لاحتياجك</h2>
            </div>
            <div className={styles.relatedGrid}>
              {page.related.map((slug) => {
                const related = seoPageBySlug.get(slug);
                if (!related) return null;
                return (
                  <Link key={slug} href={`/ar/${slug}`}>
                    <span>{related.eyebrow}</span>
                    <h3>{related.h1}</h3>
                    <p>{related.metaDescription}</p>
                    <strong>استكشف الحل <ArrowLeft aria-hidden="true" /></strong>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={`${styles.shell} ${styles.faqGrid}`}>
            <div>
              <p className={styles.sectionLabel}>أسئلة قبل البدء</p>
              <h2>إجابات مباشرة عن النطاق الحالي</h2>
              <p>أجبنا عن الحدود التي تؤثر في قرار المكتب، حتى تعرف ما يقدمه المنتج حالياً وما يبقى خارج نطاقه.</p>
            </div>
            <div className={styles.faqList}>
              {page.faq.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.shell}>
            <p className={styles.sectionLabel}>الخطوة التالية</p>
            <h2>{page.ctaTitle}</h2>
            <p>{page.ctaBody}</p>
            <div className={styles.actions}>
              <a className={styles.primaryButton} href={REGISTER_URL}>ابدأ مع PropertyON <ExternalLink aria-hidden="true" /></a>
              <a className={styles.darkButton} href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> راسلنا على واتساب</a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <PropertyONWordmark dark />
          <p>منظومة تشغيل مترابطة للمكاتب العقارية في السعودية.</p>
          <nav aria-label="روابط التذييل">
            <Link href="/privacy">الخصوصية</Link>
            <Link href="/terms">الشروط</Link>
            <Link href="/">الرئيسية</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
