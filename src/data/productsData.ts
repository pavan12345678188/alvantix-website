import {
  Compass,
  ShoppingBag,
  Landmark,
  Activity,
  type LucideIcon,
} from "lucide-react";

export const productIconMap: Record<string, LucideIcon> = {
  Compass,
  ShoppingBag,
  Landmark,
  Activity,
};

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  headline: string;
  overview: string;
  problemSolved: string;
  targetAudience: string;
  developmentStatus: string;
  statusBadge: string;
  iconName: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  plannedRoadmap: {
    phase: string;
    title: string;
    description: string;
  }[];
  metaTitle: string;
  metaDescription: string;
}

export const productsData: ProductItem[] = [
  // 1. TEMPLEVERSE
  {
    id: "templeverse",
    name: "Templeverse",
    tagline: "Spiritual Tourism & Cultural Temple Discovery Platform",
    category: "Cultural Technology & Heritage Discovery",
    headline: "Connecting Global Devotees with Ancient Temple Heritage & Sacred Travel.",
    overview:
      "Templeverse is a digital platform in active research and prototyping under the Alvantix technology ecosystem. Designed to advance spiritual tourism and cultural preservation, Templeverse aims to connect devotees, travelers, and heritage enthusiasts worldwide with comprehensive temple histories, architectural documentation, pilgrimage itineraries, and interactive cultural discovery tools.",
    problemSolved:
      "Travelers, diaspora communities, and devotees often struggle with fragmented or unverified temple information, lack of reliable pilgrimage planning, and limited access to authenticated historical and cultural heritage documentation across sacred heritage sites.",
    targetAudience:
      "Cultural tourists, spiritual travelers, heritage trusts, pilgrims, religious research foundations, and local temple tourism operators.",
    developmentStatus: "In Research & Experience Prototyping (Not yet publicly launched)",
    statusBadge: "Active Research & Prototyping",
    iconName: "Landmark",
    capabilities: [
      {
        title: "Authenticated Temple Archival Directory",
        description:
          "Curated historical records, architectural styles, deity lineages, and regional festival calendars verified against cultural records.",
      },
      {
        title: "Pilgrimage Itinerary & Route Planning",
        description:
          "Intelligent trip planning tailored to spiritual circuits, local accommodations, darshan timings, and travel logistics.",
      },
      {
        title: "Interactive Cultural Heritage Exploration",
        description:
          "Digital spatial tours and multimedia guides allowing diaspora communities and remote visitors to experience ancient architectural wonders.",
      },
      {
        title: "Local Community & Tourism Ecosystem",
        description:
          "Bridging registered local guides, transport coordinators, and authorized temple service trusts into a trusted digital network.",
      },
    ],
    plannedRoadmap: [
      {
        phase: "Phase 1: Conceptualization & Archival Research",
        title: "Heritage Documentation & Data Modeling",
        description: "Engaging cultural historians and compiling structured records for foundational pilgrimage circuits across India.",
      },
      {
        phase: "Phase 2: Alpha Prototyping",
        title: "Platform Architecture & Discovery Interface",
        description: "Developing the digital directory prototype, search indexing, and initial mobile-friendly pilgrimage guide interface.",
      },
      {
        phase: "Phase 3: Beta Field Testing",
        title: "Pilot Regional Trials",
        description: "Conducting controlled field trials with local heritage travelers and refining community guide integrations.",
      },
    ],
    metaTitle: "Templeverse – Spiritual Tourism & Cultural Discovery by Alvantix",
    metaDescription: "Templeverse is a spiritual tourism and temple discovery platform under development at Alvantix, connecting travelers with authenticated cultural heritage.",
  },

  // 2. PRAMZO
  {
    id: "pramzo",
    name: "Pramzo",
    tagline: "Local Services & Gig-Worker Marketplace Platform",
    category: "Marketplace & Workforce Technology",
    headline: "Empowering Local Service Professionals and Connecting On-Demand Workforces.",
    overview:
      "Pramzo is an on-demand local services and gig-worker marketplace platform under active architecture at Alvantix. Built to bridge local households and businesses with verified neighborhood service professionals, Pramzo focuses on fair compensation, transparent service pricing, automated scheduling, and dependable workforce verification.",
    problemSolved:
      "Independent gig workers and local service technicians (electricians, appliance technicians, cleaners, painters) face unpredictable incomes and high intermediary commission fees, while customers struggle to find verified, punctual, and fairly priced local service providers.",
    targetAudience:
      "Independent trade professionals, local service technicians, gig-economy workers, homeowners, facility managers, and residential property communities.",
    developmentStatus: "In Architecture & Development (Not yet publicly launched)",
    statusBadge: "Active Architecture & Development",
    iconName: "ShoppingBag",
    capabilities: [
      {
        title: "Verified Professional Onboarding & KYC",
        description:
          "Structured identity verification, skill assessments, and customer rating integrity checks to build genuine local trust.",
      },
      {
        title: "Transparent Fixed & Variable Pricing",
        description:
          "Clear upfront rate cards eliminating predatory hidden fees for consumers while guaranteeing fair wage payouts to service workers.",
      },
      {
        title: "Smart Local Matching & Dispatch",
        description:
          "Location-based proximity matching ensuring rapid service turnaround times and minimizing worker transit travel costs.",
      },
      {
        title: "Integrated Escrow & Digital Invoicing",
        description:
          "Secure milestone-based payment processing and instant digital invoice generation upon verified customer sign-off.",
      },
    ],
    plannedRoadmap: [
      {
        phase: "Phase 1: Market & Regulatory Modeling",
        title: "Marketplace Economics & Verification Workflows",
        description: "Designing the worker verification criteria, unit economics, and customer dispute resolution framework.",
      },
      {
        phase: "Phase 2: Core Platform Development",
        title: "Dispatch Engine & Mobile Interfaces",
        description: "Engineering the client booking portal, service provider application, and location dispatching algorithms.",
      },
      {
        phase: "Phase 3: Geographic Pilot Launch",
        title: "Localized Tier-2/Tier-1 City Trial",
        description: "Executing closed beta trials in select pilot service categories with onboarded service technicians.",
      },
    ],
    metaTitle: "Pramzo – Local Services & Gig-Worker Marketplace by Alvantix",
    metaDescription: "Pramzo is a local services and gig-worker marketplace platform in development by Alvantix, designed to connect verified service professionals with consumers.",
  },

  // 3. PATHLAUNCHER
  {
    id: "pathlauncher",
    name: "PathLauncher",
    tagline: "AI-Assisted Student Career Guidance Engine",
    category: "EdTech & Career Intelligence",
    headline: "Intelligent Academic Trajectory Mapping and Career Discovery for Students.",
    overview:
      "PathLauncher is an AI-assisted career and academic guidance engine currently in active development and beta validation at Alvantix. By pairing psychometric aptitude mapping with real-time labor market trends and higher education admission data, PathLauncher assists secondary school students and graduates in making informed, confident educational and career decisions.",
    problemSolved:
      "Millions of students finishing secondary schooling (10th and 12th standards) experience acute confusion regarding course selection, higher education paths, and modern career realities, often making irreversible academic decisions based on peer pressure or obsolete advice.",
    targetAudience:
      "High school students, secondary school graduates, parents, academic counselors, school systems, and career advisory organizations.",
    developmentStatus: "In Active Development & Beta Validation (Currently in private testing)",
    statusBadge: "Active Development & Beta Validation",
    iconName: "Compass",
    capabilities: [
      {
        title: "Cognitive Aptitude & Interest Profiling",
        description:
          "Adaptive question flows evaluating student problem-solving styles, natural affinities, and academic strengths without stress.",
      },
      {
        title: "Dynamic Academic Roadmap Generation",
        description:
          "Personalized step-by-step educational journeys detailing requisite certifications, degree programs, entrance exams, and timeline milestones.",
      },
      {
        title: "Emerging Industry Skill Alignment",
        description:
          "Cross-referencing career pathways against real-world industry demand forecasts, AI adoption trends, and compensation outlooks.",
      },
      {
        title: "Institution & Curriculum Discovery",
        description:
          "Searchable databases of verified universities, polytechnics, vocational colleges, and scholarship opportunities tailored to student profiles.",
      },
    ],
    plannedRoadmap: [
      {
        phase: "Phase 1: Algorithmic Modeling",
        title: "Cognitive Profiling & Curriculum Mapping",
        description: "Developing multidimensional aptitude evaluation models and compiling higher education entrance criteria.",
      },
      {
        phase: "Phase 2: Private Beta Trials",
        title: "Pilot School Cohort Validation",
        description: "Administering guidance simulations across student test groups to benchmark recommendation accuracy and engagement.",
      },
      {
        phase: "Phase 3: Public Release",
        title: "Web & Mobile Deployment",
        description: "Launching the self-serve guidance portal with counselor dashboards and institutional collaboration portals.",
      },
    ],
    metaTitle: "PathLauncher – AI-Assisted Student Career Guidance by Alvantix",
    metaDescription: "PathLauncher is an AI-assisted student career guidance engine in development by Alvantix, helping learners explore academic paths and future careers.",
  },

  // 4. QURIXA
  {
    id: "qurixa",
    name: "Qurixa",
    tagline: "Healthcare & Hospital Management Technology System",
    category: "Healthcare Technology & Clinical Systems",
    headline: "Streamlining Clinical Workflows, Patient Care, and Outpatient Administration.",
    overview:
      "Qurixa is an intelligent healthcare and clinic management technology platform under active system architecture at Alvantix. Engineered to reduce administrative burnout in hospitals and diagnostic outpatient clinics, Qurixa centralizes appointment queues, electronic patient health records, pharmacy billing, and inter-departmental communication into a secure, intuitive digital hub.",
    problemSolved:
      "Medical practitioners and clinic administrators face severe administrative friction: fragmented paper records, chaotic outpatient waiting rooms, delayed lab test reconciliations, and complex billing workflows that distract from direct patient care.",
    targetAudience:
      "Independent doctors, outpatient polyclinics, diagnostic laboratories, nursing homes, and regional healthcare administration networks.",
    developmentStatus: "In Architecture & Clinical Workflow Planning (Not yet publicly launched)",
    statusBadge: "Architecture & Workflow Planning",
    iconName: "Activity",
    capabilities: [
      {
        title: "Frictionless Patient Scheduling & Smart Queuing",
        description:
          "Dynamic appointment allocation reducing waiting room crowding and keeping doctors informed of upcoming patient visit contexts.",
      },
      {
        title: "Secure Electronic Health Records (EHR)",
        description:
          "Encrypted, longitudinal patient medical histories, allergy tracking, digital prescriptions, and instant diagnostic report retrieval.",
      },
      {
        title: "Integrated Pharmacy & Diagnostic Billing",
        description:
          "Automated itemized billing connecting doctor prescriptions directly to internal dispensaries and lab testing departments.",
      },
      {
        title: "HIPAA & Data Privacy Standards",
        description:
          "Strict end-to-end encryption, role-based practitioner access controls, and comprehensive compliance audit trails for all medical records.",
      },
    ],
    plannedRoadmap: [
      {
        phase: "Phase 1: Clinical Workflow Audits",
        title: "Medical Compliance & Architecture Design",
        description: "Shadowing healthcare staff to document compliance parameters, patient triage bottlenecks, and record standards.",
      },
      {
        phase: "Phase 2: Core EHR & Scheduling Engine",
        title: "Secure Clinic Portal Build",
        description: "Engineering the encrypted database architecture, doctor charting interface, and automated patient appointment reminders.",
      },
      {
        phase: "Phase 3: Clinical Beta Pilot",
        title: "Outpatient Clinic Deployment",
        description: "Deploying closed trial runs in select diagnostic clinics to refine usability and data reliability.",
      },
    ],
    metaTitle: "Qurixa – Healthcare & Hospital Management Technology by Alvantix",
    metaDescription: "Qurixa is a healthcare and hospital management technology platform under development at Alvantix, streamlining outpatient operations and patient care.",
  },
];
