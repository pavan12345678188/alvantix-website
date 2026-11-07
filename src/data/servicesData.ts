import {
  Globe,
  Layers,
  Code2,
  LineChart,
  Workflow,
  Zap,
  Briefcase,
  Megaphone,
  Sparkles,
  Bot,
  BrainCircuit,
  Database,
  Eye,
  Mic,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layers,
  Code2,
  LineChart,
  Workflow,
  Zap,
  Briefcase,
  Megaphone,
  Sparkles,
  Bot,
  BrainCircuit,
  Database,
  Eye,
  Mic,
  ShieldCheck,
};

export interface ServiceChallenge {
  challenge: string;
  impact: string;
}

export interface ServiceOffering {
  title: string;
  whatItIs: string;
  whatItDoes: string;
  howItHelps: string;
  whereUsed: string;
}

export interface ServiceIndustry {
  industry: string;
  description: string;
  useCase: string;
}

export interface ServiceProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceWhyPoint {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  businessValue: string;
  extendedDescription: string;
  iconName: string;
  challenges: ServiceChallenge[];
  offerings: ServiceOffering[];
  industries: ServiceIndustry[];
  deliverables: {
    core: string[];
    optional: string[];
  };
  process: ServiceProcessStep[];
  whyAlvantix: ServiceWhyPoint[];
  ctaHeadline: string;
  ctaText: string;
  // For backwards compatibility
  features?: string[];
  businessApplications?: string[];
}

export const servicesData: ServiceItem[] = [
  // 1. WEBSITE DEVELOPMENT
  {
    id: "website-development",
    name: "Website Development",
    category: "Web Engineering",
    headline: "Fast, Credible and Conversion-Focused Modern Websites.",
    description:
      "Professional, responsive and modern websites designed to establish your brand presence, engage visitors, and convert interest into qualified customer enquiries.",
    businessValue:
      "Strengthens brand credibility, boosts Google search visibility, and creates an always-available digital storefront that systematically turns traffic into commercial enquiries.",
    extendedDescription:
      "In a digital-first economy, your website is the primary touchpoint where prospective customers, partners, and decision-makers evaluate your credibility. Alvantix designs and builds modern web platforms engineered specifically for business results. We combine elegant typography, fluid responsive behavior across all device screens, sub-second load times, and structured search engine optimization. Whether you are an established business seeking to replace a slow legacy site, a growing firm wanting to enter new markets, or an enterprise looking to showcase complex services, we build web solutions that represent your organization with authority.",
    iconName: "Globe",
    challenges: [
      {
        challenge: "Slow Page Load Speeds",
        impact:
          "Visitors abandon websites that take longer than 3 seconds to load, driving potential revenue directly to faster competitors.",
      },
      {
        challenge: "Poor Mobile Experience",
        impact:
          "Over 65% of business research begins on smartphones; broken mobile layouts erode credibility and cause prospective clients to leave immediately.",
      },
      {
        challenge: "Low Search Engine Visibility",
        impact:
          "Without semantic HTML structure and clean search indexing, qualified buyers searching for your services will never discover your company.",
      },
      {
        challenge: "Low Visitor-to-Enquiry Conversion",
        impact:
          "A website that looks pretty but lacks clear value propositions and friction-free inquiry pathways fails to generate qualified sales leads.",
      },
    ],
    offerings: [
      {
        title: "Corporate & Enterprise Platforms",
        whatItIs: "Authoritative digital headquarters for established organizations and scaling companies.",
        whatItDoes: "Presents your brand story, corporate capabilities, leadership team, and solution portfolio with institutional-grade polish.",
        howItHelps: "Instills immediate confidence in prospective enterprise clients, investors, and high-value partners.",
        whereUsed: "B2B service providers, holding companies, consulting practices, and multi-location commercial brands."
      },
      {
        title: "High-Converting Service & Landing Sites",
        whatItIs: "Targeted web platforms designed specifically around lead generation and direct customer acquisition.",
        whatItDoes: "Guides visitors through problem-solution journeys with clear proof points, pricing clarity, and seamless contact pathways.",
        howItHelps: "Dramatically lowers your customer acquisition cost by maximizing the percentage of visitors who book calls or request quotes.",
        whereUsed: "Specialized service providers, healthcare clinics, legal and financial firms, and boutique agencies."
      },
      {
        title: "E-Commerce & Digital Showcases",
        whatItIs: "Modern online product catalogs and digital commerce experiences.",
        whatItDoes: "Displays product inventories with lightning-fast search, intuitive filtering, detailed specs, and secure checkout or quote-request flows.",
        howItHelps: "Expands your market reach beyond geographical constraints and simplifies customer buying decisions.",
        whereUsed: "Direct-to-consumer manufacturers, wholesale distributors, retail brands, and luxury lifestyle businesses."
      },
      {
        title: "Modern CMS & Self-Serve Platforms",
        whatItIs: "Content management architectures allowing non-technical marketing teams to publish updates effortlessly.",
        whatItDoes: "Empowers your internal team to publish articles, case studies, announcements, and team profiles without touching code.",
        howItHelps: "Removes costly developer bottlenecks and keeps your online messaging fresh, timely, and aligned with market shifts.",
        whereUsed: "Marketing departments, educational institutions, publishers, and dynamic technology ventures."
      }
    ],
    industries: [
      {
        industry: "Professional & Corporate Services",
        description: "Law firms, accounting practices, and management consultancies.",
        useCase: "Establish unquestioned professional authority, publish thought leadership, and capture confidential client inquiries."
      },
      {
        industry: "Healthcare & Medical Practices",
        description: "Hospitals, specialty clinics, dental centers, and wellness providers.",
        useCase: "Present clinical capabilities clearly, provide practitioner profiles, and enable frictionless patient appointment booking."
      },
      {
        industry: "Hospitality & Leisure",
        description: "Hotels, resorts, event venues, and culinary groups.",
        useCase: "Showcase properties with high-resolution visual storytelling, virtual walkthroughs, and direct reservation inquiries."
      },
      {
        industry: "Retail & Consumer Brands",
        description: "Specialty retailers, consumer goods manufacturers, and lifestyle brands.",
        useCase: "Build immersive product catalogs that tell compelling brand narratives and drive repeat consumer interest."
      },
      {
        industry: "Real Estate & Architecture",
        description: "Property developers, real estate agencies, and architectural studios.",
        useCase: "Present floor plans, project portfolios, location guides, and buyer registration forms with interactive precision."
      },
      {
        industry: "Startups & Emerging Tech",
        description: "Seed and growth-stage companies launching new digital products.",
        useCase: "Communicate novel value propositions with crystal clarity, validate market interest, and convert early adopters."
      }
    ],
    deliverables: {
      core: [
        "Fully custom responsive design tailored to your exact brand guidelines",
        "Sub-1.5 second initial load times and top-tier Core Web Vitals scores",
        "Complete on-page technical SEO setup with Schema.org JSON-LD structured data",
        "Semantic HTML5 architecture tested across Chrome, Safari, Edge, iOS, and Android",
        "Interactive contact, quote-request, and lead-capture forms with spam protection",
        "SSL certificate configuration, DNS setup, and zero-downtime cloud deployment"
      ],
      optional: [
        "Headless Content Management System (CMS) for self-service blog and team management",
        "Multilingual content architecture for international market expansion",
        "Interactive calculators, cost estimators, and product comparison tools",
        "CRM and marketing automation webhook integrations (HubSpot, Salesforce, Zoho)"
      ]
    },
    process: [
      {
        step: 1,
        title: "Understanding Your Business",
        description: "We uncover your commercial goals, target audience demographics, competitive positioning, and key conversion metrics."
      },
      {
        step: 2,
        title: "Planning the Solution",
        description: "We architect the information hierarchy, user journeys, content strategy, and technical stack to ensure seamless execution."
      },
      {
        step: 3,
        title: "Design & Development",
        description: "We craft clean, responsive UI layouts with modern typography and translate them into pristine, high-performance code."
      },
      {
        step: 4,
        title: "Testing & Review",
        description: "We rigorously test page speed, cross-device responsiveness, accessibility standards, and form routing before launch."
      },
      {
        step: 5,
        title: "Launch & Delivery",
        description: "We manage DNS pointing, search engine verification, analytics tracking, and deliver full asset documentation."
      },
      {
        step: 6,
        title: "Ongoing Support",
        description: "We provide warranty support, proactive performance checks, and continuous advisory as your business grows."
      }
    ],
    whyAlvantix: [
      {
        title: "Speed as a Feature",
        description: "We engineer lightweight, modern codebases that load instantly, keeping visitors engaged and boosting organic rankings."
      },
      {
        title: "Business-First Design",
        description: "We do not build digital art projects; every layout decision is engineered to communicate value and drive commercial enquiries."
      },
      {
        title: "Complete Technical SEO",
        description: "Every build comes equipped with JSON-LD schema, canonical tags, open-graph cards, and search-engine-friendly structure."
      },
      {
        title: "Direct Engineering Communication",
        description: "You work directly with the senior engineers and designers building your platform, with zero middlemen or lost requirements."
      }
    ],
    ctaHeadline: "Let's Build Your Website",
    ctaText: "Ready to elevate your online presence with a fast, modern, and credible website? Schedule a conversation with our web engineering team today."
  },

  // 2. APPLICATION DEVELOPMENT
  {
    id: "application-development",
    name: "Application Development",
    category: "Software Engineering",
    headline: "Reliable Web and Mobile Applications Built to Scale Your Operations.",
    description:
      "Web and mobile applications designed to simplify complex operational workflows, empower distributed teams, and deliver intuitive digital experiences to your customers.",
    businessValue:
      "Eliminates manual paperwork, enables real-time collaboration between remote teams, and provides customers with self-service convenience that cuts operational overhead.",
    extendedDescription:
      "As businesses expand, off-the-shelf software tools often create fragmented silos, duplicate data entry, and escalating subscription fees. Alvantix engineers custom web and mobile applications designed around the exact way your company operates. We build Progressive Web Apps (PWAs) that run seamlessly on desktop and mobile browsers alike, as well as native-feeling mobile solutions with offline reliability, granular role-based permissions, and real-time data sync. From internal operational control panels to customer-facing client portals, we build software that turns complicated business procedures into intuitive, fast digital workflows.",
    iconName: "Layers",
    challenges: [
      {
        challenge: "Disconnected Business Tools",
        impact:
          "Staff waste hours manually copying data between spreadsheets, email threads, and disparate software tools, creating costly errors.",
      },
      {
        challenge: "Lack of Mobile Field Access",
        impact:
          "Field personnel, technicians, and executives on the go cannot access or update critical business information in real time.",
      },
      {
        challenge: "Poor Customer Ergonomics",
        impact:
          "Customers forced to phone or email for routine account updates or service tracking experience friction and report lower satisfaction.",
      },
      {
        challenge: "Ballooning Per-User Software Subscriptions",
        impact:
          "Third-party SaaS platforms penalize your growth by charging exorbitant monthly fees per user seat as your organization scales.",
      },
    ],
    offerings: [
      {
        title: "Customer & Client Self-Service Portals",
        whatItIs: "Secure digital portals where your clients can manage their accounts, review project milestones, or access deliverables.",
        whatItDoes: "Enables customers to view statements, submit support tickets, approve proposals, and track orders 24/7 without calling your staff.",
        howItHelps: "Dramatically reduces inbound support call volume while improving client retention and operational transparency.",
        whereUsed: "B2B service providers, logistics firms, financial advisors, educational organizations, and subscription businesses."
      },
      {
        title: "Field Service & Operational Mobile Apps",
        whatItIs: "Mobile-first applications tailored for remote workers, site inspectors, and mobile service technicians.",
        whatItDoes: "Allows field teams to capture photos, log job statuses, record customer signatures, and work even with intermittent connectivity.",
        howItHelps: "Eliminates physical paperwork and ensures operational headquarters has immediate visibility into field progress.",
        whereUsed: "Construction, property management, inspection agencies, delivery fleets, and home service providers."
      },
      {
        title: "Internal Management & Employee Dashboards",
        whatItIs: "Centralized operational hubs for scheduling, asset tracking, project workflows, and staff management.",
        whatItDoes: "Consolidates company workflows into a unified, authenticated interface with granular role-based permissions.",
        howItHelps: "Keeps management informed with live operational metrics and prevents operational tasks from falling through the cracks.",
        whereUsed: "Growing enterprises, medical facilities, warehousing hubs, and distributed professional teams."
      },
      {
        title: "Progressive Web Applications (PWAs)",
        whatItIs: "Modern browser-based applications that look and behave like native mobile apps without app store friction.",
        whatItDoes: "Installs directly from the browser onto user home screens, delivers push notifications, and caches critical data offline.",
        howItHelps: "Saves up to 60% in engineering costs by maintaining a single, unified codebase across all desktop and mobile platforms.",
        whereUsed: "B2B client platforms, interactive field tools, inventory audits, and customer loyalty applications."
      }
    ],
    industries: [
      {
        industry: "Logistics & Supply Chain",
        description: "Freight operators, warehouses, and dispatch hubs.",
        useCase: "Consolidate shipment tracking, barcode scanning, driver dispatch, and proof-of-delivery signatures in one app."
      },
      {
        industry: "Real Estate & Property Management",
        description: "Facility managers, residential communities, and commercial leasing.",
        useCase: "Manage tenant service requests, maintenance tickets, lease renewals, and contractor dispatch digitally."
      },
      {
        industry: "Healthcare & Telehealth",
        description: "Clinics, diagnostic centers, and allied health practices.",
        useCase: "Provide secure patient appointment booking, teleconsultation scheduling, and diagnostic result delivery."
      },
      {
        industry: "Education & EdTech",
        description: "Training institutes, schools, and professional coaching programs.",
        useCase: "Deliver student learning portals, progress tracking, assignment submissions, and instructor communication channels."
      },
      {
        industry: "Financial & Advisory Services",
        description: "Wealth managers, insurance brokerages, and accounting firms.",
        useCase: "Secure document exchange portals, portfolio overviews, and structured compliance checklist workflows."
      },
      {
        industry: "Retail & Multi-Outlet Chains",
        description: "Store managers, regional supervisors, and franchise operations.",
        useCase: "Daily store opening checklists, inventory stock checks, and shift handovers coordinated across locations."
      }
    ],
    deliverables: {
      core: [
        "Fully responsive web and mobile application with intuitive UI design",
        "Secure user authentication with role-based access control (Admin, Manager, Staff, Client)",
        "Real-time database integration with optimistic UI updates and fast response times",
        "Clean, maintainable TypeScript component architecture for effortless future expansion",
        "Data export capabilities (Excel, PDF, CSV) for audit, reporting, and accounting needs",
        "Comprehensive user documentation and guided administrator onboarding session"
      ],
      optional: [
        "Push notifications and automated SMS/email operational triggers",
        "Offline caching for mobile devices operating in low-signal environments",
        "Biometric authentication (TouchID/FaceID) support on supported mobile devices",
        "Custom integration with existing ERP, accounting, or legacy inventory software"
      ]
    },
    process: [
      {
        step: 1,
        title: "Understanding Your Business",
        description: "We map out your current operational workflows, pain points, user personas, and required system integrations."
      },
      {
        step: 2,
        title: "Planning the Solution",
        description: "We define the complete functional specification, data model, user journey wireframes, and technical architecture."
      },
      {
        step: 3,
        title: "Design & Development",
        description: "We build the user interface and back-end logic iteratively, giving you working prototypes to test and review regularly."
      },
      {
        step: 4,
        title: "Testing & Review",
        description: "We conduct rigorous security audits, edge-case testing, load simulations, and user acceptance testing with your team."
      },
      {
        step: 5,
        title: "Launch & Delivery",
        description: "We deploy the application to secure cloud infrastructure, migrate existing data, and configure monitoring alarms."
      },
      {
        step: 6,
        title: "Ongoing Support",
        description: "We ensure continuous uptime, monitor server health, apply security patches, and support feature evolutions."
      }
    ],
    whyAlvantix: [
      {
        title: "Intuitive User Ergonomics",
        description: "We build software that staff and clients actually enjoy using, minimizing training time and eliminating user resistance."
      },
      {
        title: "Scalable Architectural Foundations",
        description: "Our applications are engineered to handle growing transaction volumes and user counts without performance degradation."
      },
      {
        title: "Full Intellectual Property Ownership",
        description: "You own 100% of the application code, database structures, and intellectual property with zero vendor lock-in."
      },
      {
        title: "Security & Data Integrity First",
        description: "Every endpoint is protected with enterprise-grade encryption, defensive input sanitization, and strict authorization checks."
      }
    ],
    ctaHeadline: "Let's Build Your Application",
    ctaText: "Have a workflow that needs streamlining or a new product idea to bring to market? Talk to our application architects to map out your solution."
  },

  // 3. CUSTOM SOFTWARE DEVELOPMENT
  {
    id: "custom-software-development",
    name: "Custom Software Development",
    category: "Software Engineering",
    headline: "Tailored Software Engineered Around Your Exact Business Logic.",
    description:
      "Bespoke software systems engineered from the ground up to solve complex operational challenges, automate unique business rules, and give your company a decisive competitive edge.",
    businessValue:
      "Gives your business a proprietary operating asset that fits your exact processes without compromise, replacing dozens of disjointed tools with a unified platform.",
    extendedDescription:
      "When commercial off-the-shelf software falls short, forcing your business to compromise its operational processes or endure endless manual workarounds, custom software is the strategic solution. Alvantix engineers bespoke software platforms crafted around your exact business models, proprietary calculations, regulatory constraints, and multi-departmental workflows. Rather than bending your organization to fit a generic vendor's mold, we build systems that amplify your unique competitive strengths, automate complex operational calculations, and provide real-time management control across every department.",
    iconName: "Code2",
    challenges: [
      {
        challenge: "Rigid Off-The-Shelf SaaS Limitations",
        impact:
          "Generic software fails to accommodate unique business logic, forcing your staff to use clumsy external spreadsheets to bridge gaps.",
      },
      {
        challenge: "Uncontrollable Licensing Costs",
        impact:
          "Growing businesses find themselves paying tens of thousands of dollars annually for software licenses containing features they never use.",
      },
      {
        challenge: "Data Fragmentation & Loss of Control",
        impact:
          "Critical business data is scattered across multiple proprietary third-party clouds with restrictive export policies and security blindspots.",
      },
      {
        challenge: "Inability to Innovate Quickly",
        impact:
          "Waiting for commercial software vendors to add features you urgently need stifles your company's ability to introduce new customer offerings.",
      },
    ],
    offerings: [
      {
        title: "Bespoke Enterprise Resource Platforms (ERP)",
        whatItIs: "Tailored operational engines unifying procurement, inventory, job tracking, billing, and accounting.",
        whatItDoes: "Coordinates cross-departmental operations with automated approval chains, ledger synchronization, and role-based views.",
        howItHelps: "Gives executive leadership real-time visibility into operational health while removing administrative friction.",
        whereUsed: "Manufacturing plants, distribution companies, multi-branch service businesses, and contracting firms."
      },
      {
        title: "Proprietary Calculation & Quotation Engines",
        whatItIs: "Custom software that computes complex pricing, engineering estimates, or multi-variable bids automatically.",
        whatItDoes: "Applies your proprietary formulas, supplier rate sheets, and risk factors instantly to generate binding customer quotes.",
        howItHelps: "Turns multi-day estimation delays into instant, error-free quotations that help you win business before competitors respond.",
        whereUsed: "Industrial fabrication, insurance underwriting, custom manufacturing, logistics, and engineering consultancies."
      },
      {
        title: "Legacy Software Modernization & Refactoring",
        whatItIs: "Systematic upgrades of outdated desktop, on-premise, or brittle codebases to modern cloud architectures.",
        whatItDoes: "Extracts business logic from fragile legacy systems, migrates databases securely, and re-architects the software for modern web accessibility.",
        howItHelps: "Eliminates server crash risks, closes security vulnerabilities, and enables remote staff access without losing years of historical data.",
        whereUsed: "Established corporations with decades-old FoxPro, Visual Basic, MS Access, or older PHP/Java systems."
      },
      {
        title: "Specialized Workflow & Dispatch Systems",
        whatItIs: "Software designed specifically around high-throughput scheduling, asset dispatch, or physical resource management.",
        whatItDoes: "Optimizes task allocation, routes field personnel efficiently, and monitors completion milestones in real time.",
        howItHelps: "Maximizes equipment and personnel utilization rates, reducing idle overhead and boosting operational profit margins.",
        whereUsed: "Transport fleets, heavy machinery rental, specialized maintenance providers, and inspection services."
      }
    ],
    industries: [
      {
        industry: "Manufacturing & Industrial",
        description: "Custom fabricators, assembly lines, and industrial goods producers.",
        useCase: "Track bill of materials, shop-floor work orders, machine maintenance cycles, and quality compliance checkpoints."
      },
      {
        industry: "Wholesale & Distribution",
        description: "B2B importers, master distributors, and regional supply hubs.",
        useCase: "Manage tier-based pricing structures, warehouse bin allocations, backorders, and multi-location inventory reconciliation."
      },
      {
        industry: "Engineering & Construction",
        description: "Civil contractors, structural engineers, and specialty builders.",
        useCase: "Centralize project procurement, sub-contractor billing approvals, change orders, and job-costing analytics."
      },
      {
        industry: "Financial & Lending Institutions",
        description: "Non-bank lenders, credit cooperatives, and specialty finance houses.",
        useCase: "Automate loan origination pipelines, credit evaluation rules, repayment tracking, and default risk monitoring."
      },
      {
        industry: "Government & Public Services",
        description: "Municipal agencies, public trusts, and regional administration boards.",
        useCase: "Digitize public citizen applications, permit verification chains, and audit-compliant archival records."
      },
      {
        industry: "Healthcare & Life Sciences",
        description: "Clinical research labs, pharmaceutical suppliers, and diagnostic networks.",
        useCase: "Secure chain-of-custody tracking for biological samples, patient registries, and regulatory audit log compliance."
      }
    ],
    deliverables: {
      core: [
        "Complete bespoke software solution tailored to your operational specifications",
        "Clean, modular codebase with full intellectual property ownership transferred to you",
        "Robust relational database design with automated daily backups and data recovery protocols",
        "Role-based access security with audit trail logging for all sensitive system actions",
        "Comprehensive technical documentation, API specifications, and architectural diagrams",
        "Structured user training sessions and transition support for management and staff"
      ],
      optional: [
        "Dedicated staging sandbox environment for testing new workflows safely",
        "Automated data migration pipelines from legacy spreadsheets and database dumps",
        "High-availability multi-region cloud deployment for 99.99% operational uptime",
        "Custom desktop wrapper applications for offline or local hardware integration"
      ]
    },
    process: [
      {
        step: 1,
        title: "Understanding Your Business",
        description: "We shadow your team, study your proprietary business logic, document edge cases, and define clear success criteria."
      },
      {
        step: 2,
        title: "Planning the Solution",
        description: "We produce detailed database schemas, entity relationship models, system architectures, and sprint delivery milestones."
      },
      {
        step: 3,
        title: "Design & Development",
        description: "Our engineers build the software modularly with automated test coverage, sharing functional milestones every two weeks."
      },
      {
        step: 4,
        title: "Testing & Review",
        description: "We execute rigorous stress tests, data verification simulations, and user acceptance trials with your operational team."
      },
      {
        step: 5,
        title: "Launch & Delivery",
        description: "We orchestrate a phased rollout or parallel run to ensure zero disruption to ongoing daily business operations."
      },
      {
        step: 6,
        title: "Ongoing Support",
        description: "We provide dedicated SLA-backed engineering support, system health monitoring, and long-term capability expansion."
      }
    ],
    whyAlvantix: [
      {
        title: "Zero Compromise on Business Rules",
        description: "We build your software around how your company excels, preserving the exact operational advantages that make you unique."
      },
      {
        title: "End-to-End Code Ownership",
        description: "No recurring per-user licensing fees; you own the software asset completely as a permanent balance-sheet enhancement."
      },
      {
        title: "Architected for Long-Term Longevity",
        description: "We write clean, documented TypeScript code adhering to industry standards, ensuring simple maintenance for decades."
      },
      {
        title: "Risk-Managed Transition",
        description: "We specialize in smooth migrations from legacy systems and spreadsheets, guaranteeing zero lost records or business downtime."
      }
    ],
    ctaHeadline: "Let's Engineer Your Custom Software",
    ctaText: "Ready to replace rigid off-the-shelf software with a proprietary platform designed around your exact business? Contact our engineering team."
  },

  // 4. DATA ANALYTICS & BI
  {
    id: "data-analytics",
    name: "Data Analytics & Business Intelligence",
    category: "Data & Intelligence",
    headline: "Transforming Raw Business Data into Clear, Actionable Decisions.",
    description:
      "End-to-end data pipelines, executive dashboards, and business intelligence reporting that turn fragmented numbers into profitable decisions, operational clarity, and forward-looking visibility.",
    businessValue:
      "Reveals hidden profit leaks, identifies your most valuable customer segments, and replaces guesswork with real-time financial and operational truth.",
    extendedDescription:
      "Most modern businesses generate vast amounts of data every day across sales registers, website analytics, accounting software, inventory databases, and customer emails. Yet most executives still make high-stakes decisions based on fragmented reports, outdated month-end summaries, or conflicting spreadsheets. Alvantix builds comprehensive Data Analytics and Business Intelligence solutions that unify your data sources into a single source of truth. We engineer automated extraction pipelines, clean inconsistent records, and present intuitive visual dashboards that show you exactly where revenue is being made, where costs are leaking, and where your greatest growth opportunities lie.",
    iconName: "LineChart",
    challenges: [
      {
        challenge: "Data Trapped in Siloed Spreadsheets",
        impact:
          "Different departments rely on contradictory Excel files, leading to endless arguments in executive meetings about whose numbers are accurate.",
      },
      {
        challenge: "Delayed Operational Visibility",
        impact:
          "Finding out your business lost money on a project or customer 30 days after the month closes prevents corrective action in real time.",
      },
      {
        challenge: "Inability to Spot Customer Churn Early",
        impact:
          "Without behavioral data tracking, valuable customers reduce their purchase frequency or drift away entirely without management noticing.",
      },
      {
        challenge: "Time-Consuming Manual Reporting",
        impact:
          "Managers spend 10–15 hours every week manually compiling reports from multiple logins instead of focusing on growing the business.",
      },
    ],
    offerings: [
      {
        title: "Executive & Operational BI Dashboards",
        whatItIs: "Clean, visual command centers displaying your company's most vital Key Performance Indicators (KPIs) in real time.",
        whatItDoes: "Visualizes cash flow, revenue run rates, gross margins, inventory turns, and team productivity with one-click drill-downs.",
        howItHelps: "Gives business owners and leaders instant operational clarity from any laptop or mobile device at a glance.",
        whereUsed: "Boardrooms, executive suites, operational command centers, and multi-entity commercial enterprises."
      },
      {
        title: "Automated Data Warehousing & Pipelines",
        whatItIs: "Centralized data infrastructure that automatically collects, cleans, and structures data from all your business tools.",
        whatItDoes: "Extracts data from your ERP, CRM, payment processors, and marketing channels, standardizes formats, and stores it securely.",
        howItHelps: "Eliminates all manual copy-pasting between systems and guarantees 100% consistent data integrity across the organization.",
        whereUsed: "Companies using multiple cloud tools (Stripe, QuickBooks, HubSpot, Shopify, proprietary databases)."
      },
      {
        title: "Customer Cohort & Lifetime Value (LTV) Analytics",
        whatItIs: "In-depth behavioral analysis that segments your customer base by profitability, retention, and repeat buying habits.",
        whatItDoes: "Identifies which marketing channels attract high-value long-term clients and flags accounts exhibiting churn risk signals.",
        howItHelps: "Directs your marketing budget toward your most profitable customer profiles and enables proactive retention campaigns.",
        whereUsed: "Subscription services, e-commerce retailers, wholesale suppliers, and recurring B2B contracts."
      },
      {
        title: "Automated Financial & Performance Reporting",
        whatItIs: "Scheduled automated report delivery directly to executive inboxes and Slack/Teams channels.",
        whatItDoes: "Compiles daily, weekly, and monthly summaries with automated anomaly detection that highlights unusual cost spikes or sales dips.",
        howItHelps: "Ensures stakeholders stay informed without requiring anyone on staff to spend hours formatting slides or spreadsheets.",
        whereUsed: "Finance directors, department heads, regional managers, and external investors."
      }
    ],
    industries: [
      {
        industry: "Retail & E-Commerce",
        description: "Online merchants, omni-channel retail brands, and supermarkets.",
        useCase: "Analyze basket sizes, product affinities, stockout probabilities, return rates, and customer acquisition payback periods."
      },
      {
        industry: "Healthcare & Clinical Networks",
        description: "Hospital networks, diagnostic clinics, and pharmacy chains.",
        useCase: "Monitor patient wait times, bed occupancy rates, doctor utilization, and medicine inventory turnover securely."
      },
      {
        industry: "Manufacturing & Distribution",
        description: "Industrial fabricators, food processors, and supply distributors.",
        useCase: "Track overall equipment effectiveness (OEE), scrap rates, supplier lead-time variances, and delivery punctuality."
      },
      {
        industry: "Professional Services & Agencies",
        description: "Consultancies, digital agencies, legal practices, and architecture firms.",
        useCase: "Measure billable realization rates, project margin profitability, resource utilization, and cash collection cycles."
      },
      {
        industry: "Hospitality & Food Service",
        description: "Hotel groups, restaurant chains, and catering operations.",
        useCase: "Analyze food waste percentages, table turnover velocity, seasonal booking curves, and staff labor-to-revenue ratios."
      },
      {
        industry: "Financial & Investment Groups",
        description: "Private equity holdings, wealth advisory, and credit portfolio managers.",
        useCase: "Consolidated financial performance rollups across portfolio companies with automated currency normalization."
      }
    ],
    deliverables: {
      core: [
        "Custom interactive Business Intelligence dashboard accessible securely on web and mobile",
        "Automated Extract-Transform-Load (ETL) data pipelines connecting your primary business applications",
        "Clean, centralized relational data warehouse with documented schema and data dictionaries",
        "Configurable role-based permissions ensuring sensitive financial data is restricted to authorized eyes",
        "Automated scheduled email and PDF snapshot reports for senior management",
        "Hands-on training session for team members on filtering, exploring, and exporting dashboard data"
      ],
      optional: [
        "Predictive forecasting models for next-quarter sales and inventory replenishment requirements",
        "Automated anomaly alert notifications via WhatsApp, SMS, or Slack when metrics deviate from norms",
        "Integration with self-serve BI tools such as Metabase, Power BI, or Looker Studio",
        "Historical data cleanup and reconciliation for legacy records"
      ]
    },
    process: [
      {
        step: 1,
        title: "Understanding Your Business",
        description: "We determine the core commercial questions your leadership needs answered and audit your existing data sources."
      },
      {
        step: 2,
        title: "Planning the Solution",
        description: "We map data relationships, design the metric calculations, and create mockup dashboard layouts for your review."
      },
      {
        step: 3,
        title: "Design & Development",
        description: "We build the automated data pipelines, establish the warehouse, and develop the interactive visual reporting interface."
      },
      {
        step: 4,
        title: "Testing & Review",
        description: "We rigorously reconcile pipeline numbers against original source ledgers down to the exact cent to ensure 100% accuracy."
      },
      {
        step: 5,
        title: "Launch & Delivery",
        description: "We deploy the dashboards, configure automated sync schedules, and deliver administrative credentials to your team."
      },
      {
        step: 6,
        title: "Ongoing Support",
        description: "We monitor data sync health, adapt calculations as business rules evolve, and help you unlock deeper strategic insights."
      }
    ],
    whyAlvantix: [
      {
        title: "Clarity Over Complexity",
        description: "We do not overwhelm you with confusing graphs; we design clean dashboards that answer core business questions instantly."
      },
      {
        title: "Reconciled Financial Precision",
        description: "We treat data integrity with accounting rigor, validating all automated pipelines against audited source transactions."
      },
      {
        title: "No Vendor Cloud Lock-In",
        description: "You own the underlying database and pipeline code, protecting your company from proprietary analytics price hikes."
      },
      {
        title: "Action-Oriented Insights",
        description: "Every visualization is paired with clear benchmarks, helping your managers know immediately what action to take."
      }
    ],
    ctaHeadline: "Let's Unlock Your Business Data",
    ctaText: "Stop guessing your numbers and relying on stale spreadsheets. Connect with our data analytics specialists to build your real-time command center."
  },

  // 5. API DEVELOPMENT & INTEGRATION
  {
    id: "api-development",
    name: "API Development & Integration",
    category: "Software Engineering",
    headline: "Connecting Your Disparate Systems into One Cohesive Digital Engine.",
    description:
      "High-speed APIs and robust system integrations that connect your internal software, third-party cloud tools, payment gateways, and partner ecosystems into a seamless, automated workflow.",
    businessValue:
      "Eliminates duplicate manual data entry, prevents costly synchronization errors, and allows your existing software tools to communicate instantly in real time.",
    extendedDescription:
      "Modern organizations rely on multiple specialized software applications to run their daily operations: a CRM for sales, an accounting system for invoicing, an e-commerce platform for orders, a payment gateway for billing, and specialized logistics tools for fulfillment. When these systems don't talk to each other, employees waste hours manually re-keying data, orders get delayed, and customers experience frustrating errors. Alvantix engineers enterprise-grade APIs and reliable system integrations that bridge your digital ecosystem. We build secure, resilient data bridges that sync information instantaneously, process webhooks reliably, and allow your company to launch new digital partnerships with ease.",
    iconName: "Workflow",
    challenges: [
      {
        challenge: "Manual Data Re-Entry Between Tools",
        impact:
          "Employees spend hours typing customer records from your CRM into your invoicing or fulfillment software, resulting in typos and delays.",
      },
      {
        challenge: "Silent Sync Failures",
        impact:
          "Brittle third-party connectors fail silently when network hiccups occur, leaving systems out of sync without anyone knowing until customers complain.",
      },
      {
        challenge: "Inability to Partner with Modern Platforms",
        impact:
          "Prospective enterprise partners or distributors require API connectivity to do business; without modern APIs, you miss lucrative commercial contracts.",
      },
      {
        challenge: "Security & Compliance Vulnerabilities",
        impact:
          "Ad-hoc scripts and unencrypted data transfers expose proprietary customer information to interception and regulatory non-compliance.",
      },
    ],
    offerings: [
      {
        title: "Custom RESTful & GraphQL API Engineering",
        whatItIs: "High-performance, secure backend API services engineered for reliability and high query volume.",
        whatItDoes: "Exposes your business data and operational logic through clean, standardized, and authenticated programming interfaces.",
        howItHelps: "Enables your web platforms, mobile apps, and third-party partners to communicate with your core database safely.",
        whereUsed: "Fintech platforms, SaaS products, mobile applications, and enterprise database modernizations."
      },
      {
        title: "Third-Party SaaS & Cloud Integrations",
        whatItIs: "Custom automated bridges connecting your essential operational cloud software tools.",
        whatItDoes: "Synchronizes data between CRMs (Salesforce, HubSpot), ERPs (SAP, NetSuite), payment gateways (Stripe, Razorpay), and email tools.",
        howItHelps: "Creates an uninterrupted data flow across your entire company without requiring staff to log into multiple separate systems.",
        whereUsed: "Growing e-commerce retailers, multi-department businesses, and subscription-based service providers."
      },
      {
        title: "Resilient Webhook & Event-Driven Architecture",
        whatItIs: "Event-based notification pipelines that trigger instant actions when specific events happen in your business.",
        whatItDoes: "Processes payment receipts, order dispatches, status changes, and user actions with automatic retry queues and failure handling.",
        howItHelps: "Guarantees zero dropped transactions, even during unexpected server restarts or external network outages.",
        whereUsed: "Payment confirmations, automated customer notifications, logistics tracking, and ticket escalation flows."
      },
      {
        title: "Legacy System API Wrappers",
        whatItIs: "Modern API layers built on top of older on-premises databases and legacy mainframe applications.",
        whatItDoes: "Allows modern web applications and mobile apps to interact with older databases without rewriting the entire core system.",
        howItHelps: "Saves millions in system replacement costs while unlocking modern digital capabilities for legacy business infrastructure.",
        whereUsed: "Banks, insurance agencies, healthcare networks, and traditional industrial enterprises."
      }
    ],
    industries: [
      {
        industry: "Financial Services & FinTech",
        description: "Payment processors, lending apps, and digital wallets.",
        useCase: "Integrate core banking APIs, fraud checking microservices, payment gateways, and automated reconciliation feeds."
      },
      {
        industry: "E-Commerce & Marketplaces",
        description: "Online retailers, multi-vendor marketplaces, and drop-shippers.",
        useCase: "Sync inventory levels across Amazon, Shopify, and local warehouses while automating carrier shipping label creation."
      },
      {
        industry: "Travel & Hospitality",
        description: "Hotels, tour operators, and ticketing platforms.",
        useCase: "Connect central reservation systems with online travel agents (OTAs), payment terminals, and automated SMS passes."
      },
      {
        industry: "Healthcare & Laboratory Networks",
        description: "Diagnostic clinics, pathology labs, and pharmacy portals.",
        useCase: "Securely route lab test orders and HL7/FHIR compliant medical results between hospital EHRs and patient portals."
      },
      {
        industry: "Real Estate & Property Portals",
        description: "Property listing websites, MLS systems, and agency networks.",
        useCase: "Automate property feed syndication, valuation API lookups, and mortgage pre-qualification webhook flows."
      },
      {
        industry: "Manufacturing & Supply Logistics",
        description: "Suppliers, 3PL providers, and transport fleets.",
        useCase: "Integrate EDI data streams, electronic bills of lading, GPS vehicle telemetry, and customs filing systems."
      }
    ],
    deliverables: {
      core: [
        "Production-grade, fully documented API built with TypeScript and secure REST/GraphQL standards",
        "Robust authentication architecture using JWT, OAuth2, or cryptographically secure API keys",
        "Automated rate-limiting, request validation, and defensive anti-DDoS traffic controls",
        "Self-healing retry queues and dead-letter monitoring to ensure zero data loss during external downtime",
        "Interactive Swagger / OpenAPI documentation portal for seamless developer onboarding",
        "Comprehensive integration test suites verifying data synchronization across all endpoints"
      ],
      optional: [
        "Developer portal with sandbox testing credentials and code snippet generators",
        "Real-time WebSocket event streams for sub-second data push to client browsers",
        "Automated compliance audit logging for sensitive financial or health transactions",
        "Custom middleware connectors for older AS400, SOAP, or XML legacy endpoints"
      ]
    },
    process: [
      {
        step: 1,
        title: "Understanding Your Business",
        description: "We map the exact data flows, endpoint contracts, security requirements, and throughput volumes needed across your systems."
      },
      {
        step: 2,
        title: "Planning the Solution",
        description: "We author the API specification, define schema contracts, data mappings, and error-handling fallback protocols."
      },
      {
        step: 3,
        title: "Design & Development",
        description: "We engineer the integration microservices with strict input validation, caching layers, and automated unit test suites."
      },
      {
        step: 4,
        title: "Testing & Review",
        description: "We run end-to-end sandbox simulations, load testing, latency benchmarking, and simulated failure recovery tests."
      },
      {
        step: 5,
        title: "Launch & Delivery",
        description: "We deploy the APIs to high-availability cloud infrastructure with real-time health telemetry and alerting."
      },
      {
        step: 6,
        title: "Ongoing Support",
        description: "We provide API versioning support, monitor third-party API deprecations, and ensure continuous synchronicity."
      }
    ],
    whyAlvantix: [
      {
        title: "Zero-Data-Loss Reliability",
        description: "Our integrations feature persistent queueing and idempotent handling, guaranteeing no transaction is ever dropped or double-charged."
      },
      {
        title: "Enterprise-Grade Security",
        description: "Every connection is hardened with strict authentication, SSL encryption, rate limits, and sanitized payloads."
      },
      {
        title: "Clean Developer Documentation",
        description: "We deliver crystal-clear OpenAPI documentation that makes it effortless for your internal team or partners to build upon."
      },
      {
        title: "Fast, Low-Latency Architecture",
        description: "Optimized queries and intelligent caching deliver lightning-fast responses even during peak traffic spikes."
      }
    ],
    ctaHeadline: "Let's Integrate Your Systems",
    ctaText: "Ready to eliminate manual data entry and connect your business tools into a unified, automated ecosystem? Talk with our integration engineers."
  },

  // 6. BUSINESS AUTOMATION
  {
    id: "business-automation",
    name: "Business Automation",
    category: "Automation & Systems",
    headline: "Automate Repetitive Workflows and Reclaim Hundreds of Productive Hours.",
    description:
      "End-to-end workflow automation solutions that eliminate repetitive manual data entry, streamline multi-step approval chains, and connect your business operations into self-running digital pipelines.",
    businessValue:
      "Saves your team 20+ hours per employee every month, cuts operational errors by up to 95%, and allows your business to scale revenue without linearly adding headcount.",
    extendedDescription:
      "Every growing business suffers from administrative bottlenecks: copying invoice data into accounting software, chasing managers for approvals, manually drafting customer onboarding emails, sending reminders for overdue payments, and synchronizing spreadsheets. These repetitive tasks not only drain employee morale and waste valuable hours, but also introduce costly human errors. Alvantix designs and implements intelligent business automation systems that execute these workflows automatically in the background. By connecting your forms, communications, databases, and operational tools into event-driven pipelines, we allow your team to focus on high-value strategic work while the machines handle the busywork.",
    iconName: "Zap",
    challenges: [
      {
        challenge: "Hours Wasted on Repetitive Administrative Tasks",
        impact:
          "High-salaried professionals spend up to a third of their workweek doing copy-paste data entry instead of revenue-generating work.",
      },
      {
        challenge: "Human Transposition & Clerical Errors",
        impact:
          "Fatigued employees make typing errors on invoices, client contracts, and addresses that lead to billing disputes and delayed payments.",
      },
      {
        challenge: "Slow Customer Turnaround & Bottlenecks",
        impact:
          "Inquiries, approvals, and onboarding packets sit unanswered in employee inboxes for days, causing frustrated prospective clients to look elsewhere.",
      },
      {
        challenge: "Difficulty Scaling Without Overhiring",
        impact:
          "Doubling your order or client volume requires doubling your administrative payroll unless your operational processes are automated.",
      },
    ],
    offerings: [
      {
        title: "Document Parsing & Invoice Automation",
        whatItIs: "Intelligent systems that extract data from PDFs, scanned receipts, and vendor invoices automatically.",
        whatItDoes: "Reads line items, verifies totals, matches purchase orders, and posts clean records directly to your accounting software.",
        howItHelps: "Reduces invoice processing cycles from days to seconds while eliminating manual data entry mistakes.",
        whereUsed: "Accounts payable departments, logistics brokers, procurement teams, and property management offices."
      },
      {
        title: "Customer Onboarding & Lifecycle Automation",
        whatItIs: "Automated customer journey workflows triggered instantly upon contract signature or purchase.",
        whatItDoes: "Provisions user accounts, sends personalized welcome materials, schedules orientation calls, and tracks setup milestones.",
        howItHelps: "Delivers an impressive, friction-free first impression that builds immediate customer trust and boosts retention.",
        whereUsed: "SaaS companies, wealth managers, fitness chains, training academies, and B2B professional agencies."
      },
      {
        title: "Cross-Departmental Approval Workflows",
        whatItIs: "Automated routing engines for expenditure requests, leave approvals, discount authorisations, and contracts.",
        whatItDoes: "Notifies designated decision-makers via WhatsApp, Slack, or email with one-tap approve/reject buttons and escalation timers.",
        howItHelps: "Eliminates operational gridlock and ensures accountability with a verifiable, timestamped audit log of every decision.",
        whereUsed: "Corporate offices, manufacturing approvals, HR departments, and multi-branch commercial companies."
      },
      {
        title: "Automated Lead Routing & Instant Triage",
        whatItIs: "Systems that capture inbound web enquiries, score them based on budget and urgency, and assign them immediately.",
        whatItDoes: "Enriches lead profiles with company data, notifies the right account executive, and sends an instant personalized SMS/email acknowledgment.",
        howItHelps: "Responding within 5 minutes increases lead qualification rates by 400% compared to answering hours later.",
        whereUsed: "Sales teams, real estate developers, professional practices, and high-ticket service companies."
      }
    ],
    industries: [
      {
        industry: "Accounting & Financial Operations",
        description: "Bookkeepers, corporate finance teams, and audit practices.",
        useCase: "Automate bank reconciliations, vendor payment scheduling, expense report auditing, and VAT/GST filing calculations."
      },
      {
        industry: "Real Estate & Leasing Agencies",
        description: "Commercial leasing agents, property managers, and brokerages.",
        useCase: "Automate tenant reference checks, digital lease signing flows, rent reminder sequences, and maintenance contractor dispatch."
      },
      {
        industry: "Legal & Compliance Practices",
        description: "Corporate law firms, notary services, and compliance advisors.",
        useCase: "Automate document assembly for standard contracts, client KYC verification checks, and court calendar milestone alerts."
      },
      {
        industry: "Human Resources & Recruitment",
        description: "Staffing agencies, corporate talent teams, and HR departments.",
        useCase: "Automate candidate interview scheduling, resume keyword filtering, offer letter generation, and new-hire background checks."
      },
      {
        industry: "Field Services & Contracting",
        description: "HVAC contractors, commercial cleaning, and electrical services.",
        useCase: "Automate job dispatching, real-time technician arrival notifications to clients, and instant post-job invoicing."
      },
      {
        industry: "Education & Admissions",
        description: "Universities, private colleges, and online academies.",
        useCase: "Automate student application reviews, document verification notices, fee installment reminders, and certificate issuance."
      }
    ],
    deliverables: {
      core: [
        "Complete automated workflow system built and tested across your specific business applications",
        "Interactive workflow diagrams detailing triggers, logic conditions, notifications, and fallbacks",
        "Self-monitoring error notification system alerting management if any third-party tool encounters issues",
        "Audit-ready execution logging recording every automated transaction with timestamps and statuses",
        "Employee training guides and video walkthroughs showing staff how to interact with the new automations",
        "30-day post-launch optimization window to refine logic based on real-world team feedback"
      ],
      optional: [
        "AI-powered cognitive text extraction for handwritten or unstructured scanned documents",
        "Automated WhatsApp Business interactive message flows and notifications",
        "Custom administrative dashboard for toggling workflow rules and viewing process metrics",
        "Integration with legacy on-premise systems via secure local automation agents"
      ]
    },
    process: [
      {
        step: 1,
        title: "Understanding Your Business",
        description: "We audit your daily administrative tasks, map operational time sinks, and identify high-impact automation quick wins."
      },
      {
        step: 2,
        title: "Planning the Solution",
        description: "We design the complete workflow architecture, exception-handling protocols, and verification gates for management review."
      },
      {
        step: 3,
        title: "Design & Development",
        description: "We build the automated workflows connecting your applications, test edge cases, and establish fail-safe guardrails."
      },
      {
        step: 4,
        title: "Testing & Review",
        description: "We execute parallel runs alongside your manual processes to ensure the automations yield 100% identical, error-free results."
      },
      {
        step: 5,
        title: "Launch & Delivery",
        description: "We switch the automations live, provide staff training, and set up real-time activity dashboards for management."
      },
      {
        step: 6,
        title: "Ongoing Support",
        description: "We monitor execution logs, adapt workflows to changing business rules, and identify additional automation opportunities."
      }
    ],
    whyAlvantix: [
      {
        title: "Built for Business Resilience",
        description: "Our automations are engineered with robust error handling and human fallback gates, so operations never halt when an external tool is down."
      },
      {
        title: "Measurable Hours Saved",
        description: "We quantify the exact hours returned to your team and the commercial savings achieved by each automation we deploy."
      },
      {
        title: "Platform Agnostic",
        description: "We build on reliable, maintainable platforms that work seamlessly with your existing tools rather than forcing you to switch."
      },
      {
        title: "Security & Confidentiality First",
        description: "Your business and customer data is processed through secure, encrypted channels with zero exposure to unapproved vendors."
      }
    ],
    ctaHeadline: "Let's Automate Your Business Operations",
    ctaText: "Ready to stop wasting valuable hours on repetitive manual tasks? Schedule a workflow discovery session with our business automation specialists."
  },

  // 7. IT CONSULTING
  {
    id: "it-consulting",
    name: "IT Consulting",
    category: "Strategic Advisory",
    headline: "Pragmatic Technology Advisory Grounded in Business ROI.",
    description:
      "Strategic technology guidance, architecture audits, cloud cost optimization, and digital transformation roadmaps designed to help business executives make confident, profitable technology investments.",
    businessValue:
      "Prevents costly multi-million dollar software blunders, trims unnecessary cloud expenditure by up to 40%, and ensures your technology investments directly drive commercial growth.",
    extendedDescription:
      "Every company today is fundamentally a technology company, but navigating the rapidly shifting landscape of cloud platforms, cybersecurity threats, software frameworks, and emerging artificial intelligence can be overwhelming. Too many business leaders have burned significant capital on over-engineered software projects that failed to deliver commercial value. Alvantix provides senior, vendor-neutral IT consulting and architectural advisory. We do not sell buzzwords or push trendy tools for the sake of it. Instead, we act as your trusted technical partner, evaluating your software architecture, reviewing vendor proposals, auditing security vulnerabilities, and building pragmatic digital roadmaps that protect your bottom line.",
    iconName: "Briefcase",
    challenges: [
      {
        challenge: "Uncertainty When Evaluating New Tech & AI",
        impact:
          "Executives struggle to distinguish between genuine productivity-multiplying technologies and overhyped, expensive trends.",
      },
      {
        challenge: "Spiraling Cloud & Software Vendor Invoices",
        impact:
          "Cloud hosting bills and SaaS tool subscriptions increase every month without anyone in the company knowing what is actually necessary.",
      },
      {
        challenge: "Technical Debt & Fragile Legacy Codebases",
        impact:
          "Older systems become so brittle that minor modifications take months, paralyzing your ability to launch new commercial initiatives.",
      },
      {
        challenge: "Costly Software Development Misalignments",
        impact:
          "Hiring agencies or developers without independent architectural oversight often leads to blown budgets, missed deadlines, and unusable software.",
      },
    ],
    offerings: [
      {
        title: "Independent Architecture Audits & Code Reviews",
        whatItIs: "Rigorous technical inspection of your existing software applications, database schemas, and codebase quality.",
        whatItDoes: "Identifies security vulnerabilities, scalability bottlenecks, hidden technical debt, and maintainability risks.",
        howItHelps: "Gives executive leadership an unvarnished, objective appraisal of their software assets before investing further capital.",
        whereUsed: "M&A technical due diligence, pre-scale software evaluations, and companies experiencing frequent application crashes."
      },
      {
        title: "Digital Transformation & Technology Roadmaps",
        whatItIs: "Multi-year phased technology plans aligned directly with your organization's commercial growth targets.",
        whatItDoes: "Defines which systems to modernize first, sets realistic budgets, outlines resource requirements, and mitigates operational risk.",
        howItHelps: "Replaces chaotic, reactive tech decisions with a clear, predictable roadmap that executive boards and investors trust.",
        whereUsed: "Mid-market enterprises, legacy businesses modernizing operations, and rapidly expanding multi-branch companies."
      },
      {
        title: "Cloud Infrastructure & Cost Optimization",
        whatItIs: "Deep audits of your AWS, Google Cloud, Azure, or hosting infrastructure to identify waste and over-provisioned resources.",
        whatItDoes: "Right-sizes computing instances, eliminates unused storage disks, implements autoscaling, and optimizes database queries.",
        howItHelps: "Frequently reduces monthly cloud infrastructure expenses by 25% to 45% without sacrificing speed or reliability.",
        whereUsed: "Scale-ups, SaaS providers, high-traffic portals, and enterprises with growing monthly cloud expenditures."
      },
      {
        title: "AI Readiness & Pragmatic Adoption Strategy",
        whatItIs: "Pragmatic evaluations of where Artificial Intelligence can genuinely deliver verifiable ROI in your specific business.",
        whatItDoes: "Audits your proprietary data assets, analyzes workflow automation opportunities, and designs private, secure AI pilot projects.",
        howItHelps: "Prevents embarrassing data leakage risks and wasteful AI spending by focusing exclusively on high-impact commercial applications.",
        whereUsed: "Corporate executive boards, professional service firms, manufacturing operators, and healthcare groups."
      }
    ],
    industries: [
      {
        industry: "Banking & Financial Services",
        description: "Commercial lenders, investment firms, and insurance brokerages.",
        useCase: "Independent core banking modernization guidance, regulatory data compliance audits, and cloud migration roadmaps."
      },
      {
        industry: "Manufacturing & Industrial Groups",
        description: "Heavy industry, chemical plants, and component manufacturers.",
        useCase: "Legacy ERP modernization roadmaps, industrial IoT architecture planning, and vendor software proposal evaluations."
      },
      {
        industry: "Retail & Franchise Networks",
        description: "Multi-store retail chains, franchise operators, and direct-to-consumer groups.",
        useCase: "Omnichannel inventory architecture guidance, point-of-sale system selection, and cloud hosting cost containment."
      },
      {
        industry: "Healthcare Networks & Hospital Systems",
        description: "Hospital groups, diagnostic chains, and medical technology firms.",
        useCase: "HIPAA and patient data privacy architectural reviews, telemedicine platform evaluation, and EHR integration strategy."
      },
      {
        industry: "Education & Institutional Bodies",
        description: "Universities, research foundations, and training organizations.",
        useCase: "Campus digital learning infrastructure modernization, student information system audits, and cybersecurity assessments."
      },
      {
        industry: "Private Equity & Venture Capital",
        description: "Investment funds, family offices, and holding companies.",
        useCase: "Technical due diligence audits on prospective software acquisitions, evaluating codebase quality and team capabilities."
      }
    ],
    deliverables: {
      core: [
        "Executive-ready Technical Assessment Report written in plain business language without confusing jargon",
        "Comprehensive architectural diagram detailing current state versus proposed optimized future state",
        "Prioritized Action Matrix ranking recommendations by commercial impact, cost, and implementation difficulty",
        "Cloud cost reduction blueprint identifying specific unused resources and right-sizing opportunities",
        "Executive board briefing presentation summarizing findings, strategic risks, and recommended next steps",
        "Ongoing monthly or quarterly advisory check-ins to monitor implementation progress"
      ],
      optional: [
        "Fractional Chief Technology Officer (CTO) advisory retainer for ongoing leadership guidance",
        "Vendor proposal evaluation and contractual technical requirement review",
        "Third-party engineering team code audits and sprint velocity assessments",
        "Disaster recovery and business continuity simulation drills"
      ]
    },
    process: [
      {
        step: 1,
        title: "Understanding Your Business",
        description: "We interview leadership and operational stakeholders to understand your commercial objectives, budgets, and core technical frustrations."
      },
      {
        step: 2,
        title: "Planning the Solution",
        description: "We review system architectures, code repositories, hosting bills, and vendor contracts under strict confidentiality agreements."
      },
      {
        step: 3,
        title: "Design & Development",
        description: "We analyze performance bottlenecks, run benchmark simulations, and identify specific cost-saving and optimization opportunities."
      },
      {
        step: 4,
        title: "Testing & Review",
        description: "We validate our technical recommendations against your business constraints and test proposed architectures for feasibility."
      },
      {
        step: 5,
        title: "Launch & Delivery",
        description: "We deliver the comprehensive assessment report and lead an executive presentation to align leadership on the path forward."
      },
      {
        step: 6,
        title: "Ongoing Support",
        description: "We provide ongoing strategic advisory to guide your internal developers or vendors in executing the approved roadmap."
      }
    ],
    whyAlvantix: [
      {
        title: "Strict Vendor Neutrality",
        description: "We do not accept kickbacks or reseller commissions from software vendors; our recommendations are 100% aligned with your business interests."
      },
      {
        title: "Business-First Perspective",
        description: "We evaluate technology through the lens of return on investment, operational efficiency, and risk reduction—not engineering vanity."
      },
      {
        title: "Senior Engineering Experience",
        description: "You work directly with seasoned software architects who have built and scaled real production systems, not junior analysts."
      },
      {
        title: "Plain-Language Communication",
        description: "We translate complex technical trade-offs into clear commercial choices so board members can decide with confidence."
      }
    ],
    ctaHeadline: "Let's Align Your Technology Strategy",
    ctaText: "Planning a major software investment or concerned about technical debt and cloud costs? Schedule a confidential advisory consultation with our senior architects."
  },

  // 8. DIGITAL MARKETING
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    category: "Growth & Visibility",
    headline: "Data-Driven Marketing Engineered to Generate Qualified Customer Inquiries.",
    description:
      "Strategic digital marketing, technical search engine optimization (SEO), conversion rate optimization, and targeted acquisition campaigns designed to attract high-intent buyers and grow market share.",
    businessValue:
      "Positions your company in front of active buyers at the exact moment they need your services, turning your digital presence into a consistent, predictable lead engine.",
    extendedDescription:
      "Having a well-engineered website or application is only half the battle; if potential customers cannot find you when actively searching for your solutions, your business misses out on steady commercial growth. Alvantix provides technical, data-driven digital marketing designed specifically around high-value customer acquisition. We discard superficial vanity metrics like empty impressions and focus strictly on qualified inquiries, organic search rankings for high-intent keywords, and conversion rate optimization. By combining deep technical SEO fundamentals with persuasive copywriting and structured analytics, we build sustainable digital acquisition funnels that consistently grow your client pipeline.",
    iconName: "Megaphone",
    challenges: [
      {
        challenge: "Low Organic Google Search Rankings",
        impact:
          "When prospective clients search for your services, your competitors appear on page one while your company remains invisible.",
      },
      {
        challenge: "High Traffic with Zero Inquiries",
        impact:
          "Visitors land on your website and leave within seconds without submitting an inquiry because the messaging lacks clarity and conviction.",
      },
      {
        challenge: "Wasted Advertising Spend on Generic Clicks",
        impact:
          "Running paid ads without rigorous conversion tracking burns marketing budget on unqualified tire-kickers who never buy.",
      },
      {
        challenge: "Unclear Marketing Return on Investment (ROI)",
        impact:
          "Business owners pay monthly marketing retainers without any clear data linking their marketing spend to actual closed sales.",
      },
    ],
    offerings: [
      {
        title: "Technical & On-Page Search Engine Optimization (SEO)",
        whatItIs: "Deep architectural optimization ensuring search engines index, understand, and rank your website at the top.",
        whatItDoes: "Optimizes Core Web Vitals, implements Schema.org structured data, fixes canonical tags, and structures keyword-targeted content.",
        howItHelps: "Builds sustainable, compounding organic search traffic that delivers qualified inquiries month after month without ad spend.",
        whereUsed: "B2B service providers, industrial manufacturers, medical specialists, and local commercial services."
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        whatItIs: "Scientific refinement of landing page layouts, value propositions, and inquiry forms to maximize lead conversion.",
        whatItDoes: "Analyzes user scroll behavior, simplifies form fields, refines headlines, and places strategic proof points throughout pages.",
        howItHelps: "Can double your inbound customer inquiries from your existing web traffic without spending an extra dollar on advertising.",
        whereUsed: "Service inquiry pages, high-value quotation request forms, and product demo booking funnels."
      },
      {
        title: "High-Intent Search & Performance Campaigns",
        whatItIs: "Precision search advertising targeting buyers who are actively searching for your exact solutions right now.",
        whatItDoes: "Bids exclusively on high-intent commercial keywords, excludes wasteful search terms, and directs traffic to custom landing pages.",
        howItHelps: "Delivers an immediate influx of qualified sales leads while keeping cost-per-acquisition strictly controlled.",
        whereUsed: "Urgent commercial services, specialized consultants, competitive retail sectors, and high-ticket B2B solutions."
      },
      {
        title: "Content Marketing & Thought Leadership",
        whatItIs: "Authoritative, industry-specific articles, guides, and case studies that establish your company as the market leader.",
        whatItDoes: "Answers the exact questions high-value buyers research before making purchasing decisions.",
        howItHelps: "Shortens your sales cycle by educating prospects in advance and building unquestioned trust before the first phone call.",
        whereUsed: "Corporate consultancies, enterprise software providers, financial advisory, and legal firms."
      }
    ],
    industries: [
      {
        industry: "Professional & Legal Services",
        description: "Corporate law firms, accounting practices, and financial advisory.",
        useCase: "Target high-intent search terms (e.g., 'corporate tax advisory for tech startups') and convert visitors into consultation bookings."
      },
      {
        industry: "Healthcare & Specialized Clinics",
        description: "Cosmetic clinics, surgical centers, and diagnostic facilities.",
        useCase: "Local SEO dominance for geographic service keywords, patient education guides, and frictionless appointment request funnels."
      },
      {
        industry: "B2B Technology & Industrial Manufacturing",
        description: "Component makers, industrial machinery, and B2B SaaS.",
        useCase: "In-depth technical content marketing targeting procurement managers, spec sheets, and request-for-quote (RFQ) optimization."
      },
      {
        industry: "Real Estate & Commercial Property",
        description: "Commercial leasing, residential developers, and property funds.",
        useCase: "Geo-targeted acquisition campaigns for new property developments with high-converting virtual tour registration funnels."
      },
      {
        industry: "Education & Career Academies",
        description: "Professional coaching, executive education, and specialized academies.",
        useCase: "Student recruitment campaigns, program syllabus download funnels, and organic search optimization for career certification terms."
      },
      {
        industry: "Hospitality & Premium Lifestyle",
        description: "Boutique hotels, luxury event venues, and catering brands.",
        useCase: "Visual search optimization, direct corporate booking funnels, and seasonal event inquiry acquisition campaigns."
      }
    ],
    deliverables: {
      core: [
        "Comprehensive Technical SEO audit and full on-page optimization across all primary website pages",
        "Competitor keyword gap analysis identifying high-intent search terms with immediate commercial opportunity",
        "Conversion-optimized landing page structure with persuasive value propositions and streamlined forms",
        "Complete Google Analytics 4 (GA4) and Google Search Console setup with custom event conversion tracking",
        "Monthly executive marketing report detailing organic rank improvements, click volumes, and inquiries generated",
        "Transparent attribution tracking connecting inbound digital inquiries to actual commercial revenue"
      ],
      optional: [
        "Google Search & Display performance advertising campaign management with negative-keyword filtration",
        "Quarterly thought-leadership white paper and case study content production",
        "Local Google Business Profile optimization for multi-location commercial brands",
        "A/B split testing of headline copy and inquiry form placement"
      ]
    },
    process: [
      {
        step: 1,
        title: "Understanding Your Business",
        description: "We identify your most profitable service lines, ideal client profiles, average transaction values, and customer acquisition goals."
      },
      {
        step: 2,
        title: "Planning the Solution",
        description: "We perform deep keyword research, analyze competitor acquisition tactics, and design your digital acquisition funnel."
      },
      {
        step: 3,
        title: "Design & Development",
        description: "We optimize on-page technical factors, rewrite conversion-critical copy, and implement rigorous event-tracking tags."
      },
      {
        step: 4,
        title: "Testing & Review",
        description: "We test all tracking pixels, verify that form submissions record accurately in your CRM, and benchmark baseline metrics."
      },
      {
        step: 5,
        title: "Launch & Delivery",
        description: "We publish optimizations, launch campaigns, and monitor indexation in Google Search Console."
      },
      {
        step: 6,
        title: "Ongoing Support",
        description: "We analyze weekly performance data, eliminate underperforming keywords, and continuously optimize for lower cost per lead."
      }
    ],
    whyAlvantix: [
      {
        title: "Engineers Who Understand SEO",
        description: "Because we build software, we understand the technical code foundations of search engines better than traditional marketing agencies."
      },
      {
        title: "Inquiries Over Vanity Metrics",
        description: "We measure our success by qualified customer phone calls, form submissions, and revenue generated—not useless clicks or impressions."
      },
      {
        title: "100% Transparent Attribution",
        description: "You will always know exactly where every lead came from and what marketing channel drove that commercial opportunity."
      },
      {
        title: "Zero Long-Term Lock-In Contracts",
        description: "We earn your trust through verifiable monthly results, clear communication, and disciplined commercial execution."
      }
    ],
    ctaHeadline: "Let's Grow Your Inbound Inquiries",
    ctaText: "Ready to turn your website into a dependable engine for qualified business leads? Connect with our digital growth specialists today."
  }
];

// Populate legacy compatibility fields on export
servicesData.forEach((s) => {
  if (!s.features) {
    s.features = s.deliverables.core.slice(0, 5);
  }
  if (!s.businessApplications) {
    s.businessApplications = s.offerings.map((o) => `${o.title}: ${o.howItHelps}`);
  }
});