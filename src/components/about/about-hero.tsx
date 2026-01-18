"use client";

import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AboutHeroProps {
  imageSrc: StaticImageData;
  title: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ imageSrc, title }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden bg-slate-900">
      {/* Background Image with Parallax & Zoom */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.3}px) scale(${1.1 + scrollY * 0.0005})`,
          }}
          priority
        />
        {/* Modern Multi-layer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-slate-900/90" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[#e62627] font-extrabold uppercase tracking-[0.3em] text-xs md:text-sm mb-6 block"
          >
            NBU Heritage
          </motion.span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight">
            {title}
          </h1>
          <div className="w-24 h-1 bg-[#e62627] mx-auto mt-8 rounded-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHero;
