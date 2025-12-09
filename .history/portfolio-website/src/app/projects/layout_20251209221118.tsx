import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Your Name | Portfolio Showcase",
  description: "Explore my portfolio of web development projects including e-commerce platforms, task management apps, weather dashboards, and more. Built with React, Next.js, TypeScript, and modern technologies.",
  keywords: ["Projects", "Portfolio", "Web Development", "React Projects", "Next.js Apps", "Full Stack Projects"],
  openGraph: {
    title: "Projects - Your Name | Portfolio Showcase",
    description: "Explore my portfolio of web development projects and applications.",
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
