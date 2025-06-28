"use client";

import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";

export default function CreativeReferencesPage() {
  const creativeReferences = [
    {
      category: "Collaboration Platforms",
      references: [
        {
          title: "Microsoft Teams - Enterprise Collaboration",
          description: "Microsoft Teams demonstrates how to build comprehensive collaboration platforms that integrate chat, video, file sharing, and app integration in a seamless user experience.",
          url: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
          imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1539&q=80"
        },
        {
          title: "Slack - Team Communication",
          description: "Slack's approach to team communication shows how to create intuitive interfaces that make complex workflows feel simple and engaging for users.",
          url: "https://slack.com/",
          imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
        },
        {
          title: "Notion - Collaborative Workspace",
          description: "Notion's all-in-one workspace demonstrates how to create flexible platforms that combine documentation, project management, and team collaboration.",
          url: "https://notion.so/",
          imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1526&q=80"
        }
      ]
    },
    {
      category: "AI & Automation",
      references: [
        {
          title: "OpenAI - GPT Integration",
          description: "OpenAI's API demonstrates how to integrate advanced AI capabilities into applications, providing intelligent automation and natural language processing features.",
          url: "https://openai.com/api/",
          imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
        },
        {
          title: "Zapier - Workflow Automation",
          description: "Zapier's platform shows how to create user-friendly automation tools that connect different services and streamline complex business workflows.",
          url: "https://zapier.com/",
          imageUrl: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
        },
        {
          title: "Microsoft Power Automate - Business Process Automation",
          description: "Power Automate demonstrates how to build enterprise-grade automation solutions that integrate with existing business systems and workflows.",
          url: "https://powerautomate.microsoft.com/",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1515&q=80"
        }
      ]
    },
    {
      category: "Data & Analytics",
      references: [
        {
          title: "Tableau - Data Visualization",
          description: "Tableau's approach to data visualization demonstrates how to create intuitive interfaces that make complex data accessible and actionable for business users.",
          url: "https://www.tableau.com/",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        },
        {
          title: "Snowflake - Cloud Data Platform",
          description: "Snowflake's cloud data platform shows how to build scalable data infrastructure that can handle massive datasets with high performance and security.",
          url: "https://www.snowflake.com/",
          imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80"
        },
        {
          title: "Power BI - Business Intelligence",
          description: "Microsoft Power BI demonstrates how to create comprehensive business intelligence platforms that transform raw data into actionable insights for enterprise decision-making.",
          url: "https://powerbi.microsoft.com/",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1515&q=80"
        }
      ]
    }
  ];

  const organizationTips = [
    {
      title: "Code Architecture & Design Patterns",
      description: "Organize your software projects using proven architectural patterns and design principles to ensure maintainability, scalability, and code quality.",
      steps: [
        "Implement clean architecture with clear separation of concerns",
        "Use design patterns appropriate for your technology stack",
        "Follow SOLID principles for object-oriented design",
        "Establish consistent coding standards and conventions"
      ]
    },
    {
      title: "Project Documentation Standards",
      description: "Create comprehensive documentation that helps team members and stakeholders understand your software solutions and their implementation.",
      steps: [
        "Write clear README files with setup and usage instructions",
        "Document API endpoints with examples and response formats",
        "Create technical architecture diagrams and system overviews",
        "Maintain changelog and version history",
        "Include troubleshooting guides and FAQ sections"
      ]
    },
    {
      title: "Development Workflow & CI/CD",
      description: "Implement systematic development workflows that ensure code quality, automated testing, and reliable deployment processes.",
      steps: [
        "Set up version control with branching strategies (Git Flow)",
        "Implement automated testing (unit, integration, end-to-end)",
        "Configure continuous integration and deployment pipelines",
        "Establish code review processes and quality gates",
        "Monitor application performance and error tracking"
      ]
    },
    {
      title: "Security & Performance Best Practices",
      description: "Ensure your software solutions meet enterprise standards for security, performance, and reliability.",
      steps: [
        "Implement authentication and authorization mechanisms",
        "Use encryption for data at rest and in transit",
        "Optimize database queries and implement caching strategies",
        "Set up monitoring and alerting for system health",
        "Conduct regular security audits and penetration testing"
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="badge mb-6">Technical Resources</div>
            <h1 className="mb-6">
              <span className="block">Technical Resources &</span>
              <span className="block text-gradient">Development Best Practices</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Explore our curated collection of technical resources and learn how to systematically organize your software development projects for maximum impact.
            </p>
          </div>
        </div>
      </section>

      {/* Creative References Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical References</h2>

          <div className="space-y-16">
            {creativeReferences.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-6">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.references.map((reference, refIndex) => (
                    <div key={refIndex} className="bg-card rounded-xl overflow-hidden border border-border/50">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={reference.imageUrl}
                          alt={reference.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold mb-2">{reference.title}</h4>
                        <p className="text-muted-foreground mb-4">{reference.description}</p>
                        <Button asChild variant="outline" size="sm">
                          <a href={reference.url} target="_blank" rel="noopener noreferrer">
                            View Platform
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Tips Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Software Development Best Practices</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {organizationTips.map((tip, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border border-border/50">
                <h3 className="text-xl font-bold mb-4">{tip.title}</h3>
                <p className="text-muted-foreground mb-6">{tip.description}</p>
                <h4 className="font-bold mb-2">Implementation Steps:</h4>
                <ul className="space-y-2">
                  {tip.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
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
