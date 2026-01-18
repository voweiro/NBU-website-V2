import type { Metadata } from "next";

import "@/styles/globals.css"; // Ensure it's inside `/styles/`
import Navbar from "@/components/home/Navbar"; // Import Navbar correctly
import Footer from "@/components/home/Footer";
import { Roboto } from "next/font/google";
import { Suspense } from "react";


import PageLoadingAnimation from "@/utils/LoadingProvider";

const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nigeria British University",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description: "Developing Potential we trust",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <Suspense fallback={null}>
         
          <PageLoadingAnimation />
        </Suspense>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
