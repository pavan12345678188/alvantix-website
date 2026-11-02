import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Briefcase, 
  ShieldCheck, 
  Heart, 
  Sparkles, 
  CheckCircle2, 
  User, 
  GraduationCap, 
  Code2, 
  BrainCircuit, 
  Layers, 
  ArrowRight, 
  Send, 
  Clock, 
  Compass, 
  Laptop 
} from "lucide-react";
import SEO from "./SEO";

export default function CareersView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roleInterest: "technical",
    portfolioUrl: "",
    notes: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const perks = [
    {
      icon: Sparkles,
      title: "AI-First Innovation",
      description:
        "Work on intelligent software, production neural architectures, and future-ready technologies that solve tangible real-world challenges.",
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      icon: Code2,
      title: "Engineering Autonomy",
      description:
        "Collaborate in a culture that values clean code, architectural rigor, and high individual ownership without layers of bureaucracy.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    },
    {
      icon: GraduationCap,
      title: "Rapid Growth & Mentorship",
      description:
        "Accelerate your professional craft alongside experienced software architects who care about deep technical mastery.",
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      icon: ShieldCheck,
      title: "Ethical & Responsible Impact",
      description:
        "Help shape technologies that empower communities, prioritize privacy, and adhere to responsible AI development.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
  ];

  const technicalRoles = [
    {
      title: "AI & Machine Learning Engineers",
      desc: "Architecting generative AI pipelines, model fine-tuning, RAG vector retrieval, and autonomous multi-agent task execution systems.",
      skills: ["Python", "PyTorch / TensorFlow", "Vector DBs (Qdrant, Pinecone)", "LangChain / LangGraph", "API Engineering"]
    },
    {
      title: "Full-Stack Software Engineers",
      desc: "Building low-latency responsive web applications, secure cloud backend APIs, and reliable database architectures.",
      skills: ["React / TypeScript", "Node.js / Express", "PostgreSQL / Cloud SQL", "Tailwind CSS", "Redis & Caching"]
    },
    {
      title: "UI/UX & Systems Designers",
      desc: "Crafting intuitive digital experiences, high-fidelity interactive prototypes, and unified design systems for complex software.",
      skills: ["Figma", "Design Systems", "Interactive Prototyping", "Information Architecture", "User Research"]
    }
  ];

  const nonTechnicalRoles = [
    {
      title: "Product & Strategy Associates",
      desc: "Translating customer pain points into functional product specifications, market feasibility studies, and user journey roadmaps.",
      skills: ["Product Management", "Market Research", "Feature Prioritization", "Agile Execution"]
    },
    {
      title: "Technical Content & Growth Specialists",
      desc: "Creating authoritative technical documentation, case studies, search engine optimization (SEO) architecture, and industry insights.",
      skills: ["Technical Writing", "SEO & Analytics", "Content Strategy", "Digital Growth"]
    },
    {
      title: "Business Development & Partnerships",
      desc: "Identifying enterprise collaboration opportunities, engaging client leaders, and managing technical client engagements.",
      skills: ["Client Relationship Management", "Solution Framing", "B2B Outreach", "Partnership Coordination"]
    }
  ];

  const hiringProcess = [
    {
      step: "01",
      title: "Application & Profile Review",
      desc: "We review your background, GitHub/portfolio projects, and interest alignment with Alvantix's mission."
    },
    {
      step: "02",
      title: "Technical or Domain Dialogue",
      desc: "A conversational technical session discussing real-world architectural trade-offs, code samples, or past challenges."
    },
    {
      step: "03",
      title: "Practical Sandbox Challenge",
      desc: "A focused, respectful mini-assignment reflecting real day-to-day engineering at Alvantix (no trick puzzles)."
    },
    {
      step: "04",
      title: "Offer & Welcome",
      desc: "Transparent conversation covering roles, expectations, growth pathways, and onboarding into the team."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission to waitlist
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        roleInterest: "technical",
        portfolioUrl: "",
        notes: ""
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <div className="w-full bg-slate-50/30 pt-36 md:pt-40 pb-24 text-left">
      <SEO
        title="Careers at Alvantix | AI, Engineering & Innovation"
        description="Explore careers and internships at Alvantix. Join our talent pool for technical roles in AI, full-stack software, and product design."
        canonical="https://www.alvantix.in/careers"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO TITLE */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span>Join Our Mission</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Build the Future with AI &amp; Software Innovation
          </h1>
          <p className="mt-4 text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
            Passionate about AI systems, modern software engineering, and solving meaningful problems? At Alvantix, we're building an environment where ambitious individuals can do the most impactful work of their careers.
          </p>
        </div>

        {/* WHY JOIN ALVANTIX */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
              Company Culture
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Why Join Alvantix?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-[22px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className={`p-3 rounded-xl ${p.color} border w-fit mb-4`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CAREER & INTERNSHIP OPPORTUNITIES OVERVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* TECHNICAL ROLES */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <Laptop className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-slate-900">Technical Roles</h2>
                <p className="text-xs font-mono text-slate-500">Engineering, AI &amp; Product Architecture</p>
              </div>
            </div>

            <div className="space-y-4">
              {technicalRoles.map((role, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-[20px] p-6 shadow-sm">
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">{role.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5 font-sans">{role.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-[11px] font-mono border border-slate-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NON-TECHNICAL ROLES */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-2xl text-slate-900">Non-Technical &amp; Growth Roles</h2>
                <p className="text-xs font-mono text-slate-500">Strategy, Content, Operations &amp; Outreach</p>
              </div>
            </div>

            <div className="space-y-4">
              {nonTechnicalRoles.map((role, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-[20px] p-6 shadow-sm">
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-1.5">{role.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5 font-sans">{role.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 text-[11px] font-mono border border-slate-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* INTERNSHIP PROGRAM NOTE */}
        <div className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 border border-blue-100 rounded-[24px] p-7 sm:p-9 mb-20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
            <span className="p-3 bg-white text-blue-600 rounded-2xl shadow-xs border border-blue-100">
              <GraduationCap className="w-6 h-6" />
            </span>
            <div>
              <h3 className="font-display font-bold text-xl text-slate-900">Alvantix Student &amp; Early-Career Internship Program</h3>
              <p className="text-xs font-mono text-blue-700">Hands-on learning with production codebases</p>
            </div>
          </div>
          <p className="text-slate-650 text-sm leading-relaxed max-w-3xl">
            We actively support passionate engineering students and self-taught developers. Our internships are mentorship-driven, focusing on real commits, architectural design sessions, and exposure to cutting-edge AI pipelines rather than busywork.
          </p>
        </div>

        {/* APPLICATION PROCESS */}
        <div className="mb-20">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
              Hiring Transparency
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Our 4-Step Application Process
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              We respect your time. Our evaluation is pragmatic, communicative, and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringProcess.map((step) => (
              <div key={step.step} className="bg-white border border-slate-200 rounded-[20px] p-6 shadow-sm">
                <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg inline-block mb-3">
                  Step {step.step}
                </span>
                <h3 className="font-display font-bold text-base text-slate-900 mb-1.5">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* JOIN OUR TALENT WAITLIST CARD */}
        <div className="bg-white border border-slate-200 rounded-[28px] shadow-sm p-8 sm:p-12 max-w-3xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600" />

          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-2">
              Join the Alvantix Talent Pool
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We evaluate candidates continuously as our project needs and product cohorts expand. Submit your details below to be contacted when relevant opportunities open.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Johnson"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none bg-white text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none bg-white text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                      Domain of Interest *
                    </label>
                    <select
                      value={formData.roleInterest}
                      onChange={(e) => setFormData({ ...formData, roleInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none bg-white text-slate-700"
                    >
                      <option value="technical">Technical / AI / Software Engineering</option>
                      <option value="internship">Student Internship Program</option>
                      <option value="design">UI/UX & Systems Design</option>
                      <option value="product">Product & Strategy</option>
                      <option value="growth">Content, SEO & Growth Marketing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                      Portfolio / GitHub / LinkedIn
                    </label>
                    <input
                      type="url"
                      value={formData.portfolioUrl}
                      onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                      placeholder="https://github.com/..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none bg-white text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-500 font-bold uppercase mb-1">
                    Brief Introduction &amp; Interests
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us about the technologies you enjoy working with and what you're excited to build..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-600 focus:outline-none resize-none bg-white text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting Profile...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Candidate Profile to Talent Pool</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-3"
              >
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Profile Received!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Thank you for your interest in Alvantix. Our team reviews all talent pool submissions and will reach out when a suitable role matches your skills.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
