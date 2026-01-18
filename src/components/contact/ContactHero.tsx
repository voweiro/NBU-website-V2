"use client";

import React from "react";
import { motion } from "framer-motion";

interface ContactHeroProps {
  backgroundImage?: string;
}

const ContactHero = ({ backgroundImage }: ContactHeroProps) => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
        
        {/* Animated Background Elements */}
        <motion.div 
           initial={{ scale: 1.2, opacity: 0 }}
           animate={{ scale: 1, opacity: 0.4 }}
           transition={{ duration: 2, ease: "easeOut" }}
           className="absolute inset-0"
        >
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#e62627] rounded-full blur-[200px] -translate-y-1/2 translate-x-1/2 opacity-20" />
           <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 opacity-10" />
        </motion.div>

        {/* Ken Burns Effect Image */}
        <motion.div 
           initial={{ scale: 1.1 }}
           animate={{ scale: 1 }}
           transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
           className="absolute inset-0 bg-cover bg-center opacity-40"
           style={{ backgroundImage: `url(${backgroundImage || '/images/campus-wide.jpg'})` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[2px] bg-[#e62627]" />
              <span className="text-[#e62627] font-black uppercase tracking-[0.4em] text-xs">Contact NBU</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight italic"
          >
            Connect <br />
            <span className="text-slate-400 not-italic">With Us.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed max-w-xl"
          >
            Have questions about admissions, academic programs, or campus life? We&apos;re here to help you navigate your journey at NBU.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
