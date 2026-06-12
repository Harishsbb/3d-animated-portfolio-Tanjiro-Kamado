"use client";

import { motion } from "framer-motion";
import { Terminal, Layout, Server, Database, Cpu, Flame } from "lucide-react";

interface Skill {
  name: string;
  level: number; // comfort level out of 100
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  color: string;
}

export default function Skills() {
  const categories: SkillCategory[] = [
    {
      title: "Programming",
      icon: <Terminal className="w-5 h-5 text-fireOrange-500" />,
      color: "from-fireOrange-500 to-amber-500",
      skills: [
        { name: "Go", level: 90 },
        { name: "Java", level: 85 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Frontend",
      icon: <Layout className="w-5 h-5 text-gold-400" />,
      color: "from-gold-400 to-amber-500",
      skills: [
        { name: "React.js", level: 92 },
        { name: "Next.js", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Framer Motion", level: 88 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-deepRed-500" />,
      color: "from-deepRed-600 to-fireOrange-600",
      skills: [
        { name: "Go Gin Framework", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Express", level: 88 },
        { name: "Spring Boot", level: 80 },
        { name: "Flask", level: 75 }
      ]
    },
    {
      title: "Database",
      icon: <Database className="w-5 h-5 text-orange-500" />,
      color: "from-orange-500 to-red-600",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 90 },
        { name: "MySQL", level: 82 },
        { name: "Firebase", level: 88 }
      ]
    },
    {
      title: "Cloud & Tools",
      icon: <Cpu className="w-5 h-5 text-red-500" />,
      color: "from-red-500 to-amber-600",
      skills: [
        { name: "AWS", level: 78 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 },
        { name: "GitHub", level: 92 },
        { name: "Postman", level: 88 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-transparent overflow-hidden">
      {/* Background design elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(234,88,12,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-fireOrange-500 uppercase tracking-[0.4em] block mb-2">
              // Technical Capabilities
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              My <span className="bg-clip-text text-transparent bg-gradient-to-r from-fireOrange-500 to-gold-400">Weaponry</span>
            </h2>
          </div>
          <div className="h-[2px] flex-grow md:max-w-md bg-gradient-to-r from-fireOrange-500/30 to-transparent mb-2 hidden md:block" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="p-6 md:p-8 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/5 glow-card flex flex-col h-full"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  {cat.icon}
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Skills Progress list */}
              <div className="space-y-5 flex-grow">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-white/80 font-bold">{skill.name}</span>
                      <span className="text-fireOrange-400 font-semibold">{skill.level}%</span>
                    </div>
                    {/* Progress Bar Container */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
                        className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* HUD Status overlay bottom of card */}
              <div className="mt-6 flex items-center justify-between text-[9px] font-mono text-white/30 pt-3 border-t border-white/5">
                <span className="flex items-center gap-1">
                  <Flame className="w-2.5 h-2.5 text-fireOrange-500 animate-pulse" />
                  STABLE INTEGRATION
                </span>
                <span>SYSTEM_{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
