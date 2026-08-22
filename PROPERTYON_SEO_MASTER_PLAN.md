# PropertyON Saudi SEO Master Plan

Status: implementation baseline, 22 August 2026  
Market: Saudi Arabia  
Primary language: Arabic  
Primary buyer: owners and operating teams of Saudi real-estate and property-management offices  
Commercial state: early access; no public pricing

## 1. Executive strategy

PropertyON should build search visibility around office-software intent, not broad real-estate traffic. The first acquisition layer is ten Arabic commercial pages under `/ar/`, each mapped to one operational problem and one verified product workflow. The approved homepage remains the brand and conversion hub; it receives only a compact contextual solutions row so crawlers and buyers can discover the commercial routes.

The sequence is:

1. Publish the ten BOFU pages with unique intent, proof, metadata, canonicals, breadcrumbs, internal links and visible FAQs.
2. Submit the expanded sitemap and request recrawls of the homepage and priority routes.
3. Publish five high-quality Arabic educational articles only after the commercial layer is indexed.
4. Use Search Console query data to refine titles, content and internal links.
5. Earn relevant Saudi proptech and business links with useful tools and operational templates.

No ranking guarantee is made. Success means compounding qualified discovery and office leads.

## 2. Current-state audit

### Technical strengths

- Next.js App Router supports statically generated, server-rendered commercial routes.
- The live homepage has one H1, Arabic `lang`/RTL, a root canonical, product-truth schema and verified product screenshots.
- `/privacy` and `/terms` have self-canonicals.
- `/v2-preview` is absent from the sitemap, `noindex` in route metadata and disallowed in robots.
- Images are served through Next Image with AVIF/WebP negotiation.
- The approved homepage is materially lighter than the retired V1 implementation.

### Current gaps

- Search results still show stale V1 copy, pricing and unsupported positioning even though the live HTML is V2. This is a recrawl/index-refresh issue, not a reason to restore V1 language.
- The live sitemap contains only `/`, `/privacy` and `/terms`, so there is no commercial topic coverage.
- The homepage has no crawlable contextual links to dedicated solution pages.
- Root metadata defines `/` as a canonical default; every new route must explicitly override it.
- No Search Console ownership or sitemap-submission state is discoverable from the repository.
- No analytics provider is approved, so conversion events are specified but not installed.
- The Open Graph image contains manually reversed Arabic strings in source and should be corrected in a later focused OG task; it does not block the new routes.

## 3. Saudi search landscape

Commercial SERPs show four recurring page types:

1. Saudi property-management platforms with broad feature landing pages.
2. Regional/global property software localized into Arabic.
3. Accounting or receipt tools that partially satisfy the query.
4. Government/Ejar pages that dominate ambiguous contract and payment searches.

The strongest commercial category term is `برنامج إدارة الأملاك`, with `برنامج إدارة العقارات` as a natural synonym. `برنامج إدارة مكتب عقاري` is narrower but has stronger buyer qualification. `برنامج تحصيل الإيجارات`, `برنامج إدارة عقود الإيجار`, `برنامج سندات قبض للعقارات` and `تقارير إدارة العقارات` map directly to verified PropertyON workflows.

Saudi wording should use:

- Homepage/category: إدارة الأملاك، إدارة العقارات، المكاتب العقارية، منظومة تشغيل.
- Commercial pages: برنامج إدارة مكتب عقاري، تحصيل الإيجارات، إدارة عقود الإيجار، سندات القبض، تقارير إدارة العقارات.
- Problem content: الإيجارات المتأخرة، الدفعات المستحقة، التحصيل الجزئي، الوحدات الشاغرة، العقود القريبة من الانتهاء، العمل بدون Excel.
- Qualified import language: قراءة عقد إيجار PDF، استخراج بيانات عقد إيجار، مراجعة البيانات المستخرجة. Never “تكامل رسمي مع إيجار”.

## 4. Keyword clusters

| Cluster | Core query | Buyer stage | Product proof |
|---|---|---:|---|
| A. Property management | برنامج إدارة الأملاك | BOFU | Property workspace/portfolio |
| B. Office operations | برنامج إدارة مكتب عقاري | BOFU | Team directory + connected records |
| C. Rent collection | برنامج تحصيل الإيجارات | BOFU | Collection before/result |
| D. Contracts | برنامج إدارة عقود الإيجار | BOFU | Contract workspace and schedules |
| E. Receipts | برنامج سندات قبض للعقارات | BOFU | Receipt register |
| F. Reporting | تقارير إدارة العقارات | BOFU | Payment Register / Reporting V2 |
| G. Ejar PDF workflow | قراءة عقد إيجار PDF | MOFU/BOFU | Smart Import human-review screen |
| H. Expenses | إدارة مصروفات العقارات | BOFU | Property financial context |
| I. Units | إدارة الوحدات العقارية | BOFU | Responsive property workspace |
| J. Without Excel | إدارة مكتب عقاري بدون Excel | MOFU | Connected collection/result workflow |

The detailed keyword-to-page mapping is in `PROPERTYON_SEO_KEYWORD_MAP.md`.

## 5. Opportunity ranking

Pages are scored from 1–5 on Intent, Product Fit, Commercial Value, Ranking Feasibility and Differentiation. Weighted score = `Intent × Product Fit × Commercial Value × Feasibility × Differentiation`.

Priority order:

1. برنامج إدارة الأملاك للمكاتب العقارية
2. برنامج إدارة مكتب عقاري
3. برنامج تحصيل الإيجارات
4. برنامج إدارة عقود الإيجار
5. برنامج سندات قبض للعقارات
6. تقارير إدارة العقارات
7. قراءة عقد إيجار PDF
8. إدارة الوحدات العقارية
9. إدارة مصروفات العقارات
10. إدارة مكتب عقاري بدون Excel

See `PROPERTYON_SEO_OPPORTUNITY_MATRIX.md` for scores and rationale.

## 6. Competitor gap

The current SERP rewards Saudi context, Arabic-first copy, visible product detail and clear calls to action. Competitors commonly emphasize pricing, Ejar/ZATCA integrations, online payment, maintenance, portals and WhatsApp automation. PropertyON must not imitate claims it cannot support.

PropertyON can win a narrower trust position:

- Real verified product captures rather than decorative dashboards.
- A connected record model from property to contract, schedule, collection, receipt, expense and report.
- Exact collection behavior, including oldest-first allocation and partial states.
- Smart Import described accurately as supported-PDF extraction with evidence, confidence and human review.
- Explicit limits: no online rent payment, no official Ejar API, and relationship-scoped access rather than standalone full portals.

Detailed evidence is in `SEO_COMPETITOR_GAP_ANALYSIS.md`.

## 7. First ten commercial pages

| Route | Primary intent | Unique proof | CTA context |
|---|---|---|---|
| `/ar/property-management-software` | Find an integrated property-management program | Property portfolio | See one connected operating record |
| `/ar/real-estate-office-software` | Operate a real-estate office and team | Team directory | Organize the office around roles and records |
| `/ar/rent-collection-software` | Track dues, overdue and partial collection | Collection-before screen | Review the office’s collection workflow |
| `/ar/rental-contract-management` | Organize contracts, dates and schedules | Contract detail | Start from a real contract workspace |
| `/ar/property-receipts` | Issue and retrieve property receipts | Receipt register | Connect every recorded collection to evidence |
| `/ar/property-management-reports` | Produce operational property reports | Payment Register | Review and export operational records |
| `/ar/ejar-pdf-import` | Reduce manual entry from supported Ejar-family PDFs | Smart Import review | Upload, inspect evidence, then approve |
| `/ar/property-expense-management` | Keep expenses in property context | Property workspace financial area | Connect expenses to the property record |
| `/ar/property-units-management` | Track units and occupancy | Mobile property workspace | See unit status in a responsive workflow |
| `/ar/property-management-without-excel` | Replace fragmented spreadsheets with connected records | Collection result | Move one workflow at a time, not via a risky big-bang migration |

Each page includes distinct problem framing, workflow, capability list, FAQ, screenshot, related links and CTA. Shared layout code is allowed; repeated copy is not.

## 8. Page brief standard

Every commercial page contains:

1. Breadcrumb.
2. One intent-matched H1.
3. Human-first explanation of the operational problem.
4. Verified product screenshot with descriptive Arabic alt text and fixed dimensions.
5. A page-specific workflow.
6. Capability list limited to current product truth.
7. A connected-system explanation.
8. Three contextual internal links.
9. Visible, buyer-focused FAQ.
10. Early-access CTA to office registration and WhatsApp.

No FAQ structured data is added. Google states that FAQ rich results are normally limited to authoritative government and health sites, so visible FAQ content is valuable while redundant schema has little search benefit.

## 9. Internal-link system

The homepage links to the five highest-intent solution routes in one compact row. Commercial pages link only to three closely related pages. Legal pages are not expanded beyond their existing footer relationship. The graph is detailed in `SEO_INTERNAL_LINK_MAP.md`.

Anchor text uses natural Arabic problem language. There is no sitewide list of all keywords and no keyword-stuffed footer.

## 10. Content hub strategy

Recommended future route: `/ar/resources` after the commercial pages collect initial query data.

First article sequence:

1. كيف تتابع الإيجارات المتأخرة في مكتبك العقاري؟
2. كيف تنظم عقود الإيجار ومواعيد انتهائها؟
3. طريقة تنظيم سندات القبض وربطها بالتحصيل
4. كيف تدير عدة عقارات بدون الاعتماد على Excel؟
5. ما أهم تقارير إدارة الأملاك للمكتب العقاري؟
6. كيف تتابع الوحدات الشاغرة؟
7. كيف تنظم المصروفات المرتبطة بكل عقار؟
8. الفرق بين الدفعة المستحقة والمتأخرة والتحصيل الجزئي
9. خطوات الانتقال من الإدارة اليدوية إلى نظام إدارة أملاك
10. كيف تختار برنامج إدارة أملاك لمكتبك؟

Publish the first five only after reviewing Search Console data. Each article must support one commercial route, not compete with it.

## 11. English rollout

Do not translate all ten pages initially. Recommended first English equivalents after Arabic indexing:

1. Property management software Saudi Arabia.
2. Real estate office software Saudi Arabia.
3. Rent collection management software.
4. Rental contract management software Saudi Arabia.

Implement only with separate `/en/` URLs, reciprocal `ar-SA`/`en-SA` hreflang and self-canonicals. The existing client-only language toggle is not a substitute for indexable localized URLs.

## 12. Backlinks and digital PR

Focus on relevant Saudi proptech, real-estate operations, SME and SaaS audiences. Do not buy bulk links. The detailed plan is in `PROPERTYON_BACKLINK_PLAN.md`.

Potential link-worthy assets, in order:

1. Rent-schedule calculator.
2. Contract-expiry calculator.
3. Printable property-office operations checklist.
4. Excel rent-follow-up template with migration guidance.
5. Property expense tracker template.
6. Receipt template and documentation checklist.
7. Property reporting template.
8. Saudi property-office benchmark only after enough anonymized, consented data exists.

## 13. Search Console feedback loop

Monthly review by country Saudi Arabia, language/query, device and page:

- High impressions + low CTR: improve title and description without changing intent.
- Position 8–20: deepen workflow proof, improve contextual links and earn one relevant link.
- Unexpected query: add a concise section if it fits the page; otherwise brief a supporting article.
- No impressions after indexing and a reasonable observation period: inspect canonical/indexability, then reassess intent.
- Organic CTA clicks: attribute only after an approved privacy-compatible analytics implementation.

Exact setup steps are in `GOOGLE_SEARCH_CONSOLE_SETUP.md`.

## 14. KPI framework

### Technical

- All published commercial URLs indexed or explicitly diagnosed.
- Zero canonical conflicts, broken internal links, sitemap errors or accidental `noindex`.
- Core Web Vitals monitored by route group.

### Visibility

- Count of commercial queries with impressions.
- Count of priority terms in top 20, top 10 and top 3.
- Non-brand Arabic Saudi impressions.

### Qualified traffic

- Organic sessions landing on commercial pages.
- Saudi Arabic share.
- Engaged visits to screenshot/workflow sections.

### Business

- `organic_get_started`.
- `organic_whatsapp_contact`.
- Commercial-page CTA clicks.
- Office registrations attributed to organic landing pages.

No analytics provider is added without approval.

## 15. Content governance

Every page entry in `src/data/seo-pages.ts` stores:

- Primary keyword and intent.
- Product claim scope.
- Screenshot path and alt text.
- Related routes.
- Product review date.

Quarterly, or whenever product behavior changes, review all pages that mention Smart Import, collection allocation, messaging, portals/scoped access, reports or language coverage. A feature becoming planned is not enough to market it; public copy changes only after product verification.

## 16. Technical recommendations

- Keep Arabic commercial pages under `/ar/`; this adds a scalable locale boundary without migrating the approved root homepage.
- Use static generation and a shared server-rendered page component.
- Set unique title, description, canonical, OG URL and robots per page.
- Add `WebPage` and `BreadcrumbList` JSON-LD only; retain the truthful global `SoftwareApplication` object.
- Include only real public URLs in the sitemap, with stable last-modified dates from content review metadata rather than request time.
- Keep `/v2-preview` disallowed and out of the sitemap.
- Use fixed image dimensions, responsive `sizes`, below-fold lazy loading and descriptive Arabic alt text.
- Do not implement hreflang until real English URLs exist.

## 17. Research sources

- Google Search Central, sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google Search Central, multilingual sites: https://developers.google.com/search/docs/advanced/crawling/managing-multi-regional-sites
- Google structured-data policies: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- Google FAQ rich-result change: https://developers.google.com/search/blog/2023/08/howto-faq-changes
- Search Console property setup: https://support.google.com/webmasters/answer/34592
- Saudi competitor examples: https://www.osoolproptech.com/ , https://moajir.com/ , https://www.mogod.sa/ , https://aqartix.app/

