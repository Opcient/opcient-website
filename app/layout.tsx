import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Opcient | Software for efficient industrial operations",
    template: "%s | Opcient",
  },
  description:
    "Opcient builds auditable software workflows that help industrial engineering teams identify unusual operating behaviour and improve efficiency while maintaining output.",
  keywords: [
    "industrial software",
    "industrial energy efficiency",
    "equipment anomaly detection",
    "industrial data workflows",
  ],
  metadataBase: new URL("https://opcient.com"),
  openGraph: {
    title: "Opcient | Software for efficient industrial operations",
    description: "Evidence-based software workflows for industrial engineering teams.",
    siteName: "Opcient",
    locale: "en_AU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
