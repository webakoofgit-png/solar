import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Zap,
  MapPin,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Leaf,
  Layers,
  ArrowRight,
  Info,
  Maximize2,
  X,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PROJECTS } from '../data/solarData';

interface ProjectDetailPageProps {
  onOpenQuoteWithDetails: (systemSize: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  onOpenQuoteWithDetails,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="bg-[#071B2E] text-white min-h-screen pt-40 pb-20 text-center">
        <div className="max-w-md mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Project Not Found</h2>
          <p className="text-sm text-slate-400 mb-6">
            The project case study you requested could not be located.
          </p>
          <Link
            to="/projects"
            className="px-6 py-3 rounded-xl bg-amber-400 text-slate-950 font-display font-bold text-xs uppercase"
          >
            Back to Projects Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#071B2E] text-slate-100 min-h-screen">
      {/* Project Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#040f1a] border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040f1a] via-[#040f1a]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <Breadcrumbs
              items={[
                { label: 'Projects', path: '/projects' },
                { label: project.title },
              ]}
            />

            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </button>
          </div>

          <div className="max-w-4xl mt-6">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold font-display">
                <Zap className="w-3.5 h-3.5" />
                {project.capacity} Capacity
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {project.location}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Main Details Body */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column (8 cols): Story, Highlights, Gallery */}
            <div className="lg:col-span-8 space-y-12">
              {/* Challenge & Solution */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                    Client Challenge &amp; Requirement
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                    {project.clientRequirement}
                  </p>
                </div>

                <div>
                  <h3 className="font-display text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                    Engineering Solution Delivered
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
                    {project.solutionProvided}
                  </p>
                </div>
              </div>

              {/* Engineering Highlights */}
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>Key Engineering Highlights</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo Gallery */}
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-400" />
                  <span>Installation Gallery</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.gallery.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveModalImage(imgUrl)}
                      className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700 cursor-pointer shadow-md"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.title} angle ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-amber-400">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (4 cols): Technical Specifications Card & CTA */}
            <div className="lg:col-span-4 space-y-6">
              {/* Specs Box */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#040f1a] border border-amber-400/30 shadow-2xl sticky top-28">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 pb-3 border-b border-slate-800">
                  <Zap className="w-4 h-4" />
                  <span>Technical Data Sheet</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-slate-400 block mb-0.5">System Capacity:</span>
                    <span className="font-semibold text-white text-sm">{project.specs.systemCapacity}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-0.5">Solar Modules:</span>
                    <span className="font-semibold text-white">{project.specs.solarPanels}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-0.5">Inverter Architecture:</span>
                    <span className="font-semibold text-white">{project.specs.inverterModel}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-0.5">Mounting Structure:</span>
                    <span className="font-semibold text-white">{project.specs.mountingStructure}</span>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80">
                    <span className="text-slate-400 block mb-0.5">Est. Annual Generation:</span>
                    <span className="font-bold text-amber-400 text-sm">{project.specs.estimatedAnnualGeneration}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block mb-0.5">Annual CO₂ Offset:</span>
                    <span className="font-bold text-emerald-400 text-sm flex items-center gap-1.5">
                      <Leaf className="w-4 h-4" />
                      {project.specs.co2OffsetAnnual}
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <button
                    onClick={() => onOpenQuoteWithDetails(`Similar to ${project.title} (${project.capacity})`)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-display font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request Similar Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-slate-900/60 text-[11px] text-slate-400 flex items-start gap-2">
                  <Info className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Representative case study specifications with sample values.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Gallery Images */}
      <AnimatePresence>
        {activeModalImage && (
          <div
            onClick={() => setActiveModalImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:text-amber-400"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={activeModalImage}
                alt="Enlarged view"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
