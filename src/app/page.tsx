import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Socials from "@/components/Socials";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Vision />
      <Socials />
      
      <footer className="py-16 text-center text-[#a0a0a0] border-t border-white/10 px-6">
        <p className="max-w-7xl mx-auto">
          &copy; {new Date().getFullYear()} Alan Enriquez Perez. Realizado con <span className="text-[#00f2fe]">⚡</span> para el ecosistema Web3.
        </p>
      </footer>
    </main>
  );
}
