"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Landmark, ExternalLink, ShieldAlert, Cpu } from "lucide-react";

interface Achievement {
  rank: string;
  icon: string; // emoji or designator
  title: string;
  host: string;
  subtitle?: string;
  color: string;
}

interface Certificate {
  title: string;
  issuer: string;
  verification?: string;
  color: string;
}

export default function Achievements() {
  const achievements: Achievement[] = [
    {
      rank: "1st Place",
      icon: "🏆",
      title: "1st Prize Prompt Engineering",
      host: "Vaivaka Youth Literary Festival 2026",
      subtitle: "Government of Tamil Nadu",
      color: "border-gold-500/20 text-gold-400 bg-gold-500/5 hover:border-gold-400/50"
    },
    {
      rank: "Top Team",
      icon: "🥉",
      title: "Hackovation 2.0 Finalist",
      host: "VIT Chennai",
      subtitle: "Top teams selected out of 100+ applicants",
      color: "border-orange-500/20 text-orange-400 bg-orange-500/5 hover:border-orange-400/50"
    },
    {
      rank: "Winner",
      icon: "🥇",
      title: "Paper Presentation Winner",
      host: "RAGEX'25",
      subtitle: "Topic: Automated Retail Intelligence using Computer Vision",
      color: "border-deepRed-600/20 text-deepRed-500 bg-deepRed-600/5 hover:border-deepRed-500/50"
    },
    {
      rank: "Project Lead",
      icon: "🚀",
      title: "Smart India Hackathon 2024",
      host: "SIH Hardware Edition",
      subtitle: "Led development of smart retail automation solutions",
      color: "border-fireOrange-500/20 text-fireOrange-400 bg-fireOrange-500/5 hover:border-fireOrange-500/50"
    }
  ];

  const certificates: Certificate[] = [
    {
      title: "AWS Academy Graduate - Generative AI Foundations",
      issuer: "Amazon Web Services (AWS)",
      color: "hover:border-orange-500/30"
    },
    {
      title: "MongoDB Professional Certification",
      issuer: "MongoDB Inc.",
      color: "hover:border-green-500/30"
    },
    {
      title: "NPTEL Machine Learning (Elite Category)",
      issuer: "IIT Madras",
      color: "hover:border-deepRed-600/30"
    },
    {
      title: "Generative AI for Beginners",
      issuer: "Microsoft / Cognitive Class",
      color: "hover:border-gold-500/30"
    }
  ];

  return (
    <section id="achievements" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-fireOrange-500 uppercase tracking-[0.4em] block mb-2">
              // Credentials & Accomplishments
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Victory & <span className="bg-clip-text text-transparent bg-gradient-to-r from-fireOrange-500 to-gold-400">Credentials</span>
            </h2>
          </div>
          <div className="h-[2px] flex-grow md:max-w-md bg-gradient-to-r from-fireOrange-500/30 to-transparent mb-2 hidden md:block" />
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Achievements (Trophy style cards) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white/80 mb-6 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-gold-400" />
              Honors & Competitions
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={ach.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className={`p-6 rounded-2xl border glass-panel transition-all duration-300 flex flex-col justify-between ${ach.color}`}
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest font-semibold block mb-2 opacity-60">
                      {ach.icon} {ach.rank}
                    </span>
                    <h4 className="font-display text-base font-bold uppercase tracking-wide text-white leading-tight mb-2">
                      {ach.title}
                    </h4>
                    <p className="text-xs text-white/60 mb-1">{ach.host}</p>
                    {ach.subtitle && (
                      <p className="text-[10px] text-white/40 font-mono italic leading-snug">
                        {ach.subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white/80 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-fireOrange-500" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certificates.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className={`p-5 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 hover:bg-white/10 transition-all duration-300 flex items-center gap-4 ${cert.color} group`}
                >
                  {/* Badge issuer icon placeholder */}
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/40 group-hover:text-fireOrange-400 group-hover:border-fireOrange-500/20 transition-all">
                    <Landmark className="w-5 h-5" />
                  </div>

                  <div className="flex-grow min-w-0">
                    <h4 className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors truncate">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-white/40 font-mono mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  
                  <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
