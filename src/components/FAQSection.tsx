"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FAQSection() {
  const faqs = [
    {
      question: "What types of software solutions does Unizel develop?",
      answer: "Unizel specializes in enterprise software development including collaboration platforms (Teams-like solutions), AI automation systems, data processing platforms, and custom business applications. Our flagship projects include wedding portal software, AI tax automation platforms, and synthetic data generation for LIDAR applications."
    },
    {
      question: "How do you ensure software security and compliance?",
      answer: "We implement bank-grade security measures including end-to-end encryption, multi-factor authentication, role-based access controls, and compliance with industry standards like SOC 2, GDPR, and HIPAA where applicable. Our security-first approach ensures your data and operations remain protected."
    },
    {
      question: "What technologies and platforms do you work with?",
      answer: "We work with modern technology stacks including React, Node.js, Python, .NET, cloud platforms (AWS, Azure, GCP), databases (PostgreSQL, MongoDB), and AI/ML frameworks. We select the optimal technology stack based on your specific requirements, scalability needs, and existing infrastructure."
    },
    {
      question: "What is your development process and pricing?",
      answer: "We follow agile development methodologies with transparent pricing models including fixed-price projects, time & materials, and dedicated team arrangements. Our pricing is tailored to project complexity, timeline, and ongoing support requirements. We provide detailed estimates during our initial consultation."
    },
    {
      question: "How long does it take to develop a custom software solution?",
      answer: "Development timelines vary based on project complexity. Simple applications may take 2-3 months, while enterprise platforms like our Teams-like collaboration solutions typically require 6-12 months. We provide detailed project timelines and regular progress updates throughout development."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive post-launch support including bug fixes, security updates, feature enhancements, and technical support. We provide flexible maintenance packages ranging from basic support to full managed services, ensuring your software continues to perform optimally."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our software development services, process, and how we can help transform your business with custom technology solutions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <div className="ml-2 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              <div
                className={`mt-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}