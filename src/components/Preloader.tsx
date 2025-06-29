"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [hasSeenPreloader, setHasSeenPreloader] = useState(false);
  const [phase, setPhase] = useState(0);
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Handle hydration safely
  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem('hasSeenPreloader');
    if (seen) {
      setHasSeenPreloader(true);
      setLoading(false);
    }
  }, []);

  // Mark as seen when preloader starts
  useEffect(() => {
    if (loading && mounted && !hasSeenPreloader) {
      sessionStorage.setItem('hasSeenPreloader', 'true');
    }
  }, [loading, mounted, hasSeenPreloader]);

  // Modern loading animation with phases
  useEffect(() => {
    if (!loading || !mounted || hasSeenPreloader) return;

    // Phase 0: Initial blur and particles (800ms)
    // Phase 1: Particle convergence (600ms)
    // Phase 2: Logo formation (700ms)
    // Phase 3: Complete and exit (900ms)

    const timer1 = setTimeout(() => setPhase(1), 800);
    const timer2 = setTimeout(() => setPhase(2), 1400);
    const timer3 = setTimeout(() => setPhase(3), 2100);
    const timer4 = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [loading, mounted, hasSeenPreloader]);

  // Enhanced particle animation with blur effects
  useEffect(() => {
    if (!canvasRef.current || phase > 1 || !mounted) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {x: number, y: number, size: number, color: string, vx: number, vy: number, alpha: number}[] = [];
    const particleCount = 80;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.25;

    // Create floating particles with blur effect
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 2;
      const distance = Math.random() * radius + 50;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      const size = Math.random() * 3 + 1;
      const alpha = Math.random() * 0.8 + 0.2;

      // Enhanced color palette with blur-friendly colors
      const colors = [
        `rgba(0, 120, 255, ${alpha})`,
        `rgba(100, 200, 255, ${alpha * 0.8})`,
        `rgba(255, 255, 255, ${alpha * 0.6})`,
        `rgba(0, 180, 255, ${alpha * 0.9})`
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particles.push({
        x, y, size, color, alpha,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add blur effect to canvas
      ctx.filter = phase === 0 ? 'blur(1px)' : 'blur(0.5px)';

      // Phase 0: Floating particles with gentle movement
      if (phase === 0) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const time = Date.now() * 0.001;

          // Gentle floating motion
          p.x += Math.sin(time + i * 0.1) * 0.3;
          p.y += Math.cos(time + i * 0.15) * 0.2;
          p.vx += p.vx;
          p.vy += p.vy;

          // Create glow effect
          ctx.shadowColor = p.color;
          ctx.shadowBlur = p.size * 3;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Reset shadow
          ctx.shadowBlur = 0;

          // Connect nearby particles with glowing lines
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);

            if (distance < 100) {
              const opacity = (100 - distance) / 100 * 0.3;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(0, 120, 255, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }
      // Phase 1: Particles converge to center
      else if (phase === 1) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Move towards center
          const dx = centerX - p.x;
          const dy = centerY - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance > 5) {
            p.x += dx * 0.05;
            p.y += dy * 0.05;
          }

          // Enhanced glow as particles converge
          ctx.shadowColor = p.color;
          ctx.shadowBlur = p.size * 4;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 1.2, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          ctx.shadowBlur = 0;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [phase]);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  // Don't show preloader if already seen
  if (hasSeenPreloader) {
    return null;
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(20px)"
          }}
          transition={{
            duration: 1.2,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          {/* Enhanced Particle Animation Canvas (Phases 0-1) */}
          {phase < 2 && (
            <motion.canvas
              ref={canvasRef}
              initial={{ opacity: 0, filter: "blur(5px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            />
          )}

          {/* Logo Formation with Enhanced Effects (Phase 2+) */}
          {phase >= 2 && (
            <motion.div
              initial={{ scale: 0, opacity: 0, filter: "blur(10px)" }}
              animate={{
                scale: phase === 3 ? 1.1 : 1,
                opacity: 1,
                filter: phase === 3 ? "blur(0px) brightness(1.3)" : "blur(0px)",
                rotateY: phase === 3 ? 360 : 0
              }}
              transition={{
                type: "spring",
                damping: 15,
                stiffness: 300,
                rotateY: { duration: 0.9, ease: "easeInOut" },
                filter: { duration: 0.6 }
              }}
              className="relative z-10"
            >
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.5, filter: "blur(5px)" }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)"
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  type: "spring",
                  damping: 20
                }}
              >
                <Logo size="xl" showText={false} animated={true} href="" />
              </motion.div>
            </motion.div>
          )}

          {/* Enhanced Multi-layer Glow Effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Primary glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Secondary glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-400/20 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            {/* Tertiary glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
