"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

interface TimelineItemProps {
  role: string;
  company: string;
  location?: string;
  duration: string;
  tech: string[];
  points: string[];
  index: number;
}

function TimelineItem({ role, company, location, duration, tech, points, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0 group"
    >
      {/* Glow dot on timeline */}
      <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-black border-2 border-fireOrange-500 z-10 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-gold-400 group-hover:shadow-glow-orange">
        <div className="w-1.5 h-1.5 rounded-full bg-fireOrange-500 group-hover:bg-gold-400" />
      </div>

      {/* Timeline item body card */}
      <div className="p-6 md:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:border-fireOrange-500/20 transition-all duration-300 relative overflow-hidden">
        {/* Glow ambient background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-deepRed-900/5 rounded-full blur-2xl pointer-events-none group-hover:bg-fireOrange-900/10 transition-colors" />

        {/* Card header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white group-hover:text-fireOrange-400 transition-colors">
              {role}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-xs text-white/50 font-mono">
              <span className="text-white/80 font-semibold">{company}</span>
              {location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {location}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 border border-white/10 w-fit text-xs font-mono text-gold-400 h-fit">
            <Calendar className="w-3.5 h-3.5" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Technology stack badges */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/5 border border-white/5 text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Work highlights bullet points */}
        <ul className="space-y-3">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-fireOrange-500 shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Upfunda",
      location: "Chennai (Remote/Hybrid)",
      duration: "Dec 2025 - Present",
      tech: ["React", "TypeScript", "Go Gin", "PostgreSQL", "Firebase", "AWS"],
      points: [
        "Educational Platform Development: Architected and scaled production-level EdTech features, serving active learners.",
        "Multi Student Profile System: Engineered a secure profile-switching engine enabling parents/students to switch accounts smoothly.",
        "Avatar Customization: Designed a dynamic avatar upload, generation, and static file serving microservice.",
        "Certificate System: Implemented dynamic high-quality completion certificate generation, PDF preview, and secure download pipeline.",
        "Premium Subscription: Formulated client/server licensing validations and granular API access restrictions based on user tier.",
        "Authentication: Built hardened JWT, OAuth integrations, and secure route authorizations."
      ]
    },
    {
      role: "Java Intern",
      company: "1Stop",
      duration: "May 2025 - June 2025",
      tech: ["Java", "OOP", "JDBC", "SQL Database"],
      points: [
        "Database Architecture: Modeled relational tables and database schemas using SQL for relational storage.",
        "Connectivity Layer: Created custom Java Database Connectivity (JDBC) wrappers to execute transaction safe queries.",
        "Object Oriented Design: Authored structured CLI applications emphasizing design patterns and OOP paradigms."
      ]
    }
  ];

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-deepRed-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <span className="font-mono text-xs text-fireOrange-500 uppercase tracking-[0.4em] block mb-2">
              // Timeline Chronology
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-fireOrange-500 to-gold-400">Experience</span>
            </h2>
          </div>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-fireOrange-500/30 to-transparent mb-2 hidden md:block" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative border-l border-white/10 ml-2 py-4">
          {/* Animated scrolling light timeline guide */}
          <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-fireOrange-500 via-deepRed-600 to-transparent" />

          {experiences.map((exp, index) => (
            <TimelineItem key={exp.role + exp.company} {...exp} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
