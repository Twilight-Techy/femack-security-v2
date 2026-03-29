"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HamburgerMenuIcon, Cross1Icon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "glass-dark shadow-lg py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-white.png"
            alt="Femack Security Limited"
            width={240}
            height={75}
            className="w-auto h-14 md:h-16 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm tracking-wide font-medium transition-colors py-1",
                  isActive ? "text-femack-cyan" : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-active-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-femack-cyan rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <a
            href="/documents/Femack_Security_Handbook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-femack-cyan transition-colors font-medium text-sm tracking-wide"
          >
            Handbook
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-femack-cyan hover:bg-femack-cyan-dark text-white px-5 py-2 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(0,163,224,0.3)] hover:shadow-[0_0_20px_rgba(0,163,224,0.6)]"
          >
            Get a Quote <PaperPlaneIcon className="w-4 h-4" />
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <Cross1Icon className="w-6 h-6" /> : <HamburgerMenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-dark border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "py-2 font-medium relative pl-4 border-l-2 transition-colors",
                      isActive ? "text-femack-cyan border-femack-cyan bg-femack-cyan/10" : "text-white/80 hover:text-white border-transparent hover:border-white/20"
                    )}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a
                href="/documents/Femack_Security_Handbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white py-2 font-medium"
              >
                Company Handbook
              </a>
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 text-center bg-femack-cyan text-white px-5 py-3 rounded-md font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote <PaperPlaneIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
