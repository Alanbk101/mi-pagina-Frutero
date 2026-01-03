"use client";

import { motion } from 'framer-motion';
import { Twitter, Github, Send } from 'lucide-react';
import Link from 'next/link';

const socials = [
  { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/ACrypt0b', color: '#1DA1F2' },
  { name: 'GitHub', icon: Github, url: 'https://github.com/Alanbk101', color: '#ffffff' },
  { name: 'Telegram', icon: Send, url: 'https://t.me/Alan_BK_Breck', color: '#0088cc' },
];

export default function Socials() {
  return (
    <section id="social" className="py-32 px-6 max-w-6xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-orbitron text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-[#00f2fe] bg-clip-text text-transparent"
      >
        Conecta Conmigo
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {socials.map((social, index) => (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link 
              href={social.url} 
              target="_blank"
              className="group flex flex-col items-center gap-6 p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[#00f2fe44] hover:bg-[#00f2fe08] transition-all relative overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#00f2fe11] to-transparent" 
              />
              <social.icon 
                size={40} 
                className="text-[#00f2fe] group-hover:scale-110 transition-transform relative z-10" 
              />
              <span className="text-xl font-semibold relative z-10">{social.name}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
