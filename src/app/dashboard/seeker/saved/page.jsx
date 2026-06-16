"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiBookmark, FiTrash2, FiMapPin, FiBriefcase } from "react-icons/fi";

export default function SavedJobsPage() {
  const [savedJobs, setSavedJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Demo fetch (replace with real API later)
  useEffect(() => {
    const fetchSavedJobs = async () => {
      try {
        setLoading(true);

        // 🔥 Replace this with real API later
        const mockData = [
          {
            _id: "1",
            title: "Frontend Developer",
            company: "Google",
            location: "Remote",
            type: "Full Time",
            salary: "$80k - $120k",
          },
          {
            _id: "2",
            title: "Backend Engineer",
            company: "Amazon",
            location: "USA",
            type: "Hybrid",
            salary: "$90k - $140k",
          },
        ];

        setSavedJobs(mockData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedJobs();
  }, []);

  // remove handler (frontend only)
  const handleRemove = (id) => {
    setSavedJobs((prev) => prev.filter((job) => job._id !== id));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#F8F5EF]">
        <div className="w-12 h-12 border-4 border-[#D4A64F] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5EF] p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-[#3B2A1A] flex items-center gap-2">
          <FiBookmark className="text-[#D4A64F]" />
          Saved Jobs
        </h1>
        <p className="text-[#7A6A55] mt-2">
          Jobs you bookmarked for later
        </p>
      </motion.div>

      {/* Empty State */}
      {savedJobs.length === 0 && (
        <div className="text-center mt-20">
          <h2 className="text-2xl font-semibold text-[#3B2A1A]">
            No saved jobs yet 😢
          </h2>
          <p className="text-[#7A6A55] mt-2">
            Start saving jobs you like
          </p>
        </div>
      )}

      {/* Jobs Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {savedJobs.map((job, index) => (
          <motion.div
            key={job._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-[#E5D5B8] rounded-2xl p-6 shadow-sm hover:shadow-xl transition"
          >
            {/* Title */}
            <h2 className="text-xl font-bold text-[#3B2A1A]">
              {job.title}
            </h2>

            <p className="text-sm text-[#7A6A55] mt-1">
              {job.company}
            </p>

            {/* Info */}
            <div className="mt-4 space-y-2 text-sm text-[#6B5B45]">
              <div className="flex items-center gap-2">
                <FiMapPin className="text-[#D4A64F]" />
                {job.location}
              </div>

              <div className="flex items-center gap-2">
                <FiBriefcase className="text-[#D4A64F]" />
                {job.type}
              </div>

              <p className="font-semibold text-[#C8932E]">
                {job.salary}
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-[#D4A64F] text-white py-2 rounded-xl hover:bg-[#C8932E] transition">
                Apply
              </button>

              <button
                onClick={() => handleRemove(job._id)}
                className="px-4 py-2 border border-red-400 text-red-500 rounded-xl hover:bg-red-50 transition"
              >
                <FiTrash2 />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}