export const projects = [
  {
    _id: "660f1a2b3c4d5e6f7a8b9c05",
    slug: "messenger-ai-agent",
    title: "Facebook Messenger AI Agent - Customer Support & Lead",
    category: "ai-agent",
    summary:
      "AI-powered Messenger bot that handles customer inquiries, engages users in real-time conversations, and qualifies leads automatically.",
    thumbnail: "/images/projects/messenger-ai-agent.png",
    videoUrl:
      "https://www.youtube.com/embed/_cWr288uXpQ?si=AHNt9Kgmd1KY6slI?autoplay=1",
    challenge:
      "Businesses were struggling to respond instantly to customer inquiries on Facebook, leading to missed opportunities, slow response times, and unqualified leads cluttering their pipeline.",
    solution:
      "Developed an AI-driven Messenger automation system that understands user intent, responds conversationally, and guides users through a structured flow to capture key information and qualify leads automatically.",
    features: [
      "Real-time automated responses to customer inquiries",
      "Intent-based conversation handling using AI",
      "Lead qualification through guided chat flow",
      "Automated collection of WhatsApp numbers and requirements",
      "Seamless lead handoff to team for follow-up",
    ],
    result:
      "The system enabled businesses to respond instantly 24/7, significantly increased lead capture rates, and improved conversion by turning conversations into qualified sales opportunities.",
    meta: {
      type: "AI Automation",
      industry: "Customer Support",
      timeline: "1–2 weeks",
    },
    tools: ["n8n", "AI Automation", "Graph API", "Workflow Automation", "AI"],
  },
  {
    _id: "660f1a2b3c4d5e6f7a8b9c02",
    slug: "gadgetoria-hub",
    title: "Gadgetoria Hub - Full-Stack E-commerce Platform",
    category: "website",
    summary:
      "Scalable online store with a full customer shopping experience and a powerful admin dashboard for store operations.",
    thumbnail: "/images/projects/gadgetoria.png",
    // videoUrl: "",
    challenge:
      "The goal was to build a complete e-commerce system that handled both customer-facing shopping flows and complex admin operations such as product, category, order, and review management.",
    solution:
      "Built a full-stack commerce platform with a modern storefront, advanced product discovery tools, secure authentication, and a dashboard for managing products, orders, categories, users, and analytics in one streamlined system.",
    features: [
      "Responsive storefront with search, cart, and wishlist",
      "Advanced filtering, sorting, and paginated product browsing",
      "Product details with reviews and recommendations",
      "Coupon-enabled checkout and order flow",
      "Admin dashboard with charts, CRUD tools, and order management",
    ],
    result:
      "The project delivered a production-style shopping experience backed by efficient store management tools, making it suitable for real-world e-commerce operations and future scaling.",
    meta: {
      type: "E-commerce Platform",
      industry: "Retail & Online Shopping",
      timeline: "5 weeks",
    },
    tools: ["Next.js", "Shadcn UI", "Node.js", "Express.js", "MongoDB"],
    liveUrl: "https://gadgetoria.vercel.app",
  },
  {
    _id: "660f1a2b3c4d5e6f7a8b9c06",
    slug: "website-ai-chat-agent",
    title: "AI Website Chat Agent - Lead Capture & Customer Support",
    category: "ai-agent",
    summary:
      "Smart website chat agent that engages visitors, answers questions, and captures qualified leads through real-time AI conversations.",
    thumbnail: "/images/projects/website-ai-agent.png",
    videoUrl:
      "https://www.youtube.com/embed/MXdnaoT2kw4?si=c_DuV4eeBkaQ62KQ?autoplay=1",
    challenge:
      "Websites often fail to engage visitors instantly, resulting in lost leads and missed opportunities due to delayed responses and lack of qualification systems.",
    solution:
      "Built an AI-powered chat agent that interacts with visitors in real time, understands their intent, answers queries using a knowledge base, and guides users through a structured flow to capture and qualify leads automatically.",
    features: [
      "Real-time AI chat for instant visitor engagement",
      "Knowledge base–driven responses for service inquiries",
      "Intent detection and smart conversation flow",
      "Automated lead capture (WhatsApp number, requirements)",
      "Instant lead notification and storage system",
    ],
    result:
      "The system improved response speed, filtered high-quality prospects, and increased conversion rates by turning website visitors into actionable leads around the clock.",
    meta: {
      type: "AI Automation",
      industry: "Customer Support",
      timeline: "1–2 weeks",
    },
    tools: ["n8n", "AI Automation", "Workflow", "Custom Chat Integration"],
  },
  {
    _id: "660f1a2b3c4d5e6f7a8b9c01",
    slug: "agency-cope",
    title: "Agency Cope - Creative Digital Agency Website",
    category: "website",
    summary:
      "Modern agency website built to showcase services, portfolio, team, and trust-building content with polished interactions.",
    thumbnail: "/images/projects/agency-cope.png",
    // videoUrl: "https://www.youtube.com/embed/A2NqIew9Pzo?autoplay=1",
    challenge:
      "The agency needed a strong digital presence that could present its services, team, projects, and brand credibility in a modern, conversion-focused way while keeping the experience smooth across devices.",
    solution:
      "Developed a responsive React-based agency website with structured service pages, project showcases, testimonial sections, interactive inquiry flows, and motion-driven UI to create a premium and engaging browsing experience.",
    features: [
      "Modern homepage with service, team, and testimonial sections",
      "Portfolio page with category-based project filtering",
      "Service inquiry flow with Email.js integration",
      "Meeting booking integration via cal.com",
      "Smooth page interactions with Framer Motion",
    ],
    result:
      "The final platform gave the agency a more professional online identity, improved how services and projects were presented, and created clearer paths for potential clients to get in touch.",
    meta: {
      type: "Agency Website",
      industry: "Digital Agency",
      timeline: "3 weeks",
    },
    tools: ["React", "Tailwind CSS", "Framer Motion", "Email.js", "Cal.com"],
    liveUrl: "https://agencycope.com",
  },
  {
    _id: "660f1a2b3c4d5e6f7a8b9c03",
    slug: "aquavista-resort",
    title: "AquaVista Resort - Luxury Resort & Investment Website",
    category: "website",
    summary:
      "High-end resort website designed to present lifestyle value, premium facilities, and ownership-driven investment opportunities.",
    thumbnail: "/images/projects/aquavista.png",
    // videoUrl: "",
    challenge:
      "The client needed a visually premium website that could balance luxury resort branding with persuasive investment messaging, while helping potential buyers understand facilities, ownership plans, and long-term value.",
    solution:
      "Created a polished multi-page website that highlights the resort’s riverside location, luxury amenities, rooftop experience, ownership plans, and inquiry paths through a conversion-focused content structure.",
    features: [
      "Luxury landing page with investment-focused messaging",
      "Dedicated pages for facilities, rooftop, gallery, and ownership plans",
      "Lead-generation sections placed across key pages",
      "Visual storytelling for lifestyle and location value",
      "Contact and consultation flow with map-based location access",
    ],
    result:
      "The platform strengthened the project’s premium brand image and helped position the resort as both a lifestyle destination and a compelling investment opportunity.",
    meta: {
      type: "Resort Website",
      industry: "Hospitality & Real Estate",
      timeline: "4 weeks",
    },
    tools: ["Next.js", "Shadcn UI", "Tailwind CSS", "Express.js", "MongoDB"],
    liveUrl: "https://aquavistabd.com",
  },
  {
    _id: "660f1a2b3c4d5e6f7a8b9c04",
    slug: "law-firm",
    title: "PrimeLaw - Professional Legal Services & Law Firm Website",
    category: "website",
    summary:
      "Professional law firm website built to establish trust, explain legal services clearly, and drive consultation bookings.",
    thumbnail: "/images/projects/law-firm.png",
    // videoUrl: "",
    challenge:
      "The firm needed a credible, premium-looking website that could communicate legal expertise, present services in a clear structure, and guide visitors toward booking consultations with confidence.",
    solution:
      "Designed and developed a legal services platform with dedicated service pages, case study content, pricing presentation, consultation-focused CTAs, and trust-building sections throughout the user journey.",
    features: [
      "Professional homepage with legal service highlights and testimonials",
      "Structured practice area and service detail pages",
      "Case study listing and individual case presentation",
      "Transparent pricing and package comparison section",
      "Consultation-focused contact and appointment flow",
    ],
    result:
      "The finished website gave the firm a stronger digital presence, made its service offering easier to understand, and improved the overall path from visitor interest to inquiry.",
    meta: {
      type: "Business Website",
      industry: "Legal Services",
      timeline: "3 weeks",
    },
    tools: ["React", "Shadcn UI", "Tailwind CSS", "Cal.com"],
    liveUrl: "https://law-firm-see.vercel.app",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsBySlugs(slugs: string[]) {
  const slugSet = new Set(slugs);

  return projects.filter((project) => slugSet.has(project.slug));
}

export function getProjectsByCategory(category: string, excludeSlug: string) {
  return projects.filter(
    (project) => project.category === category && project.slug !== excludeSlug,
  );
}
