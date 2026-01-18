"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Heart } from "lucide-react";

const ContactDetails = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Our Campus",
      value: "Nigerian British University,\nKm 10, Port Harcourt - Aba Expressway,\nRivers State, Nigeria.",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+234 (0) 800 000 0000\n+234 (0) 700 000 0000",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "admissions@nbu.edu.ng\nenquiries@nbu.edu.ng",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50"
    },
    {
      icon: Clock,
      label: "Visit Hours",
      value: "Monday - Friday: 8am - 5pm\nSaturday: By Appointment",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-12">
            <div>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="font-black uppercase tracking-[0.3em] text-[10px] text-[#e62627] mb-4 block"
              >
                Reach Out Any Time
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-black text-slate-900 leading-tight"
              >
                Let&apos;s Start a <span className="text-slate-400">Conversation</span>
              </motion.h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-8 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-xl transition-all duration-500"
                >
                  <div className={`w-12 h-12 ${info.bgColor} ${info.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">{info.label}</h4>
                  <p className="text-sm font-bold text-slate-900 whitespace-pre-line leading-relaxed">
                    {info.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative lg:h-[700px] rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200"
          >
            {/* Map Placeholder or High-quality Image */}
            <div className="absolute inset-0 bg-slate-200">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                     <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-4 animate-bounce" />
                     <p className="text-slate-500 font-black uppercase text-xs tracking-widest">Interactive Map Loading...</p>
                  </div>
               </div>
            </div>
            
            {/* Overlay Branding */}
            <div className="absolute bottom-10 left-10 right-10 p-10 bg-slate-900 rounded-[3rem] text-white overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#e62627] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity" />
               <div className="relative z-10">
                  <Heart className="w-8 h-8 text-[#e62627] mb-6" />
                  <h3 className="text-2xl font-black mb-4">Welcome to NBU</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    Visit our state-of-the-art campus in ASA, Rivers State. Our admissions officers are always ready to welcome you.
                  </p>
               </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
