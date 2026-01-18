import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bulletins, Bulletin } from "@/lib/bulletinData";
import Image from "next/image";
import { Search, Download, Eye, Calendar, FileText, ChevronRight, Newspaper } from "lucide-react";

const SchoolBulletin = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBulletin, setSelectedBulletin] = useState<Bulletin | null>(null);

  const filtered = useMemo(() => {
    return bulletins.filter(
      (b) =>
        b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.month.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section className="py-24 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-black uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#e62627] mb-4 block"
            >
              Stay Informed
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
            >
              School <span className="text-slate-400">Bulletin Archive</span>
            </motion.h2>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Digital editions for the 2024/2025 Session</p>
          </div>

          {/* Search Bar */}
          <div className="shrink-0 w-full md:w-96">
             <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-[#e62627] transition-colors" />
                <input
                  type="text"
                  placeholder="Search bulletins..."
                  className="w-full pl-16 pr-6 py-5 bg-slate-50 border-2 border-transparent focus:border-[#e62627]/20 focus:bg-white rounded-[2rem] text-slate-900 placeholder:text-slate-400 font-bold transition-all shadow-sm outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
             </div>
          </div>
        </div>

        {/* Content Grid */}
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="text-center py-32"
            >
              <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8">
                 <Newspaper className="w-10 h-10 text-slate-200" />
              </div>
              <p className="text-slate-400 font-black uppercase text-xs tracking-[0.2em]">No bulletins found matching your search</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filtered.map((b, i) => (
                <motion.div
                  key={b.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative bg-white rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-500"
                >
                  {/* Image Container */}
                  <div className="relative h-72 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900 group-hover:scale-110 transition-transform duration-700">
                      <Image
                        src={b.image}
                        alt={b.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    {/* Month Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <div className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full">
                        <span className="text-white text-[10px] font-black uppercase tracking-widest">{b.month} Edition</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <Calendar className="w-4 h-4 text-[#e62627]" />
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Official Publication</span>
                    </div>
                    <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-[#e62627] transition-colors">{b.title}</h4>
                    <p className="text-slate-500 text-sm font-semibold leading-relaxed mb-10 line-clamp-2">
                       {b.description}
                    </p>

                    {/* Footer Actions */}
                    <div className="flex items-center gap-4">
                       <a
                          href={b.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-[#e62627] transition-all"
                       >
                          <Eye className="w-4 h-4" />
                          Read Online
                       </a>
                       <button
                          onClick={() => setSelectedBulletin(b)}
                          className="w-14 h-14 flex items-center justify-center bg-slate-50 text-slate-400 rounded-2xl hover:bg-[#e62627]/10 hover:text-[#e62627] transition-all"
                       >
                          <Download className="w-5 h-5" />
                       </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Contact/Subscription CTA */}
        <div className="mt-32 p-12 md:p-20 bg-slate-900 rounded-[4rem] flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#e62627] rounded-full blur-[150px] opacity-10" />
           <div className="relative z-10 max-w-xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">Never miss an <span className="text-[#e62627]">Update.</span></h3>
              <p className="text-slate-400 font-bold mb-0">
                 Subscribe to our digital mailing list to receive the monthly School Bulletin directly in your inbox.
              </p>
           </div>
           <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <input 
                 type="email" 
                 placeholder="your@email.com"
                 className="px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-black uppercase tracking-widest text-[10px] focus:outline-none focus:border-[#e62627] transition-all w-full md:w-64"
              />
              <button className="px-10 py-5 bg-[#e62627] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#e62627] transition-all whitespace-nowrap">
                 Subscribe Now
              </button>
           </div>
        </div>
      </div>

      {/* Modern Modal */}
      <AnimatePresence>
        {selectedBulletin && (
          <motion.div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xl z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-[3rem] max-w-md w-full p-12 shadow-2xl text-center relative overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-[#e62627]" />
              
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                 <FileText className="w-8 h-8 text-green-600" />
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4">Download Ready</h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed mb-10">
                The digital edition of <span className="text-slate-900">"{selectedBulletin.title}"</span> is ready for download.
              </p>
              
              <div className="flex flex-col gap-4">
                  <a
                    href={selectedBulletin.url}
                    download
                    onClick={() => setSelectedBulletin(null)}
                    className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-[#e62627] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:shadow-xl hover:shadow-red-600/20 transition-all active:scale-95"
                  >
                    Start Download
                  </a>
                  <button
                    onClick={() => setSelectedBulletin(null)}
                    className="w-full px-8 py-5 bg-slate-50 text-slate-400 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-100 transition-all"
                  >
                    Cancel
                  </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SchoolBulletin;
