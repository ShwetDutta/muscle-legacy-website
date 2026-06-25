import React, { useState } from "react";
import { Award, X, Sparkles, Trophy, ShieldCheck, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TRAINERS } from "../data";
import { TrainerItem } from "../types";

// Custom vector renderer for luxurious dynamic silhouettes
function TrainerSilhouette({ seed, className = "" }: { seed: number; className?: string }) {
  const gradientId = `trainer-glow-${seed}`;
  
  return (
    <div className={`relative w-full aspect-[4/5] bg-brand-bg rounded-xl overflow-hidden border border-brand-border/40 flex items-center justify-center ${className}`}>
      {/* Background radial spotlight */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full bg-brand-accent/5 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(9,9,9,0)_50%,#090909_100%)]" />
      </div>

      {/* Styled Luxury Silhouette Vector */}
      <svg
        viewBox="0 0 200 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-3/4 h-3/4 relative z-10 text-brand-accent/15"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={gradientId} cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#FFD400" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FFD400" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Back spotlight ring */}
        <circle cx="100" cy="110" r="45" stroke="#FFD400" strokeWidth="0.5" strokeDasharray="4 4" className="animate-spin-slow" />
        <circle cx="100" cy="110" r="60" fill={`url(#${gradientId})`} />

        {/* Abstract geometric athlete contours (shoulders, chest, core) */}
        {seed % 2 === 0 ? (
          // Silhouette Type A (Pose 1)
          <path
            d="M100 55 C110 55 118 63 118 73 C118 83 110 91 100 91 C90 91 82 83 82 73 C82 63 90 55 100 55 Z M50 160 C50 120 70 100 100 100 C130 100 150 120 150 160 C150 170 145 220 145 230 L55 230 C55 220 50 170 50 160 Z"
            fill="#171717"
            stroke="#FFD400"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        ) : (
          // Silhouette Type B (Pose 2 - broader shoulders/hooded athlete)
          <path
            d="M100 48 C108 48 115 55 115 64 C115 73 108 80 100 80 C92 80 85 73 85 64 C85 55 92 48 100 48 Z M40 170 C40 115 65 95 100 95 C135 95 160 115 160 170 C160 185 152 230 152 230 L48 230 C48 230 40 185 40 170 Z"
            fill="#121212"
            stroke="#FFD400"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        )}

        {/* Abstract lines representing muscular precision */}
        <path d="M75 140 H125" stroke="#FFD400" strokeWidth="1" strokeOpacity="0.4" />
        <path d="M85 170 H115" stroke="#FFD400" strokeWidth="1" strokeOpacity="0.3" />
        <path d="M92 195 H108" stroke="#FFD400" strokeWidth="1" strokeOpacity="0.2" />
      </svg>

      {/* Frame Status Overlays */}
      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2 py-0.5 bg-brand-accent/5 border border-brand-accent/20 rounded text-[9px] text-brand-accent font-mono uppercase tracking-wider">
        Verified Expert
      </div>
      
      <div className="absolute bottom-4 right-4 text-[9px] font-mono text-brand-muted uppercase tracking-widest">
        BIO FILE: OPEN
      </div>
    </div>
  );
}

export default function Trainers() {
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerItem | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } },
  };

  return (
    <section id="trainers" className="relative bg-[#0d0d0d] py-24 sm:py-32 px-6 md:px-12 border-t border-brand-border/20">
      {/* Decorative grids */}
      <div className="absolute bottom-0 left-0 w-32 h-32 text-brand-accent/3 opacity-30">
        <svg width="100%" height="100%" fill="currentColor">
          <pattern id="pattern-grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-brand-accent font-mono text-xs uppercase tracking-widest font-bold mb-2 block">
            Elite Leadership Team
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white uppercase tracking-tight mb-4">
            Legacy Instructors
          </h2>
          <p className="text-brand-muted font-sans text-sm sm:text-base leading-relaxed">
            Our certified coaches are national champions, elite conditioning instructors, and personal strategists. Click any trainer's card to view their complete background and physical philosophies.
          </p>
        </div>

        {/* Trainers Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {TRAINERS.map((trainer) => (
            <motion.div
              key={trainer.id}
              variants={itemVariants}
              whileHover={{ y: -6, borderColor: "rgba(255, 212, 0, 0.4)" }}
              onClick={() => setSelectedTrainer(trainer)}
              className="bg-brand-secondary/30 rounded-2xl p-5 border border-brand-border/40 hover:border-brand-accent/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer group focus-within:ring-2 focus-within:ring-brand-accent focus-within:outline-none"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedTrainer(trainer);
                }
              }}
            >
              {/* Profile Image silhouette container */}
              <div className="mb-6 transform group-hover:scale-[1.02] transition-transform duration-300">
                <TrainerSilhouette seed={trainer.silhouetteSeed} />
              </div>

              {/* Bio Details */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-brand-accent mb-2">
                    <Award className="w-4 h-4" />
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider">
                      {trainer.experience}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl text-white uppercase tracking-wider mb-1 group-hover:text-brand-accent transition-colors">
                    {trainer.name}
                  </h3>
                  
                  <p className="text-xs text-brand-muted font-sans font-medium min-h-[36px] leading-relaxed">
                    {trainer.specialization}
                  </p>
                </div>

                {/* Micro CTA indication */}
                <div className="mt-6 pt-4 border-t border-brand-border/20 text-center text-[10px] font-mono tracking-wider text-brand-accent opacity-0 group-hover:opacity-100 transition-all duration-300 bg-brand-accent/5 py-1.5 rounded border border-brand-accent/20">
                  VIEW FULL PROFILE
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Expanded Trainer Profile Modal */}
      <AnimatePresence>
        {selectedTrainer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTrainer(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-zoom-out"
            />

            {/* Trainer Profile Card Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-3xl bg-brand-bg border border-brand-border rounded-2xl overflow-hidden shadow-2xl z-10 p-6 md:p-8 flex flex-col md:flex-row gap-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedTrainer(null)}
                className="absolute top-4 right-4 bg-brand-secondary border border-brand-border hover:bg-brand-accent hover:text-brand-bg text-white p-2 rounded-full transition-all duration-200 shadow-lg cursor-pointer focus:outline-none z-20"
                aria-label="Close trainer profile modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Trainer Silhouette Image */}
              <div className="w-full md:w-5/12 flex-shrink-0">
                <TrainerSilhouette seed={selectedTrainer.silhouetteSeed} className="h-full max-h-[340px] md:max-h-none shadow-lg shadow-black/40" />
              </div>

              {/* Right Side: Trainer Background and Details */}
              <div className="w-full md:w-7/12 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-brand-accent font-mono text-xs uppercase tracking-widest font-bold">
                    <Trophy className="w-4 h-4" />
                    <span>{selectedTrainer.experience}</span>
                  </div>

                  <h3 className="font-display text-4xl text-white uppercase tracking-wider mt-2">
                    {selectedTrainer.name}
                  </h3>
                  
                  <p className="text-sm text-brand-accent/90 font-sans font-semibold mt-1">
                    {selectedTrainer.specialization}
                  </p>

                  {/* Biography Paragraph */}
                  <div className="mt-4 space-y-4 text-brand-muted text-xs leading-relaxed font-sans">
                    <p>{selectedTrainer.bio || "An elite certified specialist with a demonstrated track record of mapping custom nutrition, metabolic acceleration, and strength strategies."}</p>
                  </div>
                </div>

                {/* Certifications Roster */}
                {selectedTrainer.certifications && selectedTrainer.certifications.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-brand-accent" /> ACCREDITED CREDENTIALS
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedTrainer.certifications.map((cert, index) => (
                        <li key={index} className="text-[11px] font-sans text-brand-muted flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1 flex-shrink-0" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Coaching Philosophy */}
                {selectedTrainer.philosophy && (
                  <div className="bg-brand-secondary/30 border-l-2 border-brand-accent p-3.5 rounded-r-lg">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-brand-accent flex items-center gap-1.5 mb-1">
                      <Heart className="w-3.5 h-3.5" /> COACHING PHILOSOPHY
                    </h4>
                    <p className="text-[11px] font-sans text-brand-muted italic leading-relaxed">
                      "{selectedTrainer.philosophy}"
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
