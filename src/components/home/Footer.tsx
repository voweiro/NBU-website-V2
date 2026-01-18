"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,

  FaPhoneAlt,
  FaMapMarkerAlt,
 
} from "react-icons/fa";
import logo from "@/asserts/logo.png";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { name: "About NBU", href: "/about/principal-officers" },
      { name: "Principal Officers", href: "/about/principal-officers" },
      { name: "Programs", href: "/academics/programs" },
      { name: "Admissions", href: "/admission/undergraduate" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Student Portal", href: "https://nbunet.nbu.edu.ng/Account/logins" },
      { name: "E-Library", href: "#" },
      { name: "News & Events", href: "#" },
      { name: "N-bulletin", href: "/nbulletin" },
      { name: "FAQ", href: "/faq" },
    ],
  },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", color: "hover:bg-blue-600" },
  { icon: FaTwitter, href: "#", color: "hover:bg-sky-500" },
  { icon: FaInstagram, href: "#", color: "hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600" },
  { icon: FaLinkedinIn, href: "#", color: "hover:bg-blue-700" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0f172a] text-gray-300 pt-20 overflow-hidden">
      {/* Decorative Gradient Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#e62627] to-transparent opacity-50" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#e62627] rounded-full blur-[160px] opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-600 rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-4">
                <div className="relative p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group-hover:border-[#e62627]/50 transition-colors">
                  <Image
                    src={logo}
                    alt="NBU Logo"
                    width={64}
                    height={64}
                    className="h-12 w-auto lg:h-14"
                  />
                </div>
                
              </div>
            </Link>
            
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Developing Potential We Trust. Providing world-class education 
              driven by innovation, excellence, and global standards in the heart of Nigeria.
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white text-gray-400`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="lg:col-span-2 space-y-6">
              <h3 className="text-white font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link 
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <span className="w-0 h-0.5 bg-[#e62627] transition-all duration-300 group-hover:w-3" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden group">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-[#e62627] rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity" />
              
              <h3 className="text-white font-semibold text-xl mb-2">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-6">Stay updated with the latest news, events, and academic updates from NBU.</p>
              
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#e62627]/50 focus:border-[#e62627] transition-all text-sm"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1.5 bottom-1.5 px-4 bg-[#e62627] text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 text-xs font-semibold"
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info Snippet */}
            <div className="space-y-4 px-2">
              <div className="flex items-start gap-4 text-sm">
                <div className="mt-1 w-8 h-8 rounded-lg bg-[#e62627]/10 flex items-center justify-center text-[#e62627]">
                  <FaMapMarkerAlt size={14} />
                </div>
                <p>Km 10 Port Harcourt/Aba Expressway, Asa, Abia State, Nigeria</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <FaPhoneAlt size={14} />
                </div>
                <p>+234 XXX XXX XXXX</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500">
            © {currentYear} Nigeria British University. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
