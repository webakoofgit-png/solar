# SANMITRA SOLAR - Premium Clean Energy Website

A world-class, modern, fully responsive, multi-page frontend website built for **SANMITRA SOLAR**, an engineering-driven clean energy solutions provider, taking design inspiration and industry-grade sections from **Vikram Solar** and **Green Nations Power**.

---

## 🌟 Visual Identity & Color Combinations

Taking reference from **Vikram Solar** and **Green Nations Power**, the website adopts a high-trust, modern dual-palette combining renewable emerald green with deep midnight navy and solar gold:

- **Deep Corporate Blue & Midnight Navy**: `#071B2E` / `#0B253A` (Represents Vikram Solar's corporate stability, engineering rigor, and reliability)
- **Renewable Emerald Green**: `#10B981` / `#0F9D58` (Clean energy, high-efficiency technology, and ESG trust)
- **Solar Gold / Electric Yellow**: `#F5B700` / `#FFD447` (Sunlight energy, kilowatt performance, and warmth)
- **Soft Mint / Emerald Light**: `#ECFDF5` / `#D1FAE5` (Clean card backgrounds, recommendation pillars, and badges)
- **Pure Crisp White**: `#FFFFFF` (High contrast, editorial readability)
- **Safety Soft Coral / Rose**: `#FEF2F2` / `#DC2626` (For critical electrical hazard warnings in the Don'ts section)
- **Typography**: 
  - Headlines: *Space Grotesk* (Editorial, bold, futuristic)
  - Body: *Inter* (Crisp, clean, highly readable)

---

## 🛠️ Technology Stack

- **React 19 & TypeScript**: Component-driven, typed architecture.
- **Tailwind CSS v4**: Theme tokens, utility classes, glassmorphism, responsive grids.
- **Framer Motion**: Parallax scrolling, staggered reveals, animated counters, smooth drawer & accordion transitions.
- **React Router 7**: Multi-page navigation with instant scroll reset.
- **Lucide React**: Clean, modern iconography.
- **Canvas Confetti**: Celebratory feedback on quote/proposal submission.

---

## ☀️ Industry-Grade Sections (Inspired by Vikram Solar & Green Nations Power)

### 1. **Vikram Solar-Grade PV Module Technology Showcase (`ModuleTechShowcase.tsx`)**
Modeled after Vikram Solar's flagship **HYPERSOL** and **PARADEA** module series:
- **SOLARIS N-Type TOPCon Dual-Glass (580W - 710W)**: Up to 22.8% efficiency, <0.40%/yr degradation, 30-year linear performance warranty, dual 2.0mm heat-strengthened glass.
- **TERRA Mono PERC Half-Cut Series (450W - 550W)**: High-density urban rooftop modules with multi-busbar technology and superior shade tolerance.
- **AERO Architectural Pergola Series (440W - 500W)**: Dual-glass semi-transparent modules for luxury terrace gazebos and solar carports.
- Interactive technical specifications: Efficiency, temperature coefficient (-0.30%/°C), bifaciality factor (up to 80%), and instant datasheet download trigger.

### 2. **Manufacturing Prowess & 6-Stage Testing Standards (`ManufacturingQuality.tsx`)**
Reflecting Vikram Solar's world-class testing benchmarks:
- **Triple-Stage Electroluminescence (EL)** micro-crack screening.
- **Severe Mechanical Load (5400 Pa Snow / 2400 Pa Wind)** test resilience.
- **Anti-PID & Salt-Mist Resistance** conforming to IEC 61701 Severity Class 6.
- **Extreme Thermal Cycling (-40°C to +85°C)** for 200 accelerated freeze-thaw cycles.
- **Hail Impact Stress Testing** (25mm ice spheres at 83 km/h).
- **Positive Power Tolerance** (+0 to +4.99W nameplate guarantee).
- Statutory compliance with IEC 61215, IEC 61730, BIS IS 14286, and MNRE ALMM.

### 3. **Technical Downloads & Knowledge Hub (`ResourceCenter.tsx`)**
Inspired by Vikram Solar's **Vikicare** and Download Center:
- *Solar PV Module Technical Master Catalog (PDF)*
- *30-Year Linear Warranty & Performance Charter (PDF)*
- *Rooftop Structural Engineering & Safety Manual (PDF)*
- *PM Surya Ghar & Net-Metering State Policy Handbook (PDF)*
- Direct customer care technical support helpline.

### 4. **Corporate ESG & Sustainable Progress Roadmap (`EsgCommitment.tsx`)**
- Water stewardship through **Zero-Water Dry Robotic Panel Cleaning**.
- Circular economy with **95% silicon and metal recycling**.
- Direct alignment with **UN Sustainable Development Goals (SDG 7 & SDG 13)**.

### 5. **Solar Safety Do's & Don'ts (`SolarDosAndDonts.tsx`)**
- Side-by-side DO'S (mint card with green checks) and DON'TS (soft rose card with warnings against walking on panels, harsh chemicals, live DC voltage).
- Dedicated emergency technical support hotline banner.

### 6. **Smart Solar Rooftop Calculator (`SavingsCalculator.tsx`)**
- City/State selector (Pune, Mumbai, Nashik, etc.), monthly bill slider, and 6 clean metric cards: Recommended System Size, Rooftop Area Needed, Gross Cost, Subsidy Credit, Annual Savings, and 25-Year Net Savings with Payback Period.

### 7. **Leadership Spotlight (`LeadershipSpotlight.tsx`)**
- Executive spotlight cards for **Vikas Shriram Bapaye** (Co-Founder & Managing Director) and **Siddharth Jagtap** (Co-Founder & Technical Director).

### 8. **Central & State Rooftop Subsidies Guide (`SubsidyGuideSection.tsx`)**
- 4-tier cards: 1 kW (₹30,000), 2 kW (₹60,000), 3-10 kW (₹78,000 max), and Group Housing Societies (₹18,000/kW), plus the 3-step Direct Bank Transfer (DBT) claim workflow.

---

## 🗺️ Multi-Page Website Routes

1. **Home (`/`)** — Assembling all 22 cinematic & technical sections.
2. **About Us (`/about`)** — Story, mission, vision, values, leadership, and IEC compliance.
3. **Solar Solutions (`/solutions`)** — Overview of all photovoltaic EPC service lines.
4. **Residential Solar (`/solutions/residential`)** — Curated residential packages and pergola options.
5. **Commercial & Industrial Solar (`/solutions/commercial`)** — 40% tax depreciation, sub-3.5 yr payback, CAPEX vs OPEX.
6. **Our Projects Portfolio (`/projects`)** — Searchable & filterable masonry portfolio grid.
7. **Project Details (`/projects/:slug`)** — Dynamic case study route with technical data sheet and gallery lightbox.
8. **Why Choose Us (`/why-us`)** — 4 pillars of engineering rigor and Sanmitra vs Others comparison table.
9. **Solar FAQs (`/faq`)** — Categorized accordion knowledge base with search bar.
10. **Contact Us (`/contact`)** — Validated form, WhatsApp quick chat, office location, and interactive map.

---

## 🏃 Quick Start

```powershell
# Start local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
