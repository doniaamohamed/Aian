"use client";

import { motion } from "motion/react";
import { Mail, MapPin, ShieldCheck, Headphones } from "lucide-react";

const contactCards = [
  {
    title: "Enterprise Sales",
    desc: "Talk to our solution architects for custom pricing, deployment, and pilot trials.",
    info: "sales@aian.ai",
    icon: Mail,
  },
  {
    title: "Technical Support",
    desc: "Existing customers can access dedicated priority support 24/7.",
    info: "support@aian.ai",
    icon: Headphones,
  },
  {
    title: "Security & Trust",
    desc: "Request SOC 2 reports, security whitepapers, or schedule penetration test reviews.",
    info: "security@aian.ai",
    icon: ShieldCheck,
  },
  {
    title: "Global Headquarters",
    desc: "AIAN Inc. — Silicon Valley & Distributed Operations.",
    info: "San Francisco, CA",
    icon: MapPin,
  },
];

export function ContactInfoGrid() {
  return (
    <section className="relative py-20 bg-background/50 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-gold-soft/30 hover:bg-white/[0.04] transition-all"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-gold-soft inline-flex">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground font-display">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
                <p className="mt-4 font-mono text-xs text-gold-soft font-semibold pt-3 border-t border-white/5">
                  {card.info}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
