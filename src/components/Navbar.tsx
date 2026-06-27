import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onJoinClick: () => void;
}

export default function Navbar({ onJoinClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Monitor scroll to trigger header glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Membership", href: "#membership" },
    { name: "Facilities", href: "#facilities" },
    { name: "Classes", href: "#classes" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#090909]/90 backdrop-blur-md border-b border-brand-border py-4 shadow-lg shadow-black/30"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-md"
            aria-label="Muscle Legacy Home"
          >
            {/* Styled High-end Dynamic Logo Image with Embedded Text */}
            <img
              src="/IMG_0997.JPG-removebg-preview.png"
              alt="Muscle Legacy"
              className="h-16 md:h-22 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-sans font-medium text-brand-muted hover:text-brand-accent tracking-wide transition-colors duration-200 uppercase relative py-1 focus:outline-none focus:text-brand-accent"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Primary CTA */}
          <div className="hidden lg:block">
            <button
              onClick={onJoinClick}
              className="bg-brand-accent text-brand-bg font-sans font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-full hover:bg-white hover:text-brand-bg hover:shadow-lg hover:shadow-white/10 transition-all duration-300 flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-bg"
              id="cta-join-now"
            >
              Join Now
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-brand-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent rounded-md"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Slide-out Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-bg/95 backdrop-blur-lg lg:hidden"
          >
            <div className="flex flex-col h-full pt-28 px-8 pb-10 justify-between">
              <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-display text-4xl tracking-wide text-brand-muted hover:text-brand-accent transition-colors duration-200 uppercase focus:outline-none"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col gap-4"
              >
                <div className="h-px bg-brand-border w-full" />
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onJoinClick();
                  }}
                  className="w-full bg-brand-accent text-brand-bg font-sans font-bold text-sm uppercase tracking-widest py-4 rounded-full hover:bg-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                  id="mobile-cta-join-now"
                >
                  Join Today
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-xs text-brand-muted tracking-wide">
                  Strength Built Daily. Legacy Earned Forever.
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
