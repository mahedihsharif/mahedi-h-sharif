"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Download, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const roles = [
  "Frontend Developer",
  "Full Stack Developer", 
  "MERN Stack Developer",
]

const FloatingBubble = ({ 
  size, 
  initialX, 
  initialY, 
  duration,
  delay 
}: { 
  size: number
  initialX: number
  initialY: number
  duration: number
  delay: number
}) => {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 blur-xl"
      style={{
        width: size,
        height: size,
        left: `${initialX}%`,
        top: `${initialY}%`,
      }}
      animate={{
        x: [0, 30, -20, 40, 0],
        y: [0, -40, 20, -30, 0],
        scale: [1, 1.2, 0.9, 1.1, 1],
        opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

const bubbles = [
  { size: 300, initialX: 10, initialY: 20, duration: 20, delay: 0 },
  { size: 200, initialX: 70, initialY: 60, duration: 25, delay: 2 },
  { size: 150, initialX: 80, initialY: 10, duration: 18, delay: 1 },
  { size: 250, initialX: 20, initialY: 70, duration: 22, delay: 3 },
  { size: 180, initialX: 50, initialY: 40, duration: 24, delay: 1.5 },
  { size: 120, initialX: 90, initialY: 80, duration: 19, delay: 2.5 },
]

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pt-24 pb-12 sm:px-6 lg:px-8"
    >
      {/* Floating Bubbles Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {bubbles.map((bubble, index) => (
          <FloatingBubble key={index} {...bubble} />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16">
        {/* Left Content */}
        <motion.div
          className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">
              Available for hire
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            className="text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            className="mt-2 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-violet-600 bg-clip-text text-transparent">
              Mahedi H Sharif
            </span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            className="mt-4 h-12 sm:h-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRoleIndex}
                className="text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentRoleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-6 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I craft exceptional digital experiences with modern technologies.
            Passionate about building scalable, user-centric applications that 
            make a real impact. Let&apos;s turn your ideas into reality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/40"
            >
              <Link href="#projects">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-violet-500/50 bg-violet-500/10 backdrop-blur-sm transition-all duration-300 hover:border-violet-400 hover:bg-violet-500/20"
            >
              <Link href="#contact">
                <span className="flex items-center gap-2 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Contact Me
                </span>
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="group transition-all duration-300 hover:bg-violet-500/10"
            >
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4 text-violet-400 transition-transform duration-300 group-hover:-translate-y-1" />
                <span>Download CV</span>
              </a>
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="mt-8 flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span className="text-sm text-muted-foreground">Find me on</span>
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm transition-all duration-300 hover:border-violet-400 hover:bg-violet-500/20"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-violet-400 transition-colors duration-300 group-hover:text-violet-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          className="relative flex flex-1 items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          {/* Decorative Rings */}
          <motion.div
            className="absolute h-72 w-72 rounded-full border border-violet-500/20 sm:h-80 sm:w-80 md:h-96 md:w-96"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute h-80 w-80 rounded-full border border-purple-500/15 sm:h-88 sm:w-88 md:h-[26rem] md:w-[26rem]"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Glowing Orbs on Ring */}
          <motion.div
            className="absolute h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />
            <div className="absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50" />
          </motion.div>

          {/* Profile Image Container */}
          <motion.div
            className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-4 border-violet-500/30 bg-gradient-to-br from-violet-600/20 to-purple-600/20 p-1 shadow-2xl shadow-violet-500/20 sm:h-72 sm:w-72 md:h-80 md:w-80"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-violet-900/50 to-purple-900/50 backdrop-blur-sm">
              {/* Placeholder for profile image */}
              <div className="flex flex-col items-center justify-center">
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-6xl font-bold text-transparent sm:text-7xl md:text-8xl">
                  M
                </span>
                <span className="mt-2 text-sm text-violet-300/80">Profile Photo</span>
              </div>
            </div>
          </motion.div>

          {/* Floating Tech Badges */}
          <motion.div
            className="absolute -left-4 top-1/4 rounded-lg border border-violet-500/30 bg-background/80 px-3 py-1.5 backdrop-blur-sm sm:left-0"
            animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium text-violet-400">React.js</span>
          </motion.div>
          
          <motion.div
            className="absolute -right-4 top-1/3 rounded-lg border border-purple-500/30 bg-background/80 px-3 py-1.5 backdrop-blur-sm sm:right-0"
            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <span className="text-sm font-medium text-purple-400">Next.js</span>
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/4 -left-2 rounded-lg border border-violet-500/30 bg-background/80 px-3 py-1.5 backdrop-blur-sm sm:left-4"
            animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <span className="text-sm font-medium text-violet-400">Node.js</span>
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/4 -right-2 rounded-lg border border-purple-500/30 bg-background/80 px-3 py-1.5 backdrop-blur-sm sm:right-4"
            animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <span className="text-sm font-medium text-purple-400">MongoDB</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <div className="flex h-6 w-4 items-start justify-center rounded-full border border-violet-500/50 p-1">
            <motion.div
              className="h-1.5 w-1 rounded-full bg-violet-400"
              animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
