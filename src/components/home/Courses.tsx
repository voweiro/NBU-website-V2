"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, BookOpen, GraduationCap } from "lucide-react";
import medical from "@/asserts/medical.jpg";
import engineering from "@/asserts/engineering.jpg";
import law from "@/asserts/law.jpg";
import arts from "@/asserts/management.jpg";
import it from "@/asserts/it-computing.jpg";

const schools = [
  {
    name: "Management And Social Sciences",
    image: arts,
    description:
      "Explore humanities, social sciences, and natural sciences with expert faculty, modern research opportunities, and a multidisciplinary curriculum.",
    stats: "12 Programs",
  },
  {
    name: "Computer Science and IT",
    image: it,
    description:
      "Gain expertise in AI, cybersecurity, software engineering, and cloud computing. equipment for hands-on skills in tech.",
    stats: "5 Programs",
  },
  {
    name: "Basic Medical Sciences",
    image: medical,
    description:
      "Study human anatomy, pathology, and pharmacology through rigorous coursework, research, and clinical training.",
    stats: "4 Programs",
  },
  {
    name: "Engineering",
    image: engineering,
    description:
      "Become an innovator in mechanical, electrical, civil, and computer engineering with access to state-of-the-art labs.",
    stats: "4 Programs",
  },
  {
    name: "Law",
    image: law,
    description:
      "Master legal principles, case law, and ethics with a curriculum designed to develop critical thinking and advocacy skills.",
    stats: "1 Program",
  },
];

const Courses = () => {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-transparent opacity-10" />
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-blue-500/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-12 h-[2px] bg-[#e62627]" />
              <span className="text-[#e62627] font-black uppercase tracking-[0.2em] text-sm">
                Academic Excellence
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white leading-tight"
            >
              World-Class <br />
              <span className="text-white/40">Faculties & Schools</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg max-w-sm"
          >
            Discover our diverse academic offerings and find the path that defines your future at NBU.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900 border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-[#e62627]/30"
            >
              {/* Image Container */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={school.image}
                  alt={school.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                
                {/* Stats Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 flex items-center gap-2">
                  <BookOpen className="w-3 h-3 text-[#e62627]" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">{school.stats}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pb-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-[#e62627] group-hover:border-[#e62627] transition-colors duration-500">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-[#e62627] transition-all duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>

                <h3 className="text-2xl font-black text-white mb-4 line-clamp-2 leading-tight">
                  {school.name}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {school.description}
                </p>

                {/* Decorative Line */}
                <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#e62627] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
