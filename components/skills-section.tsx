"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Boxes,
  Code2,
  Database,
  GitBranch,
  Globe,
  Layers,
  Paintbrush,
  Server,
  Shield,
  Workflow,
} from "lucide-react";
import { useRef, useState } from "react";

const categories = [
  {
    label: "Frontend",
    skills: [
      {
        name: "React",
        icon: Code2,
        color: "from-cyan-500 to-blue-500",
        description: "Component-based UI development",
        percentage: 90,
      },
      {
        name: "Next.js",
        icon: Layers,
        color: "from-gray-600 to-gray-900 dark:from-gray-300 dark:to-gray-600",
        description: "Full-stack React framework",
        percentage: 80,
      },
      {
        name: "TypeScript",
        icon: Boxes,
        color: "from-blue-500 to-blue-700",
        description: "Type-safe JavaScript",
        percentage: 80,
      },
      {
        name: "Tailwind CSS",
        icon: Paintbrush,
        color: "from-teal-400 to-cyan-500",
        description: "Utility-first CSS framework",
        percentage: 90,
      },
    ],
  },
  {
    label: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: Server,
        color: "from-green-500 to-emerald-600",
        description: "Server-side JavaScript runtime",
        percentage: 88,
      },
      {
        name: "Express",
        icon: Workflow,
        color: "from-gray-500 to-gray-700",
        description: "Minimalist web framework",
        percentage: 85,
      },
      {
        name: "REST API",
        icon: Globe,
        color: "from-violet-500 to-purple-600",
        description: "API design & integration",
        percentage: 90,
      },
      {
        name: "JWT Auth",
        icon: Shield,
        color: "from-pink-500 to-rose-600",
        description: "Authentication & security",
        percentage: 85,
      },
    ],
  },
  {
    label: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: Database,
        color: "from-green-600 to-green-800",
        description: "NoSQL database management",
        percentage: 82,
      },
      {
        name: "PostgreSQL",
        icon: Database,
        color: "from-blue-600 to-blue-800",
        description: "Relational database management",
        percentage: 75,
      },
    ],
  },
  {
    label: "Tools",
    skills: [
      {
        name: "Git",
        icon: GitBranch,
        color: "from-orange-500 to-red-600",
        description: "Version control system",
        percentage: 90,
      },
    ],
  },
];

function CircularProgress({
  percentage,
  delay,
}: {
  percentage: number;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div ref={ref} className="relative h-28 w-28">
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
        <defs>
          <linearGradient
            id={`gradient-${percentage}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#7c3aed" />
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
          style={{ strokeDasharray: circumference }}
          initial={{ strokeDashoffset: circumference }}
          animate={
            isInView
              ? { strokeDashoffset }
              : { strokeDashoffset: circumference }
          }
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </svg>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={
          isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }
        }
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        <span className="text-xl font-bold text-foreground">{percentage}%</span>
      </motion.div>
    </div>
  );
}

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof categories)[0]["skills"][0];
  index: number;
}) {
  const Icon = skill.icon;
  const delay = index * 0.07;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-violet-600 to-purple-600 opacity-0 blur transition-all duration-300 group-hover:opacity-75" />
      <div className="relative flex flex-col items-center gap-4 rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10">
        {/* Icon */}
        <motion.div
          className={`flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ${skill.color} p-3 shadow-lg`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="h-8 w-8 text-white" />
        </motion.div>

        {/* Circular Progress */}
        <CircularProgress
          percentage={skill.percentage}
          color={skill.color}
          delay={delay}
        />

        {/* Skill Name & Description */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground">
            {skill.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {skill.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-secondary/30 py-20 dark:bg-background/50"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-r from-violet-500/5 to-purple-500/5 blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isHeaderInView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2"
          >
            <Code2 className="h-4 w-4 text-violet-500" />
            <span className="text-sm font-medium text-violet-500">
              Technical Proficiency
            </span>
          </motion.div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Skills &{" "}
            <span className="bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            Technologies and tools I use to bring ideas to life. Continuously
            learning and improving.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat, index) => (
            <motion.button
              key={cat.label}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === index
                  ? "text-white"
                  : "border border-border/50 bg-card/80 text-muted-foreground hover:border-violet-500/50 hover:text-foreground"
              }`}
            >
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl bg-linear-to-r from-violet-600 to-purple-600"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {categories[activeTab].skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {[
            { label: "Years Experience", value: "1.5+" },
            { label: "Projects Completed", value: "15+" },
            { label: "Happy Clients", value: "5+" },
            { label: "Technologies", value: "12+" },
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
              <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-violet-600 to-purple-600 opacity-0 blur transition-all duration-300 group-hover:opacity-50" />
              <div className="relative rounded-2xl border border-border/50 bg-card/80 p-6 text-center backdrop-blur-sm transition-all hover:border-violet-500/50">
                <div className="text-3xl font-bold text-foreground md:text-4xl">
                  <span className="bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
