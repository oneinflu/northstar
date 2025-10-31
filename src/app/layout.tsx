'use client';


import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";

import Footer from "@/components/Footer";
import FloatingCalendarBadge from "@/components/FloatingCalendarBadge";
// import ExitIntentPopup from "@/components/ExitIntentPopup";
import ScrollLeadCapture from "@/components/ScrollLeadCapture";
import SmartLeadMagnetBanner from "@/components/SmartLeadMagnetBanner";
import { usePathname } from "next/navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  
  // Check if this is the Super300 page
  const isSuper300Page = pathname.includes("/super300");

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased`}
      >
        {!isSuper300Page && <AnnouncementBar />}
        {!isSuper300Page && <Header />}
        {children}
        {!isSuper300Page && <FloatingCalendarBadge />}
        {!isSuper300Page && <ScrollLeadCapture />}
        {!isSuper300Page && <SmartLeadMagnetBanner />}
        {!isSuper300Page && <Footer />}
      </body>
    </html>
  );
}
