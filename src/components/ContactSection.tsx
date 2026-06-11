"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";
import GlassCard from "./ui/GlassCard";
import { socialLinks, personalInfo } from "../lib/constants";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-32 md:py-48">
      {/* Dramatic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-primary/10 blur-[150px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-secondary/10 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header - cinema style */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-primary font-mono text-xs tracking-[0.4em] uppercase">// Chapter 05</span>
          <h2 className="text-5xl md:text-7xl font-black text-text-primary mt-4 tracking-tight">
            LET'S <span className="gradient-text">CONNECT</span>
          </h2>
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            Open to freelance projects and full-time opportunities
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info - cinema style */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard hover={false} className="p-8 h-full bg-gradient-to-br from-bg-secondary/90 to-bg-primary/95">
              <h3 className="text-2xl font-bold text-text-primary mb-8">Get In Touch</h3>

              {/* Location */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-xl bg-accent-primary/10 border border-accent-primary/20">
                  <MapPin className="w-6 h-6 text-accent-primary" />
                </div>
                <div>
                  <p className="text-text-secondary text-sm mb-1">Location</p>
                  <p className="text-text-primary font-semibold text-lg">{personalInfo.location}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20">
                  <Mail className="w-6 h-6 text-accent-secondary" />
                </div>
                <div className="min-w-0">
                  <p className="text-text-secondary text-sm mb-1">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-text-primary font-semibold text-lg hover:text-accent-secondary transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-6 border-t border-white/5">
                <p className="text-text-secondary text-sm mb-4 tracking-wider uppercase">Follow Me</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon as React.ComponentType<{size?: number; className?: string}>;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 rounded-xl bg-bg-primary/50 border border-white/5 hover:border-accent-primary/30 transition-all group"
                        whileHover={{ y: -4, scale: 1.05 }}
                        title={link.name}
                      >
                        <IconComponent size={22} className="text-text-secondary group-hover:text-accent-primary transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact form - cinema style */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <GlassCard hover={false} className="p-10 bg-gradient-to-br from-bg-secondary/90 to-bg-primary/95">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name field */}
                <div>
                  <label className="block text-text-secondary text-sm mb-3 tracking-wider uppercase">Your Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-bg-primary/50 border border-white/5 focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all text-text-primary placeholder:text-text-secondary/50 text-lg"
                    placeholder="What should I call you?"
                    required
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-text-secondary text-sm mb-3 tracking-wider uppercase">Email Address</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-bg-primary/50 border border-white/5 focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all text-text-primary placeholder:text-text-secondary/50 text-lg"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-text-secondary text-sm mb-3 tracking-wider uppercase">Your Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-bg-primary/50 border border-white/5 focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all text-text-primary placeholder:text-text-secondary/50 resize-none text-lg"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Submit button - cinema style */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full relative overflow-hidden rounded-xl px-8 py-5 bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-bold text-lg shadow-lg shadow-accent-primary/30 disabled:opacity-50 disabled:cursor-not-allowed group"
                  whileHover={{ scale: submitted ? 1 : 1.02 }}
                  whileTap={{ scale: submitted ? 1 : 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        />
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <Send size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </span>
                  {!isSubmitting && !submitted && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent-secondary to-accent-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                    />
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
