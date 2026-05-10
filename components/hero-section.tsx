"use client";

import { Button } from "@/components/ui/button";
import ProfilePhoto from "@/public/images/mahedihassanshraif.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Eye, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
];

const FloatingBubble = ({
  size,
  initialX,
  initialY,
  duration,
  delay,
}: {
  size: number;
  initialX: number;
  initialY: number;
  duration: number;
  delay: number;
}) => {
  return (
    <motion.div
      className="absolute rounded-full bg-linear-to-br from-violet-500/20 to-purple-600/20 blur-xl"
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
  );
};

const bubbles = [
  { size: 300, initialX: 10, initialY: 20, duration: 20, delay: 0 },
  { size: 200, initialX: 70, initialY: 60, duration: 25, delay: 2 },
  { size: 150, initialX: 80, initialY: 10, duration: 18, delay: 1 },
  { size: 250, initialX: 20, initialY: 70, duration: 22, delay: 3 },
  { size: 180, initialX: 50, initialY: 40, duration: 24, delay: 1.5 },
  { size: 120, initialX: 90, initialY: 80, duration: 19, delay: 2.5 },
];

// Custom Social Icons (SVG) — lucide-react deprecated icons replace
const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    icon: GitHubIcon,
    href: "https://github.com/mahedihsharif",
    label: "GitHub",
  },
  {
    icon: LinkedInIcon,
    href: "https://linkedin.com/in/mahedihsharif",
    label: "LinkedIn",
  },
  {
    icon: XIcon,
    href: "https://twitter.com/mahedihsharif",
    label: "X (Twitter)",
  },
];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
            <span className="bg-linear-to-r from-violet-400 via-purple-500 to-violet-600 bg-clip-text text-transparent">
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
            With 1.5+ years of experience in full-stack development, I build
            digital products that are fast, scalable, and genuinely enjoyable to
            use — from intuitive, pixel-perfect interfaces to reliable,
            well-architected backends. I care about every layer of the stack,
            and every step of the user&apos;s journey.
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
              className="group relative overflow-hidden bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/40"
            >
              <Link href="#projects">
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 -z-10 bg-linear-to-r from-purple-600 to-violet-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="group border-violet-500/50 bg-violet-500/10 backdrop-blur-sm transition-all duration-300 hover:border-violet-400 hover:bg-violet-500/20"
            >
              <Link href="#contact">
                <span className="flex items-center gap-2 bg-linear-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
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
              <a
                href="https://drive.google.com/file/d/1TN5o2kUOAq_1qmTmsmATxQ_WsymD6S0b/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="h-4 w-4 text-violet-400 transition-transform duration-300 group-hover:-translate-y-1" />
                <span>View CV</span>
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
              {socialLinks.map(({ icon: Icon, href, label }) => (
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
          style={{ minHeight: "420px" }}
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
            className="absolute h-80 w-80 rounded-full border border-purple-500/15 sm:h-88 sm:w-88 md:h-104 md:w-104"
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
            className="z-10 h-48 w-48 overflow-hidden rounded-full border-4 border-violet-500/30 shadow-2xl shadow-violet-500/20 sm:h-72 sm:w-72 md:h-80 md:w-80"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src={ProfilePhoto}
              alt="Profile Image"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Floating Tech Badges */}
          {/* Left side */}
          <motion.div
            className="absolute left-0 top-[8%] rounded-lg border border-violet-500/30 bg-background/80 px-3 py-1.5 backdrop-blur-sm"
            animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-sm font-medium text-violet-400">
              React.js
            </span>
          </motion.div>

          <motion.div
            className="absolute left-0 top-[36%] rounded-lg border border-violet-500/30 bg-background/80 px-3 py-1.5 backdrop-blur-sm"
            animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <span className="text-sm font-medium text-violet-400">
              TypeScript
            </span>
          </motion.div>

          <motion.div
            className="absolute left-0 top-[64%] rounded-lg border border-violet-500/30 bg-background/80 px-3 py-1.5 backdrop-blur-sm"
            animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <span className="text-sm font-medium text-violet-400">Node.js</span>
          </motion.div>

          {/* Right side */}
          <motion.div
            className="absolute right-0 top-[8%] rounded-lg border border-violet-500/30 bg-background/80 px-3 py-1.5 backdrop-blur-sm"
            animate={{ y: [0, 8, 0], x: [0, -3, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          >
            <span className="text-sm font-medium text-violet-400">
              PostgreSQL
            </span>
          </motion.div>

          <motion.div
            className="absolute right-0 top-[36%] rounded-lg border border-purple-500/30 bg-background/80 px-3 py-1.5 backdrop-blur-sm"
            animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <span className="text-sm font-medium text-purple-400">Next.js</span>
          </motion.div>

          <motion.div
            className="absolute right-0 top-[64%] rounded-lg border border-purple-500/30 bg-background/80 px-3 py-1.5 backdrop-blur-sm"
            animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
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
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
