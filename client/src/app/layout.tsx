import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/layout/providers";
import "./globals.css";
import { Toaster } from "sonner";

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIAN | The Enterprise Knowledge Graph",
  description:
    "Stop losing company knowledge. AIAN transforms every meeting, message, document, and ticket into one intelligent organizational memory.",
  authors: [{ name: "AIAN" }],
  metadataBase: new URL("https://aiaan.tech"),
  openGraph: {
    title: "AIAN | The Enterprise Knowledge Graph",
    description:
      "Stop losing company knowledge. AIAN transforms every meeting, message, document, and ticket into one intelligent organizational memory.",
    url: "https://aiaan.tech",
    siteName: "AIAN",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/email/aian-logo.png",
        alt: "AIAN Enterprise Knowledge Graph Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIAN | The Enterprise Knowledge Graph",
    description:
      "Stop losing company knowledge. AIAN transforms every meeting, message, document, and ticket into one intelligent organizational memory.",
    images: ["/assets/email/aian-logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#090A0F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${displayFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Providers>{children}</Providers>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
