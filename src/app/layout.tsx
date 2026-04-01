import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CallNowButton from "@/components/CallNowButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Janvi Infrastructure | Reliable PEB & Warehouse Solutions",
  description: "Janvi Infrastructure specializes in high-quality Pre-Engineered Buildings (PEB), warehouses, and industrial infrastructure solutions led by Abhishek Singh.",
  keywords: "PEB Structures, Warehouses, Industrial Sheds, Factory Construction, Tin Sheds, Cold Storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-secondary selection:text-white`} suppressHydrationWarning>
        {children}
        <CallNowButton />
      </body>
    </html>
  );
}
