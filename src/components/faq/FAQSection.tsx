"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/faqData";
import { Search, MessageSquare, ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = ["All", "General", "Admissions", "Academics", "Student Life"];

  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#e62627]/5 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-black uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#e62627] mb-4 block"
          >
            Help & Support
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
          >
            Frequently Asked <span className="text-slate-400">Questions</span>
          </motion.h2>
          <p className="text-slate-500 font-bold text-sm md:text-base uppercase tracking-widest">Everything you need to know about NBU</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-8">
          {/* Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-slate-400 group-focus-within:text-[#e62627] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-8 py-6 bg-slate-50 border-2 border-transparent focus:border-[#e62627]/20 focus:bg-white rounded-[2rem] text-slate-900 placeholder:text-slate-400 font-bold transition-all shadow-sm outline-none"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? "bg-[#e62627] text-white shadow-lg shadow-red-600/20"
                    : "bg-white text-slate-400 border border-slate-100 hover:border-slate-200 hover:text-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className={`rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                    openIndex === index 
                      ? "bg-white border-[#e62627]/20 shadow-2xl shadow-slate-200" 
                      : "bg-slate-50/50 border-slate-100 hover:border-slate-200"
                  }`}>
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-8 py-8 text-left flex items-center justify-between gap-6"
                    >
                      <div className="flex items-center gap-6">
                         <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                            openIndex === index ? "bg-[#e62627] text-white" : "bg-white text-slate-400 shadow-sm"
                         }`}>
                            <MessageSquare className="w-4 h-4" />
                         </div>
                         <span className={`text-sm md:text-base font-black tracking-tight transition-colors duration-500 ${
                            openIndex === index ? "text-slate-900" : "text-slate-600"
                         }`}>
                           {faq.question}
                         </span>
                      </div>
                      <div className={`transition-transform duration-500 ${openIndex === index ? "rotate-180" : ""}`}>
                         <ChevronDown className={`w-5 h-5 ${openIndex === index ? "text-[#e62627]" : "text-slate-300"}`} />
                      </div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <div className="px-8 pb-8 pl-24 text-slate-500 text-sm md:text-base font-semibold leading-relaxed">
                            <div className="h-[1px] w-full bg-slate-100 mb-6" />
                            {faq.answer.split("\n").map((line, i) => (
                              <p key={i} className="mb-2 last:mb-0">{line}</p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-slate-200" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">No results found</h3>
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Try adjusting your search or filters</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Support CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#e62627] rounded-full blur-[120px] opacity-20 group-hover:opacity-30 transition-opacity" />
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4 relative z-10">Still have questions?</h3>
          <p className="text-slate-400 font-bold mb-8 max-w-md mx-auto relative z-10">Our admissions team is here to help you guide through every step of your journey.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="px-8 py-4 bg-[#e62627] text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#e62627] transition-all active:scale-95 shadow-xl shadow-red-600/20">
              Contact Support
            </button>
            <button className="px-8 py-4 bg-white/10 text-white border border-white/10 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white/20 transition-all active:scale-95">
              Live Chat
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQSection;
