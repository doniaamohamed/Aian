"use client";

import { motion } from "motion/react";
import { Sliders, Shield, Zap, Lock } from "lucide-react";

export function AgentCustomization() {
  return (
    <section className="relative py-20 bg-background/50 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <Sliders className="h-3.5 w-3.5 text-gold-soft" /> Full Customization & Governance
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-display">
              You maintain total control over <span className="text-gold-gradient">agent behavior.</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed">
              Define domain rules, custom persona instructions, rate limits, and approval thresholds. AIAN agents never act outside your explicit security policy.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { title: "Custom System Prompts & Guardrails", desc: "Tailor agent tone, language preferences, and domain-specific rules." },
                { title: "Human-in-the-Loop Approvals", desc: "Require manager approval before an agent posts to Slack or updates tickets." },
                { title: "Per-Agent Security Scoping", desc: "Limit agent access strictly to designated projects or repositories." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="rounded-lg border border-gold-soft/30 bg-gold-soft/10 p-1 text-gold-soft shrink-0 mt-0.5">
                    <Zap className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl space-y-6"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-gold-soft" />
                <span className="font-display font-semibold text-foreground text-sm">Agent Permission Matrix</span>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                Policy Active
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <span className="text-muted-foreground">Search Agent</span>
                <span className="text-foreground font-semibold">READ_ONLY · All Accessible Sources</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <span className="text-muted-foreground">Audit Agent</span>
                <span className="text-foreground font-semibold">WRITE · Slack Alerts & Draft PRs</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <span className="text-muted-foreground">Governance Bot</span>
                <span className="text-foreground font-semibold">ENFORCE · Mandatory Approval</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
