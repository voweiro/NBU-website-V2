"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CampusHeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  altText?: string;
}

const CampusHero: React.FC<CampusHeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  altText = "Campus Life",
}) => {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-slate-950">
      {/* Background/Image Container */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full lg:w-2/3 h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
          
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full animate-ken-burns"
          >
            <Image
              src={backgroundImage}
              alt={altText}
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="px-6 py-2 bg-[#e62627]/10 backdrop-blur-xl border border-[#e62627]/20 rounded-full text-[#e62627] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                Welcome to our Community
              </span>
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-tight"
          >
            {title.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < title.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-slate-400 text-lg md:text-2xl font-medium max-w-2xl mb-12 leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-6 z-20 hidden lg:block"
      >
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/20 font-black uppercase tracking-[0.4em] text-[8px] [writing-mode:vertical-lr]">Discover</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#e62627] to-transparent" />
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-white/40">
            Campus Experience
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CampusHero;
