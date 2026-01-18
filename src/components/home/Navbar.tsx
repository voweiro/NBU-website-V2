"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import logo from "@/asserts/logo.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const subMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsSearchOpen(false);
    setOpenDropdown("");
    setActiveSubMenu(null);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileOpen(false);
        setIsSearchOpen(false);
        setOpenDropdown("");
        setActiveSubMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileOpen((prev) => !prev);
    setIsSearchOpen(false);
    setOpenDropdown("");
    setActiveSubMenu(null);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    setIsMobileOpen(false);
    setOpenDropdown("");
    setActiveSubMenu(null);
  };


  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setIsSearchOpen(false);
    setOpenDropdown("");
    setActiveSubMenu(null);
  };

  // Desktop hover handlers with delay
  const handleMouseEnter = (menu: string): void => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown("");
      setActiveSubMenu(null);
    }, 150);
  };

  const handleSubMouseEnter = (item: string): void => {
    if (subMenuTimeoutRef.current) clearTimeout(subMenuTimeoutRef.current);
    setActiveSubMenu(item);
  };

  const handleSubMouseLeave = () => {
    subMenuTimeoutRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 100);
  };

  const navigationItems: Record<string, { href: string; label: string; subItems?: { href: string; label: string }[] }[]> = {
    about: [
      { href: "/about/principal-officers", label: "Principal Officers" },
      { href: "/about/history", label: "History" },
      { href: "/about/structure", label: "Our Structure" },
    ],
    academics: [
      { 
        href: "/academics/faculties", 
        label: "Faculties",
        subItems: [
          { href: "/academics/faculties/arts-sciences", label: "Arts & Sciences" },
          { href: "/academics/faculties/it-computing", label: "IT & Computing" },
          { href: "/academics/faculties/engineering", label: "Engineering" },
          { href: "/academics/faculties/business-entrepreneurship", label: "Business & Entrepreneurship" },
          { href: "/academics/faculties/law", label: "Law" },
        ]
      },
    ],
    admissions: [
      { href: "/admission/undergraduate", label: "Undergraduate" },
      { href: "/admission/postgraduate", label: "Postgraduate" },
      { href: "/admission/tuition-fee", label: "Tuition Fee" },
    ],
    resources: [
      { href: "/resources/academic-calendar", label: "Academic Calendar" },
      { href: "/resources/faq", label: "FAQ" },
      { href: "/resources/nbulletin", label: "N-Bulletin" },
      { href: "/resources/nbu-statistics", label: "NBU Statistics" },
      { href: "/library", label: "Library" },
    ],
  };

  const isActiveLink = (href: string): boolean => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  const isActiveDropdown = (key: string): boolean => {
    return (
      key in navigationItems &&
      navigationItems[key].some((item) =>
        isActiveLink(item.href) || (item.subItems && item.subItems.some((sub) => isActiveLink(sub.href)))
      )
    );
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] lg:w-[80%] z-50 rounded-[2rem] border border-slate-100 py-3 bg-white/95 backdrop-blur-md shadow-xl"
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center relative">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group z-10 shrink-0">
            <div className="relative scale-90 md:scale-100">
              <div className="absolute -inset-2 bg-red-600/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <Image
                src={logo}
                alt="NBU Logo"
                width={100}
                height={100}
                className="h-20 w-auto lg:h-22 relative"
                priority
              />
            </div>
          </Link>

          {/* Centered Desktop Navigation */}
          <div className="hidden xl:flex absolute left-1/2 -translate-x-1/2 items-center gap-2">
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-slate-900/5 drop-shadow-sm">
              <Link
                href="/"
                className={`flex items-center px-4 py-2 rounded-xl text-[15px] font-bold transition-all duration-200 relative group truncate ${
                  isActiveLink("/") 
                    ? "text-[#e62627]" 
                    : "text-slate-700 hover:text-slate-950"
                }`}
              >
                Home
                {isActiveLink("/") && (
                  <motion.span layoutId="activeNav" className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#e62627]" />
                )}
              </Link>

              {Object.entries(navigationItems).map(([key, items]) => (
                <div
                  key={key}
                  className="relative group/nav"
                  onMouseEnter={() => handleMouseEnter(key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`flex items-center px-4 py-2 rounded-xl text-[15px] font-bold transition-all duration-200 capitalize relative ${
                      isActiveDropdown(key) 
                        ? "text-[#e62627]" 
                        : "text-slate-700 hover:text-slate-950"
                    }`}
                  >
                    {key}
                    <ChevronDownIcon
                      className="h-3 w-3 ml-1.5 transition-transform duration-300 group-hover/nav:rotate-180"
                    />
                    {isActiveDropdown(key) && (
                      <motion.span layoutId="activeNav" className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#e62627]" />
                    )}
                  </button>

                  <AnimatePresence>
                    {openDropdown === key && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 p-2 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 backdrop-blur-sm z-50 overflow-visible"
                      >
                        {items.map((item, idx) => (
                          <div 
                            key={idx} 
                            className="relative"
                            onMouseEnter={() => item.subItems && handleSubMouseEnter(item.label)}
                            onMouseLeave={handleSubMouseLeave}
                          >
                            <Link
                              href={item.href}
                              className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${
                                isActiveLink(item.href) 
                                  ? "bg-red-50 text-[#e62627] shadow-sm" 
                                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                              }`}
                              onClick={() => {
                                setOpenDropdown("");
                                setActiveSubMenu(null);
                              }}
                            >
                              <div className="flex items-center">
                                <span className={`w-1 h-1 rounded-full mr-3 transition-all ${isActiveLink(item.href) ? 'bg-[#e62627] scale-150' : 'bg-slate-300 group-hover:bg-slate-400'}`} />
                                {item.label}
                              </div>
                              {item.subItems && (
                                <ChevronRightIcon className="h-3 w-3 text-slate-400" />
                              )}
                            </Link>

                            <AnimatePresence>
                              {activeSubMenu === item.label && item.subItems && (
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -10 }}
                                  className="absolute left-full top-0 ml-2 w-72 p-2 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-100 backdrop-blur-sm z-50"
                                >
                                  {item.subItems.map((sub: any, sIdx: number) => (
                                    <Link
                                      key={sIdx}
                                      href={sub.href}
                                      className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-150 ${
                                        isActiveLink(sub.href) 
                                          ? "bg-red-50 text-[#e62627] shadow-sm" 
                                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                                      }`}
                                      onClick={() => {
                                        setOpenDropdown("");
                                        setActiveSubMenu(null);
                                      }}
                                    >
                                      <span className={`w-1 h-1 rounded-full mr-3 transition-all ${isActiveLink(sub.href) ? 'bg-[#e62627] scale-150' : 'bg-slate-300 group-hover:bg-slate-400'}`} />
                                      {sub.label}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                href="/campus-life"
                className={`flex items-center px-4 py-2 rounded-xl text-[15px] font-bold transition-all duration-200 relative whitespace-nowrap ${
                  isActiveLink("/campus-life") 
                    ? "text-[#e62627]" 
                    : "text-slate-700 hover:text-slate-950"
                }`}
              >
                Campus Life
                {isActiveLink("/campus-life") && (
                  <motion.span layoutId="activeNav" className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#e62627]" />
                )}
              </Link>

              <Link
                href="/contact"
                className={`flex items-center px-4 py-2 rounded-xl text-[15px] font-bold transition-all duration-200 relative whitespace-nowrap ${
                  isActiveLink("/contact") 
                    ? "text-[#e62627]" 
                    : "text-slate-700 hover:text-slate-950"
                }`}
              >
                Contact
                {isActiveLink("/contact") && (
                  <motion.span layoutId="activeNav" className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#e62627]" />
                )}
              </Link>
            </div>
          </div>

          {/* Right Section: Search & CTA */}
          <div className="flex items-center gap-4 z-10">
            <button
              onClick={toggleSearch}
              className="hidden md:flex p-2.5 rounded-xl transition-all duration-300 hover:bg-slate-100 text-slate-600"
              aria-label="Search"
            >
              <MagnifyingGlassIcon className="h-5 w-5 stroke-[2.5px]" />
            </button>

            <Link
              href="https://nbunet.nbu.edu.ng/Account/login"
              className="px-6 py-3 bg-[#e62627] text-white rounded-xl text-sm font-black uppercase tracking-wider shadow-[0_10px_20px_-5px_rgba(230,38,39,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(230,38,39,0.4)] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap hidden sm:block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="p-2.5 rounded-xl xl:hidden transition-all duration-300 bg-slate-100 text-slate-900 shadow-sm"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6 stroke-2" />}
            </button>
          </div>
        </div>
      </div>

      {/* Modern Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 py-4 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-2xl"
          >
            <div className="max-w-3xl mx-auto flex items-center gap-4">
              <MagnifyingGlassIcon className="h-6 w-6 text-slate-400" />
              <input
                type="text"
                placeholder="Find courses, events, or resources..."
                className="w-full bg-transparent border-none text-xl font-medium focus:ring-0 placeholder:text-slate-300"
                autoFocus
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-900"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay with Backdrop */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[55] xl:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-[320px] bg-slate-900 z-[60] xl:hidden flex flex-col shadow-2xl"
            >
              {/* Sidebar Header */}
              <div className="flex justify-end p-6">
                 <button 
                    onClick={closeMobileMenu}
                    className="p-2 text-white/50 hover:text-white transition-colors"
                 >
                    <XMarkIcon className="h-7 w-7" />
                 </button>
              </div>

              {/* Sidebar Content */}
              <div className="flex-1 overflow-y-auto px-4 pb-12">
                 <div className="space-y-1">
                    <Link
                      href="/"
                      onClick={closeMobileMenu}
                      className={`block p-4 rounded-xl text-base font-bold transition-all ${
                        isActiveLink("/") ? "text-[#e62627]" : "text-white"
                      }`}
                    >
                      Home
                    </Link>

                    {/* Navigation Groups */}
                    {Object.entries(navigationItems).map(([key, items]) => {
                      const isOpen = openDropdown === key;
                      const isActive = isActiveDropdown(key);
                      
                      return (
                        <div key={key} className="space-y-1">
                          <button
                            onClick={() => setOpenDropdown(isOpen ? "" : key)}
                            className={`w-full flex items-center justify-between p-4 rounded-xl text-base font-bold transition-all capitalize ${
                              isOpen ? "bg-[#e62627] text-white" : isActive ? "text-[#e62627]" : "text-white"
                            }`}
                          >
                            <span>{key}</span>
                            <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white/20">
                               <span className="text-xs leading-none">{isOpen ? "−" : "+"}</span>
                            </div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-slate-800/50 rounded-xl mt-1"
                              >
                                {items.map((item, idx) => (
                                  <div key={idx} className="border-b border-white/5 last:border-none">
                                    <Link
                                      href={item.href}
                                      onClick={closeMobileMenu}
                                      className={`flex items-center justify-between p-4 text-sm font-semibold transition-all ${
                                        isActiveLink(item.href) ? "text-[#e62627]" : "text-white/70"
                                      }`}
                                    >
                                      <span>{item.label}</span>
                                    </Link>
                                    
                                    {item.subItems && (
                                      <div className="bg-slate-900/50 py-2 space-y-1">
                                        {item.subItems.map((sub, sIdx) => (
                                          <Link
                                            key={sIdx}
                                            href={sub.href}
                                            onClick={closeMobileMenu}
                                            className={`block px-8 py-2 text-xs font-medium transition-all ${
                                              isActiveLink(sub.href) ? "text-[#e62627]" : "text-white/40"
                                            }`}
                                          >
                                            {sub.label}
                                          </Link>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}

                    <Link
                      href="/campus-life"
                      onClick={closeMobileMenu}
                      className={`block p-4 rounded-xl text-base font-bold transition-all ${
                        isActiveLink("/campus-life") ? "text-[#e62627]" : "text-white"
                      }`}
                    >
                      Campus Life
                    </Link>

                    <Link
                      href="/contact"
                      onClick={closeMobileMenu}
                      className={`block p-4 rounded-xl text-base font-bold transition-all ${
                        isActiveLink("/contact") ? "text-[#e62627]" : "text-white"
                      }`}
                    >
                      Contact
                    </Link>
                 </div>

                 {/* CTA in Sidebar */}
                 <div className="mt-12 pt-12 border-t border-white/10">
                    <Link
                      href="https://nbunet.nbu.edu.ng/Account/login"
                      target="_blank"
                      className="block w-full py-4 bg-[#e62627] text-white rounded-xl text-center text-xs font-black uppercase tracking-widest shadow-lg shadow-red-600/20"
                      onClick={closeMobileMenu}
                    >
                      Apply Now
                    </Link>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
