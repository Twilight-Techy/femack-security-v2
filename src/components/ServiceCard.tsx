"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  href?: string;
}

export default function ServiceCard({ title, description, icon, delay = 0, href = "/services" }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group bg-white dark:bg-femack-navy rounded-2xl p-8 border border-gray-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all h-full flex flex-col relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-femack-cyan to-blue-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
      
      <div className="w-14 h-14 rounded-xl bg-blue-50 dark:bg-white/5 flex items-center justify-center text-femack-cyan mb-6 group-hover:scale-110 group-hover:bg-femack-cyan group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-femack-cyan transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8 grow">
        {description}
      </p>
      
      <Link 
        href={href}
        className="inline-flex items-center text-femack-cyan font-semibold text-sm group-hover:gap-3 gap-2 transition-all mt-auto"
      >
        Read More <ArrowRightIcon className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
