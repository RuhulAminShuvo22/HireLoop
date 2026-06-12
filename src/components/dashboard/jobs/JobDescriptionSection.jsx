"use client";

import { motion } from "framer-motion";

export default function JobDescriptionSection() {
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
          Job Description
        </h2>

        <p className="mt-2 text-sm text-[#8B6F47]">
          Describe the role clearly so applicants know exactly what to expect.
        </p>
      </div>

      <div className="space-y-8">

        {/* Responsibilities */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Responsibilities
          </label>

          <textarea
            name="responsibilities"
            rows={6}
            placeholder={`Example:

• Develop responsive web applications.
• Collaborate with designers and backend developers.
• Write clean and maintainable code.
• Participate in code reviews.
`}
            className="w-full rounded-2xl border border-[#E6DCC8] px-5 py-4 outline-none transition focus:border-[#D4A95A] resize-none"
          ></textarea>

          <p className="mt-2 text-xs text-[#8B6F47]">
            Explain what the employee will do daily.
          </p>
        </div>

        {/* Requirements */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Requirements
          </label>

          <textarea
            name="requirements"
            rows={6}
            placeholder={`Example:

• 2+ years of React experience
• Good understanding of JavaScript
• Experience with REST APIs
• Git knowledge
`}
            className="w-full rounded-2xl border border-[#E6DCC8] px-5 py-4 outline-none transition focus:border-[#D4A95A] resize-none"
          ></textarea>

          <p className="mt-2 text-xs text-[#8B6F47]">
            Mention skills, education, and experience requirements.
          </p>
        </div>

        {/* Benefits */}
        <div>
          <label className="mb-2 block font-medium text-[#3B2F1E]">
            Benefits
            <span className="ml-2 text-xs text-[#8B6F47]">
              (Optional)
            </span>
          </label>

          <textarea
            name="benefits"
            rows={5}
            placeholder={`Example:

• Health Insurance
• Flexible Working Hours
• Remote Work
• Annual Bonus
• Paid Leave
`}
            className="w-full rounded-2xl border border-[#E6DCC8] px-5 py-4 outline-none transition focus:border-[#D4A95A] resize-none"
          ></textarea>

          <p className="mt-2 text-xs text-[#8B6F47]">
            Share the benefits your company offers.
          </p>
        </div>

      </div>
    </motion.div>
  );
}