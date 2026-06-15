"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiGlobe,
  FiMapPin,
  FiBriefcase,
} from "react-icons/fi";

export default function CompanyHero({ company }) {
  return (
    // নেভবারের সাথে ম্যাচ করতে max-w-7xl এবং উইন্ডো সাইজ অনুযায়ী সাইড প্যাডিং সেট করা হয়েছে
    <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-[#E5D5B8] rounded-3xl p-8 shadow-sm w-full"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          {/* Left Side */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">

            {/* Logo */}
            <div className="relative w-32 h-32 rounded-3xl overflow-hidden border border-[#E5D5B8] bg-[#F8F5EF]">
              <Image
                src={company.logo || "/company-placeholder.png"}
                alt={company.companyName}
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Company Info */}
            <div className="text-center sm:text-left">

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">

                <h1 className="text-4xl font-bold text-[#3B2A1A]">
                  {company.companyName}
                </h1>

                {company.isApproved && (
                  <span className="flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    <FiCheckCircle />
                    Verified
                  </span>
                )}

              </div>

              <p className="text-[#8A7356] mt-3 text-lg">
                {company.industry}
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-6">

                <div className="flex items-center gap-2 bg-[#F8F5EF] px-4 py-2 rounded-full text-sm text-[#6B5B45]">
                  <FiBriefcase className="text-[#D4A64F]" />
                  {company.jobsPosted} Jobs Posted
                </div>

                <div className="flex items-center gap-2 bg-[#F8F5EF] px-4 py-2 rounded-full text-sm text-[#6B5B45]">
                  <FiMapPin className="text-[#D4A64F]" />
                  {company.companySize} Employees
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4 w-full sm:w-auto min-w-[200px]">

            {company.website ? (
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#D4A64F] hover:bg-[#C8932E] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 w-full"
              >
                <FiGlobe />
                Visit Website
              </a>
            ) : (
              <button
                disabled
                className="bg-gray-200 text-gray-500 px-6 py-3 rounded-xl cursor-not-allowed w-full"
              >
                No Website
              </button>
            )}

            <div className="bg-[#F8F5EF] border border-[#E5D5B8] rounded-xl p-4 text-center sm:text-left">

              <p className="text-sm text-[#8A7356]">
                Company Plan
              </p>

              <h3 className="text-xl font-bold text-[#3B2A1A] mt-1">
                {company.plan}
              </h3>

            </div>

          </div>

        </div>
      </motion.section>
    </div>
  );
}
