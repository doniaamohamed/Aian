"use client";

import { motion } from "motion/react";
import { Zap, Shield, Heart, Compass, Cpu } from "lucide-react";

const values = [
  {
    title: "Autonomous Ownership",
    desc: "We trust engineers and designers to own entire systems end-to-end without micromanagement.",
    icon: Zap,
  },
  {
    title: "Relentless Curiosity",
    desc: "We push the boundaries of knowledge graph architectures, vector indexing, and multi-agent reasoning.",
    icon: Compass,
  },
  {
    title: "Privacy First & Zero-Trust",
    desc: "Enterprise trust is non-negotiable. Security, encryption, and strict governance guide every design choice.",
    icon: Shield,
  },
  {
    title: "High Craftsmanship",
    desc: "We care deeply about UI polish, sub-100ms performance latency, and API elegance.",
    icon: Cpu,
  },
];

export function CultureAndValues() {
  return (
    <section id="culture" className="relative py-24 bg-background/60 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Heart className="h-3.5 w-3.5 text-gold-soft" /> Cultural Pillars
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-display">
            How We Work & <span className="text-gold-gradient">Build Together</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Our team is small, highly aligned, and obsessed with building software that changes how companies remember.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-gold-soft/40 hover:bg-white/[0.04]"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3.5 text-gold-soft inline-flex">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground font-display">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
