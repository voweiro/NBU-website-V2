import FacultyHero from "@/components/faculties/FacultyHero";
import ProgramGrid from "@/components/faculties/ProgramGrid";
import ImageContentSection from "@/components/faculties/ImageContentSection";
import { Metadata } from "next";
import heroBg from "@/asserts/law-hero-bg.png";
import overviewImg from "@/asserts/law-overview.png";

export const metadata: Metadata = {
  title: "Faculty of Law | Nigerian British University",
  description: "Advancing legal education through innovation and ethical leadership at the NBU Faculty of Law.",
};

const programs = [
  {
    number: "01.",
    title: "Bachelor of Laws (LL.B)",
    subtitle: "Our LL.B program is designed to provide students with a deep understanding of legal principles, combined with the practical skills needed for a successful legal career.",
    href: "/academics/programs/llb-law",
  },
];

export default function LawFacultyPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32">
      <FacultyHero 
        backgroundImage={heroBg}
        mainTitle="Faculty of"
        highlightTitle="Law"
        description="Advancing legal education through innovation and ethical leadership. We prepare our students to navigate the complexities of the legal world with integrity, critical thinking, and a commitment to justice."
      />

      <ImageContentSection 
        image={overviewImg}
        title="Course Overview"
        content="Law impacts all of our lives, from domestic issues to social injustices, it has a direct influence on our global decision-making and shapes the world around us. Studying law requires students to possess a varied set of skills, which they will build upon as they engage in debate, think analytically and confront challenging perspectives."
        imagePosition="left"
        backgroundColor="bg-[#0f172a]" // Deep navy/slate for a scholarly look
      />

      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight">
            Our <span className="text-[#e62627]">Programs</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#e62627] mt-4" />
        </div>
        <ProgramGrid programs={programs} />
      </div>
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e62627_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
            Begin your journey in <span className="text-[#e62627]">legal excellence.</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">
            Join the advocates and legal scholars of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://nbunet.nbu.edu.ng/Account/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#e62627] text-white rounded-xl text-sm font-black uppercase tracking-widest shadow-xl shadow-red-600/20 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              Apply for Admission
            </a>
            <a 
              href="/admission/undergraduate"
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
            >
              Admission Requirements
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
