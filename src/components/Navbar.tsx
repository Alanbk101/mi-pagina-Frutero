"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-6 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <span className="font-orbitron font-bold text-xl bg-gradient-to-r from-[#00f2fe] to-[#7000ff] bg-clip-text text-transparent">
          Alan.dev
        </span>
        <div className="hidden md:flex gap-8">
          <Link href="#hero" className="text-sm font-semibold hover:text-[#00f2fe] transition-colors">Inicio</Link>
          <Link href="#vision" className="text-sm font-semibold hover:text-[#00f2fe] transition-colors">Visión</Link>
          <Link href="#social" className="text-sm font-semibold hover:text-[#00f2fe] transition-colors">Redes</Link>
        </div>
      </div>
    </nav>
  );
}
