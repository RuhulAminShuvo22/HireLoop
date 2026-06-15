"use client";

import { motion } from "framer-motion";
import { FiBriefcase, FiUsers, FiCalendar, FiStar } from "react-icons/fi";

export default function CompanyStats({ company }) {
  const stats = [
    {
      label: "Jobs Posted",
      value: company?.jobsPosted || 0,
      icon: <FiBriefcase />,
    },
    {
      label: "Employees",
      value: company?.companySize || "N/A",
      icon: <FiUsers />,
    },
    {
      label: "Founded",
      value: company?.foundedYear || "N/A",
      icon: <FiCalendar />,
    },
    {
      label: "Plan",
      value: company?.plan || "Free",
      icon: <FiStar />,
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white border border-[#E5D5B8] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#F8E8C4] text-[#C8932E] text-lg">
              {item.icon}
            </div>

            <div>
              <p className="text-sm text-[#8A7356]">
                {item.label}
              </p>

              <h3 className="text-xl font-bold text-[#3B2A1A]">
                {item.value}
              </h3>
            </div>

          </div>
        </motion.div>
      ))}
    </div>
  );
}