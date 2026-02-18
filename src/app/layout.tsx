import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import LeadForm from "@/components/LeadForm";
import EnquiryPopup from "@/components/EnquiryPopup";
import MobileBottomBar from "@/components/MobileBottomBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sobha Sector 63A Gurgaon",
  description: "New Launch Luxury Apartments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full flex flex-col overflow-hidden bg-white`}
      >
        <EnquiryPopup />

        {/* Full-width Top Navbar */}
        <Header />

        {/* Main Layout Container */}
        <div className="flex flex-1 overflow-hidden">
          {/* Scrollable Main Content (Left Side) */}
          <main className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar pb-14 lg:pb-0">
            {children}
          </main>

          {/* Stuck Sidebar (Right Side) */}
          <aside className="hidden lg:block w-[350px] h-full border-l border-gray-100 bg-white overflow-y-auto">
            <LeadForm />
          </aside>
        </div>

        <MobileBottomBar />
      </body>
    </html>
  );
}
