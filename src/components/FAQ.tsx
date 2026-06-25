import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Default open first one

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative bg-brand-bg py-24 sm:py-32 px-6 md:px-12 border-t border-brand-border/20">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-20">
          <span className="text-brand-accent font-mono text-xs uppercase tracking-widest font-bold mb-2 block">
            Clear Operational Standards
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white uppercase tracking-tight">
            Frequently Asked Queries
          </h2>
        </div>

        {/* Accordions Stack */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-brand-secondary/40 border border-brand-border/40 hover:border-brand-accent/20 rounded-xl overflow-hidden transition-colors duration-300"
              >
                {/* Header Toggle */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left cursor-pointer focus:outline-none focus:bg-brand-secondary/80 group"
                  aria-expanded={isOpen}
                  id={`faq-toggle-${faq.id}`}
                >
                  <span className="font-display text-xl sm:text-2xl text-white uppercase tracking-wider group-hover:text-brand-accent transition-colors duration-200 pr-4">
                    {faq.question}
                  </span>
                  
                  {/* Plus/Minus Vector */}
                  <div className="w-8 h-8 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent shrink-0 group-hover:border-brand-accent transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Smooth Expandable Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-brand-border/10">
                        <p className="text-sm text-brand-muted font-sans leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic CTA box */}
        <div className="mt-16 text-center">
          <p className="text-xs text-brand-muted font-sans mb-4">
            Have an alternative inquiry or require direct assistance from our concierge?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-sans font-extrabold text-white hover:text-brand-accent uppercase tracking-widest transition-colors focus:outline-none"
          >
            Connect With Concierge 
            <HelpCircle className="w-4 h-4 text-brand-accent" />
          </a>
        </div>

      </div>
    </section>
  );
}
