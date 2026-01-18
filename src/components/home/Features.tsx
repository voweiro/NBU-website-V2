"use client";

import { motion } from "framer-motion";
import { Wallet, MapPinned, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Tuition & Fees",
    description: "Explore our flexible tuition structures and financial aid programs designed to make world-class education accessible.",
    link: "/admission/tuition-fee",
    accent: "bg-blue-500"
  },
  {
    icon: <MapPinned className="w-8 h-8" />,
    title: "Tour the University",
    description: "Experience our state-of-the-art facilities and vibrant campus life through an immersive virtual or physical tour.",
    link: "/about/campus-tour",
    accent: "bg-[#e62627]"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Apply to NBU",
    description: "Begin your transformation. Join a community of future leaders and innovators at Nigerian British University.",
    link: "https://nbunet.nbu.edu.ng/Account/login",
    accent: "bg-amber-500"
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#e62627] font-extrabold uppercase tracking-widest text-sm mb-4 block"
          >
            Start Your Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight"
          >
            How would you like to explore <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#e62627] to-slate-900">
              NBU Today?
            </span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-[#e62627]/20 transition-all duration-500"
            >
              {/* Feature Accent Indicator */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 ${feature.accent} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${feature.accent.replace('bg-', 'bg-').replace('500', '100')} ${feature.accent.replace('bg-', 'text-')}`}>
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#e62627] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium mb-8">
                {feature.description}
              </p>

              {/* CTA Link */}
              <Link 
                href={feature.link}
                className="inline-flex items-center gap-2 text-slate-900 font-black uppercase tracking-wider text-sm group/btn"
              >
                <span>Discover Path</span>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover/btn:bg-[#e62627] group-hover/btn:text-white transition-all duration-300">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
