"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Github,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com/mahedihsharif", icon: Github },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mahedihsharif",
    icon: Linkedin,
  },
  { name: "Twitter", href: "https://twitter.com/mahedihsharif", icon: Twitter },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40 bg-background/80 backdrop-blur-xl">
      {/* Gradient line at top */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 to-purple-600 shadow-lg shadow-violet-500/25">
                <span className="text-lg font-bold text-white">M</span>
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">
                  Mahedi H Sharif
                </span>
                <p className="text-sm text-muted-foreground">
                  Full Stack Developer
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-muted-foreground">
              Full-stack developer building end-to-end web applications with
              React, Next.js, and Node.js — from pixel-perfect UIs to scalable
              backends.
            </p>

            {/* Contact Info */}
            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-violet-500" />
                <span>mahedi5061@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-violet-500" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-secondary/50 text-muted-foreground transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-500 hover:shadow-lg hover:shadow-violet-500/10"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-muted-foreground transition-colors hover:text-violet-500"
                  >
                    <span className="h-1 w-1 rounded-full bg-violet-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter / CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Let&apos;s Connect
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Open for freelance projects and full-time opportunities.
            </p>

            <div className="mt-4">
              <Button
                asChild
                className="w-full gap-2 bg-linear-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30"
              >
                <Link href="#contact">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </div>

            {/* Status Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1.5 text-xs text-green-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for hire
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row"
        >
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            &copy; {currentYear} Mahedi H Sharif. Made with
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            in Bangladesh
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-violet-500"
            >
              Privacy Policy
            </Link>
            <span className="text-muted-foreground/50">|</span>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-violet-500"
            >
              Terms of Service
            </Link>
          </div>

          {/* Scroll to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-secondary/50 text-muted-foreground transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-500"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
