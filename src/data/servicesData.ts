import {
  Sparkles,
  Globe,
  Layers,
  Smartphone,
  Monitor,
  Bot,
  Megaphone,
  Palette,
  LineChart,
  Zap,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  extendedDescription: string;
  iconName: string;
  features: string[];
  process: { title: string; description: string }[];
  whyAlvantix: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-solutions",
    name: "AI Solutions",
    description:
      "Build intelligent AI-powered solutions that automate workflows, enhance decision-making, and create measurable business value, custom LLMs, and intelligent multi-agent patterns customized to securely solve your target bottlenecks.",
    extendedDescription:
      "Develop intelligent AI-powered solutions that automate business processes, enhance decision-making, and create measurable business value through advanced Artificial Intelligence. We design systems around your existing data and workflows rather than forcing a generic model into your business, so the AI actually removes bottlenecks instead of adding another tool to manage. From proof-of-concept to production, every solution is built with monitoring, guardrails, and clear ROI tracking from day one.",
    iconName: "Sparkles",
    features: [
      "Custom AI Solutions",
      "Intelligent Process Automation",
      "AI Assistants & Chatbots",
      "Predictive Analytics",
    ],
    process: [
      { title: "Discovery & Data Audit", description: "We map your workflows and data sources to find where AI creates real, measurable leverage." },
      { title: "Solution Design", description: "We architect the model, pipeline, and integration points around your existing systems." },
      { title: "Build & Train", description: "We develop, fine-tune, and rigorously test the solution against real business scenarios." },
      { title: "Deploy & Monitor", description: "We ship to production with monitoring, guardrails, and ongoing performance tuning." },
    ],
    whyAlvantix: [
      "Solutions built around your real data, not generic templates",
      "Transparent, explainable AI with measurable ROI tracking",
      "Ongoing monitoring and tuning after launch, not a one-time handoff",
    ],
  },
  {
    id: "website-dev",
    name: "Website Development",
    description:
      "Design and develop modern, responsive, high-performance websites that strengthen your digital presence and deliver exceptional user experiences.",
    extendedDescription:
      "We create fast, secure, and SEO-optimized websites that combine beautiful design with scalable architecture, helping businesses build credibility, attract customers, and grow online. Every site is built mobile-first, audited for Core Web Vitals, and structured so your content and SEO can scale as your business grows — not rebuilt from scratch a year later.",
    iconName: "Globe",
    features: [
      "Responsive Web Design",
      "SEO-Optimized Websites",
      "High-Speed Performance",
      "Secure & Scalable Architecture",
    ],
    process: [
      { title: "Strategy & Sitemap", description: "We define goals, audience, and content structure before any design work starts." },
      { title: "UI Design", description: "We design a distinctive, on-brand interface across desktop and mobile breakpoints." },
      { title: "Development", description: "We build with performance, accessibility, and SEO fundamentals baked in from the start." },
      { title: "Launch & Support", description: "We deploy, monitor speed and uptime, and provide ongoing updates as your business evolves." },
    ],
    whyAlvantix: [
      "Performance-first builds that pass Core Web Vitals, not just look good",
      "SEO structure baked in from the first sprint, not bolted on later",
      "Architecture designed to scale with your content, not need a rebuild",
    ],
  },
  {
    id: "web-app-dev",
    name: "Web Application Development",
    description:
      "Scale your business workflows with responsive full-stack dashboards and web applications that accelerate business growth.",
    extendedDescription:
      "We develop custom web applications that simplify complex workflows, improve collaboration, and provide reliable, high-performance solutions for businesses of all sizes. Whether it's an internal operations dashboard or a customer-facing platform, we design the data model and architecture to support real usage and future features, not just the first release.",
    iconName: "Layers",
    features: [
      "Custom Business Applications",
      "Secure User Management",
      "Cloud-Based Solutions",
      "Scalable System Architecture",
    ],
    process: [
      { title: "Requirements Mapping", description: "We break down your workflow into clear features, roles, and data structures." },
      { title: "Architecture Design", description: "We design a database and API structure that scales as usage and features grow." },
      { title: "Agile Development", description: "We build in iterative sprints, giving you visibility and the chance to course-correct early." },
      { title: "Testing & Deployment", description: "We QA against real use cases and deploy to secure, scalable cloud infrastructure." },
    ],
    whyAlvantix: [
      "Architecture designed for your next 3 feature releases, not just the first one",
      "Secure, role-based access control built in from the start",
      "Iterative delivery so you see and steer progress every sprint",
    ],
  },
  {
    id: "mobile-app-dev",
    name: "Mobile Application Development",
    description:
      "Create high performance iOS and Android solutions with modular architectures, ensuring consistent UI behaviors and deliver seamless user experiences.",
    extendedDescription:
      "We leverage state-of-the-art native and cross-platform components to produce fast mobile applications. One shared codebase delivers premium experiences to iOS and Android audiences alike, with careful attention to platform-specific behavior, offline handling, and app store readiness.",
    iconName: "Smartphone",
    features: [
      "Android & iOS Apps",
      "Cross-Platform Development",
      "Modern User Experience",
      "High-Performance Applications",
    ],
    process: [
      { title: "Product Definition", description: "We define core user flows and the minimum feature set for a strong first release." },
      { title: "UI/UX Design", description: "We design native-feeling interfaces tailored to iOS and Android conventions." },
      { title: "Development", description: "We build with a shared, modular codebase to keep both platforms in sync." },
      { title: "QA & Store Launch", description: "We test across real devices and manage App Store / Play Store submission." },
    ],
    whyAlvantix: [
      "One shared codebase, so features ship to iOS and Android together",
      "Native-feeling UX tailored to each platform's conventions",
      "Hands-on support through App Store and Play Store review",
    ],
  },
  {
    id: "desktop-app-dev",
    name: "Desktop Application Development",
    description:
      "Develop secure and reliable desktop applications that improve productivity and integrate seamlessly with business systems.",
    extendedDescription:
      "We create powerful desktop software tailored for business operations, automation, and enterprise workflows, ensuring security, reliability, and long-term performance across Windows and macOS environments, with support for both offline and connected use cases.",
    iconName: "Monitor",
    features: [
      "Windows & macOS Solutions",
      "Business Productivity Tools",
      "Secure Data Management",
      "Offline & Online Support",
    ],
    process: [
      { title: "Workflow Analysis", description: "We study how your team actually works to design software that fits, not fights, it." },
      { title: "System Design", description: "We architect for security, offline reliability, and integration with existing tools." },
      { title: "Development & Testing", description: "We build and rigorously test across target operating systems and hardware." },
      { title: "Deployment & Training", description: "We deploy, document, and train your team for smooth day-one adoption." },
    ],
    whyAlvantix: [
      "Built for how your team actually works, not a generic template",
      "Reliable offline support alongside cloud connectivity",
      "Hands-on training and documentation for smooth adoption",
    ],
  },
  {
    id: "ai-chatbots",
    name: "AI Chatbots",
    description:
      "Deploy contextual virtual assistants that read customer history to guide inquiries and make instant data inquiries automatically.",
    extendedDescription:
      "Enable conversational experiences that automate upwards of 80% of support calls. Fully integrated into CRMs, billing portals, and communication channels, our chatbots are trained on your actual business data and escalation rules so customers get accurate answers instead of generic responses.",
    iconName: "Bot",
    features: [
      "24/7 Customer Support",
      "Natural Language Conversations",
      "Business Workflow Automation",
      "Multi-Platform Integration",
    ],
    process: [
      { title: "Use Case Mapping", description: "We identify the highest-volume queries worth automating first." },
      { title: "Knowledge & Flow Design", description: "We train the assistant on your data, tone, and escalation rules." },
      { title: "Integration", description: "We connect the chatbot to your CRM, billing, or support platforms." },
      { title: "Launch & Refine", description: "We monitor real conversations and continuously improve accuracy." },
    ],
    whyAlvantix: [
      "Trained on your actual business data, not generic scripts",
      "Clear escalation rules so edge cases reach a human, not a dead end",
      "Integrated directly into your CRM and support stack",
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description:
      "Grow your brand's reach and revenue with data-driven digital marketing strategies across search, social, and paid channels.",
    extendedDescription:
      "We craft end-to-end digital marketing strategies that combine SEO, paid advertising, social media, and content to increase visibility, drive qualified traffic, and convert audiences into customers. Every campaign is built around measurable goals — traffic, leads, or revenue — with transparent reporting so you always know what's working.",
    iconName: "Megaphone",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Paid Ads (Google & Meta)",
      "Content & Brand Strategy",
    ],
    process: [
      { title: "Audit & Strategy", description: "We audit your current presence and set clear, measurable growth goals." },
      { title: "Channel Planning", description: "We choose the right mix of SEO, paid, social, and content for your audience." },
      { title: "Campaign Execution", description: "We launch and actively manage campaigns across chosen channels." },
      { title: "Reporting & Optimization", description: "We report transparently and continuously optimize toward your goals." },
    ],
    whyAlvantix: [
      "Strategy built around measurable goals — traffic, leads, or revenue",
      "Transparent reporting, no vanity metrics dressed up as results",
      "Continuous optimization, not a campaign that runs and gets forgotten",
    ],
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    description:
      "Design intuitive, engaging, and user-centered digital experiences that improve usability and customer satisfaction.",
    extendedDescription:
      "We model detailed UX layouts rooted in deep user-centric research. Our design systems bridge seamlessly into code components, preserving visual intent completely from Figma to production, so nothing gets lost in handoff between design and engineering.",
    iconName: "Palette",
    features: [
      "User-Centered Design",
      "Interactive Prototypes",
      "Modern Design Systems",
      "Responsive User Interfaces",
    ],
    process: [
      { title: "User Research", description: "We research your users' real needs and pain points before designing anything." },
      { title: "Wireframing", description: "We map core flows and information architecture at low fidelity first." },
      { title: "Visual Design", description: "We craft a distinctive, on-brand interface with a reusable design system." },
      { title: "Prototyping & Handoff", description: "We deliver interactive prototypes and developer-ready components." },
    ],
    whyAlvantix: [
      "Research-backed decisions, not just visually pleasing screens",
      "Reusable design systems that keep your product consistent as it grows",
      "Clean design-to-code handoff so nothing is lost in translation",
    ],
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    description:
      "Synthesize large text, log, and transactional structures into beautiful, readable chart ecosystems and summary dashboards.",
    extendedDescription:
      "Transform raw operational data into actionable insight. We build secure analytical pipelines that perform real-time data calculations and visualize results instantly, giving decision-makers dashboards they can actually act on instead of static spreadsheets.",
    iconName: "LineChart",
    features: [
      "Interactive Dashboards",
      "Business Intelligence",
      "Real-Time Reporting",
      "Actionable Insights",
    ],
    process: [
      { title: "Data Audit", description: "We map your existing data sources and identify quality or structure gaps." },
      { title: "Pipeline Design", description: "We build reliable pipelines to clean, structure, and centralize your data." },
      { title: "Dashboard Development", description: "We design dashboards around the decisions your team actually needs to make." },
      { title: "Rollout & Training", description: "We deploy and train your team to read and act on the insights confidently." },
    ],
    whyAlvantix: [
      "Dashboards built around decisions, not just data for its own sake",
      "Reliable pipelines that keep reporting accurate as data grows",
      "Team training so the dashboards actually get used" ,
    ],
  },
  {
    id: "bi-automation",
    name: "Business Intelligence & Automation",
    description:
      "Transform business data into meaningful insights through interactive dashboards, analytics, and real-time reporting.",
    extendedDescription:
      "We build intelligent automation solutions that streamline operations, integrate business systems, eliminate repetitive tasks, and enable organizations to operate more efficiently, freeing your team to focus on higher-value work instead of manual processes.",
    iconName: "Zap",
    features: [
      "Workflow Automation",
      "Business Process Optimization",
      "System Integration",
      "Performance Analytics",
    ],
    process: [
      { title: "Process Mapping", description: "We identify repetitive, manual tasks that are worth automating first." },
      { title: "System Integration Plan", description: "We design how your existing tools and systems will connect and share data." },
      { title: "Automation Build", description: "We build and test the automated workflows against real operational cases." },
      { title: "Monitoring & Scaling", description: "We monitor performance and expand automation to new processes over time." },
    ],
    whyAlvantix: [
      "Automations that plug into your existing tools, not replace them",
      "Focused on freeing your team's time for higher-value work",
      "Built to scale to new processes once the first wins land",
    ],
  },
];

export const iconMap: Record<string, any> = {
  Sparkles,
  Globe,
  Layers,
  Smartphone,
  Monitor,
  Bot,
  Megaphone,
  Palette,
  LineChart,
  Zap,
};
