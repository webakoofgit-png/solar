import React from 'react';
import { motion } from 'framer-motion';
import { MessagesSquare, ScanEye, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface ProcessTimelineProps {
  onOpenQuote?: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      step: '01',
      title: 'Consultation & Discovery',
      subtitle: 'Free preliminary energy analysis',
      description: 'We review your current utility electricity bills, evaluate historical consumption patterns, and discuss budget and aesthetic priorities.',
      icon: MessagesSquare,
      timelineTag: 'Day 1 - 2',
    },
    {
      step: '02',
      title: 'Site Assessment & 3D Design',
      subtitle: 'LiDAR & drone shadow profiling',
      description: 'Our structural and electrical engineers visit your roof to map azimuth angles, seasonal shadow obstacles, and design custom 3D CAD layout diagrams.',
      icon: ScanEye,
      timelineTag: 'Day 3 - 5',
    },
    {
      step: '03',
      title: 'Precision EPC Installation',
      subtitle: 'Tier-1 modules & certified mounting',
      description: 'Execution with certified hot-dip galvanized or aluminium frames, high-efficiency panels, smart inverters, and IEC-compliant electrical safety switchgear.',
      icon: Wrench,
      timelineTag: 'Week 2 - 3',
    },
    {
      step: '04',
      title: 'Net-Metering & Activation',
      subtitle: 'Bi-directional grid integration',
      description: 'We handle DISCOM inspectorate visits, bi-directional net meter installation, testing, and activate your real-time smartphone monitoring app.',
      icon: ShieldCheck,
      timelineTag: 'Week 4',
    },
  ];

  return (
    <section className="py-24 bg-[#f3f2ed] relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Seamless Execution"
          title="HOW SOLAR WORKS"
          highlight="WITH SANMITRA"
          subtitle="A transparent, hassle-free 4-step engineering roadmap from initial roof assessment to lifelong clean energy generation."
          dark={false}
        />

        {/* Process Steps Grid with Connection Line */}
        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-emerald-200 -translate-y-8 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="group relative bg-white border border-slate-200 hover:border-emerald-500 p-7 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Icon Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="flex flex-col items-end">
                        <span className="font-display font-black text-3xl text-slate-300 group-hover:text-emerald-600 transition-colors">
                          {item.step}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                          {item.timelineTag}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs font-semibold text-emerald-600 mb-3">
                      {item.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>Turnkey Milestone #{idx + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA trigger */}
        {onOpenQuote && (
          <div className="mt-14 text-center">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              <span>Begin Your Step 1 Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
