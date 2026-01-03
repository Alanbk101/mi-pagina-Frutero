import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alan Enriquez Perez | Web3 Researcher & Creator",
  description: "Investigador Web3 y creador de productos digitales. Desarrollo interfaces y apps usando IA, blockchain y flujos automatizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
