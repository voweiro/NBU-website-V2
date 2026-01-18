"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

// Mock data for university news
const newsItems = [
  {
    id: 1,
    title: "NBU Launches State-of-the-Art AI & Robotics Innovation Hub",
    category: "Academic",
    date: "May 15, 2026",
    description: "The new hub aims to position NBU at the forefront of technological advancement in West Africa, fostering research in automation and machine learning.",
    image: "/images/news1.jpg", // Using placeholders or existing images
    link: "/news/ai-hub-launch"
  },
  {
    id: 2,
    title: "2026 Annual Convocation: Celebrating the Next Generation of Leaders",
    category: "Events",
    date: "June 10, 2026",
    description: "Join us as we honor the achievements of our graduating students and welcome distinguished guest speakers to the NBU campus.",
    image: "/images/news2.jpg",
    link: "/news/convocation-2026"
  },
  {
    id: 3,
    title: "NBU Students Secure Top Honors at Global Engineering Challenge",
    category: "Achievements",
    date: "April 28, 2026",
    description: "A team of students from the Faculty of Engineering has won the first prize in the International Sustainability Challenge held in London.",
    image: "/images/news3.jpg",
    link: "/news/engineering-win"
  }
];

export default function LatestNews() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
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
                Campus Updates
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-slate-900 leading-tight"
            >
              Latest <span className="text-slate-400">from NBU</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/news" 
              className="group flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold transition-all hover:bg-[#e62627] hover:shadow-xl hover:shadow-red-600/20"
            >
              View All Stories
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <motion.article
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden">
                {/* Fallback pattern if image fails */}
                <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    // This is a common pattern to handle missing images during dev
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1523050853064-95ef13fb1a21?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-[#e62627] shadow-sm">
                    {news.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="font-semibold">{news.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-[#e62627] transition-colors duration-300">
                  {news.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {news.description}
                </p>

                <div className="mt-auto">
                  <Link 
                    href={news.link}
                    className="inline-flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-xs group/btn"
                  >
                    Read More
                    <span className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-[#e62627] group-hover/btn:border-[#e62627] group-hover/btn:text-white">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
