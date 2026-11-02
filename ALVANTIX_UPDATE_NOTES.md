# Alvantix website update notes

## Changes made
- Added an "Our Products" showcase to the homepage after Services and AI Solutions and before the future AI vision section.
- Added product detail routes at `/products/templeverse`, `/products/pramzo`, `/products/pathlauncher`, and `/products/qurixa`.
- Added product information pages with audience, intended use cases, planned features, development status, and a contact CTA at the end.
- Added the four product URLs to `public/sitemap.xml`.
- Kept the existing five-item main navigation unchanged.
- Kept the existing Services, AI Solutions, About, Contact, Privacy, Terms, Careers, Studio, Projects, and legacy Products component files intact. No existing sections or assets were intentionally deleted.
- Changed the visible AI detail label from "AI CAPABILITY" to "AI SOLUTION" and removed numeric labels from the homepage research/principles cards.

## Important content assumptions to confirm before publishing
- Pramzo is described as a local services / gig-work platform, consistent with the product direction previously discussed. The old unused `ProductsView.tsx` still contains an earlier retail-commerce description for Pramzo; it has been left untouched to avoid deleting existing work, but should be reconciled if that page is ever re-enabled.
- Qurixa is described only as a future healthcare technology concept. Its exact scope, target users and feature list were not supplied, so the page deliberately avoids claiming a finished hospital system, clinical diagnosis, medical validation or deployments.
- Templeverse and PathLauncher statuses are shown as "In Development" based on the available project context. Confirm these labels match the current build state before publishing.
- All feature lists are framed as intended/planned where appropriate. Do not present them as already available unless they are implemented.

## Verification status
- Source structure, route wiring, homepage placement and sitemap entries were inspected.
- A full production build could not be completed in this environment because dependencies were not installed. `npm install` timed out, and the global TypeScript check consequently reports missing React, React Router, Motion and Lucide modules. These are environment/dependency-resolution errors; they do not establish that the project compiles successfully.
- Before deployment, run `npm install`, `npm run lint`, and `npm run build`, then test all four product routes and the existing service/AI detail routes in desktop and mobile layouts.

## Existing items worth reviewing separately
- `src/components/ProductsView.tsx` is currently not routed from `App.tsx`; it contains older product copy including NearClinic and Alvantix Travel AI. It was retained unchanged.
- The Services and AI Solutions data files contain some advanced/absolute marketing language (for example, claims such as "zero hallucinations" and strong performance/ROI statements). Review and substantiate or soften those claims before publishing to match the requested 85% business-focused / 15% technical tone.
- Confirm the public phone number, email address and social profile URLs in `index.html` and `ContactView.tsx` are current and correct.
