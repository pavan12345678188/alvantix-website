import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";
import { servicesData, iconMap } from "../data/servicesData";
import { Sparkles } from 'lucide-react';

type ServicesViewProps = {
  standalone?: boolean;
};

export default function ServicesView({
  standalone = false,
}: ServicesViewProps) {
  const navigate = useNavigate();

  return (
    <div className={`w-full bg-slate-50/40 relative ${standalone ? 'pt-40 md:pt-44' : ''}`}>

    <SEO
  title="Services | Alvantix"
  description="Explore Alvantix services including AI solutions, software development, web development, digital marketing, automation, and business intelligence."
/>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER SECTION */}
        <div className="flex flex-col mb-16 text-left">
          <div className="max-w-3xl">
            <span className="text-lg md:text-xl lg:text-3xl font-mono tracking-widest uppercase text-blue-600 font-bold">
              OUR EXPERTISE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2 mb-4">
              AI-Powered Solutions for Modern Businesses
            </h2>
            <p className="text-slate-650 font-sans text-lg leading-relaxed">
              We combine Artificial Intelligence, software engineering, and digital innovation to build scalable, secure, and future-ready solutions.
            </p>
          </div>
        </div>

        {/* SERVICE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const IconComp = iconMap[service.iconName] || Sparkles;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                onClick={() => navigate(`/services/${service.id}`)}
                className="group relative bg-white border border-slate-150 rounded-[20px] p-8 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between h-80"
              >
                <div>
                  {/* Icon with glowing badge effect */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                    {service.name}
                  </h3>

                  <p className="text-slate-500 font-sans text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center space-x-1.5 text-xs font-semibold text-blue-600 pt-4 border-t border-slate-50">
                  <span>Explore Solution </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </section>

    </div>
  );
}
