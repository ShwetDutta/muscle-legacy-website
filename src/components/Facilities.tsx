import React, { useState } from "react";
import { Dumbbell, Flame, Shield, Workflow, Grid, Key, Sparkles, Apple, X, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FACILITIES } from "../data";
import { FacilityItem } from "../types";

// Type-safe mapping of string keys to Lucide React component references
const ICON_MAP: Record<string, React.ComponentType<any>> = {
  Dumbbell: Dumbbell,
  Flame: Flame,
  Shield: Shield,
  Workflow: Workflow,
  Grid: Grid,
  Key: Key,
  Sparkles: Sparkles,
  Apple: Apple,
};

export default function Facilities() {
  const [selectedFacility, setSelectedFacility] = useState<FacilityItem | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="facilities" className="relative bg-[#0d0d0d] py-24 sm:py-32 px-6 md:px-12 border-t border-brand-border/20 overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-1/4 w-[1px] h-48 bg-gradient-to-b from-brand-accent/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-accent font-mono text-xs uppercase tracking-widest font-bold mb-2 block">
              Architectural Mastery
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-white uppercase tracking-tight">
              State-Of-The-Art Zones
            </h2>
          </div>
          <p className="text-brand-muted font-sans text-sm sm:text-base max-w-md leading-relaxed">
            Every square inch of Muscle Legacy is curated to maximize athletic flow. High ceilings, customized lighting rigs, and premium materials define each specialized zone. Click any zone card to view its design.
          </p>
        </div>

        {/* Facilities Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {FACILITIES.map((facility) => {
            const IconComponent = ICON_MAP[facility.iconName] || Dumbbell;
            
            return (
              <motion.div
                key={facility.id}
                variants={itemVariants}
                whileHover={{ y: -6, borderColor: "rgba(255, 212, 0, 0.4)" }}
                onClick={() => setSelectedFacility(facility)}
                className="bg-brand-card/40 border border-brand-border/40 rounded-xl p-8 transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer hover:shadow-2xl hover:shadow-brand-accent/5 focus-within:ring-2 focus-within:ring-brand-accent focus-within:outline-none"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedFacility(facility);
                  }
                }}
              >
                <div>
                  {/* Icon Block with glowing background on hover */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative w-12 h-12 rounded-lg bg-brand-secondary border border-brand-border/60 flex items-center justify-center text-brand-accent transform group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute inset-0 bg-brand-accent/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <IconComponent className="w-6 h-6 relative z-10" />
                    </div>
                    
                    {/* Visual Call-to-action indicator */}
                    <div className="text-[10px] font-mono text-brand-accent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1 bg-brand-accent/5 px-2.5 py-1 rounded-full border border-brand-accent/20">
                      <Eye className="w-3 h-3" /> VIEW PHOTO
                    </div>
                  </div>

                  <h3 className="font-display text-2xl text-white uppercase tracking-wider mb-3">
                    {facility.title}
                  </h3>
                  
                  <p className="text-xs text-brand-muted font-sans leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                {/* Aesthetic Indicator */}
                <div className="mt-8 flex items-center justify-between border-t border-brand-border/20 pt-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono uppercase text-brand-muted tracking-widest">
                    Legacy Standard
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Facility Image Modal View */}
      <AnimatePresence>
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFacility(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-zoom-out"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-2xl bg-brand-bg border border-brand-border rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Image Header with aspect ratio */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-card">
                <img
                  src={selectedFacility.imageUrl}
                  alt={selectedFacility.title}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-black/40" />

                {/* Floating Top Header Badges */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-brand-accent text-brand-bg rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg">
                  Muscle Legacy Premium Zone
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedFacility(null)}
                  className="absolute top-4 right-4 bg-black/60 border border-white/10 hover:bg-brand-accent hover:text-brand-bg text-white p-2 rounded-full transition-all duration-200 shadow-lg cursor-pointer focus:outline-none"
                  aria-label="Close active zone modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Text Info Block */}
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-3xl text-white uppercase tracking-wider">
                    {selectedFacility.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
                    <span className="text-[10px] font-mono uppercase text-brand-accent tracking-widest">
                      ACTIVE SPECIFICATION
                    </span>
                  </div>
                </div>

                <p className="text-sm text-brand-muted font-sans leading-relaxed">
                  {selectedFacility.description}
                </p>

                {/* Premium metadata footer inside modal */}
                <div className="flex items-center justify-between pt-6 border-t border-brand-border/40 text-[10px] font-mono uppercase tracking-widest text-brand-muted">
                  <span>FACILITY VERIFIED</span>
                  <span>EST. 2026</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
