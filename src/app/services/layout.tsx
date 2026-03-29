import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Femack Security Limited",
  description: "Explore our comprehensive security solutions including corporate guarding, electronic surveillance, and specialized employee background checks.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
