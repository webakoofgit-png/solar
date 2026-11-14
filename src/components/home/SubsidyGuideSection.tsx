import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, ArrowRight, Info, ShieldCheck, Zap } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface SubsidyGuideSectionProps {
  onOpenQuoteWithDetails?: (systemSize: string) => void;
}

export const SubsidyGuideSection: React.FC<SubsidyGuideSectionProps> = ({
  onOpenQuoteWithDetails,
}) => {
  const subsidyTiers = [
    {
      capacity: '1 kW Capacity',
      subsidy: '₹ 30,000',
      label: 'Direct Bank Transfer',
      ideal: 'Small homes with monthly consumption ~125 units',
      monthlySaving: 'Approx ₹1,000 - ₹1,200/mo',
      highlight: false,
    },
    {
      capacity: '2 kW Capacity',
      subsidy: '₹ 60,000',
      label: 'Direct Bank Transfer',
      ideal: '2-3 BHK homes with monthly consumption ~250 units',
      monthlySaving: 'Approx ₹2,000 - ₹2,500/mo',
      highlight: false,
    },
    {
      capacity: '3 kW to 10 kW',
      subsidy: '₹ 78,000',
      label: 'Maximum Capital Subsidy',
      ideal: '3-4 BHK villas, AC owners, monthly consumption 375+ units',
      monthlySaving: 'Approx ₹3,500 - ₹8,000+/mo',
      highlight: true,
      tag: 'Maximum Subsidy Tier',
    },
    {
      capacity: 'Housing Societies (GHS/RWA)',
      subsidy: '₹ 18,000 / kW',
      label: 'Common Facility Load',
      ideal: 'Elevators, water pumping stations, common terrace lighting',
      monthlySaving: 'Up to ₹90,000/mo for 50kW society system',
      highlight: false,
      tag: 'Up to 500 kW',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Government Incentives"
          title="CENTRAL & STATE"
          highlight="ROOFTOP SUBSIDIES"
          subtitle="Under national renewable schemes (such as the PM Surya Ghar Muft Bijli Yojana), residential property owners receive substantial direct subsidies credited directly to their bank accounts."
          dark={false}
        />

        {/* Subsidy Tiers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {subsidyTiers.map((tier, idx) => (
            <motion.div
              key={tier.capacity}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl p-7 border flex flex-col justify-between transition-all duration-300 relative ${
                tier.highlight
                  ? 'bg-emerald-50/70 border-emerald-400 shadow-xl ring-2 ring-emerald-500/20'
                  : 'bg-slate-50 border-slate-200 hover:border-emerald-300 hover:bg-white shadow-md'
              }`}
            >
              {tier.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white font-display font-bold text-[10px] uppercase tracking-wider shadow-md whitespace-nowrap">
                  {tier.tag}
                </div>
              )}

              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  {tier.capacity}
                </div>

                <div className="font-display font-extrabold text-3xl sm:text-4xl text-emerald-700 tracking-tight mb-1">
                  {tier.subsidy}
                </div>

                <div className="text-xs font-bold text-slate-900 mb-4 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{tier.label}</span>
                </div>

                <div className="p-3 rounded-xl bg-white/90 border border-slate-200/80 text-xs text-slate-700 space-y-2 mb-6 shadow-sm">
                  <div>
                    <span className="text-slate-400 block text-[11px]">Best Suited For:</span>
                    <span className="font-medium text-slate-800">{tier.ideal}</span>
                  </div>
                  <div className="pt-1 border-t border-slate-100 flex justify-between">
                    <span className="text-slate-400 text-[11px]">Monthly Saving:</span>
                    <span className="font-bold text-emerald-700 text-[11px]">{tier.monthlySaving}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenQuoteWithDetails && onOpenQuoteWithDetails(`Subsidy Tier: ${tier.capacity}`)}
                className={`w-full py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  tier.highlight
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-slate-900 hover:bg-emerald-600 text-white'
                }`}
              >
                <span>Claim Subsidy Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* 3 Step Process Bar for Subsidies */}
        <div className="mt-14 p-8 rounded-3xl bg-slate-900 text-white border border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              Hassle-Free Processing
            </span>
            <h3 className="font-display text-2xl font-bold mt-1 text-white">
              How Sanmitra Handles Your Subsidy In 3 Steps
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center font-display">
                1
              </div>
              <h4 className="font-display font-bold text-white text-sm">
                National Portal Registration
              </h4>
              <p className="text-slate-400 leading-relaxed">
                We submit your consumer electricity connection details and site feasibility paperwork on the official National Rooftop Solar portal.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center font-display">
                2
              </div>
              <h4 className="font-display font-bold text-white text-sm">
                DISCOM Meter Inspection
              </h4>
              <p className="text-slate-400 leading-relaxed">
                Following installation, our engineers coordinate with your local electricity board inspectors to test the bi-directional net meter.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/80 space-y-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center font-display">
                3
              </div>
              <h4 className="font-display font-bold text-white text-sm">
                Direct Bank Transfer (DBT)
              </h4>
              <p className="text-slate-400 leading-relaxed">
                Once the commissioning certificate is issued online, the subsidy amount is credited directly into your linked bank account within 30 days.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-center gap-2 text-slate-400 text-[11px] text-center">
            <Info className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              Subsidy eligibility and rates are subject to MNRE and state electricity board guidelines.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
