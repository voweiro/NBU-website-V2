"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  FileText, 
  Download, 
  CheckCircle2, 
  AlertCircle,
  Coffee,
  BookOpen,
  Trophy,
  ChevronRight
} from "lucide-react";
import { academicCalendar } from "@/lib/calendarData";

const AcademicCalendar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Academic": return <BookOpen className="w-4 h-4" />;
      case "Holiday": return <Coffee className="w-4 h-4" />;
      case "Exam": return <FileText className="w-4 h-4" />;
      case "Social": return <Trophy className="w-4 h-4" />;
      case "Administrative": return <Clock className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Academic": return "bg-blue-50 text-blue-600 border-blue-100";
      case "Holiday": return "bg-amber-50 text-amber-600 border-amber-100";
      case "Exam": return "bg-red-50 text-[#e62627] border-red-100";
      case "Social": return "bg-purple-50 text-purple-600 border-purple-100";
      case "Administrative": return "bg-slate-50 text-slate-600 border-slate-100";
      default: return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-white to-transparent z-0" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-black uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#e62627] mb-4 block"
          >
            Academic Schedule
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
          >
            University <span className="text-slate-400">Calendar</span>
          </motion.h2>
          <p className="text-slate-500 font-bold text-sm md:text-base uppercase tracking-widest">2024 / 2025 Academic Session</p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
            {/* Semester Switcher */}
            <div className="bg-white p-1.5 rounded-full shadow-xl shadow-slate-200/50 border border-slate-100 flex gap-2">
                {academicCalendar.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveTab(idx)}
                        className={`px-8 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all relative ${
                            activeTab === idx ? "text-white" : "text-slate-400 hover:text-slate-600"
                        }`}
                    >
                        {activeTab === idx && (
                            <motion.div 
                                layoutId="activeCalendarTab"
                                className="absolute inset-0 bg-[#e62627] rounded-full z-0"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10">{item.semester.split(" ")[0]} Semester</span>
                    </button>
                ))}
            </div>

            {/* Download CTA */}
            <button className="flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#e62627] transition-all shadow-xl shadow-slate-900/10 active:scale-95 group">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download PDF Calendar
            </button>
        </div>

        {/* Calendar Timeline */}
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 p-8 md:p-12">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                >
                    {academicCalendar[activeTab].events.map((event, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="group flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8 rounded-3xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                        >
                            {/* Date Column */}
                            <div className="md:w-64 shrink-0">
                                <div className="flex items-center gap-3 mb-2">
                                    <Calendar className="w-4 h-4 text-[#e62627] opacity-40" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Date</span>
                                </div>
                                <p className="text-sm font-black text-slate-900 leading-tight">
                                    {event.date}
                                </p>
                            </div>

                            {/* Divider (Desktop) */}
                            <div className="hidden md:block w-px h-12 bg-slate-100" />

                            {/* Event Column */}
                            <div className="grow">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest border ${getCategoryStyles(event.category)}`}>
                                        {event.category}
                                    </span>
                                </div>
                                <h4 className="text-base md:text-lg font-bold text-slate-800 group-hover:text-[#e62627] transition-colors">
                                    {event.event}
                                </h4>
                            </div>

                            {/* Status Icon */}
                            <div className="shrink-0 hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-slate-50 text-slate-200 group-hover:text-[#e62627]/20 transition-all">
                                <ChevronRight className="w-5 h-5" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>

        {/* Disclaimer/Notice */}
        <div className="mt-16 bg-[#e62627] rounded-[2.5rem] p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-[120px] opacity-10" />
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                    <h4 className="text-xl font-black text-white uppercase tracking-widest mb-2">Important Notice</h4>
                    <p className="text-white/80 font-bold text-sm leading-relaxed max-w-2xl">
                        This calendar is subject to change at the discretion of the University Senate. Students and staff are advised to check back regularly for updates or official announcements through the university portal.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AcademicCalendar;
