"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Copy,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { JSX, useState } from "react";

// Sample blog post data
const blogPostsData: Record<
  string,
  {
    title: string;
    description: string;
    content: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
    author: {
      name: string;
      avatar: string;
      role: string;
    };
    tags: string[];
  }
> = {
  "building-scalable-apis-nodejs": {
    title: "Building Scalable APIs with Node.js and Express",
    description:
      "Learn how to design and implement production-ready RESTful APIs with proper error handling, authentication, and best practices.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop",
    category: "Backend",
    date: "December 15, 2024",
    readTime: "8 min read",
    author: {
      name: "Mahedi H Sharif",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      role: "Full Stack Developer",
    },
    tags: ["Node.js", "Express", "API", "Backend", "REST"],
    content: `
## Introduction

Building scalable APIs is a crucial skill for any backend developer. In this comprehensive guide, we'll explore the best practices and patterns for creating production-ready RESTful APIs using Node.js and Express.

## Setting Up the Project

First, let's set up our project structure. A well-organized codebase is the foundation of a maintainable application.

\`\`\`bash
mkdir my-api && cd my-api
npm init -y
npm install express mongoose dotenv cors helmet
npm install -D typescript @types/node @types/express
\`\`\`

## Project Structure

Here's the recommended folder structure for a scalable API:

\`\`\`
src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
└── app.ts
\`\`\`

## Creating the Express Server

Let's start by setting up our Express server with essential middleware:

\`\`\`typescript
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);

// Error handling
app.use(errorHandler);

export default app;
\`\`\`

## Error Handling

Proper error handling is essential for a production API. Here's a robust error handling pattern:

\`\`\`typescript
class AppError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};
\`\`\`

## Authentication with JWT

Implementing secure authentication is crucial. Here's how to set up JWT authentication:

\`\`\`typescript
import jwt from 'jsonwebtoken';

export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET!, {
    expiresIn: '7d'
  });
};

export const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return next(new AppError('Not authorized', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET!);
  req.user = await User.findById(decoded.id);
  next();
};
\`\`\`

## Rate Limiting

Protect your API from abuse with rate limiting:

\`\`\`typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later.'
});

app.use('/api', limiter);
\`\`\`

## Validation

Input validation prevents bad data from entering your system:

\`\`\`typescript
import { body, validationResult } from 'express-validator';

export const validateUser = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 }),
  body('name').trim().notEmpty(),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
\`\`\`

## Conclusion

Building scalable APIs requires attention to detail in areas like error handling, authentication, validation, and rate limiting. By following these patterns, you'll create robust APIs that can handle production traffic.

Remember to always:
- Use proper error handling
- Implement authentication and authorization
- Validate all inputs
- Add rate limiting
- Document your API
- Write tests

Happy coding!
    `,
  },
  "modern-state-management-react": {
    title: "Modern State Management in React Applications",
    description:
      "Explore different state management solutions including Redux Toolkit, Zustand, and React Query for optimal performance.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop",
    category: "Frontend",
    date: "December 10, 2024",
    readTime: "6 min read",
    author: {
      name: "Mahedi H Sharif",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      role: "Full Stack Developer",
    },
    tags: ["React", "Redux", "Zustand", "State Management", "Frontend"],
    content: `
## Introduction

State management is one of the most important aspects of building React applications. In this article, we'll explore modern solutions for managing state effectively.

## Local State with useState

For simple, component-level state, useState is still the go-to solution:

\`\`\`typescript
const [count, setCount] = useState(0);
const [user, setUser] = useState<User | null>(null);
\`\`\`

## Global State with Zustand

Zustand provides a lightweight alternative to Redux:

\`\`\`typescript
import { create } from 'zustand';

interface StoreState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

// Usage
function Counter() {
  const { count, increment } = useStore();
  return <button onClick={increment}>{count}</button>;
}
\`\`\`

## Server State with React Query

For server state, React Query is the industry standard:

\`\`\`typescript
import { useQuery, useMutation } from '@tanstack/react-query';

function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <Spinner />;
  if (error) return <Error message={error.message} />;

  return <PostList posts={data} />;
}
\`\`\`

## Conclusion

Choose the right tool for the job: useState for local state, Zustand or Redux for global state, and React Query for server state.
    `,
  },
};

// Related posts
const relatedPosts = [
  {
    id: 4,
    title: "TypeScript Best Practices for Large Scale Applications",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
    category: "TypeScript",
    readTime: "12 min read",
    slug: "typescript-best-practices",
  },
  {
    id: 5,
    title: "Authentication Strategies: JWT vs Session-Based",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
    category: "Security",
    readTime: "9 min read",
    slug: "authentication-jwt-vs-session",
  },
  {
    id: 6,
    title: "Building Real-Time Features with WebSockets",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
    category: "Backend",
    readTime: "7 min read",
    slug: "realtime-websockets",
  },
];

// Code block component with copy functionality
function CodeBlock({ code, language }: { code: string; language: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-xl border border-border/50 bg-zinc-950">
      <div className="flex items-center justify-between border-b border-border/50 bg-zinc-900/50 px-4 py-2">
        <span className="text-sm text-muted-foreground">{language}</span>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-zinc-800 hover:text-foreground"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-green-500">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4">
        <code className="text-sm text-zinc-300">{code}</code>
      </pre>
    </div>
  );
}

// Parse content and render with proper formatting
function BlogContent({ content }: { content: string }) {
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];
  let currentCodeBlock: string[] = [];
  let currentLanguage = "";
  let inCodeBlock = false;
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code block handling
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <CodeBlock
            key={key++}
            code={currentCodeBlock.join("\n")}
            language={currentLanguage}
          />,
        );
        currentCodeBlock = [];
        currentLanguage = "";
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        currentLanguage = line.slice(3) || "code";
      }
      continue;
    }

    if (inCodeBlock) {
      currentCodeBlock.push(line);
      continue;
    }

    // Headings
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="mb-4 mt-12 text-2xl font-bold text-foreground first:mt-0"
        >
          {line.slice(3)}
        </h2>,
      );
      continue;
    }

    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="mb-3 mt-8 text-xl font-semibold text-foreground"
        >
          {line.slice(4)}
        </h3>,
      );
      continue;
    }

    // Lists
    if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="ml-6 list-disc text-muted-foreground">
          {line.slice(2)}
        </li>,
      );
      continue;
    }

    // Inline code
    if (line.includes("`") && !line.startsWith("```")) {
      const parts = line.split(/(`[^`]+`)/);
      elements.push(
        <p key={key++} className="mb-4 leading-relaxed text-muted-foreground">
          {parts.map((part, idx) => {
            if (part.startsWith("`") && part.endsWith("`")) {
              return (
                <code
                  key={idx}
                  className="rounded bg-violet-500/10 px-1.5 py-0.5 text-sm text-violet-500"
                >
                  {part.slice(1, -1)}
                </code>
              );
            }
            return part;
          })}
        </p>,
      );
      continue;
    }

    // Regular paragraphs
    if (line.trim()) {
      elements.push(
        <p key={key++} className="mb-4 leading-relaxed text-muted-foreground">
          {line}
        </p>,
      );
    }
  }

  return <>{elements}</>;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const post =
    blogPostsData[slug] || blogPostsData["building-scalable-apis-nodejs"];

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative">
        {/* Background Image */}
        <div className="relative h-[50vh] min-h-100 w-full overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-8">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back Button */}
              <Link
                href="/blog"
                className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-violet-500"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>

              {/* Category */}
              <Badge className="mb-4 border-0 bg-violet-600 text-white">
                {post.category}
              </Badge>

              {/* Title */}
              <h1 className="mb-6 text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-violet-500/30">
                    <AvatarImage
                      src={post.author.avatar}
                      alt={post.author.name}
                    />
                    <AvatarFallback>MH</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-foreground">
                      {post.author.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {post.author.role}
                    </p>
                  </div>
                </div>

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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="relative py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="prose prose-lg max-w-none"
            >
              <BlogContent content={post.content} />
            </motion.div>

            {/* Sidebar Actions */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="sticky top-32 flex flex-col gap-4">
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all ${
                    liked
                      ? "border-red-500/50 bg-red-500/10 text-red-500"
                      : "border-border/50 bg-card/50 text-muted-foreground hover:border-red-500/30 hover:text-red-500"
                  }`}
                >
                  <Heart className={`h-5 w-5 ${liked ? "fill-current" : ""}`} />
                </button>

                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all ${
                    bookmarked
                      ? "border-violet-500/50 bg-violet-500/10 text-violet-500"
                      : "border-border/50 bg-card/50 text-muted-foreground hover:border-violet-500/30 hover:text-violet-500"
                  }`}
                >
                  <Bookmark
                    className={`h-5 w-5 ${bookmarked ? "fill-current" : ""}`}
                  />
                </button>

                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground transition-all hover:border-violet-500/30 hover:text-violet-500">
                  <Share2 className="h-5 w-5" />
                </button>

                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/50 text-muted-foreground transition-all hover:border-violet-500/30 hover:text-violet-500">
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>
            </motion.aside>
          </div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 border-t border-border/50 pt-8"
          >
            <h3 className="mb-4 text-sm font-medium text-muted-foreground">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="cursor-pointer border-violet-500/30 bg-violet-500/5 transition-all hover:border-violet-500 hover:bg-violet-500/10"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <Avatar className="h-20 w-20 border-2 border-violet-500/30">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>MH</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground">
                  {post.author.name}
                </h3>
                <p className="text-violet-500">{post.author.role}</p>
                <p className="mt-2 text-muted-foreground">
                  Passionate about building scalable web applications and
                  sharing knowledge with the developer community.
                </p>
              </div>
              <Button
                variant="outline"
                className="border-violet-500/30 hover:border-violet-500 hover:bg-violet-500/10"
              >
                Follow
              </Button>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-2xl font-bold text-foreground">
              Related Articles
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost, index) => (
                <motion.article
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="overflow-hidden rounded-xl border border-border/50 bg-card/50 transition-all duration-300 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5">
                      <div className="relative aspect-16/10 overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <Badge className="absolute left-3 top-3 border-0 bg-violet-600 text-white">
                          {relatedPost.category}
                        </Badge>
                      </div>
                      <div className="p-4">
                        <h3 className="line-clamp-2 font-semibold text-foreground transition-colors group-hover:text-violet-500">
                          {relatedPost.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {relatedPost.readTime}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border/50 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-violet-500"
            >
              <ArrowLeft className="h-4 w-4" />
              All Articles
            </Link>
            <Link
              href="/blog/modern-state-management-react"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-violet-500"
            >
              Next Article
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
