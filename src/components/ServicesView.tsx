import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Globe, Layers, Smartphone, Monitor, Bot, Brain, Palette, LineChart, Zap, CheckCircle, ArrowRight, X, ArrowUpRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";


interface ServiceItem {
  id: string;
  name: string;
  description: string;
  extendedDescription: string;
  iconName: string;
  features: string[];
}

type ServicesViewProps = {
  standalone?: boolean;
};

export default function ServicesView({
  standalone = false,
}: ServicesViewProps) {
  const navigate = useNavigate();

  const [selectedService, setSelectedService] =
    useState<ServiceItem | null>(null);

  const servicesData: ServiceItem[] = [

    {
      id: "ai-solutions",
      name: "AI Solutions",
      description: "Build intelligent AI-powered solutions that automate workflows, enhance decision-making, and create measurable business value., custom LLMs, and intelligent multi-agent patterns customized to securely solve your target bottlenecks.",
      extendedDescription: "Develop intelligent AI-powered solutions that automate business processes, enhance decision-making, and create measurable business value through advanced Artificial Intelligence.",
      iconName: "Sparkles",
      features: [
         "Custom AI Solutions",
        "Intelligent Process Automation",
        "AI Assistants & Chatbots",
       "Predictive Analytics"
]
},
      
    {
      id: "website-dev",
      name: "Website Development",
      description: "Design and develop modern, responsive, high-performance websites that strengthen your digital presence and deliver exceptional user experiences..",
      extendedDescription: "We create fast, secure, and SEO-optimized websites that combine beautiful design with scalable architecture, helping businesses build credibility, attract customers, and grow online.",
      iconName: "Globe",
     features: ["Responsive Web Design",
                 "SEO-Optimized Websites",
                "High-Speed Performance",
             "Secure & Scalable Architecture"]
    },
    {
      id: "web-app-dev",
      name: "Web Application Development",
      description: "Scale your business workflows with responsive full-stack dashboards and webapplications that accelerate business growth",
      extendedDescription: "We develop custom web applications that simplify complex workflows, improve collaboration, and provide reliable, high-performance solutions for businesses of all sizes.",
      iconName: "Layers",
      features: [
  "Custom Business Applications",
  "Secure User Management",
  "Cloud-Based Solutions",
  "Scalable System Architecture"
]
    },

    {
      id: "mobile-app-dev",
      name: "Mobile Application Development",
      description: "Create high performance iOS and Android solutions with modular architectures, ensuring consistent UI behaviors and deliver seamless user experiences.",
      extendedDescription: "We leverage state-of-the-art native components to produce fast mobile applications. One shared codebase delivers premium experiences to iOS and Android audiences alike.",
      iconName: "Smartphone",
      features: [
  "Android & iOS Apps",
  "Cross-Platform Development",
  "Modern User Experience",
  "High-Performance Applications"
]
    },
    {
      id: "desktop-app-dev",
      name: "Desktop Application Development",
      description: "Develop secure and reliable desktop applications that improve productivity and integrate seamlessly with business systems.",
      extendedDescription: "We create powerful desktop software tailored for business operations, automation, and enterprise workflows, ensuring security, reliability, and long-term performance.",
      iconName: "Monitor",
      features: [
  "Windows & macOS Solutions",
  "Business Productivity Tools",
  "Secure Data Management",
  "Offline & Online Support"
]
    },
    {
      id: "ai-chatbots",
      name: "AI Chatbots",
      description: "Deploy contextual virtual assistants that read customer history to guide inquiries and make instant data inquiries automatically.",
      extendedDescription: "Enable conversational experiences that automate upwards of 80% of support calls. Fully integrated into CRMs, billing portals, and communication vectors.",
      iconName: "Bot",
     features: [
  "24/7 Customer Support",
  "Natural Language Conversations",
  "Business Workflow Automation",
  "Multi-Platform Integration"
]
    },
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      description: "Design and train deep learning, classification, and neural network engines with robust mathematical validation cycles.",
      extendedDescription: "We develop advanced Machine Learning models that enable predictive analytics, computer vision, intelligent recommendations, and data-driven decision-making for modern businesses.",
      iconName: "Brain",
      features: [
  "Predictive AI Models",
  "Computer Vision Solutions",
  "Natural Language Processing",
  "Intelligent Data Analysis"
]
    },
    {
      id: "ui-ux-design",
      name: "UI/UX Design",
      description: "Design intuitive, engaging, and user-centered digital experiences that improve usability and customer satisfaction.",
      extendedDescription: "We model detailed UX layouts rooted in deep user-centric research. Our design sheets bridge seamlessly into code components, preserving visual intent completely.",
      iconName: "Palette",
      features: [
  "User-Centered Design",
  "Interactive Prototypes",
  "Modern Design Systems",
  "Responsive User Interfaces"
]
    },
    {
      id: "data-analytics",
      name: "Data Analytics",
      description: "Synthesize large text, log, and transactional structures into beautiful, readable chart ecosystems and summary dashboards.",
      extendedDescription: "Transform dark data into actionable highlights. We build secure analytical nodes that perform real-time data calculations and visualize results instantly.",
      iconName: "LineChart",
      features: [
  "Interactive Dashboards",
  "Business Intelligence",
  "Real-Time Reporting",
  "Actionable Insights"
]
    },
    {
      id: "bi-automation",
      name: "Business Intelligence & Automation",
      description:"Transform business data into meaningful insights through interactive dashboards, analytics, and real-time reporting.",
      extendedDescription: "We build intelligent automation solutions that streamline operations, integrate business systems, eliminate repetitive tasks, and enable organizations to operate more efficiently.",
      iconName: "Zap",
      features: [
  "Workflow Automation",
  "Business Process Optimization",
  "System Integration",
  "Performance Analytics"
]
    }
  ];

  // Key matching icons
  const iconMap: Record<string, any> = {
    Sparkles, Globe, Layers, Smartphone, Monitor, Bot, Brain, Palette, LineChart, Zap
  };

  return (
    <div className={`w-full bg-slate-50/40 relative ${standalone ? 'pt-40 md:pt-44' : ''}`}>
      
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
                onClick={() => setSelectedService(service)}
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
<SEO
  title="Services | Alvantix"
  description="Explore Alvantix services including AI solutions, software development, web development, automation, cloud solutions, and digital transformation."
/>

      {/* DRAWER / SLIDEOVER PANEL FOR EXPERTISE INSIGHTS */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-slate-950 z-50 cursor-pointer"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xl bg-white z-50 shadow-2xl overflow-y-auto flex flex-col"
            >
              
              {/* Drawer Sticky Header */}
              <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 py-5 border-b border-slate-100 flex items-center justify-between z-10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    {(() => {
                      const IconComp = iconMap[selectedService.iconName] || Sparkles;
                      return <IconComp className="w-5 h-5" />;
                    })()}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-lg">{selectedService.name}</h4>
                    <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">ALVANTIX AI SOLUTION</p>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="Close panel"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Content Body */}
              <div className="p-8 flex-1 flex flex-col space-y-8 text-left">
                
                <div>
                  <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide mb-2">SERVICE OVERVIEW</h5>
                  <p className="text-slate-700 text-base font-sans leading-relaxed">
                    {selectedService.extendedDescription}
                  </p>
                </div>

                <div>
                  <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wide mb-3">CORE CAPABILITIES</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedService.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                        <span className="text-xs font-semibold text-slate-700 font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-[20px] flex flex-col space-y-4">
                  <h5 className="text-xs font-mono font-bold text-blue-800 uppercase tracking-wide">IMPLEMENTATION TIMELINE</h5>
                  <p className="text-xs text-blue-900 leading-relaxed font-sans">
                    Every project follows a structured delivery process, including
                    strategy, design, development, testing, deployment, and ongoing
                    support. Project timelines vary based on business objectives,
                    technical complexity, and feature requirements.
                  </p>
                  <div className="flex items-center text-xs font-bold text-blue-600">
                    <span>Let's Build Your Next Innovation</span>
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100 mt-auto">
                  <p className="text-xs text-slate-400 font-sans">
                  </p>
                </div>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
