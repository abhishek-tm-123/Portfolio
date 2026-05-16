"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionHeading>About Me</SectionHeading>
        
        <div className="flex flex-col items-center justify-center mt-12 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold mb-6 text-white">My Journey</h3>
            <GlassCard delay={0.2} className="p-8 md:p-12 text-left">
              <p className="text-gray-400 leading-relaxed text-lg mb-6">
                {portfolioData.personal.about}
              </p>
              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                I specialize in creating seamless, responsive, and performant web applications that provide great user experiences. I'm always eager to learn new technologies and tackle complex challenges. My current focus is expanding my full-stack capabilities and contributing to impactful projects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 pt-8 border-t border-white/10">
                <div>
                  <h4 className="text-white font-medium mb-2">Education focus</h4>
                  <p className="text-gray-500">Computer Science & Web Development</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Current interest</h4>
                  <p className="text-gray-500">Full-Stack Architecture & AI Integration</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
