import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Morgan | Full-Stack Engineer",
  description:
    "Full-stack engineer with 6+ years of experience crafting high-performance web applications. Specializing in React, Next.js, TypeScript, and distributed systems.",
  keywords: [
    "Full-Stack Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.dev",
    title: "Alex Morgan | Full-Stack Engineer",
    description:
      "Full-stack engineer crafting high-performance web applications with clean code and exceptional user experiences.",
    siteName: "Alex Morgan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alex Morgan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan | Full-Stack Engineer",
    description: "Full-stack engineer crafting high-performance web applications.",
    images: ["/og-image.png"],
    creator: "@alexmorgan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
