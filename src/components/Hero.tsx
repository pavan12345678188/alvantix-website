import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { trackCTA } from "../analytics/events";

export default function Hero() {
  const navigate = useNavigate();

  const handleNavigate = (path: string, label: string) => {
    trackCTA(label, "Home Hero");
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-white grid-bg">
      {/* Decorative ambient radial gradients */}
      <div className="absolute top-0 right-0 -z-10 w-[55%] h-[55%] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.08),transparent_60%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-[45%] h-[45%] bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent_60%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BRAND LABEL & BADGE */}
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold uppercase tracking-[0.25em] mb-3">
            AI-FIRST SYSTEMS &amp; TECHNOLOGIES
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Built in India • Designed for the World.</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* LEFT CONTENT COLUMN */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col space-y-6 text-left">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.12]">
              Building Intelligent Digital Solutions for the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Future.
              </span>
            </h1>

            <div className="space-y-3 text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
              <p>
                Alvantix is an AI-first technology and software innovation company focused on developing intelligent applications, modern software solutions and digital technologies that help businesses move forward.
              </p>
              <p className="text-slate-500 text-sm sm:text-base">
                We combine artificial intelligence, software engineering and innovation to transform ideas into practical digital solutions.
              </p>
            </div>

            {/* CTAS */}
            <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
              <button
                onClick={() =>
                  handleNavigate("/ai-solutions", "Explore Our Solutions")
                }
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm hover:shadow-md hover:shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: ORIGINAL ALVANTIX CIRCULAR BRAND SHOWCASE */}
          <div className="order-1 lg:order-2 lg:col-span-5 relative flex flex-col items-center justify-center text-center">
            <div className="absolute w-[320px] h-[320px] rounded-full bg-blue-500/15 blur-[80px] pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/logo/alvantix logo.png"
                alt="Alvantix AI-First Platform"
                className="w-[280px] sm:w-[340px] lg:w-[390px] max-w-full drop-shadow-[0_12px_40px_rgba(37,99,235,0.25)]"
              />
            </motion.div>

            <div className="mt-6 flex flex-col items-center space-y-1">
              <p className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-blue-600">
                Alvantix AI
              </p>
              <p className="text-xs text-slate-400 font-sans">
                Think Bigger • Build Smarter • Create the Future
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
