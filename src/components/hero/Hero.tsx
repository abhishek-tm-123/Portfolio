"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, GitBranch, Briefcase, Mail, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[128px] opacity-50 animate-pulse" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-orange-600/20 rounded-full mix-blend-screen filter blur-[128px] opacity-50 animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                {portfolioData.personal.name}
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-400 font-medium">
              {portfolioData.personal.role}
            </h2>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              {portfolioData.personal.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button variant="premium" size="lg" asChild>
                <Link href="#contact" className="gap-2">
                  Connect with me <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10" asChild>
                <a href={portfolioData.personal.resume} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Download className="w-4 h-4" /> My Resume
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-8">
              <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Connect with me</span>
              <div className="h-[1px] w-12 bg-gray-700" />
              <div className="flex gap-4">
                <SocialLink href={portfolioData.personal.github} icon={<GitBranch className="w-5 h-5" />} />
                <SocialLink href={portfolioData.personal.linkedin} icon={<Briefcase className="w-5 h-5" />} />
                <SocialLink href={`mailto:${portfolioData.personal.email}`} icon={<Mail className="w-5 h-5" />} />
              </div>
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-md aspect-square overflow-visible"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />

            {/* Rotating Rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]" />

            <div className="absolute inset-4 rounded-full border border-orange-500/20 animate-[spin_15s_linear_infinite_reverse]" />

            {/* Circle Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">

              {/* Floating Image */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative w-full h-[125%] -top-16"
              >
                <Image
                  src="/profile.png"
                  alt={portfolioData.personal.name}
                  fill
                  priority
                  className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
    >
      {icon}
    </a>
  );
}