import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../../data/solarData';

interface FinalCtaSectionProps {
  onOpenQuote: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-28 bg-[#08100b] overflow-hidden">
      {/* Background with solar imagery & gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/home/industrial-solar.jpg"
          alt="Solar panels at sunrise"
          className="w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b120e] via-[#0b120e]/90 to-[#0b120e]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>Turnkey Renewable EPC Services</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight"
        >
          YOUR JOURNEY TO CLEAN ENERGY{' '}
          <span className="text-emerald-400">STARTS HERE.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
        >
          Schedule a zero-obligation engineering site audit. Our certified team will inspect your roof, run a high-precision 3D shadow simulation, and deliver a tailored feasibility proposal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-sm uppercase tracking-wider shadow-xl shadow-emerald-950/50 transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <span>Get a Free Solar Quote</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <Link
            to="/contact"
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-amber-400/50 font-display font-semibold text-sm uppercase tracking-wider backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span>Contact Our Experts</span>
          </Link>
        </motion.div>

        {/* Confidence statement */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Zero Advance Feasibility Audit</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Direct helpline: {COMPANY_INFO.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
