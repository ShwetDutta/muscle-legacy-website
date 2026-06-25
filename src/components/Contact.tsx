import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send, ShieldCheck, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  selectedSubject: string;
}

export default function Contact({ selectedSubject }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync selected subject from header CTA, membership plan, or booking
  useEffect(() => {
    if (selectedSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: selectedSubject,
        message: `Hi Muscle Legacy, I would like to register or receive consultations regarding: "${selectedSubject}". Please connect me with a representative.`,
      }));
      
      // Auto scroll to contact form container
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedSubject]);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = "Full name is required.";
    
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone.trim())) {
      errors.phone = "Please enter a valid phone number (min 10 digits).";
    }

    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errors.message = "Message details cannot be left empty.";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate luxury API response time
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 1800);
  };

  return (
    <section id="contact" className="relative bg-[#0d0d0d] py-24 sm:py-32 px-6 md:px-12 border-t border-brand-border/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-brand-accent font-mono text-xs uppercase tracking-widest font-bold mb-2 block">
            Direct Concierge Desk
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-white uppercase tracking-tight">
            Schedule a Consult
          </h2>
        </div>

        {/* Form and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info & Form (7 Columns) */}
          <div className="lg:col-span-7 bg-brand-secondary border border-brand-border/40 p-8 sm:p-12 rounded-2xl relative shadow-xl">
            <div className="absolute top-0 left-12 w-16 h-[2px] bg-brand-accent" />

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  <h3 className="font-display text-3xl text-white uppercase tracking-wide mb-4">
                    Send Concierge Message
                  </h3>
                  <p className="text-xs text-brand-muted font-sans leading-relaxed mb-8">
                    Specify your training goals, preferred class times, or general questions. Our dedicated customer representative will call you back within 2 business hours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-sans font-bold text-white uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full bg-brand-bg text-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 transition-all ${
                          formErrors.name 
                            ? "border-red-500/80 focus:ring-red-500/50" 
                            : "border-brand-border/60 focus:border-brand-accent focus:ring-brand-accent/50"
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {formErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-[11px] font-sans font-bold text-white uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-brand-bg text-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 transition-all ${
                          formErrors.phone 
                            ? "border-red-500/80 focus:ring-red-500/50" 
                            : "border-brand-border/60 focus:border-brand-accent focus:ring-brand-accent/50"
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {formErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-[11px] font-sans font-bold text-white uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-brand-bg text-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 transition-all ${
                          formErrors.email 
                            ? "border-red-500/80 focus:ring-red-500/50" 
                            : "border-brand-border/60 focus:border-brand-accent focus:ring-brand-accent/50"
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" /> {formErrors.email}
                        </p>
                      )}
                    </div>

                    {/* Selected Plan/Subject dropdown */}
                    <div>
                      <label htmlFor="subject" className="block text-[11px] font-sans font-bold text-white uppercase tracking-wider mb-2">
                        Subject Interest
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full bg-brand-bg text-white border border-brand-border/60 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 transition-all cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Starter Plan Registration">Starter Plan Registration</option>
                        <option value="Pro Elite Plan Registration">Pro Elite Plan Registration</option>
                        <option value="Legacy Elite Plan Registration">Legacy Elite Plan Registration</option>
                        <option value="Elite Bodybuilding Program">Elite Bodybuilding Program</option>
                        <option value="Weight Loss Performance Program">Weight Loss Performance Program</option>
                        <option value="General Fitness & Conditioning">General Fitness & Conditioning</option>
                        <option value="Zumba & Cardio Aerobics">Zumba & Cardio Aerobics</option>
                        <option value="Boxing & Coordination Program">Boxing & Coordination Program</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-sans font-bold text-white uppercase tracking-wider mb-2">
                      Your Training Request *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full bg-brand-bg text-white border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 transition-all resize-none ${
                        formErrors.message 
                          ? "border-red-500/80 focus:ring-red-500/50" 
                          : "border-brand-border/60 focus:border-brand-accent focus:ring-brand-accent/50"
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {formErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-accent text-brand-bg hover:bg-white hover:text-brand-bg font-sans font-bold text-xs uppercase tracking-widest py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-secondary"
                    id="submit-contact"
                  >
                    {isSubmitting ? "TRANSMITTING TO COHORT..." : "SUBMIT LEGACY BRIEFING"}
                    <Send className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center justify-center"
                >
                  <div className="w-20 h-20 bg-brand-accent/10 border border-brand-accent/30 rounded-full flex items-center justify-center text-brand-accent mb-6">
                    <ShieldCheck className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-4xl text-white uppercase tracking-wider mb-3">
                    Briefing Logged
                  </h3>
                  <p className="text-brand-muted text-sm font-sans max-w-sm leading-relaxed mb-8">
                    Your luxury concierge registration request was securely generated. A fitness specialist has been queued and will contact you via your mobile number within 2 business hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-brand-bg hover:bg-[#1f1f1f] border border-brand-border text-white text-xs font-sans font-bold uppercase tracking-widest px-6 py-3 rounded-lg transition-colors cursor-pointer"
                  >
                    File Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Info & Map Column (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 h-full flex flex-col justify-between">
            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1: Phone */}
              <div className="bg-brand-secondary/40 border border-brand-border/40 rounded-xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold text-brand-muted uppercase tracking-widest block mb-0.5">
                    Phone Hotlines
                  </span>
                  <a href="tel:+919876543210" className="text-sm text-white hover:text-brand-accent font-sans font-semibold transition-colors">
                    +91 98765 43210
                  </a>
                  <p className="text-[10px] text-brand-muted mt-0.5 font-mono">Toll-free valet desk</p>
                </div>
              </div>

              {/* Card 2: Email */}
              <div className="bg-brand-secondary/40 border border-brand-border/40 rounded-xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold text-brand-muted uppercase tracking-widest block mb-0.5">
                    Concierge Mail
                  </span>
                  <a href="mailto:concierge@musclelegacy.com" className="text-xs text-white hover:text-brand-accent font-sans font-semibold transition-colors break-all">
                    concierge@musclelegacy.com
                  </a>
                  <p className="text-[10px] text-brand-muted mt-0.5 font-mono">24h digital dispatch</p>
                </div>
              </div>

              {/* Card 3: Address */}
              <div className="bg-brand-secondary/40 border border-brand-border/40 rounded-xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold text-brand-muted uppercase tracking-widest block mb-0.5">
                    HQ Location
                  </span>
                  <p className="text-xs text-white font-sans font-semibold leading-relaxed">
                    No. 45, Nungambakkam High Road, Chennai, Tamil Nadu, 600034
                  </p>
                </div>
              </div>

              {/* Card 4: Hours */}
              <div className="bg-brand-secondary/40 border border-brand-border/40 rounded-xl p-6 flex flex-col gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-bg border border-brand-border flex items-center justify-center text-brand-accent shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-sans font-bold text-brand-muted uppercase tracking-widest block mb-0.5">
                    Operational Hours
                  </span>
                  <p className="text-xs text-white font-sans font-semibold leading-relaxed">
                    Mon - Sat: 5:00 AM - 11:00 PM <br />
                    Sun: 7:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Maps Container */}
            <div className="relative w-full aspect-video sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border/60 shadow-lg">
              <iframe
                title="Muscle Legacy HQ Map - Hike Fitness Chennai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4251268685166!2d80.22283647572719!3d13.068868212648753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52671d0b95efb7%3A0x2f96e508f97c4db9!2sHike%20Fitness!5e0!3m2!1sen!2sin!4v1719240000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale invert contrast-[85%] hover:contrast-100 transition-all duration-500"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
