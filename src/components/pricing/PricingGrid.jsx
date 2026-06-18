"use client";

import { motion } from "framer-motion";
import PricingCard from "./PricingCard";

export default function PricingGrid({
  plans,
  handleCheckout,
}) {
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