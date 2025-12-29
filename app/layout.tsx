import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhishForge.ai - AI-Powered Phishing Simulator",
  description: "Train Your Team Against Tomorrow's Attacks – Affordable for SMBs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}

