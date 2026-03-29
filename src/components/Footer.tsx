import Link from "next/link";
import Image from "next/image";
import { EnvelopeClosedIcon, MobileIcon, HomeIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="bg-[#051626] border-t border-white/5 pt-16 pb-8 text-white/80">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Image
              src="/logo-white.png"
              alt="Femack Security Limited"
              width={240}
              height={75}
              className="w-auto h-14 md:h-16 object-contain"
            />
            <p className="text-sm leading-relaxed max-w-sm">
              Femack Security Limited is a reputable and dynamic security services provider offering top-notch solutions to safeguard individuals, properties, and businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li>
                <Link href="/" className="hover:text-femack-cyan transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-femack-cyan transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-femack-cyan transition-colors">Services</Link>
              </li>
              <li>
                <a href="/documents/Femack_Security_Handbook.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-femack-cyan transition-colors">
                  Company Handbook
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-femack-cyan transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 tracking-wide">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <HomeIcon className="w-5 h-5 mr-3 mt-0.5 text-femack-cyan shrink-0" />
                <span>Suite 67, LSDPC Complex, Phase 5, Oba Ogunji Road, Pen cinema, Agege, Lagos.</span>
              </li>
              <li className="flex items-center">
                <MobileIcon className="w-5 h-5 mr-3 text-femack-cyan shrink-0" />
                <span>+234 913 617 9900 <br className="md:hidden" /> / +234 802 323 1142</span>
              </li>
              <li className="flex items-center">
                <EnvelopeClosedIcon className="w-5 h-5 mr-3 text-femack-cyan shrink-0" />
                <a href="mailto:info@femacksecurity.com" className="hover:text-femack-cyan transition-colors">
                  info@femacksecurity.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/50 space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Femack Security Limited. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
