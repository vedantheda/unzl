"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeroCard } from "@/components/HeroCard";
import { PlatformDemo } from "@/components/VideoDemo";
import { motion } from "framer-motion";
import { ArrowRight, Play, Code, Database, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-32 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">

      {/* Floating geometric shapes with animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-1/4 w-40 h-40 border-2 border-primary/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-1/4 w-32 h-32 border-2 border-primary/30 rounded-lg"
          animate={{
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-primary/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col gap-4 sm:gap-6 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-primary text-sm font-medium mb-2 glass-effect backdrop-blur-md w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-primary mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              Enterprise Software Development Agency
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Building Tomorrow's{" "}
              <span className="relative inline-block">
                <motion.span
                  className="unizel-gradient"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Enterprise Solutions
                </motion.span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
              {" "}Today.
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Unizel specializes in developing cutting-edge collaboration platforms, AI-powered automation solutions, and advanced data technologies that transform how enterprises operate and scale.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" className="designer-button px-6 sm:px-8 py-3 sm:py-4 lg:py-6 group w-full sm:w-auto" asChild>
                <Link href="/portfolio" className="flex items-center justify-center gap-2">
                  <span>View Our Solutions</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-2 border-primary/20 hover:border-primary/50 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 lg:py-6 group w-full sm:w-auto" asChild>
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <span>Start Your Project</span>
                  <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
                </Link>
              </Button>
            </motion.div>

            {/* Tech stack indicators */}
            <motion.div
              className="flex items-center gap-6 mt-8 pt-6 border-t border-border/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Code className="h-4 w-4 text-primary" />
                <span>Enterprise Development</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Database className="h-4 w-4 text-primary" />
                <span>AI & Data</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>Security First</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Background glow effect */}
            <motion.div
              className="absolute inset-0 w-3/4 h-3/4 bg-primary/10 rounded-[40px] blur-3xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Main content area */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-6">
              {/* Enhanced dashboard card */}
              <motion.div
                className="relative w-full max-w-lg"
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  className="transform rotate-3 shadow-2xl overflow-hidden"
                  whileHover={{
                    rotate: 0,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <HeroCard />
                </motion.div>
              </motion.div>

              {/* Video demo section */}
              <motion.div
                className="relative w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <PlatformDemo />
              </motion.div>

              {/* Floating feature cards */}
              <div className="absolute top-10 -left-10 hidden lg:block">
                <motion.div
                  className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -10, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.8, delay: 1.2 },
                    x: { duration: 0.8, delay: 1.2 },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs font-medium">99.9% Uptime</span>
                  </div>
                </motion.div>
              </div>

              <div className="absolute bottom-10 -right-10 hidden lg:block">
                <motion.div
                  className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, 10, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.8, delay: 1.4 },
                    x: { duration: 0.8, delay: 1.4 },
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-xs font-medium">150+ Projects</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}