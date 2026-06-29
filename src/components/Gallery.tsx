import React from "react";
import { Dumbbell, Flame, Shield, Workflow, Grid } from "lucide-react";
import { motion } from "motion/react";

export default function Gallery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  const galleryItems = [
    {
      id: "zone-1",
      name: "Strength Zone",
      code: "ML-STZ-01",
      sizeClass: "md:col-span-2 md:row-span-2",
      icon: Dumbbell,
    },
    {
      id: "zone-2",
      name: "Boxing Area",
      code: "ML-BXA-02",
      sizeClass: "md:col-span-1 md:row-span-1",
      icon: Shield,
    },
    {
      id: "zone-3",
      name: "Functional Training",
      code: "ML-FNT-03",
      sizeClass: "md:col-span-1 md:row-span-1",
      icon: Workflow,
    },
    {
      id: "zone-4",
      name: "Cardio Area",
      code: "ML-CDA-04",
      sizeClass: "md:col-span-1 md:row-span-2",
      icon: Flame,
    },
    {
      id: "zone-5",
      name: "Free Weights Area",
      code: "ML-FWA-05",
      sizeClass: "md:col-span-2 md:row-span-1",
      icon: Grid,
    },
  ];

  return (
    <section id="facilities" className="relative bg-brand-bg py-24 sm:py-32 px-6 md:px-12 border-t border-brand-border/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Title and renovation notice */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-brand-accent font-mono text-xs uppercase tracking-widest font-bold mb-2 block">
              Sanctuary Under Construction
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-white uppercase tracking-tight mb-4">
              Club Showcase
            </h2>
            <p className="text-brand-muted font-sans text-sm sm:text-base leading-relaxed">
              We are carefully engineering Chennai's most exclusive physical architecture. Explore our blueprint zones below — each currently undergoing precise active renovation.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[260px] md:auto-rows-[250px]"
        >
          {galleryItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`${item.sizeClass} relative rounded-2xl bg-brand-secondary border border-brand-border/40 hover:border-brand-accent/40 overflow-hidden group p-6 sm:p-8 flex flex-col justify-between shadow-lg transition-colors duration-300`}
              >
                {/* Abstract drafting grid texture */}
                <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(255,212,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,212,0,0.015)_1px,transparent_1px)] bg-[size:16px_16px]" />
                
                {/* Spotlight glow effect */}
                <div className="absolute inset-0 bg-radial-gradient from-brand-accent/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Row: Zone number and coming soon tag */}
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <span className="font-mono text-[10px] text-brand-accent uppercase tracking-widest font-bold block mb-1">
                      {item.code}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-white uppercase tracking-wider group-hover:text-brand-accent transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2 py-1 bg-brand-bg/80 border border-brand-border rounded text-[9px] text-brand-muted font-mono uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                    COMING SOON
                  </div>
                </div>

                {/* Bottom Row: Blueprint detail icon */}
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-brand-bg border border-brand-border/60 flex items-center justify-center text-brand-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Construction details line overlay */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-accent/20 group-hover:bg-brand-accent transition-colors duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
