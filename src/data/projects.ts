export const projects = [
  {
    _id: "660f1a2b3c4d5e6f7a8b9c07",
    slug: "ghl-coaches-consultation-booking-system",
    title: "GoHighLevel Automation System for Coaches & Consultants",
    category: "automation",
    summary:
      "Complete GoHighLevel system that captures leads, nurtures them, books appointments, and automates follow-ups with AI and workflows.",
    thumbnail: "/images/projects/business-consultations-banner.png",
    videoUrl: "https://www.youtube.com/embed/n4QYkmh1Ryo?si=WoN7unqP62dddREn",
    isVideoMobileRecording: false,
    challenge:
      "Coaches and consultants were losing leads due to slow responses, unstructured follow-ups, and lack of a centralized system to manage inquiries, bookings, and conversations efficiently.",
    solution:
      "Built a complete GoHighLevel automation system with a high-converting funnel, structured CRM pipeline, automated follow-ups, booking system, and AI chat assistant to capture, nurture, and convert leads seamlessly.",
    features: [
      "High-converting funnel (Lead capture → Booking flow)",
      "Custom CRM pipeline for lead tracking (New Lead → Closed)",
      "Automated email follow-ups and reminder sequences",
      "Integrated booking system with calendar scheduling",
      "AI chat assistant for website and Facebook message handling",
      "Centralized Conversations inbox for lead communication",
      "Basic tracking system for leads, bookings, and conversions",
    ],
    result:
      "The system enabled automated lead capture, consistent follow-ups, and streamlined booking processes, helping increase conversion rates while eliminating manual lead chasing and missed opportunities.",
    meta: {
      type: "CRM Automation",
      industry: "Coaching & Consulting",
      timeline: "1–2 weeks",
    },
    tools: [
      "GoHighLevel",
      "Workflows & Automations",
      "CRM Pipeline",
      "Calendar Booking",
      "AI Chat Widget",
      "Facebook Integration",
      "Email Automation",
    ],
  },
  {
    _id: "660f1a2b3c4d5e6f7a8b9c06",
    slug: "ai-voice-agent-booking-follow-up",
    title: "AI Voice Agent with Booking, Lead Capture & Follow-up",
    category: "ai-agent",
    summary:
      "AI-powered voice automation system that answers customer queries, captures leads, books appointments, and triggers follow-up workflows automatically.",
    thumbnail: "/images/projects/phychographic-ai-agent-cover.png",
    videoUrl: "https://www.youtube.com/embed/EvwlgXQ5f-s?si=K8LSwOmhNQNIpn0U",
    isVideoMobileRecording: false,
    challenge:
      "Businesses were losing leads and appointments because they could not respond to inquiries instantly, manage bookings efficiently, or follow up with prospects at the right time.",
    solution:
      "Developed an AI-powered voice agent system that handles customer conversations naturally, captures lead information, checks calendar availability in real time, books appointments automatically, and triggers confirmations, reminders, and follow-up workflows.",
    features: [
      "AI voice agent for real-time customer conversations",
      "Instant lead capture with name, email, and interest details",
      "Real-time appointment booking with Google Calendar",
      "Support for rescheduling and cancellations",
      "Automatic storage of lead and booking data in Google Sheets or CRM",
      "Confirmation and reminder email automation",
      "Follow-up workflow triggers for better conversion",
    ],
    result:
      "The system helped businesses automate booking operations 24/7, reduce missed opportunities, streamline scheduling, and improve conversion rates through faster response and seamless customer experience.",
    meta: {
      type: "AI Automation",
      industry: "Appointment Booking",
      timeline: "1–2 weeks",
    },
    tools: [
      "ElevenLabs",
      "n8n",
      "Google Calendar",
      "Gmail",
      "Google Sheets",
      "Webhooks",
      "API Integrations",
      "AI",
    ],
  },
  {
    _id: "660f1a2b3c4d5e6f7a8b9c07",
    slug: "social-media-posting-automation-system",
    title: "Social Media Posting Automation System",
    category: "automation",
    summary:
      "AI-powered social media automation system that prepares content, generates images, publishes posts across multiple platforms, updates tracking sheets, and sends low-content alerts automatically.",
    thumbnail: "/images/projects/social_media_post_with_content_creation.png",
    videoUrl: "https://www.youtube.com/embed/mPHYl7xkuFk?si=bbyGGx7jiWy3cwa7",
    isVideoMobileRecording: false,
    challenge:
      "Businesses were spending too much time managing social media manually, struggling with inconsistent posting, duplicate content, messy tracking, and delays in preparing new posts when the content pipeline ran low.",
    solution:
      "Developed an n8n-powered social media automation system that reads unpublished content from Google Sheets, uses AI to refine post copy, generates images automatically, publishes content across LinkedIn, Facebook, Instagram, and other platforms, then updates the sheet with publish status and timestamp while preventing duplicate posting. A second workflow monitors remaining unpublished posts and sends Telegram alerts when content drops below a defined limit.",
    features: [
      "Automatic content pickup from Google Sheets",
      "AI-generated or AI-refined post captions",
      "Automatic image generation for each post",
      "Multi-platform publishing from one workflow",
      "Publish status and timestamp update in Google Sheets",
      "Duplicate-post prevention logic",
      "Telegram alerts for low unpublished content",
      "Centralized content tracking and workflow automation",
    ],
    result:
      "The system helped streamline social media operations by reducing manual work, improving posting consistency, centralizing content management, minimizing publishing errors, and ensuring teams never ran out of scheduled content without warning.",
    meta: {
      type: "Social Media Automation",
      industry: "Marketing Automation",
      timeline: "1–2 weeks",
    },
    tools: [
      "n8n",
      "OpenAI",
      "AI Image Generation",
      "LinkedIn API",
      "Facebook API",
      "Instagram API",
      "Telegram",
      "Google Sheets",
    ],
  },
  {
    _id: "660f1a2b3c4d5e6f7a8b9c07",
    slug: "ai-lead-generation-outreach",
    title: "AI Lead Generation, Data Enrichment & Automated Outreach",
    category: "automation",
    summary:
      "Automated lead generation and outreach system that collects business leads, enriches data, generates personalized proposals with AI, and sends outreach emails automatically.",
    thumbnail: "/images/projects/client-out-reached-cover.png",
    videoUrl: "https://www.youtube.com/embed/UQRGxyv3OR0?si=eAoJLX452pbi13wp",
    isVideoMobileRecording: false,
    challenge:
      "Manual lead generation and outreach were slowing business growth, consuming valuable time, and making it difficult to scale prospecting and proposal sending effectively.",
    solution:
      "Built an end-to-end outreach automation system that collects leads from Google Maps, cleans and structures the data, filters prospects based on email availability, stores them in a database or CRM, uses AI to generate personalized proposals, and sends automated outreach emails.",
    features: [
      "Automated lead collection from Google Maps",
      "Lead data cleaning and structuring workflow",
      "Filtering based on email availability",
      "Storage in Google Sheets or CRM",
      "AI-generated personalized proposals",
      "Automated outreach email sending",
      "Scalable outbound workflow with minimal manual work",
    ],
    result:
      "The system enabled businesses to generate leads continuously, scale outreach without additional hiring, save hours of manual effort, improve lead targeting, and increase response rates with personalized communication.",
    meta: {
      type: "AI Automation",
      industry: "Lead Generation",
      timeline: "1–2 weeks",
    },
    tools: [
      "n8n",
      "Google Maps API",
      "AI",
      "Gmail",
      "Workflow Automation",
      "Structured Data Parsing",
      "Google Sheets",
      "CRM",
    ],
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
    _id: "660f1a2b3c4d5e6f7a8b9c05",
    slug: "messenger-ai-agent",
    title: "Facebook Messenger AI Agent - Customer Support & Lead",
    category: "ai-agent",
    summary:
      "AI-powered Messenger bot that handles customer inquiries, engages users in real-time conversations, and qualifies leads automatically.",
    thumbnail: "/images/projects/messenger-ai-agent.png",
    // videoUrl:
    //   "https://www.youtube.com/embed/_cWr288uXpQ?si=AHNt9Kgmd1KY6slI?autoplay=1",
    videoUrl:
      "https://res.cloudinary.com/dpebdrnjf/video/upload/q_auto/f_auto/v1775137895/AI_Facebook_Messenger_Automation_Chatbot_-_final_vkptry.mp4",
    isVideoMobileRecording: true,
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
    _id: "660f1a2b3c4d5e6f7a8b9c06",
    slug: "website-ai-chat-agent",
    title: "AI Website Chat Agent - Lead Capture & Customer Support",
    category: "ai-agent",
    summary:
      "Smart website chat agent that engages visitors, answers questions, and captures qualified leads through real-time AI conversations.",
    thumbnail: "/images/projects/website-ai-agent.png",
    videoUrl:
      "https://res.cloudinary.com/dpebdrnjf/video/upload/q_auto/f_auto/v1775137985/AI_Chat_Agent_for_Website_Leads_-_final_jkb4yn.mp4",
    isVideoMobileRecording: true,
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
    _id: "660f1a2b3c4d5e6f7a8b9c04",
    slug: "law-firm",
    title: "PrimeLaw - Professional Legal Services & Law Firm Website",
    category: "website",
    summary:
      "Professional law firm website built to establish trust, explain legal services clearly, and drive consultation bookings.",
    thumbnail: "/images/projects/law-firm.png",
    videoUrl:
      "https://res.cloudinary.com/dpebdrnjf/video/upload/q_auto/f_auto/v1775137481/law-firm-demo_cfjm0k.mp4",
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
