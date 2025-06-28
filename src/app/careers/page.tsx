"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Briefcase, Heart, Zap, Globe, Award } from "lucide-react";

export default function CareersPage() {
  const jobOpenings = [
    {
      id: "senior-fullstack-developer",
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our engineering team to build cutting-edge collaboration platforms and AI-powered solutions.",
      requirements: [
        "5+ years of experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong understanding of microservices architecture",
        "Experience with AI/ML integration is a plus"
      ],
      benefits: ["Competitive salary", "Equity package", "Remote work", "Health insurance"]
    },
    {
      id: "ai-ml-engineer",
      title: "AI/ML Engineer",
      department: "AI & Data",
      location: "Remote / New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Lead the development of AI automation solutions and synthetic data generation platforms.",
      requirements: [
        "3+ years of experience in machine learning and AI",
        "Proficiency in Python, TensorFlow, or PyTorch",
        "Experience with data processing and synthetic data generation",
        "Knowledge of LIDAR data processing is a plus"
      ],
      benefits: ["Competitive salary", "Research budget", "Conference attendance", "Flexible hours"]
    },
    {
      id: "product-designer",
      title: "Senior Product Designer",
      department: "Design",
      location: "Remote / Los Angeles",
      type: "Full-time",
      experience: "4+ years",
      description: "Design intuitive user experiences for enterprise collaboration platforms.",
      requirements: [
        "4+ years of product design experience",
        "Expertise in Figma, Sketch, or similar tools",
        "Experience designing for enterprise software",
        "Strong understanding of design systems"
      ],
      benefits: ["Competitive salary", "Design tool budget", "Creative freedom", "Team retreats"]
    },
    {
      id: "devops-engineer",
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      description: "Build and maintain scalable infrastructure for our enterprise software solutions.",
      requirements: [
        "4+ years of DevOps and infrastructure experience",
        "Expertise in Kubernetes, Docker, and CI/CD",
        "Experience with cloud platforms and monitoring",
        "Knowledge of security best practices"
      ],
      benefits: ["Competitive salary", "Learning budget", "Certification support", "Stock options"]
    }
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Remote-First",
      description: "Work from anywhere with flexible hours and async collaboration."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Growth & Learning",
      description: "Learning budget, conference attendance, and mentorship programs."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Competitive Package",
      description: "Competitive salary, equity, and performance bonuses."
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with technology."
    },
    {
      title: "Collaboration",
      description: "We build better solutions when we work together."
    },
    {
      title: "Quality",
      description: "We deliver enterprise-grade solutions that exceed expectations."
    },
    {
      title: "Growth",
      description: "We invest in our team's personal and professional development."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              className="badge mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Join Our Team
            </motion.div>

            <motion.h1
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Build the Future of</span>
              <span className="block text-gradient">Enterprise Software</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join Unizel and help us create cutting-edge collaboration platforms, AI automation solutions, and data technologies that transform how enterprises operate.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild size="lg">
                <a href="#open-positions">View Open Positions</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Unizel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-card p-6 rounded-xl border border-border/50 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Work at Unizel?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive benefits and a culture that supports your growth and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex gap-4 p-6 bg-card rounded-xl border border-border/50"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our team and help build the next generation of enterprise software solutions.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        <span>{job.department}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/careers/${job.id}`}>Apply Now</Link>
                  </Button>
                </div>

                <p className="text-muted-foreground mb-4">{job.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {job.requirements.slice(0, 2).map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                      {job.requirements.length > 2 && (
                        <li className="text-primary text-sm">
                          +{job.requirements.length - 2} more requirements
                        </li>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Don't see a position that fits? We're always looking for talented people.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Send Us Your Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Life at Unizel</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We're building more than just software – we're building a culture where innovation thrives,
                collaboration is natural, and every team member can do their best work.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Remote-first with optional office spaces</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Flexible working hours and async collaboration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Regular team retreats and virtual events</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Continuous learning and development opportunities</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-xl overflow-hidden border border-border/50 bg-gradient-to-br from-primary/20 to-primary/5">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-lg font-semibold mb-2">Team Culture Video</p>
                    <p className="text-sm text-muted-foreground">Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
