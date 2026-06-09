"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaBuilding,
  FaUsers,
  FaStar,
} from "react-icons/fa";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Banner() {
  const stats = [
    {
      icon: <FaBriefcase />,
      value: "50K+",
      label: "Active Jobs",
    },
    {
      icon: <FaBuilding />,
      value: "12K+",
      label: "Companies",
    },
    {
      icon: <FaUsers />,
      value: "2M+",
      label: "Job Seekers",
    },
    {
      icon: <FaStar />,
      value: "97%",
      label: "Success Rate",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 lg:min-h-screen lg:flex lg:items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/banner.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F5EF]/80 via-[#F8F5EF]/90 to-[#F8F5EF]/95" />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D4A95A]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#D4A95A]/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[#E6DCC8] bg-white/90 px-4 py-2 text-xs font-medium text-[#6B5B45] shadow-sm backdrop-blur-md sm:text-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4A95A]" />
                  50,000+ New Opportunities This Month
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="text-4xl font-bold leading-tight text-[#3B2F1E] sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Find Your Dream Career

                <span className="mt-2 block text-[#D4A95A]">
                  With Confidence
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6B5B45] lg:mx-0 md:text-lg"
              >
                HireLoop connects talented professionals with leading
                companies. Discover premium opportunities, build meaningful
                careers, and take the next step toward your future.
              </motion.p>

              {/* Search Box */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-10"
              >
                <div className="rounded-3xl border border-[#E6DCC8] bg-white/90 p-4 shadow-[0_15px_40px_rgba(212,169,90,0.15)] backdrop-blur-xl">
                  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <div className="relative">
                      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4A95A]" />

                      <input
                        type="text"
                        placeholder="Job title, skill or company"
                        className="h-12 w-full rounded-xl border border-[#E6DCC8] bg-[#FDFBF7] pl-12 pr-4 text-sm text-[#3B2F1E] outline-none placeholder:text-[#8B7B65] focus:border-[#D4A95A]"
                      />
                    </div>

                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4A95A]" />

                      <input
                        type="text"
                        placeholder="Location or Remote"
                        className="h-12 w-full rounded-xl border border-[#E6DCC8] bg-[#FDFBF7] pl-12 pr-4 text-sm text-[#3B2F1E] outline-none placeholder:text-[#8B7B65] focus:border-[#D4A95A]"
                      />
                    </div>

                    <Button className="h-12 w-full bg-[#D4A95A] text-sm font-semibold text-white hover:bg-[#C69945]">
                      Search Jobs
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
              >
                {[
                  "Remote Jobs",
                  "Frontend",
                  "Backend",
                  "Full Stack",
                  "UI/UX",
                  "Marketing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#E6DCC8] bg-white/90 px-4 py-2 text-xs text-[#6B5B45] shadow-sm transition-all duration-300 hover:border-[#D4A95A] hover:text-[#D4A95A] sm:text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden lg:block"
            >
              <div className="rounded-[32px] border border-[#E6DCC8] bg-white/90 p-6 shadow-[0_20px_60px_rgba(212,169,90,0.15)] backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#3B2F1E]">
                    Hiring Dashboard
                  </h3>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Live
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#F8F5EF] p-4">
                    <h4 className="text-2xl font-bold text-[#D4A95A]">
                      12K+
                    </h4>
                    <p className="text-sm text-[#6B5B45]">
                      Companies
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#F8F5EF] p-4">
                    <h4 className="text-2xl font-bold text-[#D4A95A]">
                      50K+
                    </h4>
                    <p className="text-sm text-[#6B5B45]">
                      Open Jobs
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "Senior Frontend Developer",
                    "UI/UX Designer",
                    "Product Manager",
                  ].map((job) => (
                    <div
                      key={job}
                      className="flex items-center justify-between rounded-xl border border-[#E6DCC8] p-4"
                    >
                      <div>
                        <h4 className="font-semibold text-[#3B2F1E]">
                          {job}
                        </h4>

                        <p className="text-sm text-[#6B5B45]">
                          Remote
                        </p>
                      </div>

                      <span className="text-[#D4A95A] font-medium">
                        New
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-[#3B2F1E]">
                    Trusted By
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Google", "Microsoft", "Meta", "Amazon"].map(
                      (company) => (
                        <span
                          key={company}
                          className="rounded-full border border-[#E6DCC8] bg-[#F8F5EF] px-3 py-2 text-sm text-[#6B5B45]"
                        >
                          {company}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>


          {/* Bottom Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-2xl border border-[#E6DCC8] bg-white/90 p-5 text-center shadow-sm backdrop-blur-md transition-all duration-300 hover:border-[#D4A95A] hover:shadow-[0_15px_35px_rgba(212,169,90,0.18)]"
              >
                {/* Floating Wrapper */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 8, -8, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex justify-center text-2xl text-[#D4A95A]"
                  >
                    {item.icon}
                  </motion.div>

                  {/* Value */}
                  <motion.h3
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="mt-3 text-2xl font-bold text-[#3B2F1E] md:text-3xl"
                  >
                    {item.value}
                  </motion.h3>

                  {/* Label */}
                  <p className="mt-1 text-sm text-[#6B5B45]">
                    {item.label}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}