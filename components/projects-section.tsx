"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  ExternalLink, 
  Github, 
  Eye,
  Layers,
  Server,
  Layout,
  Code2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const categories = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "frontend", label: "Frontend", icon: Layout },
  { id: "fullstack", label: "Full Stack", icon: Code2 },
  { id: "backend", label: "Backend", icon: Server },
]

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    category: "fullstack",
    techStack: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveDemo: "https://demo.example.com",
    githubFrontend: "https://github.com",
    githubBackend: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team workspaces, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
    category: "fullstack",
    techStack: ["React", "Express", "PostgreSQL", "Socket.io", "Redux"],
    liveDemo: "https://demo.example.com",
    githubFrontend: "https://github.com",
    githubBackend: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Dashboard",
    description: "Modern analytics dashboard with interactive charts, data visualization, and responsive design.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    category: "frontend",
    techStack: ["React", "TypeScript", "Recharts", "Tailwind CSS", "Framer Motion"],
    liveDemo: "https://demo.example.com",
    githubFrontend: "https://github.com",
    featured: false,
  },
  {
    id: 4,
    title: "REST API Service",
    description: "Scalable RESTful API with authentication, rate limiting, caching, and comprehensive documentation.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    category: "backend",
    techStack: ["Node.js", "Express", "MongoDB", "Redis", "JWT"],
    liveDemo: "https://api.example.com",
    githubBackend: "https://github.com",
    featured: false,
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "Feature-rich social media management tool with scheduling, analytics, and multi-platform support.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
    category: "fullstack",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Tailwind CSS"],
    liveDemo: "https://demo.example.com",
    githubFrontend: "https://github.com",
    githubBackend: "https://github.com",
    featured: true,
  },
  {
    id: 6,
    title: "Landing Page Template",
    description: "High-converting SaaS landing page with smooth animations, responsive design, and optimized performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    category: "frontend",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveDemo: "https://demo.example.com",
    githubFrontend: "https://github.com",
    featured: false,
  },
  {
    id: 7,
    title: "Authentication Microservice",
    description: "Secure authentication service with OAuth2, JWT tokens, role-based access control, and session management.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    category: "backend",
    techStack: ["Node.js", "Express", "MongoDB", "JWT", "OAuth2"],
    githubBackend: "https://github.com",
    featured: false,
  },
  {
    id: 8,
    title: "Real-time Chat Application",
    description: "Modern chat application with real-time messaging, file sharing, video calls, and end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop",
    category: "fullstack",
    techStack: ["Next.js", "Socket.io", "MongoDB", "WebRTC", "Tailwind CSS"],
    liveDemo: "https://demo.example.com",
    githubFrontend: "https://github.com",
    githubBackend: "https://github.com",
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/10">
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute right-4 top-4 z-10">
            <Badge className="border-none bg-gradient-to-r from-violet-600 to-purple-600 text-white">
              Featured
            </Badge>
          </div>
        )}

        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
          
          {/* Hover Actions */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={false}
          >
            {project.liveDemo && (
              <motion.a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-500/50 transition-colors hover:bg-violet-700"
              >
                <ExternalLink className="h-5 w-5" />
              </motion.a>
            )}
            {project.githubFrontend && (
              <motion.a
                href={project.githubFrontend}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-background"
              >
                <Github className="h-5 w-5" />
              </motion.a>
            )}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category Tag */}
          <div className="mb-3">
            <span className="text-xs font-medium uppercase tracking-wider text-violet-500">
              {categories.find(c => c.id === project.category)?.label}
            </span>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-violet-500">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mb-5 flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="border border-border/50 bg-secondary/50 text-xs font-normal"
              >
                {tech}
              </Badge>
            ))}
            {project.techStack.length > 4 && (
              <Badge 
                variant="secondary" 
                className="border border-border/50 bg-secondary/50 text-xs font-normal"
              >
                +{project.techStack.length - 4}
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            {project.liveDemo && (
              <Button
                size="sm"
                className="h-9 gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40"
                asChild
              >
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
            {project.githubFrontend && (
              <Button
                size="sm"
                variant="outline"
                className="h-9 gap-2 border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:border-violet-500/50 hover:bg-violet-500/10"
                asChild
              >
                <a href={project.githubFrontend} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Frontend
                </a>
              </Button>
            )}
            {project.githubBackend && (
              <Button
                size="sm"
                variant="outline"
                className="h-9 gap-2 border-border/50 bg-background/50 backdrop-blur-sm transition-all hover:border-violet-500/50 hover:bg-violet-500/10"
                asChild
              >
                <a href={project.githubBackend} target="_blank" rel="noopener noreferrer">
                  <Server className="h-4 w-4" />
                  Backend
                </a>
              </Button>
            )}
            <Button
              size="sm"
              variant="ghost"
              className="h-9 gap-2 text-muted-foreground transition-all hover:text-violet-500"
              asChild
            >
              <Link href={`/projects/${project.id}`}>
                <Eye className="h-4 w-4" />
                Details
              </Link>
            </Button>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600/20 via-purple-600/20 to-violet-600/20 blur-sm" />
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const filteredProjects = projects.filter(
    project => activeCategory === "all" || project.category === activeCategory
  )

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-500"
          >
            Portfolio Showcase
          </motion.span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Explore my latest work showcasing full-stack development, modern UI/UX design, 
            and scalable architecture solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300
                  ${isActive 
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30" 
                    : "border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm hover:border-violet-500/50 hover:text-foreground"
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                {category.label}
                {isActive && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-600 to-purple-600"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="group gap-2 border-violet-500/50 bg-violet-500/10 px-8 text-foreground backdrop-blur-sm transition-all hover:border-violet-500 hover:bg-violet-500/20 hover:shadow-lg hover:shadow-violet-500/20"
          >
            View All Projects
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mx-auto mt-20 max-w-4xl"
        >
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: "Projects Completed", value: "50+" },
              { label: "Technologies Used", value: "15+" },
              { label: "GitHub Stars", value: "2.5K+" },
              { label: "Code Commits", value: "5K+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="group rounded-2xl border border-border/50 bg-card/30 p-4 text-center backdrop-blur-sm transition-all hover:border-violet-500/50 hover:bg-card/50"
              >
                <div className="text-2xl font-bold text-foreground transition-colors group-hover:text-violet-500 sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
