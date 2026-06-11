"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, MapPin } from "lucide-react";
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/50 to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-accent-primary/10 blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-secondary/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent-primary font-mono text-sm tracking-wider">// GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-2">
            Let's Build Something{" "}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-text-secondary mt-4 max-w-xl mx-auto">
            Open to freelance projects and full-time opportunities. Let's discuss how I can help
            bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard hover={false} className="p-6 h-full">
              <h3 className="text-xl font-bold text-text-primary mb-6">Connect With Me</h3>

              {/* Location */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-accent-primary/10">
                  <MapPin className="w-5 h-5 text-accent-primary" />
                </div>
                <div>
                  <p className="text-text-secondary text-sm">Location</p>
                  <p className="text-text-primary font-medium">{personalInfo.location}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-accent-primary/10">
                  <Send className="w-5 h-5 text-accent-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-text-secondary text-sm">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-text-primary font-medium hover:text-accent-primary transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-6 border-t border-white/5">
                <p className="text-text-secondary text-sm mb-4">Social Profiles</p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon as React.ComponentType<{size?: number; className?: string}>;
                    return (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-bg-primary/50 border border-white/5 hover:border-accent-primary/30 transition-colors group"
                        whileHover={{ y: -3 }}
                        title={link.name}
                      >
                        <IconComponent size={20} className="text-text-secondary group-hover:text-accent-primary transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <GlassCard hover={false} className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name field */}
                <div>
                  <label className="block text-text-secondary text-sm mb-2">Raghu Ram Kuna</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary/50 border border-white/5 focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all text-text-primary placeholder:text-text-secondary/50"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-text-secondary text-sm mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary/50 border border-white/5 focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all text-text-primary placeholder:text-text-secondary/50"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-text-secondary text-sm mb-2">Your Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary/50 border border-white/5 focus:border-accent-primary/50 focus:ring-2 focus:ring-accent-primary/20 outline-none transition-all text-text-primary placeholder:text-text-secondary/50 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className="w-full relative px-6 py-4 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed group"
                  whileHover={{ scale: submitted ? 1 : 1.02 }}
                  whileTap={{ scale: submitted ? 1 : 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1 }}
                        />
                        Sending...
                      </>
                    ) : submitted ? (
                      <>
                        <Send size={18} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send size={18} />
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
