import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Autoplay function
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(slideNext, 6000); // every 6 seconds
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  // Framer Motion slide config
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    }),
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative bg-[#0d0d0d] py-24 sm:py-32 px-6 md:px-12 border-t border-brand-border/20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/2 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-brand-accent font-mono text-xs uppercase tracking-widest font-bold mb-2 block">
            Accredited Member Stories
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white uppercase tracking-tight">
            The Legacy Voices
          </h2>
        </div>

        {/* Testimonial Active Display Area */}
        <div 
          className="relative bg-brand-secondary border border-brand-border/40 rounded-2xl p-8 sm:p-14 min-h-[350px] sm:min-h-[300px] flex flex-col justify-between shadow-2xl shadow-black/60"
          onMouseEnter={stopTimer}
          onMouseLeave={startTimer}
        >
          {/* Quote floating background */}
          <div className="absolute top-6 right-8 text-brand-accent/5 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[1.5]" />
          </div>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeTestimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col justify-between h-full"
            >
              {/* Stars & Body text */}
              <div>
                <div className="flex items-center gap-1 mb-6" aria-label={`Rated ${activeTestimonial.stars} stars out of 5`}>
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      className={`w-4 h-4 ${
                        idx < activeTestimonial.stars
                          ? "text-brand-accent fill-brand-accent"
                          : "text-zinc-700"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-base sm:text-xl text-white font-sans font-light italic leading-relaxed mb-8">
                  "{activeTestimonial.review}"
                </p>
              </div>

              {/* Customer Metadata Info */}
              <div className="flex items-center justify-between border-t border-brand-border/20 pt-6">
                <div>
                  <h4 className="font-display text-2xl text-white uppercase tracking-wider">
                    {activeTestimonial.name}
                  </h4>
                  <span className="text-xs text-brand-muted font-sans font-medium uppercase tracking-wide">
                    {activeTestimonial.role}
                  </span>
                </div>

                <div className="font-mono text-[9px] text-brand-accent tracking-widest">
                  MEMBER RECORD VERIFIED
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation & Controls Row */}
        <div className="flex items-center justify-between mt-8">
          {/* Indicator dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                  currentIndex === idx 
                    ? "bg-brand-accent w-6" 
                    : "bg-zinc-800 hover:bg-zinc-700"
                }`}
                aria-label={`Go to testimonial slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Nav arrows with proper 44px touch targets */}
          <div className="flex items-center gap-3">
            <button
              onClick={slidePrev}
              className="w-11 h-11 rounded-full bg-brand-secondary border border-brand-border/60 hover:border-brand-accent text-white hover:text-brand-accent transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none"
              aria-label="Previous Testimonial"
              id="testimonial-prev"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={slideNext}
              className="w-11 h-11 rounded-full bg-brand-secondary border border-brand-border/60 hover:border-brand-accent text-white hover:text-brand-accent transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none"
              aria-label="Next Testimonial"
              id="testimonial-next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
