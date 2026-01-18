"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  Utensils, 
  Stethoscope, 
  Wifi, 
  ShieldCheck, 
  Users,
  Dumbbell,
  Library
} from "lucide-react";

const experiences = [
  {
    icon: Home,
    title: "Student Housing",
    description: "Modern, secure, and comfortable hostels designed to foster a sense of community while providing privacy for study.",
    image: "/images/campus/hostel.jpg"
  },
  {
    icon: Utensils,
    title: "Dining Services",
    description: "Nutritious and varied meal options served in our state-of-the-art cafeteria, catering to diverse dietary needs.",
    image: "/images/campus/dining.jpg"
  },
  {
    icon: Stethoscope,
    title: "Health & Wellness",
    description: "24/7 on-campus medical center staffed with professionals to ensure the physical and mental well-being of our students.",
    image: "/images/campus/medical.jpg"
  },
  {
    icon: Dumbbell,
    title: "Sports & Fitness",
    description: "World-class athletic facilities, including a gymnasium, football pitch, and basketball courts.",
    image: "/images/campus/sports.jpg"
  },
  {
    icon: Wifi,
    title: "Smart Campus",
    description: "High-speed campus-wide WiFi and digital resources keeping you connected to the world and your studies.",
    image: "/images/campus/smart.jpg"
  },
  {
    icon: ShieldCheck,
    title: "Safety & Security",
    description: "Round-the-clock security surveillance and personnel to ensure a safe and peaceful learning environment.",
    image: "/images/campus/security.jpg"
  }
];

const ExperienceGrid = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-black uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#e62627] mb-4 block"
          >
            Our Facilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-8"
          >
            The Full <span className="text-slate-400">Student Experience</span>
          </motion.h2>
          <div className="h-1 w-20 bg-[#e62627] mb-8" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50"
            >
              {/* Background Placeholder/Pattern (Simulating Image) */}
              <div className="absolute inset-0 bg-slate-100 group-hover:scale-110 transition-transform duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                <div className="mb-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-[#e62627] group-hover:text-white transition-colors duration-500">
                  <exp.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-black text-white mb-4">{exp.title}</h3>
                <p className="text-slate-300 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {exp.description}
                </p>
              </div>

              {/* Decorative border */}
              <div className="absolute inset-0 border-[1px] border-white/10 rounded-[2.5rem] pointer-events-none group-hover:border-[#e62627]/30 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Community Highlight */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="mt-24 p-12 md:p-20 bg-slate-950 rounded-[4rem] text-center relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#e62627]/10 via-transparent to-transparent opacity-50" />
            <div className="relative z-10 max-w-3xl mx-auto">
                <Users className="w-12 h-12 text-[#e62627] mx-auto mb-8" />
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6">Built Around Community</h3>
                <p className="text-slate-400 text-lg font-medium leading-relaxed mb-10">
                    At NBU, you're not just a student; you're part of a diverse, global family. From late-night study sessions to weekend sports, every moment is an opportunity to grow together.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[10px]">20+ Student Clubs</div>
                    <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[10px]">Global Diversity</div>
                    <div className="px-6 py-3 bg-white/5 rounded-full border border-white/10 text-white font-black uppercase tracking-widest text-[10px]">Vibrant Campus Life</div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceGrid;
