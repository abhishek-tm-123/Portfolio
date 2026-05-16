"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { BookOpen, Target, Rocket } from "lucide-react";

export function LearningJourney() {
  return (
    <section id="journey" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading>Learning Journey</SectionHeading>
        
        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {portfolioData.learningJourney.map((item, index) => {
              const isEven = index % 2 === 0;
              
              // Select an icon based on index or title
              const getIcon = () => {
                if (index === 0) return <Rocket className="w-5 h-5 text-white" />;
                if (index === 1) return <Target className="w-5 h-5 text-white" />;
                return <BookOpen className="w-5 h-5 text-white" />;
              };

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  {/* Timeline dot/icon */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-background flex items-center justify-center z-10">
                    <div className={`w-full h-full rounded-full flex items-center justify-center ${index === 0 ? 'bg-primary' : index === 1 ? 'bg-orange-500' : 'bg-blue-500'}`}>
                      {getIcon()}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`w-full pl-24 md:pl-0 md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <GlassCard delay={0} className="p-6">
                      <span className="text-sm font-mono text-primary mb-2 block">{item.date}</span>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-gray-400 font-medium mb-4">{item.organization}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </GlassCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
