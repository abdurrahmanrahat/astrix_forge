export const projects = [
  {
    _id: "01",
    slug: "agency-cope",
    title: "Agency Cope - Digital Agency Platform",
    category: "website",
    summary:
      "High-performance agency website built for speed, polish, and client conversion.",
    thumbnail: "/images/projects/agency-cope.png", // image
    videoUrl:
      "https://www.youtube.com/embed/A2NqIew9Pzo?si=YvvS_r_6QV4l7E01?autoplay=1", // video url embed
    challenge:
      "The client needed a modern, fast-loading agency website that could showcase their services, team, and portfolio while maintaining excellent SEO and mobile responsiveness.",
    solution:
      "Built a fully custom React application with server-side rendering for SEO, dynamic content sections, responsive layouts across all devices, and optimized asset loading for sub-2-second page loads.",
    features: [
      "Server-side rendered pages for SEO",
      "Dynamic portfolio showcase",
      "Contact form with email integration",
      "Mobile-first responsive design",
      "Optimized Core Web Vitals",
    ],
    result:
      "The agency's online presence immediately leveled up, with stronger first impressions and measurably better engagement metrics post-launch.",
    meta: {
      type: "Agency Website",
      industry: "Digital Agency",
      timeline: "3 weeks",
    },
    tools: ["React", "Tailwind CSS", "Framer Motion", "C-panel"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsBySlugs(slugs: string[]) {
  const slugSet = new Set(slugs);

  return projects.filter((project) => slugSet.has(project.slug));
}
