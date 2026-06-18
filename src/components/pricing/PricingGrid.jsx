

"use client";

import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

export default function PricingGrid({ plans }) {
  // Better Auth session
  const { data: session } = authClient.useSession();

  const handleCheckout = async (plan) => {
    try {
      // Login check
      if (!session?.user?.email) {
        toast.error("Please login to upgrade your plan");
        return;
      }

      // Free plan checkout করবে না
      if (plan.monthlyPrice === 0) {
        toast("You are already using the free plan");
        return;
      }

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
        // Stripe Checkout page এ redirect
        window.location.href = data.url;
      } else {
        toast.error(data.message || "Something went wrong");
      }

    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to start checkout");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
        >
          <PricingCard
            plan={plan}
            handleCheckout={handleCheckout}
          />
        </motion.div>
      ))}
    </div>
  );
}