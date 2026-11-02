import { Compass, BriefcaseBusiness, Landmark, HeartPulse } from "lucide-react";

export const productsData = [
  {
    id: "templeverse",
    name: "Templeverse",
    category: "Temple Discovery & Spiritual Travel",
    headline: "Discover Temples. Learn Their Stories. Plan Your Visit.",
    description: "Templeverse is a digital platform being developed to make temple discovery and spiritual travel information easier to access. It aims to bring useful temple details, cultural information and travel planning together in one place.",
    audience: "Pilgrims, families, spiritual travellers, tourists and people interested in temple history and culture.",
    status: "In Development",
    icon: Landmark,
    features: [
      "Explore temples and access useful visitor information.",
      "Learn about temple history, traditions and cultural significance.",
      "Find location details and plan routes for temple visits.",
      "Check available darshan, festival and visitor information where verified.",
      "Discover nearby travel and visitor facilities where information is available."
    ],
    useCases: ["Planning a visit to a temple or pilgrimage destination", "Discovering temples and their history", "Organising visits to multiple temples"],
    note: "Features and information availability will depend on verified sources and the product's development stage."
  },
  {
    id: "pramzo",
    name: "Pramzo",
    category: "Local Services & Gig Work",
    headline: "Connecting People with Local Service Opportunities.",
    description: "Pramzo is a planned digital platform intended to make it easier for people to discover local service opportunities and connect customers with nearby service providers and gig workers.",
    audience: "Customers looking for local services, independent workers and local service businesses.",
    status: "Planned",
    icon: BriefcaseBusiness,
    features: [
      "Discover local service providers and available services.",
      "Help independent workers present their services and availability.",
      "Support service requests and booking workflows.",
      "Provide clear service and provider information.",
      "Explore ratings, communication and payment features as the product develops."
    ],
    useCases: ["Finding a nearby service professional", "Helping gig workers reach potential customers", "Managing local service requests"],
    note: "Pramzo is being planned. Final features, service categories and availability will be confirmed during product development."
  },
  {
    id: "pathlauncher",
    name: "PathLauncher",
    category: "Education & Career Guidance",
    headline: "Helping Students Make Informed Career Choices.",
    description: "PathLauncher is an education and career guidance platform being developed to help students understand their interests, explore study options and make more informed decisions about their next steps after school.",
    audience: "Students after 10th and 12th, college students, parents and educational institutions.",
    status: "In Development",
    icon: Compass,
    features: [
      "Explore career options based on student interests and goals.",
      "Understand courses and possible education pathways.",
      "Access guidance for choosing subjects and study options.",
      "Explore skills to develop for different career directions.",
      "Build a step-by-step learning and career plan."
    ],
    useCases: ["A student choosing a path after 10th", "A student comparing courses after 12th", "A learner planning skills for a future career"],
    note: "Guidance is intended to support student decision-making; it does not replace qualified academic or career counselling."
  },
  {
    id: "qurixa",
    name: "Qurixa",
    category: "Healthcare Technology",
    headline: "Exploring Better Digital Experiences for Healthcare.",
    description: "Qurixa is a future Alvantix product concept in the healthcare technology space. Its direction is to explore practical digital tools that can help healthcare providers organise everyday information and administrative workflows.",
    audience: "Healthcare providers, clinics, hospitals and healthcare administration teams.",
    status: "Future Concept",
    icon: HeartPulse,
    features: [
      "Explore simpler ways to manage administrative information.",
      "Consider appointment and patient coordination workflows.",
      "Explore useful information views for healthcare teams.",
      "Identify opportunities to reduce repetitive administrative work."
    ],
    useCases: ["Reviewing clinic and hospital administrative workflows", "Exploring appointment coordination needs", "Planning practical digital improvements for healthcare teams"],
    note: "Qurixa is at the concept stage. Its final scope and features have not yet been confirmed. It is not a clinical diagnosis or medical decision-making product."
  }
];
