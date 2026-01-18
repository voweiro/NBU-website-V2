"use client";
import SchoolBulletin from "@/components/bulletin/SchoolBulletin";
import UndergraduateAdmissionsHero from "@/components/admission/UndergraduateAdmissionsHero";
import tuition from "@/asserts/nbu-pics.png";
export default function BulletinPage() {
  return (
    <main className="w-full">
      <UndergraduateAdmissionsHero
        backgroundImage={tuition.src}
        mainHeading={"University\nBulletin"}
        subheading="Stay updated with the latest news, academic announcements, and student life highlights from Nigerian British University."
        altText="University Bulletin Background"
      />
      <SchoolBulletin />
    </main>
  );
}
