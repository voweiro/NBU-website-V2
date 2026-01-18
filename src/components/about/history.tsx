"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import tuition from "@/asserts/vc.jpg";

const History = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left side - Image with Artistic Framing */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image
                src={tuition}
                alt="University Leadership"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Artistic accents */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#e62627]/5 rounded-full blur-3xl -z-1" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl -z-1" />
          </motion.div>

          {/* Right side - Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-[2px] bg-[#e62627]" />
                <span className="text-[#e62627] font-black uppercase tracking-widest text-sm">Our Legacy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Developing Potentials, <br />
                <span className="text-slate-400">Expanding Horizons</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Nigerian British University is a world-class private University
                  poised to develop global competitiveness by employing
                  technological innovation to ensure practical and relevant
                  academic experiences. 
                </p>
                <p>
                  Approved by the NUC in May 2022, we operate a British academic model,
                  blending on-campus excellence with 24/7 digital accessibility. Our mission is 
                  to provide a borderless education that prepares students for the complexities 
                  of the modern global economy.
                </p>
              </div>
            </motion.div>

            {/* Mission & Vision - Premium Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#e62627]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-[#e62627]" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To lead the charge in educating and disseminating knowledge in
                  science and technology and to channel that knowledge toward
                  solving society&apos;s challenges.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be a prestigious international university that champions
                  innovation, self-reliance, and the development of culturally
                  savvy and disciplined researchers.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
