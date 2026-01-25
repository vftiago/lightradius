import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  description: "Web development agency specializing in modern, high-performance websites and applications",
  title: "lightradius",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html suppressHydrationWarning lang="en">
    <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
      <ThemeProvider disableTransitionOnChange attribute="class" defaultTheme="dark" enableSystem={false}>
        {children}
      </ThemeProvider>
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
