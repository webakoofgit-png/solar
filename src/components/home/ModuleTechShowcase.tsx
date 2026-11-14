import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Zap,
  ShieldCheck,
  TrendingUp,
  Download,
  ArrowRight,
  Layers,
  Sparkles,
  CheckCircle2,
  Maximize2,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { MODULE_SERIES } from '../../data/solarData';

interface ModuleTechShowcaseProps {
  onOpenQuoteWithDetails?: (systemSize: string) => void;
}

export const ModuleTechShowcase: React.FC<ModuleTechShowcaseProps> = ({
  onOpenQuoteWithDetails,
}) => {
  const [activeModuleId, setActiveModuleId] = useState<string>(MODULE_SERIES[0].id);

  const activeModule = MODULE_SERIES.find((m) => m.id === activeModuleId) || MODULE_SERIES[0];

  const handleDownloadDatasheet = (moduleName: string) => {
    alert(`Downloading Technical Specifications & I-V Data Sheet for ${moduleName} (PDF)...`);
  };

  return (
    <section id="modules" className="py-24 bg-[#0b120e] text-white relative overflow-hidden border-t border-slate-800">
      {/* Background radial accent */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Tier-1 Photovoltaic Hardware"
          title="CUTTING-EDGE SOLAR"
          highlight="PV MODULE TECHNOLOGY"
          subtitle="Engineered with N-Type TOPCon and High-Density Mono PERC half-cut cell architectures delivering industry-leading 22.8% efficiency and 30-year linear performance warranties."
          dark={true}
        />

        {/* Module Switcher Tabs (Vikram Solar HYPERSOL / PARADEA style) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {MODULE_SERIES.map((mod) => (
            <button
              key={mod.id}
              onClick={() => setActiveModuleId(mod.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-display font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                activeModuleId === mod.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-900/40 ring-2 ring-emerald-400'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>{mod.name.split(' ')[0]} Series</span>
            </button>
          ))}
        </div>

        {/* Active Module Details Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeModule.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#08100b] border border-emerald-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
          >
            {/* Top Glowing Gradient Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Image with Tech Badges (5 cols) */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-700 aspect-[4/3] group shadow-2xl bg-slate-900">
                  <img
                    src={activeModule.image}
                    alt={activeModule.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Floating Specs Pill */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/80 backdrop-blur-md rounded-xl border border-slate-700/80 text-xs flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Cell Technology</span>
                      <span className="font-display font-bold text-emerald-400">{activeModule.badge}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 font-bold text-xs">
                      Tier-1
                    </span>
                  </div>
                </div>

                {/* Floating warranty seal */}
                <div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-2xl bg-emerald-600 text-white font-display font-bold text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 border-2 border-[#08100b]">
                  <ShieldCheck className="w-4 h-4 text-amber-300" />
                  <span>{activeModule.warrantyPerformance}</span>
                </div>
              </div>

              {/* Right Column: Technical Specs & Advantages (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider inline-block mb-3">
                    {activeModule.category}
                  </span>

                  <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {activeModule.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3 font-light">
                    {activeModule.description}
                  </p>
                </div>

                {/* Technical Specs Dashboard (4 key metrics) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Max Efficiency</span>
                    <span className="font-display font-black text-2xl sm:text-3xl text-emerald-400">
                      {activeModule.maxEfficiency}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Power Output</span>
                    <span className="font-display font-black text-lg sm:text-2xl text-white">
                      {activeModule.wattageRange}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Temp. Coeff</span>
                    <span className="font-display font-black text-lg sm:text-2xl text-amber-400">
                      {activeModule.temperatureCoeff}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Degradation</span>
                    <span className="font-display font-black text-lg sm:text-2xl text-emerald-400">
                      {activeModule.degradationAnnual}
                    </span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pt-2">
                  {activeModule.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => onOpenQuoteWithDetails && onOpenQuoteWithDetails(`Module Series: ${activeModule.name}`)}
                    className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request System Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleDownloadDatasheet(activeModule.name)}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-display font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Download Data Sheet (PDF)</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
