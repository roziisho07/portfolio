import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rozi Shah – Frontend Developer & Sanity CMS Specialist",
  description:
    "Portfolio of Rozi Shah, a frontend developer specializing in Next.js, Sanity CMS, and modern web experiences. Explore my projects, skills, and case studies.",
  keywords: [
    "Rozi Shah",
    "frontend developer",
    "Next.js developer",
    "Sanity CMS expert",
    "React developer",
    "headless CMS",
    "web developer portfolio",
    "UI/UX developer",
    "JavaScript developer",
  ],
  authors: [{ name: "Rozi Shah" }],
  creator: "Rozi Shah",
  publisher: "Rozi Shah",
  openGraph: {
    title: "Rozi Shah – Frontend Developer & Sanity CMS Specialist",
    description:
      "Explore my work as a frontend developer specializing in Next.js, Sanity CMS, and modern, scalable web applications.",
    url: "https://rozishah.com",
    siteName: "Rozi Shah Portfolio",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Rozi Shah Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rozi Shah – Frontend Developer & Sanity CMS Specialist",
    description:
      "Portfolio of Rozi Shah – specializing in Next.js, Sanity CMS, and building scalable, modern web experiences.",
    creator: "@roziisho",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
