"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Crown,
  Gem,
  Rocket,
  Check,
  ArrowRight,
} from "lucide-react";

const plans = {
  monthly: [
    {
      name: "Starter",
      icon: Crown,
      price: 0,
      popular: false,
      features: [
        "Daily AI Match Brief",
        "Verified Salary Bands",
        "Company Insight Dashboard",
        "Unlimited Apply",
      ],
    },
    {
      name: "Growth",
      icon: Rocket,
      price: 19,
      popular: true,
      features: [
        "Everything in Starter",
        "Priority AI Matching",
        "Advanced Analytics",
        "Unlimited Applications",
      ],
    },
    {
      name: "Premium",
      icon: Gem,
      price: 79,
      popular: false,
      features: [
        "Everything in Growth",
        "Career Portfolio",
        "Talent Rooms",
        "Recruiter Visibility",
      ],
    },
  ],

  yearly: [
    {
      name: "Starter",
      icon: Crown,
      price: 0,
      popular: false,
      features: [
        "Daily AI Match Brief",
        "Verified Salary Bands",
        "Company Insight Dashboard",
        "Unlimited Apply",
      ],
    },
    {
      name: "Growth",
      icon: Rocket,
      price: 190,
      popular: true,
      features: [
        "Everything in Starter",
        "Priority AI Matching",
        "Advanced Analytics",
        "Unlimited Applications",
      ],
    },
    {
      name: "Premium",
      icon: Gem,
      price: 790,
      popular: false,
      features: [
        "Everything in Growth",
        "Career Portfolio",
        "Talent Rooms",
        "Recruiter Visibility",
      ],
    },
  ],
};

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-24 px-4">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,169,90,.12),transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[4px] text-[#D4A95A] font-semibold">
            Pricing
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold text-[#3B2F1E]">
            Invest In Opportunities,
            <br />
            Not Endless Searching
          </h2>
        </motion.div>

        {/* Toggle */}

        <div className="flex justify-center mt-10">
          <div className="bg-white border border-[#E6DCC8] rounded-full p-1 shadow-lg">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full transition-all ${
                billing === "monthly"
                  ? "bg-[#D4A95A] text-white"
                  : "text-[#3B2F1E]"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full transition-all ${
                billing === "yearly"
                  ? "bg-[#D4A95A] text-white"
                  : "text-[#3B2F1E]"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {plans[billing].map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                }}
                className={`group relative overflow-hidden rounded-3xl border backdrop-blur-xl p-8
                  
                  ${
                    plan.popular
                      ? "border-[#D4A95A] bg-white/80 shadow-[0_0_40px_rgba(212,169,90,.25)]"
                      : "border-[#E6DCC8] bg-white/60"
                  }
                `}
              >
                {/* Gold Hover Glow */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(212,169,90,.2),transparent_60%)]" />

                {plan.popular && (
                  <span className="absolute right-5 top-5 bg-[#D4A95A] text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}

                <Icon
                  className="text-[#D4A95A]"
                  size={40}
                />

                <h3 className="mt-6 text-2xl font-bold text-[#3B2F1E]">
                  {plan.name}
                </h3>

                <div className="mt-5">
                  <span className="text-5xl font-bold text-[#3B2F1E]">
                    ${plan.price}
                  </span>

                  <span className="text-gray-500 ml-2">
                    /{billing === "monthly" ? "month" : "year"}
                  </span>
                </div>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-[#3B2F1E]"
                    >
                      <Check
                        size={18}
                        className="text-[#D4A95A]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`mt-10 w-full rounded-xl py-4 font-semibold transition-all duration-300 flex items-center justify-center gap-2
                  
                  ${
                    plan.popular
                      ? "bg-[#D4A95A] text-white hover:scale-[1.03]"
                      : "border border-[#D4A95A] text-[#3B2F1E] hover:bg-[#D4A95A] hover:text-white"
                  }
                  `}
                >
                  Choose Plan
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}