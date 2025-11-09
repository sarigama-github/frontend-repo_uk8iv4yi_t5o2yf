import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that don't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-900/50" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_120%,rgba(56,189,248,0.15),transparent)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 h-full flex flex-col">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-cyan-400/20 border border-cyan-400/30 grid place-items-center">
              <span className="font-black text-cyan-300">AK</span>
            </div>
            <span className="text-slate-300">Coder • SaaS Engineer</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-2 text-sm backdrop-blur border border-white/20 hover:bg-white/20 transition"
            >
              <Mail size={16} /> Contact
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-slate-800/60 px-4 py-2 text-sm backdrop-blur border border-white/10 hover:bg-slate-700/70 transition"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>

        {/* Headline */}
        <div className="flex-1 grid place-items-center text-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-200 text-xs mb-4">
              <Rocket size={14} /> Launching modern, interactive products
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              AK — Building playful, performant SaaS experiences
            </h1>
            <p className="mt-4 text-slate-300 text-lg">
              Full‑stack developer crafting delightful 3D‑infused interfaces and scalable APIs. Available for collaborations and MVPs.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-cyan-400 transition"
              >
                Get Started
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm text-white hover:bg-white/10 transition"
              >
                See Work
              </a>
            </div>
          </div>
        </div>

        {/* Bottom cue */}
        <div className="pb-8 flex justify-center">
          <span className="text-xs text-slate-400">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
