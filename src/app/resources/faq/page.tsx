"use client";
import FAQSection from "@/components/faq/FAQSection";
import UndergraduateAdmissionsHero from "@/components/admission/UndergraduateAdmissionsHero";
import tuition from "@/asserts/nbu-pics.png";
export default function FAQPage() {
  return (
    <main className="w-full">
      <UndergraduateAdmissionsHero
        backgroundImage={tuition.src}
        mainHeading={"Frequently Asked\nQuestions"}
        subheading="Find answers to common questions about our programs, admissions, and campus life."
        altText="FAQ Background"
      />
      <FAQSection />
    </main>
  );
}
