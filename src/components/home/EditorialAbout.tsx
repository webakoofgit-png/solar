import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, SunDim, Wrench, Headphones, Sparkles } from 'lucide-react';

export const EditorialAbout: React.FC = () => {
  const pillars = [
    {
      icon: SunDim,
      title: 'Sustainable Energy Solutions',
      description: 'Engineered to maximize clean kWh yield per square foot of rooftop or open ground area.',
    },
    {
      icon: ShieldCheck,
      title: 'Quality-Focused Installation',
      description: 'Tier-1 components, anodized aluminium frames, and strict adherence to IEC safety standards.',
    },
    {
      icon: Wrench,
      title: 'Customized Solar Systems',
      description: '3D shadow profiling and structural analysis tailored to your specific architecture and load patterns.',
    },
    {
      icon: Headphones,
      title: 'Long-Term Support & AMC',
      description: '25-year performance monitoring, proactive maintenance, and dedicated engineer turnaround.',
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200">
      {/* Background ambient accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Asymmetric Overlapping Images (Green Nations Power style) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] group"
            >
              <img
                src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
                alt="Sanmitra Solar large installation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 text-xs text-slate-800 shadow-md">
                <span className="text-emerald-700 font-bold uppercase tracking-wider block mb-0.5">
                  Engineering Precision
                </span>
                Custom mounting arrays engineered for optimal seasonal solar tilt.
              </div>
            </motion.div>

            {/* Overlapping Secondary Image */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 z-20 w-3/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block group"
            >
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
                  alt="Modern residential solar home"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="bg-white p-3 text-[11px] border-t border-slate-100 text-slate-700 font-medium">
                <span className="text-emerald-700 font-bold">100% Turnkey Execution:</span> Design, approvals &amp; activation
              </div>
            </motion.div>

            {/* Floating Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -top-4 -left-4 z-20 px-4 py-2.5 rounded-2xl bg-emerald-600 text-white font-display font-bold shadow-xl flex items-center gap-2.5"
            >
              <CheckCircle2 className="w-5 h-5 text-white" />
              <div>
                <div className="text-xs uppercase tracking-wider font-extrabold leading-none">Tier-1 Certified</div>
                <div className="text-[10px] text-emerald-100 font-semibold">Quality Components</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>About Sanmitra Solar</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
            >
              Harness the Sun.{' '}
              <span className="text-emerald-600">Transform Your Future.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 leading-relaxed"
            >
              Sanmitra Solar is an engineering-first renewable energy enterprise built on the conviction that going solar should be seamless, financially rewarding, and architecturally superior. We combine advanced 3D rooftop simulation, Tier-1 photovoltaic components, and seamless utility net-metering liaisoning to empower homes, corporate facilities, and industries.
            </motion.p>

            {/* 4 Pillars Grid (Clean White Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 shadow-sm transition-all"
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-2.5">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-display font-bold text-slate-900 text-sm mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-900/15 transition-all group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
