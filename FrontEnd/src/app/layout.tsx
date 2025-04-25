import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"


export const metadata: Metadata = {
  title: "Momentus",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
        className={` antialiased`}
      >
      <Toaster/>
        {children}
      </body>
    </html>
  );
}
