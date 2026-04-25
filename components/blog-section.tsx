"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable APIs with Node.js and Express",
    description: "Learn how to design and implement production-ready RESTful APIs with proper error handling, authentication, and best practices.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop",
    category: "Backend",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    slug: "building-scalable-apis-nodejs"
  },
  {
    id: 2,
    title: "Modern State Management in React Applications",
    description: "Explore different state management solutions including Redux Toolkit, Zustand, and React Query for optimal performance.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    category: "Frontend",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    slug: "modern-state-management-react"
  },
  {
    id: 3,
    title: "Deploying Full Stack Apps with Docker & CI/CD",
    description: "A comprehensive guide to containerizing your applications and setting up automated deployment pipelines.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
    category: "DevOps",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    slug: "deploying-fullstack-docker-cicd"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export function BlogSection() {
  return (
    <section id="blog" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <Badge 
            variant="outline" 
            className="mb-4 border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-violet-500"
          >
            Latest Articles
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From the{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Insights, tutorials, and thoughts on web development, best practices, and emerging technologies.
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10">
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  {/* Category Badge */}
                  <div className="absolute left-4 top-4">
                    <Badge className="border-0 bg-violet-600 text-white shadow-lg">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 line-clamp-2 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-violet-500">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 line-clamp-2 text-muted-foreground">
                    {post.description}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-medium text-violet-500 transition-all duration-300 hover:gap-3"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-500 group-hover:w-full" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="group gap-2 border-violet-500/30 bg-violet-500/5 px-8 transition-all duration-300 hover:border-violet-500 hover:bg-violet-500/10"
            asChild
          >
            <Link href="/blog">
              View All Articles
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
