"use client";

import { motion } from "motion/react";
import { Laptop, Plane, DollarSign, GraduationCap, Clock, Award } from "lucide-react";

const perks = [
  { title: "Top-Tier Equity & Salary", desc: "Competitive benchmarked compensation with meaningful founding-team equity.", icon: DollarSign },
  { title: "Flexible & Remote-First", desc: "Work from anywhere in the world with flexible hours built around deep work.", icon: Clock },
  { title: "Custom Setup Budget", desc: "$4,000 budget for your choice of MacBook Pro, ergonomic desk, and 4K displays.", icon: Laptop },
  { title: "Annual Team Retreats", desc: "Twice-a-year all-expenses-paid team gatherings in global destinations.", icon: Plane },
  { title: "Unlimited Learning Stipend", desc: "$2,500 annual stipend for conferences, books, AI research papers, and courses.", icon: GraduationCap },
  { title: "Comprehensive Healthcare", desc: "100% premium coverage for health, dental, vision, and mental wellness.", icon: Award },
];

export function PerksAndBenefits() {
  return (
    <section className="relative py-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Award className="h-3.5 w-3.5 text-gold-soft" /> Perks & Compensation
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl font-display">
            Designed for <span className="text-gold-gradient">High-Performing Builders</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 hover:border-gold-soft/30 hover:bg-white/[0.04] transition-all"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-gold-soft inline-flex">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground font-display">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
