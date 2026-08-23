"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, ArrowRight, Briefcase } from "lucide-react";

const positions = [
  {
    title: "Senior Full-Stack Engineer (Next.js / Node.js)",
    dept: "Engineering",
    location: "Remote (US / EMEA)",
    type: "Full-Time",
    desc: "Lead front-end development for AIAN web app, interactive graph visualizations, and multi-tenant agent UI.",
  },
  {
    title: "Staff AI/ML Engineer — Graph Reasoning",
    dept: "AI Research",
    location: "San Francisco / Remote",
    type: "Full-Time",
    desc: "Optimize entity extraction pipelines, fine-tune hybrid RAG search, and scale vector-graph embeddings.",
  },
  {
    title: "Enterprise Solutions Architect",
    dept: "Sales & Solutions",
    location: "Remote (EMEA / US)",
    type: "Full-Time",
    desc: "Partner with Fortune 500 tech leads to deploy self-hosted AIAN instances and design enterprise integrations.",
  },
  {
    title: "Product Designer (Design Systems & AI UX)",
    dept: "Product",
    location: "Remote",
    type: "Full-Time",
    desc: "Craft minimalist, responsive interfaces, agentic state visualizers, and accessible design system primitives.",
  },
];

export function OpenPositions() {
  const [selectedDept, setSelectedDept] = useState("All");

  const filtered = selectedDept === "All"
    ? positions
    : positions.filter((p) => p.dept === selectedDept);

  return (
    <section id="positions" className="relative py-24 bg-background/50 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Briefcase className="h-3.5 w-3.5 text-gold-soft" /> Open Roles
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-display">
            Find Your Next <span className="text-gold-gradient">Mission</span>
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", "Engineering", "AI Research", "Product", "Sales & Solutions"].map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                selectedDept === dept
                  ? "bg-gold-soft text-black font-semibold"
                  : "bg-white/[0.03] border border-white/10 text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Positions list */}
        <div className="space-y-4">
          {filtered.map((pos, i) => (
            <motion.div
              key={pos.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col md:flex-row md:items-center justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-gold-soft/40 hover:bg-white/[0.04] transition-all gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-gold-soft font-mono font-semibold">{pos.dept}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {pos.location}
                  </span>
                  <span>·</span>
                  <span>{pos.type}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground font-display group-hover:text-gold-soft transition-colors">
                  {pos.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
                  {pos.desc}
                </p>
              </div>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-2.5 text-xs font-medium text-foreground hover:bg-gold-soft hover:text-black transition-all shrink-0"
              >
                Apply Now <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
