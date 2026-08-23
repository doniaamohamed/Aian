"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export function CareersCTA() {
  return (
    <section className="relative py-24 border-t border-white/5">
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl md:p-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl font-display">
            Don't see your specific role? <span className="text-gold-gradient">Reach out anyway.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            We are always looking for exceptional talent. Send us your CV, GitHub, or portfolio and let's talk.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-gold btn-gold-hover inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold text-black"
            >
              <Sparkles className="h-4 w-4" /> Send Open Application
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
