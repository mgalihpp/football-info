import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./Providers/ThemeProvider";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/Sidebar";
import News from "@/components/News";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Football Info",
  description:
    "Get the latest football news, scores, and updates on your favorite teams and leagues.",
  applicationName: "Footbal Information App",
  authors: [{ name: "mgalihpp", url: "https://mgalihpp.site" }],
  keywords:
    "football, soccer, sports, scores, news, teams, leagues, matches, live updates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <main className="sm:px-2 md:px-16 md:py-2">
            <Navbar />
            <section className="flex mx-auto justify-between space-x-2 sm:space-x-4 space-y-8 mt-20">
              <News />
              {children}
              <SideBar />
            </section>
          </main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
