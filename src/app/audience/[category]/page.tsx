"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { useParams } from "next/navigation";

export default function AudienceCategoryPage() {
  const params = useParams();
  const category = params.category as string;

  // Define content for each audience category
  const categoryContent = {
    "enterprises": {
      title: "For Enterprise Organizations",
      subtitle: "Scale Your Operations with Enterprise Software Solutions",
      description: "Large organizations need robust, scalable software solutions to manage complex operations. Our enterprise platforms help you streamline collaboration and automate critical processes.",
      features: [
        "Enterprise Collaboration Platforms",
        "Advanced Security & Compliance",
        "Scalable Cloud Architecture",
        "Custom Integration Solutions"
      ],
      caseStudies: [
        {
          title: "Global Manufacturing Corp",
          description: "Improved internal communication efficiency by 40% with Enterprise Chat Hub",
          image: "bg-gradient-to-br from-blue-500 to-blue-600"
        },
        {
          title: "Financial Services Group",
          description: "Processed 500TB+ daily data with 90% reduction in report generation time",
          image: "bg-gradient-to-br from-green-500 to-green-600"
        }
      ]
    },
    "startups": {
      title: "For Startups & Growing Companies",
      subtitle: "Accelerate Growth with Scalable Software Solutions",
      description: "Growing companies need flexible, cost-effective software solutions that can scale with their business. Our platforms help you establish efficient workflows from day one.",
      features: [
        "MVP Development & Prototyping",
        "Scalable Architecture Design",
        "Cost-Effective Cloud Solutions",
        "Rapid Development & Deployment"
      ],
      caseStudies: [
        {
          title: "Wedding Industry Solutions",
          description: "Achieved 85% reduction in coordination time with WeddingConnect Pro platform",
          image: "bg-gradient-to-br from-purple-500 to-pink-600"
        },
        {
          title: "Tax Automation Startup",
          description: "Scaled from prototype to 60+ firms using TaxFlow AI platform",
          image: "bg-gradient-to-br from-blue-500 to-indigo-600"
        }
      ]
    },
    "agencies": {
      title: "For Development Agencies",
      subtitle: "Extend Your Software Development Capabilities",
      description: "Partner with us to expand your service offerings and deliver specialized software solutions to your clients without expanding your in-house team.",
      features: [
        "White-Label Development Services",
        "Specialized Platform Expertise",
        "Flexible Resource Scaling",
        "AI & Data Technology Solutions"
      ],
      caseStudies: [
        {
          title: "Agency Partnership",
          description: "Delivered 8 client projects with 95% satisfaction rate and on-time delivery",
          image: "bg-gradient-to-br from-blue-500 to-blue-600"
        },
        {
          title: "Specialized Development",
          description: "Provided LIDAR data expertise for autonomous vehicle client projects",
          image: "bg-gradient-to-br from-green-500 to-teal-600"
        }
      ]
    }
  };

  // Default content if category doesn't match
  const defaultContent = {
    title: "Custom Software Solutions",
    subtitle: "Tailored Development for Your Unique Needs",
    description: "Whatever your industry or requirements, we create custom software solutions that drive efficiency, enhance collaboration, and deliver measurable business value.",
    features: [
      "Customized Software Architecture",
      "Industry-Specific Solutions",
      "Performance-Driven Development",
      "ROI-Focused Implementation"
    ],
    caseStudies: [
      {
        title: "Custom Enterprise Solution",
        description: "Tailored platform delivering 99.9% uptime for unique industry requirements",
        image: "bg-gradient-to-br from-violet-500 to-purple-600"
      },
      {
        title: "Specialized Data Platform",
        description: "Custom analytics solution delivering 35% improvement in decision-making speed",
        image: "bg-gradient-to-br from-orange-500 to-red-600"
      }
    ]
  };

  // Get content based on category or use default
  const content = categoryContent[category as keyof typeof categoryContent] || defaultContent;

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="badge mb-6">Unizel Software Solutions</div>
            <h1 className="mb-6">
              <span className="block">{content.title}</span>
              <span className="block text-gradient">{content.subtitle}</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              {content.description}
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our specialized services for {category} include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-xl border border-border/50">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped other {category} achieve remarkable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {content.caseStudies.map((study, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden border border-border/50">
                <div className={`h-40 ${study.image}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground">{study.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
