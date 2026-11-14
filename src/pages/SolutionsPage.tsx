import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sun,
  Home,
  Building2,
  Factory,
  Wrench,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { SOLUTIONS } from '../data/solarData';

interface SolutionsPageProps {
  onOpenQuote: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#0b120e] text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home/commercial-solar.jpg"
            alt="Solar solutions overview"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b120e] via-[#0b120e]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Solar Solutions' }]} />

          <div className="max-w-3xl mt-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sun className="w-3.5 h-3.5" />
              <span>Engineered Photovoltaic Capabilities</span>
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
              PRECISION SOLAR FOR <span className="text-emerald-400">EVERY ROOF</span> &amp; GRID.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Explore our turnkey engineering, procurement, and construction (EPC) portfolio designed to optimize kilowatt-hour yields, unlock capital subsidies, and deliver rapid payback.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Spectrum Cards */}
      <section className="py-24 bg-[#f3f2ed]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SOLUTIONS.map((solution, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={solution.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Image Col */}
                <div className={`lg:col-span-6 ${isEven ? '' : 'lg:col-start-7'}`}>
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md aspect-[16/10] group">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                        {solution.warranty}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 text-xs text-slate-800 flex items-center justify-between shadow-md">
                      <span className="text-emerald-700 font-bold">{solution.roiTimeline}</span>
                      <span className="text-slate-500 font-semibold">Turnkey EPC</span>
                    </div>
                  </div>
                </div>

                {/* Content Col */}
                <div className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:col-start-1'}`}>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                    <Zap className="w-4 h-4 text-emerald-600" />
                    <span>0{idx + 1} — {solution.title}</span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    {solution.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {solution.fullDesc}
                  </p>

                  {/* Key Features Bullet Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {solution.features.slice(0, 4).map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    {solution.id === 'residential' && (
                      <Link
                        to="/solutions/residential"
                        className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
                      >
                        <span>Residential Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}

                    {(solution.id === 'commercial' || solution.id === 'industrial') && (
                      <Link
                        to="/solutions/commercial"
                        className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
                      >
                        <span>Commercial &amp; Industrial Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}

                    <button
                      onClick={onOpenQuote}
                      className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-display font-semibold text-xs uppercase tracking-wider transition-colors border border-slate-700 cursor-pointer shadow-sm"
                    >
                      Request Feasibility Survey
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Safety Banner */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <SectionHeading
            badge="Engineering Integrity"
            title="UNCOMPROMISED ELECTRICAL"
            highlight="& STRUCTURAL SAFETY"
            subtitle="Every installation complies with IEC 61215/61730 module reliability criteria, wind-load aerodynamic testing up to 150 km/h, and multi-tier surge protection."
            dark={true}
          />

          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Schedule Engineering Site Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
