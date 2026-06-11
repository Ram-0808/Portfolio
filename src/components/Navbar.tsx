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
    ["rgba(13, 13, 13, 0)", "rgba(13, 13, 13, 0.95)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(16px)"]);

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
        className="fixed top-0 left-0 right-0 z-50 px-8 py-5"
        style={{
          backgroundColor: headerBg,
          backdropFilter: backdropBlur,
          WebkitBackdropFilter: backdropBlur,
        }}
      >
        <motion.nav
          className="max-w-7xl mx-auto flex items-center justify-between"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo - cinema style */}
          <a
            href="#"
            className="relative group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-2xl font-black tracking-tight">
              <span className="text-text-primary">{"<"}</span>
              <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
              <span className="text-text-primary">{"/>"}</span>
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-full transition-all duration-500" />
          </a>

          {/* Desktop nav - cinema style */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="relative text-sm font-medium text-text-secondary hover:text-text-primary transition-colors group py-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-xs text-accent-primary/50 mr-1">0{index + 1}.</span>
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-full transition-all duration-500" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button - cinema style */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="group relative"
            >
              <button className="btn-cinema-secondary px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <span>Let's Collaborate</span>
                </span>
              </button>
            </a>
          </motion.div>

          {/* Mobile menu button - cinema style */}
          <button
            className="md:hidden p-2 text-text-primary relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.nav>
      </motion.header>

      {/* Mobile menu - cinema style */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        style={{ pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
      >
        <div
          className="absolute inset-0 bg-bg-primary/98 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <motion.nav
          className="absolute top-32 left-0 right-0 px-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -30 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-6 py-5 text-lg font-medium text-text-secondary hover:text-text-primary transition-colors border-b border-white/5"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-xs text-accent-primary mr-3">0{index + 1}.</span>
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="mt-6"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <button className="btn-cinema w-full py-4 rounded-lg text-white font-semibold tracking-wide">
                Let's Collaborate
              </button>
            </motion.a>
          </div>
        </motion.nav>
      </motion.div>
    </>
  );
}
