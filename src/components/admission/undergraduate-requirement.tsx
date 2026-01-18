"use client";

import React, { useState } from "react";
import { 
  ChevronDown, 
  GraduationCap, 
  Cpu, 
  Briefcase, 
  Stethoscope, 
  Scale,
  CheckCircle2,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SchoolsRequirements = () => {
  const [openSection, setOpenSection] = useState<string | null>("engineering");

  const schools = [
    {
      id: "engineering",
      title: "Faculty of Engineering",
      icon: Cpu,
      requirements: [
        "Bachelor's degree from an accredited institution",
        "Minimum GPA of 3.0 on a 4.0 scale",
        "Official transcripts from all institutions attended",
        "Two letters of recommendation",
        "Personal statement (500-750 words)",
        "Resume or curriculum vitae"
      ],
      additional: [
        "Teaching certification (for education programs)",
        "Relevant work experience preferred",
        "Interview may be required for select programs"
      ]
    },
    {
      id: "business",
      title: "Faculty of Business and Management Sciences",
      icon: Briefcase,
      requirements: [
        "Bachelor's degree from an accredited institution",
        "Minimum GPA of 3.25 on a 4.0 scale",
        "GMAT or GRE scores (minimum 500 GMAT or 300 GRE)",
        "Official transcripts from all institutions attended",
        "Three letters of recommendation",
        "Personal statement and career goals essay",
        "Professional resume"
      ],
      additional: [
        "2+ years of professional work experience",
        "Leadership experience",
        "Quantitative coursework background"
      ]
    },
    {
      id: "computing",
      title: "Faculty of Computing And Information Technology",
      icon: Cpu,
      requirements: [
        "Bachelor's degree in relevant field from accredited institution",
        "Minimum GPA of 3.0 on a 4.0 scale",
        "GRE scores required (minimum 300 combined)",
        "Official transcripts from all institutions attended",
        "Three letters of recommendation from sources",
        "Statement of purpose",
        "Resume highlighting technical experience"
      ],
      prerequisites: [
        "Mathematics through Calculus II",
        "Statistics or probability course",
        "Programming experience (language varies by program)",
        "Laboratory science courses"
      ]
    },
    {
      id: "health",
      title: "College of Health Sciences",
      icon: Stethoscope,
      requirements: [
        "Bachelor's degree with strong science background",
        "Minimum GPA of 3.5 on a 4.0 scale",
        "MCAT scores (500) or GRE scores (310)",
        "Official transcripts from all institutions attended",
        "Three letters of recommendation (science faculty)",
        "Personal statement",
        "Research experience strongly preferred"
      ],
      coursework: [
        "General Chemistry with lab (2 semesters)",
        "Organic Chemistry with lab (2 semesters)",
        "Biology with lab (2 semesters)",
        "Physics with lab (2 semesters)",
        "Biochemistry",
        "Mathematics through Calculus"
      ]
    },
    {
      id: "law",
      title: "Faculty of Law",
      icon: Scale,
      requirements: [
        "Bachelor's degree from an accredited institution",
        "Minimum GPA of 3.0 on a 4.0 scale",
        "LSAT scores (JD) or GRE scores (Graduate)",
        "Official transcripts from all institutions attended",
        "Two to three letters of recommendation",
        "Personal statement",
        "Resume highlighting relevant experience"
      ],
      additional: [
        "Work experience in law, or security fields",
        "Volunteer experience in community service",
        "Leadership positions",
        "Strong writing and analytical skills"
      ]
    },
  ];

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4 block text-[#e62627]"
          >
            Entry Requirements
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
          >
            School Specific <span className="text-slate-400">Admissions</span>
          </motion.h2>
        </div>

        <div className="space-y-4">
          {schools.map((school, idx) => (
            <motion.div
              key={school.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-[2rem] border transition-all duration-300 ${
                openSection === school.id 
                  ? "bg-slate-50 border-slate-200 shadow-xl shadow-slate-200/50" 
                  : "bg-white border-slate-100 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => toggleSection(school.id)}
                className="w-full px-8 py-6 flex items-center justify-between group"
              >
                <div className="flex items-center gap-6 text-left">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    openSection === school.id ? "bg-[#e62627] text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                  }`}>
                    <school.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-black transition-colors ${
                      openSection === school.id ? "text-slate-900" : "text-slate-600"
                    }`}>
                      {school.title}
                    </h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mt-1">Admission Guide</p>
                  </div>
                </div>
                <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-500 ${
                  openSection === school.id ? "rotate-180 text-[#e62627]" : ""
                }`} />
              </button>

              <AnimatePresence>
                {openSection === school.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "circOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2">
                       <div className="grid md:grid-cols-2 gap-10">
                          {/* Main Requirements */}
                          <div>
                            <div className="flex items-center gap-2 mb-6">
                               <CheckCircle2 className="w-4 h-4 text-[#e62627]" />
                               <h4 className="text-sm font-black uppercase tracking-widest text-[#e62627]">Core Requirements</h4>
                            </div>
                            <ul className="space-y-4">
                              {school.requirements.map((req, i) => (
                                <li key={i} className="flex gap-4 group/item">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-2.5 group-hover/item:bg-[#e62627] transition-colors flex-shrink-0" />
                                  <span className="text-slate-600 font-bold text-sm leading-relaxed">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Secondary Sections */}
                          <div className="p-8 bg-white rounded-3xl border border-slate-100">
                             {(school.additional || school.prerequisites || school.coursework) && (
                               <>
                                 <div className="flex items-center gap-2 mb-6">
                                    <Info className="w-4 h-4 text-blue-600" />
                                    <h4 className="text-sm font-black uppercase tracking-widest text-slate-900">
                                      {school.additional ? "Additional Info" : school.prerequisites ? "Prerequisites" : "Coursework"}
                                    </h4>
                                 </div>
                                 <ul className="space-y-4">
                                   {(school.additional || school.prerequisites || school.coursework)?.map((item, i) => (
                                     <li key={i} className="flex gap-4">
                                       <span className="text-xs font-black text-slate-400">0{i+1}</span>
                                       <span className="text-slate-500 font-semibold text-sm leading-relaxed">{item}</span>
                                     </li>
                                   ))}
                                 </ul>
                               </>
                             )}
                          </div>
                       </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolsRequirements;
