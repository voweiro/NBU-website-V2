"use client";

import React from "react";
import { ShieldCheck, Zap, Clock, Library as LibraryIcon } from "lucide-react";
import { values, services } from "./types";

export const LibraryInfo = () => {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Core Values */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <ShieldCheck className="text-[#e62627]" /> Core Values
            </h3>
            <div className="grid gap-4">
              {values.map((v, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-200 group hover:border-[#e62627]/30 transition-all">
                  <v.icon className="w-5 h-5 text-slate-400 group-hover:text-[#e62627] flex-shrink-0 mt-1" />
                  <div>
                    <h5 className="font-black text-slate-900 text-sm mb-1">{v.title}</h5>
                    <p className="text-slate-500 text-xs font-bold">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Zap className="text-[#e62627]" /> Library Services
            </h3>
            <div className="space-y-4">
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-[#e62627] group-hover:scale-150 transition-transform" />
                  <span className="text-slate-700 font-bold text-sm">{s}</span>
                </div>
              ))}
              <div className="pt-8">
                 <div className="p-8 bg-slate-900 rounded-[2rem] text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <LibraryIcon className="text-[#e62627]" />
                      <h4 className="font-black uppercase tracking-widest text-xs">Resource Count</h4>
                    </div>
                    <p className="text-3xl font-black mb-1">10,000+</p>
                    <p className="text-white/40 text-[10px] font-bold uppercase tracking-tighter">Physical & Digital Titles</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3">
              <Clock className="text-[#e62627]" /> Opening Hours
            </h3>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 space-y-8 border border-slate-100">
               <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                  <span className="font-black text-slate-400 uppercase tracking-widest text-xs">Mon - Fri</span>
                  <span className="font-black text-slate-900">8:00 AM - 9:00 PM</span>
               </div>
               <div className="flex justify-between items-center pb-6 border-b border-slate-100">
                  <span className="font-black text-slate-400 uppercase tracking-widest text-xs">Saturday</span>
                  <span className="font-black text-slate-900">9:00 AM - 7:00 PM</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="font-black text-slate-400 uppercase tracking-widest text-xs">Sunday</span>
                  <span className="font-black text-slate-900">2:00 PM - 7:00 PM</span>
               </div>
               <div className="mt-6 pt-6 border-t border-slate-100 italic text-slate-400 text-xs font-bold text-center">
                  Closed on public holidays unless otherwise stated.
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
