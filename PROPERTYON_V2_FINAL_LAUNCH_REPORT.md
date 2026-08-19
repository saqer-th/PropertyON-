# PropertyON V2 Final Launch Report

Report date: 19 August 2026  
Launch mode: `EARLY_ACCESS / PRE-LAUNCH`

> The Privacy Notice and Early Access Terms are conservative pre-launch product documents based on verified current product behavior. They are not a substitute for formal legal review and must be revisited before paid commercial launch.

## Brand

- Production homepage uses the PropertyON wordmark only.
- No P symbol was reintroduced.
- No SaqrON or `PRO SYSTEM` identity is rendered by the production V2 homepage or legal routes.
- External SaaS legacy branding remains out of scope and is tracked as `POST_LAUNCH_PRODUCT_BRAND_CLEANUP`.

## Commercial

- Public pricing remains absent.
- No monthly/yearly price, discount, paid plan, free plan, checkout, refund, cancellation, renewal, SLA, or trial-duration promise is shown.
- Current access is explicitly positioned as early access without an intrusive site-wide warning.
- Paid-commercial readiness requirements remain open in `PROPERTYON_COMMERCIAL_LAUNCH_GATES.md`.

## Legal

- `/privacy`: Arabic-first bilingual Privacy Notice covering the website and current early-access service.
- `/terms`: Arabic-first bilingual Website & Early Access Terms, expressly excluding paid commercial subscription terms.
- Neither route names or implies a nonexistent registered company.
- Verified current behavior is used for account data, OTP, service data, roles/permissions, messaging, contract PDFs, Smart Import, records/receipts, retention qualification, and privacy requests.
- No formal PDPL compliance, certification, residency, fixed-retention, deletion deadline, refund, liability cap, governing court, arbitration, or vendor list is claimed.

Current pre-launch gate:

```text
PRIVACY_NOTICE_ACCURATE = YES
EARLY_ACCESS_TERMS_ACCURATE = YES
NO_FAKE_LEGAL_ENTITY = YES
NO_FAKE_PRICING = YES
NO_FAKE_REFUND_POLICY = YES
NO_FAKE_RETENTION_PERIOD = YES
CONTACT_PATH_WORKS = YES
PRODUCT_CLAIMS_ACCURATE = YES
```

## Conversion

- Primary CTA: `ابدأ مع PropertyON` / `Get started with PropertyON`.
- Registration destination: `https://app.f4lcon.tech/register-office`.
- Existing-user CTA: `تسجيل الدخول` / `Log in` → `https://app.f4lcon.tech/login`.
- Contact CTA: `تحدث معنا` / `Talk to us` → `support@f4lcon.tech`.
- Public phone: `+966 11 507 5727`.
- The Landing does not repeat the external application’s trial-duration message.

## SEO

- Root canonical remains `https://www.f4lcon.tech/`.
- Privacy canonical: `https://www.f4lcon.tech/privacy`.
- Terms canonical: `https://www.f4lcon.tech/terms`.
- Sitemap contains only `/`, `/privacy`, and `/terms`.
- `/v2-preview` remains disallowed and `noindex`.
- OG route and metadata remain PropertyON-only.
- Structured data contains `WebSite` and `SoftwareApplication`; it contains no fake legal organization, pricing/Offer, or AggregateRating schema.

## QA

- Production build: PASS — Next.js production compilation, TypeScript, page-data collection, and static generation completed successfully for all routes.
- Responsive/browser matrix: PASS — `/`, `/privacy`, and `/terms` were checked at 320×568, 360×800, 390×844, 412×915, 768×1024, 820×1180, 1024×768, 1280×800, 1440×900, and 1920×1080 in Arabic/RTL and English/LTR with zero horizontal overflow.
- Interactions: PASS — language switching, product tabs, collection state, mobile menu open/close, Escape handling, focus return, and internal anchors were exercised.
- Accessibility: PASS — skip links, landmarks/headings, labels, menu focus management, visible focus rings, keyboard-operable controls, and reduced-motion CSS are present.
- Assets and console: PASS — all 12 homepage product images loaded after page traversal; no broken visible images or browser console warnings/errors were found.
- Links and endpoints: PASS — internal hash targets resolve; legal links are real; registration/login/contact destinations match the verified URLs; `/`, legal routes, preview, robots, sitemap, OG, and favicon return HTTP 200 locally.
- SEO: PASS — route canonicals, preview `noindex, nofollow`, robots disallow, three-URL sitemap, and schema exclusions were verified.

## Promotion

- Previous `/`: V1 source and components remain preserved in the repository as the rollback implementation.
- New `/`: approved polished V2 source promoted without redesign.
- `/v2-preview`: retained temporarily, shares the V2 source, and remains `noindex`.
- Rollback: restore the former imports/composition in `src/app/page.tsx`; no V1 source was deleted.
- No deployment or external infrastructure change was performed.
- The read-only `C:\Users\Saqriii\property-system` repository was not modified.
