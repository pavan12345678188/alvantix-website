import { motion } from 'motion/react';
import { ArrowRight, Bot, Cpu, HeartHandshake, Eye, ShieldAlert, Sparkles, CheckCircle, Smartphone, Database, Check, Layers, BarChart, ArrowUpRight } from 'lucide-react';
import Hero from './Hero';
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";


export default function HomeView() {
  
  // Why Choose Alvantix
  const advantages = [
    {
      title: 'AI First',
      description: 'Artificial Intelligence is the foundation of every Alvantix solution. We integrate AI from the very beginning to create smarter software, intelligent automation, and future-ready digital experiences that deliver measurable business value.',
      icon: Bot,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'Innovation Driven',
      description:'Innovation is at the heart of everything we build. We continuously explore emerging technologies, modern software practices, and Artificial Intelligence to create solutions that help businesses stay ahead in a rapidly evolving digital world.',
      icon: Sparkles,
      color: 'bg-amber-50 text-amber-500'
    },
    {
      title: 'Custom Solutions',
      description:'Every business is unique, and every solution should be too. We design and develop custom software, AI systems, and digital platforms tailored to your specific goals, workflows, and business requirements.',
      icon: Layers,
      color: 'bg-indigo-50 text-indigo-600'
    },
    {
      title: 'Future Ready',
      description:'Our solutions are built with scalability, flexibility, and long-term growth in mind. As technology evolves, your software is designed to a,dapt, integrate, and continue delivering value for years to come.',
      icon: Cpu,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Secure & Reliable',
      description: 'Security and reliability are built into every stage of development. We follow modern development practices to protect your data, maintain system stability, and deliver dependable digital solutions you can trust',
      icon: ShieldAlert,
      color: 'bg-pink-50 text-pink-500'
    },
    {
      title: 'Long-Term Partnership',
      description: "Our relationship doesn't end at deployment. We provide ongoing support, continuous improvements, feature enhancements, and technical guidance to help your business grow with confidence.",
      icon: HeartHandshake,
      color: 'bg-emerald-50 text-emerald-600'
    }
  ];

  // Featured Products
  const products = [
    {
      id: 'templeverse',
      name: 'TempleVerse',
      tag: 'Spiritual Technology',
      desc: 'A revolutionary immersive platform that fuses cultural heritage with interactive collaborative software, enabling users to explore history in virtual space with AI guide agents.',
      features: ['Real-time rendering support', 'Intelligent guides', 'Collaborative virtual rooms'],
      imageTheme: 'from-amber-100 to-indigo-150',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      id: 'pathlauncher',
      name: 'PathLauncher',
      tag: 'AI Carrer Guidance',
      desc: 'An AI-powered education and career guidance platform that helps students discover the right academic path, explore career opportunities, and make confident decisions after the 10th standard.',
      features: ['AI-powered career recommendations', 'Personalized learning pathways', 'Education Planning Engine'],
      imageTheme: 'from-blue-100 to-emerald-150',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'qurixaaichealth',
      name: 'Qurixa AI Health',
      tag: 'Healthcare Ecosystem',
      desc: 'Qurixa AI Health is an AI-powered healthcare platform designed to connect patients, doctors, clinics, and hospitals through intelligent digital healthcare solutions. From appointment management and medical records to AI-assisted health insights and secure communication, Qurixa simplifies healthcare while making quality medical services more accessible, efficient, and connected.',
      features: ['AI-Powered Health Assistance', 'Connected Healthcare Ecosystem', 'Diagnostic summary dashboards'],
      imageTheme: 'from-pink-100 to-indigo-200',
      badgeColor: 'bg-pink-50 text-pink-700 border-pink-200'
    }
  ];

  const navigate = useNavigate()
  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white relative">
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. WHO WE ARE SHORT */}
      <section className="py-24 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 text-left space-y-4">
              <span className="text-lg md:text-xl lg:text-2xl font-mono tracking-widest uppercase text-blue-600 font-bold">
                WHO WE ARE
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Building an AI-First Innovation Ecosystem
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed max-w-4xl">
                Alvantix is an innovation-driven technology company focused on creating intelligent software, AI-powered solutions, and future-ready digital products. We believe Artificial Intelligence should empower people, not replace them. Every solution we build combines human creativity with AI to help businesses innovate, automate, and grow.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={() => handleNavigate('/about')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-300 shadow-md flex items-center space-x-2 group-hover:-translate-y-0.5"
              >
                <span>Read Our Mission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>

<SEO
title="Alvantix | AI & Software Innovation Company"
description="Alvantix builds AI-powered software, automation platforms, websites, mobile apps, and intelligent digital solutions for businesses."
/>

      {/* 3. EXPERTISE TEASER */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-lg md:text-xl lg:text-2xl font-mono tracking-widest uppercase text-blue-600 font-bold">
                WHAT WE BUILD
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-2">
                Our Advanced Technical Expertise
              </h2>
              <p className="text-slate-500 font-sans mt-2 max-w-2xl leading-relaxed">
                We design and ship robust server structures, customized predictive neural systems, elegant web models, and immersive physical design components.
              </p>
            </div>
            <button
              onClick={() => handleNavigate('/services')}
              className="px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold text-xs transition-all duration-300 self-start sm:self-end flex items-center space-x-1.5"
            >
              <span>Explore All Expertise</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Core AI Solutions', icon: Bot, desc: 'Train target generative layers, custom private RAG architectures, and multi-agent model logic.' },
              { title: 'Web Application Systems', icon: Smartphone, desc: 'Deliver custom SaaS models, real-time client panels, and scalable database backends.' },
              { title: 'Workflows & Automation', icon: Database, desc: 'Safeguard background schedules, synchronize CRM hubs, and automate operational pathways.' }
            ].map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-blue-600 shadow-sm mb-6">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">{skill.title}</h3>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed mb-6">{skill.desc}</p>
                  
                  <button 
                    onClick={() => handleNavigate('/services')}
                    className="flex items-center space-x-1.5 text-xs font-bold text-blue-600 group-hover:underline"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. WHY CHOOSE ALVANTIX */}
      <section className="py-24 bg-slate-50/70 border-y border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-lg md:text-xl lg:text-2xl font-mono tracking-widest uppercase text-blue-600 font-bold">
              WHY ALVANTIX
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight mt-2 mb-4">
             Building Intelligent AI Solutions That Matter
            </h2>
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed">
              Every solution we develop is driven by innovation, powered by Artificial Intelligence, and engineered with precision to deliver long-term value for businesses and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, idx) => {
              const IconComponent = adv.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-150 p-8 rounded-[20px] shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col space-y-4"
                >
                  <div className={`p-2.5 rounded-xl ${adv.color} self-start`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">{adv.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-sans">{adv.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. FEATURED PRODUCTS */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="max-w-3xl mb-16">
            <span className="text-lg md:text-xl lg:text-2xl font-mono tracking-widest uppercase text-blue-600 font-bold">
              PRODUCT INNOVATION SHOWCASE
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight mt-2 mb-4">
              Turning Ideas into Intelligent Products
            </h2>
            <p className="text-slate-600 font-sans text-base leading-relaxed">
             Explore the next generation of AI-powered products and software solutions built to simplify processes, solve complex challenges, and accelerate digital transformation.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((prod) => (
              <div 
                key={prod.id} 
                className="bg-white border border-slate-150 rounded-[20px] shadow-sm overflow-hidden flex flex-col hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Product visual placeholder */}
                <div className={`h-48 bg-gradient-to-tr ${prod.imageTheme} p-6 flex flex-col justify-between relative`}>
                  <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold self-start ${prod.badgeColor}`}>
                    {prod.tag}
                  </span>
                  
                  <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-white/40 shadow-sm backdrop-blur-md flex items-center justify-center font-display font-bold text-slate-800 text-lg border border-white/50">
                    {prod.name[0]}
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4 text-left">
                    <h3 className="font-display font-bold text-xl text-slate-900">{prod.name}</h3>
                    <p className="text-xs text-slate-550 leading-relaxed font-sans">{prod.desc}</p>
                    
                    <div className="space-y-2 pt-2">
                      {prod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center space-x-2 text-[11px] font-medium text-slate-600">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-50">
                    <button
                      onClick={() => handleNavigate('/contact')}
                      className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-xs font-semibold text-slate-700 transition-colors flex items-center justify-center space-x-1"
                    >
                      <span>Express Interest</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. VISION STATEMENT BRANDING */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Background cosmic light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-[10px] font-mono tracking-widest uppercase text-blue-400 font-bold bg-blue-950 px-3.5 py-1.5 rounded-full border border-blue-900">
              OUR COSMIC OUTLOOK
            </span>
            
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight leading-tight">
              Building Tomorrow's Innovation Ecosystem
            </h2>
            
            <p className="text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
              Our vision extends beyond software. We are building an AI-first ecosystem where intelligent technologies transform healthcare, education, robotics, sustainable infrastructure, and industries of the future.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-mono text-blue-300 pt-4">
           <span>#AI</span>
<span className="text-slate-600">•</span>

<span>#SOFTWARE</span>
<span className="text-slate-600">•</span>

<span>#SPACE</span>
<span className="text-slate-600">•</span>

<span>#AUTOMOBILE</span>
<span className="text-slate-600">•</span>

<span>#ENERGY</span>
<span className="text-slate-600">•</span>

<span>#HEALTHCARE</span>
<span className="text-slate-600">•</span>

<span>#EDTECH</span>
<span className="text-slate-600">•</span>

<span>#ROBOTICS</span>
<span className="text-slate-600">•</span>

<span>#FINTECH</span>
<span className="text-slate-600">•</span>

<span>#SMARTINFRA</span>
<span className="text-slate-600">•</span>

<span>#AGRITECH</span>
<span className="text-slate-600">•</span>

<span>#SPIRITUALTECH</span>
          </div>

        </div>      </div>      </section>

      {/* 7. CALL TO ACTION SECTION */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 rounded-[30px] p-8 sm:p-14 text-center text-white shadow-xl relative overflow-hidden">
            {/* Mesh background */}
            <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Let's Build the Future Together
              </h2>
              
              <p className="text-blue-100 font-sans text-sm sm:text-base leading-relaxed">
                Invite Alvantix leads to architect, code, and deploy customized generative algorithms, cloud portals, or web clients tailored fully to your system benchmarks.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button
                  onClick={() => handleNavigate('/contact')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-blue-600 hover:bg-slate-50 font-bold text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5"
                >
                  Start Your Project
                </button>
                
                <button
                  onClick={() => handleNavigate('/contact')}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/30 hover:bg-white/10 font-semibold text-sm transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
