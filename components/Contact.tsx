"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Send, Github, Linkedin, Mail, Check } from "lucide-react";
import { motion } from "framer-motion";

interface CommandOutput {
  text: string;
  type: "input" | "output" | "error" | "success";
}

export default function Contact() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const consoleBodyRef = useRef<HTMLDivElement>(null);
  
  const emailAddress = "bavaharishkumar@gmail.com";
  const githubUrl = "https://github.com"; // User can replace with actual
  const linkedinUrl = "https://linkedin.com"; // User can replace with actual

  // Initial terminal simulation
  useEffect(() => {
    // Clear history to prevent duplicate prints in React strict mode
    setHistory([]);

    const welcomeSequence = [
      { text: "guest@harish-dev:~# connect Harish", type: "input", delay: 200 },
      { text: "Connecting to secure mainframe at Dindigul, India...", type: "output", delay: 600 },
      { text: "Handshake completed successfully (AES-256).", type: "success", delay: 1000 },
      { text: "\n=============================================", type: "output", delay: 1200 },
      { text: "👤 HARISH K - Full Stack Developer", type: "success", delay: 1400 },
      { text: "📧 Email: bavaharishkumar@gmail.com", type: "output", delay: 1600 },
      { text: "🚀 Open for: Software Engineer Internships / Full Stack Roles", type: "success", delay: 1800 },
      { text: "=============================================", type: "output", delay: 2000 },
      { text: 'Type "help" to see available terminal protocols.', type: "output", delay: 2200 },
    ];

    const timers: NodeJS.Timeout[] = [];

    welcomeSequence.forEach((line) => {
      const timer = setTimeout(() => {
        setHistory((prev) => [...prev, { text: line.text, type: line.type as any }]);
      }, line.delay);
      timers.push(timer);
    });

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (consoleBodyRef.current) {
      consoleBodyRef.current.scrollTop = consoleBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { text: `guest@harish-dev:~# ${input}`, type: "input" as const }];
    setHistory(newHistory);
    setInput("");

    setTimeout(() => {
      switch (cmd) {
        case "help":
          setHistory((prev) => [
            ...prev,
            { text: "Available Protocols:", type: "output" },
            { text: "  about      - Display background bio", type: "output" },
            { text: "  email      - Direct launch to mail client", type: "output" },
            { text: "  github     - Opens GitHub profile", type: "output" },
            { text: "  linkedin   - Opens LinkedIn profile", type: "output" },
            { text: "  projects   - Show highlights from code bases", type: "output" },
            { text: "  clear      - Wipe console buffer", type: "output" },
          ]);
          break;
        case "about":
          setHistory((prev) => [
            ...prev,
            { text: "Harish K: BE Computer Science & Engineering student at PSNA College. Specialized in full-stack cloud ecosystems, container architectures, and API frameworks.", type: "output" }
          ]);
          break;
        case "email":
          setHistory((prev) => [...prev, { text: "Launching native mail app...", type: "success" }]);
          window.open(`mailto:${emailAddress}`);
          break;
        case "github":
          setHistory((prev) => [...prev, { text: "Initiating redirect to GitHub...", type: "success" }]);
          window.open(githubUrl, "_blank");
          break;
        case "linkedin":
          setHistory((prev) => [...prev, { text: "Initiating redirect to LinkedIn...", type: "success" }]);
          window.open(linkedinUrl, "_blank");
          break;
        case "projects":
          setHistory((prev) => [
            ...prev,
            { text: "Main Projects active on cloud:", type: "output" },
            { text: "  1. Smart Shopping Trolley (SIH Lead)", type: "output" },
            { text: "  2. Clinic Booking System", type: "output" },
            { text: "  3. AnimeVerse Creative Canvas", type: "output" }
          ]);
          break;
        case "clear":
          setHistory([]);
          break;
        default:
          setHistory((prev) => [
            ...prev,
            { text: `Error: command not found: "${cmd}". Type "help" for syntax.`, type: "error" }
          ]);
      }
    }, 150);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Glow aura */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-deepRed-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-fireOrange-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-fireOrange-500 uppercase tracking-[0.4em] block mb-2">
              // Sync Communication
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Connect <span className="bg-clip-text text-transparent bg-gradient-to-r from-fireOrange-500 to-gold-400">Terminal</span>
            </h2>
          </div>
          <div className="h-[2px] flex-grow bg-gradient-to-r from-fireOrange-500/30 to-transparent mb-2 hidden md:block" />
        </div>

        {/* Outer terminal window container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md overflow-hidden shadow-2xl"
        >
          {/* Terminal Title Bar */}
          <div className="bg-white/5 border-b border-white/10 px-4 py-3.5 flex items-center justify-between">
            {/* OSX Style traffic dots */}
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#ef4444] block border border-[#dc2626]/40" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#fbbf24] block border border-[#d97706]/40" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#10b981] block border border-[#059669]/40" />
            </div>
            
            <span className="font-mono text-xs text-white/50 flex items-center gap-1.5 select-none">
              <Terminal className="w-3.5 h-3.5 text-fireOrange-500" />
              harish-k-shell v1.0.0
            </span>
            
            {/* Spacer to align title centered */}
            <div className="w-14" />
          </div>

          {/* Console Body */}
          <div ref={consoleBodyRef} className="p-5 md:p-8 h-80 overflow-y-auto font-mono text-xs md:text-sm space-y-2.5 scrollbar-thin scrollbar-thumb-white/15 select-text">
            {history.map((line, idx) => (
              <div
                key={idx}
                className={`whitespace-pre-wrap ${
                  line.type === "input"
                    ? "text-white font-bold"
                    : line.type === "success"
                    ? "text-gold-400"
                    : line.type === "error"
                    ? "text-red-500"
                    : "text-white/70"
                }`}
              >
                {line.text}
              </div>
            ))}
          </div>

          {/* Command Input Area */}
          <form onSubmit={handleCommand} className="bg-white/5 border-t border-white/10 flex items-center px-4 py-3">
            <span className="font-mono text-xs md:text-sm text-fireOrange-500 font-bold mr-2 shrink-0 select-none">
              guest@harish-dev:~#
            </span>
            
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Try typing "help" or "email"...'
              className="bg-transparent border-none outline-none flex-grow text-white font-mono text-xs md:text-sm placeholder-white/20"
            />

            <button
              type="submit"
              className="p-1 text-white/40 hover:text-fireOrange-500 transition-colors shrink-0"
              aria-label="Submit command"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>

        {/* Quick link button shortcuts */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${emailAddress}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-fireOrange-500/30 text-sm font-semibold transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-fireOrange-500" />
            <span>Email Me</span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold-500/30 text-sm font-semibold transition-all duration-300"
          >
            <Github className="w-4 h-4 text-gold-400" />
            <span>GitHub</span>
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-deepRed-500/30 text-sm font-semibold transition-all duration-300"
          >
            <Linkedin className="w-4 h-4 text-deepRed-500" />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
}
