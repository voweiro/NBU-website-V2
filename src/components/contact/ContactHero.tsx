"use client";

import React from "react";
import { motion } from "framer-motion";

interface ContactHeroProps {
  backgroundImage: string;
}

const ContactHero = ({ backgroundImage }: ContactHeroProps) => {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center bg-slate-900">
      {/* Background Image with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-black uppercase tracking-[0.4em] text-[10px] md:text-xs text-[#e62627] mb-6 block"
          >
            Get In Touch
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1.1]"
          >
            Connect With <br />
            <span className="text-slate-400">Our Community</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="h-1.5 w-24 bg-[#e62627] rounded-full mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl"
          >
            Have questions about admissions, academic programs, or campus life? We're here to help you navigate your journey at NBU.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
