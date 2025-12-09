import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Your Name | Full Stack Developer",
  description: "Learn about my journey as a Full Stack Developer and UI/UX Designer. Discover my skills, expertise in React, Next.js, TypeScript, and my passion for creating exceptional digital experiences.",
  keywords: ["About", "Developer Bio", "Skills", "Technologies", "React Expert", "Next.js Developer"],
  openGraph: {
    title: "About - Your Name | Full Stack Developer",
    description: "Learn about my journey as a Full Stack Developer and UI/UX Designer.",
    type: "profile",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
