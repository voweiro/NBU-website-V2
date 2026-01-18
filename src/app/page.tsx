import "@/styles/globals.css"; // Ensure it's inside `/styles/`
import Features from "@/components/home/Features";
import Courses from "@/components/home/Courses";
import LatestNews from "@/components/home/LatestNews";
import HeroSlider from "@/components/home/HeroSlider";

export default function Home() {
  return (
    <>
      <main className="w-full  bg-white">
        <HeroSlider />

        <Features />

        <Courses />

        <LatestNews />
      </main>
    </>
  );
}
