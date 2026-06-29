import React from "react";
import { Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg border-t border-brand-border/20 pt-20 pb-10 px-6 md:px-12 relative z-10 overflow-hidden">
      {/* Structural bottom grids */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-accent/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-brand-border/20">
          
          {/* Brand Info (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center group">
              <img
                src="/IMG_0997.JPG-removebg-preview.png"
                alt="Muscle Legacy"
                className="h-14 md:h-18 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </a>
            
            <p className="text-xs text-brand-muted font-sans leading-relaxed max-w-sm">
              Chennai's premier luxury strength club. Dedicated to biomechanical precision, high-intensity boxing sparring, and premium customer convenience suite. Sculpt your physical legacy with the elite.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/_musclelegacy_/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-brand-secondary border border-brand-border/60 hover:border-brand-accent text-brand-muted hover:text-brand-accent flex items-center justify-center transition-colors"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (4 Columns) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-display text-lg text-white uppercase tracking-wider mb-4">
                Explore Club
              </h4>
              <ul className="space-y-2.5" aria-label="Footer Navigation Column 1">
                <li>
                  <a href="#home" className="text-xs text-brand-muted hover:text-brand-accent font-sans transition-colors">
                    Home Sanctuary
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-xs text-brand-muted hover:text-brand-accent font-sans transition-colors">
                    Our Philosophy
                  </a>
                </li>
                <li>
                  <a href="#membership" className="text-xs text-brand-muted hover:text-brand-accent font-sans transition-colors">
                    Membership Tiers
                  </a>
                </li>
                <li>
                  <a href="#facilities" className="text-xs text-brand-muted hover:text-brand-accent font-sans transition-colors">
                    Facility Zones
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg text-white uppercase tracking-wider mb-4">
                Programs
              </h4>
              <ul className="space-y-2.5" aria-label="Footer Navigation Column 2">
                <li>
                  <a href="#classes" className="text-xs text-brand-muted hover:text-brand-accent font-sans transition-colors">
                    Signature Classes
                  </a>
                </li>
                <li>
                  <a href="#trainers" className="text-xs text-brand-muted hover:text-brand-accent font-sans transition-colors">
                    Elite Trainers
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-xs text-brand-muted hover:text-brand-accent font-sans transition-colors">
                    Operational FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-xs text-brand-muted hover:text-brand-accent font-sans transition-colors">
                    Book Consult
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Details (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-lg text-white uppercase tracking-wider mb-4">
              Club Headquarters
            </h4>
            
            <p className="text-xs text-brand-muted font-sans leading-relaxed">
              No. 45, Nungambakkam High Road, Chennai, <br />
              Tamil Nadu, 600034, India
            </p>

            <div className="space-y-1.5 pt-2">
              <span className="block text-[10px] font-sans font-bold text-white uppercase tracking-widest">
                Operational Clock
              </span>
              <p className="text-xs text-brand-muted font-sans leading-relaxed">
                Monday to Saturday: 5:00 AM - 11:00 PM <br />
                Sunday: 7:00 AM - 6:00 PM
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 gap-6">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-[11px] text-brand-muted font-sans">
              &copy; {currentYear} Muscle Legacy Club. All Rights Reserved.
            </p>
            <p className="text-[9px] text-zinc-700 font-mono">
              PREMIUM ATHLETIC ARCHITECTURE • CHENNAI, IN
            </p>
          </div>

          {/* Back to top scroll button with proper 44px target */}
          <button
            onClick={handleScrollToTop}
            className="w-11 h-11 rounded-full bg-brand-secondary border border-brand-border hover:border-brand-accent text-brand-muted hover:text-brand-accent flex items-center justify-center transition-all duration-300 cursor-pointer focus:outline-none"
            aria-label="Scroll Back To Top"
            id="scroll-to-top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
