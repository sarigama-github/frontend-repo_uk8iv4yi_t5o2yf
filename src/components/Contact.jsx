import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Let’s build your next SaaS</h2>
        <p className="mt-3 text-slate-400">Tell me about your idea and timeline. I’ll reply within 24 hours.</p>

        <form className="mt-8 grid grid-cols-1 gap-4 text-left">
          <div>
            <label className="text-sm text-slate-300">Name</label>
            <input type="text" className="mt-1 w-full rounded-md border border-white/10 bg-slate-900 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-slate-900 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="you@company.com" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Project</label>
            <textarea rows={5} className="mt-1 w-full rounded-md border border-white/10 bg-slate-900 px-4 py-2 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="What are we building?" />
          </div>
          <div className="flex items-center justify-center">
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-6 py-3 text-slate-900 font-semibold hover:bg-cyan-400 transition">Request proposal</button>
          </div>
        </form>
        <p className="mt-6 text-xs text-slate-500">By submitting, you agree to be contacted about your project. No spam, ever.</p>
      </div>
    </section>
  );
};

export default Contact;
