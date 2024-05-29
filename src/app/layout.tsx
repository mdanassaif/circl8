import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "circl8",
  description: "A company who solve issue related to recycle plastic all over the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar/>
        {children}
        <SpeedInsights/>
        </body>
    </html>
  );
}
