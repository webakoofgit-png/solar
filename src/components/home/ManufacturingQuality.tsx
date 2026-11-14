import React from 'react';
import { motion } from 'framer-motion';
import {
  Scan,
  ShieldCheck,
  CheckCircle2,
  Wind,
  Flame,
  Award,
  Zap,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { QUALITY_STANDARDS } from '../../data/solarData';

export const ManufacturingQuality: React.FC = () => {
  const certifications = [
    { code: 'IEC 61215', desc: 'Design Qualification & Type Approval' },
    { code: 'IEC 61730', desc: 'Photovoltaic Module Safety Qualification' },
    { code: 'IEC 61701', desc: 'Salt Mist Corrosion Severity 6' },
    { code: 'IEC 62716', desc: 'Ammonia Corrosion Resistance' },
    { code: 'BIS IS 14286', desc: 'Bureau of Indian Standards Compliance' },
    { code: 'ISO 9001/14001', desc: 'Quality & Environmental Management' },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Manufacturing Rigor & Reliability"
          title="VIKRAM SOLAR-GRADE"
          highlight="QUALITY & 6-STAGE TESTING"
          subtitle="Every solar module deployed by Sanmitra undergoes exhaustive automated screening and accelerated environmental stress testing to guarantee 30-year operational resilience."
          dark={false}
        />

        {/* 6-Stage Testing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {QUALITY_STANDARDS.map((test, idx) => (
            <motion.div
              key={test.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl p-7 bg-slate-50 border border-slate-200 hover:border-emerald-500/50 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-extrabold text-2xl text-emerald-800">
                    {test.step}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold font-mono">
                    {test.metric}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {test.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {test.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero-Defect Quality Assurance</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Bar */}
        <div className="mt-16 p-8 rounded-3xl bg-[#071B2E] text-white border border-slate-800 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              Statutory Approvals &amp; Certifications
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mt-1 text-white">
              Certified by International Testing Laboratories
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.code}
                className="p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-center hover:border-emerald-400/50 transition-colors"
              >
                <div className="font-display font-extrabold text-sm sm:text-base text-amber-400">
                  {cert.code}
                </div>
                <div className="text-[10px] text-slate-300 mt-1 line-clamp-2 leading-tight">
                  {cert.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-center gap-2 text-slate-400 text-xs text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Strict compliance with MNRE Approved List of Models and Manufacturers (ALMM).</span>
          </div>
        </div>
      </div>
    </section>
  );
};
