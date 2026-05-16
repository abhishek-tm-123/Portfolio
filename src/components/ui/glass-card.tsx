"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, delay = 0, hoverEffect = true, ...props }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={cn(
        "relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-xl",
        "before:absolute before:inset-0 before:z-[-1] before:rounded-2xl before:bg-gradient-to-b before:from-white/5 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
