import { motion } from "motion/react";
import { 
  ArrowRight, 
  Bot, 
  Cpu, 
  Sparkles, 
  Layers, 
  Code2, 
  Zap, 
  LineChart, 
  Globe, 
  BrainCircuit, 
  Database, 
  Eye, 
  Mic, 
  Workflow, 
  Briefcase, 
  Megaphone, 
  Compass, 
  ShieldCheck, 
  CheckCircle2, 
  Lightbulb, 
  TrendingUp, 
  Boxes 
} from "lucide-react";
import Hero from "./Hero";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";
import ProductsShowcase from "./ProductsShowcase";
import { trackCTA } from "../analytics/events";


export default function HomeView() {
  const navigate = useNavigate();

  const handleNavigate = (path: string, label: string) => {
    trackCTA(label, "Home");
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Section 4: 8 AI Capabilities
  const aiCapabilities = [
    { id: "generative-ai", title: "Generative AI", desc: "Custom AI assistants, conversational systems and generative applications.", icon: Sparkles },
    { id: "ai-agents", title: "AI Agents", desc: "Intelligent agents designed to execute multi-step tasks and automate workflows.", icon: Bot },
    { id: "machine-learning", title: "Machine Learning", desc: "Predictive modelling, classification, recommendation systems and data intelligence.", icon: BrainCircuit },
    { id: "rag-knowledge-ai", title: "RAG & Knowledge AI", desc: "AI systems retrieving verified information from documents and databases.", icon: Database },
    { id: "computer-vision", title: "Computer Vision", desc: "Image recognition, object detection, document processing and visual intelligence.", icon: Eye },
    { id: "voice-ai", title: "Voice AI", desc: "Voice assistants, speech recognition and conversational voice interfaces.", icon: Mic },
    { id: "intelligent-automation", title: "Intelligent Automation", desc: "AI-powered business workflows and cognitive process automation.", icon: Zap },
    { id: "predictive-analytics", title: "Predictive Analytics", desc: "Data-driven forecasting, pattern recognition and decision-support systems.", icon: LineChart },
  ];

  // Section 5: 8 Services
  const servicesList = [
    { id: "website-development", title: "Website Development", desc: "Professional, responsive websites designed to establish your digital presence.", icon: Globe },
    { id: "application-development", title: "Application Development", desc: "Web and mobile applications designed to simplify operations and workflows.", icon: Layers },
    { id: "custom-software-development", title: "Custom Software Development", desc: "Tailored software solutions designed around specific business workflows.", icon: Code2 },
    { id: "data-analytics", title: "Data Analytics & BI", desc: "Transforming raw data into meaningful insights through analytics and visualization.", icon: LineChart },
    { id: "api-development", title: "API Development & Integration", desc: "Connecting applications, platforms and external systems with reliable APIs.", icon: Workflow },
    { id: "business-automation", title: "Business Automation", desc: "Automating repetitive business processes to improve efficiency and productivity.", icon: Zap },
    { id: "it-consulting", title: "IT Consulting", desc: "Technology planning, architecture guidance and digital transformation consulting.", icon: Briefcase },
    { id: "digital-marketing", title: "Digital Marketing", desc: "Helping businesses strengthen digital reach, technical SEO and audience growth.", icon: Megaphone },
  ];

  // Section 6: Future AI Research Directions
  const researchDirections = [
    { num: "01", title: "Proprietary AI Models", desc: "Exploring domain-tailored neural architectures engineered for high precision and efficient local compute." },
    { num: "02", title: "Advanced Reasoning", desc: "Investigating multi-step mathematical and logical reasoning frameworks for complex decision-making." },
    { num: "03", title: "Multimodal Intelligence", desc: "Harmonizing vision, natural language, audio, and structured data into cohesive cognitive systems." },
    { num: "04", title: "Intelligent AI Infrastructure", desc: "Engineering high-throughput, low-latency deployment topologies designed for scalable AI workloads." }
  ];

  // Section 7: 5 Principles
  const principles = [
    {
      num: "1",
      title: "AI-First Thinking",
      desc: "We consider intelligent capabilities from the inception of every system, not as an afterthought.",
      icon: Bot
    },
    {
      num: "2",
      title: "Innovation-Driven Approach",
      desc: "Continuously exploring frontier software paradigms to deliver genuine competitive leverage.",
      icon: Sparkles
    },
    {
      num: "3",
      title: "Practical Engineering",
      desc: "Prioritizing stable, maintainable, production-ready code that works reliably in the real world.",
      icon: Code2
    },
    {
      num: "4",
      title: "Scalable Architecture",
      desc: "Designing resilient systems capable of expanding seamlessly alongside business growth.",
      icon: Cpu
    },
    {
      num: "5",
      title: "Future-Oriented Vision",
      desc: "Balancing immediate business requirements with long-term technological adaptability.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="w-full bg-white relative text-left">
      <SEO
        title="Alvantix | AI & Software Innovation Company"
        description="Alvantix is an AI-first technology and software innovation company developing intelligent applications, AI solutions, automation systems and digital technologies for modern businesses."
        canonical="https://www.alvantix.in/"
      />

      {/* ==================================================
          SECTION 1: HERO
      ================================================== */}
      <Hero />

      {/* ==================================================
          SECTION 2: ABOUT ALVANTIX
      ================================================== */}
      <section className="py-20 sm:py-24 bg-slate-50/60 border-y border-slate-150 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block">
                ABOUT ALVANTIX
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Technology Driven by Innovation.
              </h2>
              <div className="space-y-3 text-slate-600 font-sans text-base sm:text-lg leading-relaxed max-w-3xl">
                <p>
                  Alvantix brings together artificial intelligence, software engineering, automation and data intelligence to develop meaningful digital solutions.
                </p>
                <p className="text-slate-500 text-sm sm:text-base">
                  Our focus extends beyond delivering digital services. We aim to develop innovative technology products, solve real-world challenges and explore the future possibilities of artificial intelligence.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => handleNavigate("/about", "Discover Alvantix")}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer group"
              >
                <span>Discover Alvantix</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3: CORE CAPABILITIES
      ================================================== */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
              CORE CAPABILITIES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              What We Do.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Core Sector: Artificial Intelligence */}
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-[22px] p-8 hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Artificial Intelligence
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Developing intelligent applications, AI agents, machine learning systems and cognitive automation solutions.
                </p>
              </div>
            </div>

            {/* Core Sector: Software Engineering */}
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-[22px] p-8 hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 border border-indigo-100">
                  <Code2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Software Engineering
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Building modern websites, web applications, and custom software platforms designed around your exact workflows.
                </p>
              </div>
            </div>

            {/* Core Sector: Digital Innovation */}
            <div className="bg-slate-50/70 border border-slate-200/90 rounded-[22px] p-8 hover:border-blue-300 hover:shadow-sm transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 border border-purple-100">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Digital Innovation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  Combining emerging technologies, automated data pipelines, and intelligent interfaces to deliver practical leverage.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 4: AI SOLUTIONS PREVIEW
      ================================================== */}
      <section className="py-20 sm:py-24 bg-slate-50/40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
                AI SOLUTIONS
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Intelligence That Creates Possibilities.
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                We explore and implement artificial intelligence technologies to develop intelligent applications, automate workflows and enable smarter decision-making.
              </p>
            </div>
            <button
              onClick={() =>
                handleNavigate("/ai-solutions", "Explore All AI Solutions")
              }
              className="px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold text-xs transition-all flex items-center gap-1.5 self-start sm:self-end shrink-0 cursor-pointer"
            >
              <span>Explore All AI Solutions →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  onClick={() =>
                    handleNavigate(
                      `/ai-solutions/${cap.id}`,
                      `Explore ${cap.title}`
                    )
                  }
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans mb-4">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 5: SERVICES PREVIEW
      ================================================== */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
                TECHNOLOGY SERVICES
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Engineering Solutions for Real-World Needs.
              </h2>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                We provide technology services that help businesses establish, improve and scale their digital operations.
              </p>
            </div>
            <button
              onClick={() =>
                handleNavigate("/services", "Explore All Services")
              }
              className="px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold text-xs transition-all flex items-center gap-1.5 self-start sm:self-end shrink-0 cursor-pointer"
            >
              <span>Explore All Services →</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  onClick={() =>
                    handleNavigate(
                      `/services/${svc.id}`,
                      `Explore ${svc.title}`
                    )
                  }
                  className="p-6 rounded-2xl bg-slate-50/50 border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-sm transition-all flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white text-blue-600 border border-slate-150 flex items-center justify-center mb-4 shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-sans mb-4">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <span>Explore Service</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          OUR PRODUCTS: ALVANTIX PRODUCT ECOSYSTEM
      ================================================== */}
      <ProductsShowcase />

      {/* ==================================================
          SECTION 6: FUTURE AI VISION
      ================================================== */}
      <section className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
          
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block mb-2">
              Beyond Applications. Towards Intelligence.
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Our Vision for the Future of Artificial Intelligence.
            </h2>
            <div className="space-y-3 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                At Alvantix, we believe the future of technology extends beyond integrating existing artificial intelligence models.
              </p>
              <p>
                Our long-term ambition is to research, engineer and develop proprietary AI technologies under the Alvantix ecosystem. We aim to explore advanced language models, reasoning capabilities, multimodal intelligence and intelligent infrastructure.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                Through continuous research, experimentation and engineering, we aspire to build our own AI models and contribute to the next generation of artificial intelligence.
              </p>
            </div>
          </div>

          {/* Research Directions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchDirections.map((dir) => (
              <div key={dir.num} className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">
                    {dir.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {dir.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 7: WHY ALVANTIX?
      ================================================== */}
      <section className="py-20 sm:py-24 bg-slate-50/60 border-b border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
              WHY CHOOSE US
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Why Choose Alvantix?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==================================================
          SECTION 8: FINAL CTA
      ================================================== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[28px] p-8 sm:p-14 text-center text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Have an Idea? Let's Build It.
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-sans">
                Whether you are exploring AI solutions, developing software or looking to transform your business digitally, Alvantix is ready to discuss your next idea.
              </p>
              <div className="pt-2">
                <button
                  onClick={() =>
                    handleNavigate("/contact", "Start a Conversation")
                  }
                  className="px-8 py-3.5 rounded-xl bg-white text-blue-600 hover:bg-slate-50 font-bold text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Start a Conversation →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
