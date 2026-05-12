"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { fadeInUp, staggerContainer, staggerContainerFast, viewportConfig } from "@/lib/animations";

const categoryColors: Record<string, string> = {
  Frontend: "#6366f1",
  Backend: "#8b5cf6",
  "Tools & Cloud": "#a78bfa",
};

const categoryIcons: Record<string, string> = {
  Frontend: "⚡",
  Backend: "🔧",
  "Tools & Cloud": "☁️",
};

const levelLabels = ["", "Beginner", "Basic", "Intermediate", "Advanced", "Expert"];

function SkillBar({ level }: { level: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="h-1.5 flex-1 rounded-full"
          style={{
            background: i < level ? "var(--accent)" : "var(--border)",
            opacity: i < level ? 1 - i * 0.1 : 0.3,
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05, duration: 0.4, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Tech Stack
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title">
            Skills &amp; Expertise
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
            Technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => {
            const accentColor = categoryColors[category.category] || "#6366f1";
            const bgColor = accentColor + "20";
            return (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ delay: catIdx * 0.1 }}
                className="rounded-2xl border p-6 transition-all duration-300"
                style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
                whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.4)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: bgColor }}
                  >
                    {categoryIcons[category.category]}
                  </div>
                  <div>
                    <h3 className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                      {category.category}
                    </h3>
                    <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                <motion.div
                  variants={staggerContainerFast}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  className="flex flex-col gap-4"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeInUp}
                      className="flex flex-col gap-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                          {skill.name}
                        </span>
                        <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                          {levelLabels[skill.level]}
                        </span>
                      </div>
                      <SkillBar level={skill.level} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 text-center"
        >
          <motion.p variants={fadeInUp} className="text-sm mb-6" style={{ color: "var(--text-muted)" }}>
            Also familiar with
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2">
            {[
              "Rust", "Elixir", "Swift", "Kotlin", "MongoDB", "Elasticsearch",
              "RabbitMQ", "Apache Kafka", "Nginx", "Ansible", "Jest", "Cypress",
              "Playwright", "Webpack", "Vite", "Turborepo",
            ].map((tech) => (
              <span key={tech} className="tag-badge cursor-default">
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
