"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { TOTAL_FRAMES } from "./framesConfig";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
}

interface CodeSymbol {
  x: number;
  y: number;
  text: string;
  vy: number;
  fontSize: number;
  alpha: number;
  spin: number;
  angle: number;
}

export default function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [loading, setLoading] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Image cache and scrubbing references
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);
  const targetFrameRef = useRef<number>(1);
  const lastValidImageRef = useRef<HTMLImageElement | null>(null);
  
  // Effects references
  const particlesRef = useRef<Particle[]>([]);
  const codeSymbolsRef = useRef<CodeSymbol[]>([]);
  const symbolsPool = ["<dev />", "func", "defer", "go", "struct", "{}", "[]", "=>", "const", "React", "Spring", "API", "DB"];

  // 1. Preload image sequence
  useEffect(() => {
    const totalFrames = TOTAL_FRAMES;
    let loadedCount = 0;
    const preloadedImages: HTMLImageElement[] = [];

    // Fallback if some frames fail to load
    const handleLoadComplete = () => {
      setLoading(false);
    };

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/frames/frame_${frameNum}.jpg`;

      img.onload = () => {
        loadedCount++;
        const pct = Math.round((loadedCount / totalFrames) * 100);
        setLoadProgress(pct);
        if (loadedCount === totalFrames) {
          handleLoadComplete();
        }
      };

      img.onerror = () => {
        // Log error and count as loaded to prevent complete blocking in environments without ZIP extraction
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount === totalFrames) {
          handleLoadComplete();
        }
      };

      preloadedImages.push(img);
    }

    imagesRef.current = preloadedImages;
  }, []);

  // 2. Scroll event handling
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      // A. Calculate hero-specific scroll progress (for text stages, over 300vh/500vh)
      const rect = containerRef.current.getBoundingClientRect();
      const heroScrollHeight = rect.height - window.innerHeight;
      let heroProgress = -rect.top / (heroScrollHeight || 1);
      heroProgress = Math.max(0, Math.min(1, heroProgress));
      setScrollProgress(heroProgress);
      
      // B. Calculate global document scroll progress (to scrub frames across the entire website)
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const globalScrollHeight = docHeight - winHeight;
      
      if (globalScrollHeight > 0) {
        const globalProgress = Math.max(0, Math.min(1, window.scrollY / globalScrollHeight));
        // Map global scroll progress to frame sequence (1 to TOTAL_FRAMES)
        const targetFrame = Math.round(globalProgress * (TOTAL_FRAMES - 1)) + 1;
        targetFrameRef.current = targetFrame;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  // 3. Canvas rendering loop: frame interpolation + particles + code symbols
  useEffect(() => {
    if (loading) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize fire particles
    const spawnParticle = (): Particle => {
      const dpr = window.devicePixelRatio || 1;
      const isBottom = Math.random() > 0.3;
      return {
        x: Math.random() * canvas.width,
        y: isBottom ? canvas.height + 10 : Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2 * dpr,
        vy: (-Math.random() * 2 - 1) * dpr,
        size: (Math.random() * 4 + 2) * dpr,
        alpha: Math.random() * 0.5 + 0.5,
        decay: Math.random() * 0.015 + 0.005,
        color: Math.random() > 0.4 ? "rgba(234, 88, 12, " : "rgba(185, 28, 28, " // Fire orange or deep red
      };
    };

    // Initialize code symbols
    const spawnCodeSymbol = (): CodeSymbol => {
      const dpr = window.devicePixelRatio || 1;
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        text: symbolsPool[Math.floor(Math.random() * symbolsPool.length)],
        vy: (-Math.random() * 1.5 - 0.5) * dpr,
        fontSize: (Math.random() * 12 + 12) * dpr,
        alpha: Math.random() * 0.2 + 0.1,
        spin: (Math.random() - 0.5) * 0.02,
        angle: Math.random() * Math.PI * 2
      };
    };

    // Pre-populate particles
    for (let i = 0; i < 40; i++) {
      particlesRef.current.push({
        ...spawnParticle(),
        y: Math.random() * canvas.height
      });
    }

    const render = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // A. Interpolate frame
      const frameDiff = targetFrameRef.current - currentFrameRef.current;
      currentFrameRef.current += frameDiff * 0.12; // Lerp factor for buttery smooth scrubbing
      
      // Clamp frameIdx to be strictly between 1 and TOTAL_FRAMES to prevent out-of-bounds undefined errors
      const frameIdx = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(currentFrameRef.current)));
      let img = imagesRef.current[frameIdx - 1];

      // Fallback to the last successfully loaded frame if the current target frame is not ready
      if (!img || !img.complete || img.naturalWidth === 0) {
        if (lastValidImageRef.current) {
          img = lastValidImageRef.current;
        }
      } else {
        lastValidImageRef.current = img;
      }

      if (img && img.complete && img.naturalWidth !== 0) {
        // Draw image (contain fit)
        const imgWidth = img.naturalWidth;
        const imgHeight = img.naturalHeight;
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;

        const imgRatio = imgWidth / imgHeight;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, x, y;

        if (canvasRatio > imgRatio) {
          drawWidth = canvasWidth;
          drawHeight = canvasWidth / imgRatio;
          x = 0;
          y = (canvasHeight - drawHeight) / 2;
        } else {
          drawHeight = canvasHeight;
          drawWidth = canvasHeight * imgRatio;
          x = (canvasWidth - drawWidth) / 2;
          y = 0;
        }

        // Apply high-quality image smoothing and draw the frame image
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
      } else {
        // Fallback styling if frame images fail to load
        const grad = ctx.createRadialGradient(
          canvas.width / 2, canvas.height / 2, 50,
          canvas.width / 2, canvas.height / 2, canvas.width / 2
        );
        grad.addColorStop(0, "rgba(28, 5, 5, 1)");
        grad.addColorStop(0.5, "rgba(10, 2, 2, 1)");
        grad.addColorStop(1, "rgba(0, 0, 0, 1)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Add a cinematic dark vignette and orange energy overlay
      const vignette = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.width * 0.2,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.8
      );
      vignette.addColorStop(0, "rgba(3, 3, 3, 0)");
      vignette.addColorStop(0.5, "rgba(3, 3, 3, 0.35)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.82)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // B. Update and render fire particles
      // Spawn new particles occasionally
      if (particlesRef.current.length < 75 && Math.random() < 0.3) {
        particlesRef.current.push(spawnParticle());
      }

      particlesRef.current = particlesRef.current.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= p.decay;
        
        if (p.alpha <= 0 || p.x < 0 || p.x > canvas.width || p.y < 0) {
          return false;
        }

        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(234, 88, 12, 0.5)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });

      // C. Update and render floating code symbols
      if (codeSymbolsRef.current.length < 15 && Math.random() < 0.05) {
        codeSymbolsRef.current.push(spawnCodeSymbol());
      }

      codeSymbolsRef.current = codeSymbolsRef.current.filter(s => {
        s.y += s.vy;
        s.angle += s.spin;
        
        if (s.y < -30) return false;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.angle);
        ctx.shadowBlur = 0; // Turn off shadow for text performance
        ctx.fillStyle = `rgba(249, 115, 22, ${s.alpha})`;
        ctx.font = `${s.fontSize}px 'Courier New', monospace`;
        ctx.fillText(s.text, 0, 0);
        ctx.restore();
        return true;
      });
      
      // Reset shadows
      ctx.shadowBlur = 0;

      // Request next frame
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [loading]);

  // Content scroll stage triggers
  const showStage1 = scrollProgress >= 0 && scrollProgress < 0.28;
  const showStage2 = scrollProgress >= 0.28 && scrollProgress < 0.65;
  const showStage3 = scrollProgress >= 0.65;

  return (
    <div ref={containerRef} className="relative w-full bg-transparent" style={{ height: "500vh" }} id="home">


      {/* Fixed Background Canvas */}
      <div className="fixed inset-0 w-full overflow-hidden pointer-events-none" style={{ height: "100vh", zIndex: 0 }}>
        <canvas ref={canvasRef} className="absolute inset-0 block" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Sticky Text Overlays */}
      <div className="sticky top-0 w-full overflow-hidden z-10" style={{ height: "100vh" }}>
        {/* Glowing Ambient Aura overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_70%,rgba(234,88,12,0.08),transparent_60%)]" />

        {/* Cinematic Content overlays */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <AnimatePresence mode="wait">
            
            {/* Stage 1: Welcome message */}
            {showStage1 && (
              <motion.div
                key="stage1"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-3 text-gold-400 font-mono text-xs uppercase tracking-[0.4em] text-glow-gold">
                  <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
                  <span>Protocol Active</span>
                </div>
                <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white">
                  Welcome to my <br className="md:hidden" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-fireOrange-500 to-gold-400 text-glow-orange">
                    Digital World
                  </span>
                </h1>
                <p className="mt-4 text-white/50 text-sm md:text-base font-mono tracking-widest max-w-md mx-auto">
                  Scroll down to synchronize portfolio frames
                </p>
              </motion.div>
            )}

            {/* Stage 2: Main Name Reveal */}
            {showStage2 && (
              <motion.div
                key="stage2"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.15 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center relative"
              >
                {/* Anime energy slash effect backdrop */}
                <div className="absolute -inset-10 bg-[radial-gradient(circle_at_center,rgba(234,88,12,0.15),transparent_70%)] blur-2xl pointer-events-none" />
                
                <h1 className="font-display text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-none select-none text-glow-red bg-clip-text text-transparent bg-gradient-to-b from-white via-deepRed-500 to-black">
                  HARISH K
                </h1>
                <p className="mt-4 font-mono text-gold-400 tracking-[0.5em] text-xs md:text-sm uppercase">
                  Full Stack Engineer & Creative Coder
                </p>
              </motion.div>
            )}

            {/* Stage 3: Final Call-To-Action & Role Summary */}
            {showStage3 && (
              <motion.div
                key="stage3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
                className="text-center max-w-4xl px-4 flex flex-col items-center"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="px-4 py-1.5 rounded-full glass-panel border-fireOrange-500/20 text-fireOrange-400 text-xs md:text-sm font-mono tracking-wider mb-6 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-fireOrange-500 animate-pulse" />
                  Available for Internships & Roles
                </motion.div>

                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-tight">
                  Full Stack Developer
                </h1>
                
                <p className="mt-4 text-white/70 max-w-xl text-sm md:text-base tracking-wide">
                  Building scalable backend architectures, immersive frontends, and intelligent cloud solutions.
                </p>

                {/* Tech stack badges */}
                <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-md">
                  {["React", "Go", "Spring Boot", "Cloud", "PostgreSQL", "Docker"].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono rounded bg-white/5 border border-white/10 text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="#projects"
                    className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-fireOrange-600 to-deepRed-600 hover:from-fireOrange-500 hover:to-deepRed-500 text-white text-sm font-medium tracking-wide shadow-glow-orange hover:shadow-glow-red transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href="#contact"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-medium tracking-wide transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* Scroll Indicator at bottom */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">
            Scroll progress
          </span>
          <div className="w-[120px] h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-fireOrange-500 transition-all duration-100 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
