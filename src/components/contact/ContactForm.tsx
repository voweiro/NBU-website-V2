"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, ArrowRight } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden relative">
      {/* Decorative text background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none flex items-center justify-center -z-10">
         <h2 className="text-[20vw] font-black text-slate-900 leading-none">CONNECT</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          <div className="lg:sticky lg:top-32">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-black uppercase tracking-[0.3em] text-[10px] text-[#e62627] mb-4 block"
            >
              Send us a Message
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8"
            >
              Have a Specific <span className="text-slate-400">Inquiry?</span>
            </motion.h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed mb-12 max-w-lg">
              Fill out the form below and our team will get back to you within 24 hours. We're committed to providing you with the best support.
            </p>

            <div className="space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#e62627]" />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-widest">General Enquiries</span>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-widest">Admissions Support</span>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-600" />
                  <span className="text-xs font-black text-slate-900 uppercase tracking-widest">IT & Technical Help</span>
               </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-10 md:p-20 rounded-[4rem] shadow-2xl shadow-slate-200 border border-slate-100"
          >
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
               <div className="space-y-8">
                  <div className="relative group">
                     <User className="absolute left-0 top-4 w-5 h-5 text-slate-300 group-focus-within:text-[#e62627] transition-colors" />
                     <input 
                        type="text" 
                        placeholder="Full Name"
                        className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-slate-100 focus:border-[#e62627] text-slate-900 font-bold placeholder:text-slate-300 outline-none transition-all"
                     />
                  </div>
                  
                  <div className="relative group">
                     <Mail className="absolute left-0 top-4 w-5 h-5 text-slate-300 group-focus-within:text-[#e62627] transition-colors" />
                     <input 
                        type="email" 
                        placeholder="Email Address"
                        className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-slate-100 focus:border-[#e62627] text-slate-900 font-bold placeholder:text-slate-300 outline-none transition-all"
                     />
                  </div>

                  <div className="relative group">
                     <MessageSquare className="absolute left-0 top-4 w-5 h-5 text-slate-300 group-focus-within:text-[#e62627] transition-colors" />
                     <textarea 
                        rows={5}
                        placeholder="How can we help?"
                        className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-slate-100 focus:border-[#e62627] text-slate-900 font-bold placeholder:text-slate-300 outline-none transition-all resize-none"
                     ></textarea>
                  </div>
               </div>

               <button className="group w-full py-6 bg-slate-900 text-white rounded-3xl font-black uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center gap-4 hover:bg-[#e62627] hover:shadow-2xl hover:shadow-red-600/20 transition-all active:scale-95">
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
               </button>

               <p className="text-center text-[10px] font-black text-slate-400 uppercase leading-relaxed">
                  By clicking send, you agree to our <span className="text-slate-900 underline underline-offset-4 cursor-pointer">privacy policy</span> regarding data handling.
               </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
