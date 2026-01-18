"use client";
import TuitionFeesTable from "@/components/admission/TuitionFeesTable";
import UndergraduateAdmissionsHero from "@/components/admission/UndergraduateAdmissionsHero";
import tuition from "@/asserts/nbu-pics.png";
export default function Tuition() {
  return (
    <>
      <main className="w-full ">
        <UndergraduateAdmissionsHero
          backgroundImage={tuition.src}
          mainHeading="Tuition Fees"
          subheading="Begin your academic journey with us"
          primaryButtonText="Apply Now"
          primaryButtonAction={() => (window.location.href = "/apply")}
          secondaryButtonText="Learn More"
          secondaryButtonAction={() => (window.location.href = "/programs")}
        />
        <TuitionFeesTable />
      </main>
    </>
  );
}
