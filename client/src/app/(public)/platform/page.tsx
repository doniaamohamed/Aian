import { MarketingLayout } from "@/layouts/MarketingLayout";
import { PlatformHero } from "@/components/features/platform/PlatformHero";
import { PlatformArchitecture } from "@/components/features/platform/PlatformArchitecture";
import { PlatformCapabilities } from "@/components/features/platform/PlatformCapabilities";
import { PlatformIntegrations } from "@/components/features/platform/PlatformIntegrations";
import { PlatformCTA } from "@/components/features/platform/PlatformCTA";

export const metadata = {
  title: "Platform Architecture — AIAN Intelligence Engine",
  description:
    "Explore the AIAN platform architecture: dynamic knowledge graph synthesis, hybrid vector search, continuous audit eyes, and enterprise zero-trust security.",
};

export default function PlatformPage() {
  return (
    <MarketingLayout>
      <PlatformHero />
      <PlatformArchitecture />
      <PlatformCapabilities />
      <PlatformIntegrations />
      <PlatformCTA />
    </MarketingLayout>
  );
}
