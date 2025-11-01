import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { LoadingProvider, useLoading } from "@/context/LoadingContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import Sidebar from "@/components/sidebar";
import MobileHeader from "@/components/MobileHeader";

const nunito = Nunito_Sans({ 
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Rishabh Parsediya",
  description: "Software Engineer | Developer",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <LoadingProvider>
          <body className={`${nunito.className} relative min-h-screen`}>
            <LoadingSpinner />
          <div className="flex min-h-screen">
            <div className="hidden md:block md:w-64 flex-shrink-0">
              <div id="sidebar-portal" className="h-full">
                <Sidebar />
              </div>
            </div>
            <main className="flex-1 overflow-auto">
              <div className="min-h-screen">
                <MobileHeader/>
                <div className="p-4 md:p-8">{children}</div>
              </div>
            </main>
          </div>
          </body>
        </LoadingProvider>
      </ThemeProvider>
    </html>
  );
}
