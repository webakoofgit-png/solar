import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageSquare, Zap, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../../data/solarData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSolution?: string;
  initialSystemSize?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialSolution = 'Residential Rooftop Solar',
  initialSystemSize = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    propertyType: 'Residential Villa',
    monthlyBill: '₹5,000 - ₹10,000',
    solution: initialSolution,
    message: initialSystemSize ? `Interested in estimated system size: ${initialSystemSize}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phone.trim() || formData.phone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.city.trim()) errs.city = 'Please specify your city / town';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#F5B700', '#FFD447', '#071B2E', '#ffffff'],
      });
    } catch {
      // fallback if canvas-confetti fails
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      city: '',
      propertyType: 'Residential Villa',
      monthlyBill: '₹5,000 - ₹10,000',
      solution: initialSolution,
      message: '',
    });
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sanmitra Solar Team, I am interested in ${formData.solution} for my ${formData.propertyType} in ${formData.city || 'Pune'}. Name: ${formData.fullName}, Phone: ${formData.phone}.`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative w-full max-w-2xl bg-[#071B2E] border border-amber-400/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-white"
          >
            {/* Header glow */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500" />

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              {!submitted ? (
                <>
                  <div className="flex items-center gap-2 mb-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                    <Zap className="w-4 h-4" />
                    <span>Free Solar Feasibility Consultation</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2">
                    Request an Engineering Proposal
                  </h3>
                  <p className="text-sm text-slate-300 mb-6">
                    Get an accurate 3D rooftop simulation, custom capacity recommendation, and net-metering feasibility report with zero commitment.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Sanjeev Wagh"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                        {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                        {errors.phone && <p className="text-xs text-rose-400 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. name@example.com"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                        {errors.email && <p className="text-xs text-rose-400 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          City / District *
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Pune, MH"
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                        {errors.city && <p className="text-xs text-rose-400 mt-1">{errors.city}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Property Type
                        </label>
                        <select
                          value={formData.propertyType}
                          onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                        >
                          <option value="Residential Villa">Residential Villa / Bungalow</option>
                          <option value="Apartment / Society">Apartment / Cooperative Housing Society</option>
                          <option value="Commercial Office">Commercial Office / Tech Park</option>
                          <option value="Industrial Factory">Industrial Factory / Warehouse</option>
                          <option value="Educational / Healthcare">Educational / Healthcare Institute</option>
                          <option value="Other">Other Custom Installation</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Average Monthly Bill
                        </label>
                        <select
                          value={formData.monthlyBill}
                          onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                        >
                          <option value="Under ₹3,000">Under ₹3,000</option>
                          <option value="₹3,000 - ₹5,000">₹3,000 - ₹5,000</option>
                          <option value="₹5,000 - ₹10,000">₹5,000 - ₹10,000</option>
                          <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                          <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                          <option value="Above ₹50,000 (Commercial/HT)">Above ₹50,000 (Commercial/HT)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Interested Solar Solution
                      </label>
                      <select
                        value={formData.solution}
                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option value="Residential Rooftop Solar">Residential Rooftop Solar</option>
                        <option value="Commercial & Corporate Solar">Commercial & Corporate Solar</option>
                        <option value="Industrial Solar Power Plant">Industrial Solar Power Plant</option>
                        <option value="Solar Maintenance & Health Audit">Solar Maintenance & Health Audit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Additional Notes / Roof Specs (Optional)
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention roof dimensions, shadow issues, or specific goals..."
                        className="w-full px-3.5 py-2 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-display font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-amber-300" />
                        <span>Submit Proposal Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-slate-400 text-xs text-center pt-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Privacy guaranteed. No marketing spam. Direct engineering assessment.</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-6 sm:py-8 space-y-4">
                  <div className="w-16 h-16 bg-amber-400/20 text-amber-400 rounded-full flex items-center justify-center mx-auto ring-8 ring-amber-400/10">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold">
                    Proposal Request Received!
                  </h3>

                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formData.fullName}</span>! Our renewable engineering team will review your requirement for{' '}
                    <span className="text-amber-400 font-semibold">{formData.solution}</span> in {formData.city} and share a preliminary 3D simulation within 24 hours.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700 text-left text-xs space-y-1.5 max-w-md mx-auto text-slate-300">
                    <p><span className="text-slate-400">Mobile:</span> {formData.phone}</p>
                    <p><span className="text-slate-400">Email:</span> {formData.email}</p>
                    <p><span className="text-slate-400">Property Type:</span> {formData.propertyType}</p>
                    <p><span className="text-slate-400">Est. Monthly Bill:</span> {formData.monthlyBill}</p>
                    <p className="text-amber-400/80 italic pt-1 border-t border-slate-800 text-[11px]">
                      *Demo state: In production, this trigger connects directly to CRM API webhook.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs uppercase tracking-wider transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Instantly</span>
                    </a>

                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs uppercase tracking-wider transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
