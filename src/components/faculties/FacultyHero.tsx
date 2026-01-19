"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface FacultyHeroProps {
  backgroundImage: StaticImageData | string;
  welcomeText?: string;
  mainTitle: string;
  highlightTitle: string;
  description: string;
}

export default function FacultyHero({
  backgroundImage,
  welcomeText = "Welcome To",
  mainTitle,
  highlightTitle,
  description,
}: FacultyHeroProps) {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Faculty Building"
          fill
          className="object-cover transition-transform duration-[20s] scale-110 motion-safe:animate-ken-burns"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="text-[#e62627] font-black uppercase tracking-[0.4em] text-xs md:text-sm block">
            {welcomeText}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tighter">
            {mainTitle} <br />
            <span className="text-[#e62627]">{highlightTitle}</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-200 text-sm md:text-lg font-medium leading-relaxed opacity-90">
            {description}
          </p>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-1 h-12 rounded-full bg-gradient-to-b from-[#e62627] to-transparent opacity-50"
        />
      </div>
    </section>
  );
}
