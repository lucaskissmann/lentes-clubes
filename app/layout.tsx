import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { AnalyticsProvider } from "./analytics/analytics-provider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lentes Grenal",
  description: "Landing Page de apresentação do produto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Footer />
          {children}
        </div>
      </body>
    </html>
  );
}
