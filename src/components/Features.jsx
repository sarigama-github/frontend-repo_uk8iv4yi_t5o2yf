import React from 'react';
import { Code2, Gauge, ShieldCheck, Cloud } from 'lucide-react';

const features = [
  {
    icon: <Code2 className="h-5 w-5 text-cyan-400" />,
    title: 'Clean, Modern Code',
    desc: 'Type-safe, scalable patterns with delightful developer experience.'
  },
  {
    icon: <Gauge className="h-5 w-5 text-cyan-400" />,
    title: 'Performance First',
    desc: 'Ship fast UIs and APIs with measurable performance budgets.'
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-cyan-400" />,
    title: 'Secure by Design',
    desc: 'Best practices baked-in: auth, validation, and secure defaults.'
  },
  {
    icon: <Cloud className="h-5 w-5 text-cyan-400" />,
    title: 'Cloud Native',
    desc: 'From MVPs to multi-tenant SaaS, built for the cloud from day one.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20 bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">SaaS engineering you can trust</h2>
          <p className="mt-3 text-slate-400">I build reliable foundations and engaging experiences that scale with your product.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition">
              <div className="h-10 w-10 rounded-lg bg-cyan-400/10 border border-cyan-400/30 grid place-items-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-sm text-slate-400 mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
