"use client";

import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Mail, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from "@/lib/data";
import { fadeInUp, staggerContainer, viewportConfig } from "@/lib/animations";

const socials = [
  { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <Twitter size={18} />, href: "https://twitter.com", label: "Twitter" },
  { icon: <Mail size={18} />, href: "mailto:" + personalInfo.email, label: "Email" },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-3 gap-8 mb-10"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="sm:col-span-1">
            <div className="text-2xl font-bold gradient-text mb-3">AM.</div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
              Full-stack engineer crafting elegant solutions to complex problems.
            </p>
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg border transition-all duration-200 hover:border-accent hover:text-accent"
                  style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--text-secondary)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm transition-colors hover:text-accent"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
              Contact
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href={"mailto:" + personalInfo.email}
                  className="text-sm transition-colors hover:text-accent"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                  {personalInfo.location}
                </span>
              </li>
              <li className="mt-2">
                <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Open to opportunities
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Made with
            <Heart size={12} className="text-accent fill-accent" />
            using Next.js &amp; Tailwind CSS
          </p>
          <motion.button
            onClick={scrollToTop}
            className="w-9 h-9 flex items-center justify-center rounded-xl border transition-all duration-200 hover:border-accent hover:text-accent"
            style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--text-secondary)" }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}
