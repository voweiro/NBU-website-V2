"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  src: string;
  heading: string;
  subheading: string;
  primaryButton: { text: string; link: string };
  secondaryButton: { text: string; link: string };
}

const slides: Slide[] = [
  {
    src: "/images/logo2.jpg",
    heading: "Welcome to Our University",
    subheading: "Empowering students for a brighter tomorrow.",
    primaryButton: { text: "Apply Now", link: "/admissions/apply" },
    secondaryButton: { text: "Meet the VC", link: "/about/vc" },
  },
  {
    src: "/images/nbunets.jpg",
    heading: "Discover Your Passion",
    subheading: "Explore limitless academic and research opportunities.",
    primaryButton: { text: "Explore Programs", link: "/academics" },
    secondaryButton: { text: "Read More", link: "/about" },
  },
  {
    src: "/images/Regis.jpg",
    heading: "Thrive With Us",
    subheading: "Join a community of future leaders and innovators.",
    primaryButton: { text: "Join Us", link: "/admissions" },
    secondaryButton: { text: "Campus Life", link: "/campus-life" },
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

const HeroSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage([page + 1, 1]);
    }, 6000);
    return () => clearInterval(interval);
  }, [page]);

  const current = ((page % slides.length) + slides.length) % slides.length;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].heading}
              fill
              className="object-cover object-center"
              priority
            />
            {/* Dark Professional Overlay */}
            <div className="absolute inset-0 bg-black/50 lg:bg-gradient-to-r lg:from-black/80 lg:to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Text Content - Left Aligned */}
      <div className="relative z-10 flex items-center h-full max-w-screen-2xl mx-auto px-6 lg:px-24">
        <div className="max-w-4xl text-left">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tight mb-6">
              {slides[current].heading.split(' ').map((word, i) => (
                <span key={i} className={i === slides[current].heading.split(' ').length - 1 ? "text-[#e62627]" : "text-white"}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-medium mb-10 max-w-2xl leading-relaxed">
              {slides[current].subheading}
            </p>

            <div className="flex flex-wrap gap-5">
              <Link href={slides[current].primaryButton.link}>
                <button className="px-8 py-4 bg-[#e62627] text-white rounded-xl text-base font-black uppercase tracking-wider shadow-2xl hover:bg-[#c41e1e] hover:-translate-y-1 transition-all duration-300">
                  {slides[current].primaryButton.text} →
                </button>
              </Link>
              <Link href={slides[current].secondaryButton.link}>
                <button className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border-2 border-white/30 rounded-xl text-base font-black uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                  {slides[current].secondaryButton.text}
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 left-6 lg:left-24 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setPage([i, i > current ? 1 : -1])}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              i === current ? "w-12 bg-[#e62627]" : "w-6 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
