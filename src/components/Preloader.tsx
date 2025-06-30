"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";
import { usePreloader } from "@/contexts/PreloaderContext";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [hasSeenPreloader, setHasSeenPreloader] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setIsPreloaderActive } = usePreloader();

  // Handle hydration safely
  useEffect(() => {
    setMounted(true);
    const seen = sessionStorage.getItem('hasSeenPreloader');
    if (seen) {
      setHasSeenPreloader(true);
      setLoading(false);
      setIsPreloaderActive(false);
    } else {
      setIsPreloaderActive(true);
    }
  }, [setIsPreloaderActive]);

  // Mark as seen when preloader starts
  useEffect(() => {
    if (loading && mounted && !hasSeenPreloader) {
      sessionStorage.setItem('hasSeenPreloader', 'true');
    }
  }, [loading, mounted, hasSeenPreloader]);

  // Simple loading animation
  useEffect(() => {
    if (!loading || !mounted || hasSeenPreloader) return;

    // Simple 2.5 second preloader
    const timer = setTimeout(() => {
      setLoading(false);
      setIsPreloaderActive(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [loading, mounted, hasSeenPreloader, setIsPreloaderActive]);



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
            scale: 1.1,
            filter: "blur(10px)"
          }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
        >
          {/* Logo with smooth animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2
            }}
            className="relative z-10 mb-8"
          >
            <Logo size="xl" showText={false} animated={true} href="" />
          </motion.div>

          {/* Simple loading spinner */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
          </motion.div>

          {/* Subtle background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            className="text-sm text-muted-foreground mt-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
