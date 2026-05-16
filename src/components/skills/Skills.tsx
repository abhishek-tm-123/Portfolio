"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { FileCode2, Database, Layout, Server, Terminal, Box, PenTool } from "lucide-react";

// Helper to map string icons to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  html: <Layout className="w-8 h-8" />,
  css: <PenTool className="w-8 h-8" />,
  js: <FileCode2 className="w-8 h-8" />,
  ts: <FileCode2 className="w-8 h-8" />,
  react: <Box className="w-8 h-8" />,
  nextjs: <Box className="w-8 h-8" />,
  nodejs: <Server className="w-8 h-8" />,
  tailwind: <PenTool className="w-8 h-8" />,
  git: <Terminal className="w-8 h-8" />,
  database: <Database className="w-8 h-8" />
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white/[0.02] relative border-y border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading>Tech Stack & Skills</SectionHeading>
        
        <div className="mt-16 space-y-16">
          {/* Known Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-white/80 text-center uppercase tracking-wider text-sm">Technologies I Know</h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            >
              {portfolioData.skills.known.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl bg-background border border-white/10 shadow-lg group hover:border-primary/50 hover:bg-primary/5 transition-colors"
                >
                  <div className="text-gray-400 group-hover:text-primary transition-colors mb-4">
                    {iconMap[skill.icon] || <Box className="w-8 h-8" />}
                  </div>
                  <span className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Learning Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-white/80 text-center uppercase tracking-wider text-sm">Currently Learning</h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap justify-center gap-6"
            >
              {portfolioData.skills.learning.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-6 rounded-2xl bg-background border border-white/10 shadow-lg group hover:border-orange-500/50 hover:bg-orange-500/5 transition-colors w-32 md:w-40"
                >
                  <div className="text-gray-400 group-hover:text-orange-400 transition-colors mb-4">
                    {iconMap[skill.icon] || <Box className="w-8 h-8" />}
                  </div>
                  <span className="font-medium text-sm text-gray-300 group-hover:text-white transition-colors text-center">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
