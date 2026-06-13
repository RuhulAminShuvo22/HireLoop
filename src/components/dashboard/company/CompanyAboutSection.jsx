"use client";

import { motion } from "framer-motion";

export default function CompanyAboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="rounded-3xl border border-[#E6DCC8] bg-white p-8 shadow-sm"
    >
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-[#3B2F1E]">
          About Company
        </h2>

        <p className="mt-2 text-sm text-[#8B6F47]">
          Tell candidates what makes your company special.
        </p>
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block font-medium text-[#3B2F1E]">
          Company Description
        </label>

        <textarea
          name="description"
          rows={8}
          placeholder={`Example:

We are a fast-growing tech company focused on building scalable web applications.

Our mission is to create innovative solutions that make life easier for users worldwide.

We value teamwork, creativity, and continuous learning.`}
          className="w-full resize-none rounded-2xl border border-[#E6DCC8] px-5 py-4 outline-none transition focus:border-[#D4A95A]"
        />

        <p className="mt-2 text-xs text-[#8B6F47]">
          Write a short and attractive description of your company.
        </p>
      </div>
    </motion.div>
  );
}