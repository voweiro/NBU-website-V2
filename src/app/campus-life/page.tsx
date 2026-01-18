"use client";

import React from "react";
import CampusHero from "@/components/campus/CampusHero";
import ExperienceGrid from "@/components/campus/ExperienceGrid";
import heroImg from "@/asserts/nigerian-british-school-2-560x560.png";

export default function CampusLifePage() {
  return (
    <main className="w-full">
      <CampusHero
        backgroundImage={heroImg.src}
        title={"Experience Life\nat NBU"}
        subtitle="Discover a vibrant community where academic excellence meets a rich, fulfilling student life."
        altText="Students on campus"
      />
      <ExperienceGrid />
    </main>
  );
}
