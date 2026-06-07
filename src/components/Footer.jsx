"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaInstagram,
    FaXTwitter,
} from "react-icons/fa6";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Footer() {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 80,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.12,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 25,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const socials = [
        {
            icon: FaFacebookF,
            href: "#",
        },
        {
            icon: FaXTwitter,
            href: "#",
        },
        {
            icon: FaLinkedinIn,
            href: "#",
        },
        {
            icon: FaInstagram,
            href: "#",
        },
    ];

    return (
        <footer className="relative mt-16 overflow-hidden border-t border-[#E6DCC8] bg-[#F8F5EF]">
            {/* Glow Effects */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D4A95A]/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#D4A95A]/10 blur-3xl" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative mx-auto max-w-7xl px-6 py-8"
            >
                {/* Top Section */}
                <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
                    {/* Logo & Description */}
                    <motion.div variants={itemVariants}>
                        <motion.div
                            whileHover={{ scale: 1.04 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src="/assets/new-logo.png"
                                alt="HireLoop"
                                width={280}
                                height={100}
                                priority
                                className="mb-4 h-auto w-auto"
                            />
                        </motion.div>

                        <p className="max-w-md text-base leading-7 text-[#6B5B45] md:text-lg">
                            Connecting talented professionals with leading companies.
                            Discover opportunities, hire smarter, and grow faster
                            through a modern recruitment ecosystem.
                        </p>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div variants={itemVariants}>
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-[3px] text-[#3B2F1E]">
                            Stay Updated
                        </h3>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-xl border border-[#E6DCC8] bg-white px-5 py-3 text-[#3B2F1E] outline-none transition-all duration-300 hover:border-[#D4A95A] focus:border-[#D4A95A] focus:shadow-[0_0_20px_rgba(212,169,90,0.25)]"
                            />

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="rounded-xl bg-[#D4A95A] px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#C69945]"
                            >
                                Join Now
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="my-6 h-px bg-[#E6DCC8]"
                />

                {/* Middle Section */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Navigation */}
                    <motion.div variants={itemVariants}>
                        <h4 className="mb-4 border-l-4 border-[#D4A95A] pl-3 text-sm font-bold uppercase tracking-[2px] text-[#3B2F1E]">
                            Navigation
                        </h4>

                        <div className="space-y-3">
                            {["Home", "Browse Jobs", "Companies", "Pricing"].map(
                                (item) => (
                                    <Link
                                        key={item}
                                        href="#"
                                        className="group flex w-fit items-center gap-2 text-[#6B5B45] transition-all duration-300 hover:translate-x-2 hover:text-[#8B6F47]"
                                    >
                                        {item}
                                    </Link>
                                )
                            )}
                        </div>
                    </motion.div>

                    {/* Job Seekers */}
                    <motion.div variants={itemVariants}>
                        <h4 className="mb-4 border-l-4 border-[#D4A95A] pl-3 text-sm font-bold uppercase tracking-[2px] text-[#3B2F1E]">
                            For Seekers
                        </h4>

                        <div className="space-y-3">
                            {[
                                "Find Jobs",
                                "Saved Jobs",
                                "Career Tips",
                                "Resume Builder",
                            ].map((item) => (
                                <motion.div
                                    key={item}
                                    whileHover={{ x: 12, scale: 1.05 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 18,
                                    }}
                                    className="group relative w-fit cursor-pointer"
                                >
                                    <p className="relative text-[#6B5B45] transition-all duration-300 group-hover:text-[#D4A95A]">
                                        {item}
                                    </p>

                                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#D4A95A] transition-all duration-500 group-hover:w-full" />
                                    <span className="absolute -left-4 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 rounded-full bg-[#D4A95A] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants}>
                        <h4 className="mb-4 border-l-4 border-[#D4A95A] pl-3 text-sm font-bold uppercase tracking-[2px] text-[#3B2F1E]">
                            Contact
                        </h4>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-[#6B5B45]">
                                <FiMail className="text-[#D4A95A]" />
                                support@hireloop.com
                            </div>

                            <div className="flex items-center gap-3 text-[#6B5B45]">
                                <FiPhone className="text-[#D4A95A]" />
                                +880 1234-567890
                            </div>

                            <div className="flex items-center gap-3 text-[#6B5B45]">
                                <FiMapPin className="text-[#D4A95A]" />
                                Dhaka, Bangladesh
                            </div>
                        </div>
                    </motion.div>

                    {/* Social */}
                    <motion.div variants={itemVariants}>
                        <h4 className="mb-4 border-l-4 border-[#D4A95A] pl-3 text-sm font-bold uppercase tracking-[2px] text-[#3B2F1E]">
                            Connect With Us
                        </h4>

                        <p className="mb-4 text-[#6B5B45]">
                            Follow us for job updates and career insights.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {socials.map((social, index) => {
                                const Icon = social.icon;

                                return (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        whileHover={{
                                            y: -6,
                                            scale: 1.1,
                                        }}
                                        whileTap={{
                                            scale: 0.9,
                                        }}
                                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E6DCC8] bg-white text-[#3B2F1E] shadow-sm transition-all duration-300 hover:border-[#D4A95A] hover:bg-[#D4A95A] hover:text-white"
                                    >
                                        <Icon size={17} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Divider */}
                <div className="mt-6 border-t border-[#E6DCC8] pt-4">
                    <div className="flex flex-col items-center justify-between gap-3 text-sm text-[#8B7B65] md:flex-row">
                        <p>© 2026 HireLoop. All rights reserved.</p>

                        <div className="flex flex-wrap items-center gap-5">
                            <Link
                                href="/privacy"
                                className="transition duration-300 hover:text-[#D4A95A]"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms"
                                className="transition duration-300 hover:text-[#D4A95A]"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
}