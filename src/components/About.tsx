import React, { useEffect, useState } from "react";
import { Check, Target, Trophy, Users, Sparkles } from "lucide-react";
import { motion, useInView } from "motion/react";
import { STATS } from "../data";

// Self-contained live counting animation component
function Counter({ value, suffix, label }: { value: number; suffix: string; label: string; key?: any }) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 2000; // 2 seconds
      const incrementTime = Math.max(Math.floor(duration / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 80); // Step
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="bg-brand-secondary/40 border border-brand-border/40 hover:border-brand-accent/40 rounded-xl p-6 text-center transition-all duration-300">
      <div className="font-display text-4xl sm:text-5xl text-brand-accent tracking-wide mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="font-sans text-xs text-brand-muted uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative bg-[#0d0d0d] py-24 sm:py-32 px-6 md:px-12 border-t border-brand-border/20">
      {/* Background aesthetic line */}
      <div className="absolute right-0 top-0 w-[1px] h-full bg-gradient-to-b from-brand-accent/10 via-transparent to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
        >
          {/* Left Column: Premium Renovation Placeholder Container */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 relative aspect-square w-full max-w-[480px] mx-auto lg:max-w-none"
          >
            {/* Elegant luxury framing */}
            <div className="absolute inset-0 bg-brand-bg border border-brand-border rounded-2xl p-6 flex flex-col justify-between shadow-xl shadow-black">
              {/* Mechanical corners */}
              <div className="absolute top-0 right-0 w-8 h-[1px] bg-brand-accent/40" />
              <div className="absolute top-0 right-0 w-[1px] h-8 bg-brand-accent/40" />
              <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-brand-accent/40" />
              <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-brand-accent/40" />

              {/* Inner content box */}
              <div className="flex-grow rounded-xl border border-white/5 bg-[#121212] flex flex-col items-center justify-center text-center p-8 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
                
                {/* SVG Compass/Blueprint Graphic */}
                <div className="w-16 h-16 rounded-full border border-dashed border-brand-accent/30 bg-brand-bg flex items-center justify-center text-brand-accent mb-6 transform group-hover:rotate-45 transition-transform duration-700">
                  <Target className="w-8 h-8" />
                </div>

                <span className="font-sans text-[10px] text-brand-accent uppercase tracking-widest font-bold mb-2">
                  Heritage of Grit
                </span>
                <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-3">
                  Gym Renovation
                </h3>
                <p className="text-sm text-brand-muted max-w-[280px] leading-relaxed mb-6">
                  We are actively curating the ultimate strength sanctuary. Exclusive high-definition photography coming soon.
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-accent/5 border border-brand-accent/20 rounded text-xs text-brand-accent font-mono uppercase">
                  Est. July 2026
                </div>
              </div>

              {/* Footer text of frame */}
              <div className="flex items-center justify-between text-[10px] font-mono text-brand-muted uppercase mt-4">
                <span>Phase 2 Completion</span>
                <span className="text-brand-accent">94% Done</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copywriting and Values */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <span className="text-brand-accent font-mono text-xs uppercase tracking-widest font-bold mb-2 block">
              Luxury Strength Center
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-white uppercase tracking-tight mb-6">
              Our Legacy, Your Strength.
            </h2>
            
            <p className="text-brand-muted text-base sm:text-lg leading-relaxed mb-6 font-sans">
              At Muscle Legacy, we believe true fitness is a long-term monument. We design spaces that inspire consistency, strength, and community. We reject the crowded, noisy commercial templates to create an premium, luxurious atmosphere tailored specifically for those who care about raw progress.
            </p>

            <p className="text-brand-muted text-base leading-relaxed mb-8 font-sans">
              From our custom-designed elevated boxing arena to Olympic lifting platforms, we pair master level trainers with precise equipment. It's more than a gym. It is an premium wellness environment that expects you to turn effort into lifelong accomplishments.
            </p>

            {/* List of distinct values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-white uppercase tracking-wide">Professional Master Trainers</h4>
                  <p className="text-xs text-brand-muted mt-0.5">Champions, biomechanists, and performance specialists.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-white uppercase tracking-wide">Elite Technical Equipment</h4>
                  <p className="text-xs text-brand-muted mt-0.5">Olympic platforms, specialized plates, custom boxing zones.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-white uppercase tracking-wide">A Supportive Community</h4>
                  <p className="text-xs text-brand-muted mt-0.5">Surround yourself with members who respect physical focus.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-white uppercase tracking-wide">Premium Wellness Lockers</h4>
                  <p className="text-xs text-brand-muted mt-0.5">Digital security closets, keyless suite rain showers.</p>
                </div>
              </div>
            </div>

            {/* Live Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {STATS.map((stat, idx) => (
                <Counter 
                  key={idx}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
