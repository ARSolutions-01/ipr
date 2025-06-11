import type React from "react";
import type { Metadata } from "next";
import { Montserrat, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import "../../app/globals.css";
import { AuthProvider } from "@/components/auth-provider";
import { ReduxProvider } from "@/components/redux-provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// const cormorant = Cormorant_Garamond({
//   subsets: ["latin"],
//   variable: "--font-cormorant",
//   weight: ["300", "400", "500", "600", "700"],
// });

export const metadata: Metadata = {
  title: {
    template: "%s | IP Guardians",
    default: "  IP Guardians - Protecting Your Intellectual Property",
  },
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
    icon: "/favicon.ico", // ✅ Path to favicon
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={`${montserrat.variable}  font-sans`}>
        <ReduxProvider>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              {children}
              <Footer />
              <Toaster />
            </ThemeProvider>
          </AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
