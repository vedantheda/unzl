"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedListProps {
  children: ReactNode[];
  className?: string;
  delay?: number;
  staggerChildren?: number;
  variant?: "slide" | "fade" | "scale" | "blur";
}

export function AnimatedList({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.1,
  variant = "slide"
}: AnimatedListProps) {
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

  const getItemVariants = () => {
    switch (variant) {
      case "slide":
        return {
          hidden: { y: 30, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { 
              duration: 0.6, 
              ease: [0.4, 0, 0.2, 1] 
            },
          },
        };
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { 
              duration: 0.6, 
              ease: "easeOut" 
            },
          },
        };
      case "scale":
        return {
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: { 
              duration: 0.6, 
              ease: [0.4, 0, 0.2, 1] 
            },
          },
        };
      case "blur":
        return {
          hidden: { filter: "blur(10px)", opacity: 0 },
          visible: {
            filter: "blur(0px)",
            opacity: 1,
            transition: { 
              duration: 0.8, 
              ease: "easeOut" 
            },
          },
        };
      default:
        return {
          hidden: { y: 30, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { 
              duration: 0.6, 
              ease: [0.4, 0, 0.2, 1] 
            },
          },
        };
    }
  };

  const itemVariants = getItemVariants();

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
