"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    FiSearch,
    FiGlobe,
    FiUsers,
    FiCalendar,
    FiArrowRight,
} from "react-icons/fi";

export default function CompaniesPage() {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [industry, setIndustry] = useState("All");
    const [sortBy, setSortBy] = useState("Newest");

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                setLoading(true);

                const res = await fetch("http://localhost:5000/companies");

                const data = await res.json();

                setCompanies(
                    data.companies.filter((company) => company.isApproved)
                );
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCompanies();
    }, []);

    const industries = [
        "All",
        ...new Set(companies.map((company) => company.industry)),
    ];

    const filteredCompanies = useMemo(() => {
        let filtered = [...companies];

        if (search) {
            filtered = filtered.filter((company) =>
                company.companyName
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );
        }

        if (industry !== "All") {
            filtered = filtered.filter(
                (company) => company.industry === industry
            );
        }

        if (sortBy === "Newest") {
            filtered.sort(
                (a, b) =>
                    new Date(b.createdAt) - new Date(a.createdAt)
            );
        }

        if (sortBy === "Oldest") {
            filtered.sort(
                (a, b) =>
                    new Date(a.createdAt) - new Date(b.createdAt)
            );
        }

        if (sortBy === "A-Z") {
            filtered.sort((a, b) =>
                a.companyName.localeCompare(b.companyName)
            );
        }

        return filtered;
    }, [companies, search, industry, sortBy]);

    if (loading) {
        return (
            <section className="min-h-screen bg-[#F8F5EF] py-20">
                <div className="max-w-7xl mx-auto px-5">

                    <div className="text-center mb-12">
                        <h2 className="text-5xl font-bold text-[#3B2A1A]">
                            Companies
                        </h2>

                        <p className="text-[#8A7356] mt-3">
                            Loading companies...
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-3xl border border-[#E5D5B8] p-6 animate-pulse"
                            >
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 rounded-2xl bg-gray-200"></div>

                                    <div className="flex-1">
                                        <div className="h-5 bg-gray-200 rounded w-2/3 mb-3"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                                    </div>
                                </div>

                                <div className="h-4 bg-gray-200 rounded mt-8"></div>
                                <div className="h-4 bg-gray-200 rounded mt-3 w-5/6"></div>

                                <div className="flex gap-3 mt-8">
                                    <div className="h-10 bg-gray-200 rounded-xl flex-1"></div>
                                    <div className="h-10 bg-gray-200 rounded-xl flex-1"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-[#F8F5EF] py-20">

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-14"
                >
                    <h1 className="text-5xl font-bold text-[#3B2A1A]">
                        Explore Companies
                    </h1>

                    <p className="text-[#8A7356] mt-4 max-w-2xl mx-auto">
                        Browse verified companies and discover
                        your next opportunity.
                    </p>
                </motion.div>

                {/* Search + Filters */}
                <div className="bg-white rounded-3xl border border-[#E5D5B8] p-6 mb-10 shadow-sm">

                    <div className="grid lg:grid-cols-3 gap-4">

                        <div className="relative">
                            <FiSearch className="absolute left-4 top-4 text-[#C8932E]" />

                            <input
                                type="text"
                                placeholder="Search company..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                                className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E5D5B8] focus:outline-none focus:ring-2 focus:ring-[#D4A64F]"
                            />
                        </div>

                        <select
                            value={industry}
                            onChange={(e) =>
                                setIndustry(e.target.value)
                            }
                            className="rounded-xl border border-[#E5D5B8] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A64F]"
                        >
                            {industries.map((item) => (
                                <option key={item}>
                                    {item}
                                </option>
                            ))}
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) =>
                                setSortBy(e.target.value)
                            }
                            className="rounded-xl border border-[#E5D5B8] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A64F]"
                        >
                            <option>Newest</option>
                            <option>Oldest</option>
                            <option>A-Z</option>
                        </select>

                    </div>

                    <p className="mt-5 text-[#8A7356]">
                        Showing
                        <span className="font-bold text-[#C8932E]">
                            {" "}
                            {filteredCompanies.length}{" "}
                        </span>
                        companies
                    </p>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCompanies.length === 0 ? (
                        <div className="col-span-full text-center py-20">
                            <h2 className="text-3xl font-bold text-[#3B2A1A]">
                                No Companies Found 😔
                            </h2>

                            <p className="text-[#8A7356] mt-3">
                                Try searching with another keyword.
                            </p>
                        </div>
                    ) : (
                        filteredCompanies.map((company, index) => (
                            <motion.div
                                key={company._id}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.08,
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                }}
                                className="bg-white rounded-3xl border border-[#E5D5B8] p-6 shadow-sm hover:shadow-xl transition-all flex flex-col"
                            >
                                {/* Header */}
                                <div className="flex justify-between items-start">

                                    <div className="flex gap-4">

                                        <Image
                                            src={
                                                company.logo ||
                                                "/company-placeholder.png"
                                            }
                                            alt={company.companyName}
                                            width={60}
                                            height={60}
                                            className="rounded-2xl border bg-gray-100 object-cover"
                                            unoptimized
                                        />

                                        <div>

                                            <h2 className="font-bold text-xl text-[#3B2A1A]">
                                                {company.companyName}
                                            </h2>

                                            <p className="text-sm text-[#8A7356] mt-1">
                                                {company.industry}
                                            </p>

                                        </div>

                                    </div>

                                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                                        Approved
                                    </span>

                                </div>

                                {/* Description */}

                                <p className="text-[#6B5B45] text-sm leading-7 mt-5 flex-grow">
                                    {company.description?.length > 110
                                        ? company.description.slice(0, 110) + "..."
                                        : company.description ||
                                        "No description available."}
                                </p>

                                {/* Info */}

                                <div className="space-y-3 mt-6">

                                    <div className="flex items-center gap-2 text-sm text-[#6B5B45]">
                                        <FiUsers className="text-[#C8932E]" />
                                        <span>{company.companySize} Employees</span>
                                    </div>

                                    <div className="flex items-center gap-2 text-sm text-[#6B5B45]">
                                        <FiCalendar className="text-[#C8932E]" />
                                        <span>
                                            Founded {company.foundedYear}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between border-t pt-4 border-[#F3E5C9]">

                                        <span className="text-sm text-[#6B5B45]">
                                            💼 Jobs Posted
                                        </span>

                                        <span className="font-semibold text-[#D4A64F]">
                                            {company.jobsPosted}
                                        </span>

                                    </div>

                                </div>

                                {/* Buttons */}

                                <div className="mt-8 flex gap-3">

                                    {company.website?.trim() ? (
                                        <a
                                            href={company.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex justify-center items-center gap-2 border border-[#D4A64F] rounded-xl py-3 text-[#C8932E] font-medium hover:bg-[#D4A64F] hover:text-white transition"
                                        >
                                            <FiGlobe />
                                            Website
                                        </a>
                                    ) : (
                                        <button
                                            disabled
                                            className="flex-1 rounded-xl py-3 border text-gray-400 cursor-not-allowed"
                                        >
                                            No Website
                                        </button>
                                    )}

                                    <Link
                                        href={`/companies/${company._id}`}
                                        className="flex-1 flex justify-center items-center gap-2 bg-[#D4A64F] hover:bg-[#C8932E] text-white rounded-xl py-3 font-medium transition"
                                    >
                                        Details
                                        <FiArrowRight />
                                    </Link>

                                </div>

                            </motion.div>
                        ))
                    )}

                </div>
        </section>
    );
}