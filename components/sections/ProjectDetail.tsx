"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code2 as Github, Calendar, Tag } from 'lucide-react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Project } from "@/lib/data";
import { fadeInUp, fadeInLeft, staggerContainer, viewportConfig } from "@/lib/animations";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface Props {
  project: Project;
}

export function ProjectDetailClient({ project }: Props) {
  const router = useRouter();

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <Header />
      <main className="pt-24 pb-0">
        {/* Hero image */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="max-w-6xl mx-auto">
              {project.featured && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
                  style={{ background: "rgba(99,102,241,0.9)" }}>
                  Featured Project
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {project.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back button */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent"
              style={{ color: "var(--text-secondary)" }}
            >
              <ArrowLeft size={16} />
              Back to Projects
            </button>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2 flex flex-col gap-8"
            >
              <motion.div variants={fadeInUp}>
                <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                  Project Overview
                </h2>
                <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                  {project.description}
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {project.longDescription}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-4"
            >
              <motion.div
                variants={fadeInUp}
                className="rounded-2xl border p-6 flex flex-col gap-4"
                style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
              >
                <h3 className="font-bold" style={{ color: "var(--text-primary)" }}>Project Info</h3>

                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-accent flex-shrink-0" />
                  <div>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>Year</p>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{project.year}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Tag size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Technologies</p>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {project.tags.slice(0, 3).join(", ")}
                      {project.tags.length > 3 ? " +" + (project.tags.length - 3) + " more" : ""}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary justify-center text-sm py-2.5"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary justify-center text-sm py-2.5"
                    >
                      <Github size={15} />
                      View Code
                    </a>
                  )}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link
                  href="/#projects"
                  className="btn-secondary w-full justify-center text-sm"
                >
                  <ArrowLeft size={15} />
                  All Projects
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
