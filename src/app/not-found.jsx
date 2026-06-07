"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { FaArrowLeft, FaBriefcase } from "react-icons/fa6";

const floatingVariants = {
  animate: (i) => ({
    y: [0, -30, 0],
    x: [0, i * 15, 0],
    transition: {
      duration: 5 + i,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

export default function NotFoundPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F8F5EF] px-4">

      {/* Background Blobs */}
      <motion.div
        custom={1}
        animate="animate"
        variants={floatingVariants}
        className="absolute left-10 top-16 h-56 w-56 rounded-full bg-[#D4A95A]/20 blur-3xl"
      />

      <motion.div
        custom={-1}
        animate="animate"
        variants={floatingVariants}
        className="absolute bottom-16 right-10 h-72 w-72 rounded-full bg-[#8B6F47]/15 blur-3xl"
      />

      <motion.div
        custom={2}
        animate="animate"
        variants={floatingVariants}
        className="absolute left-1/2 top-1/3 h-40 w-40 rounded-full bg-[#D4A95A]/10 blur-2xl"
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-3xl rounded-[32px] border border-[#E6DCC8] bg-white/70 p-8 shadow-[0_20px_80px_rgba(59,47,30,0.08)] backdrop-blur-xl md:p-14"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 12,
          }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#D4A95A]/15"
        >
          <FaBriefcase className="text-3xl text-[#D4A95A]" />
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-center text-[110px] font-black leading-none text-[#3B2F1E] md:text-[180px]"
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-center text-3xl font-bold text-[#3B2F1E]"
        >
          Opportunity Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-[#8B6F47]"
        >
          The job, company, or page you are looking for may have been
          removed, relocated, or never existed. Let us help you get back on
          track and discover your next opportunity.
        </motion.p>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-40 bg-gradient-to-r from-transparent via-[#D4A95A] to-transparent" />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center"
        >
          <Link href="/">
            <Button
              size="lg"
              className="rounded-xl bg-[#D4A95A] px-8 font-semibold text-white transition-all duration-300 hover:bg-[#C89A47] hover:scale-105 shadow-lg shadow-[#D4A95A]/20"
            >
              <FaArrowLeft />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Bottom Text */}
        <p className="mt-8 text-center text-sm text-[#8B6F47]">
          HireLoop • Connecting Talent. Creating Opportunities.
        </p>
      </motion.div>
    </div>
  );
}