"use client";

import { motion } from "motion/react";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How fast can our enterprise start a pilot?",
    a: "OAuth integrations take under 5 minutes. Initial graph indexing completes within 1-2 hours depending on workspace data size.",
  },
  {
    q: "Does AIAN offer self-hosted / VPC deployment?",
    a: "Yes! AIAN Enterprise plan supports private AWS/GCP/Azure Kubernetes deployment with zero outbound data egress.",
  },
  {
    q: "How does AIAN respect existing permission settings?",
    a: "AIAN mirrors Slack channel permissions, Jira project roles, and GitHub repository access control continuously.",
  },
  {
    q: "What support tiers are included?",
    a: "All Enterprise plans include a dedicated Slack channel with our engineering team and a 99.9% uptime SLA.",
  },
];

export function ContactFAQ() {
  return (
    <section className="relative py-20 border-t border-white/5">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <HelpCircle className="h-3.5 w-3.5 text-gold-soft" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-display">
            Quick Answers
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-2"
            >
              <h3 className="text-base font-semibold text-foreground font-display">
                {faq.q}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
