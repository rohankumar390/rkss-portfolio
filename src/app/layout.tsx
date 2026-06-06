// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Navbar from "../components/Navbar";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RKSS Consultants",
  description: "Insight-Driven. Impact-Focused. Client-Centered.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans bg-white text-gray-900`}
      >
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
