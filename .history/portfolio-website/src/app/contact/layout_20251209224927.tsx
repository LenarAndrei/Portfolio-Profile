import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Your Name | Get In Touch",
  description: "Let's collaborate! Get in touch to discuss your project, job opportunities, or just to say hello. I'm always open to new opportunities and exciting projects.",
  keywords: ["Contact", "Get In Touch", "Hire Developer", "Collaboration", "Project Inquiry"],
  openGraph: {
    title: "Contact - Your Name | Get In Touch",
    description: "Let's collaborate! Get in touch to discuss your project or opportunities.",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
