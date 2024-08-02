'use client';
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { useEffect } from "react";
import { axeAccessibilityReporter } from "@/utils/axeAccessibilityReporter";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    axeAccessibilityReporter()
  }, [])

  return (
    <html lang="en">
      <title>Accessibility-WEB</title>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
