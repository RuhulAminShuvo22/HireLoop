"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function JobDetailsPage({ params }) {
  const { id } = use(params);

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`http://localhost:5000/jobs/${id}`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch job");
        }

        setJob(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F5EF]">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-[#D4A64F] border-t-transparent" />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Job not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5EF] p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E5D5B8] p-8 shadow-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-2 text-4xl font-bold text-[#3B2A1A]"
        >
          {job.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-[#7A6A55]"
        >
          {job.category}
        </motion.p>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Job Type",
              value: job.type,
            },
            {
              title: "Location",
              value: `${job.city}, ${job.country}`,
            },
            {
              title: "Salary",
              value: `${job.salaryMin} - ${job.salaryMax} ${job.currency}`,
            },
            {
              title: "Deadline",
              value: job.deadline,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2 + index * 0.1,
              }}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              className="cursor-pointer rounded-xl bg-[#F8F5EF] p-4"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p>{item.value}</p>
            </motion.div>
          ))}
        </div>

        {[
          {
            title: "Responsibilities",
            content: job.responsibilities,
          },
          {
            title: "Requirements",
            content: job.requirements,
          },
          {
            title: "Benefits",
            content: job.benefits,
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5 + index * 0.15,
            }}
            className="mb-8"
          >
            <h2 className="mb-3 text-2xl font-bold">
              {section.title}
            </h2>
            <p>{section.content}</p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-xl bg-[#D4A64F] px-6 py-3 text-white hover:bg-[#C8932E]"
          >
            Apply Now
          </motion.button>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/dashboard/seeker/jobs"
              className="inline-block rounded-xl border border-[#D4A64F] px-6 py-3 text-[#D4A64F]"
            >
              Back
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}