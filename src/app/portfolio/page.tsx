"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/CTASection";
import { categories, portfolioItems } from "./categories";
import { Search, Share2, ShoppingCart, Users, Video, Filter } from "lucide-react";
import { useState } from "react";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter items based on active category
  const filteredItems = activeCategory
    ? portfolioItems.filter(item => item.category === activeCategory)
    : portfolioItems;

  // Function to get the appropriate icon for each category
  const getCategoryIcon = (iconName: string) => {
    switch(iconName) {
      case 'search': return <Search className="h-4 w-4" />;
      case 'share': return <Share2 className="h-4 w-4" />;
      case 'shopping-cart': return <ShoppingCart className="h-4 w-4" />;
      case 'users': return <Users className="h-4 w-4" />;
      case 'video': return <Video className="h-4 w-4" />;
      default: return <Filter className="h-4 w-4" />;
    }
  };

  return (
    <main>
      {/* Hero section */}
      <section className="py-16 sm:py-20 lg:py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="badge mb-4 sm:mb-6">PORTFOLIO/PROJECTS</div>
            <h1 className="mb-4 sm:mb-6">
              <span className="block">Our Software Solutions</span>
              <span className="block text-gradient">That Transform Business</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Explore our portfolio of enterprise software solutions that have helped organizations enhance collaboration, automate processes, and leverage cutting-edge technology.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant={activeCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(null)}
              className="rounded-full px-4"
            >
              <Filter className="h-4 w-4 mr-2" />
              All Work
            </Button>

            {categories.map(category => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="rounded-full px-4"
              >
                {getCategoryIcon(category.icon)}
                <span className="ml-2">{category.name}</span>
              </Button>
            ))}
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {filteredItems.map((item) => (
              <Link key={item.id} href={`/portfolio/${item.id}`} className="group">
                <div className="bg-card rounded-xl overflow-hidden border border-border/50 h-full flex flex-col">
                  <div className="p-6 pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="badge px-3 py-1">{categories.find(c => c.id === item.category)?.name || 'Project'}</div>
                      <span className="text-xs text-muted-foreground">{item.year}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">Client: {item.client}</p>

                    <p className="text-sm mb-4 line-clamp-2">{item.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag, index) => (
                        <div key={`${item.id}-tag-${index}`} className="px-2 py-1 bg-muted/50 rounded-full text-xs">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={item.images[0].src}
                        alt={item.images[0].alt}
                        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {item.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <Video className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
