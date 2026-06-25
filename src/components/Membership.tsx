import React from "react";
import { Check, ShieldAlert, Award, Star } from "lucide-react";
import { motion } from "motion/react";
import { MEMBERSHIP_PLANS } from "../data";

interface MembershipProps {
  onPlanSelect: (planName: string) => void;
}

export default function Membership({ onPlanSelect }: MembershipProps) {
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
    <section id="membership" className="relative bg-brand-bg py-24 sm:py-32 px-6 md:px-12 border-t border-brand-border/20">
      {/* Abstract light effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-brand-accent font-mono text-xs uppercase tracking-widest font-bold mb-2 block">
            Transparent Tier Systems
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white uppercase tracking-tight mb-4">
            Invest in Your Legacy
          </h2>
          <p className="text-brand-muted font-sans text-sm sm:text-base leading-relaxed">
            Select the physical commitment level that matches your training ambitions. No hidden charges. No complex contracts. Pure, premium iron.
          </p>
        </div>

        {/* Pricing Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
        >
          {MEMBERSHIP_PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl flex flex-col justify-between p-8 sm:p-10 transition-all duration-300 ${
                plan.isHighlighted
                  ? "bg-brand-secondary border-2 border-brand-accent/50 shadow-2xl shadow-brand-accent/5"
                  : "bg-brand-card/60 border border-brand-border/40 hover:border-brand-border/80 shadow-lg"
              }`}
            >
              {/* Highlight Ribbon or Accent */}
              {plan.isHighlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-bg text-[10px] font-sans font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md shadow-brand-accent/20">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  Most Popular Club Choice
                </div>
              )}

              {/* Card Top */}
              <div>
                <span className="font-sans text-xs text-brand-muted uppercase tracking-wider font-bold block mb-2">
                  {plan.isHighlighted ? "Club Recommended" : "Standard Tier"}
                </span>
                
                <h3 className="font-display text-3xl sm:text-4xl text-white uppercase tracking-wider mb-2">
                  {plan.name}
                </h3>
                
                <p className="text-xs text-brand-muted font-sans min-h-[40px] mb-6">
                  {plan.description}
                </p>

                {/* Pricing Block */}
                <div className="flex items-baseline gap-1 mb-8 border-b border-brand-border/40 pb-6">
                  <span className="text-brand-accent font-sans text-2xl font-semibold">₹</span>
                  <span className="font-display text-5xl sm:text-6xl text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-brand-muted font-sans text-sm uppercase tracking-wide">
                    {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-4 mb-10" aria-label={`Features of ${plan.name} package`}>
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0">
                        <Check className="w-2.5 h-2.5" strokeWidth={3} />
                      </div>
                      <span className="text-sm text-brand-muted font-sans font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onPlanSelect(plan.name)}
                  className={`w-full font-sans font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 ${
                    plan.isHighlighted
                      ? "bg-brand-accent text-brand-bg hover:bg-white hover:text-brand-bg focus:ring-brand-accent shadow-lg shadow-brand-accent/10"
                      : "bg-brand-bg text-white border border-brand-border/60 hover:bg-brand-secondary hover:border-brand-accent focus:ring-brand-accent"
                  }`}
                  id={`join-plan-${plan.id}`}
                >
                  Join {plan.name}
                </button>
                <span className="text-[10px] text-center block text-brand-muted font-sans mt-3 uppercase tracking-widest">
                  100% Secure Checkout • Cancel Anytime
                </span>
              </div>

            </motion.div>
          ))}
        </motion.div>



      </div>
    </section>
  );
}
