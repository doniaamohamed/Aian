import { MarketingLayout } from "@/layouts/MarketingLayout";
import { AgentsHero } from "@/components/features/agents/AgentsHero";
import { AgentShowcase } from "@/components/features/agents/AgentShowcase";
import { AgentWorkflow } from "@/components/features/agents/AgentWorkflow";
import { AgentCustomization } from "@/components/features/agents/AgentCustomization";
import { AgentsCTA } from "@/components/features/agents/AgentsCTA";

export const metadata = {
  title: "AI Agents — Autonomous Workforce for Enterprise",
  description:
    "Discover AIAN autonomous AI agents: Audit Eye, Search Agent, Code & Pipeline Agent, and Knowledge Synthesizer designed to work seamlessly with your team.",
};

export default function AgentsPage() {
  return (
    <MarketingLayout>
      <AgentsHero />
      <AgentShowcase />
      <AgentWorkflow />
      <AgentCustomization />
      <AgentsCTA />
    </MarketingLayout>
  );
}
