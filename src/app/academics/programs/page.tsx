"use client";

import UndergraduateAdmissionsHero from "@/components/admission/UndergraduateAdmissionsHero";
import DegreePrograms from "@/components/academics/programs";
import tuition from "@/asserts/nbu-pics.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="">
      <UndergraduateAdmissionsHero
        backgroundImage={tuition.src}
        mainHeading="Degree Programs"
        subheading="Begin your academic journey with us"
        primaryButtonText="Apply Now"
        primaryButtonAction={() =>
          router.push("https://nbunet.nbu.edu.ng/Account/login")
        }
        // secondaryButtonText="Learn More"
        // secondaryButtonAction={() => router.push("/programs")}
      />
      <DegreePrograms />
    </main>
  );
}
