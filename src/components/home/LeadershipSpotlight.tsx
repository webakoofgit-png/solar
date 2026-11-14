import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, MessageSquare, Quote, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface LeadershipSpotlightProps {
  onOpenQuote?: () => void;
}

export const LeadershipSpotlight: React.FC<LeadershipSpotlightProps> = ({ onOpenQuote }) => {
  const leaders = [
    {
      name: 'Vikas Shriram Bapaye',
      role: 'Co-Founder & Managing Director',
      badge: 'Vision & Strategy',
      experience: '20+ Years in Renewable Infrastructure',
      quote:
        'Solar energy is not just a technological transition; it is an enduring commitment to ecological stewardship and economic self-reliance for generations of Indian families and institutions.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Spearheaded 50+ MW of cumulative solar installations across western India',
        'Pioneered zero-penetration mounting techniques for industrial roofs',
        'Advisor on state renewable rooftop subsidy implementation committees',
      ],
    },
    {
      name: 'Siddharth Jagtap',
      role: 'Co-Founder & Technical Director',
      badge: 'Engineering & EPC',
      experience: '16+ Years in High-Voltage Electrical Systems',
      quote:
        'Every kilowatt-hour we engineer is treated with uncompromising precision. When you invest in a 25-year asset, structural reliability and electrical safety must never be compromised.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
      highlights: [
        'Certified high-voltage grid interconnection & HT substation sync specialist',
        'Directs 3D drone shadow profiling & SCADA IoT telemetry operations',
        'Guarantees zero-leakage chemical anchoring standards on every project',
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Guiding Leadership"
          title="MEET THE VISIONARIES BEHIND"
          highlight="OUR ENGINEERING RIGOR"
          subtitle="Experienced clean energy leaders committed to building India's most trusted, precision-driven solar solutions enterprise."
          dark={false}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 hover:border-emerald-500/40 shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row with badge & role */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    {leader.badge}
                  </span>

                  <span className="text-xs text-slate-500 font-medium">
                    {leader.experience}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-6">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden flex-shrink-0 shadow-md border-2 border-emerald-100 group-hover:border-emerald-500 transition-colors">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-bold text-emerald-600 uppercase tracking-wider mt-1">
                      {leader.role}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Sanmitra Solar Leadership Council
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative p-5 rounded-2xl bg-slate-50 border border-slate-100 mb-6 text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  <Quote className="w-6 h-6 text-emerald-500/20 absolute top-3 right-3 pointer-events-none" />
                  "{leader.quote}"
                </div>

                {/* Highlights */}
                <div className="space-y-2.5">
                  {leader.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Certified Solar Technologist
                </span>

                <button
                  onClick={onOpenQuote}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Request Executive Briefing</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
