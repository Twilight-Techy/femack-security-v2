import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Femack Security Limited",
  description: "Learn about the mission, vision, and core values of Femack Security Limited. Experienced leadership and certified professionals securing your future.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
