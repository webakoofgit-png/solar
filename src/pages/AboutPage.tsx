import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Sun,
  Shield,
  Zap,
  Target,
  Eye,
  Award,
  ArrowRight,
  CheckCircle2,
  Users,
  Compass,
  Lightbulb,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { TEAM_MEMBERS, COMPANY_INFO } from '../data/solarData';

interface AboutPageProps {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  const values = [
    {
      icon: Shield,
      title: 'Engineering Rigor',
      description: 'We do not cut corners. Every structural bracket, cable conduit, and isolator is selected for a 25-year operational lifecycle.',
    },
    {
      icon: Compass,
      title: 'Radical Transparency',
      description: 'Transparent energy simulations without inflated yield projections. You receive honest engineering telemetry, not sales exaggerations.',
    },
    {
      icon: Target,
      title: 'Zero Leakage Guarantee',
      description: 'We safeguard your roof integrity through non-penetrative aluminium fixtures and industrial chemical anchors with multi-layer waterproofing.',
    },
    {
      icon: Lightbulb,
      title: 'Lifelong Partnership',
      description: 'Solar is a 25-year commitment. Our active IoT monitoring desks and on-site engineering crews guarantee prompt, hassle-free aftercare.',
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Inner Page Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#071B2E] text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=2000&q=80"
            alt="Solar array at dusk"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071B2E] via-[#071B2E]/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'About Us' }]} />

          <div className="max-w-3xl mt-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sun className="w-3.5 h-3.5" />
              <span>Architects of Sustainable Power</span>
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
              PIONEERING INDIA'S <span className="text-emerald-400">CLEAN ENERGY</span> REVOLUTION.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Founded on the conviction that clean energy must be accessible, reliable, and financially transformative, Sanmitra Solar is redefining renewable engineering for modern homeowners, businesses, and industrial leaders.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Story Section */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
                Our Genesis &amp; Philosophy
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Engineering Clean Energy With Uncompromised Integrity.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                For years, the rooftop solar industry was plagued by generic installations, subpar structural brackets, and zero post-sale responsibility. Sanmitra Solar was established to solve this engineering deficit.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We approach each project not as a simple equipment transaction, but as a customized micro-power plant engineered to generate peak kilowatt-hours for over 25 years. By combining 3D shadow simulations, certified Tier-1 components, and in-house regulatory liaisoning, we take end-to-end ownership of your energy independence.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4 border-t border-slate-200">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-display text-2xl font-bold text-emerald-700">100%</div>
                  <div className="text-xs text-slate-500 mt-1">Tier-1 Approved Components</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-display text-2xl font-bold text-emerald-700">25 Years</div>
                  <div className="text-xs text-slate-500 mt-1">Linear Performance Backing</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=1200&q=80"
                  alt="Solar engineering inspection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-1">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Quality Standard</span>
                </div>
                <p className="text-xs text-slate-600">
                  Adherence to IEC 61215, IEC 61730 &amp; IS 14286 solar standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500 shadow-xl relative overflow-hidden transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Our Purpose
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-4">
                Our Mission
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To accelerate India's transition to decentralized clean energy by delivering high-yield, architecturally integrated solar systems backed by transparent engineering, rigorous safety standards, and lifelong operational support.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500 shadow-xl relative overflow-hidden transition-all">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Our Horizon
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-4">
                Our Vision
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To become the most trusted and respected renewable energy EPC brand in the region—celebrated for transforming rooftops into profitable clean assets, eliminating carbon emissions, and setting the benchmark for engineering elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Guiding Principles"
            title="THE VALUES THAT"
            highlight="DEFINE US"
            subtitle="Our team is bound by an unrelenting commitment to technical excellence, customer honesty, and environmental purpose."
            dark={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((val) => {
              const IconComp = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-white transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Team */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Leadership Team"
            title="THE MINDS BEHIND"
            highlight="SANMITRA SOLAR"
            subtitle="Experienced renewable power architects, certified high-voltage electrical engineers, and dedicated client advocates."
            dark={false}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-emerald-500 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h4 className="font-display text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-xs font-bold text-emerald-600 mt-0.5">
                    {member.role}
                  </div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-0.5 mb-2">
                    {member.experience}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Ready to Transition to Clean, Sustainable Power?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Book a free site feasibility survey today with our certified solar engineers.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-all shadow-xl cursor-pointer inline-flex items-center gap-2"
            >
              <span>Request Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
