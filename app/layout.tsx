import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/globals";
import Nav from "@global components/layout/Nav/Nav";
import {
  UnsavedChangesGuard,
  UnsavedChangesProvider,
} from "@global components/layout/unSavedChanges";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PTR Command Center",
    template: "%s | PTR Command Center", // Template for child pages
  },
  description: "A command center to edit PTR-Powerdeed website.",
  keywords: ["Powerdeed", "command center"],
  other: {
    "app-version": "1.0.0",
  },
  // You can also define specific Open Graph, Twitter, etc. metadata here
  openGraph: {
    title: "PTR Command Center",
    description: "A command center to edit PTR-Powerdeed website.",
    type: "website",
    url: "https://powerdeedtr.co.ke/",
    siteName: "PTR Command Center",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`relative ${plusJakartaSans.variable} ${openSans.variable} antialiased flex flex-col min-h-screen`}
      >
        <Nav />
        <GlobalProvider>
          <UnsavedChangesProvider>
            {children}

            <UnsavedChangesGuard />
          </UnsavedChangesProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
