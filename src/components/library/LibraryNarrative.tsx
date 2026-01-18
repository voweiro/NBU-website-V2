"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ScrollText, Target, Eye } from "lucide-react";

export const LibraryNarrative = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
              <ScrollText className="text-[#e62627]" /> Our History
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed font-semibold">
              Founded in September 2023 following our NUC approval, the NBU Library started with 417 books. 
              Today, our collection has grown into thousands of titles, journals, and digital assets spanning 
              Computing, Engineering, Law, Medical Sciences, and the Arts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <Target className="w-8 h-8 text-[#e62627] mb-6" />
              <h4 className="text-xl font-black text-slate-900 mb-4">Our Mission</h4>
              <p className="text-slate-600 text-sm font-bold leading-relaxed">
                To provide quality information resources that foster scholarship, innovation, and lifelong learning 
                through cutting-edge technology.
              </p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <Eye className="w-8 h-8 text-blue-600 mb-6" />
              <h4 className="text-xl font-black text-slate-900 mb-4">Our Vision</h4>
              <p className="text-slate-600 text-sm font-bold leading-relaxed">
                To be a world-class leading center of knowledge that supports global excellence in teaching, 
                learning, and research.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative aspect-square md:aspect-video lg:aspect-square bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl"
        >
          <Image 
            src="https://images.unsplash.com/photo-1521587760476-6c12a71048ca?auto=format&fit=crop&q=80" 
            alt="Knowledge Portal"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#e62627]/10" />
        </motion.div>
      </div>
    </section>
  );
};
