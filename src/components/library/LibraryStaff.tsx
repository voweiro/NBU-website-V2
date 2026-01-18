"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { libraryStaff } from "./types";

const SectionHeader = ({ subtitle, title }: { subtitle: string; title: string }) => (
  <div className="mb-16">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="font-black uppercase tracking-[0.3em] text-xs mb-4 block text-[#e62627]"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-black leading-tight text-slate-900"
    >
      {title}
    </motion.h2>
  </div>
);

export const LibraryStaff = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader subtitle="Expertise" title="Our Library Team" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {libraryStaff.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="group text-center"
            >
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl shadow-slate-200">
                <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                <Image 
                  src={member.image} 
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Glassmorphic Badge Overlay */}
                <div className="absolute inset-x-6 bottom-6 p-6 bg-white/80 backdrop-blur-xl rounded-[2rem] border border-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[#e62627] font-black uppercase tracking-widest text-[10px] mb-1">Position</p>
                    <p className="text-slate-900 font-black text-xs">{member.title}</p>
                </div>
              </div>
              <h4 className="text-2xl font-black text-slate-900 group-hover:text-[#e62627] transition-colors">{member.name}</h4>
              <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-2 mb-4">{member.degree || "Librarian Specialist"}</p>
              {member.subtitle && <p className="text-slate-500 text-xs font-semibold italic">{member.subtitle}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
