import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster as Sonner } from "./baseComponents/sonner";
import { Toaster } from "./baseComponents/toaster";
import "./globals.css";

import { TooltipProvider } from "./baseComponents/tooltip";


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
            <TooltipProvider>
            <Toaster />
              <Sonner/>
            </TooltipProvider>
   
        {children}
      </body>
    </html>
  );
}
