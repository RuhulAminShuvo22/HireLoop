"use client";

import { motion } from "framer-motion";

export default function CompanyAbout({ company }) {
  if (!company) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-[#E5D5B8] rounded-3xl p-6 mt-8 shadow-sm"
    >
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#3B2A1A] mb-4">
        About {company.companyName}
      </h2>

      {/* Description */}
      <p className="text-[#6B5B45] leading-7 text-sm md:text-[15px] whitespace-pre-line">
        {company.description
          ? company.description
          : "No description available for this company yet."}
      </p>
    </motion.div>
  );
}