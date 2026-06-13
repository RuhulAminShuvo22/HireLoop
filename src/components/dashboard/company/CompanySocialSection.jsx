"use client";

import { motion } from "framer-motion";

export default function CompanySocialSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="rounded-3xl border border-[#E6DCC8] bg-white p-8 shadow-sm"
    >
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#3B2F1E]">
          Social Links
        </h2>

        <p className="mt-2 text-sm text-[#8B6F47]">
          Add your company social media profiles (optional)
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* LinkedIn */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            LinkedIn
          </label>

          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/company/your-company"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>

        {/* Facebook */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Facebook
          </label>

          <input
            type="url"
            name="facebook"
            placeholder="https://facebook.com/your-company"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>

        {/* Twitter / X */}
        <div className="md:col-span-2">
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Twitter / X
          </label>

          <input
            type="url"
            name="twitter"
            placeholder="https://x.com/your-company"
            className="w-full rounded-xl border border-[#E6DCC8] px-4 py-3 outline-none transition focus:border-[#D4A95A]"
          />
        </div>
      </div>
    </motion.div>
  );
}