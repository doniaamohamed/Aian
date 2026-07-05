import {
  Hero,
  Sources,
  Pipeline,
  Agents,
  OrgMemory,
  AskAian,
  Reports,
  SearchEverything,
  WhyAian,
  Architecture,
  FeatureGrid,
  Testimonials,
  Pricing,
  FinalCTA,
} from "./sections";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function LandingScreen() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Sources />
        <Pipeline />
        <Agents />
        <OrgMemory />
        <AskAian />
        <Reports />
        <SearchEverything />
        <WhyAian />
        <Architecture />
        <FeatureGrid />
        <Testimonials />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default LandingScreen;
