import FacultyHero from "@/components/faculties/FacultyHero";
import ProgramGrid from "@/components/faculties/ProgramGrid";
import { Metadata } from "next";
import facultyBg from "@/asserts/engineering.jpg";

export const metadata: Metadata = {
  title: "Faculty of Engineering | Nigerian British University",
  description: "Innovation-driven engineering programmes designed and supervised by renowned Engineers in practice at NBU.",
};

const programs = [
  {
    number: "01.",
    title: "Electrical / Electronics Engineering",
    subtitle: "This course is designed to expose students to how to install, repair, and manage existing and modern innovations while conducting intensive studies that focus on inventing innovations with the guidance of world-class engineers.",
    href: "/academics/programs/electrical-electronics-engineering",
  },
  {
    number: "02.",
    title: "Mechatronics Engineering",
    subtitle: "This programme is a hybridization of mechanical and electronics engineering. It exposes one to an in-depth knowledge of how mechanical components are connected and controlled by electronic circuits.",
    href: "/academics/programs/mechatronics-engineering",
  },
  {
    number: "03.",
    title: "Computer Engineering",
    subtitle: "This deals with all the rudiments guiding the concept and practice of how hardware and software are combined to produce the computer we use. At the time of graduation, students are expected to have acquired practical knowledge in Networks, Software, Hardware, Databases, etc.",
    href: "/academics/programs/computer-engineering",
  },
  {
    number: "04.",
    title: "Information & Communications Engineering",
    subtitle: "Information & Communication Engineering focuses on designing, building, and maintaining communication infrastructure in addition to providing platforms for interconnects.",
    href: "/academics/programs/information-communications-engineering",
  },
];

export default function EngineeringFacultyPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32">
      <FacultyHero 
        backgroundImage={facultyBg}
        mainTitle="Faculty of"
        highlightTitle="Engineering"
        description="Key into our innovation-driven engineering programmes designed and supervised by renowned Engineers in practice. Our curriculum focuses on practical application and industry-standard skills to prepare you for a global engineering career."
      />
      <ProgramGrid programs={programs} />
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e62627_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
            Ready to build the <span className="text-[#e62627]">world of tomorrow?</span>
          </h2>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mb-10">
            Join the innovators and engineering leaders at NBU.
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
