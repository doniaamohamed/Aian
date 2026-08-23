"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function PlatformCTA() {
  return (
    <section className="relative py-24 overflow-hidden border-t border-white/5">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[140px]"
        style={{ background: "radial-gradient(circle, #C9982B 0%, transparent 70%)" }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl md:p-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl font-display">
            Ready to give your organization a <span className="text-gold-gradient">shared brain?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            Get started today with our cloud version or request a dedicated self-hosted enterprise setup.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/register"
              className="btn-gold btn-gold-hover inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-black"
            >
              <Sparkles className="h-4 w-4" /> Start 14-Day Free Trial
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-white/10"
            >
              Talk to Sales <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
