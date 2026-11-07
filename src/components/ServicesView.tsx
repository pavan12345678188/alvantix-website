import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";
import { servicesData, iconMap } from "../data/servicesData";
import { trackCTA } from "../analytics/events";

export default function ServicesView({
  standalone = false,
}: {
  standalone?: boolean;
}) {
  const navigate = useNavigate();

  const handleNavigate = (
    path: string,
    label: string,
    source: string = "Services Page"
  ) => {
    trackCTA(label, source);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`w-full bg-white text-left ${standalone ? "pt-32 md:pt-36" : ""} pb-24`}>
      <SEO
        title="Services | Technology Services by Alvantix"
        description="Explore Alvantix technology services: Website Development, Application Development, Custom Software, Data Analytics & BI, API Integration, Business Automation, IT Consulting, and Digital Marketing."
        canonical="https://www.alvantix.in/services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16 pt-6">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
            OUR SERVICES
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight mb-4">
            Technology Services Engineered for Business Growth.
          </h1>
          <p className="text-slate-600 font-sans text-base sm:text-lg leading-relaxed">
            From modern web platforms and custom software to business automation and data intelligence, Alvantix delivers reliable technology solutions designed to solve real operational problems and drive measurable commercial outcomes.
          </p>
        </div>

        {/* EIGHT CLIENT-FOCUSED SERVICE CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {servicesData.map((svc) => {
            const Icon = iconMap[svc.iconName] || Sparkles;
            return (
              <motion.article
                key={svc.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-slate-200/90 rounded-[24px] p-7 sm:p-9 shadow-2xs hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-5">
                  {/* Service Header: Icon & Name */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block">
                        {svc.category}
                      </span>
                      <h2 className="font-display font-bold text-2xl text-slate-900 group-hover:text-blue-600 transition-colors">
                        {svc.name}
                      </h2>
                    </div>
                  </div>

                  {/* Customer-Friendly Headline */}
                  <h3 className="font-display font-semibold text-lg text-slate-800 leading-snug">
                    {svc.headline}
                  </h3>

                  {/* Short Description: What Alvantix Provides */}
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                      What We Provide
                    </span>
                    <p className="text-sm text-slate-600 leading-relaxed font-sans">
                      {svc.description}
                    </p>
                  </div>

                  {/* Business Value Explanation */}
                  <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100/70 space-y-1">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Business Value & Impact
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                      {svc.businessValue}
                    </p>
                  </div>

                  {/* Deliverables / Key Offerings Preview */}
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Key Capabilities Included
                    </span>
                    <ul className="space-y-2">
                      {svc.offerings.slice(0, 3).map((offering, oIdx) => (
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

                {/* Primary Card Action: Explore Service */}
                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() =>
                      handleNavigate(
                        `/services/${svc.id}`,
                        `Explore ${svc.name}`,
                        "Services Page - Service Card"
                      )
                    }
                    className="w-full py-3 px-5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 group-hover:bg-blue-600 cursor-pointer shadow-xs"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CLOSING SECTION: EDUCATE FIRST, THEN CONVERSE */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[28px] p-8 sm:p-14 text-center shadow-xl">
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-200 block">
              PARTNER WITH ALVANTIX
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Ready to Discuss Your Technology Requirements?
            </h2>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed font-sans">
              Whether you are upgrading an existing digital platform, building custom software from scratch, or automating complex operations, our senior engineers are here to help turn your goals into production-grade solutions.
            </p>
            <div className="pt-2">
              <button
                onClick={() =>
                  handleNavigate(
                    "/contact",
                    "Let's Talk About Your Project",
                    "Services Page - Closing CTA"
                  )
                }
                className="px-8 py-3.5 rounded-xl bg-white text-blue-600 hover:bg-slate-50 font-bold text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Let's Talk About Your Project →</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
