"use client";

import { motion } from "framer-motion";
import { FiGlobe, FiMail, FiShare2, FiCopy } from "react-icons/fi";
import { useState } from "react";

export default function CompanySidebar({ company }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-24 space-y-6"
    >
      {/* Card */}
      <div className="bg-white border border-[#E5D5B8] rounded-2xl p-6 shadow-sm">
        
        <h3 className="text-lg font-bold text-[#3B2A1A] mb-4">
          Quick Actions
        </h3>

        {/* Website */}
        {company?.website ? (
          <a
            href={company.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full justify-center bg-[#D4A64F] hover:bg-[#C8932E] text-white py-3 rounded-xl font-medium transition"
          >
            <FiGlobe />
            Visit Website
          </a>
        ) : (
          <button
            disabled
            className="w-full py-3 rounded-xl bg-gray-200 text-gray-400 cursor-not-allowed"
          >
            No Website
          </button>
        )}

        {/* Email */}
        {company?.email && (
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-2 w-full justify-center border border-[#D4A64F] text-[#C8932E] py-3 rounded-xl font-medium mt-3 hover:bg-[#D4A64F] hover:text-white transition"
          >
            <FiMail />
            Send Email
          </a>
        )}

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 w-full justify-center border border-[#E5D5B8] text-[#3B2A1A] py-3 rounded-xl font-medium mt-3 hover:bg-[#F8F5EF] transition"
        >
          <FiCopy />
          {copied ? "Copied!" : "Copy Link"}
        </button>

        {/* Share */}
        <button
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: company?.companyName,
                url: window.location.href,
              });
            }
          }}
          className="flex items-center gap-2 w-full justify-center border border-[#E5D5B8] text-[#3B2A1A] py-3 rounded-xl font-medium mt-3 hover:bg-[#F8F5EF] transition"
        >
          <FiShare2 />
          Share Company
        </button>
      </div>

      {/* Small Info Card */}
      <div className="bg-white border border-[#E5D5B8] rounded-2xl p-5">
        <h4 className="font-semibold text-[#3B2A1A] mb-3">
          Company Status
        </h4>

        <div className="flex items-center justify-between text-sm">
          <span className="text-[#6B5B45]">Status</span>

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              company?.isApproved
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {company?.isApproved ? "Approved" : "Pending"}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm mt-3">
          <span className="text-[#6B5B45]">Jobs</span>
          <span className="font-semibold text-[#D4A64F]">
            {company?.jobsPosted || 0}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm mt-3">
          <span className="text-[#6B5B45]">Plan</span>
          <span className="font-semibold text-[#3B2A1A]">
            {company?.plan || "Free"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}