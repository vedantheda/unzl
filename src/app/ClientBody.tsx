"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

import { Preloader } from "@/components/Preloader";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { BackToTopButton } from "@/components/BackToTopButton";
import { PageTransition } from "@/components/PageTransition";
import { CookieConsent } from "@/components/CookieConsent";

import { Logo } from "@/components/Logo";
import { usePreloader } from "@/contexts/PreloaderContext";

export function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { isPreloaderActive } = usePreloader();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "Resources", href: "/creative-references" },
    { label: "Careers", href: "/careers" },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Preloader - only on home page */}
      {pathname === '/' && <Preloader />}

      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />



      {/* Header */}
      {!isPreloaderActive && (
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? "bg-background/90 backdrop-blur-md shadow-lg border-b border-border/20" : "bg-transparent"
          }`}
        >
        <div className="container mx-auto py-3 px-4 md:px-6 flex items-center justify-between h-28">
          <Logo size="lg" showText={false} animated={true} href="/" />

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <Button asChild className="rounded-xl px-6 py-2.5 shadow-md bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary hover:shadow-lg transition-all duration-300">
              <Link href="/contact" className="flex items-center gap-2">
                <span>Work With Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </Button>
          </div>


        </div>
        </header>
      )}

      <main className="pt-28">
        <PageTransition>
          {children}
        </PageTransition>
      </main>

      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Cookie Consent Banner */}
      <CookieConsent />

      {/* Footer */}
      <footer className="bg-background border-t border-border/20">
        <div className="container mx-auto py-8 sm:py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <Logo size="md" showText={false} animated={false} />
              </div>
              <p className="text-sm text-muted-foreground">
                Building tomorrow's enterprise solutions<br />
                with cutting-edge technology.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://linkedin.com/company/unizel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/unizel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/unizel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@unizel.com"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Stay Updated</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get the latest updates on enterprise software solutions and technology trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 px-3 py-2 rounded-md bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary min-h-[44px]"
                  suppressHydrationWarning
                />
                <Button className="w-full sm:w-auto min-h-[44px]">Subscribe</Button>
              </div>
            </div>
          </div>

          <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Unizel Software Agency
            </p>
            <div className="flex gap-4">
              <Link
                href="/terms-conditions"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-primary"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
