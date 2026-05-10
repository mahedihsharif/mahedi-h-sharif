"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Code2,
  ExternalLink,
  Eye,
  Github,
  Layers,
  Layout,
  Server,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const categories = [
  { id: "all", label: "All Projects", icon: Layers },
  { id: "frontend", label: "Frontend", icon: Layout },
  { id: "fullstack", label: "Full Stack", icon: Code2 },
  { id: "backend", label: "Backend", icon: Server },
];

const projects = [
  {
    id: 1,
    title: "Job Tracker App",
    description:
      "A full-stack web application to manage and track job applications with advanced filtering and secure authentication.",
    image: "https://i.ibb.co.com/JwGY4R0D/job-tracker-image-bb.jpg",
    category: "fullstack",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "ShadCN UI"],
    liveDemo: "https://job-tracker-me.vercel.app",
    githubFrontend: "https://github.com/mahedihsharif/job-tracker-client",
    githubBackend: "https://github.com/mahedihsharif/job-tracker-backend",
    featured: true,
  },
  {
    id: 2,
    title: "Ride Sharing Platform",
    description:
      "Built a full-stack ride-hailing platform with role-based access for Admin, Rider, and Driver-featuring JWT authentication and fully protected routes.",
    image: "https://i.ibb.co.com/Pzh6Wfmh/rider-sharing-bb.jpg",
    category: "fullstack",
    techStack: ["React", "Express", "MongoDB", "Tailwind CSS", "Redux"],
    liveDemo: "https://ride-booking-client.vercel.app",
    githubFrontend: "https://github.com/mahedihsharif/ride-booking-client",
    githubBackend: "https://github.com/mahedihsharif/ride_booking_api",
    featured: true,
  },
  {
    id: 3,
    title: "Library Management System",
    description:
      "A comprehensive library management system with user authentication, book inventory management, and borrowing/returning functionality.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    category: "fullstack",
    techStack: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    liveDemo: "https://library-management-app-one-mu.vercel.app/",
    githubFrontend:
      "https://github.com/mahedihsharif/Library_Management_System_Client",
    githubBackend: "https://github.com/mahedihsharif/Library_Management_System",
    featured: false,
  },
  {
    id: 4,
    title: "E-commerce Site",
    description:
      "Developed a secure and scalable e-commerce backend with Node.js, Express, MongoDB,and JWT authentication for seamless user experience.",
    image: "https://i.ibb.co.com/3mbr5wG6/ekhonie-final-verson-imagebb.jpg",
    category: "frontend",
    techStack: ["Node.js", "Express", "MongoDB", "JWT"],
    liveDemo: "https://ekhonie.netlify.app/",
    githubFrontend: "https://github.com/mahedihsharif/techbazar_client",
    githubBackend: "https://github.com/mahedihsharif/techbazar_api",
    featured: false,
  },
  {
    id: 5,
    title: "SlothUI - Landing Page Design",
    description:
      "Crafted a sleek landing page for SlothUI, showcasing its features and benefits with a modern design and responsive layout.",
    image: "https://i.ibb.co.com/4RfRqKVp/SLOTHUI.jpg",
    category: "frontend",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveDemo: "https://slothuilive.netlify.app/",
    githubFrontend: "https://github.com/mahedihsharif/slothui",
    featured: true,
  },
  {
    id: 6,
    title: "Landing Page Template",
    description:
      "Designed a modern landing page template with responsive design, smooth animations, and a clean layout to effectively showcase products or services.",
    image: "https://i.ibb.co.com/qMmTdD0M/cm-repair-image-bb.jpg",
    category: "frontend",
    techStack: ["React", "CSS"],
    liveDemo: "https://cm-repair.netlify.app/",
    githubFrontend: "https://github.com/mahedihsharif/CM-Repair",
    featured: false,
  },
  {
    id: 7,
    title: "Prada Landing Page Template",
    description:
      "Designed a modern landing page template with responsive design, smooth animations, and a clean layout to effectively showcase products or services.",
    image: "https://i.ibb.co.com/C5BPfFCq/parada-new-bb.jpg",
    category: "frontend",
    techStack: ["HTML", "CSS"],
    liveDemo: "https://globex-vertical.netlify.app/",
    featured: false,
  },
  {
    id: 8,
    title: "Go Green Recycling",
    description:
      "Go Green Recycling is a full-stack web application that promotes sustainable waste management by connecting users with local recycling centers, providing educational resources, and tracking recycling habits.",
    image: "https://i.ibb.co.com/HpxLpTp3/gogreen-bb.jpg",
    category: "fullstack",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveDemo: "https://go-green-recycling.netlify.app/",
    githubFrontend:
      "https://github.com/mahedihsharif/go-green-recycling-client-site",
    githubBackend:
      "https://github.com/mahedihsharif/go-green-recycling-server-site",
    featured: false,
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

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
            <Badge className="border-none bg-linear-to-r from-violet-600 to-purple-600 text-white">
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
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

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
              {categories.find((c) => c.id === project.category)?.label}
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
                className="h-9 gap-2 bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40"
                asChild
              >
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              <Link href="#projects">
                <Eye className="h-4 w-4" />
                Details
              </Link>
            </Button>
          </div>
        </div>

        {/* Glow Effect */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-violet-600/20 via-purple-600/20 to-violet-600/20 blur-sm" />
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "all" || project.category === activeCategory,
  );

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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />
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
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-500"
          >
            Portfolio Showcase
          </motion.span>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Featured{" "}
            <span className="bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Explore my latest work showcasing full-stack development, modern
            UI/UX design, and scalable architecture solutions.
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
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30"
                      : "border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm hover:border-violet-500/50 hover:text-foreground"
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                {category.label}
                {isActive && (
                  <motion.span
                    layoutId="activeFilter"
                    className="absolute inset-0 -z-10 rounded-full bg-linear-to-r from-violet-600 to-purple-600"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
              { label: "Projects Completed", value: "15+" },
              { label: "Technologies Used", value: "12+" },
              { label: "Happy Clients", value: "5+" },
              { label: "Years of Experience", value: "1.5+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
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
  );
}
