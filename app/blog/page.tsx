"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ArrowUpRight,
  Filter,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const allBlogPosts = [
  {
    id: 1,
    title: "Building Scalable APIs with Node.js and Express",
    description: "Learn how to design and implement production-ready RESTful APIs with proper error handling, authentication, and best practices for modern web applications.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop",
    category: "Backend",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    slug: "building-scalable-apis-nodejs",
    featured: true
  },
  {
    id: 2,
    title: "Modern State Management in React Applications",
    description: "Explore different state management solutions including Redux Toolkit, Zustand, and React Query for optimal performance in your React apps.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
    category: "Frontend",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    slug: "modern-state-management-react",
    featured: true
  },
  {
    id: 3,
    title: "Deploying Full Stack Apps with Docker & CI/CD",
    description: "A comprehensive guide to containerizing your applications and setting up automated deployment pipelines for seamless delivery.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
    category: "DevOps",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    slug: "deploying-fullstack-docker-cicd",
    featured: false
  },
  {
    id: 4,
    title: "TypeScript Best Practices for Large Scale Applications",
    description: "Master TypeScript patterns and practices that will help you build maintainable and type-safe applications at scale.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=500&fit=crop",
    category: "TypeScript",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    slug: "typescript-best-practices",
    featured: false
  },
  {
    id: 5,
    title: "Authentication Strategies: JWT vs Session-Based",
    description: "A deep dive into different authentication mechanisms, their pros and cons, and when to use each approach in your applications.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    category: "Security",
    date: "Nov 20, 2024",
    readTime: "9 min read",
    slug: "authentication-jwt-vs-session",
    featured: false
  },
  {
    id: 6,
    title: "Building Real-Time Features with WebSockets",
    description: "Learn how to implement real-time communication in your web applications using WebSockets and Socket.io.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    category: "Backend",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    slug: "realtime-websockets",
    featured: false
  },
  {
    id: 7,
    title: "Optimizing React Performance: A Complete Guide",
    description: "Techniques and strategies to optimize your React applications for better performance and user experience.",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800&h=500&fit=crop",
    category: "Frontend",
    date: "Nov 10, 2024",
    readTime: "11 min read",
    slug: "optimizing-react-performance",
    featured: false
  },
  {
    id: 8,
    title: "MongoDB Aggregation Pipeline Mastery",
    description: "Advanced MongoDB aggregation techniques for complex data processing and analytics in your applications.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop",
    category: "Database",
    date: "Nov 5, 2024",
    readTime: "8 min read",
    slug: "mongodb-aggregation-mastery",
    featured: false
  },
  {
    id: 9,
    title: "Next.js 14: Server Actions Deep Dive",
    description: "Explore the power of Server Actions in Next.js 14 and how they simplify data mutations in your applications.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop",
    category: "Frontend",
    date: "Oct 28, 2024",
    readTime: "10 min read",
    slug: "nextjs-14-server-actions",
    featured: false
  }
]

const categories = ["All", "Frontend", "Backend", "DevOps", "TypeScript", "Security", "Database"]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = activeCategory === "All" || post.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  const featuredPosts = allBlogPosts.filter(post => post.featured)

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-12">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute right-1/4 top-1/2 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge 
              variant="outline" 
              className="mb-4 border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-violet-500"
            >
              Developer Blog
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Insights &{" "}
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                Tutorials
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Exploring web development, best practices, and emerging technologies. 
              Deep dives into React, Node.js, and modern full-stack development.
            </p>
          </motion.div>

          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-10 max-w-3xl"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-14 rounded-2xl border-border/50 bg-card/50 pl-12 pr-12 text-lg backdrop-blur-sm transition-all focus:border-violet-500/50 focus:ring-violet-500/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <Filter className="mr-2 h-4 w-4 text-muted-foreground" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                      : "bg-card/50 text-muted-foreground hover:bg-violet-500/10 hover:text-violet-500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === "All" && !searchQuery && (
        <section className="relative py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8 text-2xl font-bold text-foreground"
            >
              Featured Articles
            </motion.h2>

            <div className="grid gap-8 lg:grid-cols-2">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10">
                      <div className="grid md:grid-cols-2">
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/50 md:bg-gradient-to-r md:from-transparent md:to-card/80" />
                          <Badge className="absolute left-4 top-4 border-0 bg-violet-600 text-white">
                            Featured
                          </Badge>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col justify-center p-6 md:p-8">
                          <Badge variant="outline" className="mb-3 w-fit border-violet-500/30 text-violet-500">
                            {post.category}
                          </Badge>
                          <h3 className="mb-3 text-2xl font-bold text-foreground transition-colors group-hover:text-violet-500">
                            {post.title}
                          </h3>
                          <p className="mb-4 line-clamp-3 text-muted-foreground">
                            {post.description}
                          </p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-4 w-4" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="h-4 w-4" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">
              {activeCategory === "All" ? "All Articles" : `${activeCategory} Articles`}
            </h2>
            <span className="text-muted-foreground">
              {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {filteredPosts.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    variants={itemVariants}
                    layout
                    className="group relative"
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/10">
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          
                          <Badge className="absolute left-4 top-4 border-0 bg-violet-600 text-white shadow-lg">
                            {post.category}
                          </Badge>

                          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                            <ArrowUpRight className="h-5 w-5 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
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

                          <h3 className="mb-2 line-clamp-2 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-violet-500">
                            {post.title}
                          </h3>

                          <p className="mb-4 line-clamp-2 text-muted-foreground">
                            {post.description}
                          </p>

                          <span className="inline-flex items-center gap-2 font-medium text-violet-500 transition-all duration-300 group-hover:gap-3">
                            Read Article
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>
                        </div>

                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-violet-600 to-purple-600 transition-all duration-500 group-hover:w-full" />
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-violet-500/10">
                  <Search className="h-10 w-10 text-violet-500" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filter to find what you&apos;re looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("All")
                  }}
                  variant="outline"
                  className="mt-6 border-violet-500/30 hover:border-violet-500 hover:bg-violet-500/10"
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-background p-8 md:p-12 lg:p-16"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
                Stay Updated
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Subscribe to get notified about new articles, tutorials, and development tips.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 w-full rounded-xl border-border/50 bg-background/50 px-6 backdrop-blur-sm sm:w-80"
                />
                <Button className="h-12 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-8 font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/30">
                  Subscribe
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                No spam, unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
