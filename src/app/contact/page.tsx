"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { HomeIcon, MobileIcon, EnvelopeClosedIcon, PaperPlaneIcon } from "@radix-ui/react-icons";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-femack-navy">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-4"
          >
            Contact <span className="text-femack-cyan">Us</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/80 max-w-2xl mx-auto"
          >
            Reach out to our team of experts. We are available 24/7 to provide tailored security solutions for your needs.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  Whether you need personal protection, corporate security, or comprehensive background checks, Femack Security Limited is ready to serve you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white dark:bg-[#081b2e] rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-white/5 text-femack-cyan rounded-xl flex items-center justify-center shrink-0">
                    <HomeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">Head Office</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Suite 67, LSDPC Complex, Phase 5,<br/>
                      Oba Ogunji Road, Pen cinema,<br/>
                      Agege, Lagos, Nigeria.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white dark:bg-[#081b2e] rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-white/5 text-femack-cyan rounded-xl flex items-center justify-center shrink-0">
                    <MobileIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">Phone Numbers</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      +234 913 617 9900<br/>
                      +234 802 323 1142<br/>
                      +234 805 628 0943
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white dark:bg-[#081b2e] rounded-2xl shadow-sm border border-gray-100 dark:border-white/5">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-white/5 text-femack-cyan rounded-xl flex items-center justify-center shrink-0">
                    <EnvelopeClosedIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-1">Email Address</h4>
                    <a href="mailto:info@femacksecurity.com" className="text-femack-cyan hover:underline font-medium">
                      info@femacksecurity.com
                    </a><br/>
                    <a href="mailto:femacksecure@gmail.com" className="text-femack-cyan hover:underline font-medium">
                      femacksecure@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 dark:bg-[#081b2e] p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-white/5 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-foreground focus:outline-none focus:ring-2 focus:ring-femack-cyan transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-foreground focus:outline-none focus:ring-2 focus:ring-femack-cyan transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-foreground focus:outline-none focus:ring-2 focus:ring-femack-cyan transition-all" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Subject / Service of Interest</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-foreground focus:outline-none focus:ring-2 focus:ring-femack-cyan transition-all" placeholder="e.g. Employee Background Check" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-foreground focus:outline-none focus:ring-2 focus:ring-femack-cyan transition-all resize-none" placeholder="How can we assist you?"></textarea>
                </div>

                <button type="submit" className="w-full bg-femack-cyan hover:bg-femack-cyan-dark text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg">
                  Submit Request <PaperPlaneIcon />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
