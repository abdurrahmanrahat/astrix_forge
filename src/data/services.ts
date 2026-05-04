import { TService } from "@/types/service.type";
import { Bot, Globe, Mic } from "lucide-react";

export const services: TService[] = [
  {
    slug: "ai-automation-systems",
    icon: Bot,
    title: "AI Automation Systems",
    shortDescription:
      "End-to-end workflow automation that saves 30-50 hours per week.",
    description:
      "I build intelligent automation systems using n8n, GoHighLevel, and custom AI integrations. Your tools, data, and processes are connected into a single system that runs without constant oversight.",
    features: [
      "CRM workflows that actually work- no more leads falling through cracks",
      "Email sequences triggered at the right time, every time",
      "Client onboarding fully automated end-to-end",
      "Zapier, Make & n8n integrations connected seamlessly",
      "Custom API integrations between any tools you use",
      "Real-time dashboards to monitor everything",
    ],
    whoItsFor: [
      "Businesses spending hours on repetitive tasks",
      "Teams manually moving data between tools",
      "Companies losing leads due to slow follow-up",
      "Founders who want to scale without hiring more people",
    ],
    problemsSolved: [
      "Manual data entry across multiple platforms",
      "Slow or missed lead follow-ups",
      "Disconnected tools and siloed data",
      "Inconsistent customer communication",
      "Time wasted on tasks that don't need a human",
    ],
    solutionBreakdown: [
      "Custom n8n workflows tailored to your business processes",
      "GoHighLevel pipeline automation for sales and marketing",
      "AI-powered decision logic within workflows",
      "Multi-platform integrations (CRM, email, calendar, databases)",
      "Real-time notifications and error handling",
    ],
    outcomes: [
      "80%+ reduction in manual task time",
      "Instant lead response and follow-up",
      "Seamless data flow across all your tools",
      "Scalable operations without additional headcount",
    ],
    faq: [
      {
        question: "How long does it take to build an automation system?",
        answer:
          "Most systems are designed, built, and deployed within 2-4 weeks depending on complexity.",
      },
      {
        question: "Can you integrate with my existing tools?",
        answer:
          "Yes. I work with most modern SaaS tools, CRMs, databases, and APIs to create seamless integrations.",
      },
      {
        question: "What happens if something breaks?",
        answer:
          "All automations include error handling, retry logic, and monitoring so issues are caught and resolved quickly.",
      },
    ],
    tools: [
      "n8n",
      "GoHighLevel",
      "API Integration",
      "Workflows",
      "Zapier",
      "Make",
    ],
    relatedProjects: [
      "ghl-coaches-automation-system",
      "whatsapp-ai-agent-with-appointment-booking",
      "ghl-real-estate-lead-automation-system",
      "social-media-posting-automation-system",
      "ai-lead-generation-outreach",
    ], // slugs
  },
  {
    slug: "ai-agents-voice-and-llm",
    icon: Mic,
    title: "AI Agents - Voice & LLM",
    shortDescription: "24/7 intelligent operations without adding headcount.",
    description:
      "Custom AI agents for customer support, lead qualification, follow-up, and internal operations. Built with LangChain and modern LLM APIs, these agents handle inquiries around the clock.",
    features: [
      "AI chatbots handling customer inquiries 24/7",
      "Voice agents for phone-based lead qualification",
      "Smart workflows routing tasks automatically",
      "LLM-powered content generation and analysis",
      "Custom agents trained on your business data",
      "Seamless handoff to human team when needed",
    ],
    whoItsFor: [
      "Companies needing 24/7 customer support",
      "Sales teams wanting automated lead qualification",
      "Businesses looking for AI-powered internal tools",
      "Teams that want to leverage LLMs for real workflows",
    ],
    problemsSolved: [
      "High support ticket volume overwhelming your team",
      "Leads going cold because of slow qualification",
      "Repetitive questions consuming human resources",
      "No AI strategy or implementation roadmap",
    ],
    solutionBreakdown: [
      "Custom LangChain agents with memory and tool use",
      "AI voice agents for phone-based interactions",
      "RAG systems with your business knowledge base",
      "Multi-step agent workflows with decision logic",
      "Integration with your existing CRM and support systems",
    ],
    outcomes: [
      "24/7 intelligent customer interaction",
      "60%+ reduction in support ticket volume",
      "Faster lead qualification and response",
      "Scalable AI systems that improve over time",
    ],
    faq: [
      {
        question: "Can the AI agent handle complex conversations?",
        answer:
          "Yes. Using LangChain and advanced prompting, agents can handle multi-turn conversations, use tools, and make context-aware decisions.",
      },
      {
        question: "Does it work with voice calls?",
        answer:
          "Absolutely. I build AI voice agents using Vapi and ElevenLabs that can handle inbound and outbound calls naturally.",
      },
      {
        question: "How accurate are the responses?",
        answer:
          "By using RAG with your specific knowledge base, accuracy is very high. I also implement guardrails and fallback mechanisms.",
      },
    ],
    tools: ["LangChain", "Voice AI", "LLM", "Custom Agents", "OpenAI", "RAG"],
    relatedProjects: [
      "whatsapp-ai-agent-with-appointment-booking",
      "social-media-posting-automation-system",
      "ai-voice-agent-booking-follow-up",
      "ai-lead-generation-outreach",
    ],
  },
  {
    slug: "development",
    icon: Globe,
    title: "Full-Stack Development",
    shortDescription: "Fast, reliable platforms that grow with your business.",
    description:
      "Scalable, modern web platforms built with Next.js, React, and Node.js. From MVPs to production-grade applications with clean architecture, optimized performance, and responsive design.",
    features: [
      "Modern tech stack - Next.js, React, Node.js, MongoDB",
      "Responsive design optimized for every device",
      "Secure authentication including Google & social sign-in",
      "Payment gateway integrations (Stripe, bKash, etc.)",
      "Admin dashboards with real-time data",
      "SEO-optimized and lightning fast",
    ],
    whoItsFor: [
      "Startups needing a professional web presence",
      "Businesses wanting to upgrade their outdated website",
      "Companies needing custom web applications or dashboards",
      "Founders launching new digital products",
    ],
    problemsSolved: [
      "Outdated website not reflecting your brand",
      "Slow loading times hurting conversions",
      "No mobile responsiveness",
      "Complex functionality needs beyond templates",
      "Poor SEO performance",
    ],
    solutionBreakdown: [
      "Custom Next.js or React applications",
      "Full-stack MERN solutions with robust backends",
      "Responsive, conversion-optimized design",
      "Authentication, payments, and dashboard systems",
      "API integrations and third-party connections",
    ],
    outcomes: [
      "Fast, modern web and mobile presence that converts",
      "Scalable architecture that grows with you",
      "SEO-optimized pages for organic traffic",
      "Custom functionality tailored to your needs",
    ],
    faq: [
      {
        question: "Do you work with existing designs?",
        answer:
          "Yes. I can work from Figma files, wireframes, or reference sites. I also handle design from scratch.",
      },
      {
        question: "Can you build complex web applications?",
        answer:
          "Absolutely. From dashboards to multi-role platforms with authentication and payments - I build production-grade applications.",
      },
      {
        question: "What about hosting and deployment?",
        answer:
          "I deploy on modern platforms like Vercel, AWS, or your preferred hosting. All deployments are optimized for performance.",
      },
    ],
    tools: [
      "Next.js",
      "React",
      "React Native",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    relatedProjects: [
      "gadgetoria-hub",
      "law-firm",
      "aquavista-resort",
      "agency-cope",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
