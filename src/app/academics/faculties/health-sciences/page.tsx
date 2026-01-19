import FacultyHero from "@/components/faculties/FacultyHero";
import ProgramGrid from "@/components/faculties/ProgramGrid";
import { Metadata } from "next";
import facultyBg from "@/asserts/medical.jpg";

export const metadata: Metadata = {
  title: "College of Health Sciences | Nigerian British University",
  description: "Shaping the future of healthcare at the NBU College of Health Sciences.",
};

const programs = [
  {
    number: "01.",
    title: "Medicine & Surgery",
    subtitle: "The program integrates modern medical technologies with evidence-based practices to ensure our graduates are well-prepared to address complex health challenges both locally and globally.",
    href: "/academics/programs/medicine-surgery",
  },
  {
    number: "02.",
    title: "Nursing Science",
    subtitle: "NBU's Nursing Science program aims to train compassionate, skilled, and knowledgeable nursing professionals. With a focus on patient-centered care, students are immersed in clinical training that emphasizes critical thinking, leadership, and effective communication.",
    href: "/academics/programs/nursing-science",
  },
  {
    number: "03.",
    title: "Medical Laboratory Science",
    subtitle: "The program blends theoretical knowledge with practical laboratory experience, allowing students to master a wide range of laboratory techniques.",
    href: "/academics/programs/medical-laboratory-science",
  },
];

export default function HealthSciencesCollegePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32">
      <FacultyHero 
        backgroundImage={facultyBg}
        mainTitle="College of"
        highlightTitle="Health Sciences"
        description="At NBU's College of Health Sciences, we are committed to shaping the future of healthcare by providing exceptional education and research opportunities. Our programs are designed to equip students with the knowledge, clinical skills, and ethical foundation necessary to thrive in diverse healthcare environments."
      />
      <ProgramGrid programs={programs} />
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e62627_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
            Begin your journey in <span className="text-[#e62627]">medical excellence.</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">
            Join the healers and innovators of tomorrow.
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
