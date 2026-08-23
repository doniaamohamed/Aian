"use client";

import { motion } from "motion/react";
import { Mail, Sparkles, MessageSquare } from "lucide-react";
import { NeuralBackdrop } from "@/components/features/landing/NeuralBackdrop";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <NeuralBackdrop density={16} />
      </div>
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-25 blur-[140px]"
        style={{ background: "radial-gradient(circle, #C9982B 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground"
        >
          <Mail className="h-3.5 w-3.5 text-gold-soft" /> Get In Touch
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-display text-[36px] font-semibold leading-[1.1] tracking-tight text-foreground md:text-[58px]"
        >
          We'd love to hear from <span className="text-gold-gradient">your team.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-muted-foreground md:text-[18px]"
        >
          Have questions about AIAN Enterprise, custom agent development, security compliance, or dedicated hosting? Contact our team anytime.
        </motion.p>
      </div>
    </section>
  );
}
