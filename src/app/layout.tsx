import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechTrove | Premium Gadget Reviews & Deals",
  description: "Your ultimate source for automated gadget reviews, comparisons, and the best tech deals.",
  keywords: ["tech reviews", "gadgets", "affiliate", "smartphones", "laptops"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="flex flex-col min-h-screen text-slate-900 bg-white">
        {children}
      </body>
    </html>
  );
}
