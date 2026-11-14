import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sun,
  ShieldCheck,
  Award,
  CheckCircle2,
  XCircle,
  Cpu,
  TrendingUp,
  Headphones,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { COMPARISON_POINTS } from '../data/solarData';

interface WhyChooseUsPageProps {
  onOpenQuote: () => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onOpenQuote }) => {
  const pillars = [
    {
      title: 'Structural Safety & Roof Preservation',
      desc: 'Most solar problems stem from amateur mounting. We design aerodynamic, wind-tunnel verified structures utilizing non-penetrative aluminium seam clamps for metal roofs, and waterproof chemical resin anchors for concrete roofs.',
      icon: ShieldCheck,
    },
    {
      title: 'Tier-1 Silicon Exclusivity',
      desc: 'We never compromise on panel efficiency. We strictly deploy Tier-1 high-density bi-facial monocrystalline modules offering positive power tolerances (+3%) and minimal annual degradation (<0.55%/year).',
      icon: Cpu,
    },
    {
      title: 'End-to-End Regulatory Liaisoning',
      desc: 'Going solar involves state electrical inspectorates, DISCOM approvals, and bi-directional net-meter configuration. Our in-house liaison team handles all paperwork and technical inspections on your behalf.',
      icon: Award,
    },
    {
      title: 'Remote IoT Telemetry & 25-Year Support',
      desc: 'Every system is paired with smart cloud telemetry. We monitor string generation in real-time, instantly notifying our field response engineers if an inverter fault or shading event occurs.',
      icon: Headphones,
    },
  ];

  return (
    <div className="bg-[#0b120e] text-slate-100 min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#08100b] border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home/industrial-solar.jpg"
            alt="Solar precision background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08100b] via-[#08100b]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Why Choose Us' }]} />

          <div className="max-w-3xl mt-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sun className="w-3.5 h-3.5" />
              <span>Engineering Differentiators</span>
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
              PRECISION IS OUR <span className="text-amber-400">STANDBY PROMISE</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              In a crowded market of solar traders and local contractors, Sanmitra Solar stands apart as a dedicated clean energy engineering firm focused on long-term performance, safety, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiator Pillars */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Technical Difference"
            title="FOUR PILLARS OF OUR"
            highlight="ENGINEERING RIGOR"
            subtitle="Built to withstand 25+ years of intense solar exposure, torrential monsoons, and high-velocity wind loads."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-3xl bg-[#08100b] border border-slate-800 hover:border-amber-400/30 shadow-xl transition-colors space-y-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Matrix */}
      <section className="py-24 bg-[#08100b] border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Head-to-Head Comparison"
            title="SANMITRA SOLAR VS"
            highlight="GENERIC INSTALLERS"
            subtitle="Understand why an upfront focus on component quality and structural engineering safeguards your 25-year solar investment."
            dark={true}
          />

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-display uppercase tracking-wider">
                  <th className="py-5 px-6 text-slate-400 font-semibold w-1/4">Evaluation Parameter</th>
                  <th className="py-5 px-6 text-amber-400 font-bold bg-amber-400/5 rounded-t-2xl w-2/5 border-x border-amber-400/20">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      SANMITRA SOLAR
                    </span>
                  </th>
                  <th className="py-5 px-6 text-slate-400 font-semibold w-1/3">Standard Local Installers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 text-xs sm:text-sm">
                {COMPARISON_POINTS.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                    <td className="py-5 px-6 font-semibold text-white">
                      {item.feature}
                    </td>
                    <td className="py-5 px-6 bg-amber-400/5 border-x border-amber-400/20 text-slate-200">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item.sanmitra}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 text-slate-400">
                      <div className="flex items-start gap-2.5">
                        <XCircle className="w-4 h-4 text-rose-400/80 flex-shrink-0 mt-0.5" />
                        <span>{item.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-t from-[#08100b] to-[#0b120e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Experience the Sanmitra Difference Firsthand
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Book an engineering consultation today and receive a detailed 3D shadow simulation of your rooftop.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-xl cursor-pointer inline-flex items-center gap-2"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
