"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { 
  Code2, 
  Server, 
  Database, 
  GitBranch, 
  Globe, 
  Shield,
  Layers,
  Paintbrush,
  Boxes,
  Workflow
} from "lucide-react"

const skills = [
  {
    name: "React",
    percentage: 95,
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    description: "Component-based UI development"
  },
  {
    name: "Next.js",
    percentage: 90,
    icon: Layers,
    color: "from-gray-600 to-gray-900 dark:from-gray-300 dark:to-white",
    description: "Full-stack React framework"
  },
  {
    name: "Node.js",
    percentage: 88,
    icon: Server,
    color: "from-green-500 to-emerald-600",
    description: "Server-side JavaScript runtime"
  },
  {
    name: "Express",
    percentage: 85,
    icon: Workflow,
    color: "from-gray-500 to-gray-700",
    description: "Minimalist web framework"
  },
  {
    name: "MongoDB",
    percentage: 82,
    icon: Database,
    color: "from-green-600 to-green-800",
    description: "NoSQL database management"
  },
  {
    name: "TypeScript",
    percentage: 88,
    icon: Boxes,
    color: "from-blue-500 to-blue-700",
    description: "Type-safe JavaScript"
  },
  {
    name: "Tailwind CSS",
    percentage: 92,
    icon: Paintbrush,
    color: "from-teal-400 to-cyan-500",
    description: "Utility-first CSS framework"
  },
  {
    name: "Git",
    percentage: 90,
    icon: GitBranch,
    color: "from-orange-500 to-red-600",
    description: "Version control system"
  },
  {
    name: "REST API",
    percentage: 90,
    icon: Globe,
    color: "from-violet-500 to-purple-600",
    description: "API design & integration"
  },
  {
    name: "JWT Auth",
    percentage: 85,
    icon: Shield,
    color: "from-pink-500 to-rose-600",
    description: "Authentication & security"
  }
]

function CircularProgress({ percentage, color, delay }: { percentage: number; color: string; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div ref={ref} className="relative h-28 w-28">
      {/* Background circle */}
      <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
          className="text-muted/20"
        />
        {/* Animated progress circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          className={`stroke-current`}
          style={{
            strokeDasharray: circumference,
          }}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id={`gradient-${percentage}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="text-violet-500" stopColor="currentColor" />
            <stop offset="100%" className="text-purple-600" stopColor="currentColor" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          stroke={`url(#gradient-${percentage})`}
          style={{
            strokeDasharray: circumference,
          }}
          initial={{ strokeDashoffset: circumference }}
          animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </svg>
      {/* Percentage text */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        <span className="text-xl font-bold text-foreground">{percentage}%</span>
      </motion.div>
    </div>
  )
}

function SkillCard({ skill, index }: { skill: typeof skills[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Icon = skill.icon
  const delay = index * 0.1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 blur transition-all duration-300 group-hover:opacity-75" />
      <div className="relative flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10">
        {/* Icon */}
        <motion.div
          className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${skill.color} p-3 shadow-lg`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>

        {/* Circular Progress */}
        <CircularProgress percentage={skill.percentage} color={skill.color} delay={delay} />

        {/* Skill Name */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{skill.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden bg-secondary/30 py-20 dark:bg-background/50"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-500/5 to-purple-500/5 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2"
          >
            <Code2 className="h-4 w-4 text-violet-500" />
            <span className="text-sm font-medium text-violet-500">Technical Proficiency</span>
          </motion.div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Skills &{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Technologies and tools I use to bring ideas to life. Continuously learning and improving.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Happy Clients", value: "30+" },
            { label: "Technologies", value: "15+" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 opacity-0 blur transition-all duration-300 group-hover:opacity-50" />
              <div className="relative rounded-2xl border border-border/50 bg-card/80 p-6 text-center backdrop-blur-sm transition-all hover:border-violet-500/50">
                <div className="text-3xl font-bold text-foreground md:text-4xl">
                  <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
