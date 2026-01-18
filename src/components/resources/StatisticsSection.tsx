"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  ResponsiveContainer, 
  Legend 
} from "recharts";
import { 
  budgetaryAllocation, 
  students2023_2024, 
  students2024_2025,
  enrollmentSummary 
} from "@/lib/statisticsData";
import { 
  TrendingUp,
  BarChart3,
  GraduationCap
} from "lucide-react";

const StatisticsSection = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(value);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-b from-slate-50 to-white -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Financial Section */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
            <div className="max-w-xl">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="font-black uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#e62627] mb-4 block"
              >
                Fiscal Transparency
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
              >
                Financial <span className="text-slate-400">Overview 2024</span>
              </motion.h2>
              <p className="text-slate-500 font-bold text-sm uppercase tracking-widest leading-relaxed">
                A breakdown of Nigerian British University&apos;s annual budgetary allocation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 flex items-center gap-6">
               <div className="w-16 h-16 rounded-2xl bg-[#e62627]/5 flex items-center justify-center text-[#e62627]">
                  <TrendingUp className="w-8 h-8" />
               </div>
               <div>
                  <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">Total Allocation</h4>
                  <p className="text-2xl font-black text-slate-900">₦939,709,098.52</p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Pie Chart */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="h-[400px] md:h-[500px] w-full bg-white rounded-[3rem] shadow-xl shadow-slate-100 border border-slate-50 p-8"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={budgetaryAllocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={160}
                    paddingAngle={8}
                    dataKey="value"
                    animationDuration={1500}
                  >
                    {budgetaryAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                    formatter={(value: number | string | undefined) => formatCurrency(Number(value || 0))}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Stats Breakdown */}
            <div className="space-y-6">
              {budgetaryAllocation.map((item, i) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 bg-white rounded-3xl border border-slate-100 hover:border-[#e62627]/20 transition-all shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                      <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest">{item.name}</h4>
                    </div>
                    <span className="text-[#e62627] font-black text-xl">{item.percentage}%</span>
                  </div>
                  <p className="text-2xl font-bold text-slate-700 tracking-tight">{formatCurrency(item.value)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Enrollment Section */}
        <div className="mb-32 pt-24 border-t border-slate-100">
           <div className="text-center mb-20">
              <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="font-black uppercase tracking-[0.3em] text-[10px] md:text-xs text-[#e62627] mb-4 block"
                >
                  Student Growth
                </motion.span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-black text-slate-900 mb-6"
                >
                  Registered <span className="text-slate-400">Student Statistics</span>
                </motion.h2>
                <p className="text-slate-500 font-bold text-sm uppercase tracking-widest mx-auto max-w-2xl">
                  Comparative analysis of male and female enrollment across academic sessions.
                </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* 2023/2024 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-10 rounded-[3.5rem] shadow-xl shadow-slate-100 border border-slate-50"
              >
                 <div className="flex items-center justify-between mb-10">
                    <h3 className="text-2xl font-black text-slate-900">Session 2023/2024</h3>
                    <div className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">Base Session</div>
                 </div>
                 <div className="h-[350px] mb-8">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={students2023_2024}
                          cx="50%"
                          cy="50%"
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {students2023_2024.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '15px' }} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="flex border-t border-slate-50 pt-8 gap-8">
                    <div className="flex-1">
                       <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Undergraduate Male</p>
                       <p className="text-2xl font-black text-slate-900">38 <span className="text-xs text-slate-400">(62.3%)</span></p>
                    </div>
                    <div className="flex-1">
                       <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">Undergraduate Female</p>
                       <p className="text-2xl font-black text-slate-900">23 <span className="text-xs text-slate-400">(37.7%)</span></p>
                    </div>
                 </div>
              </motion.div>

              {/* 2024/2025 */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900 p-10 rounded-[3.5rem] shadow-2xl shadow-slate-900/10 text-white"
              >
                 <div className="flex items-center justify-between mb-10">
                    <h3 className="text-2xl font-black">Session 2024/2025</h3>
                    <div className="px-4 py-1.5 bg-[#e62627] text-white rounded-full text-[10px] font-black uppercase tracking-widest">Current Session</div>
                 </div>
                 <div className="h-[350px] mb-8">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={students2024_2025}
                          cx="50%"
                          cy="50%"
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {students2024_2025.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '15px', color: '#000' }} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="flex border-t border-white/10 pt-8 gap-8">
                    <div className="flex-1">
                       <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Undergraduate Male</p>
                       <p className="text-2xl font-black">54 <span className="text-xs text-slate-500">(39.1%)</span></p>
                    </div>
                    <div className="flex-1">
                       <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Undergraduate Female</p>
                       <p className="text-2xl font-black">84 <span className="text-xs text-slate-500">(60.9%)</span></p>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>

        {/* Summary Cards */}
        <div className="pt-24 border-t border-slate-100">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enrollmentSummary.map((session, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-xl overflow-hidden group"
                >
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#e62627] group-hover:text-white transition-all duration-500">
                       <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 mb-1">{session.session}</h4>
                      <div className="flex items-center gap-2">
                         <span className="text-xs font-black text-[#e62627] uppercase tracking-widest">Total Registered</span>
                         <span className="text-lg font-black text-slate-900">{session.total}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {session.subStats.map((sub, j) => (
                      <div key={j} className="p-5 md:p-6 bg-slate-50 rounded-2xl">
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 leading-tight">{sub.label}</p>
                         <p className="text-xl font-black text-slate-900">{sub.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Data Source Notice */}
        <div className="mt-24 p-12 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e62627] rounded-full blur-[120px] opacity-10" />
            <div className="max-w-2xl mx-auto relative z-10 flex flex-col items-center">
                <BarChart3 className="w-12 h-12 text-[#e62627] mb-8" />
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-widest">Statistical Accuracy</h3>
                <p className="text-slate-400 font-bold text-sm leading-relaxed mb-0">
                    All data presented on this page is sourced directly from the University&apos;s official Planning and Financial offices.                     Figures are updated at the end of each academic session to ensure transparency and accountability.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default StatisticsSection;
