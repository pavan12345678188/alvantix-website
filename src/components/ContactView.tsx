import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, ShieldAlert, Sparkles, CheckCircle,Phone,Bot } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";


export default function ContactView() {
  interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
}
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    email: '',
    company: '',
    serviceInterest: 'ai-solutions',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreed,setAgreed] = useState(false);
  const helperPoints = [
    {
      title: 'Call us',
      address: '+91 77802 39013',
      icon: Phone
    },
    {
      title: 'Email Us',
      address: 'contact.alvantix@gmail.com',
      icon: Mail
    },
  ];

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://alvantix-website.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        company: "",
        serviceInterest: "ai-solutions",
        message: "",
      });

      // Keep success message visible for 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

    } else {
      alert(data.message);
    }

  } catch (error) {
    console.error(error);
    alert("Unable to connect to the server.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="w-full bg-white pt-40 md:pt-44 pb-24 relative overflow-hidden grid-bg">
      {/* Visual background flares */}
      <div className="absolute top-1/4 right-0 -z-10 w-96 h-96 bg-blue-100/10 blur-3xl rounded-full" />
      <div className="absolute bottom-1/4 left-0 -z-10 w-96 h-96 bg-indigo-100/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: HOTLINES & GLOBAL HUB POINTS */}
          <div className="lg:col-span-5 text-left flex flex-col space-y-10">
            <div>
              <span className="text-lg md:text-xl lg:text-3xl font-mono tracking-widest uppercase text-blue-600 font-bold">
                CONNECT TO THE FUTURE
              </span>
              <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2 mb-4">
                Let's Build the Future Together
              </h1>
              <p className="text-slate-650 font-sans text-base leading-relaxed">
              "Whether you're looking to build an AI solution, modern website, business application, or intelligent automation platform, our team is ready to help transform your ideas into reality."
              </p>
            </div>

            {/* HELPLINES MODULE */}
            <div className="space-y-4">
             
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {helperPoints.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center space-x-3.5 p-4 border border-slate-100 bg-slate-50/50 rounded-2xl">
                      <div className="p-2 bg-white rounded-lg border border-slate-50 text-blue-600">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs text-slate-400 font-mono font-medium">{item.title}</h4>
                        <a
  href={
    item.title === "Call us"
      ? `tel:${item.address.replace(/\s+/g, "")}`
      : `mailto:${item.address}`
  }
  className="text-sm font-semibold text-slate-800 hover:text-blue-600 font-sans break-all"
>
  {item.address}
</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

<SEO
title="About Alvantix"
description="Learn about Alvantix, our mission, vision, values, and commitment to AI-driven innovation."
/>
          {/* RIGHT: INTERACTIVE CONTACT FORM CARD */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-150 rounded-[24px] shadow-sm p-6 sm:p-10 relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    <div>
                      <h3 className="font-display font-bold text-xl text-slate-900 mb-1">Start Your Project</h3>
                      <p className="text-xs text-slate-400 font-sans">Share your requirements, and we'll help you transform your ideas into intelligent software ai solutions.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1.5">Full Name </label>
                        <input
                          type="text"
                          required
                          minLength={3}
                          maxLength={60}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600/30 transition-shadow bg-white text-slate-800"
                          placeholder=""
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1.5">Email </label>
                        <input
                          type="email"
                          required
                          maxLength={100}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600/30 transition-shadow bg-white text-slate-800"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1.5">Company Name (Optional)</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600/30 transition-shadow bg-white text-slate-800"
                          placeholder=""
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1.5">Select a Service </label>
                        <select
                          value={formData.serviceInterest}
                          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none bg-white text-slate-700"
                        >
                          <option value="AI Solutions">AI Solutions</option>
                          <option value="Website Development">Website Development</option>
                          <option value="Web App Development">Web App Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="Desktop Application Development">Desktop Application Development</option>
                          <option value="Automated AI Chatbots">Automated AI Chatbots</option>
                          <option value="UI/UX Interface Design">UI/UX Interface Design</option>
                          <option value="Data Analytics">Data Analytics</option>
                          <option value="Business Intelligence & Automation">Business Intelligence & Automation</option>
                          <option value="Webscraping">Webscraping</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1.5">Your Core Briefing Details </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600/30 transition-shadow resize-none bg-white text-slate-800"
                        placeholder="Describe your project requirements, goals, expected timeline, budget (optional), and any additional details that will help us understand your vision."
                      />
                    </div>
                  {/* CONSENT */}
<div className="border-t border-slate-100 pt-5">
  <div className="flex items-start gap-3">

    <input
      id="privacy-consent"
      type="checkbox"
      checked={agreed}
      onChange={(e) => setAgreed(e.target.checked)}
      required
      className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
    />

    <label
      htmlFor="privacy-consent"
      className="text-sm text-slate-600 leading-relaxed"
    >
      I have read and agree to the{" "}
      <button
        type="button"
        onClick={() => window.open("/privacy")}
        className="text-blue-600 font-medium hover:underline"
      >
        Privacy Policy
      </button>{" "}
      and{" "}
      <button
        type="button"
        onClick={() => window.open("/terms")}
        className="text-blue-600 font-medium hover:underline"
      >
        Terms & Conditions
      </button>.
    </label>

  </div>
</div>
                    <div>
                        <button
  type="submit"
  disabled={isSubmitting || !agreed}
  className={`w-full py-4 rounded-xl font-semibold text-sm flex items-center justify-center space-x-2 shadow-md transition-all duration-300 relative overflow-hidden ${
    isSubmitting || !agreed
      ? "bg-blue-300 text-white cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg"
  }`}
>
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                            <span>Sending Your Request....</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send Inquiry</span>
                          </>
                        )}
                      </button>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y:0 }}
                    exit={{ opacity: 0 }}
                    className="py-16 text-center space-y-6 flex flex-col items-center"
                  >
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-full animate-pulse">
                      <CheckCircle className="w-12 h-12" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-display font-bold text-2xl text-slate-900">Thank You!<br/> Your Inquiry Has Been Successfully Received  </h3>
                      <p className="text-sm font-sans text-slate-500 max-w-sm mx-auto leading-relaxed">
                        Thank you, {formData.name} Your inquiry has been successfully submitted. <strong>{formData.serviceInterest}</strong> Our team is reviewing your project requirements and will contact you within 24 business hours.
                      </p>
                    </div>
                    
    
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
