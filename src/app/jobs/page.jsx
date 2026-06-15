"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PricePage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:5000/jobs");
        const data = await res.json();

        setJobs(Array.isArray(data) ? data : data.jobs || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const categories = [
    "All",
    ...new Set(jobs.map((job) => job.category)),
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" ||
      job.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

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
              (job.salaryMin + job.salaryMax) / 2,
            0
          ) / jobs.length
        )
      : 0;

  return (
    <div className="min-h-screen bg-[#F8F5EF] rounded-3xl border border-[#E5D5B8] p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-[#3B2A1A]">
          Job Salary Dashboard
        </h1>

        <p className="text-[#8A7356] mt-2">
          Salary & Compensation Overview
        </p>
      </motion.div>

      {/* Statistics */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white border border-[#E5D5B8] rounded-2xl p-5">
          <h3 className="text-sm text-[#8A7356]">
            Total Jobs
          </h3>
          <p className="text-3xl font-bold text-[#3B2A1A] mt-2">
            {jobs.length}
          </p>
        </div>

        <div className="bg-white border border-[#E5D5B8] rounded-2xl p-5">
          <h3 className="text-sm text-[#8A7356]">
            Active Jobs
          </h3>
          <p className="text-3xl font-bold text-green-600 mt-2">
            {activeJobs}
          </p>
        </div>

        <div className="bg-white border border-[#E5D5B8] rounded-2xl p-5">
          <h3 className="text-sm text-[#8A7356]">
            Remote Jobs
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">
            {remoteJobs}
          </p>
        </div>

        <div className="bg-white border border-[#E5D5B8] rounded-2xl p-5">
          <h3 className="text-sm text-[#8A7356]">
            Avg Salary
          </h3>
          <p className="text-3xl font-bold text-[#D4A64F] mt-2">
            ${averageSalary}
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="🔍 Search job title..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="flex-1 px-4 py-3 bg-white border border-[#E5D5B8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A64F]"
        />

        <select
          value={categoryFilter}
          onChange={(e) =>
            setCategoryFilter(e.target.value)
          }
          className="px-4 py-3 bg-white border border-[#E5D5B8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A64F]"
        >
          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            setSearchTerm("");
            setCategoryFilter("All");
          }}
          className="px-5 py-3 bg-[#D4A64F] text-white rounded-xl hover:opacity-90 transition"
        >
          Reset
        </button>
      </div>

      {/* Result Count */}
      {!loading && (
        <p className="text-sm text-[#8A7356] mb-6">
          Showing {filteredJobs.length} of{" "}
          {jobs.length} jobs
        </p>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-[#D4A64F] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Empty */}
      {!loading && filteredJobs.length === 0 && (
        <div className="text-center py-20">
          <h3 className="text-2xl font-bold text-[#3B2A1A]">
            No Jobs Found
          </h3>
        </div>
      )}

      {/* Job Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job, index) => (
          <motion.div
            key={job._id}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="bg-white border border-[#E5D5B8] rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-bold text-[#3B2A1A]">
                {job.title}
              </h2>

              {job.isRemote && (
                <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                  Remote
                </span>
              )}
            </div>

            <p className="text-[#8A7356] mt-2">
              {job.category}
            </p>

            <div className="mt-5">
              <p className="text-sm text-gray-500">
                Salary Range
              </p>

              <h3 className="text-2xl font-bold text-[#D4A64F] mt-1">
                {job.currency}{" "}
                {job.salaryMin?.toLocaleString()} -
                {job.salaryMax?.toLocaleString()}
              </h3>
            </div>

            <div className="space-y-2 mt-5 text-sm text-[#6B5B45]">
              <p>💼 {job.type}</p>

              <p>
                📍 {job.city}, {job.country}
              </p>

              <p>
                📅 Deadline:{" "}
                {new Date(
                  job.deadline
                ).toLocaleDateString()}
              </p>

              <p>👀 {job.views} Views</p>

              <p>
                📝 {job.applicants} Applicants
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-[#E5D5B8]">
              <p className="text-xs text-[#8A7356]">
                Status:
              </p>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  job.status === "active"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {job.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}