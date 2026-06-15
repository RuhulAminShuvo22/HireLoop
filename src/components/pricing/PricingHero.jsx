export default function PricingHero() {
  return (
    <div className="text-center mb-16">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E7DCC8] bg-white shadow-sm mb-6">
        <span className="h-2 w-2 rounded-full bg-[#D4A54A]" />
        <span className="text-sm font-medium text-[#D4A54A]">
          Flexible Pricing Plans
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3B2A1A] leading-tight">
        Choose The Perfect
        <span className="block text-[#D4A54A]">
          Pricing Plan
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">
        Whether you are looking for your next opportunity or hiring
        top talent, HireLoop offers flexible plans designed to
        help you grow faster and achieve more.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-8 mt-10">
        <div>
          <h3 className="text-3xl font-bold text-[#3B2A1A]">
            10K+
          </h3>
          <p className="text-gray-500">
            Active Job Seekers
          </p>
        </div>

        <div className="hidden md:block w-px bg-[#E7DCC8]" />

        <div>
          <h3 className="text-3xl font-bold text-[#3B2A1A]">
            500+
          </h3>
          <p className="text-gray-500">
            Hiring Companies
          </p>
        </div>

        <div className="hidden md:block w-px bg-[#E7DCC8]" />

        <div>
          <h3 className="text-3xl font-bold text-[#3B2A1A]">
            95%
          </h3>
          <p className="text-gray-500">
            Success Rate
          </p>
        </div>
      </div>
    </div>
  );
}