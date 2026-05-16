"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ children, className, alignment = "center" }: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", alignment === "center" && "text-center", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
      >
        {children}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={cn(
            "h-1 bg-primary mt-2 origin-left rounded-full absolute -bottom-2",
            alignment === "center" ? "left-1/4 right-1/4" : "left-0 w-1/2"
          )}
        />
      </motion.h2>
    </div>
  );
}
