"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Server,
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  Layers,
  Zap,
  Shield,
  Smartphone,
  Globe,
  Database,
  Code2,
  GitBranch,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Sample project data - in real app, this would come from API/database
const projectData = {
  id: 1,
  title: "E-Commerce Platform",
  subtitle: "Full-Stack MERN Application",
  description: "A comprehensive e-commerce solution built with modern technologies. This platform features real-time inventory management, secure payment processing with Stripe, an intuitive admin dashboard, and a seamless shopping experience for customers.",
  longDescription: `
    This e-commerce platform was built to provide a complete online shopping solution for businesses of all sizes. 
    The application handles everything from product catalog management to order fulfillment, with a focus on 
    performance, security, and user experience.
    
    The frontend is built with Next.js and React, providing server-side rendering for optimal SEO and fast initial 
    page loads. The backend uses Node.js with Express, connected to a MongoDB database for flexible data storage.
    
    Key challenges solved include implementing real-time inventory updates across multiple user sessions, 
    building a robust cart system that persists across devices, and integrating multiple payment providers 
    while maintaining PCI compliance.
  `,
  banner: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop",
  category: "Full Stack",
  date: "January 2024",
  duration: "3 months",
  team: "Solo Project",
  status: "Live",
  techStack: [
    { name: "Next.js", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Node.js", category: "Backend" },
    { name: "Express", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Mongoose", category: "ORM" },
    { name: "Stripe", category: "Payment" },
    { name: "JWT", category: "Auth" },
    { name: "Redis", category: "Caching" },
    { name: "AWS S3", category: "Storage" },
  ],
  features: [
    {
      icon: Zap,
      title: "Real-time Inventory",
      description: "Live inventory updates across all user sessions using WebSocket connections"
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "PCI-compliant payment processing with Stripe integration and fraud detection"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Fully responsive UI that works seamlessly on desktop, tablet, and mobile devices"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      description: "Internationalization support with automatic language detection"
    },
    {
      icon: Database,
      title: "Advanced Search",
      description: "Full-text search with filters, sorting, and faceted navigation"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Complete user authentication with role-based access control"
    },
  ],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      alt: "Dashboard Overview",
      caption: "Admin Dashboard"
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      alt: "Analytics View",
      caption: "Analytics & Reports"
    },
    {
      src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
      alt: "Product Management",
      caption: "Product Management"
    },
    {
      src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
      alt: "Shopping Cart",
      caption: "Shopping Cart"
    },
  ],
  architecture: {
    description: "The application follows a microservices architecture pattern with separate services for user management, product catalog, orders, and payments.",
    layers: [
      { name: "Client Layer", tech: "Next.js, React, Tailwind CSS" },
      { name: "API Gateway", tech: "Express.js, Rate Limiting, Auth Middleware" },
      { name: "Service Layer", tech: "Node.js Microservices" },
      { name: "Data Layer", tech: "MongoDB, Redis Cache" },
      { name: "External Services", tech: "Stripe, AWS S3, SendGrid" },
    ]
  },
  links: {
    live: "https://demo.example.com",
    githubFrontend: "https://github.com/mahedi/ecommerce-frontend",
    githubBackend: "https://github.com/mahedi/ecommerce-backend",
  },
  metrics: [
    { label: "Page Load Time", value: "< 1.5s" },
    { label: "Lighthouse Score", value: "95+" },
    { label: "Test Coverage", value: "87%" },
    { label: "Uptime", value: "99.9%" },
  ]
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={`mb-8 text-2xl font-bold text-foreground sm:text-3xl ${className}`}
    >
      {children}
    </motion.h2>
  )
}

export default function ProjectDetailsPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Banner Section */}
      <section ref={heroRef} className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: imageY }}
        >
          <img
            src={projectData.banner}
            alt={projectData.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute left-4 top-24 z-10 sm:left-8"
        >
          <Button
            variant="outline"
            size="sm"
            className="gap-2 border-white/20 bg-black/30 text-white backdrop-blur-sm hover:bg-black/50"
            asChild
          >
            <Link href="/#projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 flex items-end"
        >
          <div className="container mx-auto px-4 pb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Category Badge */}
              <Badge className="mb-4 border-none bg-violet-600 text-white">
                {projectData.category}
              </Badge>
              
              {/* Title */}
              <h1 className="mb-3 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                {projectData.title}
              </h1>
              
              {/* Subtitle */}
              <p className="mb-6 text-lg text-white/80 sm:text-xl">
                {projectData.subtitle}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-4 text-sm text-white/70">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {projectData.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {projectData.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {projectData.team}
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  {projectData.status}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50"
              asChild
            >
              <a href={projectData.links.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
                Live Site
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border/50 backdrop-blur-sm hover:border-violet-500/50 hover:bg-violet-500/10"
              asChild
            >
              <a href={projectData.links.githubFrontend} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub Frontend
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-border/50 backdrop-blur-sm hover:border-violet-500/50 hover:bg-violet-500/10"
              asChild
            >
              <a href={projectData.links.githubBackend} target="_blank" rel="noopener noreferrer">
                <Server className="h-5 w-5" />
                GitHub Backend
              </a>
            </Button>
          </motion.div>

          {/* Description Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <SectionTitle>
              <span className="flex items-center gap-3">
                <Code2 className="h-7 w-7 text-violet-500" />
                About This Project
              </span>
            </SectionTitle>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {projectData.description}
              </p>
              <div className="mt-6 whitespace-pre-line text-base leading-relaxed text-muted-foreground">
                {projectData.longDescription}
              </div>
            </div>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <SectionTitle>
              <span className="flex items-center gap-3">
                <Layers className="h-7 w-7 text-violet-500" />
                Tech Stack
              </span>
            </SectionTitle>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {projectData.techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{tech.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {tech.category}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Features Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <SectionTitle>
              <span className="flex items-center gap-3">
                <Star className="h-7 w-7 text-violet-500" />
                Key Features
              </span>
            </SectionTitle>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectData.features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500 transition-colors group-hover:bg-violet-500 group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.section>

          {/* Image Gallery Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <SectionTitle>
              <span className="flex items-center gap-3">
                <Layers className="h-7 w-7 text-violet-500" />
                Project Gallery
              </span>
            </SectionTitle>
            <div className="grid gap-6 sm:grid-cols-2">
              {projectData.gallery.map((image, index) => (
                <motion.div
                  key={image.alt}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative overflow-hidden rounded-2xl border border-border/50"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="p-4">
                      <p className="text-sm font-medium text-white">{image.caption}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Architecture Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <SectionTitle>
              <span className="flex items-center gap-3">
                <GitBranch className="h-7 w-7 text-violet-500" />
                System Architecture
              </span>
            </SectionTitle>
            <p className="mb-8 text-muted-foreground">
              {projectData.architecture.description}
            </p>
            <div className="space-y-4">
              {projectData.architecture.layers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm transition-all hover:border-violet-500/50"
                >
                  {/* Layer indicator */}
                  <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-violet-600 to-purple-600" />
                  
                  <div className="ml-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-sm font-bold text-violet-500">
                        {index + 1}
                      </span>
                      <h4 className="font-semibold text-foreground">{layer.name}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 sm:ml-0 ml-11">
                      {layer.tech.split(", ").map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Metrics Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="rounded-2xl border border-border/50 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-transparent p-8 backdrop-blur-sm">
              <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
                Project Metrics
              </h3>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {projectData.metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-violet-500 sm:text-4xl">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border/50 bg-card/50 p-8 text-center backdrop-blur-sm sm:p-12"
          >
            <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              Interested in this project?
            </h3>
            <p className="mb-8 text-muted-foreground">
              Feel free to check out the live demo or explore the source code on GitHub.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50"
                asChild
              >
                <a href={projectData.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                  View Live Site
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                asChild
              >
                <Link href="/#contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  )
}
