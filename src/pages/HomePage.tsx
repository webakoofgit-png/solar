import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Check, Factory, Gauge, Home, IndianRupee, Layers3, ShieldCheck, Sun, Zap } from 'lucide-react';
import { PROJECTS } from '../data/solarData';

interface HomePageProps {
  onOpenQuote: () => void;
  onOpenQuoteWithDetails: (systemSize: string) => void;
}

const proofPoints = [
  { value: '24 hrs', label: 'Initial feasibility response' },
  { value: '48 hrs', label: 'Site engineer mobilisation' },
  { value: '25 yrs', label: 'Module performance warranty' },
  { value: '90%', label: 'Potential bill reduction' },
];

const solutions = [
  { number: '01', title: 'Residential', description: 'High-output rooftop systems designed around the way your home uses energy.', image: '/images/home/residential-solar.jpg', href: '/solutions/residential', Icon: Home },
  { number: '02', title: 'Commercial', description: 'Predictable operating savings for offices, institutions, and commercial assets.', image: '/images/home/commercial-solar.jpg', href: '/solutions/commercial', Icon: Layers3 },
  { number: '03', title: 'Industrial', description: 'Heavy-duty solar plants engineered for large roofs and high daytime loads.', image: '/images/home/industrial-solar.jpg', href: '/solutions/commercial', Icon: Factory },
];

const projectImages = [
  '/images/home/residential-solar.jpg',
  '/images/home/commercial-solar.jpg',
  '/images/home/industrial-solar.jpg',
];

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuote, onOpenQuoteWithDetails }) => {
  const [monthlyBill, setMonthlyBill] = useState(8000);
  const [roofArea, setRoofArea] = useState(500);
  const estimate = useMemo(() => {
    const systemSize = Math.max(1, Math.min(100, Math.floor(roofArea / 100)));
    const monthlyGeneration = systemSize * 120;
    const annualSavings = Math.min(monthlyBill * 12 * 0.9, monthlyGeneration * 12 * 8);
    return { systemSize, monthlyGeneration, annualSavings };
  }, [monthlyBill, roofArea]);

  return (
    <main className="bg-[#f3f2ed] text-[#101713] overflow-hidden">
      <section className="relative min-h-[100svh] bg-[#0b120e] text-white flex items-end">
        <img
          src="/images/home/industrial-solar.jpg"
          alt="Utility-scale solar panels at sunrise"
          className="absolute inset-0 w-full h-full object-cover object-right"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,12,8,.88)_0%,rgba(5,12,8,.58)_48%,rgba(5,12,8,.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,12,8,.58)_0%,transparent_58%)]" />
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 pt-32 pb-8 lg:pb-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-5xl">
            <div className="flex items-center gap-3 text-[11px] sm:text-xs uppercase tracking-[0.24em] text-white/70 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#c8ff32]" /> Rooftop power · Pune, Maharashtra
            </div>
            <h1 className="font-display text-[clamp(3.4rem,9.5vw,9rem)] font-medium uppercase tracking-[-0.065em] leading-[0.83]">Energy,<br />engineered.</h1>
            <div className="mt-8 lg:mt-10 grid lg:grid-cols-2 gap-8 items-end border-t border-white/25 pt-6">
              <p className="text-lg sm:text-xl lg:text-2xl text-white/78 max-w-xl leading-snug">Solar infrastructure for homes and businesses that expect lower bills, cleaner power, and no engineering guesswork.</p>
              <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
                <button onClick={onOpenQuote} className="group inline-flex items-center justify-between gap-8 bg-[#c8ff32] text-[#0b120e] px-6 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer">Plan your system <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></button>
                <Link to="/projects" className="inline-flex items-center justify-between gap-8 border border-white/35 px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-white hover:text-[#0b120e] transition-colors">View projects <ArrowDown className="w-4 h-4" /></Link>
              </div>
            </div>
          </motion.div>
          <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 border-t border-l border-white/20">
            {[
              ['10+ MW', 'Installed capacity'], ['500+', 'Solar installations'], ['Tier-1', 'Module technology'], ['End-to-end', 'EPC delivery'],
            ].map(([value, label]) => <div key={label} className="border-r border-b border-white/20 px-4 py-4 lg:px-6 lg:py-5"><div className="text-xl lg:text-2xl font-medium">{value}</div><div className="mt-1 text-[10px] lg:text-xs uppercase tracking-[0.18em] text-white/50">{label}</div></div>)}
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-24 lg:py-36 max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-3 text-xs uppercase tracking-[0.22em] text-[#566158]"><span className="inline-block w-8 h-px bg-[#101713] align-middle mr-3" />What is Sanmitra</div>
          <div className="lg:col-span-9">
            <h2 className="font-display text-[clamp(2.5rem,5.8vw,6.2rem)] leading-[0.98] tracking-[-0.055em] max-w-6xl">Where sunlight becomes dependable infrastructure.</h2>
            <p className="mt-8 text-lg lg:text-xl leading-relaxed text-[#4e5951] max-w-3xl">We assess, design, install, and support high-performance solar systems as one accountable engineering partner—from the first roof measurement to long-term generation monitoring.</p>
          </div>
        </div>
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#b9bdb7]">
          {[
            [Sun, 'Local expertise', 'Site-specific design for Maharashtra’s heat, monsoon, and grid conditions.'],
            [Gauge, 'Measured output', 'Yield modelling and live monitoring keep performance visible.'],
            [ShieldCheck, 'One accountable team', 'Design, approvals, installation, and aftercare under one roof.'],
            [Zap, 'Built to scale', 'From a family rooftop to a multi-megawatt industrial system.'],
          ].map(([Icon, title, copy]) => { const FeatureIcon = Icon as React.ComponentType<{ className?: string }>; return <div key={title as string} className="min-h-72 border-r border-b border-[#b9bdb7] p-6 lg:p-8 flex flex-col justify-between hover:bg-[#e9e8e1] transition-colors"><FeatureIcon className="w-7 h-7 stroke-[1.35]" /><div><h3 className="text-xl font-medium mb-3">{title as string}</h3><p className="text-sm leading-relaxed text-[#647067]">{copy as string}</p></div></div>; })}
        </div>
      </section>

      <section className="bg-[#0d1711] text-white">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2">
          <div className="px-5 sm:px-8 lg:px-12 py-20 lg:py-28 border-b lg:border-b-0 lg:border-r border-white/15">
            <div className="text-xs uppercase tracking-[0.22em] text-[#c8ff32] mb-8">Estimate your savings</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl tracking-[-0.05em] leading-[0.95]">See what your roof can produce.</h2>
            <p className="mt-6 text-white/55 max-w-lg leading-relaxed">A quick indicative estimate based on typical Pune generation. A detailed site survey confirms the final design.</p>
            <div className="mt-12 space-y-9">
              <label className="block"><span className="flex justify-between text-sm mb-3"><span>Monthly electricity bill</span><strong>₹{monthlyBill.toLocaleString('en-IN')}</strong></span><input type="range" min="2000" max="100000" step="1000" value={monthlyBill} onChange={(event) => setMonthlyBill(Number(event.target.value))} className="w-full accent-[#c8ff32]" /></label>
              <label className="block"><span className="flex justify-between text-sm mb-3"><span>Usable roof area</span><strong>{roofArea.toLocaleString('en-IN')} sq. ft.</strong></span><input type="range" min="100" max="10000" step="100" value={roofArea} onChange={(event) => setRoofArea(Number(event.target.value))} className="w-full accent-[#c8ff32]" /></label>
            </div>
          </div>
          <div className="px-5 sm:px-8 lg:px-12 py-20 lg:py-28 flex flex-col justify-between bg-[#111e16]">
            <div className="grid grid-cols-2 border-t border-l border-white/20">
              <div className="border-r border-b border-white/20 p-5 sm:p-7"><div className="text-xs uppercase tracking-wider text-white/45">Suggested size</div><div className="mt-5 text-4xl sm:text-5xl font-light">{estimate.systemSize}<span className="text-lg ml-1 text-[#c8ff32]">kW</span></div></div>
              <div className="border-r border-b border-white/20 p-5 sm:p-7"><div className="text-xs uppercase tracking-wider text-white/45">Monthly output</div><div className="mt-5 text-4xl sm:text-5xl font-light">{estimate.monthlyGeneration.toLocaleString('en-IN')}<span className="text-sm ml-1 text-[#c8ff32]">kWh</span></div></div>
              <div className="col-span-2 border-r border-b border-white/20 p-5 sm:p-7"><div className="text-xs uppercase tracking-wider text-white/45">Estimated annual savings</div><div className="mt-5 text-5xl sm:text-7xl font-light flex items-start"><IndianRupee className="w-7 h-7 sm:w-9 sm:h-9 mt-2 stroke-[1.3]" />{Math.round(estimate.annualSavings).toLocaleString('en-IN')}</div></div>
            </div>
            <button onClick={() => onOpenQuoteWithDetails(`${estimate.systemSize} kW Residential System`)} className="mt-8 bg-[#c8ff32] text-[#0b120e] px-6 py-4 flex items-center justify-between text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors cursor-pointer">Get an engineered proposal <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-36">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div><div className="text-xs uppercase tracking-[0.22em] text-[#566158] mb-6">Solutions / 03</div><h2 className="font-display text-5xl sm:text-6xl lg:text-8xl tracking-[-0.055em] leading-[0.9]">Built for the load.</h2></div>
            <p className="max-w-md text-[#5e6961] leading-relaxed">Different energy demands need different system architectures. We engineer each one around roof, load, tariff, and return.</p>
          </div>
          <div className="grid lg:grid-cols-3 border-t border-l border-[#b9bdb7]">
            {solutions.map(({ number, title, description, image, href, Icon }) => <Link key={title} to={href} className="group border-r border-b border-[#b9bdb7] bg-[#efeee8]"><div className="flex items-center justify-between p-5 border-b border-[#b9bdb7]"><span className="text-xs tracking-[0.2em]">{number}</span><Icon className="w-5 h-5 stroke-[1.4]" /></div><div className="aspect-[4/3] overflow-hidden bg-[#d9dbd4]"><img src={image} alt={`${title} solar installation`} className="w-full h-full object-cover saturate-[.72] group-hover:scale-105 group-hover:saturate-100 transition-all duration-700" /></div><div className="p-6 lg:p-8"><h3 className="text-3xl lg:text-4xl tracking-tight">{title}</h3><p className="mt-4 text-sm leading-relaxed text-[#657068] min-h-16">{description}</p><span className="mt-8 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wider border-b border-[#101713] pb-1">Explore solution <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span></div></Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[#d9dfd2] border-y border-[#b6beb1]">
        <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2">
          <div className="min-h-[560px] lg:min-h-[760px]"><img src="/images/home/climate-energy.jpg" alt="Renewable energy infrastructure under the Indian sun" className="w-full h-full object-cover grayscale-[20%]" /></div>
          <div className="p-6 sm:p-10 lg:p-14 xl:p-20 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#b6beb1]">
            <div><div className="text-xs uppercase tracking-[0.22em] text-[#556256] mb-8">Designed for local climate</div><h2 className="font-display text-5xl sm:text-6xl xl:text-8xl tracking-[-0.06em] leading-[0.9]">Heat. Dust. Monsoon. Ready.</h2><p className="mt-8 text-lg text-[#516055] leading-relaxed max-w-xl">Every system is engineered for sustained output through demanding Indian conditions—not just ideal laboratory weather.</p></div>
            <div className="mt-16 border-t border-[#9daa9c]">{['Low-temperature-coefficient Tier-1 modules', 'Wind-load and structural engineering', 'Monsoon-ready cable and drainage planning', 'Remote performance monitoring and care'].map((item, index) => <div key={item} className="flex gap-4 items-center py-5 border-b border-[#9daa9c]"><span className="text-xs text-[#617063]">0{index + 1}</span><span className="flex-1 font-medium">{item}</span><Check className="w-4 h-4" /></div>)}</div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b120e] text-white px-5 sm:px-8 lg:px-12 py-24 lg:py-36">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 mb-14"><div className="lg:col-span-3 text-xs uppercase tracking-[0.22em] text-white/45">Service, controlled</div><h2 className="lg:col-span-9 font-display text-[clamp(2.8rem,6vw,6.5rem)] leading-[0.93] tracking-[-0.055em]">One team, from first survey to every unit generated.</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/18">{proofPoints.map((point, index) => <div key={point.label} className="border-r border-b border-white/18 min-h-52 p-6 flex flex-col justify-between"><span className="text-xs text-[#c8ff32]">0{index + 1}</span><div><div className="text-4xl lg:text-5xl font-light">{point.value}</div><div className="mt-2 text-sm text-white/48">{point.label}</div></div></div>)}</div>
        </div>
      </section>

      <section className="px-5 sm:px-8 lg:px-12 py-24 lg:py-36 max-w-[1600px] mx-auto">
        <div className="flex items-end justify-between gap-6 mb-12"><div><div className="text-xs uppercase tracking-[0.22em] text-[#566158] mb-6">Selected work</div><h2 className="font-display text-5xl sm:text-7xl tracking-[-0.055em]">Power, in place.</h2></div><Link to="/projects" className="hidden sm:inline-flex items-center gap-3 text-xs uppercase font-bold tracking-wider border-b border-[#101713] pb-1">All projects <ArrowRight className="w-4 h-4" /></Link></div>
        <div className="grid lg:grid-cols-3 gap-px bg-[#aeb4ad] border border-[#aeb4ad]">{PROJECTS.slice(0, 3).map((project, index) => <Link key={project.id} to={`/projects/${project.slug}`} className="group bg-[#f3f2ed]"><div className="aspect-[4/3] overflow-hidden"><img src={projectImages[index]} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" /></div><div className="p-6"><div className="flex justify-between text-[10px] uppercase tracking-[0.16em] text-[#68736b] mb-5"><span>{project.categoryLabel}</span><span>{project.capacity}</span></div><h3 className="text-2xl tracking-tight">{project.title}</h3><div className="mt-5 flex items-center justify-between text-sm text-[#5d685f]"><span>{project.location}</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div></div></Link>)}</div>
      </section>

      <section className="mx-5 sm:mx-8 lg:mx-12 mb-5 sm:mb-8 lg:mb-12 bg-[#c8ff32] text-[#0b120e]">
        <div className="max-w-[1504px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-9"><div className="text-xs uppercase tracking-[0.22em] mb-8">Your roof / your power</div><h2 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.88] tracking-[-0.06em]">Put your project in motion.</h2></div>
          <button onClick={onOpenQuote} className="lg:col-span-3 bg-[#0b120e] text-white px-6 py-5 flex items-center justify-between uppercase text-xs font-bold tracking-wider hover:bg-white hover:text-[#0b120e] transition-colors cursor-pointer">Start a conversation <ArrowRight className="w-4 h-4" /></button>
        </div>
      </section>
    </main>
  );
};
