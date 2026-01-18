"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  Stethoscope, 
  Wifi, 
  ShieldCheck, 
  Users,
  Dumbbell,
  Utensils,
  Trophy,
  Globe,
  Camera,
  Heart
} from "lucide-react";

const experiences = [
  {
    title: "Modern Library",
    description: "Access to thousands of digital and physical resources 24/7.",
    icon: BookOpen,
    color: "bg-blue-500"
  },
  {
    title: "Health Center",
    description: "Fully equipped clinic with certified medical professionals.",
    icon: Stethoscope,
    color: "bg-[#e62627]"
  },
  {
    title: "High-speed Wi-Fi",
    description: "Seamless connectivity across the entire campus grounds.",
    icon: Wifi,
    color: "bg-cyan-500"
  },
  {
    title: "Elite Sports",
    description: "Olympic-standard facilities for all major sporting events.",
    icon: Dumbbell,
    color: "bg-amber-500"
  },
  {
    title: "24/7 Security",
    description: "Advanced surveillance and professional security personnel.",
    icon: ShieldCheck,
    color: "bg-slate-900"
  },
  {
    title: "Dining Halls",
    description: "Nutritious and diverse meal options for all students.",
    icon: Utensils,
    color: "bg-emerald-500"
  }
];

const ExperienceGrid = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1000px] bg-white -z-10 skew-y-3 origin-top-left" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
           <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-black uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#e62627] mb-4 block"
              >
                Student Experience
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
              >
                Life at <span className="text-slate-400">NBU Campus</span>
              </motion.h2>
              <p className="text-slate-500 font-bold text-sm md:text-base uppercase tracking-widest leading-relaxed">
                 Explore the world-class facilities designed for excellence.
              </p>
           </div>
           
           <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-lg shadow-slate-200 flex items-center justify-center">
                 <Trophy className="w-5 h-5 text-amber-500" />
              </div>
              <div className="w-12 h-12 bg-white rounded-2xl shadow-lg shadow-slate-200 flex items-center justify-center">
                 <Globe className="w-5 h-5 text-blue-500" />
              </div>
              <div className="w-12 h-12 bg-white rounded-2xl shadow-lg shadow-slate-200 flex items-center justify-center">
                 <Camera className="w-5 h-5 text-[#e62627]" />
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-10 bg-white rounded-[3rem] border border-slate-100 hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
              
              <div className={`w-14 h-14 ${exp.color} rounded-2xl flex items-center justify-center text-white mb-8 relative z-10 shadow-lg`}>
                <exp.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-4 relative z-10">{exp.title}</h3>
              <p className="text-slate-500 text-sm font-semibold leading-relaxed relative z-10">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="relative p-12 md:p-20 bg-slate-900 rounded-[4rem] text-center overflow-hidden"
        >
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#e62627] rounded-full blur-[150px] opacity-10" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] opacity-10" />
           
           <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-10">
                 <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to <span className="text-[#e62627]">join us?</span></h3>
              <p className="text-white/60 text-base md:text-lg font-medium leading-relaxed mb-12 italic">
                 &ldquo;Campus life at NBU is designed to be more than just academics. It&apos;s about community, growth, and leading with purpose.&rdquo;
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <button className="px-10 py-5 bg-[#e62627] text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#e62627] transition-all shadow-xl shadow-red-600/20 active:scale-95">
                    Schedule a Visit
                 </button>
                 <div className="flex items-center justify-center gap-4 px-10 py-5 bg-white/5 border border-white/10 rounded-full text-white font-black uppercase tracking-widest text-xs">
                    <Heart className="w-4 h-4 text-[#e62627]" />
                    Join the Community
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceGrid;
