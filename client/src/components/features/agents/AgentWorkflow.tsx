"use client";

import { motion } from "motion/react";
import { ArrowRight, Bot, Database, Search, ShieldCheck, CheckCircle2 } from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    title: "Event Trigger or User Request",
    desc: "Agent listens to schedule, webhook event, or direct user chat prompt.",
    icon: Bot,
  },
  {
    step: "02",
    title: "Graph Context Query",
    desc: "Retrieves relevant nodes from knowledge graph filtered by security scope.",
    icon: Database,
  },
  {
    step: "03",
    title: "Multi-Agent Synthesis",
    desc: "Reasoning models evaluate evidence chains, code diffs, and meeting transcripts.",
    icon: Search,
  },
  {
    step: "04",
    title: "Action & Verified Output",
    desc: "Returns grounded answers with inline citations or triggers automated workflows.",
    icon: CheckCircle2,
  },
];

export function AgentWorkflow() {
  return (
    <section className="relative py-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5 text-gold-soft" /> How Agents Work
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-display">
            Grounding & <span className="text-gold-gradient">Explainable Execution</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Every response and action taken by AIAN agents is strictly anchored in your company's actual data.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((s, index) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-bold text-gold-soft">
                    {s.step}
                  </span>
                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-2.5 text-gold-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-foreground font-display">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>

                {index < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-muted-foreground/40">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
