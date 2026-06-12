"use client";

import { motion } from "framer-motion";
import { Building2, BadgeCheck, BriefcaseBusiness } from "lucide-react";

export default function CompanyCard() {
  // Demo Data
  // পরে এগুলো API থেকে আসবে
  const company = {
    name: "HireLoop Technologies",
    logo: "https://i.pravatar.cc/100?img=12",
    approved: true,
    plan: "Growth",
    jobsPosted: 2,
    jobLimit: 10,
  };

  const remainingJobs = company.jobLimit - company.jobsPosted;
  const percentage = (company.jobsPosted / company.jobLimit) * 100;

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
          Jobs are posted under your approved company profile.
        </p>
      </div>

      {/* Company */}
      <div className="flex flex-col gap-6 rounded-2xl border border-[#E6DCC8] bg-[#F8F5EF] p-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <img
            src={company.logo}
            alt={company.name}
            className="h-20 w-20 rounded-2xl border border-[#D4A95A] object-cover"
          />

          <div>
            <h3 className="text-xl font-bold text-[#3B2F1E]">
              {company.name}
            </h3>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              {company.approved ? (
                <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  <BadgeCheck size={14} />
                  Approved
                </span>
              ) : (
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                  Pending Approval
                </span>
              )}

              <span className="rounded-full bg-[#D4A95A]/15 px-3 py-1 text-xs font-semibold text-[#D4A95A]">
                {company.plan} Plan
              </span>
            </div>
          </div>
        </div>

        {/* Job Counter */}
        <div className="rounded-2xl bg-white p-5 shadow-sm border border-[#E6DCC8] min-w-[260px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BriefcaseBusiness
                size={18}
                className="text-[#D4A95A]"
              />

              <span className="font-semibold text-[#3B2F1E]">
                Active Jobs
              </span>
            </div>

            <span className="font-bold text-[#3B2F1E]">
              {company.jobsPosted}/{company.jobLimit}
            </span>
          </div>

          {/* Progress */}
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-[#E6DCC8]">
            <div
              className="h-full rounded-full bg-[#D4A95A] transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <p className="mt-3 text-sm text-[#8B6F47]">
            {remainingJobs} job slots remaining.
          </p>
        </div>
      </div>

      {/* Warning */}
      {remainingJobs <= 0 && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
          <h4 className="font-semibold text-red-600">
            Job posting limit reached
          </h4>

          <p className="mt-2 text-sm text-red-500">
            Upgrade your subscription plan to publish more jobs.
          </p>
        </div>
      )}

      {/* Notice */}
      {company.approved && remainingJobs > 0 && (
        <div className="mt-6 rounded-2xl border border-[#D4A95A]/30 bg-[#FFF8EE] p-5">
          <div className="flex items-center gap-2">
            <Building2
              size={18}
              className="text-[#D4A95A]"
            />

            <h4 className="font-semibold text-[#3B2F1E]">
              Ready to Publish
            </h4>
          </div>

          <p className="mt-2 text-sm text-[#8B6F47]">
            Your company is approved and eligible to publish new job postings.
          </p>
        </div>
      )}
    </motion.div>
  );
}