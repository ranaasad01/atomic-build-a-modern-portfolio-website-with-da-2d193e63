"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 as Github, ArrowRight } from 'lucide-react';
import Link from "next/link";
import { Project } from "@/lib/data";
import { cardHover } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="group relative rounded-2xl border overflow-hidden flex flex-col h-full transition-all duration-300"
      style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute top-3 left-3">
          <span
            className="px-2 py-1 rounded-md text-xs font-medium text-white"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
          >
            {project.year}
          </span>
        </div>

        {project.featured && (
          <div className="absolute top-3 right-3">
            <span
              className="px-2 py-1 rounded-md text-xs font-semibold text-white"
              style={{ background: "rgba(99,102,241,0.9)" }}
            >
              Featured
            </span>
          </div>
        )}

        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-white hover:text-accent transition-colors"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
              aria-label="View on GitHub"
            >
              <Github size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-white hover:text-accent transition-colors"
              style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)" }}
              aria-label="View live demo"
            >
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3
          className="font-bold text-lg leading-tight group-hover:text-accent transition-colors duration-200"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-badge text-xs">
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="tag-badge text-xs">+{project.tags.length - 4}</span>
          )}
        </div>

        <div
          className="flex items-center justify-between pt-2 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium hover:text-accent transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                <Github size={13} />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium hover:text-accent transition-colors"
                style={{ color: "var(--text-muted)" }}
              >
                <ExternalLink size={13} />
                Live Demo
              </a>
            )}
          </div>
          <Link
            href={"/projects/" + project.slug}
            className="flex items-center gap-1 text-xs font-semibold text-accent hover:gap-2 transition-all duration-200"
          >
            Details
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
