"use client";

import { motion } from "framer-motion";
import {
  FaSearch,
  FaBookmark,
  FaBuilding,
  FaRocket,
  FaFileAlt,
  FaChartLine,
  FaBullseye,
  FaBriefcase,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSearch />,
    title: "Smart Search",
    description: "Find your ideal job quickly using advanced search filters.",
  },
  {
    icon: <FaChartLine />,
    title: "Salary Insights",
    description: "Explore salary trends and negotiate with confidence.",
  },
  {
    icon: <FaBuilding />,
    title: "Top Companies",
    description: "Apply directly to trusted companies hiring now.",
  },
  {
    icon: <FaBookmark />,
    title: "Saved Jobs",
    description: "Bookmark opportunities and manage them easily.",
  },
  {
    icon: <FaRocket />,
    title: "One-Click Apply",
    description: "Submit applications faster with a streamlined process.",
  },
  {
    icon: <FaFileAlt />,
    title: "Resume Builder",
    description: "Create professional resumes that attract recruiters.",
  },
  {
    icon: <FaBullseye />,
    title: "Skill Matching",
    description: "Get matched with jobs based on your expertise.",
  },
  {
    icon: <FaBriefcase />,
    title: "Career Growth",
    description: "Access resources designed to boost your career journey.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] py-20 lg:py-28">
      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D4A95A]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#D4A95A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#D4A95A]" />
            <span className="text-sm font-bold uppercase tracking-[4px] text-[#8B6F47]">
              Features
            </span>
            <span className="h-2 w-2 rounded-full bg-[#D4A95A]" />
          </div>

          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-tight text-[#3B2F1E] md:text-5xl">
            Everything You Need
            <br />
            To Succeed
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#6B5B45]">
            Powerful tools designed to connect talented professionals with the
            right opportunities and help companies hire smarter.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  scale: 0.95,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative overflow-hidden rounded-3xl border border-[#E6DCC8] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#D4A95A] hover:shadow-[0_20px_50px_rgba(212,169,90,0.18)]"
            >
              {/* Animated Glow */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D4A95A]/10 blur-3xl"
              />

              <div className="relative z-10 flex items-start gap-4">
                {/* Animated Icon */}
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#E6DCC8] bg-[#FDFBF7] text-[#D4A95A] transition-all duration-300 group-hover:border-[#D4A95A] group-hover:bg-[#FFF8EC] group-hover:scale-110"
                >
                  <motion.span
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-xl"
                  >
                    {feature.icon}
                  </motion.span>
                </motion.div>

                {/* Content */}
                <div>
                  <motion.h3
                    animate={{
                      y: [0, -1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-lg font-semibold text-[#3B2F1E]"
                  >
                    {feature.title}
                  </motion.h3>

                  <p className="mt-2 text-sm leading-7 text-[#6B5B45]">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Bottom Accent Line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 h-1 bg-[#D4A95A]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}