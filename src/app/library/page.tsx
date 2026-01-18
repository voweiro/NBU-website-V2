"use client";

import React from "react";
import { LibraryHero } from "@/components/library/LibraryHero";
import { LibraryNarrative } from "@/components/library/LibraryNarrative";
import { LibraryInfo } from "@/components/library/LibraryInfo";
import { LibraryResources } from "@/components/library/LibraryResources";
import { LibraryStaff } from "@/components/library/LibraryStaff";
import { motion } from "framer-motion";

export default function LibraryPage() {
  return (
    <div className="bg-white min-h-screen">
      <LibraryHero />
      <LibraryNarrative />
      <LibraryInfo />
      <LibraryResources />
      <LibraryStaff />

      {/* Modern CTA Footer */}
      <section className="py-24 bg-[#e62627]">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <span className="text-white font-black uppercase tracking-[0.4em] text-xs mb-6 block">Get Started</span>
             <h2 className="text-4xl md:text-5xl font-black text-white mb-12">Access Your Learning Platform</h2>
             <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
                <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all shadow-xl">
                  Student Portal
                </button>
                <button className="px-10 py-5 bg-transparent border-2 border-white text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#e62627] transition-all">
                  Search Collection
                </button>
             </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
}
