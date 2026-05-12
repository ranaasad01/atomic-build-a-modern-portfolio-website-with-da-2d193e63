"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2 as Github, Briefcase as Linkedin, Mail, MessageCircle as Twitter } from 'lucide-react';
import { personalInfo, socialLinks } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github size={18} />,
  Linkedin: <Linkedin size={18} />,
  Twitter: <Twitter size={18} />,
  Mail: <Mail size={18} />,
};

const roles = [
  "Full-Stack Engineer",
  "React Specialist",
  "TypeScript Enthusiast",
  "Open Source Contributor",
  "Problem Solver",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length - 1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border"
              style={{
                background: "rgba(99,102,241,0.1)",
                borderColor: "rgba(99,102,241,0.3)",
                color: "var(--accent-light)",
              }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {personalInfo.availability}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            variants={fadeInUp}
            className="text-lg font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={fadeInUp} className="h-12 flex items-center">
            <span className="text-2xl sm:text-3xl font-semibold" style={{ color: "var(--text-secondary)" }}>
              {displayed}
              <span className="inline-block w-0.5 h-7 ml-1 bg-accent animate-pulse align-middle" />
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl max-w-2xl text-balance leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {personalInfo.tagline} — I craft high-performance web applications
            with clean code and exceptional user experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <button
              onClick={() => handleScroll("projects")}
              className="btn-primary text-base px-8 py-3.5"
            >
              View My Work
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="btn-secondary text-base px-8 py-3.5"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mt-2">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-200 hover:scale-110"
                style={{
                  background: "var(--bg-surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
                whileHover={{ borderColor: "var(--accent)", color: "var(--accent)" }}
                whileTap={{ scale: 0.9 }}
              >
                {iconMap[link.icon]}
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.button
            variants={fadeInUp}
            onClick={() => handleScroll("about")}
            className="mt-8 flex flex-col items-center gap-2 group"
            style={{ color: "var(--text-muted)" }}
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={16} className="group-hover:text-accent transition-colors" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
