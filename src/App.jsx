import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Features />
      <Projects />
      <Pricing />
      <Contact />
      <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} AK — Built with love and clean code.</footer>
    </div>
  );
}

export default App;
