"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";
import { fadeInUp, staggerContainer, staggerContainerSlow, viewportConfig } from "@/lib/animations";

const filters = ["All", "Featured", "2024", "2023", "2022"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    return p.year === activeFilter;
  });

  return (
    <section id="projects" className="section-padding" style={{ background: "var(--bg-surface)" }}>
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12"
        >
          <motion.p variants={fadeInUp} className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Portfolio
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title">
            Featured Projects
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
            A selection of work I&apos;m proud of — from side projects to production systems
          </motion.p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: isActive ? "var(--accent)" : "var(--bg)",
                  color: isActive ? "white" : "var(--text-secondary)",
                  border: isActive ? "1px solid var(--accent)" : "1px solid var(--border)",
                }}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainerSlow}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div key={project.slug} variants={fadeInUp}>
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ color: "var(--text-muted)" }}>
            No projects found for this filter.
          </div>
        )}

        {/* View all CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
