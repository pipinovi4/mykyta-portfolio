import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { themeInitializationScript } from "@/lib/theme";
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mykyta Bozhenko — Python Backend Engineer",
    description: "Backend systems from domain logic to deployment.",
    images: [{ url: "/og-image.png", alt: "Mykyta Bozhenko — MB monogram and engineering portfolio" }],
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Mykyta Bozhenko — Python Backend Engineer",
    description:
      "Production backend systems, AI integrations, and reliable infrastructure.",
    siteName: "Mykyta Bozhenko",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Mykyta Bozhenko — MB monogram and engineering portfolio" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
      </head>
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
