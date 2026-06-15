"use client";

import { motion } from "framer-motion";
import { FiGlobe, FiLinkedin, FiFacebook, FiTwitter } from "react-icons/fi";

export default function CompanySocial({ company }) {
  const socialLinks = [
    {
      name: "Website",
      url: company?.website,
      icon: <FiGlobe />,
      color: "#D4A64F",
    },
    {
      name: "LinkedIn",
      url: company?.linkedin,
      icon: <FiLinkedin />,
      color: "#0A66C2",
    },
    {
      name: "Facebook",
      url: company?.facebook,
      icon: <FiFacebook />,
      color: "#1877F2",
    },
    {
      name: "Twitter",
      url: company?.twitter,
      icon: <FiTwitter />,
      color: "#1DA1F2",
    },
  ];

  const availableLinks = socialLinks.filter((item) => item.url);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-[#E5D5B8] rounded-3xl p-6 mt-8 shadow-sm"
    >
      <h2 className="text-xl font-bold text-[#3B2A1A] mb-5">
        🌐 Social Links
      </h2>

      {availableLinks.length === 0 ? (
        <p className="text-sm text-[#8A7356]">
          No social links available
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {availableLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 p-4 rounded-2xl border border-[#F1E3C7] hover:shadow-md transition"
            >
              <div
                className="text-xl"
                style={{ color: item.color }}
              >
                {item.icon}
              </div>

              <div>
                <p className="font-semibold text-[#3B2A1A]">
                  {item.name}
                </p>
                <p className="text-xs text-[#8A7356] break-all">
                  Visit {item.name}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      )}
    </motion.div>
  );
}