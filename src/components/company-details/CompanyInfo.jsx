"use client";

import { motion } from "framer-motion";
import { FiUsers, FiBriefcase, FiCalendar, FiTag } from "react-icons/fi";

export default function CompanyInfo({ company }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-[#E5D5B8] rounded-3xl p-6 shadow-sm mt-8"
    >
      {/* Title */}
      <h2 className="text-xl font-bold text-[#3B2A1A] mb-6">
        Company Information
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Industry */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F8E8C4]">
            <FiTag className="text-[#C8932E]" />
          </div>

          <div>
            <p className="text-sm text-[#8A7356]">Industry</p>
            <p className="font-semibold text-[#3B2A1A]">
              {company?.industry || "N/A"}
            </p>
          </div>
        </div>

        {/* Company Size */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F8E8C4]">
            <FiUsers className="text-[#C8932E]" />
          </div>

          <div>
            <p className="text-sm text-[#8A7356]">Company Size</p>
            <p className="font-semibold text-[#3B2A1A]">
              {company?.companySize || "N/A"}
            </p>
          </div>
        </div>

        {/* Founded Year */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F8E8C4]">
            <FiCalendar className="text-[#C8932E]" />
          </div>

          <div>
            <p className="text-sm text-[#8A7356]">Founded</p>
            <p className="font-semibold text-[#3B2A1A]">
              {company?.foundedYear || "N/A"}
            </p>
          </div>
        </div>

        {/* Jobs Posted */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F8E8C4]">
            <FiBriefcase className="text-[#C8932E]" />
          </div>

          <div>
            <p className="text-sm text-[#8A7356]">Jobs Posted</p>
            <p className="font-semibold text-[#D4A64F]">
              {company?.jobsPosted ?? 0}
            </p>
          </div>
        </div>

      </div>
    </motion.div>
  );
}