import AboutHero from "@/components/about/about-hero";
import HillsideUniversity from "@/components/about/history";
import history from "@/asserts/nbunets.jpg";
export default function Home() {
  return (
    <main className="bg-[#ffede6] ">
      <AboutHero imageSrc={history} title="History of Our University" />
      <HillsideUniversity />
    </main>
  );
}
