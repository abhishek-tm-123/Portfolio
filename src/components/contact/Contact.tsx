"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setFormStatus("sending");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      setFormStatus("sent");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      alert("Failed to send message");
      setFormStatus("idle");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <SectionHeading>Get In Touch</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold mb-6">Let's talk about your next project.</h3>
            <p className="text-gray-400 mb-8 leading-relaxed max-w-md">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Email</p>
                  <a href={`mailto:${portfolioData.personal.email}`} className="text-white hover:text-primary transition-colors text-lg">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-white text-lg">Remote / Global</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <GlassCard delay={0.2} className="p-8">
            {formStatus === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Message Sent!</h4>
                <p className="text-gray-400">Thank you for reaching out. I will get back to you soon.</p>
                <Button variant="outline" className="mt-8" onClick={() => setFormStatus("idle")}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                    <input required type="text" id="name" value={formData.name} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                    <input required type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                  <input required type="text" id="subject" value={formData.subject} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                  <textarea required id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <Button type="submit" variant="premium" className="w-full py-6 text-lg" disabled={formStatus === "sending"}>
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-gray-500 font-medium">
          {new Date().getFullYear()} {portfolioData.personal.name}. Designed & Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
