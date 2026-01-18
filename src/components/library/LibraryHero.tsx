"use client";

import React from "react";
import { motion } from "framer-motion";

export const LibraryHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900 z-10" />
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80')] bg-cover bg-center animate-ken-burns" />
      </div>
      
      <div className="relative z-20 text-center max-w-5xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#e62627] font-black uppercase tracking-[0.4em] text-sm mb-6 block"
        >
          NBU University Library
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight"
        >
          Gateway to Knowledge, <br />
          <span className="text-slate-400">Pathway to Excellence</span>
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-24 h-1 bg-[#e62627] mx-auto rounded-full" 
        />
      </div>
    </section>
  );
};
