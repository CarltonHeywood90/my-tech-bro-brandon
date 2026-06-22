import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-slate-950 border-b border-slate-800">
      {/* Top Left: Home Page Brand Link */}
      <Link href="/" className="text-xl font-extrabold text-white hover:text-cyan-400 transition-colors">
        My Tech Bro
      </Link>

      {/* Top Right: Navigation Links & Action Button */}
      <div className="flex items-center gap-8">
        <div className="flex gap-8 text-slate-300 font-medium">
          <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
          <Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog</Link>
        </div>

        {/* Contrast Action Button */}
        <Link 
          href="/consult" 
          className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2 px-6 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
        >
          Schedule Consult
        </Link>
      </div>
    </nav>
  );
}
