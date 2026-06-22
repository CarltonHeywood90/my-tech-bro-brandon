import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="py-24 text-center">
        <h1 className="text-6xl font-extrabold mb-6 tracking-tight">
          My <span className="text-cyan-400">Tech Bro</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Bridging the physical and digital gap. Expert infrastructure cabling meets 
          next-generation agentic AI integration for the modern enterprise.
        </p>
        <Link 
        href="/consult" 
        className="px-8 py-4 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-500 transition-all"
        >
        Schedule a Consult
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Hard IT Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/50">
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">Structured Cabling</h3>
            <p className="text-slate-400">Professional-grade networking infrastructure. From CAT6A to fiber, we build the backbone your business demands.</p>
          </div>
          <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/50">
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">Agentic AI Systems</h3>
            <p className="text-slate-400">Deployment of autonomous AI agents designed to handle complex workflows and operational automation.</p>
          </div>
          <div className="p-6 border border-slate-800 rounded-xl bg-slate-900/50">
            <h3 className="text-xl font-semibold mb-3 text-cyan-300">On-Site Tech Support</h3>
            <p className="text-slate-400">Hands-on hardware troubleshooting and systems maintenance to ensure your operation never skips a beat.</p>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 text-center border-t border-slate-800">
        <h2 className="text-3xl font-bold mb-4">Visit Us</h2>
        <p className="text-lg text-slate-400">
          Proudly serving the silicon slopes from our base in <strong>Provo, Utah</strong>.
        </p>
      </section>
    </div>
  );
}