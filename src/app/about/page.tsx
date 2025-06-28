import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Building2, Code, Zap, TrendingUp, Shield } from "lucide-react";

export default function AboutPage() {
  const teamCircles = Array.from({ length: 9 }).map((_, i) => `team-circle-${i + 1}`);

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="badge mb-6">Explore Our Journey</div>
            <h1 className="mb-6">
              <span className="block">Building Enterprise Software</span>
              <span className="block text-gradient">with Unizel!</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Unizel is your trusted partner for enterprise software development. We specialize in creating collaboration platforms, AI automation solutions, and cutting-edge data technologies.
            </p>
            <Button asChild size="lg">
              <Link href="#about">Learn About Unizel</Link>
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
            alt="Enterprise Software Development Team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="mb-6">
                <div className="badge mb-4">About Unizel</div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h2 className="mb-6">
                <span className="block">Transforming Business</span>
                <span className="block">With Enterprise Software Solutions</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Unizel is a leading software development agency built for enterprises, organizations, and businesses seeking scalable collaboration platforms, AI automation, and innovative data technologies.
              </p>
            </div>

            <div className="w-full md:w-1/2 space-y-8">
              <div className="rounded-lg bg-card border border-border/50 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Develop</h3>
                    <h4 className="text-lg font-medium mb-3">Built for Modern Enterprises</h4>
                    <p className="text-muted-foreground text-sm">
                      Whether you're managing a large organization, enterprise team, or specialized business, Unizel provides software solutions that enhance collaboration and productivity. Our platforms are purpose-built to help you streamline operations and drive efficiency.
                    </p>
                    <div className="flex gap-3 mt-4">
                      <div className="px-3 py-1 bg-muted rounded-full text-xs">Collaboration Platforms</div>
                      <div className="px-3 py-1 bg-muted rounded-full text-xs">Enterprise-Grade</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-card border border-border/50 p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Optimize</h3>
                    <h4 className="text-lg font-medium mb-3">Designed for Software Performance</h4>
                    <p className="text-muted-foreground text-sm">
                      Unizel is crafted with scalability, security, and performance at its core. Our software solutions are designed to handle enterprise workloads while providing seamless experiences for teams and organizations.
                    </p>
                    <div className="flex gap-3 mt-4">
                      <div className="px-3 py-1 bg-muted rounded-full text-xs">AI-Powered</div>
                      <div className="px-3 py-1 bg-muted rounded-full text-xs">Scalable</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1526&q=80"
                alt="Enterprise Software Development Team Collaboration"
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="badge mb-4">Scale</div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h2 className="mb-6">Scales With Your Business Needs</h2>
              <p className="text-muted-foreground mb-8">
                From startups to enterprise organizations, Unizel solutions are flexible and scalable. As your business grows, our software adapts—so your platforms evolve with your organizational goals.
              </p>
              <Button asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="mb-6">
                <div className="badge mb-4">Unizel Solutions</div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h2 className="mb-6">
                <span className="block">Elevate Your Business with</span>
                <span className="block">Enterprise Software!</span>
              </h2>

              <div className="space-y-6">
                <div className="bg-card border border-border/50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-2">Collaboration Platforms</h4>
                  <p className="text-muted-foreground">
                    We combine technical expertise and user experience design to build Teams-like platforms that enhance productivity and streamline communication across organizations.
                  </p>
                </div>

                <div className="bg-card border border-border/50 rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-2">AI Automation Solutions</h4>
                  <p className="text-muted-foreground">
                    Our expertise in artificial intelligence and automation ensures your workflows can provide optimal efficiency while reducing manual tasks and improving accuracy.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="bg-card border border-border/50 rounded-lg p-8 w-full max-w-md">
                <span className="block text-sm text-muted-foreground mb-2">Trusted by</span>
                <span className="block text-2xl font-bold mb-8">85+ Enterprise Clients</span>

                <div className="grid grid-cols-3 gap-4">
                  {teamCircles.map((id) => (
                    <div
                      key={id}
                      className="aspect-square rounded-full bg-muted/50"
                    />
                  ))}
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
