"use client";

import { motion } from "framer-motion";

const industries = [
  "Information Technology (IT)",
  "Software Development",
  "Artificial Intelligence (AI)",
  "Cybersecurity",
  "Banking & Finance",
  "FinTech",
  "Accounting",
  "Healthcare",
  "Pharmaceuticals",
  "Education",
  "E-Learning",
  "Telecommunications",
  "E-Commerce",
  "Retail & Consumer Goods",
  "Manufacturing",
  "Automotive",
  "Construction",
  "Real Estate",
  "Logistics & Supply Chain",
  "Transportation",
  "Marketing & Advertising",
  "Media & Entertainment",
  "Hospitality",
  "Travel & Tourism",
  "Human Resources",
  "Legal Services",
  "Government",
  "Non-Profit Organization",
  "Agriculture",
  "Energy & Utilities",
  "Fashion & Apparel",
  "Food & Beverage",
  "Gaming",
  "Research & Development",
  "Other",
];

export default function CompanyInfoSection() {
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
          Company Information
        </h2>

        <p className="mt-2 text-sm text-[#8B6F47]">
          Provide your company basic details.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Company Name */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Company Name
          </label>

          <input
            type="text"
            name="companyName"
            placeholder="e.g. Google LLC"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>

        {/* Industry */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Industry
          </label>

          <select
            name="industry"
            className="w-full rounded-xl border border-[#E6DCC8] bg-white px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          >
            <option value="">Select Industry</option>

            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Company Size */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Company Size
          </label>

          <select
            name="companySize"
            className="w-full rounded-xl border border-[#E6DCC8] bg-white px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          >
            <option value="">Select Size</option>
            <option value="1-10">1-10 Employees</option>
            <option value="11-50">11-50 Employees</option>
            <option value="51-200">51-200 Employees</option>
            <option value="201-500">201-500 Employees</option>
            <option value="501-1000">501-1000 Employees</option>
            <option value="1001-5000">1001-5000 Employees</option>
            <option value="5000+">5000+ Employees</option>
          </select>
        </div>

        {/* Founded Year */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Founded Year
          </label>

          <input
            type="number"
            name="foundedYear"
            placeholder="2020"
            min="1800"
            max={new Date().getFullYear()}
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>

        {/* Website */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Website
          </label>

          <input
            type="url"
            name="website"
            placeholder="https://company.com"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>

        {/* Company Logo */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Company Logo URL
          </label>

          <input
            type="url"
            name="logo"
            placeholder="https://image-url.com/logo.png"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>
      </div>
    </motion.div>
  );
}