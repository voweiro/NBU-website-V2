import PrincipalOfficers from "@/components/about/principal-officers";
import AboutHero from "@/components/about/about-hero";
import principalOfficersImage from "@/asserts/Governance.png";

export default function Home() {
  return (
    <main className=".layout bg-[#ffede6]">
      <AboutHero title="Principal Officers" imageSrc={principalOfficersImage} />

      <PrincipalOfficers />
    </main>
  );
}
