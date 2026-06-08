import Banner from "@/components/Banner";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import GlobalMouseGlow from "@/components/GlobalMouseGlow";
import PremiumCTA from "@/components/PremiumCTA";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <GlobalMouseGlow />

      <Banner />
      <FeaturesSection />
      <PricingSection />
      <PremiumCTA></PremiumCTA>
    </div>
  );
}