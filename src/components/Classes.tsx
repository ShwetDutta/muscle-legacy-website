import React, { useState } from "react";
import { Sparkles, Trophy, Flame, Shield, Activity, Users } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CLASSES } from "../data";

export default function Classes() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Strength", "Conditioning", "Weight Management", "Combat", "Aerobic"];

  const filteredClasses = activeFilter === "All" 
    ? CLASSES 
    : CLASSES.filter(item => item.tag === activeFilter);

  return (
    <section id="classes" className="relative bg-brand-bg py-24 sm:py-32 px-6 md:px-12 border-t border-brand-border/20 overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-accent/3 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header and Filter block */}
        <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-accent font-mono text-xs uppercase tracking-widest font-bold mb-2 block">
              Result-Driven Pathways
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-white uppercase tracking-tight mb-4">
              Tailored Member Programs
            </h2>
            <p className="text-brand-muted font-sans text-sm sm:text-base leading-relaxed">
              We don't do rigid, time-constrained sessions that you have to book. Instead, our professional coaches craft and deliver personalized training programs on the gym floor according to what you want to achieve.
            </p>
          </div>

          {/* Filter Pill List */}
          <div className="flex flex-wrap gap-2.5 max-w-2xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer focus:outline-none ${
                  activeFilter === category
                    ? "bg-brand-accent text-brand-bg shadow-lg shadow-brand-accent/20"
                    : "bg-brand-secondary text-brand-muted border border-brand-border/40 hover:border-brand-accent hover:text-white"
                }`}
                id={`filter-class-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Classes grid with enter animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="bg-brand-card border border-brand-border/40 rounded-xl overflow-hidden flex flex-col justify-between hover:border-brand-accent/40 transition-colors duration-300 p-8 relative group"
              >
                {/* Accent line on top of class card */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div>
                  {/* Tag and Rating line */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded text-[10px] text-brand-accent font-sans font-bold uppercase tracking-wider">
                      {item.tag}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-brand-muted tracking-widest">
                      MEMBERSHIP INCLUDED
                    </span>
                  </div>

                  <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-4">
                    {item.title}
                  </h3>

                  <p className="text-xs text-brand-muted font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Aesthetic program indicator with Sparkles */}
                <div className="mt-8 flex items-center justify-between border-t border-brand-border/20 pt-6">
                  <span className="text-[10px] font-mono uppercase text-brand-accent tracking-widest flex items-center gap-1.5 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-brand-accent" /> Personalized Focus
                  </span>
                  <span className="text-[10px] font-mono uppercase text-brand-muted tracking-widest">
                    Floor Guided
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
