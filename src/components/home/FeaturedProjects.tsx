import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, MapPin, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../../data/solarData';
import { SectionHeading } from '../common/SectionHeading';

export const FeaturedProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Rooftops' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial Plants' },
    { id: 'institutional', label: 'Institutional' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS.slice(0, 4)
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            badge="Engineering Portfolio"
            title="FEATURED COMMISSIONED"
            highlight="PROJECTS"
            subtitle="Explore our precision installations engineered for residential estates, corporate facilities, and industrial powerhouses."
            align="left"
            dark={false}
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-md font-bold'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Masonry-style Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Link to={`/projects/${project.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Top badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                      {project.categoryLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold font-display shadow-md">
                      <Zap className="w-3.5 h-3.5" />
                      {project.capacity}
                    </span>
                  </div>

                  {/* Bottom Info Banner */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex items-center gap-2 text-xs text-slate-300 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>Year {project.completionYear}</span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <div className="w-10 h-10 rounded-full bg-white/20 group-hover:bg-emerald-500 text-white flex items-center justify-center transition-colors flex-shrink-0">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-200 mt-2 line-clamp-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
          >
            <span>View All Commissioned Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
