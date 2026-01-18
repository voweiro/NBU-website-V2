"use client";

import React from "react";
import UndergraduateAdmissionsHero from "@/components/admission/UndergraduateAdmissionsHero";
import StatisticsSection from "@/components/resources/StatisticsSection";
import statsImg from "@/asserts/logo2.jpg"; // Using a professional image

export default function StatisticsPage() {
  return (
    <main className="w-full">
      <UndergraduateAdmissionsHero
        backgroundImage={statsImg.src}
        mainHeading={"Facts &\nFigures"}
        subheading="Transparency, growth, and excellence. Explore the data behind Nigerian British University’s journey."
        altText="University Statistics Background"
      />
      <StatisticsSection />
    </main>
  );
}
