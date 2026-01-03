"use client";

import { motion } from 'framer-motion';
import { Blocks } from 'lucide-react';

export default function Vision() {
  return (
    <section id="vision" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-orbitron text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-[#00f2fe] bg-clip-text text-transparent"
      >
        ¿Por qué Web3?
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative group p-1 rounded-[32px] bg-gradient-to-br from-[#00f2fe33] via-transparent to-[#7000ff33]"
      >
        <div className="bg-[#050505] p-8 md:p-16 rounded-[30px] backdrop-blur-xl border border-white/5 text-center overflow-hidden">
          <div className="w-20 h-20 bg-gradient-to-br from-[#00f2fe] to-[#7000ff] rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_40px_rgba(0,242,254,0.3)]">
            <Blocks size={40} className="text-black" />
          </div>
          <p className="text-xl md:text-3xl font-light leading-snug max-w-4xl mx-auto text-[#e0e0e0]">
            Porque Web3 redefine la propiedad, la confianza y la forma en que se construyen productos digitales. Quiero estar del lado de quienes los crean, no solo de quienes los usan.
          </p>
          
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00f2fe05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
}
