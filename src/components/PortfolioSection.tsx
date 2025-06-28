"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export function PortfolioSection() {
  const portfolioItems = [
    {
      title: "WeddingConnect Pro",
      category: "Wedding Portal Software",
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      description: "Teams-like collaboration platform for wedding planning",
      backgroundImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
    },
    {
      title: "TaxFlow AI",
      category: "AI Tax Automation",
      image: "bg-gradient-to-br from-blue-500 to-indigo-600",
      description: "Intelligent tax processing with team collaboration",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "LidarSynth Engine",
      category: "Synthetic Data Platform",
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      description: "Advanced LIDAR data generation for ML training",
      backgroundImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Enterprise Chat Hub",
      category: "Collaboration Platform",
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      description: "Secure messaging and file sharing solution",
      backgroundImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1539&q=80"
    },
    {
      title: "DataFlow Analytics",
      category: "Business Intelligence",
      image: "bg-gradient-to-br from-blue-500 to-blue-600",
      description: "Real-time data processing and visualization",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "CloudSync Manager",
      category: "Infrastructure Solution",
      image: "bg-gradient-to-br from-violet-500 to-purple-600",
      description: "Multi-cloud synchronization and management",
      backgroundImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
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
            PORTFOLIO/PROJECTS
          </motion.div>
          <motion.h2
            className="text-3xl font-bold tracking-tighter mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Software Solutions
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore our portfolio of enterprise software solutions that have transformed how organizations collaborate, automate, and innovate.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className={`${item.image} w-full h-64 transition-transform duration-500 ease-in-out group-hover:scale-110 relative overflow-hidden`}>
                {/* Background image */}
                {item.backgroundImage && (
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  />
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/60" />

                {/* Background pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                      radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Project type indicator */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                    {item.category}
                  </span>
                </div>

                {/* Tech stack indicators */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-400" title="React" />
                    <div className="w-2 h-2 rounded-full bg-green-400" title="Node.js" />
                    <div className="w-2 h-2 rounded-full bg-purple-400" title="AI/ML" />
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.h3
                  className="text-xl font-bold mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  className="text-sm opacity-80 mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  {item.category}
                </motion.p>
                <motion.p
                  className="text-xs opacity-70 mb-4 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.description}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/20 group/btn">
                    <span>View Details</span>
                    <ExternalLink className="h-3 w-3 ml-1 transition-transform group-hover/btn:translate-x-0.5" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button asChild className="group">
            <Link href="/portfolio" className="flex items-center gap-2">
              <span>View All Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}