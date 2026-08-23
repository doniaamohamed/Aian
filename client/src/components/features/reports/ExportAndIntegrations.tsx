"use client";

import { motion } from "motion/react";
import { Download, Mail, Send, Share2, Clock, Check } from "lucide-react";

const exportDestinations = [
  { name: "PDF & Markdown Export", desc: "Download high-res PDF or raw GFM Markdown for internal documentation.", icon: Download },
  { name: "Slack & Teams Digest", desc: "Schedule daily/weekly posts directly into team leadership channels.", icon: Send },
  { name: "Automated Email Reports", desc: "Deliver formatted HTML digests to executive inboxes on set schedules.", icon: Mail },
  { name: "Notion & Confluence Sync", desc: "Auto-publish report updates into company knowledge bases.", icon: Share2 },
];

export function ExportAndIntegrations() {
  return (
    <section className="relative py-20 bg-background/50 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Clock className="h-3.5 w-3.5 text-gold-soft" /> Scheduled Distribution
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-display">
            Deliver Reports <span className="text-gold-gradient">Where Your Team Works</span>
          </h2>
          <p className="text-muted-foreground text-base">
            No new apps to open. Export reports as PDF/Markdown or send them automatically to Slack and email.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exportDestinations.map((dest, idx) => {
            const Icon = dest.icon;
            return (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-gold-soft/30 hover:bg-white/[0.04] transition-all"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-gold-soft inline-flex">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground font-display">
                  {dest.name}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {dest.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
