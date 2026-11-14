import React from 'react';
import { motion } from 'framer-motion';
import {
  HelpCircle,
  CheckCircle2,
  TrendingDown,
  BatteryCharging,
  FileCheck2,
  ShieldAlert,
  CloudSun,
  Headphones,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const SolarConundrum: React.FC = () => {
  const conundrums = [
    {
      problem: 'High Upfront Capital Investment?',
      solution: 'Direct Central Subsidies + Flexible Low-Interest EMI',
      description: 'Under the PM Surya Ghar scheme, get up to ₹78,000 direct bank subsidy, coupled with pre-approved green solar loans from nationalized banks with minimal documentation.',
      icon: TrendingDown,
      color: 'emerald',
    },
    {
      problem: 'Frequent Grid Power Cuts & Outages?',
      solution: 'Smart Hybrid Solar Inverters with LiFePO4 Storage',
      description: 'Unlike basic on-grid solar that shuts down during power outages, our hybrid configurations switch to battery backup in 15 milliseconds, powering all critical home/office loads seamlessly.',
      icon: BatteryCharging,
      color: 'amber',
    },
    {
      problem: 'Complex DISCOM Net-Metering Paperwork?',
      solution: '100% In-House Regulatory & Inspectorate Liaisoning',
      description: 'We handle every procedural step—from online portal registration, CEIG electrical safety approvals, to the physical bi-directional net meter test and commissioning.',
      icon: FileCheck2,
      color: 'emerald',
    },
    {
      problem: 'Rooftop Water Leakage & Structural Damage?',
      solution: 'Zero-Penetration Standing Seams & Chemical Anchors',
      description: 'We use non-penetrative aluminium seam clamps for industrial metal profiles, and aerospace-grade chemical anchor resins on concrete roofs with multi-layered waterproofing.',
      icon: ShieldAlert,
      color: 'amber',
    },
    {
      problem: 'Poor Performance on Cloudy or Monsoon Days?',
      solution: 'Advanced Tier-1 Bi-facial TopCon Half-Cut Modules',
      description: 'Modern N-Type bi-facial panels capture diffused ambient light and reflected albedo radiation from the rooftop floor, generating reliable electricity even on overcast days.',
      icon: CloudSun,
      color: 'emerald',
    },
    {
      problem: 'Contractor Disappearing After Payment?',
      solution: '25-Year Linear Warranty Backing & Cloud IoT Telemetry',
      description: 'Our central monitoring station tracks your string generation 24/7. In the rare event of an inverter fault, our local service engineers arrive within 24–48 hours.',
      icon: Headphones,
      color: 'amber',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Problem Solvers"
          title="SOLVE THE"
          highlight="SOLAR CONUNDRUM"
          subtitle="Tackling the most common solar hesitations with transparent engineering solutions, robust warranties, and peace of mind."
          dark={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {conundrums.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.problem}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-7 bg-slate-50 border border-slate-200 hover:border-emerald-500/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono text-slate-400 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {item.problem}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold mb-3 border border-emerald-200/80">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.solution}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Sanmitra Engineering Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
