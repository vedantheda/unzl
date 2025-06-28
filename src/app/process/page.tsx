"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";

export default function ProcessPage() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business requirements, technical infrastructure, and objectives. This deep dive helps us identify the software solutions that will drive the best outcomes.",
      details: [
        "Business Requirements Analysis",
        "Technical Infrastructure Assessment",
        "Stakeholder Interviews",
        "Goal Setting & Success Metrics"
      ]
    },
    {
      number: "02",
      title: "Architecture & Planning",
      description: "Based on our discoveries, we develop a comprehensive software architecture and project plan that aligns with your business goals and technical requirements.",
      details: [
        "System Architecture Design",
        "Technology Stack Selection",
        "Resource Allocation Planning",
        "Timeline & Milestone Definition"
      ]
    },
    {
      number: "03",
      title: "Development & Implementation",
      description: "Our development team builds your software solution with precision, implementing best practices and modern technologies to ensure scalability and performance.",
      details: [
        "Agile Development Process",
        "Code Quality Assurance",
        "Security Implementation",
        "Testing Framework Setup"
      ]
    },
    {
      number: "04",
      title: "Testing & Optimization",
      description: "We rigorously test your software across all scenarios, optimizing performance and ensuring reliability before deployment.",
      details: [
        "Automated Testing",
        "Performance Optimization",
        "Security Auditing",
        "User Acceptance Testing"
      ]
    },
    {
      number: "05",
      title: "Deployment & Support",
      description: "We deploy your solution with minimal disruption and provide ongoing support to ensure optimal performance and continuous improvement.",
      details: [
        "Production Deployment",
        "Performance Monitoring",
        "User Training & Documentation",
        "Ongoing Maintenance & Updates"
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="badge mb-6">Our Process</div>
            <h1 className="mb-6">
              <span className="block">How We Deliver</span>
              <span className="block text-gradient">Enterprise Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Our proven process ensures we deliver enterprise software solutions that not only meet your requirements but also exceed your performance and scalability expectations.
            </p>
            <Button asChild size="lg">
              <Link href="#process">Explore Our Process</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Software Development Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow an agile, quality-focused approach to ensure consistent, high-performance outcomes for every software project.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="mb-16 last:mb-0">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary">
                      {step.number}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{step.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="w-px h-16 bg-border/50 mx-auto my-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-card p-8 rounded-xl border border-border/50 relative">
              <div className="absolute -top-4 -left-4 text-6xl text-primary/20">"</div>
              <p className="text-lg mb-6 relative z-10">
                Unizel's collaboration platform transformed our wedding planning process. We saw our project coordination time drop by 85% and client satisfaction increase to 92% within the first quarter.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Operations Director, Wedding Solutions Inc</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl border border-border/50 relative">
              <div className="absolute -top-4 -left-4 text-6xl text-primary/20">"</div>
              <p className="text-lg mb-6 relative z-10">
                The team at Unizel understands how to create enterprise software solutions that not only meet our requirements but also exceed our performance expectations. They've become an extension of our development team.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20"></div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">CTO, Financial Services Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
