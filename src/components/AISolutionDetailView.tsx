import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  CheckCircle2,
  Sparkles,
  Target,
  AlertCircle,
  Building2,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  Lightbulb
} from "lucide-react";
import { useNavigate, useParams, Link } from "react-router-dom";
import SEO from "./SEO";
import { aiSolutionsData, aiIconMap } from "../data/aiSolutionsData";

export default function AISolutionDetailView() {
  const { solutionId } = useParams();
  const navigate = useNavigate();

  const solution = aiSolutionsData.find((s) => s.id === solutionId);

  // --------------------------------------------------
  // SOLUTION NOT FOUND
  // --------------------------------------------------
  if (!solution) {
    return (
      <main className="w-full min-h-screen bg-slate-50 flex items-center justify-center px-4 pt-32 pb-24">
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
            <Sparkles className="w-8 h-8" />
          </div>

          <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-3">
            ALVANTIX AI
          </p>

          <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            AI Solution Not Found
          </h1>

          <p className="text-slate-600 font-sans leading-relaxed mb-8">
            We couldn't find the requested AI capability. Explore our full AI solutions portfolio to discover how Alvantix helps organizations innovate.
          </p>

          <button
            onClick={() => navigate("/ai-solutions")}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold font-sans text-sm px-6 py-3.5 rounded-xl transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore All AI Solutions</span>
          </button>
        </div>
      </main>
    );
  }

  const IconComp = aiIconMap[solution.iconName] || Sparkles;

  // Pick three related solutions
  const otherSolutions = aiSolutionsData
    .filter((s) => s.id !== solution.id)
    .slice(0, 3);

  const solutionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${solution.name} Solutions`,
    "description": solution.description,
    "provider": {
      "@type": "Organization",
      "name": "Alvantix",
      "url": "https://www.alvantix.in/"
    },
    "serviceType": "Artificial Intelligence",
    "url": `https://www.alvantix.in/ai-solutions/${solution.id}`
  };

  const handleEnquiry = () => {
    navigate(`/contact?service=${encodeURIComponent(solution.name)}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="w-full bg-slate-50/60 relative pt-32 md:pt-36 pb-24 overflow-hidden text-left">
      <SEO
        title={`${solution.name} – AI Solutions by Alvantix`}
        description={solution.description}
        canonical={`https://www.alvantix.in/ai-solutions/${solution.id}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "AI Solutions", url: "/ai-solutions" },
          { name: solution.name, url: `/ai-solutions/${solution.id}` },
        ]}
        schema={solutionSchema}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BREADCRUMB: Home -> AI Solutions -> Solution Name */}
        <nav aria-label="Breadcrumb" className="mb-8 pt-4">
          <ol className="flex items-center gap-2 text-xs sm:text-sm font-sans text-slate-500">
            <li>
              <Link to="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li>
              <Link to="/ai-solutions" className="hover:text-blue-600 transition-colors">
                AI Solutions
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="font-semibold text-slate-800 truncate max-w-[200px] sm:max-w-none">
              {solution.name}
            </li>
          </ol>
        </nav>

        {/* ==================================================
            SECTION 1: INTRODUCTION
        ================================================== */}
        <section className="mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 shrink-0">
              <IconComp className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div>
              <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-1.5 block">
                AI CAPABILITY
              </span>
              <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
                {solution.name}
              </h1>
            </div>
          </div>

          <h2 className="font-display font-bold text-xl sm:text-2xl text-blue-900/90 mb-4 leading-snug">
            {solution.headline}
          </h2>

          <div className="bg-white border border-slate-200/90 rounded-[24px] p-7 sm:p-10 shadow-2xs space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
              Overview & Commercial Purpose
            </span>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-sans">
              {solution.extendedDescription}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Enterprise Security & Data Confidentiality
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                <ShieldCheck className="w-3.5 h-3.5" />
                Zero-Hallucination Grounding
              </span>
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 2: BUSINESS CHALLENGES WE HELP SOLVE
        ================================================== */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
              CHALLENGES SOLVED
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Business Challenges We Help Solve
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans mt-2">
              The operational bottlenecks, manual inefficiencies, and security concerns our AI capabilities eliminate:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {solution.challenges.map((ch, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 text-amber-600">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <h3 className="font-display font-bold text-base text-slate-900">
                      {ch.challenge}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans pl-7.5">
                    {ch.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            SECTION 3: WHAT WE DEVELOP & HOW IT WORKS
        ================================================== */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
              AI ARCHITECTURE
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              What We Develop & How It Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans mt-2">
              A detailed breakdown of our AI development capabilities, explained in simple business language:
            </p>
          </div>

          <div className="space-y-6">
            {solution.offerings.map((offering, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-[24px] p-7 sm:p-9 shadow-2xs hover:border-blue-300 transition-all space-y-5"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 font-display font-bold text-sm shrink-0">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
                    {offering.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
                  {/* What it is */}
                  <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                      What It Is
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed font-sans">
                      {offering.whatItIs}
                    </p>
                  </div>

                  {/* What it does */}
                  <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                      What It Does
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed font-sans">
                      {offering.whatItDoes}
                    </p>
                  </div>

                  {/* How it helps */}
                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100/70 space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 block flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      How It Helps Your Business
                    </span>
                    <p className="text-sm text-slate-800 leading-relaxed font-sans font-medium">
                      {offering.howItHelps}
                    </p>
                  </div>

                  {/* Where it is used */}
                  <div className="p-4 rounded-xl bg-slate-50/70 border border-slate-100 space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                      Where It Is Used
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed font-sans">
                      {offering.whereUsed}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            SECTION 4: PRACTICAL SITUATIONS & REAL-WORLD USE CASES
        ================================================== */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
              REAL-WORLD IMPACT
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Practical Situations & Use Cases
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans mt-2">
              Concrete business scenarios illustrating how this technology functions under real operational pressure:
            </p>
          </div>

          <div className="space-y-4">
            {solution.practicalSituations.map((sit, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs hover:border-blue-200 transition-all space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200 mt-0.5">
                    <Lightbulb className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                      Real Scenario
                    </span>
                    <p className="text-sm font-semibold text-slate-900 font-sans mt-0.5">
                      {sit.scenario}
                    </p>
                  </div>
                </div>

                <div className="pl-11 pt-2 border-t border-slate-100">
                  <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider block mb-1">
                    Alvantix AI Solution & Outcome
                  </span>
                  <p className="text-sm text-slate-700 leading-relaxed font-sans">
                    {sit.outcome}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            SECTION 5: SOLUTIONS FOR DIFFERENT INDUSTRIES
        ================================================== */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
              INDUSTRY APPLICATIONS
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Industry Applications
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans mt-2">
              Tailored solutions engineered to meet the operational standards of distinct market sectors:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {solution.industries.map((ind, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-200 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                      {ind.industry}
                    </h3>
                    <p className="text-xs text-slate-500 font-sans">
                      {ind.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Application
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                      {ind.useCase}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==================================================
            SECTION 6: DELIVERABLES & SYSTEM CAPABILITIES
        ================================================== */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
              SYSTEM CAPABILITIES
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Deliverables & System Capabilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans mt-2">
              Core system capabilities included as standard versus advanced enterprise expansions:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Core Deliverables */}
            <div className="bg-white border border-blue-200/90 rounded-[24px] p-7 sm:p-9 shadow-2xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-display font-bold text-sm">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
                    INCLUDED AS STANDARD
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Core AI System Deliverables
                  </h3>
                </div>
              </div>

              <ul className="space-y-3.5">
                {solution.deliverables.core.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-700 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advanced Capabilities */}
            <div className="bg-white border border-slate-200/90 rounded-[24px] p-7 sm:p-9 shadow-2xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-display font-bold text-sm border border-slate-200">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                    ENTERPRISE EXPANSIONS
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Advanced Custom Capabilities
                  </h3>
                </div>
              </div>

              <ul className="space-y-3.5">
                {solution.deliverables.advanced.map((item, oIdx) => (
                  <li key={oIdx} className="flex items-start gap-3 text-sm text-slate-600 font-sans">
                    <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 7: IMPLEMENTATION APPROACH & WHY ALVANTIX
        ================================================== */}
        <section className="mb-14">
          <div className="mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
              ENGINEERING RIGOR
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Implementation Approach & Process
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-sans mt-2">
              Our six-stage AI engineering framework balances rapid prototyping with strict safety benchmarking:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {solution.implementationApproach.map((step) => (
              <div
                key={step.step}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-display font-bold text-sm mb-4 shadow-xs">
                    0{step.step}
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Alvantix */}
          <div className="bg-slate-900 rounded-[28px] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 block mb-1">
                ENGINEERING EXCELLENCE
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Why Alvantix for {solution.name}?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solution.whyAlvantix.map((point, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-2">
                  <div className="flex items-center gap-2.5 text-blue-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <h3 className="font-display font-bold text-base text-white">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed pl-7.5">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            SECTION 8: FINAL SOLUTION-SPECIFIC CALL TO ACTION
        ================================================== */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[28px] p-8 sm:p-12 text-center shadow-xl mb-16">
          <div className="max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-200 block">
              GET STARTED
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              {solution.ctaHeadline}
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-sans">
              {solution.ctaText}
            </p>
            <div className="pt-2">
              <button
                onClick={handleEnquiry}
                className="px-8 py-3.5 rounded-xl bg-white text-blue-600 hover:bg-slate-50 font-bold text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Enquire About {solution.name} →</span>
              </button>
            </div>
          </div>
        </section>

        {/* RELATED AI SOLUTIONS DISCOVERY */}
        <section>
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-1">
                DISCOVER MORE
              </span>
              <h2 className="font-display font-bold text-2xl text-slate-900">
                Related AI Capabilities
              </h2>
            </div>

            <Link
              to="/ai-solutions"
              className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span>View All AI Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherSolutions.map((otherSol) => {
              const OtherIcon = aiIconMap[otherSol.iconName] || Sparkles;
              return (
                <Link
                  key={otherSol.id}
                  to={`/ai-solutions/${otherSol.id}`}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <OtherIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
                        AI CAPABILITY
                      </span>
                      <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                        {otherSol.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 font-sans">
                      {otherSol.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}
