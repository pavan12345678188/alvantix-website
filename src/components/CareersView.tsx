import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, ShieldCheck, Heart, Sparkles, CheckCircle2, User } from 'lucide-react';
import SEO from "./SEO";

export default function CareersView() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

 
const perks = [
  {
    icon: Sparkles,
    title: "AI-First Innovation",
    description:
      "Work on intelligent software, AI-powered products, and future-ready technologies that solve real-world challenges.",
  },
  {
    icon: Briefcase,
    title: "Learn & Grow",
    description:
      "Build practical experience, collaborate on meaningful projects, and grow alongside an ambitious technology startup.",
  },
  {
    icon: ShieldCheck,
    title: "Build the Future",
    description:
      "Your ideas and contributions will help shape the future of Alvantix and the next generation of AI-driven innovation.",
  },
]; 

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmailInput('');
    }, 4000);
  };

  return (
    <div className="w-full bg-slate-50/30 pt-40 md:pt-44 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-20 text-balance">
          <span className="text-lg md:text-xl lg:text-3xl font-mono tracking-widest uppercase text-blue-600 font-bold">
            CAREERS AT ALVANTIX
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2 mb-4">
            Build the Future with AI
          </h1>
          <p className="text-slate-600 font-sans text-lg">
           Passionate about AI, software, and innovation? We're preparing exciting career opportunities for individuals who are eager to learn, create, and shape the future of technology. Join our waitlist today and be the first to know when applications open.
          </p>
        </div>
<SEO
  title="Careers at Alvantix"
  description="Join Alvantix and build the future with AI, software, and digital innovation. Subscribe to be notified when career opportunities open."
/>
        {/* PERKS STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {perks.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="bg-white border border-slate-100 p-8 rounded-[20px] shadow-sm flex flex-col space-y-4 text-left">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl self-start">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-sans">{p.description}</p>
              </div>
            );
          })}
        </div>

        {/* RECRUITMENT PLACEHOLDER (COMING SOON) */}
        <div className="bg-white border border-slate-150 rounded-[28px] shadow-sm p-8 sm:p-14 text-center max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-500" />
          
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
              <Briefcase className="w-8 h-8" />
            </div>
            
            <div className="space-y-3">
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                We are opening careers very soon
              </h2>
              <p className="text-slate-500 font-sans text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
               We're currently building our team and will soon open opportunities for passionate developers, designers, AI enthusiasts, and innovators. Subscribe below to be among the first to know when applications open.
              </p>
            </div>

            <div className="w-full max-w-md pt-4">
              <AnimatePresence mode="wait">
                {!subscribed ? (
                  <motion.form 
                    key="subscribe-form"
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleSubscribeSubmit}
                    className="flex flex-col sm:flex-row gap-2"
                  >
                    <div className="relative flex-1">
                      <span className="absolute left-3.5 top-3.5"><User className="w-4 h-4 text-slate-400" /></span>
                      <input 
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none transition-colors text-left"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider shadow-md transition-all active:scale-[0.98] flex items-center justify-center space-x-1 pointer-events-auto"
                    >
                      <span>Notify Me</span>
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="subscribed-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center space-x-2.5 text-emerald-800 text-sm font-semibold"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Thank you!
                     We'll notify you as soon as career opportunities become available.</span>
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
