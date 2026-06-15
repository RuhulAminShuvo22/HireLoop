import PricingCard from "./PricingCard";

export default function PricingGrid({ plans }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <PricingCard
          key={plan.name}
          plan={plan}
        />
      ))}
    </div>
  );
}