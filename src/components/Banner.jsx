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
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
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
    <section className="relative flex min-h-screen items-center overflow-hidden py-20 lg:py-0">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/banner.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Glow Effects */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-[#D4A95A]/10 blur-[180px] sm:h-[500px] sm:w-[500px] lg:h-[800px] lg:w-[800px]" />

      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-[#D4A95A]/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4A95A]/30 bg-[#2B1B12]/80 px-4 py-2 text-xs text-[#F5E6C8] backdrop-blur-xl sm:text-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D4A95A]" />
              50,000+ New Opportunities This Month
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            <span className="text-white">Find Your Dream</span>

            <br />

            <span className="bg-gradient-to-r from-[#D4A95A] via-[#F6D38B] to-[#D4A95A] bg-clip-text text-transparent">
              Career Today
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl px-2 text-sm text-[#E8D7B8] sm:text-base md:text-lg"
          >
            HireLoop connects exceptional talent with premium opportunities.
            Discover world-class careers and build the future you have always
            envisioned.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10"
          >
            <div className="rounded-3xl border border-[#D4A95A]/20 bg-[#2B1B12]/70 p-4 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="relative">
                  <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4A95A]" />

                  <input
                    type="text"
                    placeholder="Job title, skill or company"
                    className="h-12 w-full rounded-xl border border-[#D4A95A]/20 bg-[#3B2F1E]/80 pl-12 pr-4 text-sm text-white outline-none placeholder:text-gray-400 focus:border-[#D4A95A]"
                  />
                </div>

                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4A95A]" />

                  <input
                    type="text"
                    placeholder="Location or Remote"
                    className="h-12 w-full rounded-xl border border-[#D4A95A]/20 bg-[#3B2F1E]/80 pl-12 pr-4 text-sm text-white outline-none placeholder:text-gray-400 focus:border-[#D4A95A]"
                  />
                </div>

                <Button className="h-12 w-full bg-gradient-to-r from-[#D4A95A] to-[#B8860B] text-sm font-bold text-black sm:text-base">
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
            className="mt-7 flex flex-wrap justify-center gap-3"
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
                className="rounded-full border border-[#D4A95A]/20 bg-[#2B1B12]/60 px-3 py-1.5 text-xs text-[#E8D7B8] sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="rounded-2xl border border-[#D4A95A]/20 bg-[#2B1B12]/70 p-4 backdrop-blur-xl"
              >
                <div className="flex justify-center text-xl text-[#D4A95A]">
                  {item.icon}
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                  {item.value}
                </h3>

                <p className="mt-1 text-sm text-[#CDB891]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}