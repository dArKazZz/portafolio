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
  metadataBase: new URL("https://chatstream.store"),
  title: {
    default: "Marco Chacón | Full Stack Developer",
    template: "%s | Marco Chacón",
  },
  description:
    "Systems Engineering student with high academic performance. Specializing in building exceptional digital experiences with React, Java, and Python.",
  keywords: [
    "Marco Chacón",
    "Marco Antonio Chacón Chávez",
    "Full Stack Developer",
    "Frontend",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Marco Antonio Chacón Chávez", url: "https://chatstream.store" }],
  creator: "Marco Chacón",
  openGraph: {
    title: "Marco Chacón | Full Stack Developer",
    description:
      "Systems Engineering student specializing in building exceptional digital experiences.",
    url: "https://chatstream.store",
    siteName: "Marco Chacón",
    images: [
      {
        url: "https://chatstream.store/perfil.png",
        width: 1200,
        height: 630,
        alt: "Marco Chacón — Developer",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marco Chacón | Full Stack Developer",
    description:
      "Systems Engineering student specializing in building exceptional digital experiences.",
    images: ["https://chatstream.store/perfil.png"],
  },
  icons: {
    icon: "/favicon.jpeg",
    shortcut: "/favicon.jpeg",
    apple: "/perfil.png",
  },
  manifest: "/site.webmanifest",
    alternates: {
    canonical: "https://chatstream.store",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-gray-950" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.jpeg" type="image/jpeg" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#111827" />
        <meta name="robots" content="index, follow" />
        <meta name="google-site-verification" content="google-site-verification=eFby3MefJcCwW4qT3g00kpi1yF3stYAKJ9VJz1ZgQsY" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Marco Antonio Chacón Chávez",
              sameAs: [
                "https://github.com/yourusername",
                "https://www.linkedin.com/in/your-profile",
              ],
              jobTitle: "Full Stack Developer",
              url: "https://chatstream.store",
              image: "https://chatstream.store/perfil.png",
              description:
                "Systems Engineering student with high academic performance. Specializing in building exceptional digital experiences using React, Next.js, and TypeScript.",
            }),
          }}
        />
      </head>
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
