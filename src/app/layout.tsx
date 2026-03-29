import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"], 
  display: "swap" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://femacksecurity.com"), // Update this domain when you have the final production URL!
  title: "Femack Security Limited - Your Safety, Our Priority",
  description: "Reputable and dynamic security services provider headquartered in Lagos, Nigeria. We safeguard individuals, businesses, and communities.",
  keywords: ["Security Company", "Lagos Security", "Femack", "Private Security Nigeria", "Corporate Security", "Surveillance"],
  openGraph: {
    title: "Femack Security Limited",
    description: "Reputable and dynamic security services provider in Lagos, Nigeria. We safeguard individuals, businesses, and communities.",
    url: "https://femacksecurity.com",
    siteName: "Femack Security Limited",
    images: [
      {
        url: "/images/security-1.png", 
        width: 1200,
        height: 630,
        alt: "Femack Security Protective Services",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Femack Security Limited",
    description: "Reputable and dynamic security services provider in Lagos, Nigeria.",
    images: ["/images/security-1.png"],
  },
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
