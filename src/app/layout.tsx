'use client';
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { useEffect } from "react";
import { axeAccessibilityReporter } from "@/utils/axeAccessibilityReporter";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

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
    <html lang="pt-BR">
      <title>Accessibility-WEB</title>
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
