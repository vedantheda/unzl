"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Brain, Database } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Wedding Portal Software",
      description: "Enterprise-grade collaboration platform designed specifically for wedding planning, featuring Teams-like functionality with specialized tools for vendors, couples, and planners.",
      features: ["Real-time Collaboration", "Vendor Management", "Timeline Planning", "Document Sharing", "Video Conferencing", "Task Management"]
    },
    {
      title: "AI Tax Automation Software",
      description: "Intelligent tax processing platform that combines Teams-like collaboration with advanced AI automation for streamlined tax preparation and compliance workflows.",
      features: ["AI-Powered Document Processing", "Automated Tax Calculations", "Compliance Monitoring", "Team Collaboration", "Client Portal", "Audit Trail Management"]
    },
    {
      title: "Synthetic Data for LIDAR",
      description: "Advanced data generation platform that creates high-quality synthetic LIDAR datasets for autonomous vehicle training, urban planning, and machine learning applications.",
      features: ["3D Environment Simulation", "Realistic Sensor Modeling", "Custom Scenario Generation", "Data Validation Tools", "Export Formats", "Scalable Processing"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center justify-center px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-primary mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            OUR SOLUTIONS
          </motion.div>
          <motion.h2
            className="text-3xl lg:text-4xl font-bold tracking-tighter mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Enterprise Software Projects
          </motion.h2>
          <motion.p
            className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We develop cutting-edge software solutions that transform business operations through intelligent collaboration platforms, AI automation, and advanced data technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="p-8 h-full group hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {index === 0 && <Users className="h-6 w-6 text-primary" />}
                  {index === 1 && <Brain className="h-6 w-6 text-primary" />}
                  {index === 2 && <Database className="h-6 w-6 text-primary" />}
                </motion.div>

                <div className="relative z-10">
                  <motion.h3
                    className="text-2xl font-bold mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {service.title}
                  </motion.h3>

                  <motion.p
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>

                  <motion.ul
                    className="space-y-3 mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 + index * 0.1 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Button variant="outline" asChild className="w-full group/btn">
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </motion.div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}