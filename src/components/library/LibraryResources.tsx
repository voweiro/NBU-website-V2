"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, ExternalLink, Globe, ChevronRight } from "lucide-react";
import { subscribedResources, openAccessResources } from "./types";

const SectionHeader = ({ subtitle, title, dark = false }: { subtitle: string; title: string; dark?: boolean }) => (
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
      className={`text-4xl md:text-5xl font-black leading-tight ${dark ? "text-white" : "text-slate-900"}`}
    >
      {title}
    </motion.h2>
  </div>
);

export const LibraryResources = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-r from-[#e62627]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader subtitle="Digital Portal" title="Subscribed E-Resources" dark />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {subscribedResources.map((res, i) => (
            <motion.a
              key={i}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white hover:border-white transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">
                  <Database className="w-5 h-5 text-white group-hover:text-white" />
                </div>
                <h4 className="text-xl font-black text-white group-hover:text-slate-900 mb-2 transition-colors">{res.name}</h4>
                <p className="text-white/40 text-xs font-bold leading-relaxed group-hover:text-slate-500 transition-colors">{res.desc}</p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                 <span className="text-white/60 text-[10px] font-black uppercase tracking-widest group-hover:text-[#e62627] transition-colors">Secure Access</span>
                 <ExternalLink className="w-4 h-4 text-[#e62627] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.a>
          ))}
        </div>

        <SectionHeader subtitle="Academic Gateway" title="Open Access E-Resources" dark />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openAccessResources.map((res, i) => (
            <motion.a
              key={i}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="group flex items-center gap-6 p-6 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#e62627] transition-colors">
                  <Globe className="w-4 h-4 text-white/40 group-hover:text-[#e62627]" />
              </div>
              <div className="flex-grow">
                 <h5 className="text-white font-black uppercase tracking-tight text-sm group-hover:text-[#e62627] transition-colors">{res.name}</h5>
                 {res.desc && <p className="text-white/40 text-[10px] font-bold uppercase tracking-tighter mt-1">{res.desc}</p>}
              </div>
              <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white transition-all group-hover:translate-x-1" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
