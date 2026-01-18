"use client";

import { motion } from "framer-motion";
import { X, GraduationCap, Briefcase, Award } from "lucide-react";
import type { Officer } from "@/lib/data";

interface ProfileModalProps {
  officer: Officer;
  onClose: () => void;
}

export default function ProfileModal({ officer, onClose }: ProfileModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8 overflow-hidden"
    >
      {/* Dynamic Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl"
        onClick={onClose}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 40 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Side - Image/Identity Section */}
        <div className="md:w-2/5 relative bg-slate-900 overflow-hidden">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e62627] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <div className="relative h-full flex flex-col p-12 text-white">
            <div className="mb-12">
                <div className="w-16 h-1 w-[#e62627]" />
            </div>
            
            <div className="mt-auto">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-[#e62627] font-black uppercase tracking-[0.3em] text-xs mb-4 block"
              >
                Distinguished Staff
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl md:text-4xl font-black mb-4 leading-tight"
              >
                {officer.name}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/60 font-bold uppercase tracking-widest text-[10px]"
              >
                {officer.title}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div className="md:w-3/5 relative bg-white flex flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-10 p-3 bg-slate-50 hover:bg-[#e62627] text-slate-400 hover:text-white rounded-2xl transition-all duration-300 group"
          >
            <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
          </button>

          <div className="flex-grow overflow-y-auto p-12 custom-scrollbar">
            <div className="space-y-10">
              {/* Bio Section */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Academic Biography</h3>
                </div>
                <div className="prose prose-slate max-w-none">
                   {officer.bio.map((paragraph, index) => (
                    <p key={index} className="text-slate-600 leading-relaxed font-medium mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              {/* Appointments Section */}
              {officer.appointments && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-xl bg-[#e62627] flex items-center justify-center">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-slate-900">Past Appointments</h3>
                  </div>
                  <ul className="grid gap-4">
                    {officer.appointments.map((appointment, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-[#e62627]/20 transition-colors"
                      >
                        <Award className="w-5 h-5 text-[#e62627] mt-0.5" />
                        <span className="text-slate-600 font-bold text-sm tracking-tight">{appointment}</span>
                      </motion.li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
