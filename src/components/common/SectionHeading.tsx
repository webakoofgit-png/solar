import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border ${
            dark
              ? 'bg-amber-400/10 border-amber-400/30 text-amber-300'
              : 'bg-emerald-50 border-emerald-200 text-emerald-800'
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${dark ? 'bg-amber-400' : 'bg-emerald-600'}`} />
          {badge}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className={`relative inline-block ${dark ? 'text-amber-400' : 'text-emerald-600'}`}>
            {highlight}
            <span
              className={`absolute bottom-1 left-0 w-full h-1 rounded-full ${
                dark ? 'bg-amber-400/30' : 'bg-emerald-500/20'
              }`}
            />
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
