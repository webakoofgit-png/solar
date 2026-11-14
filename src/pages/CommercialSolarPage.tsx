import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Building2,
  Factory,
  TrendingDown,
  Percent,
  Leaf,
  ShieldCheck,
  ArrowRight,
  Zap,
  CheckCircle2,
  Cpu,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { PROJECTS } from '../data/solarData';

interface CommercialSolarPageProps {
  onOpenQuote: () => void;
  onOpenQuoteWithDetails: (systemSize: string) => void;
}

export const CommercialSolarPage: React.FC<CommercialSolarPageProps> = ({
  onOpenQuote,
  onOpenQuoteWithDetails,
}) => {
  const commercialProjects = PROJECTS.filter(
    (p) => p.category === 'commercial' || p.category === 'industrial'
  );

  const financialBenefits = [
    {
      icon: Percent,
      title: '40% Accelerated Tax Depreciation',
      description: 'Under Section 32 of the Indian Income Tax Act, commercial businesses can claim accelerated depreciation in Year 1, dramatically reducing corporate tax liability.',
    },
    {
      icon: TrendingDown,
      title: 'Sub-3.5 Year Project Payback',
      description: 'Commercial power tariffs are among the highest in the country. Generating solar power on-site unlocks an impressive 28% to 36% project IRR.',
    },
    {
      icon: Leaf,
      title: 'LEED & Carbon ESG Compliance',
      description: 'Fulfill corporate ESG mandates, enhance BRSR reporting metrics, and achieve LEED Gold/Platinum building certification points.',
    },
    {
      icon: ShieldCheck,
      title: 'Hedge Against Grid Tariff Hikes',
      description: 'Lock in a fixed cost of electricity for the next 25 years. Protect your operational balance sheet from escalating commercial peak demand rates.',
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#0b120e] text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home/commercial-solar.jpg"
            alt="Commercial solar plant"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b120e] via-[#0b120e]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Solar Solutions', path: '/solutions' },
              { label: 'Commercial & Industrial Solar' },
            ]}
          />

          <div className="max-w-3xl mt-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Corporate Tech Parks, Factories &amp; Logistics Hubs</span>
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
              COMMERCIAL &amp; INDUSTRIAL <span className="text-emerald-400">SOLAR EPC</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Transform idle enterprise rooftops and factory metal profiles into high-yield power generation assets. Drastically lower operating OPEX and capitalize on accelerated tax benefits.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuote}
                className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Request Enterprise Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Models & Incentives */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Enterprise Financials"
            title="THE COMMERCIAL &amp; INDUSTRIAL"
            highlight="BUSINESS CASE"
            subtitle="Commercial solar is one of the highest returning capital investments available to corporate CFOs today."
            dark={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {financialBenefits.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-white transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Models: CAPEX vs OPEX */}
      <section className="py-24 bg-[#f3f2ed] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Financing Architecture"
            title="FLEXIBLE BUSINESS"
            highlight="DEPLOYMENT MODELS"
            subtitle="Choose between direct ownership for maximum long-term returns or zero-upfront power purchase agreements."
            dark={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {/* CAPEX Model */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-emerald-500 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Direct Ownership
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                  Maximum 25-Year IRR
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900">
                CAPEX Model (Self-Funded)
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The enterprise purchases and owns the solar asset outright. Maximum financial returns, immediate 40% accelerated tax depreciation claim, and free electricity for the remaining 20+ years after payback.
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% savings flow directly to bottom line</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Average payback achieved in 3.0 to 3.5 years</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Eligible for green enterprise bank financing at low interest</span>
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteWithDetails('Commercial CAPEX Model')}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
              >
                Inquire CAPEX Feasibility
              </button>
            </div>

            {/* OPEX / RESCO Model */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Power Purchase Agreement
                </span>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  Zero Upfront Capital
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-slate-900">
                OPEX / PPA Model (RESCO)
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The solar asset is installed and maintained by an energy investor on your roof. You only pay for the clean solar electricity generated at a pre-agreed tariff discount (typically 20% to 35% lower than grid tariff).
              </p>

              <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero initial capital investment required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero operation or maintenance risk on your team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Immediate operational cost savings from day one</span>
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteWithDetails('Commercial OPEX / PPA Model')}
                className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Inquire PPA Terms
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Project Showcase */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Completed Case Studies"
            title="FEATURED ENTERPRISE"
            highlight="INSTALLATIONS"
            subtitle="Explore our commercial and industrial solar plants commissioned across manufacturing corridors and IT hubs."
            dark={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {commercialProjects.slice(0, 3).map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold">
                    {project.capacity}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                    {project.location}
                  </div>
                  <h4 className="font-display font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                    {project.summary}
                  </p>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-wider font-display"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Schedule an On-Site Enterprise Audit
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Our HT electrical engineers will conduct load profiling, shadow simulations, and deliver a detailed financial proposal within 72 hours.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-xl cursor-pointer inline-flex items-center gap-2"
            >
              <span>Schedule Commercial Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
