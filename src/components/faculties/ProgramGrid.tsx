"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Program {
  number: string;
  title: string;
  subtitle: string;
  href: string;
}

interface ProgramGridProps {
  programs: Program[];
}

export default function ProgramGrid({ programs }: ProgramGridProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {programs.map((program, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="space-y-6">
                <span className="text-[#e62627] font-black tracking-tighter text-xl">
                  {program.number}
                </span>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-[#e62627] transition-colors duration-300">
                  {program.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium opacity-80">
                  {program.subtitle}
                </p>
                <Link
                  href={program.href}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#e62627]/60 group-hover:text-[#e62627] transition-colors duration-300"
                >
                  Get Started Now
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
