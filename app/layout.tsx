import type { Metadata } from "next";
import "./globals.css";
import "./management.css";

export const metadata: Metadata = {
  title: "LeadForge — Supervised outreach",
  description: "Evidence-led prospecting and human-approved outreach.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
