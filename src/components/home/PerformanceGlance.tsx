import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Zap, Award, CheckCircle2 } from 'lucide-react';

export const PerformanceGlance: React.FC = () => {
  const metrics = [
    {
      value: '1000+',
      label: 'Delighted Clients',
      subtext: 'Across residential, corporate & manufacturing domains',
      icon: Users,
    },
    {
      value: '20+ MW',
      label: 'Solar Capacity Commissioned',
      subtext: 'Delivering gigawatt-hours of clean green power',
      icon: Zap,
    },
    {
      value: '50+ Years',
      label: 'Combined EPC Experience',
      subtext: 'In high-voltage engineering & structural safety',
      icon: Award,
    },
  ];

  return (
    <section className="py-12 bg-white relative z-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-8 sm:p-10 bg-emerald-50/60 border border-emerald-200 shadow-lg text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Performance At A Glance</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
            Proven Reliability in Clean Energy Delivery
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto mb-8">
            Precision engineering and unwavering quality components delivering measurable return on investment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-emerald-200/80">
            {metrics.map((m, idx) => {
              const IconComp = m.icon;
              return (
                <div key={m.label} className={`flex flex-col items-center ${idx > 0 ? 'pt-6 md:pt-0' : ''}`}>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-md shadow-emerald-600/20">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="font-display font-black text-4xl sm:text-5xl text-emerald-950 tracking-tight">
                    {m.value}
                  </div>
                  <div className="font-display font-bold text-sm text-slate-900 mt-1">
                    {m.label}
                  </div>
                  <div className="text-xs text-slate-500 mt-1 max-w-[220px]">
                    {m.subtext}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
