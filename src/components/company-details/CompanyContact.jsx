"use client";

import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGlobe } from "react-icons/fi";

export default function CompanyContact({ company }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-[#E5D5B8] rounded-3xl p-6 shadow-sm mt-6"
    >
      <h2 className="text-2xl font-bold text-[#3B2A1A] mb-6">
        Contact Information
      </h2>

      <div className="space-y-5">

        {/* Email */}
        {company.email && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8E8C4] flex items-center justify-center">
              <FiMail className="text-[#C8932E]" />
            </div>

            <div>
              <p className="text-sm text-[#8A7356]">Email</p>
              <p className="font-medium text-[#3B2A1A]">
                {company.email}
              </p>
            </div>
          </div>
        )}

        {/* Phone */}
        {company.phone && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8E8C4] flex items-center justify-center">
              <FiPhone className="text-[#C8932E]" />
            </div>

            <div>
              <p className="text-sm text-[#8A7356]">Phone</p>
              <p className="font-medium text-[#3B2A1A]">
                {company.phone}
              </p>
            </div>
          </div>
        )}

        {/* Website */}
        {company.website && (
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F8E8C4] flex items-center justify-center">
              <FiGlobe className="text-[#C8932E]" />
            </div>

            <div>
              <p className="text-sm text-[#8A7356]">Website</p>

              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#C8932E] hover:text-[#A87416] transition"
              >
                Visit Website →
              </a>
            </div>
          </div>
        )}

      </div>
    </motion.div>
  );
}