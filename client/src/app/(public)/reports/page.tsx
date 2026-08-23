import { MarketingLayout } from "@/layouts/MarketingLayout";
import { ReportsHero } from "@/components/features/reports/ReportsHero";
import { ReportTypes } from "@/components/features/reports/ReportTypes";
import { ReportPreview } from "@/components/features/reports/ReportPreview";
import { ExportAndIntegrations } from "@/components/features/reports/ExportAndIntegrations";
import { ReportsCTA } from "@/components/features/reports/ReportsCTA";

export const metadata = {
  title: "Automated Reports — Enterprise Intelligence Digests",
  description:
    "Generate automated executive digests, SOC 2 audit logs, engineering velocity summaries, and meeting action digests with AIAN.",
};

export default function ReportsPage() {
  return (
    <MarketingLayout>
      <ReportsHero />
      <ReportTypes />
      <ReportPreview />
      <ExportAndIntegrations />
      <ReportsCTA />
    </MarketingLayout>
  );
}
