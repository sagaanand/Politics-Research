# Viralimalai Constituency — Historical Electoral Data Research & Analysis
## Visual-First Presentation Proposal Website (Apple Keynote Style)

A high-end, presentation-style research proposal website inspired by **Apple Keynote**, engineered with **React, TypeScript, Vite, Tailwind CSS, and Framer Motion**.

---

### Project Overview

- **Project Title:** Viralimalai Constituency — Historical Electoral Data Research & Analysis
- **Research Coverage:** 2016, 2021, and 2026 Tamil Nadu Legislative Assembly Election Years
- **Geography:** Viralimalai Assembly Constituency (AC-179) only
- **Prepared By:** Ananda Krishnan
- **Company:** Ctrl Alt Kick Ad Tech Solutions Pvt Ltd
- **Commercial Estimate:** **₹1,20,750** (Preliminary project quotation)
- **Target Duration:** 4 Weeks

---

### Visual-First Architecture & Design Principles

1. **Apple Keynote Aesthetic:**
   - 60–70% visual storytelling (diagrams, timelines, schema mockups, and flowcharts) and 30–40% concise speaker-friendly text.
   - Clean off-white background (`#FBFBFD`), near-black typography (`#1D1D1F`), restrained dividers (`#E5E5EA`).
   - Deep blue subtle accent (`#0066CC`).
   - Large headlines, short subheadings, and generous whitespace.

2. **18 Sequential Visual Slides:**
   - **Slide 01 — Cover**: Typography, scope badges, abstract data coordinate grid visual.
   - **Slide 02 — Executive Summary**: Three election cycles (2016, 2021, 2026) converging into one Unified Master Dataset.
   - **Slide 03 — Research Objectives**: 4 visual cards with custom vector diagrams: Collect, Verify, Map, Analyse.
   - **Slide 04 — Project Scope**: Scope pillars & 6 core data categories: Votes · Candidates · Parties · Margins · Turnout · NOTA.
   - **Slide 05 — Research Methodology**: 6-step horizontal process diagram from Source Discovery to Reporting.
   - **Slide 06 — Data Architecture**: Stylised spreadsheet database mockup highlighting key schema fields.
   - **Slide 07 — Polling Station Mapping**: Cross-cycle 3-column continuity diagram (2016 → 2021 → 2026) with 4-status legend.
   - **Slide 08 — Analytical Framework**: 5 visual categories with abstract curve/matrix shapes & aggregate outcome caveat.
   - **Slide 09 — Research Deliverables**: 7 visual mockup tiles (Excel, PDF report, slide deck, audit registers) + scope exclusion.
   - **Slide 10 — Quality Assurance**: 4-tier sequential review gates and 3 principles (Source-backed, Cross-checked, Transparent gaps).
   - **Slide 11 — Project Team**: Dedicated role cards for Anand, Senior Researcher, Data Executive 1, and Data Executive 2 (salaries hidden).
   - **Slide 12 — Timeline**: Full-width visual roadmap with 4 weekly phases & schedule qualification.
   - **Slide 13 — Commercial Proposal**: Dominant visual fee **₹1,20,750** + minimal 4-part breakdown (team, lead, expenses, deliverables).
   - **Slide 14 — Payment Terms**: 3 clear payment milestones: 40% Kickoff (₹48,300) / 30% Interim (₹36,225) / 30% Final (₹36,225).
   - **Slide 15 — Scope & Exclusions**: 2-column comparison layout (Formally Included vs Explicitly Excluded).
   - **Slide 16 — Data Availability**: Tri-fold evidentiary hierarchy (Official Records, Alternative Sources, Unresolved Gaps).
   - **Slide 17 — Next Steps**: 4-step mobilization sequence + compact client responsibilities.
   - **Slide 18 — Approval**: Formal client authorization schedule with fillable fields and legal notice.

3. **Centralised Costing Configuration (`src/data/proposal.ts`):**
   ```ts
   export const projectCommercials = {
     projectLeadCost: 50000,
     employeeOneCost: 15000,
     employeeTwoCost: 15000,
     employeeThreeCost: 15000,
     researchExpenses: 10000,
     markupPercentage: 15,
     advancePercentage: 40,
     interimPercentage: 30,
     finalPercentage: 30
   };
   // Total Estimated Cost: ₹1,05,000
   // 15% Markup on Cost: ₹15,750
   // Preliminary Project Fee: ₹1,20,750
   // Advance (40%): ₹48,300 | Interim (30%): ₹36,225 | Final (30%): ₹36,225
   ```
   *Note: Internal salary breakdowns are kept strictly in a confidential modal (`Internal Basis`) and not displayed on client-facing slides.*

4. **Interactive Navigation:**
   - **Keyboard:** `Right / Space` (Next), `Left` (Prev), `Home / End`, `O` (18-Slide Grid Overview), `F` (Fullscreen), `Esc`.
   - **Mouse Wheel / Trackpad:** Debounced to prevent multi-slide skipping with internal container scroll protection.
   - **Touch:** Horizontal swipe gestures for mobile/tablet.
   - **URL Hash:** Deep linking support (`#slide-1` to `#slide-18`).
   - **Print-to-PDF:** Dedicated `@media print` layout formatting all 18 slides on individual A4 landscape pages.

---

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run production build and type check
npm run build

# Preview production build locally
npm run preview
```
