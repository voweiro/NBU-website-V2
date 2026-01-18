"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ProfileModal from "./profile-modal";
import { officers, type Officer } from "@/lib/data";
import { UserPlus, ArrowRight } from "lucide-react";

export default function PrincipalOfficers() {
  const [selectedOfficer, setSelectedOfficer] = useState<Officer | null>(null);
  const [imageLoaded, setImageLoaded] = useState<{ [key: number]: boolean }>({});

  const handleImageLoad = (officerId: number) => {
    setImageLoaded((prev) => ({ ...prev, [officerId]: true }));
  };

  return (
    <section className="py-24 bg-slate-100 relative overflow-hidden">
      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e62627] to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#e62627] font-black uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Governance & Leadership
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight">
            The Principal <span className="text-slate-400 font-medium">Officers</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed font-medium">
            Entrusted with the strategic management of NBU, ensuring 
            academic excellence and sustainable development across our institution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {officers.map((officer, index) => (
            <motion.div
              key={officer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col"
            >
              <div 
                className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200 cursor-pointer mb-8 group-hover:-translate-y-2 transition-transform duration-500"
                onClick={() => setSelectedOfficer(officer)}
              >
                {!imageLoaded[officer.id] && (
                  <div className="absolute inset-0 bg-slate-100 animate-pulse" />
                )}
                <Image
                  src={officer.image || "/placeholder.svg"}
                  alt={officer.name}
                  fill
                  className={`object-cover transition-transform duration-700 group-hover:scale-110 ${
                    imageLoaded[officer.id] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad(officer.id)}
                />
                
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Floating Action Button */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <UserPlus className="w-5 h-5" />
                </div>
              </div>

              <div className="px-4">
                <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-[#e62627] transition-colors duration-300">
                  {officer.name}
                </h3>
                <p className="text-[#e62627] font-extrabold uppercase tracking-widest text-xs mb-6 px-3 py-1 bg-[#e62627]/5 rounded-full inline-block">
                  {officer.title}
                </p>
                
                <button
                  onClick={() => setSelectedOfficer(officer)}
                  className="flex items-center gap-3 text-slate-400 hover:text-slate-900 font-black uppercase tracking-tighter text-xs group/btn transition-colors duration-300"
                >
                  Full Profile
                  <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover/btn:bg-slate-900 group-hover/btn:border-slate-900 group-hover/btn:text-white transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedOfficer && (
          <ProfileModal
            officer={selectedOfficer}
            onClose={() => setSelectedOfficer(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
