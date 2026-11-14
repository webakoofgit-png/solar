import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sun,
  Search,
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Info,
  ArrowRight,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { FAQS, COMPANY_INFO } from '../data/solarData';

export const FaqPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaqId, setOpenFaqId] = useState<string | null>('f1');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General Solar & Net Metering' },
    { id: 'residential', label: 'Residential Solar' },
    { id: 'commercial', label: 'Commercial & Financial' },
    { id: 'financial', label: 'Subsidies & Tax Benefits' },
    { id: 'maintenance', label: 'Maintenance & Lifespan' },
  ];

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory =
      activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="bg-[#0b120e] text-slate-100 min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#08100b] border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home/industrial-solar.jpg"
            alt="Solar FAQ banner"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08100b] via-[#08100b]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Solar FAQs' }]} />

          <div className="max-w-3xl mt-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Knowledge Base &amp; Subsidies</span>
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
              FREQUENTLY ASKED <span className="text-amber-400">QUESTIONS</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Everything you need to know about rooftop solar systems, bi-directional net metering, government subsidies, equipment warranties, and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-[#08100b] border-b border-slate-800/80 sticky top-[72px] z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search solar questions (e.g., subsidy, net metering, warranty)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-sm">No answers found matching your query.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 px-4 py-2 bg-amber-400 text-slate-950 rounded-lg text-xs font-bold"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-[#08100b] border border-slate-800 overflow-hidden transition-colors hover:border-slate-700"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-white">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-amber-400 text-slate-950' : 'text-slate-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}

          {/* Legal / Regulatory Disclaimer */}
          <div className="mt-12 p-5 rounded-2xl bg-slate-900/60 border border-amber-400/20 flex items-start gap-3 text-xs text-slate-300">
            <Info className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Regulatory Disclaimer:</strong> Capital subsidies, power wheeling regulations, feed-in tariffs, and bi-directional net-metering schemes vary across states and are subject to periodic revisions by local state electricity regulatory commissions and DISCOMs.
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-gradient-to-t from-[#08100b] to-[#0b120e] border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-400/10 text-amber-400 border border-amber-400/30 flex items-center justify-center mx-auto">
            <MessageCircle className="w-7 h-7" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Have a Specific Solar Question Not Answered Here?
          </h2>

          <p className="text-sm text-slate-300 max-w-lg mx-auto">
            Our clean energy specialists are ready to review your property layout, roof type, and electrical tariff rules.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
            >
              <span>Contact Solar Specialists</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Sanmitra Solar! I have a question about solar installation.')}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
            >
              <span>Quick WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
