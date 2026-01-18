"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Wallet, 
  BookOpen, 
  AlertCircle, 
  Stethoscope, 
  GraduationCap, 
  CheckCircle, 
  FileText, 
  ClipboardList, 
  Utensils, 
  Building2 
} from "lucide-react";

const TuitionFeesTable = () => {
  const [activeTab, setActiveTab] = useState("undergraduate");

  const tabs = [
    { id: "undergraduate", label: "Undergraduate", icon: BookOpen },
    { id: "medical", label: "Medical Sciences", icon: Stethoscope },
    { id: "postgraduate", label: "Postgraduate", icon: GraduationCap },
  ];

  const academicData = [
    { programme: "LAW", acceptance: "40,000", tuition: "1,100,000", development: "100,000", accommodation: "650,000", other: "656,000", totalNew: "2,946,000", totalReturning: "2,906,000" },
    { programme: "Computing & IT", acceptance: "40,000", tuition: "1,100,000", development: "100,000", accommodation: "650,000", other: "656,000", totalNew: "2,526,000", totalReturning: "2,486,000" },
    { programme: "Management & Social Science", acceptance: "40,000", tuition: "900,000", development: "100,000", accommodation: "650,000", other: "576,000", totalNew: "2,266,000", totalReturning: "2,226,000" },
    { programme: "Medicine & Surgery", acceptance: "40,000", tuition: "2,204,000", development: "100,000", accommodation: "650,000", other: "956,000", totalNew: "3,950,000", totalReturning: "3,910,000" },
    { programme: "Biochemistry", acceptance: "4,000", tuition: "1,249,311", development: "100,000", accommodation: "650,000", other: "656,000", totalNew: "2,659,311", totalReturning: "2,655,311" },
  ];

  const medicalData = [
    { programme: "Medicine & Surgery", l100: "2,850,000", l200: "2,650,000", l300: "2,450,000", l400: "2,250,000" },
    { programme: "Dentistry", l100: "2,400,000", l200: "2,200,000", l300: "2,000,000", l400: "1,800,000" },
    { programme: "Pharmacy", l100: "1,950,000", l200: "1,750,000", l300: "1,550,000", l400: "1,350,000" },
    { programme: "Nursing", l100: "1,650,000", l200: "1,450,000", l300: "1,250,000", l400: "1,050,000" },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block text-[#e62627]"
          >
            Financial Information
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6"
          >
            Tuition & <span className="text-slate-400">Academic Fees</span>
          </motion.h2>
          <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Academic Session 2024 / 2025</p>
        </div>

        {/* Custom Premium Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white p-2 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
             {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-8 py-4 rounded-[1.5rem] flex items-center gap-3 transition-all duration-500 overflow-hidden ${
                    activeTab === tab.id ? "text-white" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-[#e62627]"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <tab.icon className={`w-4 h-4 relative z-10`} />
                  <span className="text-xs font-black uppercase tracking-widest relative z-10">{tab.label}</span>
                </button>
             ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "undergraduate" && (
              <motion.div
                key="undergrad"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="overflow-x-auto custom-scrollbar"
              >
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-8 py-8 first:rounded-tl-[3rem] font-black uppercase tracking-widest text-[10px]">Programme</th>
                      <th className="px-4 py-8 font-black uppercase tracking-widest text-[10px] text-center">Acceptance</th>
                      <th className="px-4 py-8 font-black uppercase tracking-widest text-[10px] text-center">Tuition</th>
                      <th className="px-4 py-8 font-black uppercase tracking-widest text-[10px] text-center">Development</th>
                      <th className="px-4 py-8 font-black uppercase tracking-widest text-[10px] text-center">Living</th>
                      <th className="px-4 py-8 font-black uppercase tracking-widest text-[10px] text-center">Others</th>
                      <th className="px-8 py-8 last:rounded-tr-[3rem] font-black uppercase tracking-widest text-[10px] text-center bg-[#e62627]">New Students (Total)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {academicData.map((row, i) => (
                      <motion.tr 
                        key={i}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="group hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-8 py-6 text-sm font-black text-slate-800">{row.programme}</td>
                        <td className="px-4 py-6 text-xs font-bold text-slate-500 text-center">₦{row.acceptance}</td>
                        <td className="px-4 py-6 text-xs font-bold text-slate-500 text-center">₦{row.tuition}</td>
                        <td className="px-4 py-6 text-xs font-bold text-slate-500 text-center">₦{row.development}</td>
                        <td className="px-4 py-6 text-xs font-bold text-slate-500 text-center">₦{row.accommodation}</td>
                        <td className="px-4 py-6 text-xs font-bold text-slate-500 text-center">₦{row.other}</td>
                        <td className="px-8 py-6 text-sm font-black text-slate-900 text-center bg-[#e62627]/5 group-hover:bg-[#e62627]/10 transition-colors">₦{row.totalNew}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}

            {activeTab === "medical" && (
              <motion.div
                key="medical"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="overflow-x-auto p-12"
              >
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {medicalData.map((row, i) => (
                      <div key={i} className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-[#e62627]/30 transition-all group">
                         <h4 className="font-black text-sm text-slate-900 mb-6 group-hover:text-[#e62627]">{row.programme}</h4>
                         <div className="space-y-4">
                            <div className="flex justify-between items-center">
                               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">100 Level</span>
                               <span className="text-xs font-black text-slate-900">₦{row.l100}</span>
                            </div>
                            <div className="flex justify-between items-center">
                               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">200 Level</span>
                               <span className="text-xs font-black text-slate-900">₦{row.l200}</span>
                            </div>
                            <div className="flex justify-between items-center">
                               <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">300 Level</span>
                               <span className="text-xs font-black text-slate-900">₦{row.l300}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                               <span className="text-[10px] font-black text-[#e62627] uppercase tracking-widest">Final Year</span>
                               <span className="text-xs font-black text-slate-900">₦{row.l400}</span>
                            </div>
                         </div>
                      </div>
                    ))}
                 </div>
              </motion.div>
            )}

            {activeTab === "postgraduate" && (
              <motion.div
                key="postgrad"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-24 text-center"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <AlertCircle className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Postgraduate Fees Pending</h3>
                <p className="text-slate-500 font-semibold max-w-md mx-auto">
                  Postgraduate fee structures are currently being finalized. Please contact the admissions office for temporary guidance.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Additional Financial Details */}
        <div className="mt-32 space-y-20">
          
          {/* Top Row: Payment Structure & Terms */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Payment Structure */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 border-l-8 border-l-[#e62627]"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-[#e62627]">
                  <Wallet className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Payment Structure</h3>
              </div>
              <p className="text-slate-600 font-bold text-sm leading-relaxed mb-8">
                The University encourages full payment of fees on or before first-semester resumption. However, parents & sponsors can pay in two installments:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-xs font-black text-slate-700">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  Minimum of 50% at the start of the session
                </li>
                <li className="flex items-center gap-4 text-xs font-black text-slate-700">
                  <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle className="w-3 h-3" />
                  </div>
                  Balance before the second semester begins
                </li>
              </ul>
            </motion.div>

            {/* Terms & Conditions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 border-l-8 border-l-blue-600"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <FileText className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Terms & Conditions</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "The university will not entertain any refund of fees after payment has been effected for whatever reason.",
                  "Overpayment of fees will be credited into students' accounts and sorted out at graduation if it has not been fully utilized by then.",
                  "Registration for courses is contingent on payment of all prescribed fees within the first three weeks of resumption.",
                  "A Late Registration Fee of ₦200,000.00 will be charged after the 3rd week of the semester.",
                  "All outstanding fees must be paid before the beginning of a new session."
                ].map((term, idx) => (
                  <li key={idx} className="flex gap-4 text-[10px] md:text-xs font-bold text-slate-500 leading-relaxed">
                    <span className="shrink-0 w-5 h-5 bg-slate-50 rounded-full flex items-center justify-center text-[10px] font-black text-slate-400">{String.fromCharCode(97 + idx)}</span>
                    {term}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Middle Row: Notes & Feeding */}
          <div className="grid lg:grid-cols-2 gap-12">
             {/* Note Section */}
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-10 md:p-12 rounded-[3.5rem] shadow-2xl shadow-slate-900/10 text-white border-l-8 border-l-cyan-400"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-14 h-14 bg-cyan-400/10 rounded-2xl flex items-center justify-center text-cyan-400">
                  <ClipboardList className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black italic">Programme Notes</h3>
              </div>
              <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-8">Specific charges not captured in school fees:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Matriculation / Orientation Pack",
                  "Laboratory Manuals",
                  "Laboratory Coats",
                  "Scrubs (Nursing)",
                  "Drawing Kits & Tools",
                  "Code of Conduct Handbook"
                ].map((note, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-[10px] font-black text-slate-300">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    {note}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Feeding Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col justify-center"
            >
              <div className="flex items-center gap-6 mb-6">
                 <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                    <Utensils className="w-7 h-7" />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900">Feeding Notice</h3>
              </div>
              <p className="text-slate-500 font-bold text-sm leading-relaxed">
                The University shall not be responsible for students&apos; feeding. Students are expected to manage their personal catering requirements within the available on-campus facilities.
              </p>
            </motion.div>
          </div>

          {/* Bottom Row: Bank Details */}
          <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-20 -mt-20 blur-3xl" />
             <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
                   <div>
                      <motion.span className="text-[#e62627] font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Official Transactions</motion.span>
                      <h3 className="text-4xl font-black text-slate-900 italic">Bank Account Details</h3>
                   </div>
                   <Building2 className="w-12 h-12 text-slate-200" />
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                   {/* Fidelity Bank */}
                   <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 border-l-4 border-l-[#e62627]">
                      <h4 className="text-xl font-black text-slate-900 mb-6">Fidelity Bank</h4>
                      <div className="space-y-1 mb-8">
                         <p className="text-[10px] font-bold text-slate-400 uppercase">Account Name</p>
                         <p className="text-xs font-black text-slate-800">NBU School Fees & Donor Account</p>
                      </div>
                      <div className="space-y-1 mb-8">
                         <p className="text-[10px] font-bold text-slate-400 uppercase">Account Number</p>
                         <p className="text-2xl font-black text-[#e62627]">5601459692</p>
                      </div>
                      <p className="text-[10px] font-black text-slate-400 italic">For: Law & Computing</p>
                   </div>

                   {/* Zenith Bank */}
                   <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 border-l-4 border-l-blue-600">
                      <h4 className="text-xl font-black text-slate-900 mb-6">Zenith Bank</h4>
                      <div className="space-y-1 mb-8">
                         <p className="text-[10px] font-bold text-slate-400 uppercase">Account Name</p>
                         <p className="text-xs font-black text-slate-800">NBU School Fees & Donor Account</p>
                      </div>
                      <div className="space-y-1 mb-8">
                         <p className="text-[10px] font-bold text-slate-400 uppercase">Account Number</p>
                         <p className="text-2xl font-black text-blue-600">1228497953</p>
                      </div>
                      <p className="text-[10px] font-black text-slate-400 italic">For: Medicine, Nursing, Medical Lab, Mgt & Social Sciences, Engineering</p>
                   </div>
                </div>
             </div>
          </div>

        </div>

        {/* Global Disclaimer */}
        <div className="mt-20 text-center">
            <p className="text-[#e62627] text-[10px] font-black leading-relaxed italic uppercase max-w-2xl mx-auto">
              * All fees are subject to change by the university management without prior notification. Please ensure all payments are verified through official channels.
            </p>
        </div>
      </div>
    </section>
  );
};

export default TuitionFeesTable;
