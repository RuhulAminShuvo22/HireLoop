"use client";

import { motion } from "framer-motion";

export default function CompanyContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="rounded-3xl border border-[#E6DCC8] bg-white p-8 shadow-sm"
    >
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#3B2F1E]">
          Contact Information
        </h2>

        <p className="mt-2 text-sm text-[#8B6F47]">
          Provide valid contact details for your company.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Contact Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="company@email.com"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            placeholder="+8801XXXXXXXXX"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
            required
          />
        </div>

        {/* Website */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Website (Optional)
          </label>

          <input
            type="text"
            name="website"
            placeholder="https://yourcompany.com"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>

      </div>
    </motion.div>
  );
}