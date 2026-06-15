"use client";

export default function PricingToggle({
  activeTab,
  setActiveTab,
}) {
  return (
    <div className="flex justify-center mb-14">
      <div className="inline-flex bg-white border border-[#E7DCC8] rounded-full p-1 shadow-sm">
        <button
          onClick={() => setActiveTab("jobseekers")}
          className={`px-6 md:px-8 py-3 rounded-full font-medium transition-all duration-300 ${
            activeTab === "jobseekers"
              ? "bg-[#D4A54A] text-white shadow-md"
              : "text-[#3B2A1A] hover:bg-[#F8F5EF]"
          }`}
        >
          For Job Seekers
        </button>

        <button
          onClick={() => setActiveTab("recruiters")}
          className={`px-6 md:px-8 py-3 rounded-full font-medium transition-all duration-300 ${
            activeTab === "recruiters"
              ? "bg-[#D4A54A] text-white shadow-md"
              : "text-[#3B2A1A] hover:bg-[#F8F5EF]"
          }`}
        >
          For Recruiters
        </button>
      </div>
    </div>
  );
}