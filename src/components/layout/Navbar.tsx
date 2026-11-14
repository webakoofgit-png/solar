import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Home,
  Building2,
  Factory,
  Layers,
  PhoneCall,
  Sparkles,
  Cpu,
  FileText,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/solarData';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomeAtTop = location.pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    {
      label: 'Solutions',
      path: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'All Solar Solutions',
          desc: 'Comprehensive overview of EPC engineering',
          path: '/solutions',
          icon: Layers,
        },
        {
          title: 'Residential Solar',
          desc: 'Rooftops, luxury villas & societies',
          path: '/solutions/residential',
          icon: Home,
        },
        {
          title: 'Commercial & Industrial',
          desc: 'Corporate offices, factories & power plants',
          path: '/solutions/commercial',
          icon: Building2,
        },
        {
          title: 'Tier-1 PV Modules',
          desc: 'N-Type TOPCon & Mono PERC dual-glass',
          path: '/#modules',
          icon: Cpu,
        },
        {
          title: 'Technical Downloads (Care)',
          desc: 'Datasheets, manuals & warranty charters',
          path: '/#resources',
          icon: FileText,
        },
      ],
    },
    { label: 'Projects', path: '/projects' },
    { label: 'Why Us', path: '/why-us' },
    { label: 'FAQs', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' && !location.hash;
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isHomeAtTop
            ? 'bg-transparent py-5 border-b border-white/20'
            : isScrolled
            ? 'bg-[#f3f2ed]/95 backdrop-blur-md py-3.5 shadow-md border-b border-slate-200'
            : 'bg-[#f3f2ed]/95 lg:bg-[#f3f2ed]/90 backdrop-blur-md py-4 border-b border-slate-100 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo (Green Nations Power & Vikram Solar inspired) */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className={`relative w-10 h-10 flex items-center justify-center transition-colors ${isHomeAtTop ? 'bg-[#c8ff32] text-[#0b120e]' : 'bg-[#0b120e] text-[#c8ff32]'}`}>
                <Sun className="w-6 h-6 transition-transform duration-500 group-hover:rotate-45" />
              </div>
              <div className="flex flex-col">
                <span className={`font-display font-extrabold text-xl tracking-tight leading-none ${isHomeAtTop ? 'text-white' : 'text-[#0b120e]'}`}>
                  SANMITRA <span className={isHomeAtTop ? 'text-[#c8ff32]' : 'text-emerald-600'}>SOLAR</span>
                </span>
                <span className={`text-[10px] tracking-widest uppercase font-semibold transition-colors ${isHomeAtTop ? 'text-white/55' : 'text-slate-500 group-hover:text-emerald-700'}`}>
                  Clean Energy Systems
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((item) => {
                if (item.hasDropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setSolutionsDropdownOpen(true)}
                      onMouseLeave={() => setSolutionsDropdownOpen(false)}
                    >
                      <button
                        onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                          isActive(item.path)
                            ? isHomeAtTop ? 'text-[#c8ff32]' : 'text-emerald-700 font-bold bg-emerald-50'
                            : isHomeAtTop ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            solutionsDropdownOpen ? 'rotate-180 text-emerald-600' : 'text-slate-400'
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {solutionsDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-84 pt-2 z-50"
                          >
                            <div className="p-2 rounded-2xl bg-white border border-slate-200 shadow-2xl space-y-1">
                              {item.dropdownItems?.map((dropdown) => {
                                const IconComponent = dropdown.icon;
                                return (
                                  <Link
                                    key={dropdown.path}
                                    to={dropdown.path}
                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-emerald-50/70 transition-colors group"
                                  >
                                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors mt-0.5">
                                      <IconComponent className="w-4 h-4" />
                                    </div>
                                    <div>
                                      <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                                        {dropdown.title}
                                      </div>
                                      <div className="text-xs text-slate-500 line-clamp-1">
                                        {dropdown.desc}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
                      isActive(item.path)
                        ? isHomeAtTop ? 'text-[#c8ff32]' : 'text-emerald-700 font-bold bg-emerald-50'
                        : isHomeAtTop ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-emerald-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action CTAs (Matching Green Nations Power top bar) */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className={`hidden xl:inline-flex items-center gap-2 text-xs font-semibold transition-colors ${isHomeAtTop ? 'text-white/75 hover:text-white' : 'text-slate-700 hover:text-emerald-600'}`}
              >
                <div className={`w-7 h-7 flex items-center justify-center ${isHomeAtTop ? 'bg-white/10 text-[#c8ff32]' : 'rounded-full bg-emerald-100 text-emerald-700'}`}>
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-5 py-2.5 font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer bg-[#c8ff32] hover:bg-[#d5ff5a] text-[#0b120e] shadow-md shadow-slate-900/15"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Get Free Solar Consultation</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="px-3.5 py-1.5 font-display font-bold text-xs uppercase tracking-wider shadow-sm bg-[#c8ff32] text-[#0b120e]"
              >
                Consultation
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className={`p-2 transition-colors ${isHomeAtTop ? 'text-white hover:bg-white/10' : 'rounded-lg text-slate-800 hover:text-emerald-600 hover:bg-slate-100'}`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 lg:hidden bg-[#f3f2ed] overflow-y-auto flex flex-col justify-between"
          >
            {/* Mobile Header */}
            <div className="p-5 flex items-center justify-between border-b border-slate-200">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                  <Sun className="w-5 h-5" />
                </div>
                <span className="font-display font-bold text-lg text-[#0b120e]">
                  SANMITRA <span className="text-emerald-600">SOLAR</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-900"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="p-6 space-y-3 flex-1">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Navigation Menu
              </div>

              {navLinks.map((item) => (
                <div key={item.label} className="border-b border-slate-100 pb-2">
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-2 text-lg font-display font-medium ${
                      isActive(item.path) ? 'text-emerald-600 font-bold' : 'text-slate-800 hover:text-emerald-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.hasDropdown && (
                    <div className="pl-4 mt-1 space-y-2 border-l-2 border-emerald-400/30">
                      <Link
                        to="/solutions/residential"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-sm text-slate-600 hover:text-emerald-600"
                      >
                        • Residential Rooftop Solar
                      </Link>
                      <Link
                        to="/solutions/commercial"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-sm text-slate-600 hover:text-emerald-600"
                      >
                        • Commercial &amp; Industrial Solar
                      </Link>
                      <a
                        href="/#modules"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-sm text-slate-600 hover:text-emerald-600"
                      >
                        • Tier-1 PV Modules (N-Type &amp; PERC)
                      </a>
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-sm uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Request Free Proposal</span>
                </button>
              </div>
            </div>

            {/* Mobile Footer info */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 space-y-2">
              <p className="flex items-center gap-2 font-semibold">
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-emerald-600">
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p className="text-slate-500">
                Level 4, Solar Innovation Hub, SB Road, Pune, Maharashtra
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
