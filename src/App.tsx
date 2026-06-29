import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Membership from "./components/Membership";
import Classes from "./components/Classes";
import Trainers from "./components/Trainers";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export default function App() {
  const [selectedSubject, setSelectedSubject] = useState("");

  // Handler for Navbar / Hero CTA click
  const handleGeneralJoinClick = () => {
    setSelectedSubject("General Admission Club Enrollment");
  };

  // Handler for pricing plan selector
  const handlePlanSelect = (planName: string) => {
    setSelectedSubject(`${planName} Plan Registration`);
  };

  // Handler for class booking
  const handleClassBook = (className: string) => {
    setSelectedSubject(`${className} Booking`);
  };

  return (
    <div className="bg-[#090909] text-white min-h-screen font-sans selection:bg-brand-accent selection:text-brand-bg relative w-full max-w-full overflow-x-hidden">
      {/* Dynamic Global Grid Lines Accent */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-5">
        <div className="max-w-7xl mx-auto h-full w-full border-x border-brand-border" />
      </div>

      {/* Sticky Premium Header */}
      <Navbar onJoinClick={handleGeneralJoinClick} />

      <main>
        {/* Cinematic Hero */}
        <Hero onJoinClick={handleGeneralJoinClick} />

        {/* Dynamic Philosophy & Counters */}
        <About />

        {/* Transparent Premium Plans */}
        <Membership onPlanSelect={handlePlanSelect} />

        {/* Signature Classes */}
        <Classes onClassBookClick={handleClassBook} />

        {/* Elite Instructor Roster */}
        <Trainers onContactClick={() => setSelectedSubject("Private Instructor Training Consultation")} />

        {/* Under Renovation Bento Grid */}
        <Gallery />

        {/* Verified Voice Stories */}
        <Testimonials />

        {/* Accordions FAQs */}
        <FAQ />

        {/* Map & Concierge Desk Form */}
        <Contact selectedSubject={selectedSubject} />
      </main>

      {/* Floating Sticky Pulse Actions */}
      <WhatsAppButton />

      {/* Premium Minimal Footer */}
      <Footer />
    </div>
  );
}
