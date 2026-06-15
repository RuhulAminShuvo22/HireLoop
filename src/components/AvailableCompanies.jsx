"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FiArrowRight,
    FiGlobe,
    FiUsers,
    FiCalendar,
} from "react-icons/fi";

export default function AvailableCompanies() {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                setLoading(true);

                const res = await fetch("http://localhost:5000/companies");

                const data = await res.json();

                const approvedCompanies = data.companies
                    .filter((company) => company.isApproved)
                    .sort(
                        (a, b) =>
                            new Date(b.createdAt) -
                            new Date(a.createdAt)
                    )
                    .slice(0, 6);

                setCompanies(approvedCompanies);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    if (loading) {
        return (
            <section className="bg-[#F8F5EF] py-20">
                <div className="max-w-7xl mx-auto px-5">

                    <div className="text-center mb-12">
                        <p className="uppercase tracking-[5px] text-[#C8932E] text-sm font-semibold">
                            Trusted Companies
                        </p>

                        <h2 className="text-4xl font-bold text-[#3B2A1A] mt-3">
                            Explore Companies Hiring Now
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl border border-[#E5D5B8] p-6 animate-pulse"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-gray-200"></div>

                                    <div className="flex-1">
                                        <div className="h-5 bg-gray-200 rounded w-2/3 mb-3"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                    </div>
                                </div>

                                <div className="h-4 bg-gray-200 rounded mt-6"></div>
                                <div className="h-4 bg-gray-200 rounded mt-3 w-4/5"></div>

                                <div className="mt-8 flex gap-3">
                                    <div className="h-10 w-28 rounded-lg bg-gray-200"></div>
                                    <div className="h-10 w-28 rounded-lg bg-gray-200"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (!companies.length) {
        return (
            <section className="bg-[#F8F5EF] py-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#3B2A1A]">
                        No Companies Available
                    </h2>

                    <p className="text-[#8A7356] mt-3">
                        Please check again later.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#F8F5EF] py-20">
            <div className="max-w-7xl mx-auto px-5">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <p className="uppercase tracking-[5px] text-[#C8932E] text-sm font-semibold">
                        Trusted Companies
                    </p>

                    <h2 className="text-5xl font-bold text-[#3B2A1A] mt-4">
                        Explore Companies Hiring Now
                    </h2>

                    <p className="text-[#7A6A55] mt-5 max-w-2xl mx-auto">
                        Discover verified companies that are actively
                        hiring talented professionals across multiple
                        industries.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company._id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.1,
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                            }}
                            className="bg-white rounded-3xl border border-[#E5D5B8] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <Image
                                        src={company.logo || "/company-placeholder.png"}
                                        alt={company.companyName}
                                        width={60}
                                        height={60}
                                        className="rounded-2xl border object-cover bg-gray-100"
                                        unoptimized
                                    />

                                    <div>
                                        <h3 className="text-xl font-bold text-[#3B2A1A]">
                                            {company.companyName}
                                        </h3>

                                        <p className="text-sm text-[#8A7356] mt-1">
                                            {company.industry}
                                        </p>
                                    </div>
                                </div>

                                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                                    Approved
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-[#6B5B45] text-sm leading-7 mt-5 flex-grow">
                                {company.description?.length > 110
                                    ? `${company.description.slice(0, 110)}...`
                                    : company.description || "No description available."}
                            </p>

                            {/* Info */}
                            <div className="space-y-3 mt-6">

                                <div className="flex items-center gap-2 text-[#6B5B45] text-sm">
                                    <FiUsers className="text-[#C8932E]" />
                                    <span>{company.companySize} Employees</span>
                                </div>

                                <div className="flex items-center gap-2 text-[#6B5B45] text-sm">
                                    <FiCalendar className="text-[#C8932E]" />
                                    <span>Founded {company.foundedYear}</span>
                                </div>

                            </div>

                            {/* Buttons */}
                            <div className="mt-8 flex gap-3">

                                {company.website?.trim() ? (
                                    <a
                                        href={company.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 border border-[#D4A64F] text-[#C8932E] rounded-xl py-3 font-medium hover:bg-[#D4A64F] hover:text-white transition"
                                    >
                                        <FiGlobe />
                                        Website
                                    </a>
                                ) : (
                                    <button
                                        disabled
                                        className="flex-1 border rounded-xl py-3 text-gray-400 cursor-not-allowed"
                                    >
                                        No Website
                                    </button>
                                )}

                                <Link
                                    href={`/companies/${company._id}`}
                                    className="flex-1 flex items-center justify-center gap-2 bg-[#D4A64F] hover:bg-[#C8932E] text-white rounded-xl py-3 font-medium transition"
                                >
                                    View
                                    <FiArrowRight />
                                </Link>

                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Button */}
                <div className="flex justify-center mt-14">
                    <Link
                        href="/companies"
                        className="inline-flex items-center gap-3 bg-[#D4A64F] hover:bg-[#C8932E] text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                    >
                        View All Companies
                        <FiArrowRight />
                    </Link>
                </div>
            </div>
        </section >
    );
}