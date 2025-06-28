"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Code, Database, Shield, ArrowRight, CheckCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-28 relative">
      {/* Professional designer pattern - subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Decorative elements with animation */}
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-primary/20 rounded-tl-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-primary/20 rounded-br-3xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            />

            {/* Main image area with enhanced 3D effect */}
            <div className="relative mx-auto max-w-md">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl transform rotate-3"
                animate={{
                  rotate: [3, 5, 3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="relative bg-background rounded-2xl shadow-xl overflow-hidden border border-border/50 transform -rotate-3 transition-transform hover:rotate-0 duration-500"
                whileHover={{
                  rotate: 0,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="p-1 bg-gradient-to-r from-primary/20 to-primary/5">
                  <div className="bg-background p-6 rounded-xl">
                    <div className="grid grid-cols-2 gap-4">
                      {/* Feature blocks with professional styling */}
                      <div className="bg-muted/50 p-5 rounded-xl border border-border/50">
                        <div className="w-10 h-10 rounded-full bg-primary/20 mb-3 flex items-center justify-center">
                          <Users className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="text-sm font-medium mb-1">Collaboration Platforms</h4>
                        <p className="text-xs text-muted-foreground">Teams-like enterprise solutions</p>
                      </div>
                      <div className="bg-muted/50 p-5 rounded-xl border border-border/50">
                        <div className="w-10 h-10 rounded-full bg-primary/20 mb-3 flex items-center justify-center">
                          <Code className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="text-sm font-medium mb-1">AI Automation</h4>
                        <p className="text-xs text-muted-foreground">Intelligent workflow automation</p>
                      </div>
                      <div className="bg-muted/50 p-5 rounded-xl border border-border/50">
                        <div className="w-10 h-10 rounded-full bg-primary/20 mb-3 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="text-sm font-medium mb-1">Enterprise Security</h4>
                        <p className="text-xs text-muted-foreground">Bank-grade security standards</p>
                      </div>
                      <div className="bg-muted/50 p-5 rounded-xl border border-border/50">
                        <div className="w-10 h-10 rounded-full bg-primary/20 mb-3 flex items-center justify-center">
                          <Database className="h-5 w-5 text-primary" />
                        </div>
                        <h4 className="text-sm font-medium mb-1">Data Analytics</h4>
                        <p className="text-xs text-muted-foreground">Advanced insights and reporting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.div
                className="inline-flex items-center justify-center px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="w-2 h-2 rounded-full bg-primary mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                WHAT MAKES UNIZEL EXCEPTIONAL
              </motion.div>
              <motion.h2
                className="text-4xl font-bold tracking-tight mb-4 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                About Unizel Software Agency
              </motion.h2>
              <motion.div
                className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-6"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                style={{ transformOrigin: "left" }}
              />
            </div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              At Unizel, we specialize in developing enterprise-grade software solutions that transform how organizations collaborate, automate processes, and leverage data.
              Our expertise spans collaboration platforms, AI-powered automation systems, and cutting-edge data technologies that drive business innovation.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              We're not just another software agency - we're your technology partner for building scalable, secure, and intelligent solutions that grow with your business.
              Our portfolio includes Teams-like collaboration platforms, AI automation systems, and advanced data processing solutions that deliver measurable results.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower organizations with innovative software solutions that enhance collaboration, automate complex processes, and unlock the potential of their data through cutting-edge technology.
                </p>
              </div>
              <div className="bg-muted/30 p-6 rounded-2xl border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading software development partner for enterprises seeking scalable, intelligent solutions that drive digital transformation and competitive advantage.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <Button asChild className="w-fit mt-4 rounded-xl px-8 py-6 shadow-lg group">
                <Link href="/about" className="flex items-center gap-2">
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}