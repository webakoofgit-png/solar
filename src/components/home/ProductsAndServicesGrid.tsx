import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Home, Building2, Factory, Sprout, Car, Zap, BatteryCharging, Wrench } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const ProductsAndServicesGrid: React.FC = () => {
  const items = [
    {
      title: 'Residential Rooftop',
      desc: 'High-efficiency rooftop systems for independent villas, row houses, and societies.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      icon: Home,
      link: '/solutions/residential',
      tag: 'Up to 90% Savings',
    },
    {
      title: 'Commercial Solar',
      desc: 'Turnkey solar rooftop solutions for IT parks, corporate towers, and retail spaces.',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
      icon: Building2,
      link: '/solutions/commercial',
      tag: '40% Tax Depreciation',
    },
    {
      title: 'Industrial Plants',
      desc: 'Heavy-duty megawatts for manufacturing factories with non-penetrative PEB clamps.',
      image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
      icon: Factory,
      link: '/solutions/commercial',
      tag: 'Megawatt Scale',
    },
    {
      title: 'Agricultural & Pumps',
      desc: 'Solar water pumps and rural micro-grids for farmhouses, orchards, and cold chains.',
      image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
      icon: Sprout,
      link: '/solutions',
      tag: 'Zero Fuel Cost',
    },
    {
      title: 'Solar Carports & EV',
      desc: 'Architectural parking canopies with integrated level-2 electric vehicle chargers.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      icon: Car,
      link: '/solutions',
      tag: 'Dual Utility',
    },
    {
      title: 'Ground-Mounted Parks',
      desc: 'Utility-scale ground arrays engineered for open acreage, resorts, and campuses.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
      icon: Zap,
      link: '/solutions',
      tag: 'High Energy Yield',
    },
    {
      title: 'Battery Storage (BESS)',
      desc: 'LiFePO4 lithium storage banks for uninterrupted zero-flicker backup during outages.',
      image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
      icon: BatteryCharging,
      link: '/solutions',
      tag: '24/7 Resilience',
    },
    {
      title: 'Operations & AMC',
      desc: 'Drone thermography, automated panel de-soiling, and round-the-clock IoT telemetry.',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
      icon: Wrench,
      link: '/solutions',
      tag: '99.5% Uptime',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Product Spectrum"
          title="PRODUCTS &"
          highlight="SERVICES"
          subtitle="A comprehensive spectrum of clean energy capabilities engineered to the highest international photovoltaic standards."
          dark={false}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {items.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 hover:border-emerald-500 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top tag */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 text-[10px] font-bold border border-emerald-400/30">
                      {item.tag}
                    </span>
                  </div>

                  {/* Floating Icon */}
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between bg-white text-slate-900">
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <Link
                      to={item.link}
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-wider font-display inline-flex items-center gap-1.5"
                    >
                      <span>Explore Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
