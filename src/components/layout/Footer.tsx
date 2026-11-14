import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Check,
  ArrowUp,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/solarData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040f1a] text-slate-300 border-t border-slate-800/80 relative overflow-hidden">
      {/* Subtle background solar grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#F5B700_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      {/* Top Banner / Newsletter */}
      <div className="border-b border-slate-800/60 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#071B2E] via-[#0d2740] to-[#071B2E] p-8 sm:p-10 rounded-2xl border border-emerald-500/30 shadow-2xl">
            <div className="max-w-xl text-center lg:text-left">
              <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2 inline-block">
                Stay Solar Informed
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Subscribe to Renewable Insights
              </h3>
              <p className="text-sm text-slate-400">
                Receive quarterly updates on state rooftop subsidies, net metering tariff updates, and cutting-edge clean energy innovations.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 flex-1 transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {subscribed ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-950" />
                      <span>Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <span>Join</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 text-center lg:text-left">
                We respect your privacy. Unsubscribe anytime with one click.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Col 1 & 2: Brand Info */}
            <div className="lg:col-span-2 space-y-5">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 shadow-md">
                  <Sun className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-2xl tracking-tight text-white leading-none">
                    SANMITRA <span className="text-amber-400">SOLAR</span>
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-medium text-slate-400">
                    Clean Energy Systems
                  </span>
                </div>
              </Link>

              <p className="text-sm text-slate-400 leading-relaxed pr-6">
                Sanmitra Solar is an engineering-driven clean energy solutions provider committed to delivering world-class rooftop, commercial, and industrial photovoltaic installations. Empowering India's transition to self-sustaining clean power.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-amber-400 hover:text-slate-950 flex items-center justify-center text-slate-300 transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 3: Quick Navigation */}
            <div>
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
                </li>
                <li>
                  <Link to="/why-us" className="hover:text-amber-400 transition-colors">Why Choose Us</Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-amber-400 transition-colors">Projects Portfolio</Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-amber-400 transition-colors">Solar FAQs & Subsidies</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Engineering</Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Solar Solutions */}
            <div>
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
                Solar Solutions
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/solutions" className="hover:text-amber-400 transition-colors">Solutions Overview</Link>
                </li>
                <li>
                  <Link to="/solutions/residential" className="hover:text-amber-400 transition-colors">Residential Rooftop Solar</Link>
                </li>
                <li>
                  <Link to="/solutions/commercial" className="hover:text-amber-400 transition-colors">Commercial & Corporate Solar</Link>
                </li>
                <li>
                  <Link to="/solutions/commercial" className="hover:text-amber-400 transition-colors">Industrial Solar Plants</Link>
                </li>
                <li>
                  <a href="/#modules" className="hover:text-amber-400 transition-colors">Tier-1 PV Modules (N-Type & PERC)</a>
                </li>
                <li>
                  <a href="/#resources" className="hover:text-amber-400 transition-colors">Technical Datasheets &amp; Manuals</a>
                </li>
                <li>
                  <Link to="/solutions" className="hover:text-amber-400 transition-colors">Preventive Maintenance & O&M</Link>
                </li>
                <li>
                  <Link to="/solutions" className="hover:text-amber-400 transition-colors">Net Metering Liaisoning</Link>
                </li>
              </ul>
            </div>

            {/* Col 5: Contact Information */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2.5">
                Contact & Support
              </h4>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <span className="text-slate-400 text-xs leading-relaxed">
                    Level 4, Solar Innovation Hub, Senapati Bapat Road, Pune, Maharashtra 411016
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white text-xs">
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white text-xs">
                    {COMPANY_INFO.email}
                  </a>
                </div>

                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Mon - Sat: 9:00 AM - 6:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer and Bottom Bar */}
      <div className="bg-[#020810] py-6 border-t border-slate-900 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">Placeholder Notice:</strong> {COMPANY_INFO.disclaimer}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} SANMITRA SOLAR. All rights reserved. Precision Engineered Renewable Power.</p>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
