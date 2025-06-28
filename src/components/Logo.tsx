"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  href?: string;
  animated?: boolean;
}

export function Logo({
  className,
  size = "md",
  showText = true,
  href = "/",
  animated = true
}: LogoProps) {
  const sizeClasses = {
    sm: "h-20 w-auto",
    md: "h-28 w-auto",
    lg: "h-36 w-auto",
    xl: "h-72 w-auto"
  };

  const textSizeClasses = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
    xl: "text-6xl"
  };

  const LogoContent = () => (
    <div className={cn("flex items-center gap-3", className)}>
      <motion.div
        className="relative"
        initial={animated ? { opacity: 0, scale: 0.8 } : {}}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
        whileHover={animated ? { scale: 1.05 } : {}}
      >
        <Image
          src="/images/unizel-logo.png"
          alt="Unizel Logo"
          width={200}
          height={200}
          className={cn(sizeClasses[size], "object-contain")}
          priority
        />

      </motion.div>

      {showText && (
        <motion.div
          className="flex flex-col"
          initial={animated ? { opacity: 0, x: -10 } : {}}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className={cn(
            textSizeClasses[size],
            "font-bold leading-none bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent"
          )}>
            UNIZEL
          </span>
          <span className="text-xs text-muted-foreground">Software Agency</span>
        </motion.div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="group">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
}

// Specialized logo variants
export function LogoIcon({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  return <Logo className={className} size={size} showText={false} />;
}

export function LogoWithText({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  return <Logo className={className} size={size} showText={true} />;
}

export function LogoFull({ className }: { className?: string }) {
  return <Logo className={className} size="lg" showText={true} animated={true} />;
}
