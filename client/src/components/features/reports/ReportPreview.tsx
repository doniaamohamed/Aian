"use client";

import { motion } from "motion/react";
import { FileCheck, Sparkles, CheckCircle, TrendingUp, AlertTriangle } from "lucide-react";

export function ReportPreview() {
  return (
    <section id="preview" className="relative py-24 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <FileCheck className="h-3.5 w-3.5 text-gold-soft" /> Interactive Sample
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-display">
            Live Preview of an <span className="text-gold-gradient">AIAN Intelligence Report</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Every report is formatted with executive summaries, metrics, and direct source links.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl md:p-10 shadow-2xl space-y-8"
        >
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-gold-soft animate-ping" />
                <span className="text-xs uppercase tracking-widest font-mono text-gold-soft">Weekly Engineering Digest · Sprint 42</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground font-display mt-1">
                AIAN Organizational Intelligence Summary
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-muted-foreground bg-white/[0.05] px-3 py-1.5 rounded-xl border border-white/10 font-mono">
                Generated: Today 09:00 AM
              </span>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              <div className="flex items-center justify-between text-muted-foreground text-xs">
                <span>PRs Merged</span>
                <TrendingUp className="h-4 w-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-semibold text-foreground mt-2">48</p>
              <p className="text-[11px] text-emerald-400 mt-1">+12% vs last sprint</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              <div className="flex items-center justify-between text-muted-foreground text-xs">
                <span>Decisions Indexed</span>
                <Sparkles className="h-4 w-4 text-gold-soft" />
              </div>
              <p className="text-2xl font-semibold text-foreground mt-2">132</p>
              <p className="text-[11px] text-gold-soft mt-1">Across Slack & Zoom</p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              <div className="flex items-center justify-between text-muted-foreground text-xs">
                <span>Unresolved Risks</span>
                <AlertTriangle className="h-4 w-4 text-amber-400" />
              </div>
              <p className="text-2xl font-semibold text-foreground mt-2">2</p>
              <p className="text-[11px] text-amber-400 mt-1">Requires Security Review</p>
            </div>
          </div>

          {/* Core Insights */}
          <div className="space-y-4 pt-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground font-mono">
              Key Highlights & Evidence
            </h4>
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm text-foreground/90 space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                  <CheckCircle className="h-4 w-4" /> Migration Completed: PostgreSQL Auth Store
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                  Engineers merged PR #314 after resolving concurrency bottlenecks identified in Zoom call on Aug 18.
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-sm text-foreground/90 space-y-1">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold">
                  <AlertTriangle className="h-4 w-4" /> Action Required: OAuth Refresh Token Scope
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pl-6">
                  Slack thread #security-alerts flagged missing token rotation rule. Assigned to Lead Security Engineer.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
