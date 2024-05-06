import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/lib/components/navbar";
import Footer from "@/lib/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EmpowerMe",
  description: "Abuse Awareness",
  keywords: ["empower", "empowerme", "me", "abuse", "zimbabwe"],


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body className={inter.className}>
        <Navbar/>
        <div >
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
