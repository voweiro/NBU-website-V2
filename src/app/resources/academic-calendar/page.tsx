"use client";

import React from "react";
import UndergraduateAdmissionsHero from "@/components/admission/UndergraduateAdmissionsHero";
import AcademicCalendar from "@/components/resources/AcademicCalendar";
import calendarImg from "@/asserts/nigerian-british-school-2-560x560.png";

export default function AcademicCalendarPage() {
  return (
    <main className="w-full">
      <UndergraduateAdmissionsHero
        backgroundImage={calendarImg.src}
        mainHeading="Academic Calendar"
        subheading="Plan your academic year with our detailed schedule of events and milestones."
        altText="Academic Calendar Background"
      />
      <AcademicCalendar />
    </main>
  );
}
