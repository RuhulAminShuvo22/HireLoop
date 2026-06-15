"use client";

import { useState } from "react";

import PricingHero from "@/components/pricing/PricingHero";
import PricingToggle from "@/components/pricing/PricingToggle";
import PricingGrid from "@/components/pricing/PricingGrid";
import PricingFAQ from "@/components/pricing/PricingFAQ";

import {
  jobSeekerPlans,
  recruiterPlans,
} from "@/components/pricing/pricingData";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("jobseekers");

  const plans =
    activeTab === "jobseekers"
      ? jobSeekerPlans
      : recruiterPlans;

  return (
    <main className="relative overflow-hidden bg-[#F8F5EF] min-h-screen py-20 px-5">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A54A]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A54A]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Hero Section */}
        <PricingHero />

        {/* Toggle */}
        <PricingToggle
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Pricing Cards */}
        <PricingGrid plans={plans} />

        {/* FAQ */}
        <PricingFAQ />
      </div>
    </main>
  );
}