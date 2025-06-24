import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IP Guardians - Protecting Your Intellectual Property",
  description:
    "Your trusted partner in safeguarding innovations and brand identity.",
  keywords: [
    "IP Guardians",
    "Intellectual Property",
    "Legal Solutions",
    "Brand Protection",
    "Innovation Safeguarding",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
