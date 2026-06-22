'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-slate-800 bg-slate-950 p-6">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">MY TECH BRO</Link>
        
        {/* Hamburger Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <Link href="/services" className="hover:text-cyan-400">Services</Link>
          <Link href="/about" className="hover:text-cyan-400">About Us</Link>
          <Link href="/blog" className="hover:text-cyan-400">Blog</Link>
          <Link href="/consult" className="bg-cyan-600 px-4 py-2 rounded-lg">Schedule</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-6 flex flex-col gap-4">
          <Link href="/services" className="hover:text-cyan-400">Services</Link>
          <Link href="/about" className="hover:text-cyan-400">About Us</Link>
          <Link href="/blog" className="p-2 border-b border-slate-800">Blog</Link>
          <Link href="/consult" className="p-2">Schedule</Link>
        </div>
      )}
    </nav>
  );
}