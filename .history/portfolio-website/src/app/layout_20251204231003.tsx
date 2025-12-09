import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer & Designer",
  description: "Full Stack Developer and UI/UX Designer passionate about creating innovative digital experiences with modern technologies. Specializing in React, Next.js, and responsive web applications.",
  keywords: ["Full Stack Developer", "Web Developer", "UI/UX Designer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Your Name - Full Stack Developer & Designer",
    description: "Full Stack Developer and UI/UX Designer passionate about creating innovative digital experiences.",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Full Stack Developer & Designer",
    description: "Full Stack Developer and UI/UX Designer passionate about creating innovative digital experiences.",
    creator: "@yourusername",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
