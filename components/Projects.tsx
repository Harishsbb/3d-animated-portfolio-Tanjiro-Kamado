"use client";

import { motion } from "framer-motion";
import { FolderGit2, ArrowUpRight, Cpu, User, Layers, ShieldCheck } from "lucide-react";

interface Project {
  title: string;
  tagline?: string;
  role?: string;
  tech: string[];
  features: string[];
  glowColor: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Smart Shopping Trolley",
      tagline: "Smart India Hackathon (SIH) 2024",
      role: "Project Lead",
      tech: ["React", "Flask", "MongoDB", "IoT Sensors"],
      features: [
        "Smart retail automation for instant barcode/RFID checkout",
        "Real-time item tracking and basket cost calculation",
        "Interactive administrator inventory control dashboard",
        "Hardware-to-software integration with weight/distance sensors"
      ],
      glowColor: "group-hover:border-fireOrange-500/30 group-hover:shadow-glow-orange"
    },
    {
      title: "Clinic Booking System",
      tagline: "Fullstack Medical Portal",
      tech: ["React", "Node.js", "MongoDB", "JWT Auth"],
      features: [
        "Doctor appointment scheduling calendar",
        "Hardened JWT login verification and route protection",
        "Role-based control panel for doctors and patients"
      ],
      glowColor: "group-hover:border-deepRed-600/30 group-hover:shadow-glow-red"
    },
    {
      title: "AnimeVerse Cinematic Web",
      tagline: "Creative Landing Platform",
      tech: ["Next.js", "Canvas", "Framer Motion", "Midjourney AI"],
      features: [
        "Apple-inspired high-framerate scroll scrubbing sequence",
        "AI-generated frame asset cleaning and enhancement",
        "HTML5 canvas rendering with performance-optimized requestAnimationFrame",
        "Cinematic dark futuristic theme overlays"
      ],
      glowColor: "group-hover:border-gold-500/30 group-hover:shadow-glow-gold"
    },
    {
      title: "Bank Management System",
      tagline: "Financial Core Application",
      tech: ["Flask", "MySQL", "Python Core"],
      features: [
        "Robust bank account creation and management operations",
        "ACID-compliant transaction logging and balance tracking",
        "Secure relational database integration and queries"
      ],
      glowColor: "group-hover:border-orange-500/30 group-hover:shadow-glow-orange"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Background radial overlay */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(185,28,28,0.04)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(249,115,22,0.04)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <span className="font-mono text-xs text-fireOrange-500 uppercase tracking-[0.4em] block mb-2">
              // Practical Implementations
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Selected <span className="bg-clip-text text-transparent bg-gradient-to-r from-fireOrange-500 to-gold-400">Projects</span>
            </h2>
          </div>
          <div className="h-[2px] flex-grow md:max-w-md bg-gradient-to-r from-fireOrange-500/30 to-transparent mb-2 hidden md:block" />
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className={`group p-6 md:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 transition-all duration-500 flex flex-col h-full ${project.glowColor}`}
            >
              {/* Top Row: Icon and Tagline */}
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-fireOrange-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-fireOrange-600 group-hover:to-deepRed-600 group-hover:border-transparent transition-all duration-300">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                
                {project.tagline && (
                  <span className="px-3 py-1 text-[10px] font-mono rounded-full bg-white/5 border border-white/10 text-white/50 group-hover:text-white/80 transition-colors">
                    {project.tagline}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-black uppercase tracking-wide text-white group-hover:text-fireOrange-400 transition-colors mb-2">
                {project.title}
              </h3>

              {/* Role badge if Lead */}
              {project.role && (
                <div className="flex items-center gap-1.5 text-xs text-gold-400 font-mono mb-4">
                  <User className="w-3.5 h-3.5" />
                  <span>Role: {project.role}</span>
                </div>
              )}

              {/* Project Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 text-xs font-mono rounded bg-white/5 border border-white/5 text-white/60 group-hover:border-white/10 group-hover:text-white/80 transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="h-[1px] w-full bg-white/5 mb-6 group-hover:bg-white/10 transition-colors" />

              {/* Features bullet checklist */}
              <div className="space-y-3 flex-grow">
                <h4 className="text-xs uppercase font-mono tracking-widest text-white/40 mb-2">Key Features</h4>
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2 text-sm text-white/70 group-hover:text-white/95 transition-colors leading-relaxed">
                    <Layers className="w-4 h-4 text-fireOrange-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Link CTA in bottom panel */}
              <div className="mt-8 flex items-center justify-between text-xs font-mono pt-4 border-t border-white/5 text-white/30 group-hover:text-white/70 transition-colors">
                <span className="flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 animate-pulse" />
                  ENGINE_STABLE
                </span>
                <span className="flex items-center gap-1 text-fireOrange-500 font-semibold cursor-pointer group-hover:text-gold-400 transition-colors">
                  Details <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
