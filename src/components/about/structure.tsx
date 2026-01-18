"use client";

import React from "react";
import {
  BookOpen,
  Globe,
  Shield,
  Users,
  Lightbulb,
  Award,
  Heart,
  Eye,
  GraduationCap,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function UniversityAbout() {
  const objectives = [
    "To Produce world-class graduates in different disciplines who are highly skilled and ethically conscious.",
    "To provide academic mentorship to our graduates, make them useful towards solving present and future global problems.",
    "Establishing a dynamic link with captains of industry and organizations for industrial training and research.",
    "To produce internationally acclaimed graduates.",
    "Create and expand access to opportunities in education for physically challenged students.",
    "Attract and retain quality students, researchers and teachers, mitigating brain drain in Nigeria.",
    "Promote advancement of learning without distinction of race, creed, sex, or religion.",
    "To contribute to the research and development of engineering and technological knowledge.",
    "Carry out basic and applied research leading to collaborative relationships globally.",
    "Establish a centre for entrepreneurial studies to stimulate job creation.",
    "Undertake activities for teaching, research and community service enhancing human capacity."
  ];

  const logoElements = [
    {
      icon: Shield,
      title: "Royal Red Shield",
      description: "Symbol of wisdom and strength, representing our British academic foundation.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: BookOpen,
      title: "Open Book",
      description: "A symbol of knowledge and enlightenment through sound instructions.",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Globe,
      title: "The Globe",
      description: "Symbolizes universality and versatility, far-reaching impact.",
      color: "text-slate-900",
      bgColor: "bg-slate-50"
    },
    {
      icon: Sparkles,
      title: "Glowing Trapezium",
      description: "Commitment to academic distinctiveness and environmental preservation.",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
  ];

  const coreValues = [
    { name: "Mentorship", icon: Users, desc: "Fostering growth through guidance." },
    { name: "Dynamism", icon: Lightbulb, desc: "Adapting to global changes." },
    { name: "Integrity", icon: Shield, desc: "Unwavering ethical standards." },
    { name: "Diversity", icon: Globe, desc: "Celebrating all backgrounds." },
  ];

  return (
    <div className="bg-white">
      {/* Philosophy Section - High Impact Glassmorphism Card */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="relative p-12 md:p-20 bg-slate-900 rounded-[3rem] overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e62627]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-[#e62627] mx-auto mb-10 rounded-full" />
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Our Philosophy</h2>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed font-medium italic">
                "Our philosophy is rooted in holistic development and global perspectives. We
                believe education should empower students intellectually, morally, and socially.
                Our curriculum encourages critical thinking, ethical leadership, and active
                community engagement."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives Section - Modern Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-[#e62627] font-black uppercase tracking-[0.3em] text-xs mb-4 block">Strategic Goals</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">University <br /><span className="text-slate-400">Objectives</span></h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 bg-white rounded-3xl border border-slate-100 hover:border-[#e62627]/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center text-xs font-black">
                    {index + 1}
                  </span>
                  <p className="text-slate-600 text-sm font-semibold leading-relaxed leading-snug">
                    {text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo & Symbolism - Creative Layout */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 p-12 bg-slate-900 rounded-[3rem] flex flex-col items-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,#e62627_0%,transparent_70%)] opacity-10" />
                <Image
                  src="/images/logo.png"
                  alt="University Logo"
                  width={250}
                  height={250}
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <h3 className="text-2xl font-black text-white mt-8 tracking-widest uppercase">The Seal of NBU</h3>
              </div>
              {/* Decorative backgrounds */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-100 rounded-full blur-3xl -z-10" />
            </motion.div>

            <div className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {logoElements.map((el, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`p-6 ${el.bgColor} rounded-[2rem] border border-transparent hover:border-slate-200 transition-all`}
                  >
                    <el.icon className={`w-8 h-8 ${el.color} mb-4`} />
                    <h4 className="text-lg font-black text-slate-900 mb-2">{el.title}</h4>
                    <p className="text-slate-600 text-xs font-bold leading-relaxed">{el.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <div className="w-12 h-12 bg-[#e62627] rounded-2xl flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                        <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-widest text-sm mb-2">Color Significance</h4>
                    <p className="text-white/60 text-xs font-medium italic">Red for Dynamism & Love. Blue for Visionary Teachings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Premium Icons Grid */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#e62627] font-black uppercase tracking-[0.4em] text-xs mb-6 block">Our DNA</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-20">The Core Values</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-[#e62627] hover:border-[#e62627] transition-all duration-500"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-white group-hover:rotate-12 transition-all">
                  <val.icon className="w-8 h-8 text-white group-hover:text-[#e62627]" />
                </div>
                <h4 className="text-xl font-black text-white mb-4">{val.name}</h4>
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest group-hover:text-white/80 transition-colors">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
