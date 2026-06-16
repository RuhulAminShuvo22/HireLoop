"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "@/lib/auth-client";
import { FiFileText, FiEye } from "react-icons/fi";
import Link from "next/link";

export default function ApplicationsPage() {
  const { data: session } = useSession();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:5000/applications");
        const data = await res.json();

        // শুধু logged-in user এর applications
        const filtered = data.applications.filter(
          (app) => app.email === session?.user?.email
        );

        setApplications(filtered);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.email) {
      fetchApplications();
    }
  }, [session]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-10 h-10 border-4 border-[#D4A64F] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-[#F8F5EF]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-[#3B2A1A]">
          My Applications
        </h1>
        <p className="text-[#7A6A55] mt-2">
          Track all your job applications in one place
        </p>
      </motion.div>

      {/* Empty State */}
      {applications.length === 0 ? (
        <div className="text-center mt-20">
          <FiFileText size={50} className="mx-auto text-[#D4A64F]" />
          <h2 className="text-2xl font-semibold mt-4 text-[#3B2A1A]">
            No Applications Found
          </h2>
          <p className="text-[#7A6A55] mt-2">
            Start applying to jobs to see them here
          </p>

          <Link
            href="/dashboard/seeker/jobs"
            className="inline-block mt-6 bg-[#D4A64F] text-white px-6 py-3 rounded-xl font-semibold"
          >
            Browse Jobs
          </Link>
        </div>
      ) : (
        <div className="grid gap-4">
          {applications.map((app, index) => (
            <motion.div
              key={app._id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-[#E5D5B8] rounded-2xl p-5 flex items-center justify-between"
            >
              {/* Left */}
              <div>
                <h2 className="text-lg font-semibold text-[#3B2A1A]">
                  {app.jobTitle}
                </h2>

                <p className="text-sm text-[#7A6A55]">
                  {app.companyName}
                </p>

                <p className="text-xs text-[#8A7356] mt-1">
                  Applied on:{" "}
                  {new Date(app.createdAt).toLocaleDateString()}
                </p>
              </div>

              {/* Status */}
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  app.status === "Applied"
                    ? "bg-blue-100 text-blue-700"
                    : app.status === "Under Review"
                    ? "bg-yellow-100 text-yellow-700"
                    : app.status === "Shortlisted"
                    ? "bg-green-100 text-green-700"
                    : app.status === "Rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                {app.status}
              </span>

              {/* Action */}
              <Link
                href={`/jobs/${app.jobId}`}
                className="flex items-center gap-2 text-[#C8932E] font-medium hover:underline"
              >
                <FiEye />
                View
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}