"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ImageContentSectionProps {
  image: StaticImageData | string;
  title: string;
  content: string;
  imagePosition?: "left" | "right";
  backgroundColor?: string;
}

export default function ImageContentSection({
  image,
  title,
  content,
  imagePosition = "left",
  backgroundColor = "bg-black",
}: ImageContentSectionProps) {
  return (
    <section className={`py-24 ${backgroundColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col ${imagePosition === "left" ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}>
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: imagePosition === "left" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
             initial={{ opacity: 0, x: imagePosition === "left" ? 50 : -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex-1 space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                {title}
              </h2>
              <div className="w-20 h-1.5 bg-[#e62627]" />
            </div>
            
            <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed opacity-90">
              {content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
