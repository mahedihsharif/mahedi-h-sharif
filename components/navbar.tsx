"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Github, Linkedin, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
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
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="shrink-0"
          >
            <Link href="/" className="group flex items-center gap-2">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 to-purple-600 font-bold text-white shadow-lg shadow-violet-500/25">
                <span className="text-lg">M</span>
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <span className="hidden text-xl font-bold tracking-tight sm:block">
                <span className="bg-linear-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  Mahedi
                </span>
                <span className="text-foreground"> H Sharif</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setActiveSection(item.name)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.name
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {activeSection === item.name && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-x-1 -bottom-px h-0.5 rounded-full bg-linear-to-r from-violet-600 to-purple-600"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
              aria-label="Toggle theme"
            >
              {mounted && (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.button>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-secondary/50 text-foreground transition-colors hover:bg-secondary"
                >
                  <Icon className="h-5 w-5 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href="/cv/Mahedi_Hassan_Sharif.pdf"
                download="Mahedi_Hassan_Sharif.pdf"
              >
                <Button className="group relative overflow-hidden rounded-xl bg-linear-to-r from-violet-600 to-purple-600 px-5 font-medium text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/30">
                  <span className="relative z-10 flex items-center gap-2">
                    <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                    Download CV
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-violet-700 to-purple-700 opacity-0 transition-opacity group-hover:opacity-100" />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-secondary/50 text-foreground"
            >
              {mounted &&
                (theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                ))}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-secondary/50 text-foreground"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.name);
                      setIsOpen(false);
                    }}
                    className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      activeSection === item.name
                        ? "bg-linear-to-r from-violet-600/10 to-purple-600/10 text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {activeSection === item.name && (
                      <div className="mr-3 h-2 w-2 rounded-full bg-linear-to-r from-violet-600 to-purple-600" />
                    )}
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Social & CV */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
                className="flex items-center gap-3 px-4 pt-4"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-secondary/50 text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-secondary/50 text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <Button className="flex-1 rounded-xl bg-linear-to-r from-violet-600 to-purple-600 font-medium text-white shadow-lg shadow-violet-500/25">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
