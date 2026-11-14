import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Flame, Trees, Sparkles, Info } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const SustainabilityImpact: React.FC = () => {
  const impacts = [
    {
      icon: Leaf,
      value: '12,400+',
      unit: 'Metric Tons',
      title: 'CO₂ Carbon Avoided',
      description: 'Calculated using standard grid emission factors of 0.82 kg CO₂ offset per clean kWh generated.',
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
    {
      icon: Trees,
      value: '198,000+',
      unit: 'Tree Seedlings',
      title: 'Equivalent Trees Planted',
      description: 'Absorbing carbon continuously, equivalent to creating a 150-acre dense urban green canopy.',
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
    },
    {
      icon: Flame,
      value: '5,800+',
      unit: 'Tons of Coal',
      title: 'Fossil Fuel Displaced',
      description: 'Reducing dependence on carbon-intensive thermal power generation plants and smog-causing pollutants.',
      color: 'text-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
    {
      icon: Droplets,
      value: '42+ Million',
      unit: 'Liters Water',
      title: 'Conserved Cooling Water',
      description: 'Photovoltaic generation consumes zero operational cooling water unlike coal or nuclear plants.',
      color: 'text-teal-700',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Environmental Stewardship"
          title="GOOD FOR YOUR FUTURE"
          highlight="BETTER FOR OUR PLANET"
          subtitle="Solar energy isn't just a high-return financial investment—it is a tangible, generational legacy of clean air and climate responsibility."
          dark={false}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {impacts.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-emerald-400 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${item.bgColor} border ${item.borderColor} ${item.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className="font-display text-3xl font-extrabold text-slate-900 tracking-tight">
                    {item.value}
                  </div>

                  <div className={`text-xs font-bold uppercase tracking-wider ${item.color} mb-3`}>
                    {item.unit}
                  </div>

                  <h3 className="font-display text-base font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[10px] text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>Cumulative Portfolio Target</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Calculation note */}
        <div className="mt-10 p-4 rounded-2xl bg-white border border-slate-200 text-[11px] text-slate-500 flex items-center justify-center gap-2 text-center max-w-3xl mx-auto shadow-xs">
          <Info className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>
            Environmental figures are illustrative cumulative portfolio projections calculated using Central Electricity Authority (CEA) grid baseline emission factors (approx 0.82 kg CO₂/kWh).
          </span>
        </div>
      </div>
    </section>
  );
};
