"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FilterSidebar from "@/components/FilterSidebar";

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.08,
            duration: 0.5,
        },
    }),
};

export default function JobsPage() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] =
        useState("");
    const [categoryFilter, setCategoryFilter] =
        useState("All");

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                setLoading(true);


                const res = await fetch(
                    "http://localhost:5000/jobs"
                );

                const data = await res.json();

                setJobs(
                    Array.isArray(data)
                        ? data
                        : data.jobs || []
                );
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();


    }, []);

    const categories = [
        "All",
        ...new Set(
            jobs
                .map((job) => job.category)
                .filter(Boolean)
        ),
    ];

    const filteredJobs = jobs.filter(
        (job) => {
            const matchesSearch =
                job.title
                    ?.toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    ) ||
                job.category
                    ?.toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    );


            const matchesCategory =
                categoryFilter === "All" ||
                job.category === categoryFilter;

            return (
                matchesSearch &&
                matchesCategory
            );
        }


    );

    const remoteJobs = jobs.filter(
        (job) => job.isRemote
    ).length;

    const activeJobs = jobs.filter(
        (job) => job.status === "active"
    ).length;

    const averageSalary =
        jobs.length > 0
            ? Math.round(
                jobs.reduce(
                    (sum, job) =>
                        sum +
                        ((job.salaryMin || 0) +
                            (job.salaryMax || 0)) /
                        2,
                    0
                ) / jobs.length
            )
            : 0;

    return (<div className="min-h-screen bg-[#F5EFE4] py-10 px-6"> <div className="max-w-7xl mx-auto">


        {/* Search Section */}
        <motion.div
            initial={{
                opacity: 0,
                y: -20,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            className="
        bg-[#FFFDF8]
        border
        border-[#E7DCC7]
        rounded-3xl
        p-5
        mb-8
        shadow-sm
      "
        >
            <div className="flex flex-col lg:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Search by job title..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                    className="
            flex-1
            bg-white
            border
            border-[#E7DCC7]
            rounded-xl
            px-5
            py-4
            outline-none
            text-[#2B2111]
          "
                />

                <button
                    className="
            px-8
            py-4
            rounded-xl
            bg-[#D4A64F]
            text-white
            font-semibold
            hover:opacity-90
            transition
          "
                >
                    Search Jobs
                </button>
            </div>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-6">

            <FilterSidebar
                categories={categories}
                categoryFilter={categoryFilter}
                setCategoryFilter={
                    setCategoryFilter
                }
                setSearchTerm={setSearchTerm}
                jobs={jobs}
                activeJobs={activeJobs}
                remoteJobs={remoteJobs}
                averageSalary={averageSalary}
            />

            <div>
                <h2 className="text-3xl font-bold text-[#2B2111] mb-6">
                    Found {filteredJobs.length} Jobs
                </h2>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div
                            className="
                w-10
                h-10
                border-4
                border-[#D4A64F]
                border-t-transparent
                rounded-full
                animate-spin
              "
                        />
                    </div>
                ) : (
                    <div className="space-y-5">
                        {filteredJobs.map(
                            (job, index) => (
                                <motion.div
                                    key={
                                        job._id ||
                                        index
                                    }
                                    custom={index}
                                    variants={fadeUp}
                                    initial="hidden"
                                    animate="visible"
                                    className="
                    bg-[#FFFDF8]
                    border
                    border-[#E7DCC7]
                    rounded-3xl
                    p-6
                    shadow-sm
                  "
                                >
                                    <h3 className="text-xl font-bold text-[#2B2111]">
                                        {job.title}
                                    </h3>

                                    <p className="text-[#6B5B45] mt-2">
                                        {job.category} •{" "}
                                        {job.city}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="bg-[#F5EFE4] px-3 py-2 rounded-xl">
                                            💰 {job.currency}
                                            {job.salaryMin} -{" "}
                                            {job.salaryMax}
                                        </span>

                                        <span className="bg-[#F5EFE4] px-3 py-2 rounded-xl">
                                            💼 {job.type}
                                        </span>

                                        {job.isRemote && (
                                            <span className="bg-green-100 text-green-700 px-3 py-2 rounded-xl">
                                                Remote
                                            </span>
                                        )}
                                    </div>
                                </motion.div>
                            )
                        )}
                    </div>
                )}
            </div>
        </div>
    </div>
    </div>


    );
}
