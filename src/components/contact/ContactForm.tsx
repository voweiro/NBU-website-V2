"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1000px] bg-white -z-10 skew-y-3 origin-top-left" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-12 md:p-16 bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100"
            >
               <div className="mb-12">
                  <h3 className="text-3xl font-black text-slate-900 mb-4 italic">Send a Message</h3>
                  <p className="text-slate-500 font-bold text-sm tracking-tight leading-relaxed">
                     We&apos;re here to help you guide through every step of your university journey. From admissions to graduation, NBU is with you.
                  </p>
               </div>

               <form className="space-y-6">
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                     <div className="relative group">
                       <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-[#e62627] transition-colors" />
                       <input 
                         type="text" 
                         className="w-full pl-16 pr-8 py-5 bg-slate-50 border-2 border-transparent focus:border-[#e62627]/20 focus:bg-white rounded-2xl outline-none transition-all font-bold text-slate-900"
                         placeholder="John Doe"
                       />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                     <div className="relative group">
                       <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-[#e62627] transition-colors" />
                       <input 
                         type="email" 
                         className="w-full pl-16 pr-8 py-5 bg-slate-50 border-2 border-transparent focus:border-[#e62627]/20 focus:bg-white rounded-2xl outline-none transition-all font-bold text-slate-900"
                         placeholder="john@example.com"
                       />
                     </div>
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Your Message</label>
                   <div className="relative group">
                     <MessageSquare className="absolute left-6 top-7 w-5 h-5 text-slate-300 group-focus-within:text-[#e62627] transition-colors" />
                     <textarea 
                       className="w-full pl-16 pr-8 py-6 bg-slate-50 border-2 border-transparent focus:border-[#e62627]/20 focus:bg-white rounded-[2rem] outline-none transition-all font-bold text-slate-900 h-48 resize-none"
                       placeholder="How can we help you?"
                     ></textarea>
                   </div>
                 </div>

                 <button className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-[#e62627] transition-all flex items-center justify-center gap-4 group">
                   <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                   Send Message
                 </button>
               </form>
            </motion.div>
          </div>

          <div className="lg:pl-12">
             <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="space-y-12"
             >
                <div className="p-10 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden group">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#e62627] rounded-full blur-[60px] opacity-20" />
                   <h3 className="text-xl font-black mb-4 tracking-widest uppercase">Response Time</h3>
                   <p className="text-white/60 text-sm font-medium leading-relaxed">
                      Our support team typically responds to all inquiries within 24 business hours. For urgent matters, please use the live chat or call us directly.
                   </p>
                </div>

                <div className="space-y-8">
                   <div className="flex gap-6">
                      <div className="w-12 h-12 bg-[#e62627]/10 rounded-2xl flex items-center justify-center shrink-0">
                         <span className="text-[#e62627] font-black">01</span>
                      </div>
                      <div>
                         <h4 className="text-lg font-black text-slate-900 mb-2">Academic Enquiries</h4>
                         <p className="text-slate-500 text-sm font-bold">Contact our academic registrar for course information.</p>
                      </div>
                   </div>
                   <div className="flex gap-6">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0">
                         <span className="text-blue-600 font-black">02</span>
                      </div>
                      <div>
                         <h4 className="text-lg font-black text-slate-900 mb-2">Global Partnerships</h4>
                         <p className="text-slate-500 text-sm font-bold">Interested in collaborating with NBU? Reach out to our international office.</p>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
