import React from "react";
import { Check, ShieldCheck, Trophy, Dumbbell, Award, Flame } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  // Stagger children animation config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15 },
    },
  };

  const trustBadges = [
    { text: "Premium Equipment", icon: Dumbbell },
    { text: "Certified Trainers", icon: Award },
    { text: "Boxing Classes", icon: ShieldCheck },
    { text: "Weight Loss Programs", icon: Flame },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-brand-bg flex items-center justify-center overflow-hidden pt-24 px-6 md:px-12"
    >
      {/* Abstract dark premium texture background */}
      <div className="absolute inset-0 z-0 opacity-25">
        {/* Subtle radial dark glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full bg-brand-accent/5 blur-[120px]" />
        
        {/* High-end technical grid overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,212,0,0.03) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Abstract futuristic angled light slabs */}
        <svg className="absolute right-0 bottom-0 w-1/2 h-1/2 text-brand-accent/2" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="100,0 100,100 0,100" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center py-12">
        
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl sm:text-7xl xl:text-8.5xl leading-none text-white uppercase tracking-tight mb-6"
          >
            Build More <br />
            Than Muscle. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-white to-brand-accent bg-[size:200%] animate-pulse-slow">
              Build Your Legacy.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-brand-muted font-sans text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
            Premium strength training, boxing, weight loss, Zumba, and general fitness designed to help you become your strongest self. 
            <span className="text-white font-medium block mt-1">Strength Built Daily. Legacy Earned Forever.</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
          >
            <button
              onClick={onJoinClick}
              className="bg-brand-accent text-brand-bg font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full hover:bg-white hover:text-brand-bg hover:shadow-xl hover:shadow-brand-accent/10 transition-all duration-300 transform active:scale-98 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              Join Today
            </button>
            <a
              href="#membership"
              className="bg-brand-secondary text-white border border-brand-border font-sans font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full text-center hover:bg-white/5 hover:border-brand-accent transition-all duration-300 transform active:scale-98 focus:outline-none focus:border-brand-accent"
            >
              Explore Memberships
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-x-6 gap-y-3 w-full border-t border-brand-border/60 pt-8"
          >
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white">
                <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <badge.icon className="w-4 h-4" />
                </div>
                <span className="text-sm font-sans font-medium text-brand-muted uppercase tracking-wide">
                  {badge.text}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Framed Placeholder for Future Media/Image (Right side) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="lg:col-span-5 relative w-full aspect-[4/5] max-w-[420px] mx-auto lg:max-w-none"
        >
          {/* Exterior premium glass frame */}
          <div className="absolute inset-0 bg-[#121212] border border-brand-border rounded-2xl p-4 flex flex-col justify-between shadow-2xl shadow-black/80">
            {/* Corner styling accents */}
            <div className="absolute -top-[1.5px] -left-[1.5px] w-6 h-6 border-t-2 border-l-2 border-brand-accent rounded-tl-2xl pointer-events-none" />
            <div className="absolute -bottom-[1.5px] -right-[1.5px] w-6 h-6 border-b-2 border-r-2 border-brand-accent rounded-br-2xl pointer-events-none" />

            {/* Inner Placeholder Mesh Container */}
            <div className="relative flex-grow rounded-xl bg-brand-bg border border-white/5 overflow-hidden flex flex-col items-center justify-center p-8 text-center group">
              {/* Subtle background graphic */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffd40003_1px,transparent_1px)] [background-size:16px_16px]" />
              
              {/* Dynamic decorative vector icon */}
              <div className="relative mb-6 transform group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-20 h-20 rounded-full border border-brand-accent/30 bg-brand-bg flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-brand-accent" />
                </div>
              </div>

              <h3 className="font-display text-2xl tracking-wide uppercase text-white mb-2">
                Legacy Arena Preview
              </h3>
              <p className="text-xs text-brand-muted font-sans max-w-[240px] leading-relaxed mb-4">
                Renovation photos and cinematic training highlights coming soon.
              </p>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-accent/5 border border-brand-accent/20 rounded-full text-[10px] text-brand-accent font-mono uppercase tracking-wider">
                System Offline: Live Stream Standby
              </div>
            </div>

            {/* Bottom Status Panel */}
            <div className="flex items-center justify-between mt-4 px-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-[10px] font-mono uppercase text-brand-muted tracking-widest">
                  CamML-01
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase text-brand-accent tracking-widest">
                PREMIUM ACCREDITED
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
