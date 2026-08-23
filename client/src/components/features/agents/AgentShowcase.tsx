"use client";

import { motion } from "motion/react";
import { Search, ScanEye, GitBranch, Shield, Sparkles, MessageSquare } from "lucide-react";

const agents = [
  {
    name: "Search & Discovery Agent",
    tagline: "Natural language query across all organizational data",
    desc: "Answers complex questions like 'Why did we change the payment provider in Q3?' with full evidence citations to Slack threads and PRs.",
    icon: Search,
    color: "from-amber-500/20 to-yellow-500/10",
  },
  {
    name: "Audit Eye Agent",
    tagline: "Continuous compliance & quality surveillance",
    desc: "Detects orphaned tickets, unreviewed PRs, missing meeting documentation, and security oversights before they cause downtime.",
    icon: ScanEye,
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    name: "Pipeline & Code Agent",
    tagline: "Engineering context & dependency tracking",
    desc: "Links code commits to Jira specs, tracks regression history, and explains legacy pull requests for new engineers.",
    icon: GitBranch,
    color: "from-blue-500/20 to-indigo-500/10",
  },
  {
    name: "Knowledge Synthesizer",
    tagline: "Automated executive digests & wiki generation",
    desc: "Summarizes weekly engineering velocity, product roadmap shifts, and client meeting outcomes into clean Markdown reports.",
    icon: Sparkles,
    color: "from-purple-500/20 to-pink-500/10",
  },
  {
    name: "Governance & RBAC Bot",
    tagline: "Strict data privacy & scope enforcement",
    desc: "Ensures agents only retrieve documents and messages that the requesting user is explicitly authorized to view.",
    icon: Shield,
    color: "from-amber-600/20 to-orange-500/10",
  },
  {
    name: "Meeting Assistant Agent",
    tagline: "Real-time action item extraction & sync",
    desc: "Transcribes call audio, flags follow-ups, and auto-assigns tickets in Jira or Linear directly from Zoom/Google Meet.",
    icon: MessageSquare,
    color: "from-cyan-500/20 to-blue-500/10",
  },
];

export function AgentShowcase() {
  return (
    <section id="showcase" className="relative py-24 bg-background/60 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-gold-soft" /> Meet The Workforce
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-display">
            Specialized Autonomous <span className="text-gold-gradient">AI Agents</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Each agent is purpose-built with fine-tuned skills, strict domain boundaries, and verifiable reasoning output.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-gold-soft/40 hover:bg-white/[0.04]"
              >
                <div
                  className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${agent.color} opacity-40 blur-2xl group-hover:opacity-70 transition-opacity`}
                />
                <div>
                  <div className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 text-gold-soft">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground font-display">
                    {agent.name}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-gold-soft">
                    {agent.tagline}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {agent.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground">
                  <span>Status: Active</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Ready
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
