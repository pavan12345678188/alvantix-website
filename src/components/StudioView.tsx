import { motion } from "motion/react";
import { 
  Sparkles, 
  Cpu, 
  Workflow, 
  Lightbulb, 
  Boxes, 
  ArrowRight, 
  Code2, 
  BrainCircuit, 
  Layers, 
  ShieldCheck, 
  Atom, 
  Rocket 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";

export default function StudioView() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const researchPillars = [
    {
      title: "Autonomous Agent Architectures",
      desc: "Investigating resilient multi-agent coordination protocols, self-healing tool pipelines, and bounded decision safety frameworks for complex enterprise operations.",
      icon: BrainCircuit,
      color: "bg-blue-50 text-blue-600 border-blue-200"
    },
    {
      title: "Contextual RAG & Small Specialized Models",
      desc: "Optimizing retrieval-augmented generation pipelines using specialized compact neural models that run cost-effectively on private infrastructure with zero data leakage.",
      icon: Cpu,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200"
    },
    {
      title: "Spatial Computing & Digital Twins",
      desc: "Exploring WebGL, interactive 3D environments, and real-time spatial simulation for cultural preservation, virtual showrooms, and industrial teleoperation.",
      icon: Boxes,
      color: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      title: "Responsible AI & Guardrail Frameworks",
      desc: "Benchmarking algorithmic safety, input hallucination suppression, bias auditing, and audit-ready verification frameworks for regulated sectors.",
      icon: ShieldCheck,
      color: "bg-emerald-50 text-emerald-600 border-emerald-200"
    }
  ];

  return (
    <div className="w-full bg-white pt-36 md:pt-40 pb-24 text-left">
      <SEO
        title="Innovation Studio | AI Research & Experimental Lab | Alvantix"
        description="Explore Alvantix Innovation Studio: where exploratory AI research, proof-of-concept software architectures, and emerging technologies are incubated."
        canonical="https://www.alvantix.in/studio"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Innovation Studio", url: "/studio" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Atom className="w-3.5 h-3.5 text-blue-600" />
            <span>Alvantix Innovation Studio</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            The Lab Where Tomorrow's AI Systems Are Prototyped
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            The Alvantix Studio is our dedicated applied research and incubation space. Here, our engineers, designers, and AI researchers test frontier models, explore experimental software paradigms, and forge innovative concepts before enterprise deployment.
          </p>
        </div>

        {/* RESEARCH PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {researchPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300"
              >
                <div className={`p-3 rounded-2xl ${pillar.color} border w-fit mb-5`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h2 className="font-display font-bold text-xl text-slate-900 mb-2">
                  {pillar.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* INCUBATION PHILOSOPHY */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-[28px] p-8 sm:p-12 mb-20">
          <div className="max-w-3xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 mb-2 block">
              Incubation Methodology
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mb-4">
              From Mathematical Hypothesis to Production-Ready Code
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Unlike theoretical laboratories, every project incubated in the Alvantix Studio is rigorously stress-tested for practical deployment: latency bounds, token cost sustainability, memory footprints, and defensive data privacy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 text-left">
              <div>
                <h3 className="font-mono font-bold text-slate-900 text-sm">1. Hypothesis</h3>
                <p className="text-xs text-slate-500 mt-1">Isolating high-friction bottlenecks and emerging model capabilities.</p>
              </div>
              <div>
                <h3 className="font-mono font-bold text-slate-900 text-sm">2. Rapid Sandbox</h3>
                <p className="text-xs text-slate-500 mt-1">Iterative prototyping within 7–14 days to validate real-world feasibility.</p>
              </div>
              <div>
                <h3 className="font-mono font-bold text-slate-900 text-sm">3. Enterprise Hardening</h3>
                <p className="text-xs text-slate-500 mt-1">Packaging into production-grade APIs, client libraries, or standalone platforms.</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLLABORATE BANNER */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[28px] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-blue-600/15">
          <div className="max-w-xl">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
              Have an Ambitious Concept You Want to Prototype?
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Partner with the Alvantix Studio to architect, prototype, and validate frontier AI applications for your industry.
            </p>
          </div>
          <button
            onClick={() => handleNavigate("/contact")}
            className="px-6 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-semibold text-sm transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <span>Initiate Studio Dialogue</span>
            <ArrowRight className="w-4 h-4 text-blue-700" />
          </button>
        </div>

      </div>
    </div>
  );
}
