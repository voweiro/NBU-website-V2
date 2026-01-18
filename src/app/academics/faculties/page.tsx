// pages/faculty.tsx
"use client";
import FacultyCard from "@/components/academics/FacultyCard";
import UndergraduateAdmissionsHero from "@/components/admission/UndergraduateAdmissionsHero";
import tuition from "@/asserts/nbu-pics.png";
import { useRouter } from "next/navigation";
import law from "@/asserts/law.jpg";
import engineering from "@/asserts/engineering.jpg";
import computer from "@/asserts/it-computing.jpg";
import mbbs from "@/asserts/medical.jpg";
import art from "@/asserts/management.jpg";
const faculties = [
  {
    name: "Faculty of Engineering",
    description:
      "Excellence in research, innovation, and practical application.",
    image: engineering.src,
    dean: {
      name: "Dr. Jane Doe",
      title: "Dean of Engineering",
      bio: "Over 20 years in academia and industry. Focused on AI and robotics.",
      image: "/images/Regis.jpg",
    },
  },
  {
    name: "Faculty of Computing and Information Technology",
    description: "Advancing scientific discovery through rigorous research.",
    image: computer.src,
    dean: {
      name: "Dr. Samuel Okoro",
      title: "Dean of Science",
      bio: "Expert in biotechnology and molecular chemistry. Leading scientific innovation.",
      image: "/images/bursar.jpg",
    },
  },

  {
    name: "Faculty of Law",
    description: "Cultivating legal excellence, justice, and ethics.",
    image: law.src,
    dean: {
      name: "Dr. Henry Umeadi",
      title: "Dean of Law",
      bio: "Professor Ruth Ashford has more than 28 years’ experience in Higher Education management within UK University Business Schools – previously as Pro Vice-Chancellor and Dean of the Faculty of Business and Law at Manchester Metropolitan University (MMU) and Executive Dean at University of Chester Business and Management Faculty. She has a wealth of experience in developing and leading large complex Business Schools. As the former Chief Examiner of the Chartered Institute of Marketing (CIM) and CIM Senator, Professor Ashford was involved with the international launch of the CIM Professional undergraduate and postgraduate new syllabus in 90 countries. Prof Ashford is currently a CIM Level Verifier.She was also the prime mover behind the development and launch of the UK National Foundation Degree in Retailing. She is also the former Chair of the Academy of Marketing (AM), which is the international learned society for marketing academics. Professor Ashford was a former Board Member of the Association of Business Schools (now CABS), and working with other stakeholders, she enjoys promoting the voice of diversity within Business Schools nationally",
      image: "/images/vc.jpg",
    },
  },
  {
    name: "College of Basic Medical Sciences",
    description: "Training world-class physicians and medical researchers.",
    image: mbbs.src,
    dean: {
      name: "Dr. Aisha Bello",
      title: "Dean of Medicine",
      bio: "Practicing physician and lecturer with a focus on public health.",
      image: "/images/dvca.jpg",
    },
  },
  {
    name: "Faculty of Management and Social Sciences",
    description: "Building leaders in business, finance, and administration.",
    image: art.src,
    dean: {
      name: "Dr. Kelvin Eze",
      title: "Dean of Management",
      bio: "Business strategist and management consultant with 15+ years experience.",
      image: "/images/dvc.jpeg",
    },
  },
];

export default function FacultyPage() {
  const router = useRouter();
  return (
    <div className="">
      <UndergraduateAdmissionsHero
        backgroundImage={tuition.src}
        mainHeading="Degree Programs"
        subheading="Begin your academic journey with us"
        primaryButtonText="Apply Now"
        primaryButtonAction={() =>
          router.push("https://nbunet.nbu.edu.ng/Account/login")
        }
        secondaryButtonText="Learn More"
        secondaryButtonAction={() => router.push("/academics/programs")}
      />

      <div className="layout grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {faculties.map((faculty, index) => (
          <FacultyCard key={index} faculty={faculty} />
        ))}
      </div>
    </div>
  );
}
