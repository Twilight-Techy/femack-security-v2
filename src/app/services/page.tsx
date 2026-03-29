"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  LockClosedIcon, MagnifyingGlassIcon, VideoIcon, 
  PersonIcon, EyeOpenIcon, GlobeIcon, 
  Crosshair1Icon, TargetIcon, RocketIcon 
} from "@radix-ui/react-icons";

const coreServices = [
  {
    title: "Corporate & Private Security",
    icon: <LockClosedIcon className="w-8 h-8" />,
    desc: "Deployment of highly trained security guards and VIP close-protection personnel for businesses and high-profile individuals.",
  },
  {
    title: "Electronic Surveillance",
    icon: <VideoIcon className="w-8 h-8" />,
    desc: "Advanced HD CCTV, thermal imaging, alarm systems, and biometric access controls integrated into cutting-edge command centers.",
  },
  {
    title: "Event & Industrial Security",
    icon: <PersonIcon className="w-8 h-8" />,
    desc: "Expert crowd control strategies, access management, and critical infrastructure protection for entertainment and industries.",
  },
  {
    title: "Detective & Investigation",
    icon: <EyeOpenIcon className="w-8 h-8" />,
    desc: "Skilled investigators providing discreet intelligence gathering, background profiling, and special corporate investigations.",
  },
  {
    title: "Security Canine Services",
    icon: <TargetIcon className="w-8 h-8" />,
    desc: "Breeding, raising, and training of highly efficient guard dogs, as well as sniffers for security and rescue operations.",
  },
  {
    title: "Procurement & Supply",
    icon: <RocketIcon className="w-8 h-8" />,
    desc: "Procurement and installation of security equipment, safety wear, alarms, anti-burglary devices, and bulletproof vests.",
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-femack-navy overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/security-5.png" alt="Services Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            Our <span className="text-femack-cyan">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Dynamic and tailored security services blending well-trained personnel with modern electronic systems.
          </motion.p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Holistic Solutions for a Secure Environment</h2>
            <p className="text-gray-600 dark:text-gray-300">
              From physical guarding to advanced technological integration, we provide end-to-end security designed to mitigate risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-[#081b2e] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5 hover:border-femack-cyan/50 transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 dark:bg-white/5 text-femack-cyan rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Background Checks Feature */}
      <section className="py-24 bg-femack-navy text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 glass mb-6">
                <MagnifyingGlassIcon className="text-femack-cyan w-5 h-5" />
                <span className="text-sm font-semibold tracking-wider">SPECIALIZED SERVICE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Employee Background Checks</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                In an era of escalating cybercrime and subtle fraud, organizations face unprecedented risks. We specialize in preemptive risk management through meticulous background verification.
              </p>

              <div className="space-y-4">
                {[
                  "Academic & Professional Credential Validation",
                  "Global Criminal Record Search (150+ Countries)",
                  "Address & Identity Authentication",
                  "Cybersecurity History Audit"
                ].map((item, id) => (
                  <div key={id} className="flex items-center gap-3">
                    <Crosshair1Icon className="text-femack-cyan w-5 h-5 shrink-0" />
                    <span className="font-medium text-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-xl glass-dark">
                <h4 className="font-bold text-femack-cyan mb-2">Our Methodology</h4>
                <p className="text-sm text-white/80">
                  AI-Driven Data Aggregation, Biometric Verification, On-Ground Intelligence Teams, and Encrypted Communication Channels compliant with NDPR & GDPR.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-4/5 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
            >
              <Image src="/images/security-6.png" alt="Background Checks" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
