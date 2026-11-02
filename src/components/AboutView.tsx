import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Eye,
  Target,
  ArrowRight,
  Search,
  Map,
  Layout,
  Code2,
  ShieldCheck,
  Rocket,
  TrendingUp,
  Layers,
  Database,
  Cpu,
  Network,
  Server,
  Activity,
  Globe,
  Smartphone,
  Building2,
  BrainCircuit,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";

export default function AboutView({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const navigate = useNavigate();
  const [activeStage, setActiveStage] = useState(0);

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const coreValues = [
    { title: "Innovation", desc: "Constantly exploring emerging models, tools and engineering paradigms to create real technological leverage." },
    { title: "Integrity", desc: "Honest technical communication, transparent architecture and unwavering commitment to client confidentiality." },
    { title: "Engineering Excellence", desc: "Writing clean, modular, maintainable software designed for production stability and high performance." },
    { title: "Continuous Learning", desc: "Actively studying the rapidly shifting AI frontier to separate high-value advancements from transient hype." },
    { title: "Responsible Technology", desc: "Designing ethical, secure AI systems with defensive data privacy and human-centered safety." },
    { title: "Long-Term Thinking", desc: "Architecting software assets and partnerships designed to endure and compound in value over time." },
  ];

  const stages = [
    {
      id: 1,
      name: "Discovery & Strategy",
      headline: "Understanding the Business",
      description: "We begin by understanding the client's business, objectives, target audience, existing challenges and expectations.",
      activities: ["Business requirement analysis.", "Stakeholder discussions.", "Target audience identification.", "Problem definition.", "Feasibility assessment."],
      deliverables: ["Requirement summary.", "Project objectives.", "Initial scope definition."],
      icon: Search,
    },
    {
      id: 2,
      name: "Product Planning",
      headline: "Defining the Product",
      description: "We translate business requirements into a clear product plan, identifying important features, priorities and implementation stages.",
      activities: ["Feature identification.", "Product scope planning.", "User journey mapping.", "Development roadmap.", "Project milestone planning."],
      deliverables: ["Product roadmap.", "Feature specification.", "Project plan."],
      icon: Map,
    },
    {
      id: 3,
      name: "UI/UX & System Architecture",
      headline: "Designing the Experience and Architecture",
      description: "We plan how the product will look, function and operate behind the scenes before beginning implementation.",
      activities: ["User interface design.", "User experience planning.", "Application architecture.", "Database planning.", "Technology selection.", "Integration planning."],
      deliverables: ["UI/UX designs.", "System architecture.", "Technical implementation plan."],
      icon: Layout,
    },
    {
      id: 4,
      name: "Development & Integration",
      headline: "Building the Solution",
      description: "Our development team transforms the approved designs and architecture into a working digital product.",
      activities: ["Frontend development.", "Backend development.", "Database implementation.", "API integration.", "AI and automation implementation where required.", "Third-party service integration."],
      deliverables: ["Working application.", "Integrated systems.", "Development builds."],
      icon: Code2,
    },
    {
      id: 5,
      name: "Quality & Security",
      headline: "Testing and Validation",
      description: "Before launch, we evaluate the application to identify issues, verify functionality and improve reliability.",
      activities: ["Functional testing.", "User interface testing.", "Responsive testing.", "Integration testing.", "Performance evaluation.", "Security checks."],
      deliverables: ["Tested application.", "Identified and resolved issues.", "Release-ready build."],
      icon: ShieldCheck,
    },
    {
      id: 6,
      name: "Deployment & Launch",
      headline: "Preparing for Real-World Use",
      description: "We prepare the product for launch by configuring its environment, deploying the application and verifying its operation.",
      activities: ["Hosting and infrastructure setup.", "Production deployment.", "Domain and environment configuration.", "Database setup.", "Final verification."],
      deliverables: ["Deployed application.", "Configured production environment.", "Launch handover."],
      icon: Rocket,
    },
    {
      id: 7,
      name: "Monitoring & Improvement",
      headline: "Supporting Growth",
      description: "After launch, we can monitor performance, address issues and improve the product based on business requirements and user feedback.",
      activities: ["Application monitoring.", "Issue resolution.", "Performance improvements.", "Feature enhancements.", "Maintenance and support where agreed."],
      deliverables: ["Improvement recommendations.", "Maintenance updates where included.", "Future development planning."],
      icon: TrendingUp,
    },
  ];

  const architectureLayers = [
    { name: "Business Requirements", desc: "Goals, users, constraints and success criteria that shape every decision.", examples: "Objectives, user needs, compliance needs" },
    { name: "User Experience & Interface", desc: "How people interact with the product across devices and contexts.", examples: "UI design, user flows, accessibility" },
    { name: "Application Layer", desc: "Frontend and backend systems that deliver the product’s functionality.", examples: "Web/mobile interfaces, APIs, business logic" },
    { name: "Intelligence Layer", desc: "AI, machine learning and advanced logic where they add clear value.", examples: "Recommendations, automation, analytics" },
    { name: "Data Layer", desc: "Databases and data management that store and serve information reliably.", examples: "Relational/NoSQL stores, data models" },
    { name: "Integration & Security", desc: "Connections to other systems plus authentication and access control.", examples: "APIs, SSO, role-based access" },
    { name: "Infrastructure & Deployment", desc: "Hosting, environments and deployment processes that keep the product running.", examples: "Cloud infrastructure, CI/CD" },
    { name: "Monitoring & Improvement", desc: "Observability and feedback loops that support ongoing reliability and evolution.", examples: "Logging, metrics, user feedback" },
  ];

  const adaptationExamples = [
    { type: "Business Website", flow: "Discovery → Structure → UI/UX → Development → Testing → Launch" },
    { type: "AI Application", flow: "Discovery → Data & Use Case Planning → AI Architecture → Development → Validation → Deployment → Monitoring" },
    { type: "Enterprise Software", flow: "Requirements → System Architecture → Development → Integration → Security Testing → Deployment → Maintenance" },
    { type: "Mobile Application", flow: "Research → User Experience → Application Architecture → Development → Testing → Release → Improvement" },
  ];

  return (
    <div className={`w-full bg-white text-left ${standalone ? "pt-32 md:pt-36" : ""}`}>
      <SEO
        title="About Alvantix | AI & Software Innovation Company"
        description="Learn about Alvantix: our story, vision, mission, core values, and approach to building intelligent digital solutions and software."
        canonical="https://www.alvantix.in/about"
      />

      {/* HEADER SECTION */}
      <section className="py-20 sm:py-24 bg-slate-50/60 border-b border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
              OUR PROFILE
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 tracking-tight mb-3">
              About Alvantix.
            </h1>
            <p className="font-mono text-sm sm:text-base font-semibold text-blue-600 tracking-wide mb-6">
              Building Technology. Enabling Intelligence. Driving Innovation.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block">
                COMPANY BACKGROUND
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Who We Are
              </h2>
              <div className="space-y-4 text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
                <p>
                  Alvantix is an AI-first technology and software innovation company focused on developing intelligent digital solutions and exploring emerging technologies.
                </p>
                <p>
                  We bring together artificial intelligence, software engineering, automation and data intelligence to transform ideas into meaningful technology solutions.
                </p>
                <p className="text-slate-500 text-sm sm:text-base">
                  Our focus extends beyond delivering digital services. We aim to develop innovative platforms, solve real-world challenges and contribute to the future of intelligent technologies.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-8 rounded-[24px] bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col items-center text-center space-y-4 max-w-sm">
                <img
                  src="/logo/alvantix logo.png"
                  alt="Alvantix Circular AI Logo"
                  className="w-24 h-24 object-contain drop-shadow-sm"
                />
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">Alvantix</h3>
                  <p className="text-xs font-mono text-blue-600">AI-First Systems &amp; Technologies</p>
                </div>
                <p className="text-xs text-slate-500 font-sans leading-relaxed">
                  Transforming ideas into intelligent digital solutions through technology, engineering and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 sm:py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200/90 rounded-[24px] p-8 sm:p-10 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block">
                OUR VISION
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                Enabling a Smarter Future
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-sans">
                To contribute to a future where intelligent technologies make businesses, industries and everyday experiences more efficient, accessible and innovative.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-[24px] p-8 sm:p-10 shadow-2xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 block">
                OUR MISSION
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                Engineering Practical Innovation
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-sans">
                To develop meaningful digital solutions, create innovative technology and continuously explore advancements in artificial intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
              GUIDING PRINCIPLES
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-slate-50/60 border border-slate-200/80 rounded-2xl p-7 flex flex-col justify-between hover:bg-white hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <div>
                  <div className="w-2 h-2 rounded-full bg-blue-600 mb-3" />
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          NEW SECTION: PRODUCT DEVELOPMENT LIFECYCLE
          ========================================================= */}
      <section className="py-20 sm:py-28 bg-slate-50/50 border-b border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
              HOW WE BUILD
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              The Alvantix Product Development Lifecycle
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-3">
              Every successful digital product begins with understanding the problem. We follow a structured development approach that takes ideas through planning, design, engineering, testing and continuous improvement.
            </p>
            <p className="text-slate-500 text-sm sm:text-base">
              From the first discussion to the final deployment, every stage is guided by business requirements, user needs and engineering quality.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              We combine Design Thinking, Agile Development, DevSecOps practices and Continuous Improvement. The exact workflow is adapted to the size, complexity and requirements of each project.
            </p>
          </div>

          {/* DESKTOP / TABLET TIMELINE */}
          <div className="hidden lg:block relative mb-20">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-blue-100" />
            <div className="relative flex justify-between">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                const isActive = activeStage === index;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStage(index)}
                    className="relative flex flex-col items-center group focus:outline-none"
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
                        isActive
                          ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30 scale-110"
                          : "bg-white border-blue-200 text-blue-600 hover:border-blue-400"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className={`mt-3 text-xs font-semibold text-center max-w-[100px] ${isActive ? "text-blue-600" : "text-slate-600"}`}>
                      {stage.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MOBILE VERTICAL TIMELINE */}
          <div className="lg:hidden space-y-6 mb-16">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = activeStage === index;
              return (
                <div key={stage.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <button
                      onClick={() => setActiveStage(index)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 shrink-0 ${
                        isActive ? "bg-blue-600 border-blue-600 text-white" : "bg-white border-blue-200 text-blue-600"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </button>
                    {index < stages.length - 1 && <div className="w-0.5 flex-1 bg-blue-100 my-2" />}
                  </div>
                  <div className="pb-6">
                    <button onClick={() => setActiveStage(index)} className="text-left">
                      <h3 className={`font-semibold ${isActive ? "text-blue-600" : "text-slate-900"}`}>{stage.name}</h3>
                      <p className="text-sm text-slate-600 mt-1">{stage.headline}</p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* EXPANDED STAGE DETAIL */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                {(() => {
                  const Icon = stages[activeStage].icon;
                  return (
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                  );
                })()}
                <div>
                  <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">Stage {stages[activeStage].id}</p>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mt-1">{stages[activeStage].headline}</h3>
                </div>
              </div>
              <p className="text-slate-600 mb-6">{stages[activeStage].description}</p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Activities</h4>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {stages[activeStage].activities.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Deliverables</h4>
                  <ul className="space-y-1.5 text-sm text-slate-600">
                    {stages[activeStage].deliverables.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ENGINEERING ARCHITECTURE */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
              ENGINEERING ARCHITECTURE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
              How We Structure Digital Products
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Behind every digital solution is an architecture designed around its purpose, users, data and operational requirements. This is a conceptual representation — actual architecture changes according to project requirements.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl">
            {architectureLayers.map((layer, index) => (
              <motion.div
                key={layer.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-200 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{layer.name}</h3>
                  <p className="text-sm text-slate-600 mt-0.5">{layer.desc}</p>
                  <p className="text-xs text-slate-500 mt-1">{layer.examples}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE ADAPT THE PROCESS */}
      <section className="py-16 sm:py-20 bg-slate-50/40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-3">
              How We Adapt the Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Different projects need different approaches. These are illustrative workflows, not mandatory processes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {adaptationExamples.map((ex) => (
              <div key={ex.type} className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-semibold text-slate-900 mb-1">{ex.type}</h3>
                <p className="text-sm text-slate-600">{ex.flow}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="py-20 sm:py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl">
            From an Idea to a Working Solution.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you are planning a new digital product, improving an existing application or exploring an AI-powered solution, Alvantix works with you to understand the requirement and develop the right solution.
          </p>
          <button
            onClick={() => handleNavigate("/contact")}
            className="mt-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all inline-flex items-center gap-2"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ORIGINAL CLOSING CTA (preserved) */}
      <section className="py-20 bg-slate-900 text-white text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
            CONNECT WITH US
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Have a Business Requirement or Technology Idea?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Connect with Alvantix to explore how artificial intelligence and software engineering can transform your operations.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleNavigate("/contact")}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
            >
              Start a Conversation →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}