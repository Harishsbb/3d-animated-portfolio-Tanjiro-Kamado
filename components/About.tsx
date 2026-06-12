"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, MapPin, Target, Briefcase } from "lucide-react";

export default function About() {
  const stats = [
    { value: "250+", label: "DSA Problems Solved", desc: "LeetCode, GeeksforGeeks" },
    { value: "10+", label: "Projects Developed", desc: "Fullstack, AI, Automation" },
    { value: "4+", label: "Hackathons Attended", desc: "SIH, Regional Competitions" },
    { value: "1+", label: "Production Internships", desc: "Upfunda, Chennai" },
  ];

  return (
    <section id="about" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Decorative fire-colored mesh background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-deepRed-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-fireOrange-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-fireOrange-500 uppercase tracking-[0.4em] block mb-2">
              // Core Identity
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-fireOrange-500 to-gold-400">Harish K</span>
            </h2>
          </div>
          <div className="h-[2px] flex-grow md:max-w-md bg-gradient-to-r from-fireOrange-500/30 to-transparent mb-2 hidden md:block" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Text & Academic details */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-white/90 leading-relaxed">
                Computer Science Engineering student and Full Stack Developer passionate about creating scalable applications.
              </h3>
              <p className="text-white/60 leading-relaxed text-sm md:text-base">
                Experienced in frontend design systems, complex backend architecture, relational/non-relational database systems, cloud deployment, and integration of AI-powered features. I bridge the gap between heavy logic and high-fidelity interfaces.
              </p>
            </motion.div>

            {/* Sub-cards: Goal & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Goal Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl glass-panel glow-card"
              >
                <div className="w-10 h-10 rounded-xl bg-fireOrange-500/10 flex items-center justify-center text-fireOrange-500 mb-4 border border-fireOrange-500/20">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2">My Goal</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  To secure a Software Engineer role building scalable, distributed real-world applications that solve actual business challenges.
                </p>
              </motion.div>

              {/* Location Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="p-6 rounded-2xl glass-panel glow-card"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 mb-4 border border-gold-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2">Location</h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  Based in <strong className="text-white">Dindigul, Tamil Nadu, India</strong>. Ready to collaborate with global teams and relocate for top-tier opportunities.
                </p>
              </motion.div>
            </div>

            {/* Education HUD card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="p-6 md:p-8 rounded-2xl glass-panel border-deepRed-500/20 relative overflow-hidden"
            >
              {/* HUD accent top right */}
              <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-deepRed-500 to-transparent" />
              <div className="absolute top-0 right-0 w-[1px] h-24 bg-gradient-to-b from-deepRed-500 to-transparent" />

              <div className="flex flex-col md:flex-row md:items-start gap-4 justify-between">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-deepRed-500/10 border border-deepRed-500/20 flex items-center justify-center text-deepRed-500 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-1">
                      Academic Background
                    </span>
                    <h4 className="font-display text-lg font-bold uppercase text-white">
                      PSNA College of Engineering and Technology
                    </h4>
                    <p className="text-sm text-white/60 font-medium mt-1">
                      BE - Computer Science & Engineering
                    </p>
                  </div>
                </div>
                <div className="md:text-right mt-2 md:mt-0 font-mono">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-xs font-bold text-white block w-fit md:ml-auto">
                    2023 - 2027
                  </span>
                  <div className="mt-2 text-sm">
                    <span className="text-white/40">CGPA: </span>
                    <span className="text-gold-400 font-bold text-base text-glow-gold">8.01</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:h-full lg:content-center">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 text-center flex flex-col justify-center items-center hover:border-fireOrange-500/30 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Background decorative neon line */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-fireOrange-600 to-deepRed-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                
                <h3 className="font-display text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-fireOrange-500 group-hover:text-glow-orange transition-all duration-300">
                  {stat.value}
                </h3>
                
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-white">
                  {stat.label}
                </p>
                
                <p className="mt-1 text-[10px] text-white/40 font-mono">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
