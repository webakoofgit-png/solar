import React, { useState, useId } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  Zap,
  TrendingDown,
  Clock,
  Leaf,
  Info,
  ArrowRight,
  ShieldCheck,
  Building,
  Home,
  Factory,
  CheckCircle2,
  Sparkles,
  MapPin,
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface SavingsCalculatorProps {
  onOpenQuoteWithDetails?: (systemSize: string) => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({
  onOpenQuoteWithDetails,
}) => {
  const billSliderId = useId();
  const [selectedCity, setSelectedCity] = useState('Pune, Maharashtra');
  const [monthlyBill, setMonthlyBill] = useState<number>(6000);
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial' | 'industrial'>('residential');

  // Realistic demo tariff values in INR/kWh
  const tariffRates = {
    residential: 8.5,
    commercial: 11.8,
    industrial: 9.8,
  };

  // Capital costs estimated per kWp before subsidy
  const costPerKw = {
    residential: 56000,
    commercial: 48000,
    industrial: 42000,
  };

  const currentRate = tariffRates[propertyType];
  const currentCostPerKw = costPerKw[propertyType];

  // System sizing math:
  // Monthly units consumed = Monthly Bill / Tariff Rate
  // 1 kWp solar generates approx 125 units (kWh) per month
  const monthlyUnits = monthlyBill / currentRate;
  const rawSystemSize = monthlyUnits / 125;
  const recommendedSize = Math.max(1, Math.round(rawSystemSize * 10) / 10);

  // Required rooftop area: approx 85 to 100 sq.ft per kWp
  const requiredRooftopArea = Math.round(recommendedSize * 90);

  // Financial returns:
  const monthlyGeneration = recommendedSize * 125;
  const estimatedMonthlySavings = Math.min(monthlyBill, Math.round(monthlyGeneration * currentRate * 0.92));
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;

  // Subsidy Calculation (PM Surya Ghar scheme formula for residential):
  let estimatedSubsidy = 0;
  if (propertyType === 'residential') {
    if (recommendedSize <= 1) {
      estimatedSubsidy = 30000;
    } else if (recommendedSize <= 2) {
      estimatedSubsidy = 60000;
    } else {
      estimatedSubsidy = 78000; // max cap for 3kW+
    }
  }

  // Estimated gross capital cost
  const grossSystemCost = Math.round(recommendedSize * currentCostPerKw);
  // Net investment after subsidy
  const netInvestmentCost = Math.max(0, grossSystemCost - estimatedSubsidy);

  // 25-Year Net Savings with modest tariff inflation
  const estimated25YearSavings = Math.round((estimatedAnnualSavings * 25 * 1.15) - netInvestmentCost);

  // Estimated payback in years
  const estimatedPaybackYears = Math.max(
    2.5,
    Math.min(5.5, Number((netInvestmentCost / estimatedAnnualSavings).toFixed(1)))
  );

  const handleClaimProposal = () => {
    if (onOpenQuoteWithDetails) {
      onOpenQuoteWithDetails(`${recommendedSize} kWp (${propertyType.toUpperCase()} in ${selectedCity})`);
    }
  };

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-[#17251c] to-[#0b120e] text-white relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Green Nations Power Inspired Tool"
          title="SOLAR ROOFTOP"
          highlight="CALCULATOR"
          subtitle="Calculate your recommended system size, estimated capital cost, government subsidy, and 25-year lifetime savings instantly."
          dark={true}
        />

        {/* Dashboard Main Container */}
        <div className="bg-slate-900/80 backdrop-blur-xl border border-emerald-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Top Emerald Gradient Line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Inputs Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                <Calculator className="w-4 h-4" />
                <span>Simulation Parameters</span>
              </div>

              {/* Property Type Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  1. Property Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { type: 'residential' as const, label: 'Residential', icon: Home },
                    { type: 'commercial' as const, label: 'Commercial', icon: Building },
                    { type: 'industrial' as const, label: 'Industrial', icon: Factory },
                  ].map((item) => {
                    const IconComp = item.icon;
                    const isSelected = propertyType === item.type;
                    return (
                      <button
                        key={item.type}
                        type="button"
                        onClick={() => {
                          setPropertyType(item.type);
                          if (item.type === 'commercial' && monthlyBill < 20000) setMonthlyBill(35000);
                          if (item.type === 'industrial' && monthlyBill < 50000) setMonthlyBill(120000);
                          if (item.type === 'residential' && monthlyBill > 35000) setMonthlyBill(7500);
                        }}
                        className={`p-3 rounded-2xl border flex flex-col items-center gap-1.5 text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-600 border-emerald-400 text-white font-bold shadow-lg shadow-emerald-900/40'
                            : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800'
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* City Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                  2. Project Location / City
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-emerald-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-emerald-400 transition-colors"
                  >
                    <option value="Pune, Maharashtra">Pune, Maharashtra</option>
                    <option value="Mumbai / MMR, Maharashtra">Mumbai / MMR, Maharashtra</option>
                    <option value="Nashik, Maharashtra">Nashik, Maharashtra</option>
                    <option value="Nagpur, Maharashtra">Nagpur, Maharashtra</option>
                    <option value="Chhatrapati Sambhajinagar, Maharashtra">Chhatrapati Sambhajinagar, Maharashtra</option>
                    <option value="Ahmedabad, Gujarat">Ahmedabad, Gujarat</option>
                    <option value="Bengaluru, Karnataka">Bengaluru, Karnataka</option>
                  </select>
                </div>
              </div>

              {/* Monthly Electricity Bill Input & Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor={billSliderId} className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    3. Average Monthly Electricity Bill
                  </label>
                  <span className="font-display font-black text-2xl text-emerald-400">
                    ₹ {monthlyBill.toLocaleString('en-IN')}
                  </span>
                </div>

                <input
                  id={billSliderId}
                  type="range"
                  min={propertyType === 'residential' ? 1500 : propertyType === 'commercial' ? 10000 : 30000}
                  max={propertyType === 'residential' ? 40000 : propertyType === 'commercial' ? 250000 : 800000}
                  step={propertyType === 'residential' ? 500 : 2500}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />

                <div className="flex justify-between text-[11px] text-slate-400 mt-2">
                  <span>
                    Min: ₹{propertyType === 'residential' ? '1,500' : propertyType === 'commercial' ? '10,000' : '30,000'}
                  </span>
                  <span>
                    Max: ₹{propertyType === 'residential' ? '40,000+' : propertyType === 'commercial' ? '2.5L+' : '8.0L+'}
                  </span>
                </div>
              </div>

              {/* Subsidies Tier Banner (Inspired by Green Nations Power) */}
              <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 space-y-1.5">
                <div className="flex items-center justify-between font-bold text-white">
                  <span>PM Surya Ghar Direct Subsidy</span>
                  <span className="text-emerald-400">
                    {propertyType === 'residential' ? `₹ ${estimatedSubsidy.toLocaleString('en-IN')}` : 'Tax Depreciation (40%)'}
                  </span>
                </div>
                <p className="text-[11px] text-emerald-400/90 leading-relaxed">
                  {propertyType === 'residential'
                    ? '1 kW: ₹30,000 | 2 kW: ₹60,000 | 3 kW+: ₹78,000 max direct subsidy credited to bank.'
                    : 'Commercial & Industrial systems qualify for 40% accelerated tax depreciation under IT Sec 32.'}
                </p>
              </div>
            </div>

            {/* Right Output Grid (7 cols) - Clean 6 White Cards Layout */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {/* 1. Recommended Size */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-md flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    System Size
                  </span>
                  <div className="font-display text-2xl sm:text-3xl font-black text-emerald-700 tracking-tight my-1">
                    {recommendedSize} <span className="text-base font-bold text-slate-600">kW</span>
                  </div>
                  <span className="text-[10px] text-slate-500">
                    Optimal sunlight capacity
                  </span>
                </div>

                {/* 2. Rooftop Area */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-md flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Roof Area Needed
                  </span>
                  <div className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight my-1">
                    {requiredRooftopArea} <span className="text-base font-bold text-slate-600">sq.ft</span>
                  </div>
                  <span className="text-[10px] text-slate-500">
                    Shadow-free terrace
                  </span>
                </div>

                {/* 3. Estimated Cost */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-md flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Est. System Cost
                  </span>
                  <div className="font-display text-xl sm:text-2xl font-black text-slate-900 tracking-tight my-1">
                    ₹ {(grossSystemCost / 100000).toFixed(2)} L
                  </div>
                  <span className="text-[10px] text-slate-500">
                    Gross investment*
                  </span>
                </div>

                {/* 4. Estimated Subsidy */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 text-slate-900 border border-emerald-300 shadow-md flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                    Govt. Subsidy
                  </span>
                  <div className="font-display text-xl sm:text-2xl font-black text-emerald-700 tracking-tight my-1">
                    ₹ {estimatedSubsidy > 0 ? `${(estimatedSubsidy / 1000).toFixed(0)}k` : '40% Tax Dep.'}
                  </div>
                  <span className="text-[10px] text-emerald-800 font-semibold">
                    Direct bank credit
                  </span>
                </div>

                {/* 5. Annual Savings */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-md flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    Annual Savings
                  </span>
                  <div className="font-display text-xl sm:text-2xl font-black text-emerald-600 tracking-tight my-1">
                    ₹ {estimatedAnnualSavings.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-slate-500">
                    ~90% bill reduction
                  </span>
                </div>

                {/* 6. 25-Year Net Savings */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white text-slate-900 border border-slate-200 shadow-md flex flex-col justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                    25-Yr Net Savings
                  </span>
                  <div className="font-display text-xl sm:text-2xl font-black text-slate-900 tracking-tight my-1">
                    ₹ {(estimated25YearSavings / 100000).toFixed(1)} L
                  </div>
                  <span className="text-[10px] text-slate-500">
                    Payback: {estimatedPaybackYears} yrs
                  </span>
                </div>
              </div>

              {/* Action Button & Disclaimer */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleClaimProposal}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-display font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-emerald-900/50 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Get Custom Engineering Proposal For {recommendedSize} kW System</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <div className="flex items-center justify-center gap-2 text-slate-400 text-xs text-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>
                    Zero commitment. Includes free 3D drone roof mapping &amp; DISCOM net-metering feasibility check.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
