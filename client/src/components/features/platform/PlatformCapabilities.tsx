"use client";

import { motion } from "motion/react";
import { Zap, Search, Eye, GitBranch, Lock, BarChart3 } from "lucide-react";

const capabilities = [
  {
    icon: Search,
    title: "Universal Cross-Source Search",
    desc: "Query Slack, Jira, GitHub, Notion, and transcripts with one natural language prompt. Get direct links to exact sources.",
  },
  {
    icon: GitBranch,
    title: "Automated Knowledge Graphing",
    desc: "AIAN links commits to tickets, transcripts to pull requests, and engineers to projects autonomously.",
  },
  {
    icon: Eye,
    title: "Continuous Audit & Eyes System",
    desc: "Monitors workspace activity to catch broken context, forgotten decisions, or security vulnerabilities before they compound.",
  },
  {
    icon: Zap,
    title: "Sub-Second Agentic Reasoning",
    desc: "Multi-agent engine executes deep context lookup across millions of data points with near-instant responses.",
  },
  {
    icon: Lock,
    title: "Zero-Trust Security & Tenant Isolation",
    desc: "Your data never leaves your tenant boundary. Support for bring-your-own-keys (BYOK) and on-premise execution.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Knowledge Analytics",
    desc: "Track organizational knowledge distribution, active contributors, topic frequency, and team velocity insights.",
  },
];

export function PlatformCapabilities() {
  return (
    <section id="capabilities" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-gold-soft" /> Key Capabilities
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-display">
            Built to Eliminate <span className="text-gold-gradient">Organizational Friction</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Everything your teams need to stay aligned, resolve blockers, and preserve institutional memory.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-gold-soft/30 hover:bg-white/[0.04] transition-all"
              >
                <div className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-gold-soft">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground font-display">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
