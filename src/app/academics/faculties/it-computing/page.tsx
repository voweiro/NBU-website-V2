import FacultyHero from "@/components/faculties/FacultyHero";
import ProgramGrid from "@/components/faculties/ProgramGrid";
import { Metadata } from "next";
import facultyBg from "@/asserts/it-computing.jpg";

export const metadata: Metadata = {
  title: "Faculty of IT & Computing | Nigerian British University",
  description: "Advance your technical expertise at the Faculty of Computing and Information Technology.",
};

const programs = [
  {
    number: "01.",
    title: "Computer Science",
    subtitle: "Experience education at the forefront of technology and design future innovations that will become an essential part of modern life.",
    href: "/academics/programs/computer-science",
  },
  {
    number: "02.",
    title: "Cyber Security",
    subtitle: "In this program you will acquire the latest knowledge in the field of cyber security and deal with the architecture, programming.",
    href: "/academics/programs/cyber-security",
  },
  {
    number: "03.",
    title: "Software Engineering",
    subtitle: "This deals with employing systematic engineering approaches to software development. It involves designing, building.",
    href: "/academics/programs/software-engineering",
  },
  {
    number: "04.",
    title: "Information Technology",
    subtitle: "Information technology includes many aspects of computer science, but with more focus on the computer technology needs of people.",
    href: "/academics/programs/information-technology",
  },
  {
    number: "05.",
    title: "Data Science",
    subtitle: "The study of data science affords you the opportunity to extract the various principles of mathematics, artificial intelligence and computer engineering to analyze data.",
    href: "/academics/programs/data-science",
  },
];

export default function ITComputingFacultyPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32">
      <FacultyHero 
        backgroundImage={facultyBg}
        mainTitle="Faculty of Computing and"
        highlightTitle="Information Technology"
        description="Experience education at the forefront of technology and design future innovations which will become an essential part of modern life. From smartphone applications to global software systems and programs, computer science is a diverse industry which is constantly expanding with a persistent need to stay ahead of the competition."
      />
      <ProgramGrid programs={programs} />
      
      {/* Optional CTA Section */}
      <section className="py-20 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e62627_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
            Ready to shape the <span className="text-[#e62627]">digital future?</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">
            Join the next generation of tech leaders at NBU.
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
