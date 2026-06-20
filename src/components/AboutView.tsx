import { motion } from 'motion/react';
import { Eye, Shield, Users, Lightbulb, HeartHandshake, Box, MapPin, Search, ClipboardList, PenTool, Code, Rocket, LifeBuoy, ShieldCheck, Cpu } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";


export default function AboutView({
  standalone = false,
}: {
  standalone?: boolean;
}) {

  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
  navigate(path);
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};


  const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understanding your business vision, objectives, industry challenges, and growth opportunities to define the right digital strategy.',
    icon: Search,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    number: '02',
    title: 'AI Strategy',
    description:
      'Identifying how Artificial Intelligence can become the core technology to enhance automation, intelligence, and business efficiency.',
    icon: Cpu,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    number: '03',
    title: 'Plan',
    description:
      'Creating a strategic roadmap, defining technical architecture, selecting technologies, and planning scalable project execution.',
    icon: ClipboardList,
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    number: '04',
    title: 'Design',
    description:
      'Designing intuitive user experiences, modern interfaces, and scalable digital ecosystems aligned with your business goals.',
    icon: PenTool,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    number: '05',
    title: 'Engineer',
    description:
      'Building secure, high-performance software while integrating AI capabilities wherever they create measurable value.',
    icon: Code,
    color: 'bg-pink-50 text-pink-600',
  },
  {
    number: '06',
    title: 'Validate',
    description:
      'Testing performance, security, scalability, AI accuracy, and user experience to ensure a reliable production-ready solution.',
    icon: ShieldCheck,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    number: '07',
    title: 'Deploy',
    description:
      'Launching optimized, secure, and scalable solutions with seamless deployment, monitoring, and infrastructure readiness.',
    icon: Rocket,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    number: '08',
    title: 'Support & Evolve',
    description:
      'Providing continuous support, AI enhancements, feature upgrades, security updates, performance optimization, and long-term innovation.',
    icon: LifeBuoy,
    color: 'bg-amber-50 text-amber-600',
  },
];

  // Areas of Vision
  const visionAreas = [
    {
      title: 'Advanced AI Systems',
      description: 'Pushing boundaries of cognitive systems, multi-agent frameworks, and predictive modeling.',
      icon: Lightbulb,
    },
    {
      title: 'Next-Gen Healthcare',
      description: 'Designing proactive AI systems to expedite patient diagnostics, personalized medicine, and wellness operations.',
      icon: HeartHandshake,
    },
    {
      title: 'Adaptive Education',
      description: 'Delivering interactive intelligence environments that adjust to students and teach critical modern technical skills.',
      icon: Users,
    },
    {
      title: 'Intelligent Robotics',
      description: 'Envisioning human-collaborative physical algorithms and real-time environment solvers.',
      icon: Box,
    },
    {
      title: 'Smart Infrastructure',
      description: 'Architecting energy-efficient cloud topologies, responsive logistics nodes, and automated green power grids.',
      icon: MapPin,
    },
    {
      title: 'Sustainable Technology',
      description: 'Fusing digital efficiency with eco-centric physical product manufacturing to build circular carbon systems.',
      icon: Shield,
    },
  ];

  return (
    <div className={`w-full bg-white ${standalone ? 'pt-40 md:pt-44' : ''}`}>
      
      {/* SECTION: WHO WE ARE */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT: GRAPHIC CARD & BADGES */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/5 rounded-[30px] transform rotate-3" />
              <div className="relative bg-white border border-slate-100 p-8 sm:p-10 rounded-[24px] shadow-sm flex flex-col space-y-6">
                
                <div className="flex items-center space-x-3">
                  <span className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                    <Eye className="w-5 h-5" />
                  </span>
                  <p className="font-display font-bold text-lg text-slate-900">Ecosystem Statement</p>
                </div>
                
                <p className="text-slate-600 italic font-sans leading-relaxed">
                  "Alvantix is building an AI-first ecosystem where intelligence meets innovation. We combine Artificial Intelligence, advanced software engineering, and emerging technologies to create intelligent products and scalable digital solutions. Our vision is to empower businesses, transform industries, and shape the future through responsible innovation. Every solution we build is designed to create lasting value for people, organizations, and society."
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-slate-100">
                 
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900">Alvantix Team</h4>
                    <p className="text-xs font-mono text-slate-400"><strong>Building the Future with AI & Technology</strong></p>
                  </div>
                </div>

              </div>
            </div>
<SEO
title="About Alvantix"
description="Learn about Alvantix, our mission, vision, values, and commitment to AI-driven innovation."
/>
            {/* RIGHT: WHO WE ARE TEXT */}
            <div className="flex flex-col space-y-6 text-left">
              <span className="text-lg md:text-xl lg:text-2xl font-mono tracking-widest uppercase text-blue-600 font-bold">
                WHO WE ARE
              </span> 
              
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Building an AI-First Innovation Ecosystem
              </h2>
              
              <div className="space-y-4 text-slate-600 font-sans leading-relaxed text-base sm:text-lg">
                <p>
                  Alvantix is an innovation-driven technology company focused on creating intelligent software, AI-powered solutions, and future-ready digital products.
                </p>
                <p>
                  We believe Artificial Intelligence should empower people, not replace them. Every solution we build combines human creativity with AI to help businesses innovate, automate, and grow.
                </p>
              </div>

             
                <div className="pt-2">
                  <button
                    onClick={() => {
                      document.getElementById("our-vision")?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all duration-300"
                  >
                    <span>Learn More</span>
                  </button>
                </div>
              
            </div>

          </div>
        </div>
      </section>

      {/* SECTION: OUR VISION */}
      <section id ="our-vision" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-lg md:text-xl lg:text-2xl font-mono tracking-widest uppercase text-blue-600 font-bold">
              OUR VISION
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-2 mb-4">
              Building Tomorrow's Innovation Ecosystem
            </h2>
            <p className="text-slate-600 font-sans text-lg">
              We look toward the future with responsibility, grounding our expansion in safety protocols and high reliability. Our long-term mission focuses on pivotal domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visionAreas.map((area, idx) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-[20px] p-8 flex flex-col space-y-4 hover:-translate-y-1 transition-all duration-300 text-left cursor-default"
                >
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl self-start">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    {area.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-sans leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION: OUR PROCESS TIMELINE */}
      <section className="py-24 bg-slate-50/70 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-lg md:text-xl lg:text-2xl font-mono tracking-widest uppercase text-blue-600 font-bold">
              OUR WORKFLOW
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-2 mb-4">
              Engineered for Seamless Iteration
            </h2>
            <p className="text-slate-600 font-sans text-lg">
              We replace chaos with structural clarity. Here is how we transition your ideas into premium, durable tech solutions.
            </p>
          </div>

          <div className="relative">
            {/* Center line connecting timeline elements (hidden on mobile) */}
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-16 relative z-10">
              {processSteps.map((step, idx) => {
                const IconComponent = step.icon;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className={`flex flex-col lg:flex-row items-center ${
                      isEven ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    
                    {/* CARD HALF */}
                    <div className="w-full lg:w-1/2 flex justify-start lg:justify-end px-4 lg:px-12">
                      <div className={`w-full max-w-md bg-white border border-slate-100 p-8 rounded-[24px] shadow-sm hover:shadow-md transition-shadow duration-300 text-left ${
                        isEven ? 'lg:text-left' : 'lg:text-left'
                      }`}>
                        
                        <div className="flex items-center space-x-3 mb-4">
                          <span className={`p-2.5 rounded-xl ${step.color}`}>
                            <IconComponent className="w-5 h-5" />
                          </span>
                          <span className="font-mono text-xs uppercase font-bold text-slate-400">
                            PHASE {step.number}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                          {step.title}
                        </h3>
                        
                        <p className="text-slate-650 text-sm font-sans leading-relaxed">
                          {step.description}
                        </p>

                      </div>
                    </div>

                    {/* TIMELINE CENTER BADGE */}
                    <div className="relative flex items-center justify-center my-4 lg:my-0">
                      <div className="w-12 h-12 rounded-full border-4 border-slate-50 bg-blue-600 text-white font-display font-bold text-sm flex items-center justify-center relative z-20 shadow-md">
                        {step.number}
                      </div>
                    </div>

                    {/* EMPTY OPPOSITE HALF TO MAINTAIN ALIGNMENT */}
                    <div className="hidden lg:block lg:w-1/2" />

                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
