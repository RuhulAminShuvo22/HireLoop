"use client";

import { motion } from "framer-motion";

const categories = [
  "Software Development",
  "Design",
  "Marketing",
  "Sales",
  "Finance",
  "Human Resources",
  "Customer Support",
  "Engineering",
];

const jobTypes = [
  "Full-time",
  "Part-time",
  "Remote",
  "Contract",
  "Internship",
];

const currencies = ["USD", "BDT", "EUR", "GBP"];

export default function JobInfoSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-[#E6DCC8] bg-white p-8 shadow-sm"
    >
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#3B2F1E]">
          Job Information
        </h2>

        <p className="mt-2 text-sm text-[#8B6F47]">
          Provide the essential details about the job opening.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Job Title */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Job Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="Senior Frontend Developer"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Job Category
          </label>

          <select
            name="category"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
            required
          >
            <option value="">Select Category</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Job Type */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Job Type
          </label>

          <select
            name="type"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
            required
          >
            <option value="">Select Job Type</option>

            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Salary Min */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Minimum Salary
          </label>

          <input
            type="number"
            name="salaryMin"
            placeholder="500"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>

        {/* Salary Max */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Maximum Salary
          </label>

          <input
            type="number"
            name="salaryMax"
            placeholder="1500"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>

        {/* Currency */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Currency
          </label>

          <select
            name="currency"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          >
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* Deadline */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Application Deadline
          </label>

          <input
            type="date"
            name="deadline"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>

        {/* City */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            City
          </label>

          <input
            type="text"
            name="city"
            placeholder="Dhaka"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>

        {/* Country */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Country
          </label>

          <input
            type="text"
            name="country"
            placeholder="Bangladesh"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>

      </div>

      {/* Remote */}
      <div className="mt-8 rounded-2xl border border-[#E6DCC8] bg-[#F8F5EF] p-5">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            name="isRemote"
            className="h-5 w-5 accent-[#D4A95A]"
          />

          <div>
            <h3 className="font-semibold text-[#3B2F1E]">
              Remote Position
            </h3>

            <p className="text-sm text-[#8B6F47]">
              Candidates can work remotely.
            </p>
          </div>
        </label>
      </div>
    </motion.div>
  );
}