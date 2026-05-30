import { TopNavBar } from "@/components/layout/TopNavBar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { PressSection } from "@/components/sections/PressSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PublicationsSection } from "@/components/sections/PublicationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Page() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <PressSection />
        <AboutSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
