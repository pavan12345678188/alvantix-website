import { motion } from 'motion/react';
import { ArrowRight, Bot, Code, Cpu, Sparkles, BarChart2, ShieldCheck, Zap } from 'lucide-react';
import { useNavigate } from "react-router-dom";



export default function Hero() {
  const navigate =useNavigate()
  return (
    <section className="relative pt-28 pb-24 md:pt-28 md:pb-24 overflow-hidden bg-white grid-bg">
      {/* Decorative radial gradients for Stripe-like lighting effect */}
      <div className="absolute top-0 right-0 -z-10 w-[60%] h-[60%] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.06),transparent_50%)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 left-12 -z-10 w-[50%] h-[50%] bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.04),transparent_50%)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CENTER TOP HOME VIEW BRAND TEXT LOGO */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20 border-b border-slate-100 pb-8 relative z-10"
        >
         
          <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-slate-400 mt-2.5 font-semibold">AI-First Systems & Technologies</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="order-2 lg: order-1 lg:col-span-7 flex flex-col space-y-6 lg:pr-6 text-left">
           
          {/* OUR VISION */}
<div className="max-w-md mb-12">

  <span className="text-lg md:text-xl lg:text-2xl font-bold tracking-[0.35em] uppercase text-blue-600">
    OUR VISION
  </span>

  <h2 className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
    Think Bigger
    <br />
    Build Smarter
    <br />
    <span className="text-blue-600">
      Create the Future
    </span>
  </h2>


  <div className="mt-8 w-24 h-[2px] bg-blue-600 rounded-full" />

  <div className="mt-8">
    <h3 className="text-4xl font-bold text-slate-900">
      12+
    </h3>

    <p className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-500">
      Core Sectors
    </p>
  </div>

</div>
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex self-start items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-sm font-semibold text-blue-700 tracking-wide shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="font-display">Built in India • Designed for the World</span>
            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.1]"
            >
              Innovating the Future Through{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                AI & Technology
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-sans max-w-2xl"
            >
              Alvantix is an AI-first innovation and technology company that designs, develops, and delivers intelligent software, digital products, and advanced AI solutions to help businesses innovate, automate, and grow.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => {
                  navigate('/contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-[20px] bg-blue-600 text-white font-semibold text-base shadow-lg shadow-blue-600/15 hover:shadow-xl hover:shadow-blue-600/25 hover:bg-blue-700 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  navigate('/services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-[20px] bg-white border border-slate-200 text-slate-700 font-semibold text-base shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
              </button>
            </motion.div>

            {/* TRUST MARKERS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-8 border-t border-slate-100 flex flex-wrap items-center gap-6 text-slate-400 text-xs font-mono"
            >

            </motion.div>

          </div>
        {/* RIGHT SIDE - ALVANTIX BRAND SHOWCASE */}
<div className="order-1 lg:order-2 lg:col-span-5 relative min-h-[500px] flex flex-col items-center justify-center text-center">



 {/* AI-FIRST PLATFORM HEADING */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="mb-12 max-w-lg text-center"
>
  <div className="flex items-center justify-center gap-2 mb-5">
    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>

    <span className="text-xs md:text-sm font-bold tracking-[0.35em] uppercase text-blue-600">
      AI-FIRST PLATFORM
    </span>
  </div>

  <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-slate-900">
    Artificial Intelligence
    <br />
    is the
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
      {" "}Core Technology
    </span>
    <br />
    Behind Alvantix.
  </h2>
</motion.div>

  {/* Blue Glow */}
  <motion.div
    animate={{
      scale: [1, 1.08, 1],
      opacity: [0.25, 0.4, 0.25],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute w-[360px] h-[360px] rounded-full bg-blue-500/20 blur-[90px]"
  />
  {/* Floating Logo */}
  <motion.img
    src="/logo/alvantix logo.png"
    alt="Alvantix"
 
    className="relative w-[320px] md:w-[380px] lg:w-[430px] max-w-full drop-shadow-[0_0_40px_rgba(37,99,235,0.45)]"
  />
<div className="mt-8 flex flex-col items-center text-center space-y-6">

  {/* Tagline */}
  <p className="text-base md:text-lg font-semibold text-slate-700 tracking-wide">
    AI • Software • Innovation
  </p>

  {/* Technology Chips */}
  <div className="flex flex-wrap justify-center gap-3 mt-5">

    <span className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
      AI Solutions
    </span>

    <span className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
      Web Development
    </span>

    <span className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
      Mobile Apps
    </span>

  <span className="px-4 py-2 rounded-full  bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold">
      AI Agents
    </span>

  </div>

  {/* Company Line */}
  <h3 className="mt-8 text-xl md:text-2xl font-bold text-slate-900 leading-snug">
    Building Intelligent Digital
    <br />
    Solutions for the Future
  </h3>

</div>  

</div>
        </div>
      </div>
    </section>
  );
}
