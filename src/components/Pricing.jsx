import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$999',
    note: '1-2 weeks',
    features: ['Landing page', 'Basic auth', 'Email capture', 'Deploy included']
  },
  {
    name: 'Growth',
    price: '$3,999',
    note: '3-5 weeks',
    features: ['Multi-tenant SaaS', 'Payments', 'Analytics', 'CI/CD']
  },
  {
    name: 'Scale',
    price: 'Custom',
    note: '6+ weeks',
    features: ['Custom features', 'SLAs', 'Observability', 'Team training']
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Simple pricing for serious ideas</h2>
          <p className="mt-3 text-slate-400">Pick a track to move fast. Every engagement includes design, development, and deployment.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{t.price}</div>
              <div className="text-sm text-slate-400">{t.note}</div>
              <ul className="mt-4 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-5 w-5 grid place-items-center rounded-full bg-emerald-400/10 border border-emerald-400/30">
                      <Check className="h-3 w-3 text-emerald-300" />
                    </span>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-cyan-500 px-4 py-2 text-slate-900 font-semibold hover:bg-cyan-400 transition">Start</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
