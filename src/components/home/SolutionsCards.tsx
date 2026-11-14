import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Home, Building2, Factory, Check, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const SolutionsCards: React.FC = () => {
  const cards = [
    {
      id: 'residential',
      title: 'Residential Solar',
      subtitle: 'Rooftops, Luxury Villas & Housing Societies',
      description: 'Custom rooftop systems designed to blend with contemporary architecture. Offset up to 90% of electricity bills with net-metering and government subsidies.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      link: '/solutions/residential',
      icon: Home,
      features: ['Up to 90% Bill Reduction', 'Govt. Rooftop Subsidies', 'Elevated Pergola Options'],
      tag: 'Bestseller for Homes',
    },
    {
      id: 'commercial',
      title: 'Commercial Solar',
      subtitle: 'Corporate Offices, Tech Parks & Institutions',
      description: 'Monetize vacant commercial rooftops and parking lots. Hedge against volatile peak utility tariffs and claim 40% accelerated tax depreciation benefits.',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80',
      link: '/solutions/commercial',
      icon: Building2,
      features: ['40% Tax Depreciation', 'Under 3.5-Yr ROI', 'Solar Carports & EV Ready'],
      tag: 'High Commercial ROI',
    },
    {
      id: 'industrial',
      title: 'Industrial Solar',
      subtitle: 'Manufacturing Plants & Heavy Industrial Sheds',
      description: 'Megawatt-scale clean energy systems for energy-intensive manufacturing. Zero-penetration clamps engineered for PEB roofs to preserve sheet waterproofing.',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80',
      link: '/solutions/commercial',
      icon: Factory,
      features: ['Zero PEB Roof Penetration', '11kV/33kV HT Sync', 'Automated Module Cleaning'],
      tag: 'Megawatt Scale',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Tailored Engineering"
          title="ENGINEERED SOLAR SOLUTIONS"
          highlight="FOR EVERY SCALE"
          subtitle="From high-efficiency residential villas to multi-megawatt industrial manufacturing facilities, we engineer turnkey solar systems built to outperform."
          dark={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5"
              >
                {/* Image Header with Zoom on Hover */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 text-[11px] font-bold tracking-wide">
                      <Sparkles className="w-3 h-3" />
                      {card.tag}
                    </span>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute -bottom-5 right-6 z-10 w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                      <span>{card.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-600 transition-all" />
                    </h3>

                    <p className="text-xs font-bold text-emerald-600 mt-1 mb-3">
                      {card.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {card.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                      {card.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Link CTA */}
                  <Link
                    to={card.link}
                    className="w-full py-3 rounded-xl bg-slate-900 group-hover:bg-emerald-600 text-white font-display font-bold text-xs uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Explore {card.title}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View all solutions footer */}
        <div className="mt-12 text-center">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors uppercase font-display tracking-wider"
          >
            <span>View Full Solutions Spectrum &amp; Operations Support</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
