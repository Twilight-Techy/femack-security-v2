import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Femack Security Limited",
  description: "Get in touch with Femack Security Limited for tailored security solutions. We are available 24/7 in Lagos, Nigeria.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
