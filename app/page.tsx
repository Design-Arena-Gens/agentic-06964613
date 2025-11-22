import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Methodology } from "@/components/Methodology";
import { LanguageExplorer } from "@/components/LanguageExplorer";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { Testimonials } from "@/components/Testimonials";
import { CommunitySection } from "@/components/CommunitySection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <NavBar />
      <Hero />
      <FeatureGrid />
      <Methodology />
      <LanguageExplorer />
      <JourneyTimeline />
      <Testimonials />
      <CommunitySection />
      <FaqSection />
      <Footer />
    </main>
  );
}
