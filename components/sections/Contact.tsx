"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter } from 'lucide-react';
import { personalInfo } from "@/lib/data";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, viewportConfig } from "@/lib/animations";

type FormState = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email address";
    if (!form.message.trim()) newErrors.message = "Message is required";
    else if (form.message.trim().length < 20) newErrors.message = "Message must be at least 20 characters";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setFormState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-accent/40";

  return (
    <section id="contact" className="section-padding" style={{ background: "var(--bg)" }}>
      <div className="container-max">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Contact
          </motion.p>
          <motion.h2 variants={fadeInUp} className="section-title">
            Let&apos;s Work Together
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info panel */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                Get in touch
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Whether you have a question, a project proposal, or just want to say hi — my inbox is always open.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={"mailto:" + personalInfo.email}
                className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:border-accent group"
                style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(99,102,241,0.1)" }}>
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>Email</p>
                  <p className="text-sm font-semibold group-hover:text-accent transition-colors" style={{ color: "var(--text-primary)" }}>
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border"
                style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(99,102,241,0.1)" }}>
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: "var(--text-muted)" }}>Location</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                Find me on
              </p>
              <div className="flex gap-3">
                {[
                  { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
                  { icon: <Linkedin size={18} />, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: <Twitter size={18} />, href: "https://twitter.com", label: "Twitter" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-xl border transition-all duration-200 hover:border-accent hover:text-accent"
                    style={{ background: "var(--bg-surface)", borderColor: "var(--border)", color: "var(--text-secondary)" }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl border" style={{ background: "rgba(99,102,241,0.05)", borderColor: "rgba(99,102,241,0.2)" }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-semibold text-accent">Available for work</span>
              </div>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Currently open to full-time roles and freelance projects.
              </p>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border p-6 sm:p-8" style={{ background: "var(--bg-surface)", borderColor: "var(--border)" }}>
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(34,197,94,0.1)" }}>
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: "var(--text-primary)" }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setFormState("idle")}
                    className="btn-primary mt-2"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                        Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass}
                        style={{
                          background: "var(--bg)",
                          borderColor: errors.name ? "#ef4444" : "var(--border)",
                          color: "var(--text-primary)",
                        }}
                      />
                      {errors.name && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClass}
                        style={{
                          background: "var(--bg)",
                          borderColor: errors.email ? "#ef4444" : "var(--border)",
                          color: "var(--text-primary)",
                        }}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle size={11} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, collaboration, etc."
                      className={inputClass}
                      style={{
                        background: "var(--bg)",
                        borderColor: "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or idea..."
                      className={inputClass + " resize-none"}
                      style={{
                        background: "var(--bg)",
                        borderColor: errors.message ? "#ef4444" : "var(--border)",
                        color: "var(--text-primary)",
                      }}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle size={11} /> {errors.message}
                      </p>
                    )}
                  </div>

                  {formState === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg text-sm text-red-500"
                      style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}>
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "loading"}
                    className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {formState === "loading" ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
