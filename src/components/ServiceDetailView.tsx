import { motion } from 'motion/react';
import { CheckCircle, ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { useNavigate, useParams, Link } from "react-router-dom";
import SEO from "./SEO";
import { servicesData, iconMap } from "../data/servicesData";

export default function ServiceDetailView() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === serviceId);

  // Unknown service id — send back to the services overview
  if (!service) {
    return (
      <div className="w-full pt-40 md:pt-44 pb-24 text-center px-4">
        <h1 className="font-display font-bold text-3xl text-slate-900 mb-4">
          Service Not Found
        </h1>
        <p className="text-slate-500 font-sans mb-8">
          We couldn't find the service you're looking for.
        </p>
        <button
          onClick={() => navigate('/services')}
          className="inline-flex items-center space-x-2 text-blue-600 font-semibold font-sans"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </button>
      </div>
    );
  }

  const IconComp = iconMap[service.iconName] || Sparkles;
  const otherServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="w-full bg-slate-50/40 relative pt-32 md:pt-36 pb-24">

      <SEO
        title={`${service.name} | Alvantix Services`}
        description={service.description}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <Link
          to="/services"
          className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-500 hover:text-blue-600 font-sans mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>All Services</span>
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center space-x-4 mb-8"
        >
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-blue-50 text-blue-600 shrink-0">
            <IconComp className="w-8 h-8" />
          </div>
          <div>
            <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest mb-1">
              ALVANTIX SOLUTION
            </p>
            <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight">
              {service.name}
            </h1>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-slate-150 rounded-[20px] p-8 sm:p-10 shadow-sm mb-8"
        >
          <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide mb-3">
            SERVICE OVERVIEW
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-sans leading-relaxed">
            {service.extendedDescription}
          </p>
        </motion.div>

        {/* Core Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="bg-white border border-slate-150 rounded-[20px] p-8 sm:p-10 shadow-sm mb-8"
        >
          <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide mb-5">
            CORE CAPABILITIES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feat, fIdx) => (
              <div
                key={fIdx}
                className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
              >
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-sm font-semibold text-slate-700 font-sans">
                  {feat}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Process */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white border border-slate-150 rounded-[20px] p-8 sm:p-10 shadow-sm mb-8"
        >
          <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide mb-6">
            OUR PROCESS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.process.map((step, sIdx) => (
              <div key={sIdx} className="flex space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-display font-bold text-sm flex items-center justify-center shrink-0">
                  {sIdx + 1}
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Alvantix */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-white border border-slate-150 rounded-[20px] p-8 sm:p-10 shadow-sm mb-8"
        >
          <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide mb-5">
            WHY ALVANTIX
          </h2>
          <div className="space-y-3">
            {service.whyAlvantix.map((point, wIdx) => (
              <div key={wIdx} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="p-8 sm:p-10 bg-blue-50/50 border border-blue-100 rounded-[20px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-16"
        >
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Let's Build Your {service.name} Project
            </h3>
            <p className="text-sm text-slate-600 font-sans leading-relaxed max-w-md">
              Every project follows a structured delivery process — strategy, design, development, testing, deployment, and ongoing support.
            </p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold font-sans text-sm px-6 py-3.5 rounded-xl transition-colors shrink-0"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Related Services */}
        <div>
          <h2 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide mb-5">
            EXPLORE OTHER SERVICES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherServices.map((s) => {
              const OtherIcon = iconMap[s.iconName] || Sparkles;
              return (
                <Link
                  key={s.id}
                  to={`/services/${s.id}`}
                  className="group bg-white border border-slate-150 rounded-2xl p-5 hover:border-blue-400 hover:shadow-sm transition-all flex flex-col"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors mb-3">
                    <OtherIcon className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {s.name}
                  </h4>
                  <span className="flex items-center space-x-1 text-xs font-semibold text-blue-600 mt-auto">
                    <span>Explore</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
