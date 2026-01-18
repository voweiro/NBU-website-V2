"use client";

import UndergraduateAdmissionsHero from "@/components/admission/UndergraduateAdmissionsHero";
import SchoolsRequirements from "@/components/admission/undergraduate-requirement";
import under from "@/asserts/nigerian-british-school-2-560x560.png";
import { useRouter } from "next/navigation";

export default function Undergraduate() {
  const router = useRouter();

  return (
    <>
      <main className="w-full ">
        <UndergraduateAdmissionsHero
          backgroundImage={under.src}
          mainHeading="Undergraduate Admissions"
          subheading="Begin your academic journey with us"
          primaryButtonText="Apply Now"
          primaryButtonAction={() => router.push("/apply")}
          secondaryButtonText="Learn More"
          secondaryButtonAction={() => router.push("/programs")}
        />
        <SchoolsRequirements />
      </main>
    </>
  );
}
