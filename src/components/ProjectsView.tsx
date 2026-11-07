import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  FolderGit2, 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Globe, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowUpRight,
  Filter
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import SEO from "./SEO";

export default function ProjectsView() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI & Intelligence" },
    { id: "web", label: "Web Development" },
    { id: "automation", label: "Automation & Analytics" },
    { id: "client", label: "Client Solutions" },
  ];

  const projects = [
    {
      id: "rag-knowledge-engine",
      title: "Enterprise Multi-Source RAG Knowledge Engine",
      category: "ai",
      categoryLabel: "AI & Intelligence",
      tagline: "Grounded LLM Information Retrieval for Corporate Operations",
      description:
        "Engineered an enterprise-grade semantic knowledge retrieval framework that ingests disparate document formats (PDFs, compliance guides, SOPs, spreadsheets) and synthesizes verified responses using dense vector search and cross-encoder rerankers.",
      technologies: ["Python", "FastAPI", "OpenAI / Anthropic APIs", "Qdrant Vector DB", "LangChain", "Docker"],
      challenge:
        "Client teams spent hours locating internal operational procedures and compliance mandates scattered across legacy network drives, leading to miscommunication and delayed client resolutions.",
      solution:
        "Architected a chunking pipeline with contextual metadata tagging, vector indexing, and conversational guardrails ensuring every generated answer provides exact clickable page-level document citations.",
      verifiedResults: [
        "Eliminated hallucination risk through strict confidence scoring and citation validation",
        "Streamlined procedure discovery times across internal technical and compliance documents",
        "Deployed within customer's private virtual network ensuring zero proprietary leakage"
      ]
    },
    {
      id: "omnichannel-retail-dashboard",
      title: "Omnichannel Commerce Management Portal",
      category: "web",
      categoryLabel: "Web Development",
      tagline: "High-Performance Next-Generation Retail Operations Suite",
      description:
        "Developed a responsive, low-latency web application enabling multi-location retailers to monitor real-time stock inventories, manage digital storefront orders, and issue digital receipts in seconds.",
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Redis"],
      challenge:
        "Fragmented point-of-sale systems prevented store managers from viewing consolidated inventory across regional warehouses, leading to stockouts and manual spreadsheet errors.",
      solution:
        "Delivered a centralized progressive web app featuring optimistic UI updates, sub-second query caching, and mobile barcode scanning integration for store associates.",
      verifiedResults: [
        "Centralized multi-store inventory visibility into a single real-time dashboard",
        "Optimized checkout workflows with keyboard shortcuts and instant receipt generation",
        "Achieved 100/100 Core Web Vitals performance benchmarks across modern mobile browsers"
      ]
    },
    {
      id: "automated-invoice-reconciliation",
      title: "Intelligent Document Automation & Invoice Reconciliation",
      category: "automation",
      categoryLabel: "Automation & Analytics",
      tagline: "Autonomous Optical Character Recognition & Financial Matching",
      description:
        "Implemented an end-to-end cognitive document automation system that parses incoming supplier invoices, validates tax calculations, and reconciles line items against purchase orders.",
      technologies: ["Python", "Computer Vision (OCR)", "Node.js", "Express", "PostgreSQL", "REST APIs"],
      challenge:
        "Finance teams were manually rekeying hundreds of PDF invoices and vendor receipts each week, creating operational backlogs and delayed supplier settlements.",
      solution:
        "Constructed an automated email webhook ingestion pipeline that extracts invoice line items via visual OCR models and cross-references purchase order databases automatically.",
      verifiedResults: [
        "Reduced manual financial data entry to only exception handling and final approvals",
        "Eliminated duplicate billing entries and computational discrepancy errors",
        "Full audit trails with timestamped extraction verification for all processed invoices"
      ]
    },
    {
      id: "health-appointment-portal",
      title: "Connected Clinical Scheduling & Patient Telemetry Hub",
      category: "client",
      categoryLabel: "Client Solutions",
      tagline: "Secure Patient Engagement & Outpatient Logistics System",
      description:
        "Designed and shipped a HIPAA-conscious patient appointment scheduling application with integrated SMS reminders, digital prescription retrieval, and dynamic clinic slot management.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Node.js", "Twilio API", "Cloud SQL"],
      challenge:
        "High patient no-show rates and phone line congestion during peak morning hours strained administrative staff and extended waiting room queues.",
      solution:
        "Created an accessible self-service booking portal with automated appointment reminders, dynamic doctor calendar sync, and contactless check-in capabilities.",
      verifiedResults: [
        "Decreased patient waiting room congestion through real-time queue status visibility",
        "Significantly reduced appointment no-shows via automated SMS confirmations",
        "Secure end-to-end encrypted medical record access for registered patients"
      ]
    },
    {
      id: "ai-support-agent-cluster",
      title: "Autonomous Tier-1 Customer Support Agent Cluster",
      category: "ai",
      categoryLabel: "AI & Intelligence",
      tagline: "24/7 Context-Aware Conversational Triage & Ticket Resolution",
      description:
        "Built and deployed an intelligent conversational multi-agent system capable of diagnosing technical issues, guiding customers through troubleshooting steps, and automatically opening CRM tickets when human intervention is needed.",
      technologies: ["LangGraph", "Python", "WebSockets", "CRM Webhooks", "FastAPI", "React UI Widget"],
      challenge:
        "Customer service queues suffered from long response delays during weekends and off-peak hours, while 60%+ of incoming inquiries were repetitive tier-1 issues.",
      solution:
        "Integrated a stateful conversational agent with access to technical documentation APIs, automated credential resets, and seamless human agent escalation protocols.",
      verifiedResults: [
        "Delivered immediate 24/7 instant response times for common technical support tickets",
        "Reduced human agent ticket volume by resolving frequent inquiries automatically",
        "High user satisfaction ratings with smooth conversational handover to human specialists"
      ]
    },
    {
      id: "industrial-iot-analytics-dashboard",
      title: "Real-Time Sensor Telemetry & Anomaly Analytics",
      category: "automation",
      categoryLabel: "Automation & Analytics",
      tagline: "Edge Data Visualization & Threshold Alerting Engine",
      description:
        "Engineered an industrial telemetry monitoring dashboard that visualizes high-frequency vibration, temperature, and power metrics from plant equipment to spot early mechanical fatigue.",
      technologies: ["React", "TypeScript", "TimescaleDB", "Node.js", "WebSockets", "Chart.js"],
      challenge:
        "Plant engineers lacked real-time monitoring of critical assembly motors, relying on scheduled manual inspections that occasionally missed sudden thermal anomalies.",
      solution:
        "Architected a real-time streaming telemetry dashboard with dynamic anomaly threshold triggers and automatic SMS alerts sent to on-duty field supervisors.",
      verifiedResults: [
        "Immediate detection of temperature deviations before motor burnout thresholds were reached",
        "Continuous high-throughput sensor telemetry ingestion without dashboard lag",
        "Comprehensive historical trend analysis for predictive equipment maintenance planning"
      ]
    }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full bg-white pt-36 md:pt-40 pb-24 text-left">
      <SEO
        title="Projects & Case Studies | Proven AI & Software Engineering | Alvantix"
        description="Explore Alvantix engineering portfolio: enterprise AI systems, web development, intelligent automation, and verified client software case studies."
        canonical="https://www.alvantix.in/projects"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Engineering Portfolio</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight">
            Featured Projects &amp; Software Case Studies
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Every system we design is built to solve real operational complexities. Explore our verified engineering work across Artificial Intelligence, web platforms, and intelligent business automation.
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-slate-100 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter By:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-sm shadow-blue-600/20"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-white border border-slate-200 rounded-[24px] p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      Case Study #{idx + 1}
                    </span>
                  </div>

                  <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 mb-1">
                    {project.title}
                  </h2>
                  <p className="text-xs font-mono text-blue-600 font-semibold mb-4">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-600 font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* TECH STACK CHIPS */}
                  <div className="mb-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CHALLENGE & SOLUTION */}
                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-xs font-bold font-mono text-slate-800 uppercase block mb-1">
                        The Challenge:
                      </span>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100">
                      <span className="text-xs font-bold font-mono text-blue-900 uppercase block mb-1">
                        The Alvantix Solution:
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* VERIFIED OUTCOMES */}
                  <div className="mb-6">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                      Verified Engineering Outcomes
                    </h3>
                    <ul className="space-y-2">
                      {project.verifiedResults.map((res, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleNavigate("/contact")}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold text-xs transition-colors duration-200 flex items-center justify-center gap-1.5 group"
                  >
                    <span>Request Architecture Discussion</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* START A PROJECT CTA */}
        <div className="bg-slate-900 rounded-[28px] p-8 sm:p-12 text-white text-center max-w-4xl mx-auto space-y-5">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400">
            Have a Technical Challenge?
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">
            Let's Build Your Next High-Impact Digital Solution
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            From proof-of-concept AI prototypes to full-scale enterprise software applications, our engineers are equipped to bring your vision to life.
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleNavigate("/contact")}
              className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md shadow-blue-600/30 inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
