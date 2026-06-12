"use client";

import { useState, useEffect, useRef } from "react";
import { 
  Home, 
  User, 
  Layers, 
  Briefcase, 
  FolderGit2, 
  Award, 
  Terminal
} from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: User },
    { label: "Skills", href: "#skills", icon: Layers },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Projects", href: "#projects", icon: FolderGit2 },
    { label: "Achievements", href: "#achievements", icon: Award },
    { label: "Contact", href: "#contact", icon: Terminal },
  ];

  // Dynamic Scroll Spy to highlight the section currently in viewport
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      // Find which section is currently active
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    // Run once on load
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <>
      {/* Desktop Floating Left Sidebar */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center justify-between h-[70vh] w-20 py-8 bg-black/30 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(0,0,0,0.3)]">
        {/* Top Logo */}
        <a href="#home" className="relative group flex items-center justify-center">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fireOrange-500 to-deepRed-600 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(239,68,68,0.25)] group-hover:scale-105 transition-all duration-300">
            <img src="/icon.png" alt="Harish K Logo" className="w-6 h-6 object-contain" />
          </div>
          <span className="absolute left-16 px-3 py-1.5 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg text-white font-mono text-[9px] uppercase tracking-wider opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl whitespace-nowrap z-50">
            Harish K - Dev System
          </span>
        </a>

        {/* Center Vertical Links */}
        <div className="flex flex-col gap-4 relative w-full items-center">
          {navLinks.map((link, idx) => {
            const Icon = link.icon;
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative group flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300"
              >
                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute left-0 w-[3px] h-6 bg-gradient-to-b from-fireOrange-500 to-deepRed-600 rounded-r-md shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Hover Glass Pill Background */}
                {hoveredIdx === idx && (
                  <motion.div
                    layoutId="sidebarHover"
                    className="absolute inset-1.5 bg-white/[0.06] rounded-xl border border-white/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Dynamic Icon */}
                <Icon
                  className={`w-5 h-5 transition-colors relative z-10 duration-300 ${
                    isActive ? "text-fireOrange-400" : "text-white/40 group-hover:text-white"
                  }`}
                />

                {/* Pop-Out Glass Tooltip */}
                <span className="absolute left-16 px-3 py-1.5 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg text-white font-mono text-[10px] uppercase tracking-wider opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl whitespace-nowrap z-50">
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>

        {/* Bottom Connection Status Dot */}
        <div className="flex flex-col items-center">
          <a
            href="#contact"
            className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/50 hover:text-fireOrange-400 hover:border-fireOrange-500/30 transition-all duration-300 group relative"
            aria-label="Connect Terminal"
          >
            <Terminal className="w-4.5 h-4.5" />
            <span className="absolute left-16 px-3 py-1.5 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg text-white font-mono text-[10px] uppercase tracking-wider opacity-0 -translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl whitespace-nowrap z-50">
              Connect Terminal
            </span>
            {/* Status Indicator Dot */}
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fireOrange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fireOrange-500"></span>
            </span>
          </a>
        </div>
      </nav>

      {/* Mobile/Tablet Bottom Floating Action Dock */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden flex items-center justify-around w-[92%] max-w-md px-3 py-2.5 bg-black/60 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.label}
              href={link.href}
              className="flex flex-col items-center justify-center w-11 h-11 rounded-xl transition-all"
            >
              <Icon
                className={`w-4.5 h-4.5 transition-colors ${
                  isActive ? "text-fireOrange-400 scale-110" : "text-white/40"
                }`}
              />
              <span className={`text-[8px] font-mono mt-1 transition-colors ${isActive ? "text-fireOrange-400" : "text-white/25"}`}>
                {link.label.substring(0, 5)}
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
}
