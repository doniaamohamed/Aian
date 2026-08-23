import { MarketingLayout } from "@/layouts/MarketingLayout";
import { CareersHero } from "@/components/features/careers/CareersHero";
import { CultureAndValues } from "@/components/features/careers/CultureAndValues";
import { PerksAndBenefits } from "@/components/features/careers/PerksAndBenefits";
import { OpenPositions } from "@/components/features/careers/OpenPositions";
import { CareersCTA } from "@/components/features/careers/CareersCTA";

export const metadata = {
  title: "Careers — Build the Future of AI Intelligence",
  description:
    "Join the AIAN team and help build the operating system for human organizational intelligence. Explore open roles, culture, and benefits.",
};

export default function CareersPage() {
  return (
    <MarketingLayout>
      <CareersHero />
      <CultureAndValues />
      <PerksAndBenefits />
      <OpenPositions />
      <CareersCTA />
    </MarketingLayout>
  );
}
