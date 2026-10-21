import {
  Sparkles,
  Globe,
  Layers,
  Megaphone,
  Palette,
  Zap,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  extendedDescription: string;
  iconName: string;
  features: string[];
  process: {
    title: string;
    description: string;
  }[];
  whyAlvantix: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-solutions",
    name: "AI Solutions",
    description:
      "Build intelligent AI-powered solutions that automate workflows, improve decision-making, and create measurable business value.",
    extendedDescription:
      "We design and develop practical AI solutions around your business goals, workflows, and data. From AI assistants and conversational systems to intelligent automation and custom AI applications, we focus on solving real operational problems rather than adding AI for the sake of it. Each solution is designed with scalability, security, reliability, and measurable outcomes in mind.",
    iconName: "Sparkles",
    features: [
      "Custom AI Solutions",
      "AI Assistants & Chatbots",
      "Intelligent Automation",
      "AI Integrations",
      "Predictive & Intelligent Systems",
    ],
    process: [
      {
        title: "Discovery & Strategy",
        description:
          "We understand your business, identify suitable AI opportunities, and define clear objectives.",
      },
      {
        title: "Solution Architecture",
        description:
          "We design the AI workflow, data requirements, integrations, and technical architecture.",
      },
      {
        title: "Build & Test",
        description:
          "We develop the solution and test it against realistic business scenarios and edge cases.",
      },
      {
        title: "Deploy & Improve",
        description:
          "We launch the system with monitoring and continuously improve its performance as it is used.",
      },
    ],
    whyAlvantix: [
      "AI designed around your actual business requirements",
      "Practical solutions focused on measurable business outcomes",
      "Scalable architecture designed for future growth",
      "Continuous improvement instead of a one-time AI deployment",
    ],
  },

  {
    id: "website-development",
    name: "Website Development",
    description:
      "Design and develop modern, responsive, high-performance websites that strengthen your digital presence and help your business grow.",
    extendedDescription:
      "We build modern websites that combine strong visual design, responsive experiences, performance, accessibility, and SEO fundamentals. From business websites and corporate platforms to landing pages and e-commerce experiences, every website is structured to represent your brand professionally while providing a reliable foundation for future growth.",
    iconName: "Globe",
    features: [
      "Business & Corporate Websites",
      "Responsive Web Design",
      "E-commerce Websites",
      "SEO-Friendly Architecture",
      "Performance & Security",
    ],
    process: [
      {
        title: "Strategy & Planning",
        description:
          "We understand your goals, audience, content requirements, and website structure.",
      },
      {
        title: "UI & Experience Design",
        description:
          "We create a clear and engaging interface that reflects your brand across devices.",
      },
      {
        title: "Development",
        description:
          "We build the website with responsive layouts, performance, accessibility, and SEO fundamentals.",
      },
      {
        title: "Testing & Launch",
        description:
          "We test the experience across devices and browsers before deployment and provide ongoing support.",
      },
    ],
    whyAlvantix: [
      "Performance-focused websites built for real users",
      "SEO and accessibility considered from the beginning",
      "Responsive experiences across desktop, tablet, and mobile",
      "Scalable foundations that can evolve with your business",
    ],
  },

  {
    id: "application-development",
    name: "Application Development",
    description:
      "Build reliable, scalable applications that turn business ideas and workflows into powerful digital products.",
    extendedDescription:
      "We develop custom applications for businesses, startups, and organizations across web, mobile, and desktop platforms. Whether you need an internal business application, customer-facing product, SaaS platform, or mobile experience, we focus on creating secure, maintainable, and scalable software that can evolve with your requirements.",
    iconName: "Layers",
    features: [
      "Web Applications",
      "Mobile Applications",
      "Desktop Applications",
      "SaaS & Digital Products",
      "Custom Business Applications",
    ],
    process: [
      {
        title: "Requirements & Planning",
        description:
          "We translate your idea or business workflow into clear features, user roles, and technical requirements.",
      },
      {
        title: "Architecture & Design",
        description:
          "We define the application architecture, data structures, APIs, and user experience.",
      },
      {
        title: "Development",
        description:
          "We build the application iteratively with regular testing and progress visibility.",
      },
      {
        title: "Testing & Deployment",
        description:
          "We validate functionality, security, performance, and usability before production deployment.",
      },
    ],
    whyAlvantix: [
      "One development approach across web, mobile, and desktop needs",
      "Architecture designed for maintainability and future expansion",
      "Security and performance considered throughout development",
      "Built around real business workflows rather than generic templates",
    ],
  },

  {
    id: "digital-marketing",
    name: "Digital Marketing",
    description:
      "Grow your online presence and reach the right audience through data-driven digital marketing strategies.",
    extendedDescription:
      "We create digital marketing strategies that connect your brand with the audiences that matter most. From search engine optimization and social media to paid advertising and content strategy, we focus on measurable outcomes such as visibility, qualified traffic, leads, and conversions.",
    iconName: "Megaphone",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Paid Advertising",
      "Content Strategy",
      "Performance & Growth Marketing",
    ],
    process: [
      {
        title: "Audit & Research",
        description:
          "We analyze your current digital presence, audience, competitors, and growth opportunities.",
      },
      {
        title: "Strategy",
        description:
          "We develop a channel strategy based on your objectives, audience, and available resources.",
      },
      {
        title: "Campaign Execution",
        description:
          "We execute content, SEO, social, and paid campaigns across the selected channels.",
      },
      {
        title: "Measure & Optimize",
        description:
          "We analyze performance and continuously refine campaigns based on meaningful results.",
      },
    ],
    whyAlvantix: [
      "Strategies built around measurable business objectives",
      "Data-informed decisions rather than vanity metrics",
      "Integrated approach across search, social, content, and paid channels",
      "Continuous optimization as campaigns evolve",
    ],
  },

  {
    id: "business-automation-analytics",
    name: "Business Automation & Analytics",
    description:
      "Turn business data into actionable insights while automating repetitive workflows and improving operational efficiency.",
    extendedDescription:
      "We combine business analytics and automation to help organizations understand what is happening across their operations and act on that information faster. We build dashboards, reporting systems, analytical workflows, and business process automations that reduce manual work, connect systems, and give decision-makers clearer visibility into performance.",
    iconName: "Zap",
    features: [
      "Business & Data Analytics",
      "Interactive Dashboards",
      "Business Intelligence & Reporting",
      "Workflow Automation",
      "System & API Integrations",
      "Process Optimization",
    ],
    process: [
      {
        title: "Process & Data Discovery",
        description:
          "We map your business processes, data sources, repetitive tasks, and reporting requirements.",
      },
      {
        title: "Solution Design",
        description:
          "We identify opportunities for automation and design the dashboards, workflows, and integrations needed.",
      },
      {
        title: "Build & Integrate",
        description:
          "We develop automated workflows, analytics pipelines, dashboards, and system integrations.",
      },
      {
        title: "Monitor & Optimize",
        description:
          "We measure performance, resolve issues, and continuously improve the solution as your operations grow.",
      },
    ],
    whyAlvantix: [
      "Automation focused on removing repetitive operational work",
      "Dashboards designed around decisions rather than data overload",
      "Integration with existing business systems and workflows",
      "Analytics and automation combined into one connected solution",
    ],
  },

  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    description:
      "Design intuitive, engaging, and user-centered digital experiences that make products easier and more enjoyable to use.",
    extendedDescription:
      "We design digital experiences that balance user needs, business objectives, and visual quality. From early user flows and wireframes to high-fidelity interfaces and interactive prototypes, we create structured design systems that can move smoothly from design into development.",
    iconName: "Palette",
    features: [
      "User-Centered UX Design",
      "User Flows & Wireframes",
      "Interactive Prototypes",
      "Modern UI Design Systems",
      "Responsive Digital Experiences",
    ],
    process: [
      {
        title: "Research & Discovery",
        description:
          "We understand your users, business goals, existing product, and key experience challenges.",
      },
      {
        title: "Information Architecture",
        description:
          "We organize content, user flows, and core interactions to create a clear product experience.",
      },
      {
        title: "Visual Design",
        description:
          "We create the interface, visual language, and reusable design system across relevant screens.",
      },
      {
        title: "Prototype & Handoff",
        description:
          "We create interactive prototypes and provide development-ready design specifications.",
      },
    ],
    whyAlvantix: [
      "Design decisions grounded in user needs and business goals",
      "Reusable systems that maintain consistency as products grow",
      "Responsive experiences designed across screen sizes",
      "Design-to-development handoff built for smooth implementation",
    ],
  },
];

export const iconMap: Record<string, any> = {
  Sparkles,
  Globe,
  Layers,
  Megaphone,
  Palette,
  Zap,
};