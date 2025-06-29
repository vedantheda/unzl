"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  variant?: "slide" | "fade" | "scale";
}

export function SplitText({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.02,
  variant = "slide"
}: SplitTextProps) {
  const words = children.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const getChildVariants = () => {
    switch (variant) {
      case "slide":
        return {
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration, ease: "easeOut" },
          },
        };
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration, ease: "easeOut" },
          },
        };
      case "scale":
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { duration, ease: "easeOut" },
          },
        };
      default:
        return {
          hidden: { y: 20, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration, ease: "easeOut" },
          },
        };
    }
  };

  const childVariants = getChildVariants();

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          style={{ display: "inline-block" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
