import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { DEMO_STATS } from '../../data/solarData';
import { Award, Zap, Users, Calendar, Info } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeOutQuad = (t: number) => t * (2 - t);
      setCount(Math.floor(easeOutQuad(progress) * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

export const TrustStats: React.FC = () => {
  const icons = [Award, Zap, Users, Calendar];

  return (
    <section id="stats-section" className="relative bg-white py-14 border-b border-slate-200 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
          {DEMO_STATS.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className={`flex flex-col items-center text-center p-4 ${
                  idx > 0 ? 'pt-8 lg:pt-4' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4 shadow-sm">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#0b120e] tracking-tight flex items-baseline">
                  <AnimatedCounter end={stat.value} />
                  <span className="text-emerald-600 ml-1">{stat.suffix}</span>
                </div>

                <div className="text-sm font-bold text-slate-900 mt-2">
                  {stat.label}
                </div>

                <div className="text-xs text-slate-500 mt-1 max-w-[220px] leading-relaxed">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Demo placeholder disclaimer note */}
        <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
          <Info className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
          <span>
            Demo statistics shown as representative project targets. Not presented as audited legal figures.
          </span>
        </div>
      </div>
    </section>
  );
};
