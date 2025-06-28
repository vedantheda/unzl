"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";

export function Preloader() {
  const [loading, setLoading] = useState(() => {
    // Check immediately if we should show preloader
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hasSeenPreloader');
    }
    return true;
  });
  const [phase, setPhase] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Mark as seen on first load
  useEffect(() => {
    if (loading && typeof window !== 'undefined') {
      sessionStorage.setItem('hasSeenPreloader', 'true');
    }
  }, [loading]);

  // Modern loading animation with phases
  useEffect(() => {
    if (!loading) return;

    // Phase 0: Initial animation (600ms)
    // Phase 1: Transition animation (600ms)
    // Phase 2: Logo formation (800ms)
    // Phase 3: Complete and exit (1000ms) - longer outro

    const timer1 = setTimeout(() => setPhase(1), 600);
    const timer2 = setTimeout(() => setPhase(2), 1200);
    const timer3 = setTimeout(() => setPhase(3), 2000);
    const timer4 = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [loading]);

  // DNA helix animation
  useEffect(() => {
    if (!canvasRef.current || phase > 1) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: {x: number, y: number, size: number, color: string, vx: number, vy: number}[] = [];
    const particleCount = 100;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) * 0.3;

    // Create DNA helix particles
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 10;
      const x = centerX + Math.cos(angle) * radius * Math.sin(angle * 0.2);
      const y = centerY + (i / particleCount) * canvas.height * 0.8 - canvas.height * 0.4;
      const size = Math.random() * 2 + 1;

      // Alternate colors for DNA strands
      const color = i % 2 === 0 ?
        `rgba(0, 120, 255, ${Math.random() * 0.5 + 0.5})` :
        `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.2})`;

      particles.push({
        x, y, size, color,
        vx: 0,
        vy: 0
      });
    }

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Phase 0: DNA helix animation
      if (phase === 0) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const angle = (i / particleCount) * Math.PI * 10 + Date.now() * 0.001;
          p.x = centerX + Math.cos(angle) * radius * Math.sin(angle * 0.2);

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          // Connect particles to form DNA strands
          if (i > 0 && i % 2 === 0) {
            ctx.beginPath();
            ctx.moveTo(particles[i-2].x, particles[i-2].y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = 'rgba(0, 120, 255, 0.2)';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      // Phase 1: Particle explosion
      else if (phase === 1) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // Add explosion velocity if not already set
          if (p.vx === 0) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 5 + 2;
            p.vx = Math.cos(angle) * speed;
            p.vy = Math.sin(angle) * speed;
          }

          p.x += p.vx;
          p.y += p.vy;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [phase]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(10px)"
          }}
          transition={{
            duration: 1,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          {/* DNA Helix Animation Canvas (Phases 0-1) */}
          {phase < 2 && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
            />
          )}

          {/* Logo Formation (Phase 2+) */}
          {phase >= 2 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: phase === 3 ? 1.2 : 1,
                opacity: 1,
                rotateY: phase === 3 ? 360 : 0
              }}
              transition={{
                type: "spring",
                damping: 12,
                stiffness: 200,
                rotateY: { duration: 0.8, ease: "easeInOut" }
              }}
              className="relative z-10"
            >
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: phase === 3 ? "brightness(1.5)" : "brightness(1)"
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  type: "spring",
                  filter: { duration: 0.5 }
                }}
              >
                <Logo size="xl" showText={false} animated={true} href="" />
              </motion.div>
            </motion.div>
          )}

          {/* Removed circuit board pattern */}

          {/* Pulsing glow effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
