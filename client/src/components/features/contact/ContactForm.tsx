"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle2, Sparkles, Building, User, Mail, MessageSquare, AlertCircle } from "lucide-react";
import axios from "axios";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    topic: "Sales Inquiry",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      await axios.post("/api/contact", formData);
      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(
        err.response?.data?.error || "An error occurred while sending your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-12">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl md:p-12"
        >
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 p-4 text-emerald-400 border border-emerald-500/20">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-display">
                Message Sent Successfully!
              </h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Thank you for reaching out to AIAN. Your message has been forwarded to our team and we will get back to you shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", company: "", topic: "Sales Inquiry", message: "" });
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-2.5 text-xs font-medium text-foreground hover:bg-white/10"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-gold-soft" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-gold-soft" /> Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft transition-all"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Building className="h-3.5 w-3.5 text-gold-soft" /> Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                    <Sparkles className="h-3.5 w-3.5 text-gold-soft" /> Inquiry Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-[#121215] px-4 py-3 text-sm text-foreground focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft transition-all"
                  >
                    <option value="Sales Inquiry">Sales & Enterprise Pricing</option>
                    <option value="Technical Support">Technical & Integration Support</option>
                    <option value="Security Compliance">Security & SOC 2 Compliance</option>
                    <option value="Partnerships">Partnerships & Media</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5 text-gold-soft" /> How can we help?
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your team size, tech stack, and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-gold-soft focus:outline-none focus:ring-1 focus:ring-gold-soft transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-gold btn-gold-hover flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-black transition-all disabled:opacity-50"
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;