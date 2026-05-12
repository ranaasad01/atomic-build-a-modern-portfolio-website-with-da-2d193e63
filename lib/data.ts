export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  icon?: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    slug: "ai-dashboard",
    title: "AI Analytics Dashboard",
    description:
      "A real-time analytics platform powered by machine learning, featuring interactive charts, predictive insights, and customizable widgets for data-driven decision making.",
    longDescription:
      "Built with Next.js and Python FastAPI backend, this dashboard processes millions of data points in real-time using WebSockets. Features include anomaly detection, trend forecasting, and natural language query interface powered by GPT-4.",
    image: "https://cdn.dribbble.com/userupload/47009937/file/e002803d65b3a08cf1e6c85f75446960.png?resize=752x&vertical=center",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "TailwindCSS", "D3.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2024",
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with product management, cart functionality, Stripe payments, and an admin dashboard for inventory and order management.",
    longDescription:
      "Scalable e-commerce platform handling 10k+ daily transactions. Built with Next.js App Router, Prisma ORM, PostgreSQL, and Stripe. Features real-time inventory updates, automated email notifications, and a comprehensive admin panel.",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*rDN1RbUDmaoNHiKfXSURog.png",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2024",
  },
  {
    slug: "collaborative-editor",
    title: "Collaborative Code Editor",
    description:
      "A real-time collaborative code editor supporting 20+ languages with syntax highlighting, live cursors, video chat integration, and AI-powered code suggestions.",
    longDescription:
      "Built using Yjs for conflict-free replicated data types (CRDTs), enabling seamless real-time collaboration. Integrates Monaco Editor, WebRTC for video chat, and OpenAI Codex for intelligent code completion.",
    image: "https://uploads.sitepoint.com/wp-content/uploads/2022/04/1649733046vsc-live-share.jpg",
    tags: ["React", "Yjs", "WebRTC", "Monaco Editor", "Node.js", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2023",
  },
  {
    slug: "design-system",
    title: "Open Source Design System",
    description:
      "A comprehensive React component library with 60+ accessible components, dark mode support, Storybook documentation, and automated visual regression testing.",
    longDescription:
      "Adopted by 500+ developers, this design system follows WAI-ARIA guidelines for full accessibility. Built with Radix UI primitives, styled with CSS-in-JS, and tested with Chromatic for visual consistency.",
    image: "https://images.ctfassets.net/lzny33ho1g45/3L77mMruOrEOWxyDmcKkEp/2e1d7aff0d998602ddaa18fad2bb75fb/image2.jpg",
    tags: ["React", "TypeScript", "Radix UI", "Storybook", "CSS-in-JS"],
    githubUrl: "https://github.com",
    featured: false,
    year: "2023",
  },
  {
    slug: "mobile-fitness-app",
    title: "Fitness Tracking App",
    description:
      "A cross-platform mobile app for workout tracking, nutrition logging, and progress visualization with social features and personalized AI coaching.",
    longDescription:
      "React Native app with offline-first architecture using WatermelonDB. Features include workout planning, barcode scanning for nutrition, Apple Health/Google Fit integration, and a social feed for sharing achievements.",
    image: "https://images.ctfassets.net/lzny33ho1g45/3L77mMruOrEOWxyDmcKkEp/2e1d7aff0d998602ddaa18fad2bb75fb/image2.jpg",
    tags: ["React Native", "Expo", "TypeScript", "WatermelonDB", "GraphQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: "2023",
  },
  {
    slug: "devops-pipeline",
    title: "DevOps Automation Suite",
    description:
      "An infrastructure-as-code toolkit automating CI/CD pipelines, Kubernetes deployments, monitoring setup, and cost optimization across multi-cloud environments.",
    longDescription:
      "Reduced deployment time by 70% for a 50-engineer team. Built with Terraform, GitHub Actions, and custom Go CLI tools. Includes automated security scanning, cost alerts, and one-click rollback capabilities.",
    image: "https://kubesphere.io/images/devops/dev-ops.png",
    tags: ["Go", "Terraform", "Kubernetes", "GitHub Actions", "AWS", "GCP"],
    githubUrl: "https://github.com",
    featured: false,
    year: "2022",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "React Native", level: 4 },
      { name: "Vue.js", level: 3 },
      { name: "GraphQL", level: 4 },
      { name: "Three.js", level: 3 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "Python / FastAPI", level: 4 },
      { name: "Go", level: 3 },
      { name: "PostgreSQL", level: 4 },
      { name: "Redis", level: 4 },
      { name: "Prisma ORM", level: 5 },
      { name: "REST APIs", level: 5 },
      { name: "WebSockets", level: 4 },
    ],
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "AWS / GCP", level: 4 },
      { name: "Docker", level: 4 },
      { name: "Kubernetes", level: 3 },
      { name: "GitHub Actions", level: 5 },
      { name: "Terraform", level: 3 },
      { name: "Figma", level: 4 },
      { name: "Vercel", level: 5 },
      { name: "Linux", level: 4 },
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Email", href: "mailto:alex@example.com", icon: "Mail" },
];

export const personalInfo = {
  name: "Alex Morgan",
  title: "Full-Stack Engineer",
  tagline: "Building elegant solutions to complex problems",
  bio: "I'm a full-stack engineer with 6+ years of experience crafting high-performance web applications and developer tools. I specialize in React ecosystems, distributed systems, and turning ambitious product ideas into polished, scalable realities.",
  bioExtended:
    "When I'm not shipping code, I contribute to open source, write technical articles, and mentor junior developers. I believe great software is built at the intersection of clean architecture, thoughtful UX, and relentless iteration.",
  location: "San Francisco, CA",
  availability: "Open to opportunities",
  email: "alex@example.com",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Projects Shipped", value: "40+" },
    { label: "GitHub Stars", value: "2.1k" },
    { label: "Open Source PRs", value: "180+" },
  ],
};
