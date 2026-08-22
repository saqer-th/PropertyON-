# Google Search Console and Bing Setup

Repository-visible verification status: unknown. No verification token is present, and account ownership cannot be inferred from public HTML.

## Recommended Google property

Create a Domain property for `f4lcon.tech`. A Domain property covers protocols and subdomains and requires DNS verification. Do not invent a token; copy the exact TXT record Google provides.

Official setup: https://support.google.com/webmasters/answer/34592  
Verification details: https://support.google.com/webmasters/answer/9008080

## Owner steps

1. Sign in to Google Search Console with the account that should own PropertyON search data.
2. Add Domain property `f4lcon.tech`.
3. Copy the generated DNS TXT verification record exactly.
4. Add it through the current DNS provider; do not remove existing records.
5. Return to Search Console and verify.
6. Grant least-privilege access to any operational users.
7. Submit `https://www.f4lcon.tech/sitemap.xml` in the Sitemaps report.
8. Inspect and request indexing for the homepage, then the ten commercial routes in priority order.
9. Confirm Google-selected canonical matches the declared canonical.
10. Review Pages, Sitemaps, Core Web Vitals, Enhancements and Manual Actions after recrawl.

## Immediate index-refresh task

Google currently displays stale V1 copy and pricing for the homepage. After ownership is verified:

1. Use URL Inspection on `https://www.f4lcon.tech/`.
2. Test the live URL.
3. Confirm the rendered V2 title, description, canonical and content.
4. Request indexing.
5. Monitor the result; do not reintroduce V1 copy to match the stale snippet.

## Sitemap state

Current production sitemap: `/`, `/privacy`, `/terms`.  
Implementation target: add the ten indexable `/ar/` commercial pages, using absolute canonicals and a stable content-review last-modified date. Keep `/v2-preview` excluded.

Google states that sitemap submission is a hint, not a ranking or indexing guarantee: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## Monthly review

Export or record by page and query:

- Impressions, clicks, CTR and average position.
- Country = Saudi Arabia.
- Device.
- Branded vs non-branded queries.
- Commercial route and CTA outcome after analytics approval.

Actions:

- High impressions/low CTR → revise title and description.
- Position 8–20 → add proof, clarify intent, strengthen relevant internal links and earn a quality link.
- Unexpected qualified query → add a section or supporting article.
- No impressions → check indexing, canonical and intent before adding content.

## Bing Webmaster Tools

Optional low-cost step:

1. Add `https://www.f4lcon.tech/` to Bing Webmaster Tools.
2. Import from Search Console if the owner prefers and permissions allow, or verify separately.
3. Submit the same sitemap.
4. Review crawl errors and search terms monthly.

## Business listing gate

Do not create a Google Business Profile unless PropertyON has an eligible, verified business entity and customer-facing location or service-area basis. Never fabricate an office address, operating hours or legal identity. Revisit after owner/legal confirmation.

