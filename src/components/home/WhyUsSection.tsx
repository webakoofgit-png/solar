import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Compass,
  Cpu,
  Award,
  TrendingDown,
  Leaf,
  Headphones,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const WhyUsSection: React.FC = () => {
  const benefits = [
    {
      icon: Compass,
      title: 'Tailored Solar Solutions',
      description: 'Every roof has unique pitch, azimuth, and shading variables. We perform custom 3D shadow analysis to engineer maximum year-round energy capture.',
    },
    {
      icon: Cpu,
      title: 'Quality Tier-1 Components',
      description: 'We exclusively source Tier-1 high-density bi-facial monocrystalline modules and smart string inverters from globally vetted manufacturers.',
    },
    {
      icon: Award,
      title: 'Professional Installation',
      description: 'Our in-house certified electrical engineers adhere to strict IEC & CEA safety standards, backed by wind-load certified aluminium structures.',
    },
    {
      icon: TrendingDown,
      title: 'Uncompromised Energy Savings',
      description: 'Dramatically reduce operational overheads with systems optimized for rapid payback (typically 3 to 4 years) and 25+ years of free sunlight.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Technology',
      description: 'Every kilowatt-hour generated offsets toxic thermal coal combustion, directly cutting carbon emissions and boosting your ESG metrics.',
    },
    {
      icon: Headphones,
      title: 'Dedicated Customer Support',
      description: 'From rapid DISCOM net-metering approvals to remote IoT telemetry and 48-hour service turnaround, our team stands by you for decades.',
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Sanmitra Advantage"
          title="THE SMARTER WAY"
          highlight="TO GO SOLAR"
          subtitle="We eliminate the guesswork, substandard components, and regulatory friction from your clean energy transition."
          dark={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {benefits.map((benefit, idx) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Guaranteed Standards</span>
                  </span>
                  <span className="font-mono text-slate-400">0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-emerald-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-lg sm:text-xl text-slate-900">
              Want to see how Sanmitra compares against standard local installers?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Explore our transparent comparison on components, warranties, and structural safety.
            </p>
          </div>

          <Link
            to="/why-us"
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <span>Read Full Differentiators</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
