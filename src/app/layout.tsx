import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yael — Systems Designer",
  description:
    "Building structured tools for an intentional life. Projects across learning, relationships, meditation, and personal growth.",
  openGraph: {
    title: "Yael — Systems Designer",
    description:
      "Building structured tools for an intentional life. Projects across learning, relationships, meditation, and personal growth.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
