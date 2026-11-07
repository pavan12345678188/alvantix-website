import { useRef } from "react";
import { motion } from "motion/react";
import {
  Compass,
  ShoppingBag,
  Landmark,
  Activity,
  Plane,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Target,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";

import { trackCTA } from "../analytics/events";
import { trackProductView } from "../analytics/analytics";

export default function ProductsView() {
  const navigate = useNavigate();

  // Prevent duplicate product-view events during one page visit.
  const viewedProducts = useRef<Set<string>>(new Set());

  // Track when an individual product becomes visible.
  const handleProductView = (productName: string) => {
    if (viewedProducts.current.has(productName)) return;

    viewedProducts.current.add(productName);
    trackProductView(productName);
  };

  // Track CTA interactions and navigate to the requested page.
  const handleNavigate = (
    path: string,
    label: string,
    source: string = "Products Page"
  ) => {
    trackCTA(label, source);

    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  const products = [
    {
      id: "pathlauncher",
      name: "PathLauncher",
      tagline: "AI-Powered Career & Academic Guidance Engine",
      overview:
        "PathLauncher is an intelligent academic and career orientation platform designed to guide students through pivotal educational decisions. Leveraging cognitive profiling and domain requirement mapping, it helps learners discover suitable academic paths, understand future career trajectories, and receive structured roadmap recommendations beyond high school.",
      problemSolved:
        "Millions of students face critical career confusion following secondary education (10th/12th standards) due to fragmented information, lack of accessible counselors, and societal biases, often leading to misaligned career choices.",
      targetAudience:
        "High school students, secondary school graduates, parents, academic counselors, and educational institutions.",
      features: [
        "AI-driven multidimensional skill and aptitude assessment",
        "Personalized career roadmaps with step-by-step milestones",
        "Higher education course and institutional curriculum matching",
        "Real-time emerging industry skills analysis"
      ],
      status: "Active Development & Beta Validation",
      statusColor: "bg-amber-50 text-amber-700 border-amber-200",
      accent: "from-blue-600 to-indigo-600",
      icon: Compass
    },
    {
      id: "pramzo",
      name: "Pramzo",
      tagline: "Intelligent Retail & Commerce Operations Platform",
      overview:
        "Pramzo is a smart commerce intelligence platform built to modernize local retail workflows and distributed commercial networks. Combining unified catalog management, demand intelligence, and automated operational reconciliation, Pramzo equips modern sellers with enterprise-grade technology.",
      problemSolved:
        "Independent retailers and growing retail chains struggle with disparate legacy billing software, poor inventory synchronization across channels, and lack of automated demand forecasting.",
      targetAudience:
        "Retail business owners, multi-store operators, brand distributors, and modern commerce teams.",
      features: [
        "Unified cross-channel inventory and order synchronization",
        "Automated reordering alerts powered by predictive demand analysis",
        "Fast omnichannel customer checkout and digital invoice generation",
        "Centralized sales and revenue performance dashboard"
      ],
      status: "Active Architecture & Prototyping",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      accent: "from-indigo-600 to-purple-600",
      icon: ShoppingBag
    },
    {
      id: "templeverse",
      name: "Templeverse",
      tagline: "Cultural Heritage & Immersive Spiritual Technology Platform",
      overview:
        "Templeverse fuses ancient cultural architecture and heritage with modern interactive 3D virtual spaces and intelligent guide agents. The platform enables users worldwide to explore historical temples, access authenticated cultural scriptures, and participate in immersive digital community environments.",
      problemSolved:
        "Geographic distance, physical mobility challenges, and fragmented cultural documentation make it difficult for global devotees and cultural enthusiasts to experience and preserve rich temple histories.",
      targetAudience:
        "Cultural tourists, devotees, spiritual pilgrims worldwide, cultural heritage trusts, and digital historians.",
      features: [
        "Interactive 3D virtual environment tours with spatial audio",
        "AI guide agents equipped with authenticated cultural history context",
        "Real-time spiritual services and community gathering rooms",
        "Digital archive preserving temple architectural iconography"
      ],
      status: "In Prototype & Experience Testing",
      statusColor: "bg-purple-50 text-purple-700 border-purple-200",
      accent: "from-amber-500 to-orange-600",
      icon: Landmark
    },
    {
      id: "nearclinic",
      name: "NearClinic",
      tagline: "Connected Digital Healthcare & Clinic Management System",
      overview:
        "NearClinic is an intelligent healthcare platform designed to bridge patients, neighborhood clinics, and medical practitioners. By streamlining appointment logistics, secure health record management, and clinical communication, NearClinic enhances patient access while optimizing outpatient operations.",
      problemSolved:
        "Patients experience unpredictable wait times, lost physical prescription records, and disconnected communication with neighborhood doctors, while clinics face high administrative overhead.",
      targetAudience:
        "Outpatient clinics, independent doctors, general practitioners, diagnostic centers, and local patient communities.",
      features: [
        "Smart queue and dynamic appointment scheduling",
        "Secure digital electronic medical records (EMR) with patient access",
        "Automated prescription management and dosage reminders",
        "Clinic performance analytics and patient flow tracking"
      ],
      status: "Active Engineering & Healthcare Workflow Modeling",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accent: "from-emerald-600 to-teal-600",
      icon: Activity
    },
    {
      id: "travel-ai",
      name: "Alvantix Travel AI",
      tagline: "Autonomous Itinerary & Personalized Travel Concierge",
      overview:
        "Alvantix Travel AI is an autonomous travel planning platform that dynamically generates personalized itineraries based on real-time transit logistics, traveler preferences, budgets, and environmental factors. It acts as a 24/7 intelligent companion during trips, adapting schedules when unforeseen changes occur.",
      problemSolved:
        "Travelers spend dozens of hours manually coordinating flights, stays, routes, and local activities across fragmented apps, leading to rigid plans that fail when delays or weather disruptions strike.",
      targetAudience:
        "Individual travelers, corporate business trip planners, tourism agencies, and hospitality operators.",
      features: [
        "Instant multi-day personalized itinerary generator",
        "Real-time schedule re-balancing upon transit delays or weather alerts",
        "Local culinary and cultural curation mapped to exact traveler tastes",
        "Integrated budget pacing and expense estimation"
      ],
      status: "Research & Core Intelligence Prototyping",
      statusColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
      accent: "from-cyan-600 to-blue-600",
      icon: Plane
    }
  ];

  return (
    <div className="w-full bg-white pt-36 md:pt-40 pb-24 text-left">
      <SEO
        title="Products & Platforms | Intelligent Software Ecosystem | Alvantix"
        description="Discover Alvantix products: PathLauncher (AI Career Guidance), Pramzo (Commerce Platform), Templeverse (Spiritual Tech), NearClinic (Healthcare Platform), and Alvantix Travel AI."
        canonical="https://www.alvantix.in/products"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Alvantix Product Suite</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Intelligent Products Built for Real-World Ecosystems
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            In addition to custom client engineering, Alvantix develops focused, AI-driven software platforms targeting systemic inefficiencies in education, commerce, heritage, healthcare, and travel.
          </p>
        </div>

        {/* PRODUCTS LIST */}
        <div className="space-y-16">
          {products.map((product, idx) => {
            const Icon = product.icon;
            return (
              <motion.article
                key={product.id}
                id={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-white border border-slate-200 rounded-[28px] p-6 sm:p-10 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 relative overflow-hidden"
                onViewportEnter={() => handleProductView(product.name)}
              >
                {/* Subtle Accent Glow */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${product.accent}`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  
                  {/* LEFT: INFO & PROBLEM */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-100">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                          {product.name}
                        </h2>
                        <p className="text-xs sm:text-sm font-mono text-blue-600 font-semibold">
                          {product.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                        Product Overview
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                        {product.overview}
                      </p>
                    </div>

                    {/* PROBLEM IT SOLVES */}
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                        <Target className="w-4 h-4 text-rose-500" />
                        <span>The Problem It Solves</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        {product.problemSolved}
                      </p>
                    </div>

                    {/* TARGET AUDIENCE */}
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                      <Users className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-800">Target Audience: </span>
                        <span>{product.targetAudience}</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: FEATURES & STATUS CARD */}
                  <div className="lg:col-span-5 bg-slate-50/60 border border-slate-150 rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full space-y-6">
                    <div>
                      {/* STATUS BADGE */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                          Development Stage
                        </span>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold border ${product.statusColor}`}>
                          <Clock className="w-3 h-3" />
                          <span>{product.status}</span>
                        </span>
                      </div>

                      {/* KEY FEATURES */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                          Key Capabilities
                        </h4>
                        <ul className="space-y-2.5">
                          {product.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* ACTION CTA */}
                    <div className="pt-4 border-t border-slate-200">
                      <button
                        onClick={() => {
                          handleNavigate(
                            "/contact",
                            `Enquire About ${product.name}`,
                            "Products Page"
                          );
                        }}
                        className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                      >
                        <span>Enquire About {product.name}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM PARTNERSHIP SECTION */}
        <div className="mt-20 p-8 sm:p-12 rounded-[28px] border border-slate-200 bg-slate-50/70 text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600">
            Platform Partnerships &amp; Co-Development
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
            Interested in Piloting or Partnering on an Alvantix Platform?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
            We collaborate with academic institutions, healthcare providers, retail operators, and cultural initiatives to pilot and refine our platform technologies.
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                handleNavigate(
                  "/contact",
                  "Discuss Platform Partnership",
                  "Products Page"
                );
              }}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-blue-600/15 inline-flex items-center gap-2"
            >
              <span>Discuss Platform Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
