"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { GitBranch, ExternalLink } from "lucide-react";
import Image from "next/image";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <SectionHeading>Featured Projects</SectionHeading>
        
        <div className="mt-16 space-y-24">
          {portfolioData.projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className={`flex flex-col ${isEven ? 'lg:items-start' : 'lg:items-end lg:text-right'}`}>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    
                    <GlassCard delay={0} hoverEffect={false} className={`p-6 mb-6 ${isEven ? '-ml-0 lg:-ml-12' : '-mr-0 lg:-mr-12'} z-10 w-full`}>
                      <p className="text-gray-300 leading-relaxed text-left">
                        {project.description}
                      </p>
                    </GlassCard>

                    <ul className={`flex flex-wrap gap-3 mb-8 ${isEven ? 'justify-start' : 'lg:justify-end'}`}>
                      {project.tech.map((tech) => (
                        <li key={tech} className="text-sm font-mono text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-4">
                      <Button variant="premium" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" className="border-white/20" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <GitBranch className="w-4 h-4" /> Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
