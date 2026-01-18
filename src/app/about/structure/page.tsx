import AboutHero from "@/components/about/about-hero";
import UniversityAbout from "@/components/about/structure";
import history from "@/asserts/nbunets.jpg"; // Assuming you have an image for the hero section

export default function Home() {
  return (
    <main className="">
      <AboutHero imageSrc={history} title="Structure of the University" />
      <UniversityAbout />
    </main>
  );
}
