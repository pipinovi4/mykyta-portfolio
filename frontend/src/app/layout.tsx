import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mykytabozhenko.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mykyta Bozhenko — Python Backend Engineer",
    template: "%s — Mykyta Bozhenko",
  },
  description:
    "Python Backend Engineer building production systems, AI integrations, and reliable infrastructure.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Mykyta Bozhenko — Python Backend Engineer",
    description:
      "Production backend systems, AI integrations, and reliable infrastructure.",
    siteName: "Mykyta Bozhenko",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
