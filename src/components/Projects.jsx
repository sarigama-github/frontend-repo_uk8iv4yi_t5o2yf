import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AsyncBoard',
    description: 'Realtime collaboration dashboard with role-based access and analytics.',
    tags: ['React', 'FastAPI', 'WebSockets'],
    link: '#'
  },
  {
    title: 'QuantaPay',
    description: 'Payments microservice with idempotency, retries, and observability.',
    tags: ['Python', 'Stripe', 'Postgres'],
    link: '#'
  },
  {
    title: 'MotionUI Kit',
    description: '3D infused component kit for marketing sites and SaaS dashboards.',
    tags: ['Spline', 'Framer Motion', 'Tailwind'],
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected work</h2>
          <p className="mt-3 text-slate-400">A few highlights that reflect my approach to thoughtful engineering and design.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white hover:bg-white/10 transition">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <a href={p.link} className="text-slate-300 hover:text-white" aria-label={`Open ${p.title}`}>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-md border border-white/10 bg-slate-900/60 px-2 py-1 text-slate-300">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
