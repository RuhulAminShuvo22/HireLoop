"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    FiMapPin,
    FiClock,
    FiBookmark,
    FiSearch,
} from "react-icons/fi";

export default function SeekerJobsPage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);

                const res = await fetch("http://localhost:5000/jobs");
                const data = await res.json();

                console.log("Jobs API Response:", data);

                setJobs(Array.isArray(data) ? data : []);
            } catch (error) {
                console.log("Jobs Fetch Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter((job) =>
        job.title?.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-[#F8F5EF] p-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
            >
                <div>
                    <h1 className="text-3xl font-bold text-[#3B2A1A]">
                        Browse Jobs
                    </h1>

                    <p className="text-[#7A6A55]">
                        Find your dream job and apply instantly
                    </p>
                </div>

                {/* Search */}
                <div className="relative">
                    <FiSearch className="absolute left-3 top-3 text-[#8A7356]" />

                    <input
                        type="text"
                        placeholder="Search jobs..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="pl-10 pr-4 py-2 rounded-xl border border-[#E5D5B8] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4A64F]"
                    />
                </div>
            </motion.div>

            {/* Loading */}
            {loading && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div
                            key={i}
                            className="h-40 bg-white rounded-2xl animate-pulse border"
                        />
                    ))}
                </div>
            )}

            {/* Jobs Grid */}
            {!loading && filteredJobs.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job, index) => (
                        <motion.div
                            key={job._id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white rounded-2xl border border-[#E5D5B8] p-6 shadow-sm hover:shadow-lg transition"
                        >
                            {/* Company */}
                            <div className="flex items-center gap-3 mb-4">
                                <Image
                                    src="/company.png"
                                    alt="company"
                                    width={45}
                                    height={45}
                                    className="rounded-xl"
                                />

                                <div>
                                    <h3 className="font-semibold text-[#3B2A1A]">
                                        {job.title}
                                    </h3>

                                    <p className="text-sm text-[#7A6A55]">
                                        {job.category}
                                    </p>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="flex items-center gap-4 text-sm text-[#7A6A55] mb-3">
                                <span className="flex items-center gap-1">
                                    <FiMapPin />
                                    {job.city}, {job.country}
                                </span>

                                <span className="flex items-center gap-1">
                                    <FiClock />
                                    {job.type}
                                </span>
                            </div>

                            {/* Requirements */}
                            <p className="text-sm text-[#6B5B45] line-clamp-2 mb-4">
                                {job.requirements}
                            </p>

                            {/* Salary */}
                            <p className="font-semibold text-[#C8932E] mb-4">
                                {job.salaryMin} - {job.salaryMax} {job.currency}
                            </p>

                            {/* Actions */}
                            {/* Actions */}
                            <div className="flex items-center justify-between">
                                <Link
                                    href={`/dashboard/seeker/jobs/${job._id}`}
                                    className="text-[#C8932E] font-semibold hover:underline"
                                >
                                    View Details
                                </Link>

                                <button className="flex items-center gap-1 text-sm text-[#7A6A55] hover:text-[#C8932E]">
                                    <FiBookmark />
                                    Save
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Empty */}
            {!loading && filteredJobs.length === 0 && (
                <div className="text-center mt-20">
                    <h2 className="text-2xl font-bold text-[#3B2A1A]">
                        No Jobs Found 😢
                    </h2>

                    <p className="text-[#7A6A55] mt-2">
                        Try searching with different keywords
                    </p>
                </div>
            )}
        </div>
    );
}