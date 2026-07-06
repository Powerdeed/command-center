import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/globals";
import SideBar from "@global-components/layout/SideBar/SideBar";
import {
  UnsavedChangesGuard,
  UnsavedChangesProvider,
} from "@global-components/layout/unSavedChanges";

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
  description:
    "A command center to control and regulate PTR platform and systems.",
  keywords: ["Powerdeed", "command center"],
  other: {
    "app-version": "1.0.0",
  },
  // You can also define specific Open Graph, WhatsApp url cards, etc. metadata here
  openGraph: {
    title: "PTR Command Center",
    description:
      "A command center to control and regulate PTR platform and systems.",
    type: "website",
    url: "https://command.powerdeed.co.ke/",
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
        <GlobalProvider>
          <UnsavedChangesProvider>
            <SideBar />

            {children}
            <UnsavedChangesGuard />
          </UnsavedChangesProvider>
        </GlobalProvider>
      </body>
    </html>
  );
}
