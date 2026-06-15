export default function PricingCard({ plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl bg-white border p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        plan.featured
          ? "border-[#D4A54A] shadow-xl scale-105"
          : "border-[#E7DCC8]"
      }`}
    >
      {/* Popular Badge */}
      {plan.featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-[#D4A54A] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan Name */}
      <h3 className="text-2xl font-bold text-[#3B2A1A]">
        {plan.name}
      </h3>

      {/* Price */}
      <div className="mt-6 mb-8">
        <span className="text-5xl font-bold text-[#3B2A1A]">
          {plan.price}
        </span>

        <span className="text-gray-500 text-lg">
          {plan.period}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-4 flex-grow">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-700"
          >
            <span className="text-[#D4A54A] font-bold mt-0.5">
              ✓
            </span>

            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        className={`mt-10 w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
          plan.featured
            ? "bg-[#D4A54A] text-white hover:bg-[#c79535]"
            : "border border-[#D4A54A] text-[#D4A54A] hover:bg-[#D4A54A] hover:text-white"
        }`}
      >
        Get Started
      </button>
    </div>
  );
}