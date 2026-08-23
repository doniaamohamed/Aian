"use client";

import { motion } from "motion/react";
import { Database, Network, Brain, Shield, Workflow } from "lucide-react";

const architectureLayers = [
  {
    step: "Layer 01",
    title: "Multi-Source Ingestion Engine",
    desc: "Real-time webhooks and incremental sync for Slack, GitHub, Jira, Notion, Zoom, and Zendesk with granular OAuth control.",
    icon: Database,
    tags: ["Real-time Sync", "Zero Retention Option", "Encrypted Pipeline"],
  },
  {
    step: "Layer 02",
    title: "Dynamic Knowledge Graph Synthesis",
    desc: "Transforms isolated text, pull requests, and transcripts into semantic entities, linking people, decisions, and codebase paths.",
    icon: Network,
    tags: ["Entity Resolution", "Dependency Graph", "Temporal Tracking"],
  },
  {
    step: "Layer 03",
    title: "Neural Reasoning & Search Engine",
    desc: "Hybrid vector-keyword search coupled with multi-agent reasoning to return precise answers with verifiable source evidence.",
    icon: Brain,
    tags: ["Hybrid Search", "Evidence Tracing", "Sub-100ms Latency"],
  },
  {
    step: "Layer 04",
    title: "Enterprise Governance & Security",
    desc: "Role-based access control (RBAC), SOC 2 Type II compliance, tenant isolation, and explicit permission inheritance.",
    icon: Shield,
    tags: ["SOC 2 Certified", "RBAC Enforcement", "Audit Logging"],
  },
];

export function PlatformArchitecture() {
  return (
    <section className="relative py-20 bg-background/50 border-y border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Workflow className="h-3.5 w-3.5 text-gold-soft" /> Architecture Breakdown
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-display">
            Engineered for <span className="text-gold-gradient">Enterprise Scale</span>
          </h2>
          <p className="text-muted-foreground text-base">
            From data ingestion to agent execution, AIAN operates as a secure, distributed system built for high accuracy.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {architectureLayers.map((layer, index) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-300 hover:border-gold-soft/40 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-widest text-gold-soft uppercase">
                    {layer.step}
                  </span>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-gold-soft group-hover:bg-gold-soft/10 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-foreground font-display">
                  {layer.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {layer.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {layer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/[0.04] border border-white/10 px-3 py-1 text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
