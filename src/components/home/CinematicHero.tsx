import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Sparkles, Sun, Shield, Zap, CheckCircle2 } from 'lucide-react';

interface CinematicHeroProps {
  onOpenQuote: () => void;
}

export const CinematicHero: React.FC<CinematicHeroProps> = ({ onOpenQuote }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0.2]);

  const scrollToNextSection = () => {
    const nextSec = document.getElementById('stats-section');
    if (nextSec) {
      nextSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#071B2E]">
      {/* Background Image with Zoom & Parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3.5, ease: 'easeOut' }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2400&q=85')`,
          }}
        />

        {/* Multi-layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071B2E] via-[#071B2E]/70 to-[#071B2E]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B2E]/90 via-[#071B2E]/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
      </motion.div>

      {/* Floating Solar Energy Flares & Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-emerald-500/15 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/3 left-10 w-96 h-96 rounded-full bg-amber-400/10 blur-3xl"
        />
      </div>

      {/* Content Container (2 cols on large screens: text on left, floating cards on right like Green Nations Power) */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Col (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-lg"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Next-Gen Rooftop &amp; Industrial Solar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </motion.div>

            {/* Hero Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] uppercase"
            >
              POWERING A{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 drop-shadow-[0_4px_30px_rgba(16,185,129,0.35)]">
                BRIGHTER
              </span>{' '}
              TOMORROW.
            </motion.h1>

            {/* Supporting text */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-6 text-base sm:text-xl text-slate-200 font-light leading-relaxed tracking-wide max-w-2xl"
            >
              Smarter Solar Solutions for Homes, Businesses &amp; a Sustainable Future. Slash electricity bills by up to 90% with Tier-1 engineering.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5"
            >
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-display font-bold text-sm uppercase tracking-wider shadow-xl shadow-emerald-900/40 transition-all flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <Link
                to="/solutions"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700/80 hover:border-emerald-400/60 font-display font-semibold text-sm uppercase tracking-wider backdrop-blur-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Solutions</span>
                <ChevronDown className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Key trust badges below CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-300"
            >
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Tier-1 Bi-facial Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>25-Year Performance Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>100% Net Metering Support</span>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Preview Cards (5 cols - Inspired by Green Nations Power) */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-400/40 aspect-[4/3] group"
            >
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
                alt="Modern solar rooftop installation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-700/80 text-xs text-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-emerald-400 font-bold block">Rooftop Solar Systems</span>
                  <span className="text-[11px] text-slate-400">Precision Residential &amp; Commercial EPC</span>
                </div>
                <span className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                  ✓
                </span>
              </div>
            </motion.div>

            {/* Overlapping secondary polaroid card */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-10 -left-10 w-64 rounded-2xl overflow-hidden shadow-2xl border border-amber-400/40 bg-slate-900 p-2.5"
            >
              <div className="aspect-[16/10] rounded-xl overflow-hidden mb-2">
                <img
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=600&q=80"
                  alt="Commercial solar project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-1 text-[11px] text-slate-300">
                <span className="text-amber-400 font-bold block">10+ MW Installed</span>
                <span className="text-[10px] text-slate-400">Zero Roof Penetration Guarantee</span>
              </div>
            </motion.div>

            {/* Circular badge */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-emerald-600 text-white border-4 border-[#071B2E] shadow-xl flex flex-col items-center justify-center text-center leading-none">
              <span className="text-[10px] uppercase font-bold">PM Surya</span>
              <span className="text-xs font-black text-amber-300">Ghar</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Scroll Down Indicator */}
      <motion.button
        onClick={scrollToNextSection}
        aria-label="Scroll down to statistics"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer group"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 group-hover:text-emerald-400">
          Scroll
        </span>
        <div className="w-5 h-9 rounded-full border-2 border-slate-400/50 group-hover:border-emerald-400 flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-400"
          />
        </div>
      </motion.button>
    </section>
  );
};
