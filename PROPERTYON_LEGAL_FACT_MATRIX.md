# PropertyON Legal Fact Matrix

Audit date: 19 August 2026  
Scope: `landing_property-system` and read-only discovery of `C:\Users\Saqriii\property-system`

This matrix records what the repositories actually establish. Product capability is not treated as proof of a legal commitment, regulatory status, retention period, or operator identity. Test fixtures, demo copy, customer-entered billing identity, and fictional product UI are not accepted as operator facts.

Status meanings:

- `VERIFIED`: directly supported by production-oriented code or an owner-approved public destination.
- `SUPPORTED_WITH_QUALIFICATION`: a real capability exists, but the public statement must remain limited.
- `UNKNOWN`: no reliable evidence establishes the fact.
- `NOT_APPLICABLE`: the fact is not relevant to the current public experience.

## Identity and public contact

| Fact | Status | Evidence and safe conclusion |
| --- | --- | --- |
| Public product name | VERIFIED | The approved Landing V2 consistently uses `PropertyON`. |
| Public website | VERIFIED | Landing metadata, canonical, robots, and sitemap use `https://www.f4lcon.tech/`. |
| Public support email | VERIFIED | `support@f4lcon.tech` appears in both Landing generations and was owner-approved in the production-readiness phase. |
| Public phone | VERIFIED | `+966 11 507 5727` / `tel:+966115075727` appears in the Landing contact implementation and was owner-approved in the production-readiness phase. |
| Legal controller / contracting entity official name | UNKNOWN | No registered operator name is present. `billing_customers.legal_name` is customer data; invoice fallbacks and tests are not operator evidence. |
| Commercial registration number | UNKNOWN | Product forms collect customer-office CR numbers, but no operator CR is established. |
| VAT / tax number | UNKNOWN | Billing supports customer and configurable seller tax data, but no verified public operator VAT number exists. |
| Registered office / national address | UNKNOWN | No verified operator address exists. Customer-office address fields are not operator facts. |
| DPO identity or dedicated privacy contact | UNKNOWN | No DPO identity is established. The verified general support email could receive inquiries, but it is not evidence of a designated DPO. |

## Accounts and access

| Fact | Status | Evidence and safe conclusion |
| --- | --- | --- |
| Office registration | VERIFIED | The external application exposes `/register-office` and submits office name, owner name, phone, optional email, CR, license, and address. |
| OTP authentication | VERIFIED | Registration and login request and verify an SMS OTP. |
| Authentication cookie | VERIFIED | The backend issues a JWT in an HTTP-only cookie after OTP verification. Cookie configuration exists; no public cookie-consent implementation was found. |
| Role and permission controls | VERIFIED | Authentication resolves roles, active role, office context, and effective permissions. |
| Employee scoped access | VERIFIED | Office membership and permissions restrict access by office and role. |
| Owner and tenant access | SUPPORTED_WITH_QUALIFICATION | The application supports owner/tenant roles and scoped experiences; the Landing must not describe them as complete standalone applications. |
| Self-service privacy request workflow | UNKNOWN | No public workflow for access, correction, export, objection, or deletion requests was found. |
| Account archival and deletion | SUPPORTED_WITH_QUALIFICATION | Administrative lifecycle code supports archive/restore and permanent deletion only after archival and only when preserved-history dependencies do not block deletion. No guaranteed deletion period exists. |

## Data handled by the service

| Fact | Status | Evidence and safe conclusion |
| --- | --- | --- |
| Account and contact data | VERIFIED | Names, phone numbers, and optional email addresses are processed for registration, login, and account operation. |
| Office identity data | VERIFIED | Office name, commercial registration, license number, address, ownership, and membership data are supported. |
| Property operations data | VERIFIED | The product manages properties, units, owners, tenants, contracts, collections, expenses, maintenance, and operational records. |
| Contract documents | VERIFIED | Authorized office admins can upload PDF contract files. |
| Smart Import documents | SUPPORTED_WITH_QUALIFICATION | PDF extraction/import routes exist. Extracted content must be reviewed; the repository does not establish direct Ejar API synchronization. |
| Billing profile data | VERIFIED | Billing customer records can contain legal name, tax number, billing email, phone, and structured address. |
| Payment-card data handled directly by PropertyON | UNKNOWN | Payment-provider integration code exists, but launch-mode documentation disables public online checkout. It is unsafe to state that PropertyON stores card data or to publish processor-specific claims. |
| Rent payment processing | NOT_APPLICABLE | The approved Landing scope says PropertyON records collections, allocation, reconciliation, and receipts; it does not process tenant rent payments electronically. |
| Uploaded file storage | VERIFIED | Contract PDFs are uploaded through memory-limited handlers and stored through an S3-compatible object-storage utility. Public vendor or region naming is not justified. |
| Logs and audit records | VERIFIED | Login events, system events, audit-oriented records, billing events, and lifecycle events exist. |
| Device / technical request information | SUPPORTED_WITH_QUALIFICATION | Authentication, security, rate-limit, and event logging imply technical request metadata. Exact fields and public retention treatment are not fully established. |
| Landing contact-form submissions in V2 | NOT_APPLICABLE | The approved V2 uses verified email and telephone links rather than a submitting contact form. |
| Landing analytics or advertising cookies | UNKNOWN | No analytics or advertising integration was found in the Landing repository. Absence in source is not a commitment that none will ever be used. |

## Processing purposes and disclosures

| Fact | Status | Evidence and safe conclusion |
| --- | --- | --- |
| Account setup and authentication | VERIFIED | Registration, OTP delivery, login, role resolution, and office activation are implemented. |
| Delivering property-office operations | VERIFIED | Product routes and interfaces support the operational capabilities described above. |
| Messaging and notifications | VERIFIED | SMS and automation services exist. Delivery must not be guaranteed. |
| Billing and subscription administration | SUPPORTED_WITH_QUALIFICATION | Billing foundations exist, while public pricing and public checkout are intentionally hidden for launch. Commercial terms must be supplied separately and cannot be invented. |
| Fraud, abuse, reliability, and security operations | SUPPORTED_WITH_QUALIFICATION | Rate limiting, OTP security, permissions, and audit/event logging exist; they do not prove certification or a security guarantee. |
| Categories of service providers | SUPPORTED_WITH_QUALIFICATION | Messaging, object storage, payment integration, and infrastructure code support referring generically to providers used to operate the service. Vendor names and locations should not be published without confirmation. |
| Sale of personal data | UNKNOWN | No evidence establishes a binding “we do not sell” commitment. Do not make the claim without owner/legal confirmation. |
| International transfers / geographic processing scope | UNKNOWN | Provider regions, production hosting location, transfer mechanisms, and data-residency commitments are not established. |
| Processing legal bases | UNKNOWN | Product code does not establish the operator’s legal bases under applicable privacy law. |

## Retention, rights, and safeguards

| Fact | Status | Evidence and safe conclusion |
| --- | --- | --- |
| Fixed retention periods | UNKNOWN | No approved public schedule was found for account, contract, financial, messaging, audit, backup, or uploaded-file records. |
| Destruction method and backup deletion | UNKNOWN | User lifecycle deletion exists, but no complete cross-system destruction or backup policy is established. |
| Preserved operational history | VERIFIED | Permanent user deletion is blocked when referential or audit/system history must be preserved. |
| Data-subject rights and exceptions | SUPPORTED_WITH_QUALIFICATION | Saudi official guidance describes rights, but PropertyON’s verified intake, identity-verification, response, and exception procedures are not established. |
| Security controls | SUPPORTED_WITH_QUALIFICATION | OTP, HTTP-only authentication cookies, RBAC/permissions, scoped queries, file validation/limits, rate limits, and audit events are present. No audit, certification, encryption, SLA, or breach-response claim is established. |

## Commercial and legal terms

| Fact | Status | Evidence and safe conclusion |
| --- | --- | --- |
| SaaS subscription model | VERIFIED | Subscription and billing foundations exist and the Landing presents PropertyON as SaaS for real-estate offices. |
| Public prices | NOT_APPLICABLE | Public pricing is intentionally absent from the approved V2 launch candidate. |
| Trial duration | SUPPORTED_WITH_QUALIFICATION | External registration currently displays a 14-day trial message. This is product behavior, not a complete approved commercial term. |
| Refund policy | UNKNOWN | Refund mechanics in billing code do not establish a public refund entitlement or policy. |
| Cancellation and renewal terms | UNKNOWN | No approved customer-facing cancellation, renewal, or notice terms were found. |
| SLA / uptime commitment | UNKNOWN | No approved SLA or uptime guarantee was found. |
| Liability allocation or cap | UNKNOWN | No approved limitation-of-liability language or cap was found. |
| Contracting party | UNKNOWN | The official legal entity that would offer and contract for PropertyON is not established. |
| Governing law, courts, or arbitration | UNKNOWN | No approved governing-law, jurisdiction, venue, or arbitration clause was found. |

## Existing legal material and mismatches

| Item | Status | Finding |
| --- | --- | --- |
| Existing public Privacy Policy | UNKNOWN | No real `/privacy` document or approved policy text exists in either repository. |
| Existing public Terms | UNKNOWN | No real `/terms` document or approved terms text exists in either repository. |
| Registration consent | SUPPORTED_WITH_QUALIFICATION | Registration states that submission agrees to Terms and Privacy, but the text is not linked to real documents. This is a pre-launch mismatch. |
| Landing V1 legal links | UNKNOWN | The current `/` footer uses `#` for Privacy and Terms. These are placeholders and cannot satisfy the launch gate. |
| Landing V2 legal links | UNKNOWN | The V2 candidate intentionally presents the legal gate as pending; real routes have not been approved. |
| External product brand | SUPPORTED_WITH_QUALIFICATION | Legacy `PRO SYSTEM` and other legacy brand copy remain in the external SaaS. Track as `POST_LAUNCH_PRODUCT_BRAND_CLEANUP`; do not modify it in this Landing task. |

## Saudi privacy-policy standard considered

The Saudi Data & AI Authority’s official privacy-policy guidance says a controller should identify its official name according to regulatory registers and describe, among other matters, processing purposes and legal basis, disclosures, geographic processing scope, retention/destruction, rights, and contact methods. Those official materials were used only to assess completeness; this audit does **not** claim PropertyON is certified or fully compliant.

- [SDAIA — Developing and Elaboration Privacy Policy Guideline](https://sdaia.gov.sa/Documents/PrivacyPolicyGuideline.pdf)
- [SDAIA — Personal Data Protection Law](https://sdaia.gov.sa/en/SDAIA/about/Documents/Personal%20Data%20English%20V2-23April2023-%20Reviewed-.pdf)

## Gate consequence — superseded by owner-authorized pre-launch mode

The owner confirmed that no finalized registered legal entity or contracting company currently exists and authorized an `EARLY_ACCESS / PRE-LAUNCH` public model. Under that limited model, the verified product facts support an accurate Privacy Notice and Website & Early Access Terms that:

- refer to PropertyON only as the product/service;
- disclose the missing commercial legal framework rather than inventing it;
- cover only the current website, evaluation, early-access accounts, and verified functions;
- contain no public prices or paid subscription, refund, cancellation, SLA, liability-cap, governing-court, fixed-retention, residency, or certification terms.

The unknown facts in this matrix remain unresolved. They are tracked in `PROPERTYON_COMMERCIAL_LAUNCH_GATES.md` and must be completed before paid commercial launch.
