"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckIcon, TargetIcon, StarIcon } from "@radix-ui/react-icons";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* Page Header */}
      <section className="relative pt-32 pb-20 bg-femack-navy overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image src="/images/security-3.png" alt="Header Background" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            About <span className="text-femack-cyan">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Learn about our mission, our values, and the dedicated leadership driving Femack Security Limited forward.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-[#081b2e] p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-femack-cyan opacity-20 transform translate-x-4 -translate-y-4">
                <TargetIcon className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-50 dark:bg-white/5 text-femack-cyan rounded-2xl flex items-center justify-center mb-6">
                  <TargetIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  To deliver unparalleled security services and innovative solutions that foster a safe and secure environment for our clients. We are dedicated to providing efficient, professional, and reliable security services while upholding the highest standards of integrity, discipline, and customer satisfaction.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-femack-cyan text-white p-10 rounded-3xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 text-white opacity-20 transform translate-x-4 -translate-y-4">
                <StarIcon className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center mb-6">
                  <StarIcon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-white/90 leading-relaxed text-lg">
                  To be the foremost and most trusted security services provider in Nigeria, recognized for our excellence, innovation, and commitment to the safety and protection of our clients' interests.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-femack-navy">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-300">The fundamental beliefs that dictate our behavior and actions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Professionalism", desc: "We maintain the highest level of professionalism, adhering to industry best practices and ensuring continuous improvement." },
              { title: "Integrity", desc: "We conduct our business with utmost honesty, transparency, and ethical standards, fostering trust in all interactions." },
              { title: "Customer-Centric", desc: "Our clients' safety and satisfaction are at the core of our business; we strive to deliver personalized solutions." },
              { title: "Innovation", desc: "We embrace innovation and advanced technology to enhance our services, staying one step ahead of potential threats." },
              { title: "Teamwork", desc: "We foster a collaborative and inclusive work environment, encouraging teamwork, respect, and open communication." }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-[#081b2e] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-white/5 flex items-center justify-center text-femack-cyan">
                    <CheckIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Certificate */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Leadership */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">Guiding the Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 leading-relaxed">
                "Our strength lies in the discipline of our people and the consistency of our service. Every day, we work to deliver security that is reliable, responsive, and tailored to the needs of our clients."
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-white/5 rounded-2xl">
                  <div className="w-20 h-20 shrink-0 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
                    {/* Placeholder for CEO Image if available, otherwise fallback */}
                    <div className="absolute inset-0 flex items-center justify-center bg-femack-navy text-femack-cyan text-2xl font-bold">TM</div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">Tunji Makanjuola</h4>
                    <p className="text-femack-cyan font-medium">C.E.O. / M.D.</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-white/5 rounded-2xl">
                  <div className="w-20 h-20 shrink-0 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-femack-navy text-femack-cyan text-2xl font-bold">AG</div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">Ayo Ganiyu</h4>
                    <p className="text-femack-cyan font-medium">Director of Operations</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certificate Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-[#081b2e] p-8 md:p-12 rounded-3xl border border-gray-100 dark:border-white/5 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Fully Licensed & Accredited</h3>
              <div className="relative w-full aspect-3/4 bg-white rounded-xl shadow-md overflow-hidden p-6 text-center text-gray-800 flex flex-col items-center justify-center border-8 border-gray-100">
                <p className="font-serif text-sm uppercase tracking-widest text-femack-navy mb-2">Federal Republic of Nigeria</p>
                <div className="w-16 h-1 bg-green-600 mb-6"></div>
                <h4 className="font-serif text-2xl font-bold mb-2">Certificate of Incorporation</h4>
                <p className="text-sm italic mb-8">Of a Private Company Limited by Shares</p>
                
                <h2 className="text-3xl font-black text-femack-navy mb-2">FEMACK SECURITY LTD</h2>
                <p className="font-medium text-lg mb-8">RC: 7060916</p>
                
                <p className="text-xs text-gray-500 mb-1">Incorporated under the<br/>COMPANIES AND ALLIED MATTERS ACT 2020</p>
                <p className="text-sm font-semibold text-gray-700 mt-auto">Tax Identification Number: 31469227-0001</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
