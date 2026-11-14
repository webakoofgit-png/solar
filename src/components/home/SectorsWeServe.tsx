import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Sprout,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const SectorsWeServe: React.FC = () => {
  const sectors = [
    {
      title: 'Residential Rooftops',
      desc: 'Independent villas, row houses, and gated housing societies seeking up to 90% power bill elimination.',
      icon: Home,
      link: '/solutions/residential',
      metric: '3 to 15 kWp',
    },
    {
      title: 'Commercial & IT Parks',
      desc: 'Corporate headquarters, tech towers, and coworking spaces reducing high peak commercial tariffs.',
      icon: Building2,
      link: '/solutions/commercial',
      metric: '25 to 250 kWp',
    },
    {
      title: 'Industrial & PEB Sheds',
      desc: 'Automotive, pharma, engineering plants, and warehouses utilizing zero-penetration metal roof clamps.',
      icon: Factory,
      link: '/solutions/commercial',
      metric: '100 kWp to 2 MW+',
    },
    {
      title: 'Educational Campuses',
      desc: 'Schools, colleges, and university campuses creating green net-zero education hubs with educational SCADA dashboards.',
      icon: GraduationCap,
      link: '/solutions',
      metric: '50 to 500 kWp',
    },
    {
      title: 'Hospitals & Healthcare',
      desc: 'Critical medical centers and nursing homes requiring uninterrupted, low-cost green power around the clock.',
      icon: HeartPulse,
      link: '/solutions',
      metric: '30 to 200 kWp',
    },
    {
      title: 'Agriculture & Cold Storage',
      desc: 'Farmhouse retreats, solar-powered agricultural irrigation pumps, food processing units, and cold chains.',
      icon: Sprout,
      link: '/solutions',
      metric: '10 to 100 kWp',
    },
  ];

  return (
    <section className="py-24 bg-[#071B2E] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Diverse Applications"
          title="SECTORS WE"
          highlight="SERVE"
          subtitle="Precision photovoltaic engineering customized to the distinct structural and electrical requirements of every sector."
          dark={true}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {sectors.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl p-7 bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900/90 shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-mono font-semibold">
                      {sec.metric}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {sec.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {sec.desc}
                  </p>
                </div>

                <Link
                  to={sec.link}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 uppercase tracking-wider font-display"
                >
                  <span>Explore Sector Solutions</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
