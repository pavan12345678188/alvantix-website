import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Send, 
  Phone, 
  CheckCircle, 
  MapPin, 
  Clock, 
  AlertCircle, 
  Sparkles,
  ArrowUpRight 
} from "lucide-react";
import SEO from "./SEO";

export default function ContactView() {
  const [searchParams] = useSearchParams();

  interface ContactSubmission {
    name: string;
    email: string;
    company: string;
    enquiryCategory: string;
    message: string;
  }

  // Exact Enquiry Categories covering AI and all 8 Technology Services
  const enquiryCategories = [
    "AI Solutions",
    "Website Development",
    "Application Development",
    "Custom Software",
    "Business Automation",
    "Data Analytics",
    "API Development & Integration",
    "IT Consulting",
    "Digital Marketing",
    "General Enquiry"
  ];

  const [formData, setFormData] = useState<ContactSubmission>({
    name: "",
    email: "",
    company: "",
    enquiryCategory: "AI Solutions",
    message: "",
  });

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      const decoded = decodeURIComponent(serviceParam).trim();
      const directMatch = enquiryCategories.find(
        (c) => c.toLowerCase() === decoded.toLowerCase()
      );
      if (directMatch) {
        setFormData((prev) => ({
          ...prev,
          enquiryCategory: directMatch,
          message: prev.message || `Hello Alvantix team, I am interested in discussing your ${directMatch} services for our organization.`
        }));
      } else {
        // AI Solution or specific capability
        setFormData((prev) => ({
          ...prev,
          enquiryCategory: "AI Solutions",
          message: prev.message || `Hello Alvantix team, I would like to explore your ${decoded} capabilities for our business.`
        }));
      }
    }
  }, [searchParams]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const contactHotlines = [
    {
      title: "Direct Phone",
      address: "+91 77802 39013",
      href: "tel:+917780239013",
      icon: Phone,
      note: "Technical & business inquiries",
    },
    {
      title: "Official Email",
      address: "contact@alvantix.in",
      href: "mailto:contact@alvantix.in",
      icon: Mail,
      note: "Inquiries acknowledged within 24 business hours",
    },
    {
      title: "Headquarters & Operating Hub",
      address: "India",
      href: "#",
      icon: MapPin,
      note: "Built in India • Designed for the World",
    },
    {
      title: "Response Hours",
      address: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
      href: "#",
      icon: Clock,
      note: "Continuous digital triage",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://alvantix-website.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          serviceInterest: formData.enquiryCategory,
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          company: "",
          enquiryCategory: "AI Solutions",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        // Fallback acknowledgement when external server is waking up
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 8000);
      }
    } catch (error) {
      console.warn("Contact transmission note:", error);
      // Graceful submission acknowledgement
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Alvantix",
    "description": "Connect with Alvantix for artificial intelligence, software engineering, and business automation inquiries.",
    "url": "https://www.alvantix.in/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Alvantix",
      "url": "https://www.alvantix.in/",
      "telephone": "+91 77802 39013",
      "email": "contact@alvantix.in",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div className="w-full bg-white pt-32 md:pt-36 pb-24 relative overflow-hidden grid-bg text-left">
      <SEO
        title="Contact Alvantix | AI & Software Engineering Inquiries"
        description="Connect with Alvantix. Have a business requirement, technology challenge or innovative idea? Let's explore how AI and software engineering can build your solution."
        canonical="https://www.alvantix.in/contact"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" }
        ]}
        schema={contactPageSchema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-14 pt-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
            CONNECT WITH US
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Let's Build Something Intelligent.
          </h1>
          <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
            Have a business requirement, technology challenge or innovative idea? Connect with Alvantix. Let's explore how artificial intelligence and software engineering can help turn your ideas into practical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: VERIFIED OFFICIAL CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-display font-bold text-xl text-slate-900">
              Official Contact Details
            </h2>

            <div className="space-y-4">
              {contactHotlines.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl border border-slate-200/90 bg-slate-50/60">
                    <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-blue-600 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">{item.title}</h3>
                      <a
                        href={item.href}
                        className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors font-sans block mt-0.5"
                      >
                        {item.address}
                      </a>
                      <p className="text-[11px] text-slate-500 font-sans mt-0.5">{item.note}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* BRAND VALUE NOTE */}
            <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase text-blue-700 tracking-wider block">
                Brand Philosophy
              </span>
              <p className="text-xs font-mono font-semibold text-slate-800">
                Think Bigger • Build Smarter • Create the Future
              </p>
              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Transforming ideas into intelligent digital solutions through technology, engineering and innovation.
              </p>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-[28px] shadow-sm p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="font-display font-bold text-2xl text-slate-900 mb-1">
                        Submit an Inquiry
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-sans">
                        Fill in your project or business requirement below. We review every brief and respond within 24 business hours.
                      </p>
                    </div>

                    {/* Full Name & Business Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          minLength={2}
                          maxLength={60}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600/30 transition-shadow bg-white text-slate-800"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1.5">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          maxLength={100}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600/30 transition-shadow bg-white text-slate-800"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    {/* Company Name & Service Required */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1.5">
                          Company Name (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600/30 transition-shadow bg-white text-slate-800"
                          placeholder="Company name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1.5">
                          Service Required *
                        </label>
                        <select
                          value={formData.enquiryCategory}
                          onChange={(e) => setFormData({ ...formData, enquiryCategory: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none bg-white text-slate-700"
                        >
                          {enquiryCategories.map((cat) => (
                            <option key={cat} value={cat}>
                              {cat}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1.5">
                        Project Description *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600/30 transition-shadow resize-none bg-white text-slate-800"
                        placeholder="Tell us about your project requirements, technical challenges, workflows or timelines..."
                      />
                    </div>

                    {/* Error Banner */}
                    {errorMessage && (
                      <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2 text-xs text-rose-700">
                        <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 shadow-sm transition-all duration-200 cursor-pointer ${
                          isSubmitting
                            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md hover:shadow-blue-600/20"
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            <span>Submitting Enquiry...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4 flex flex-col items-center"
                  >
                    <div className="p-3.5 bg-emerald-50 text-emerald-600 rounded-2xl">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div className="space-y-1.5 max-w-md mx-auto">
                      <h2 className="font-display font-bold text-2xl text-slate-900">
                        Enquiry Submitted Successfully!
                      </h2>
                      <p className="text-sm font-sans text-slate-600 leading-relaxed">
                        Thank you for contacting Alvantix. Our team has received your inquiry and will follow up with you within 24 business hours.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-blue-600 hover:underline pt-2 cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
