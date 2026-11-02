import { motion } from "motion/react";
import { 
  ArrowRight, 
  Sparkles, 
  Bot, 
  BrainCircuit, 
  Database, 
  Eye, 
  Mic, 
  Zap, 
  LineChart, 
  TrendingUp, 
  CheckCircle2, 
  Target 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";
import { aiSolutionsData, aiIconMap } from "../data/aiSolutionsData";

export default function AISolutionsView() {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Research Pillars
  const researchPillars = [
    {
      title: "Proprietary AI Models",
      desc: "Exploring specialized, compact neural architectures engineered for high precision on domain tasks with reduced compute footprints."
    },
    {
      title: "Advanced Reasoning Systems",
      desc: "Researching verifiable multi-step logic chains, deterministic checks, and structured problem decomposition for mission-critical workflows."
    },
    {
      title: "Multimodal Intelligence",
      desc: "Developing models that seamlessly unify vision, natural language, voice, and structured numerical datasets into cohesive cognitive systems."
    },
    {
      title: "Private AI Infrastructure",
      desc: "Engineering high-throughput, low-latency deployment topologies, local model inference pipelines, and private server clusters."
    },
    {
      title: "Domain-Specific Intelligence",
      desc: "Investigating tailored cognitive models designed specifically for commerce, healthcare, legal analysis, and educational ecosystems."
    }
  ];

  return (
    <div className="w-full bg-white text-left pt-32 md:pt-36 pb-24">
      <SEO
        title="AI Solutions – Artificial Intelligence by Alvantix"
        description="Explore Alvantix artificial intelligence capabilities: Generative AI, AI Agents, Machine Learning, RAG, Computer Vision, Voice AI, Automation, and Predictive Analytics."
        canonical="https://www.alvantix.in/ai-solutions"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <div className="max-w-3xl mb-16 pt-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
            AI SOLUTIONS
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Turning Artificial Intelligence into Practical Business Innovation.
          </h1>
          <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
            At Alvantix, we explore, engineer, and deploy production-grade artificial intelligence technologies to automate workflows, empower teams, and unlock measurable commercial leverage for modern organizations.
          </p>
        </div>

        {/* EIGHT CLIENT-FOCUSED AI SOLUTION CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {aiSolutionsData.map((solution) => {
            const Icon = aiIconMap[solution.iconName] || Sparkles;
            return (
              <motion.article
                key={solution.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-slate-200/90 rounded-[24px] p-7 sm:p-9 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Solution Header: Icon & Name */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
                        AI CAPABILITY
                      </span>
                      <h2 className="font-display font-bold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">
                        {solution.name}
                      </h2>
                    </div>
                  </div>

                  {/* Customer-Friendly Headline */}
                  <h3 className="font-display font-semibold text-lg text-slate-800 leading-snug">
                    {solution.headline}
                  </h3>

                  {/* Simple Explanation: What It Is */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      Simple Explanation
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans">
                      {solution.description}
                    </p>
                  </div>

                  {/* Business Value Explanation */}
                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100/70 space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Business Problems Solved & Value
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                      {solution.businessValue}
                    </p>
                  </div>

                  {/* Practical Applications Preview */}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Practical Business Applications
                    </span>
                    <ul className="space-y-2">
                      {solution.offerings.slice(0, 3).map((offering, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="font-medium text-slate-700">
                            <strong>{offering.title}:</strong> {offering.howItHelps}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Primary Card Action: Explore Solution (Navigates to detail page) */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => handleNavigate(`/ai-solutions/${solution.id}`)}
                    className="w-full py-3 px-5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 group-hover:bg-blue-600 cursor-pointer shadow-xs"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* SECTION: OUR FUTURE AI RESEARCH & AMBITION */}
        <section className="bg-slate-900 text-white rounded-[28px] p-8 sm:p-14 mb-16 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-4xl space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block">
              RESEARCH AMBITION
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Developing Our Own Intelligence.
            </h2>
            <div className="space-y-3 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
              <p>
                Beyond deploying existing models, our long-term ambition is to research and develop proprietary artificial intelligence models and cognitive technologies within the Alvantix ecosystem.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                We position this work as a long-term engineering and research commitment. Through continuous experimentation, algorithmic optimization and engineering discipline, our research focuses on:
              </p>
            </div>

            {/* Research Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
              {researchPillars.map((pillar, pIdx) => (
                <div key={pIdx} className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
                  <h3 className="font-display font-bold text-sm text-white mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing CTA */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs font-mono text-blue-300">
                Interested in applied AI research collaboration or technical dialogue?
              </p>
              <button
                onClick={() => handleNavigate("/contact?service=" + encodeURIComponent("AI Solutions"))}
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shrink-0 cursor-pointer"
              >
                <span>Let's Explore the Possibilities of AI →</span>
              </button>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
