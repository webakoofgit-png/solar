import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ShieldCheck, ArrowRight, BookOpen, FileCheck } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { RESOURCE_DOWNLOADS, COMPANY_INFO } from '../../data/solarData';

export const ResourceCenter: React.FC = () => {
  const handleDownload = (title: string, format: string) => {
    alert(`Initiating download for "${title}" (${format})...`);
  };

  return (
    <section id="resources" className="py-24 bg-[#F8FAFC] relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Vikicare-Inspired Knowledge Hub"
          title="TECHNICAL DOWNLOADS &"
          highlight="RESOURCE CENTER"
          subtitle="Access official product datasheets, structural engineering manuals, warranty charters, and net-metering regulatory whitepapers."
          dark={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {RESOURCE_DOWNLOADS.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl p-7 bg-white border border-slate-200 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
                    {doc.category}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-400">
                    {doc.format} • {doc.size}
                  </span>
                </div>

                <div className="flex items-start gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {doc.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {doc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  Verified Engineering Document
                </span>

                <button
                  onClick={() => handleDownload(doc.title, doc.format)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400 group-hover:text-white" />
                  <span>Download Document</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Care Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#071B2E] via-[#0B253A] to-[#071B2E] text-white border border-emerald-500/20 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Sanmitra Care • Lifelong Support
            </span>
            <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
              Need assistance with warranty registration or module verification?
            </h4>
            <p className="text-xs text-slate-300">
              Our central technical support desk is ready to answer any engineering query.
            </p>
          </div>

          <a
            href={`mailto:${COMPANY_INFO.supportEmail}`}
            className="px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-md inline-flex items-center gap-2"
          >
            <span>Contact Support Desk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
