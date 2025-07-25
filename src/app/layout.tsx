import Navbar from "./components/navbar";


import type { Metadata } from "next";
import { Geist, Geist_Mono,Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const Jakarta=Plus_Jakarta_Sans({
  subsets:['latin'],
  variable:'--font-plus-jakarta-sans',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SecureSight",
  description: "CCTV monitoring company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Jakarta.variable} font-sans antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
