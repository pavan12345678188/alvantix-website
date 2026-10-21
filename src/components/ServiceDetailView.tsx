import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { useNavigate, useParams, Link } from "react-router-dom";
import SEO from "./SEO";
import { servicesData, iconMap } from "../data/servicesData";

export default function ServiceDetailView() {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = servicesData.find((s) => s.id === serviceId);

  // --------------------------------------------------
  // SERVICE NOT FOUND
  // --------------------------------------------------
  if (!service) {
    return (
      <main className="w-full min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Sparkles className="w-8 h-8" />
          </div>

          <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">
            ALVANTIX
          </p>

          <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 mb-4">
            Service Not Found
          </h1>

          <p className="text-slate-500 font-sans leading-relaxed mb-8">
            We couldn't find the service you're looking for. Explore our
            solutions to discover what Alvantix can build for you.
          </p>

          <button
            onClick={() => navigate("/services")}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold font-sans text-sm px-6 py-3.5 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </button>
        </div>
      </main>
    );
  }

  const IconComp = iconMap[service.iconName] || Sparkles;

  // Pick three related services.
  const otherServices = servicesData
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <main className="w-full bg-slate-50/60 relative pt-32 md:pt-36 pb-24 overflow-hidden">
      <SEO
        title={`${service.name} | Alvantix`}
        description={service.description}
      />

      {/* --------------------------------------------------
          BACKGROUND DECORATION
      -------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-180px] -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* --------------------------------------------------
            BREADCRUMB
        -------------------------------------------------- */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 font-sans transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Services</span>
          </Link>
        </motion.div>

        {/* --------------------------------------------------
            HERO
        -------------------------------------------------- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 shrink-0">
              <IconComp className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>

            <div>
              <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.2em] mb-2">
                ALVANTIX SOLUTION
              </p>

              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.05]">
                {service.name}
              </h1>
            </div>
          </div>

          <p className="mt-7 max-w-3xl text-lg sm:text-xl text-slate-600 font-sans leading-relaxed">
            {service.description}
          </p>
        </motion.section>

        {/* --------------------------------------------------
            OVERVIEW
        -------------------------------------------------- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative bg-white border border-slate-200 rounded-[24px] p-7 sm:p-10 lg:p-12 shadow-sm mb-8"
        >
          <div className="absolute top-0 left-0 w-20 h-1 rounded-full bg-blue-600" />

          <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.18em] mb-4">
            SERVICE OVERVIEW
          </p>

          <p className="text-slate-700 text-base sm:text-lg leading-8 font-sans max-w-4xl">
            {service.extendedDescription}
          </p>
        </motion.section>

        {/* --------------------------------------------------
            CORE CAPABILITIES
        -------------------------------------------------- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200 rounded-[24px] p-7 sm:p-10 lg:p-12 shadow-sm mb-8"
        >
          <div className="mb-7">
            <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.18em] mb-2">
              WHAT WE DELIVER
            </p>

            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Core Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                className="group flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <CheckCircle className="w-5 h-5" />
                </div>

                <span className="text-sm sm:text-base font-semibold text-slate-700 font-sans">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --------------------------------------------------
            PROCESS
        -------------------------------------------------- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-slate-200 rounded-[24px] p-7 sm:p-10 lg:p-12 shadow-sm mb-8"
        >
          <div className="mb-9">
            <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.18em] mb-2">
              HOW WE WORK
            </p>

            <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
              Our Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-9">
            {service.process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="flex gap-4"
              >
                <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-display font-bold text-sm shadow-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-500 font-sans leading-6">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --------------------------------------------------
            WHY ALVANTIX
        -------------------------------------------------- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900 rounded-[24px] p-7 sm:p-10 lg:p-12 shadow-sm mb-8"
        >
          <div className="mb-8">
            <p className="text-xs font-mono font-bold text-blue-400 uppercase tracking-[0.18em] mb-2">
              THE ALVANTIX APPROACH
            </p>

            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Why Alvantix
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.whyAlvantix.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />

                <span className="text-sm sm:text-base text-slate-300 font-sans leading-6">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --------------------------------------------------
            CTA
        -------------------------------------------------- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[24px] bg-blue-600 p-8 sm:p-10 lg:p-12 mb-16"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-white/10 blur-2xl"
          />

          <div
            aria-hidden="true"
            className="absolute -left-20 -bottom-32 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl"
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-xs font-mono font-bold text-blue-100 uppercase tracking-[0.18em] mb-3">
                START A PROJECT
              </p>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
                Let's Build Your Next Digital Solution
              </h2>

              <p className="text-blue-100 text-sm sm:text-base font-sans leading-7">
                Tell us what you're trying to build. We'll help turn your idea,
                challenge, or business requirement into a practical digital
                solution.
              </p>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-blue-600 font-semibold font-sans text-sm px-6 py-3.5 rounded-xl transition-colors shrink-0"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </motion.section>

        {/* --------------------------------------------------
            RELATED SERVICES
        -------------------------------------------------- */}
        <section>
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-mono font-bold text-blue-600 uppercase tracking-[0.18em] mb-2">
                EXPLORE MORE
              </p>

              <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900">
                Other Services
              </h2>
            </div>

            <Link
              to="/services"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherServices.map((otherService) => {
              const OtherIcon =
                iconMap[otherService.iconName] || Sparkles;

              return (
                <Link
                  key={otherService.id}
                  to={`/services/${otherService.id}`}
                  className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <OtherIcon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {otherService.name}
                  </h3>

                  <p className="text-sm text-slate-500 font-sans leading-6 line-clamp-2 mb-5">
                    {otherService.description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

      </div>
    </main>
  );
}