import FacultyHero from "@/components/faculties/FacultyHero";
import ProgramGrid from "@/components/faculties/ProgramGrid";
import { Metadata } from "next";
import facultyBg from "@/asserts/management.jpg";

export const metadata: Metadata = {
  title: "Faculty of Management and Social Sciences | Nigerian British University",
  description: "Explore leadership, business, and social excellence at the NBU Faculty of Management and Social Sciences.",
};

const programs = [
  {
    number: "01.",
    title: "Business Administration",
    subtitle: "The Business Administration programme has been designed to give you increased choice, as it provides a generalist route for which you can choose.",
    href: "/academics/programs/business-administration",
  },
  {
    number: "02.",
    title: "Accounting",
    subtitle: "Accounting degrees are career launching qualifications, that prepare you to take a leading place in today's global economy.",
    href: "/academics/programs/accounting",
  },
  {
    number: "03.",
    title: "Economics",
    subtitle: "In this program, you will learn how economists think, how they analyse and solve problems. You will also study other traditional economic theories.",
    href: "/academics/programs/economics",
  },
  {
    number: "04.",
    title: "Political Science and International Relations",
    subtitle: "Political scientists ask questions such as: What causes conflict in societies? Can government policy impact social inequality?",
    href: "/academics/programs/political-science",
  },
  {
    number: "05.",
    title: "Peace and Conflict Resolution",
    subtitle: "This bachelor's programme provides you with in-depth knowledge of Peace and Conflict Resolution as a field.",
    href: "/academics/programs/peace-conflict-resolution",
  },
  {
    number: "06.",
    title: "Mass Communication",
    subtitle: "Uncover the exciting and diverse worlds of journalism, media, and communications. Covering everything from reporting breaking news to writing.",
    href: "/academics/programs/mass-communication",
  },
];

export default function ManagementSocialSciencesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32">
      <FacultyHero 
        backgroundImage={facultyBg}
        mainTitle="Faculty of Management and"
        highlightTitle="Social Sciences"
        description="Uncover the exciting and diverse worlds of Management and Social Sciences at NBU. Our programs are designed to build leaders in business, finance, and social administration through a rigorous and innovation-driven curriculum."
      />
      <ProgramGrid programs={programs} />
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e62627_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
            Ready to lead in the <span className="text-[#e62627]">global economy?</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">
            Join the innovators and decision-makers of tomorrow.
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
