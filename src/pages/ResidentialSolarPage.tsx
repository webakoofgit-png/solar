import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Home,
  Sun,
  ShieldCheck,
  TrendingDown,
  Zap,
  CheckCircle2,
  ArrowRight,
  Info,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';

interface ResidentialSolarPageProps {
  onOpenQuote: () => void;
  onOpenQuoteWithDetails: (systemSize: string) => void;
}

export const ResidentialSolarPage: React.FC<ResidentialSolarPageProps> = ({
  onOpenQuote,
  onOpenQuoteWithDetails,
}) => {
  const packages = [
    {
      name: 'Starter Solar Villa',
      capacity: '3 kWp System',
      idealFor: '2-3 BHK Homes (Monthly Bill ₹2,500 - ₹4,500)',
      unitsMonthly: '375 - 400 Units / Month',
      roofArea: '250 - 300 Sq.Ft Shadow-Free Roof',
      specs: [
        '6x Tier-1 Mono PERC 540W Panels',
        '3kW Single-Phase Smart Inverter',
        'HDG Elevated or Flush Mounting Structure',
        'Bi-directional Net Meter Liaisoning Support',
        'Smartphone Generation Monitoring App',
      ],
      tag: 'Most Popular for Homes',
    },
    {
      name: 'Premium Family Residence',
      capacity: '5 kWp System',
      idealFor: '3-4 BHK Bungalows with Air Conditioners (Bill ₹4,500 - ₹8,500)',
      unitsMonthly: '625 - 675 Units / Month',
      roofArea: '400 - 480 Sq.Ft Shadow-Free Roof',
      specs: [
        '10x Tier-1 Bi-facial TopCon 540W Panels',
        '5kW Single/3-Phase Smart Grid Inverter',
        'Anodized Aluminium High-Clearance Pergola',
        'End-to-End DISCOM Inspection Clearance',
        'Dual Surge Protection SPD Switchgear',
      ],
      tag: 'Best Return on Investment',
    },
    {
      name: 'Net-Zero Luxury Estate',
      capacity: '10 kWp+ System',
      idealFor: 'Large Independent Bungalows & EV Owners (Bill ₹10,000+)',
      unitsMonthly: '1,250 - 1,350 Units / Month',
      roofArea: '800 - 1,000 Sq.Ft Roof Area',
      specs: [
        '20x Tier-1 N-Type Bi-facial Modules',
        '10kW 3-Phase Smart Hybrid-Ready Inverter',
        'Custom Architectural Gazebo Structure',
        'Optional 15kWh LiFePO4 Battery Integration',
        'VIP Priority Maintenance SLA Backing',
      ],
      tag: 'Complete Energy Independence',
    },
  ];

  const benefits = [
    {
      title: 'Up to 90% Reduction in Bills',
      description: 'Offset expensive tiered utility tariff brackets by using your own clean electricity during daytime hours.',
      icon: TrendingDown,
    },
    {
      title: 'Elevated Gazebo Structures',
      description: 'Retain your entire rooftop terrace for relaxation, family gatherings, and rooftop gardens while harvesting sun above.',
      icon: Layers,
    },
    {
      title: 'Zero Roof Leakage Design',
      description: 'Chemical anchoring fasteners and customized non-penetrative mounts ensure zero compromise to terrace waterproofing.',
      icon: ShieldCheck,
    },
    {
      title: 'Capital Subsidies Available',
      description: 'Eligible for direct bank transfer central/state solar subsidies under national rooftop renewable schemes.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#0b120e] text-white border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/home/residential-solar.jpg"
            alt="Residential solar villa"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b120e] via-[#0b120e]/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Solar Solutions', path: '/solutions' },
              { label: 'Residential Solar' },
            ]}
          />

          <div className="max-w-3xl mt-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Home className="w-3.5 h-3.5" />
              <span>Independent Homes, Villas &amp; Societies</span>
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
              ROOFTOP SOLAR FOR <span className="text-emerald-400">MODERN LIVING</span>.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-light">
              Transform your terrace into a clean, silent, money-saving power generator. Slash your monthly electricity bills by up to 90% while enhancing the architectural value of your home.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuote}
                className="px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>Request Home Feasibility Survey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Homeowner Advantage"
            title="WHY GO SOLAR"
            highlight="WITH SANMITRA?"
            subtitle="Engineered for maximum sunlight capture, zero roof damage, and seamless utility net metering integration."
            dark={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((b) => {
              const IconComp = b.icon;
              return (
                <div
                  key={b.title}
                  className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:bg-white transition-all shadow-sm"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-5">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sizing Packages */}
      <section className="py-24 bg-[#f3f2ed] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Recommended Systems"
            title="CURATED RESIDENTIAL"
            highlight="SOLAR PACKAGES"
            subtitle="Explore our standard residential capacities. Each system is customized to your exact rooftop geometry and electrical connection."
            dark={false}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {packages.map((pkg, idx) => (
              <div
                key={pkg.name}
                className={`relative rounded-3xl p-8 bg-white border shadow-xl flex flex-col justify-between transition-all duration-300 ${
                  idx === 1
                    ? 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-2xl'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {idx === 1 && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold font-display uppercase tracking-wider shadow-md">
                    {pkg.tag}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                      Residential Package
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-xs text-slate-700 font-mono font-semibold">
                      {pkg.roofArea}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">
                    {pkg.name}
                  </h3>

                  <div className="font-display text-3xl font-black text-emerald-700 mb-2">
                    {pkg.capacity}
                  </div>

                  <p className="text-xs text-slate-500 mb-4 font-medium">
                    {pkg.idealFor}
                  </p>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-6 flex justify-between">
                    <span className="text-slate-500">Est. Generation:</span>
                    <span className="font-bold text-slate-900">{pkg.unitsMonthly}</span>
                  </div>

                  {/* Specs list */}
                  <div className="space-y-2.5 mb-8">
                    {pkg.specs.map((spec) => (
                      <div key={spec} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onOpenQuoteWithDetails(`${pkg.capacity} (${pkg.name})`)}
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Request Proposal For {pkg.capacity}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Subsidies Notice */}
          <div className="mt-12 p-5 rounded-2xl bg-white border border-emerald-300 max-w-3xl mx-auto flex items-start gap-3 text-xs text-slate-700 shadow-sm">
            <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-900">Government Subsidies &amp; Net-Metering Notice:</strong> Residential rooftop solar systems are eligible for capital subsidies under the central government renewable portals. Subsidies, net-metering sanctions, and interconnection processing are governed by respective state electricity regulatory commissions and DISCOM norms.
            </div>
          </div>
        </div>
      </section>

      {/* Sizing Link Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            Not Sure Which Capacity You Need?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Use our smart solar calculator to estimate the exact kilowatt capacity and payback period based on your recent electricity bills.
          </p>
          <div className="pt-2">
            <Link
              to="/#calculator"
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-display font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center gap-2 shadow-md"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Launch Solar Calculator</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
