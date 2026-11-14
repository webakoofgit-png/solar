import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sun,
  Zap,
  MapPin,
  Calendar,
  ArrowUpRight,
  Search,
  Filter,
  Info,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { PROJECTS } from '../data/solarData';

export const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Portfolio' },
    { id: 'residential', label: 'Residential Rooftops' },
    { id: 'commercial', label: 'Commercial & Corporate' },
    { id: 'industrial', label: 'Industrial Plants' },
    { id: 'institutional', label: 'Institutional Campuses' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.capacity.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#0b120e] text-slate-100 min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#08100b] border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home/industrial-solar.jpg"
            alt="Solar portfolio banner"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08100b] via-[#08100b]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Projects Portfolio' }]} />

          <div className="max-w-3xl mt-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sun className="w-3.5 h-3.5" />
              <span>Commissioned Energy Assets</span>
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
              ENGINEERED FOR <span className="text-amber-400">DECIMAL PRECISION</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Explore our commissioned solar installations spanning hillside luxury residences, high-rise tech parks, and heavy manufacturing corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-[#08100b] border-b border-slate-800/80 sticky top-[72px] z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, location..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800">
              <Filter className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="font-display text-xl font-bold text-white">No projects found</h3>
              <p className="text-xs text-slate-400 mt-1">Try selecting another category or clearing your search term.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold uppercase"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="group rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-amber-400/50 shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Frame */}
                      <Link
                        to={`/projects/${project.slug}`}
                        className="block relative aspect-[16/10] overflow-hidden"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                        {/* Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                          <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/30 text-amber-400 text-[11px] font-semibold">
                            {project.categoryLabel}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold font-display">
                            <Zap className="w-3.5 h-3.5" />
                            {project.capacity}
                          </span>
                        </div>
                      </Link>

                      {/* Card Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                          <MapPin className="w-3.5 h-3.5 text-amber-400" />
                          <span>{project.location}</span>
                          <span>•</span>
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>{project.completionYear}</span>
                        </div>

                        <Link to={`/projects/${project.slug}`}>
                          <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                            {project.title}
                          </h3>
                        </Link>

                        <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                          {project.summary}
                        </p>

                        {/* Specs overview */}
                        <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] space-y-1 text-slate-400">
                          <div className="flex justify-between">
                            <span>Est. Generation:</span>
                            <span className="text-slate-200 font-semibold">{project.specs.estimatedAnnualGeneration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>CO₂ Offset:</span>
                            <span className="text-emerald-400 font-semibold">{project.specs.co2OffsetAnnual}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Link */}
                    <div className="p-6 pt-0">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-white font-display font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center"
                      >
                        <span>View Project Case Study</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Demo disclaimer */}
          <div className="mt-14 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-center justify-center gap-2 text-center max-w-2xl mx-auto">
            <Info className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>
              All projects represent illustrative engineering design concepts and capabilities. Client names and locations are sample placeholders.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
