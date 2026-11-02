import { motion } from "motion/react";
import { 
  Eye, 
  Target, 
  Sparkles, 
  ShieldCheck, 
  Code2, 
  BrainCircuit, 
  Clock, 
  Compass, 
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";

export default function AboutView({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 6 Core Values
  const coreValues = [
    { title: "Innovation", desc: "Constantly exploring emerging models, tools and engineering paradigms to create real technological leverage." },
    { title: "Integrity", desc: "Honest technical communication, transparent architecture and unwavering commitment to client confidentiality." },
    { title: "Engineering Excellence", desc: "Writing clean, modular, maintainable software designed for production stability and high performance." },
    { title: "Continuous Learning", desc: "Actively studying the rapidly shifting AI frontier to separate high-value advancements from transient hype." },
    { title: "Responsible Technology", desc: "Designing ethical, secure AI systems with defensive data privacy and human-centered safety." },
    { title: "Long-Term Thinking", desc: "Architecting software assets and partnerships designed to endure and compound in value over time." },
  ];

  // 5 Approach Steps: Understand → Innovate → Engineer → Deliver → Evolve
  const approachSteps = [
    { step: "01", name: "Understand", desc: "Analyzing business processes, constraints, workflows and technical requirements down to first principles." },
    { step: "02", name: "Innovate", desc: "Designing intelligent solution blueprints, selecting suitable models, and mapping architectural pathways." },
    { step: "03", name: "Engineer", desc: "Developing secure, performant software with rigorous code standards, testing and validation." },
    { step: "04", name: "Deliver", desc: "Deploying production-ready solutions on scalable infrastructure with monitoring and zero downtime." },
    { step: "05", name: "Evolve", desc: "Continuously tuning performance, monitoring model accuracy, and scaling features alongside growth." },
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
            
            {/* OUR VISION */}
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

            {/* OUR MISSION */}
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

      {/* OUR APPROACH */}
      <section className="py-20 sm:py-24 bg-slate-50/50 border-b border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-14 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
              DISCIPLINED EXECUTION
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-2">
              Our Approach
            </h2>
            <p className="font-mono text-xs sm:text-sm font-semibold text-blue-600">
              Understand → Innovate → Engineer → Deliver → Evolve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {approachSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3">
                    {step.step}
                  </span>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                    {step.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
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
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Start a Conversation →</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
