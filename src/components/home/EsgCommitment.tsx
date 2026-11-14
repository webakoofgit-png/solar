import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Sun, Globe2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const EsgCommitment: React.FC = () => {
  const pillars = [
    {
      title: 'Water Stewardship & Dry Robotic Cleaning',
      desc: 'Conventional panel cleaning wastes billions of liters of drinking water. We deploy automated waterless robotic de-soiling tractors, conserving 100% of water in arid and drought-prone regions.',
      icon: Droplets,
      metric: 'Zero Water Waste',
    },
    {
      title: 'Circular Economy & Panel Recycling',
      desc: 'Committed to responsible end-of-life solar module recycling, recovering over 95% of semiconductor-grade silicon, copper ribbon, silver paste, and aluminium frame materials.',
      icon: Globe2,
      metric: '95% Material Recovery',
    },
    {
      title: 'Decarbonization & Clean Energy Access',
      desc: 'Aligned directly with UN Sustainable Development Goals (SDG 7 & SDG 13), offsetting gigawatt-hours of fossil coal thermal generation across Maharashtra and western India.',
      icon: Sun,
      metric: '100% Green kWh',
    },
    {
      title: 'Zero-Hazard Workplace & ISO 45001',
      desc: 'Zero-harm electrical and high-altitude rooftop safety policies with daily toolbox meetings, fall-arrest harnesses, and certified electrical inspectorates.',
      icon: ShieldCheck,
      metric: 'Zero Harm Standard',
    },
  ];

  return (
    <section className="py-24 bg-[#071B2E] text-white relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="ESG & Corporate Responsibility"
          title="ENVIRONMENTAL STEWARDSHIP &"
          highlight="SUSTAINABLE PROGRESS"
          subtitle="Our commitment to the planet extends beyond clean power generation to responsible water conservation, material recycling, and ethical labor standards."
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {pillars.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-7 bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/90 shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest font-bold block mb-1">
                    {item.metric}
                  </span>

                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>UN SDG 7 &amp; 13 Alignment</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
