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
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay,
        },
    }),
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

    return (<section className="relative min-h-[100svh] overflow-hidden flex items-center py-24 lg:py-0">
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/assets/banner.png')",
            }}
        />

        ```
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Premium Golden Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[900px] lg:h-[900px] rounded-full bg-[#D4A95A]/10 blur-[180px]" />

        {/* Extra Glow */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#D4A95A]/10 rounded-full blur-[120px]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
                {/* Badge */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={0.2}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#D4A95A]/30 bg-[#2B1B12]/80 px-5 py-3 text-sm text-[#F5E6C8] backdrop-blur-xl">
                        <span className="h-2 w-2 rounded-full bg-[#D4A95A] animate-pulse" />
                        50,000+ New Opportunities This Month
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={0.4}
                    className="
          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
          font-extrabold
          leading-tight
        "
                >
                    <span className="text-white">
                        Find Your Dream
                    </span>

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
                    custom={0.6}
                    className="
          max-w-3xl
          mx-auto
          mt-6
          md:mt-8
          text-base
          sm:text-lg
          md:text-xl
          text-[#E8D7B8]
          px-2
        "
                >
                    HireLoop connects exceptional talent with premium opportunities.
                    Discover world-class careers and build the future you have always
                    envisioned.
                </motion.p>

                {/* Search Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    custom={0.8}
                    className="mt-12"
                >
                    <div className="rounded-3xl border border-[#D4A95A]/20 bg-[#2B1B12]/70 backdrop-blur-2xl p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                            {/* Search */}
                            <div className="relative">
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4A95A]" />

                                <input
                                    type="text"
                                    placeholder="Job title, skill or company"
                                    className="w-full h-14 rounded-xl bg-[#3B2F1E]/80 border border-[#D4A95A]/20 pl-12 pr-4 text-white placeholder:text-gray-400 outline-none focus:border-[#D4A95A]"
                                />
                            </div>

                            {/* Location */}
                            <div className="relative">
                                <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4A95A]" />

                                <input
                                    type="text"
                                    placeholder="Location or Remote"
                                    className="w-full h-14 rounded-xl bg-[#3B2F1E]/80 border border-[#D4A95A]/20 pl-12 pr-4 text-white placeholder:text-gray-400 outline-none focus:border-[#D4A95A]"
                                />
                            </div>

                            {/* Button */}
                            <Button
                                className="
                h-14
                w-full
                bg-gradient-to-r
                from-[#D4A95A]
                to-[#B8860B]
                text-black
                font-bold
                text-base
                sm:text-lg
              "
                            >
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
                    custom={1}
                    className="mt-8 flex flex-wrap justify-center gap-3"
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
                            className="px-4 py-2 rounded-full border border-[#D4A95A]/20 bg-[#2B1B12]/60 text-[#E8D7B8] text-sm"
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
                    custom={1.2}
                    className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
          mt-14
          md:mt-20
        "
                >
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                            }}
                            whileTap={{
                                scale: 0.98,
                            }}
                            className="
              rounded-3xl
              border
              border-[#D4A95A]/20
              bg-[#2B1B12]/70
              backdrop-blur-xl
              p-5
              md:p-6
            "
                        >
                            <div className="text-[#D4A95A] text-2xl flex justify-center">
                                {item.icon}
                            </div>

                            <h3 className="mt-4 text-3xl md:text-4xl font-bold text-white">
                                {item.value}
                            </h3>

                            <p className="mt-2 text-[#CDB891]">
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
