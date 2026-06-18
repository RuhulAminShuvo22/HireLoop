"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";

import { authClient } from "@/lib/auth-client";

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

  const { data: session } = authClient.useSession();

  const searchParams = useSearchParams();

  const fromBilling =
    searchParams.get("from") === "billing";


  const handleCheckout = async (plan) => {

    // Free plan Stripe এ যাবে না
    if (plan.monthlyPrice === 0) {
      toast("You are already using Free plan");
      return;
    }


    // Login check
    if (!session?.user?.email) {
      toast.error("Please login first");
      return;
    }


    try {

      const res = await fetch(
        "http://localhost:5000/create-checkout-session",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            planId: plan.id,
            userEmail: session.user.email,
          }),
        }
      );


      const data = await res.json();


      if (data.success && data.url) {

        // Stripe Checkout Redirect
        window.location.href = data.url;

      } else {

        toast.error(
          data.message || "Checkout failed"
        );

      }

    } catch (error) {

      console.error(
        "Checkout Error:",
        error
      );

      toast.error(
        "Something went wrong"
      );
    }
  };


  const plans =
    activeTab === "jobseekers"
      ? jobSeekerPlans
      : recruiterPlans;


  return (
    <main className="relative overflow-hidden bg-[#F8F5EF] min-h-screen py-20 px-5">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A54A]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4A54A]/10 blur-[120px] rounded-full" />


      <div className="relative max-w-7xl mx-auto">

        {/* Hero */}
        <PricingHero />


        {/* Pricing Type Toggle */}
        <PricingToggle
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />


        {/* Pricing Cards */}
        <PricingGrid
          plans={plans}
          fromBilling={fromBilling}
          handleCheckout={handleCheckout}
        />


        {/* FAQ */}
        <PricingFAQ />

      </div>

    </main>
  );
}