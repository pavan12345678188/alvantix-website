import { motion } from "motion/react";
import { AlertTriangle, ArrowRight, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";


export default function NotFoundView() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6 py-32">
      <div className="max-w-3xl mx-auto text-center">

        {/* Animated 404 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500"
        >
          404
        </motion.h1>

        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mt-8"
        >
          <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
            <AlertTriangle className="w-10 h-10" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-4xl font-bold text-slate-900"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto"
        >
          The page you're looking for doesn't exist or may have been moved.
          Explore our services or return to the homepage.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
<SEO
title="404 - Page Not Found | Alvantix"
description="The page you are looking for could not be found."
/>
          <button
            onClick={() => navigate("/services")}
            className="px-8 py-4 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
          >
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Footer Text */}
        <p className="mt-16 text-sm text-slate-400">
          © {new Date().getFullYear()} Alvantix. Building Intelligent Digital
          Solutions for the Future.
        </p>
      </div>
    </section>
  );
}