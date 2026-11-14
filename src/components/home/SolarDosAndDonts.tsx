import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ShieldCheck, AlertTriangle, PhoneCall } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { COMPANY_INFO } from '../../data/solarData';

export const SolarDosAndDonts: React.FC = () => {
  const dosList = [
    'Clean panels during early morning or late evening hours with plain, soft water to prevent thermal shock to the tempered glass.',
    'Ensure an annual electrical inspection by certified technicians to verify string DC voltage and MC4 connector tightness.',
    'Keep nearby trees and foliage neatly trimmed to prevent cast shadows and dangerous thermal hotspot degradation.',
    'Monitor your smartphone inverter telemetry app weekly to spot sudden string drop-offs or inverter error codes promptly.',
    'Ensure proper chemical earthing and lightning surge protection (SPD) grounding are inspected before each monsoon season.',
    'Keep Class-C / dry chemical powder fire extinguishers accessible near inverter switchgear and battery banks.',
  ];

  const dontsList = [
    'Never step, sit, lean, or place heavy objects directly on the glass surface of solar modules.',
    'Never use abrasive wire brushes, harsh chemical detergents, bleach, or acidic cleaning agents on the panel surface.',
    'Never attempt to touch, disconnect, or splice live high-voltage DC cables without turning off the DC isolator switch.',
    'Do not spray high-pressure jet water directly at the underside junction boxes or inverter vents.',
    'Do not ignore rust, structural wobbling, or civil footing sealant erosion on your rooftop elevated frames.',
    'Never tamper with the bi-directional Net Meter seal or utility DISCOM electrical service connection boxes.',
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Subtle green ambient accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Operational Safety"
          title="SOLAR SAFETY"
          highlight="DO'S & DON'TS"
          subtitle="Essential guidelines to maximize generation efficiency, safeguard warranty validity, and ensure total household electrical safety."
          dark={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12">
          {/* DO'S CARD (Emerald Green Theme) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-10 bg-emerald-50/70 border-2 border-emerald-300 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-emerald-600 text-white font-display font-bold text-xs uppercase tracking-widest px-6 py-2 rounded-bl-2xl shadow-md flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>Recommended Practices</span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-emerald-950 uppercase tracking-tight">
                    THE DO'S
                  </h3>
                  <p className="text-xs text-emerald-800 font-medium">
                    Best practices for 25+ years of peak solar generation
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {dosList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-emerald-200 text-xs text-emerald-900 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Adhering to these steps preserves your 25-Year Manufacturer Warranty.</span>
            </div>
          </motion.div>

          {/* DON'TS CARD (Coral / Rose Red Theme) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-10 bg-rose-50/70 border-2 border-rose-300 shadow-xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-rose-600 text-white font-display font-bold text-xs uppercase tracking-widest px-6 py-2 rounded-bl-2xl shadow-md flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              <span>Critical Hazards</span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center shadow-lg shadow-rose-600/20">
                  <XCircle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-rose-950 uppercase tracking-tight">
                    THE DON'TS
                  </h3>
                  <p className="text-xs text-rose-800 font-medium">
                    Strict actions to avoid property damage and shock hazards
                  </p>
                </div>
              </div>

              <ul className="space-y-4">
                {dontsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <XCircle className="w-3.5 h-3.5 text-rose-800" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-200 text-xs text-rose-900 font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              <span>Unauthorized modifications can void statutory DISCOM net-metering approvals.</span>
            </div>
          </motion.div>
        </div>

        {/* Support hotline bar */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Require Emergency Technical Assistance or Panel Servicing?
              </div>
              <div className="text-xs text-slate-600">
                Our certified technicians are available Mon–Sat for preventative audits and maintenance.
              </div>
            </div>
          </div>

          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-display font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call Helpline: {COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
