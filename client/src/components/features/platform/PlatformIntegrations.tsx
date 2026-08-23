"use client";

import { motion } from "motion/react";
import { Slack, Github, MessageSquare, Video, FileText, Plug, Trello } from "lucide-react";

const integrations = [
  { name: "Slack", icon: Slack, desc: "Ingests messages, threads, and decision channels." },
  { name: "GitHub", icon: Github, desc: "Connects PRs, code commits, issues, and diffs." },
  { name: "Jira", icon: MessageSquare, desc: "Indexes tickets, sprint goals, and status updates." },
  { name: "Zoom", icon: Video, desc: "Transcribes meetings and extracts key action items." },
  { name: "Trello", icon: Trello, desc: "Syncs project boards and task management." },
];

export function PlatformIntegrations() {
  return (
    <section className="relative py-20 bg-background/50 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Plug className="h-3.5 w-3.5 text-gold-soft" /> Ecosystem Connectors
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-display">
            Connect your tools in <span className="text-gold-gradient">under 2 minutes</span>
          </h2>
          <p className="text-muted-foreground text-base">
            No complex ETL pipelines or manual configuration. AIAN connects natively to your existing tech stack.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-md"
              >
                <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3 text-gold-soft shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground font-display">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
