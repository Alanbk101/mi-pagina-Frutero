"use client";

import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 text-center">
      <div className="max-w-4xl flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-2 bg-[#00f2fe1a] border border-[#00f2fe4d] rounded-full text-[#00f2fe] text-xs font-bold tracking-widest mb-8 uppercase"
        >
          Web3 Researcher & Creator
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-orbitron text-5xl md:text-8xl font-black mb-10 leading-none bg-gradient-to-br from-white via-[#00f2fe] to-[#7000ff] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,242,254,0.3)]"
        >
          Alan Enriquez Perez
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-[#a0a0a0] leading-relaxed mb-12 max-w-3xl"
        >
          Investigador Web3 y creador de productos digitales. Desarrollo interfaces y apps usando IA, blockchain y flujos automatizados, conectando diseño, código y despliegue en repositorios. Enfoque técnico, mentalidad experimental y visión a futuro.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Link href="#vision" className="px-8 py-4 bg-gradient-to-r from-[#00f2fe] to-[#7000ff] text-black font-bold rounded-xl transform hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,242,254,0.4)] transition-all">
            Ver Visión
          </Link>
          <Link href="https://github.com/Alanbk101" target="_blank" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/10 transition-all">
            <Github size={20} /> GitHub
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
