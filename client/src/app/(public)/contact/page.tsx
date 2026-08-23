import { MarketingLayout } from "@/layouts/MarketingLayout";
import { ContactHero } from "@/components/features/contact/ContactHero";
import { ContactForm } from "@/components/features/contact/ContactForm";
import { ContactInfoGrid } from "@/components/features/contact/ContactInfoGrid";
import { ContactFAQ } from "@/components/features/contact/ContactFAQ";

export const metadata = {
  title: "Contact Us — AIAN Enterprise Team",
  description:
    "Get in touch with AIAN sales, technical support, and enterprise solution architects. Schedule a demo or request security compliance packages.",
};

export default function ContactPage() {
  return (
    <MarketingLayout>
      <ContactHero />
      <ContactForm />
      <ContactInfoGrid />
      <ContactFAQ />
    </MarketingLayout>
  );
}
