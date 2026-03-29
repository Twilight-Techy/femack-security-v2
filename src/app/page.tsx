"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  LockClosedIcon, 
  EyeOpenIcon, 
  PersonIcon, 
  GlobeIcon, 
  MagnifyingGlassIcon,
  VideoIcon,
  ArrowRightIcon,
  ChatBubbleIcon,
  TargetIcon
} from "@radix-ui/react-icons";

export default function HomePage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-svh lg:min-h-[90vh] flex flex-col justify-center pt-32 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/security-1.png" 
            alt="Security Background" 
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-femack-navy/80"></div>
          <div className="absolute inset-0 bg-linear-to-t from-(--background) to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl relative z-20 w-full"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              YOUR SAFETY, <br/><span className="text-femack-cyan">OUR PRIORITY!</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
              Femack Security Limited is a premier security services provider headquartered in Lagos. We deliver comprehensive solutions integrating advanced technology and highly trained personnel to protect your lives, assets, and reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link href="/services" className="flex items-center justify-center gap-3 bg-femack-cyan hover:bg-femack-cyan-dark text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,163,224,0.6)]">
                Explore Services <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link href="/contact" className="flex items-center justify-center gap-3 glass hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold transition-all">
                Request a Consultation <ChatBubbleIcon className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile-Only Feature Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden max-w-lg"
            >
              <div className="glass border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                <TargetIcon className="w-6 h-6 text-femack-cyan shrink-0" />
                <span className="text-white text-sm font-semibold leading-tight mt-0.5">Top Tier Security Standards</span>
              </div>
              <div className="glass border border-white/20 p-4 rounded-2xl flex items-center gap-4">
                <GlobeIcon className="w-6 h-6 text-femack-cyan shrink-0" />
                <span className="text-white text-sm font-semibold leading-tight mt-0.5">24/7 Active Monitoring</span>
              </div>
              <div className="glass border border-white/20 p-4 rounded-2xl flex items-center gap-4 sm:col-span-2">
                <span className="text-2xl font-black text-femack-cyan shrink-0">100%</span>
                <span className="text-white text-sm font-semibold leading-tight mt-0.5">Govt. Certified Professionals</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Abstract Floating Cards (Absolutely positioned to never squeeze text) */}
          <div className="hidden lg:flex absolute right-0 xl:right-6 top-1/2 -translate-y-1/2 w-[350px] xl:w-[450px] scale-90 xl:scale-100 origin-right h-[500px] items-center justify-center z-10 pointer-events-none">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-femack-cyan/20 rounded-full blur-[80px]"></div>

            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-[10%] left-[5%] glass border border-white/20 p-6 rounded-2xl shadow-2xl w-64 backdrop-blur-md"
            >
              <div className="flex items-center gap-4 mb-1">
                <div className="w-12 h-12 rounded-full bg-femack-cyan/20 flex items-center justify-center text-femack-cyan shrink-0">
                  <TargetIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">Top Tier</h4>
                  <p className="text-white/70 text-xs uppercase tracking-wider font-semibold">Security Standards</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-[10%] left-[15%] glass border border-white/20 p-6 rounded-2xl shadow-2xl w-[300px] backdrop-blur-md z-10"
            >
              <div className="flex items-start gap-4">
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <GlobeIcon className="w-6 h-6" />
                  </div>
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-femack-cyan opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-femack-cyan"></span>
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">24/7 Active Monitoring</h4>
                  <p className="text-white/70 text-sm mt-1 leading-relaxed">Real-time surveillance & rapid response capabilities.</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-[35%] right-[0%] glass border border-femack-cyan/30 bg-femack-navy/60 p-6 rounded-2xl shadow-2xl w-56 backdrop-blur-md"
            >
              <h3 className="text-4xl font-extrabold text-femack-cyan mb-2">100%</h3>
              <p className="text-white font-bold text-lg leading-tight mb-1">Fully Licensed</p>
              <p className="text-white/60 text-sm">Govt. Accredited & Certified Professionals</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-femack-cyan/5 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
                <Image 
                  src="/images/security-2.png" 
                  alt="Femack Team" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-femack-navy/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-dark p-6 rounded-xl border-white/10 text-white">
                    <h4 className="font-bold text-xl mb-2">Building Trust Through Precision</h4>
                    <p className="text-sm text-white/80">Empowering organizations with actionable insights.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-[2px] w-12 bg-femack-cyan"></div>
                <span className="text-femack-cyan font-bold tracking-widest text-sm uppercase">About Us</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Dedicated to Unparalleled Security</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Since our establishment, Femack Security Limited has remained committed to safeguarding individuals, businesses, and communities. We do not believe in one-size-fits-all solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-8">
                Instead, we take time to understand the unique needs of each client and provide tailored strategies that blend human expertise with cutting-edge technology.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Professionalism & Elite Training", 
                  "Integrity & Transparency", 
                  "Advanced Technology Integration",
                  "24/7 Rapid Response"
                ].map((item, i) => (
                  <li key={i}>
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center text-foreground font-medium"
                    >
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-femack-cyan flex items-center justify-center mr-3 mt-0.5">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      </div>
                      {item}
                    </motion.div>
                  </li>
                ))}
              </ul>

              <Link href="/about" className="inline-flex items-center gap-2 text-femack-cyan font-bold hover:gap-4 transition-all uppercase tracking-wider text-sm">
                Discover Our Story <LockClosedIcon className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50 dark:bg-[#081b2e]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-femack-cyan"></div>
              <span className="text-femack-cyan font-bold tracking-widest text-sm uppercase">Our Expertise</span>
              <div className="h-[2px] w-12 bg-femack-cyan"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Comprehensive Security Solutions</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              We provide dynamic and tailored security services blending well-trained personnel with modern electronic systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Corporate & Private Security"
              description="Deploying highly trained security guards and VIP close-protection personnel to safeguard your enterprises and high-profile individuals."
              icon={<LockClosedIcon className="w-7 h-7" />}
              delay={0.1}
            />
            <ServiceCard 
              title="Employee Background Checks"
              description="Mitigate risk with deep pre/post-employment screening, criminal records search, credential validation, and social media analysis."
              icon={<MagnifyingGlassIcon className="w-7 h-7" />}
              delay={0.2}
            />
            <ServiceCard 
              title="Electronic Surveillance"
              description="Advanced HD CCTV, thermal imaging, alarm systems, and biometric access controls integrated into cutting-edge command centers."
              icon={<VideoIcon className="w-7 h-7" />}
              delay={0.3}
            />
            <ServiceCard 
              title="Event & Industrial Security"
              description="Expert crowd control strategies, access management, and critical infrastructure protection for entertainment and industries."
              icon={<PersonIcon className="w-7 h-7" />}
              delay={0.4}
            />
            <ServiceCard 
              title="Detective & Investigation"
              description="Skilled investigators providing discreet intelligence gathering, background profiling, and special corporate investigations."
              icon={<EyeOpenIcon className="w-7 h-7" />}
              delay={0.5}
            />
            <ServiceCard 
              title="Security Training Programs"
              description="Accredited training for security personnel in conflict management, surveillance techniques, first aid, and fire safety protocols."
              icon={<GlobeIcon className="w-7 h-7" />}
              delay={0.6}
            />
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/services" className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-femack-cyan text-femack-cyan font-bold rounded-full hover:bg-femack-cyan hover:text-white transition-colors duration-300">
              View All Services <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats/Why Choose Us */}
      <section className="relative py-24 bg-femack-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/security-4.png" alt="Overlay" fill className="object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="py-6 lg:py-0 px-4">
              <div className="text-4xl md:text-5xl font-black text-femack-cyan mb-2">150+</div>
              <div className="text-white font-medium tracking-wide uppercase text-sm">Countries Covered<br/>in Screenings</div>
            </div>
            <div className="py-6 lg:py-0 px-4">
              <div className="text-4xl md:text-5xl font-black text-femack-cyan mb-2">24/7</div>
              <div className="text-white font-medium tracking-wide uppercase text-sm">Monitoring &<br/>Rapid Response</div>
            </div>
            <div className="py-6 lg:py-0 px-4">
              <div className="text-4xl md:text-5xl font-black text-femack-cyan mb-2">100%</div>
              <div className="text-white font-medium tracking-wide uppercase text-sm">Customized<br/>Security Plans</div>
            </div>
            <div className="py-6 lg:py-0 px-4">
              <div className="text-4xl md:text-5xl font-black text-femack-cyan mb-2">RC</div>
              <div className="text-white font-medium tracking-wide uppercase text-sm">Fully Licensed &<br/>Accredited</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
