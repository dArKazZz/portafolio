import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marco Chacón | Full Stack Developer",
  description: "Systems Engineering student with high academic performance. Specializing in building exceptional digital experiences with React, Java, Python, and more.",
  keywords: ["Marco Chacón", "Developer", "Full Stack", "React", "React Native", "Java", "Python", "Portfolio"],
  authors: [{ name: "Marco Antonio Chacón Chávez" }],
  openGraph: {
    title: "Marco Chacón | Full Stack Developer",
    description: "Systems Engineering student specializing in building exceptional digital experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Chacón | Full Stack Developer",
    description: "Systems Engineering student specializing in building exceptional digital experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-gray-950" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
