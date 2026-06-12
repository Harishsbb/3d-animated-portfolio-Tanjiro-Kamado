"use client";

import { Code2, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-transparent border-t border-white/5 py-12 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-fireOrange-950/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
        {/* Left Column: Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-gradient-to-br from-fireOrange-500 to-deepRed-600 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-black tracking-widest text-sm text-white">
              HARISH K
            </span>
          </div>
          <p className="text-[11px] font-mono text-white/40 tracking-wider">
            Building the future one commit at a time.
          </p>
        </div>

        {/* Center: Author */}
        <div className="text-xs text-white/50 font-mono">
          <span>Designed & Developed by </span>
          <span className="text-fireOrange-500 font-bold hover:text-gold-400 transition-colors">
            Harish K
          </span>
        </div>

        {/* Right Column: Copyright */}
        <div className="text-[11px] font-mono text-white/30 flex items-center gap-1.5 justify-center">
          <span>© {currentYear} Harish K.</span>
          <span>•</span>
          <span className="flex items-center gap-0.5">
            Built with Next.js 14
          </span>
        </div>
      </div>
    </footer>
  );
}
