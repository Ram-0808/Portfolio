"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 15, 0)", "rgba(10, 10, 15, 0.8)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        style={{
          backgroundColor: headerBg,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
      >
        <motion.nav
          className="max-w-6xl mx-auto flex items-center justify-between"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold gradient-text"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {personalInfo.name.split(" ")[0]}
            <span className="text-text-primary">.dev</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-sm font-semibold hover:shadow-lg hover:shadow-accent-primary/30 transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.nav>
      </motion.header>

      {/* Mobile menu */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
      >
        <div
          className="absolute inset-0 bg-bg-primary/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <motion.nav
          className="absolute top-24 left-0 right-0 p-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-6 py-4 rounded-xl bg-glass-card border border-glass-border text-lg font-medium text-text-primary hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="px-6 py-4 rounded-xl bg-gradient-to-r from-accent-primary to-accent-secondary text-white text-lg font-semibold text-center mt-4"
            >
              Hire Me
            </a>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
}
