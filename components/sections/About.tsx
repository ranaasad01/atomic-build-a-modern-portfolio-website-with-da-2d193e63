"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Download } from 'lucide-react';
import { personalInfo } from "@/lib/data";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportConfig,
} from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="section-padding" style={{ background: "var(--bg-surface)" }}>
      <div className="container-max">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            About Me
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title">
            Crafting Digital Experiences
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
            Passionate engineer building products that make a difference
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Photo */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-accent/20 animate-pulse-slow" />
              <div className="absolute -inset-8 rounded-3xl border border-accent/10" />

              {/* Photo container */}
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2"
                style={{ borderColor: "var(--border)" }}>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/054/511/449/small/portrait-of-a-young-male-software-developer-in-his-office-photo.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl shadow-xl border text-sm font-semibold"
                style={{
                  background: "var(--bg)",
                  borderColor: "var(--border)",
                  color: "var(--text-primary)",
                }}
              >
                <span className="text-accent">6+</span> Years Experience
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeInRight}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
                Hi, I&apos;m {personalInfo.name} 👋
              </h3>
              <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                {personalInfo.bio}
              </p>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {personalInfo.bioExtended}
              </p>
            </motion.div>

            {/* Info pills */}
            <motion.div variants={fadeInRight} className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border"
                style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                <MapPin size={14} className="text-accent" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm border"
                style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                <Mail size={14} className="text-accent" />
                {personalInfo.email}
              </span>
            </motion.div>

            {/* Stats grid */}
            <motion.div variants={fadeInRight} className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border text-center"
                  style={{ background: "var(--bg)", borderColor: "var(--border)" }}
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={fadeInRight} className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                download
                className="btn-primary"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-secondary"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
