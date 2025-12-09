import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience - Your Name | Professional Journey",
  description: "Discover my professional experience, work history, and career achievements as a Full Stack Developer. Learn about the companies I've worked with and the impact I've made.",
  keywords: ["Work Experience", "Career", "Professional History", "Employment", "Developer Experience"],
  openGraph: {
    title: "Experience - Your Name | Professional Journey",
    description: "Discover my professional experience and career achievements.",
    type: "profile",
  },
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
