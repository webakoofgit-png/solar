import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Info } from 'lucide-react';
import { TESTIMONIALS } from '../../data/solarData';
import { SectionHeading } from '../common/SectionHeading';

export const TestimonialsSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Client Experiences"
          title="TRUSTED BY HOMES &"
          highlight="ENTERPRISES"
          subtitle="Discover how Sanmitra Solar is helping property owners and facility managers eliminate peak tariffs with clean solar generation."
          dark={false}
        />

        {/* Featured Slider Card (Light Theme) */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden">
            {/* Top quote icon decoration */}
            <div className="absolute top-6 right-8 text-emerald-500/10 pointer-events-none">
              <Quote className="w-24 h-24 rotate-180" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 relative z-10"
              >
                {/* Rating stars & capacity tag */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(active.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  <span className="px-3.5 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                    {active.projectType}
                  </span>
                </div>

                {/* Quote text */}
                <p className="font-display text-lg sm:text-2xl text-slate-800 font-normal leading-relaxed italic">
                  "{active.quote}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 shadow-md"
                    loading="lazy"
                  />

                  <div>
                    <div className="font-display font-bold text-base text-slate-900 flex items-center gap-1.5">
                      <span>{active.name}</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="text-xs text-emerald-700 font-semibold">
                      {active.role}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {active.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-200">
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'w-8 bg-emerald-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                  className="p-3 rounded-full bg-white hover:bg-emerald-600 hover:text-white text-slate-700 transition-colors cursor-pointer border border-slate-200 shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                  className="p-3 rounded-full bg-white hover:bg-emerald-600 hover:text-white text-slate-700 transition-colors cursor-pointer border border-slate-200 shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Placeholder disclaimer */}
          <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
            <Info className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              Sample placeholder testimonials for presentation. Genuine client reviews are uploaded after verification.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
