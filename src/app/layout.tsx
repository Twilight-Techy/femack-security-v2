import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Femack Security Limited - Your Safety, Our Priority",
  description: "Reputable and dynamic security services provider headquartered in Lagos, Nigeria. We safeguard individuals, businesses, and communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${outfit.className} min-h-screen flex flex-col antialiased bg-femack-navy text-foreground`}>
        <main className="flex-1 bg-background">
          {children}
        </main>
      </body>
    </html>
  );
}
