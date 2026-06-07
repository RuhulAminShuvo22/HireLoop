"use client";

import Link from "next/link";
import Image from "next/image";
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

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#3B2F1E 1px, transparent 1px), linear-gradient(to right, #3B2F1E 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-4xl rounded-[32px] border border-[#E6DCC8] bg-white/80 p-8 shadow-[0_20px_80px_rgba(59,47,30,0.08)] backdrop-blur-xl md:p-14"
      >
        {/* Top Icon */}
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

        {/* Custom 404 */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center justify-center gap-2 md:gap-6"
        >
          <span className="text-[90px] font-black leading-none text-[#3B2F1E] md:text-[180px]">
            4
          </span>

          {/* Logo Main Container */}
          <div className="relative flex h-[110px] w-[110px] items-center justify-center md:h-[180px] md:w-[180px]">

            {/* Rotating Ring (আগের অ্যানিমেশনটি এখানে অক্ষুণ্ন রাখা হয়েছে) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#D4A95A]/30"
            />

            {/* Glow (পেছনের গ্লো ইফেক্ট) */}
            <div className="absolute inset-0 rounded-full bg-[#D4A95A]/10 blur-2xl" />

            {/* 100% Rounded Wrapper (এটি চারকোনা লোগোকে পারফেক্ট গোল করবে এবং পেছনের অ্যানিমেশনটি দেখাবে) */}
            <div className="relative z-10 flex h-[82%] w-[82%] items-center justify-center overflow-hidden rounded-full bg-white p-3 aspect-square shadow-sm">
              <Image
                src="/assets/logo-icon.png"
                alt="HireLoop"
                width={180}
                height={180}
                className="object-contain"
                priority
              />
            </div>
          </div>

          <span className="text-[90px] font-black leading-none text-[#3B2F1E] md:text-[180px]">
            4
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-3xl font-bold text-[#3B2F1E] md:text-4xl"
        >
          Opportunity Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[#8B6F47] md:text-lg"
        >
          The job, company, or page you are looking for may have been removed,
          relocated, or never existed. Explore new opportunities and continue
          your journey with HireLoop.
        </motion.p>

        {/* Divider */}
        <div className="mx-auto my-8 h-px w-52 bg-gradient-to-r from-transparent via-[#D4A95A] to-transparent" />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/">
            <Button
              size="lg"
              className="rounded-xl bg-[#D4A95A] px-8 font-semibold text-white shadow-lg shadow-[#D4A95A]/20 transition-all duration-300 hover:scale-105 hover:bg-[#C89A47]"
            >
              <FaArrowLeft />
              Back to Home
            </Button>
          </Link>

          <Link href="/jobs">
            <Button
              size="lg"
              variant="bordered"
              className="border-[#D4A95A] px-8 font-semibold text-[#3B2F1E]"
            >
              Browse Jobs
            </Button>
          </Link>
        </motion.div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-10 text-center text-sm font-medium tracking-[0.2em] text-[#8B6F47]"
        >
          HIRELOOP • CONNECTING TALENT. CREATING OPPORTUNITIES.
        </motion.p>
      </motion.div>
    </div>
  );
}
