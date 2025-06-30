import "./globals.css";
import type { Metadata } from "next";
import { ClientBody } from "./ClientBody";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PreloaderProvider } from "@/contexts/PreloaderContext";

export const metadata: Metadata = {
  title: {
    default: "Unizel - Enterprise Software Solutions",
    template: "%s | Unizel",
  },
  description:
    "Unizel is a leading software development agency specializing in enterprise collaboration platforms, AI automation solutions, and cutting-edge data technologies. We build Teams-like platforms and advanced software solutions.",
  keywords: ["Software Development", "Enterprise Solutions", "Collaboration Platforms", "AI Automation", "LIDAR Data", "Teams-like Software", "Wedding Portal", "Tax Automation"],
  authors: [{ name: "Unizel Development Team" }],
  creator: "Unizel",
  icons: {
    icon: [
      { url: "/images/unizel-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/unizel-logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/unizel-logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/unizel-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://unizel.com",
    title: "Unizel - Enterprise Software Solutions",
    description: "Leading software development agency specializing in enterprise collaboration platforms, AI automation solutions, and cutting-edge data technologies.",
    siteName: "Unizel",
    images: [
      {
        url: "/images/unizel-logo.png",
        width: 1200,
        height: 630,
        alt: "Unizel - Enterprise Software Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unizel - Enterprise Software Solutions",
    description: "Leading software development agency specializing in enterprise collaboration platforms, AI automation solutions, and cutting-edge data technologies.",
    images: ["/images/unizel-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <PreloaderProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <ClientBody>{children}</ClientBody>
          </ThemeProvider>
        </PreloaderProvider>
      </body>
    </html>
  );
}
