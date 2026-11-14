import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building,
  Sparkles,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { COMPANY_INFO } from '../data/solarData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    propertyType: 'Residential Villa',
    monthlyBill: '₹5,000 - ₹10,000',
    solution: 'Residential Rooftop Solar',
    message: '',
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

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F5B700', '#FFD447', '#071B2E', '#ffffff'],
      });
    } catch {
      // fallback
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
      solution: 'Residential Rooftop Solar',
      message: '',
    });
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Sanmitra Solar! I am interested in ${formData.solution} for my ${formData.propertyType} in ${formData.city || 'Pune'}. Name: ${formData.fullName}, Phone: ${formData.phone}.`
  );

  return (
    <div className="bg-[#071B2E] text-slate-100 min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#040f1a] border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Sanmitra Solar"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#040f1a] via-[#040f1a]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />

          <div className="max-w-3xl mt-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Building className="w-3.5 h-3.5" />
              <span>Renewable Engineering Hub</span>
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
              CONNECT WITH OUR <span className="text-amber-400">ENGINEERS</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Schedule a comprehensive on-site shadow feasibility assessment or speak directly with our certified photovoltaic architects.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Contact Info & Map (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-amber-400 text-xs font-semibold uppercase tracking-wider">
                  Direct Inquiries
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-1 mb-4">
                  We're Here to Power Your Sustainable Transition.
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Have questions regarding your terrace geometry, utility net-metering sanctions, or central government capital subsidies? Reach our desk anytime.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white mb-1">
                      Registered Office
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white mb-1">
                      Engineering Helpline
                    </h4>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-xs text-amber-400 hover:text-amber-300 font-semibold"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      {COMPANY_INFO.workingHours}
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white mb-1">
                      Email Inquiries
                    </h4>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-xs text-amber-400 hover:text-amber-300 font-semibold block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <a
                      href={`mailto:${COMPANY_INFO.supportEmail}`}
                      className="text-[11px] text-slate-400 hover:text-slate-300 block"
                    >
                      Support: {COMPANY_INFO.supportEmail}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Quick Link */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Sanmitra Solar Team! I would like to inquire about a solar feasibility site visit.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Instant WhatsApp Consultation</span>
                  </a>
                </div>
              </div>

              {/* Embedded Map Representation */}
              <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#040f1a] relative shadow-lg">
                <div className="p-4 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold text-white">Innovation Center Location</span>
                  <span className="text-amber-400">Pune, Maharashtra</span>
                </div>
                {/* Visual Map Graphic / Embed Frame */}
                <div className="aspect-[16/9] relative bg-slate-900 flex items-center justify-center p-6 text-center">
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="font-display font-bold text-sm text-white">
                      Sanmitra Solar Headquarters
                    </div>
                    <div className="text-[11px] text-slate-400 max-w-xs">
                      Senapati Bapat Road, Pune, Maharashtra 411016
                    </div>
                    <a
                      href="https://maps.google.com/?q=Senapati+Bapat+Road+Pune"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-2 text-xs text-amber-400 hover:underline font-semibold"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-[#040f1a] border border-amber-400/25 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-t-3xl" />

                {!submitted ? (
                  <>
                    <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span>Zero-Obligation Proposal</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                      Schedule a Site Feasibility Assessment
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
                      Please provide your details below. Our technical team will generate a custom 3D rooftop layout and shadow simulation within 24 hours.
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
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
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
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
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
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
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
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
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
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
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
                            className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
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
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                        >
                          <option value="Residential Rooftop Solar">Residential Rooftop Solar</option>
                          <option value="Commercial & Corporate Solar">Commercial & Corporate Solar</option>
                          <option value="Industrial Solar Power Plant">Industrial Solar Power Plant</option>
                          <option value="Solar Maintenance & Health Audit">Solar Maintenance & Health Audit</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Message / Specific Roof Details
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your rooftop area, current sanctions, or specific requirements..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-display font-bold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Proposal Request</span>
                        </button>
                      </div>

                      <div className="pt-2 flex items-center justify-center gap-2 text-slate-400 text-xs text-center">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Ready for future CRM API integration. Client-side verified.</span>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-10 space-y-5">
                    <div className="w-20 h-20 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center mx-auto ring-8 ring-amber-400/10">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>

                    <h3 className="font-display text-3xl font-bold text-white">
                      Proposal Request Received!
                    </h3>

                    <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-bold text-white">{formData.fullName}</span>! Our engineering team has logged your interest for{' '}
                      <span className="text-amber-400 font-semibold">{formData.solution}</span> in {formData.city}. We will reach out within 24 hours to schedule the shadow feasibility survey.
                    </p>

                    <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto text-slate-300">
                      <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span className="text-slate-400">Mobile:</span>
                        <span className="text-white font-mono">{formData.phone}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span className="text-slate-400">Email:</span>
                        <span className="text-white">{formData.email}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span className="text-slate-400">Property Type:</span>
                        <span className="text-white">{formData.propertyType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Est. Monthly Bill:</span>
                        <span className="text-amber-400 font-semibold">{formData.monthlyBill}</span>
                      </div>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Continue On WhatsApp</span>
                      </a>

                      <button
                        onClick={handleReset}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-display font-semibold text-xs uppercase tracking-wider transition-colors"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 pt-3">
                      *Demo notice: Form submission has been safely simulated on the frontend.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
