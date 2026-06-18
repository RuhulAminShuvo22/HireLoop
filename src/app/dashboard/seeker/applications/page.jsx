
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "@/lib/auth-client";
import {
  FiFileText,
  FiEye,
  FiMapPin,
  FiCalendar,
  FiUser,
} from "react-icons/fi";
import Link from "next/link";

export default function ApplicationsPage() {
  const { data: session } = useSession();

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const applicationsPerPage = 6;

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          "http://localhost:5000/applications"
        );

        const data = await res.json();

        const filtered = data.applications.filter(
          (app) =>
            app.applicantEmail ===
            session?.user?.email
        );

        setApplications(filtered);
      } catch (error) {
        console.log(
          "Applications fetch error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.email) {
      fetchApplications();
    }
  }, [session]);

  // Pagination Logic
  const indexOfLastApplication =
    currentPage * applicationsPerPage;

  const indexOfFirstApplication =
    indexOfLastApplication -
    applicationsPerPage;

  const currentApplications =
    applications.slice(
      indexOfFirstApplication,
      indexOfLastApplication
    );

  const totalPages = Math.ceil(
    applications.length / applicationsPerPage
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F8F5EF]">
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
        className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-[#3B2A1A]">
            My Applications
          </h1>

          <p className="text-[#7A6A55] mt-2">
            Track all your job applications in one place
          </p>
        </div>

        <Link
          href="/dashboard/seeker/jobs"
          className="bg-[#D4A64F] hover:bg-[#C8932E] text-white px-6 py-3 rounded-xl font-semibold text-center"
        >
          Browse Jobs
        </Link>
      </motion.div>

      {/* Empty State */}
      {applications.length === 0 ? (
        <div className="text-center mt-20">
          <FiFileText
            size={50}
            className="mx-auto text-[#D4A64F]"
          />

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
        <>
          {/* Cards */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {currentApplications.map(
              (app, index) => (
                <motion.div
                  key={app._id || index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                  }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl border border-[#E5D5B8] p-6 shadow-sm"
                >
                  {/* Top */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-bold text-[#3B2A1A]">
                        {app.jobTitle}
                      </h2>

                      <p className="text-sm text-[#7A6A55] mt-1">
                        {app.jobCategory}
                      </p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${app.status === "selected"
                          ? "bg-green-100 text-green-700"
                          : app.status ===
                            "pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : app.status ===
                              "rejected"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                        }`}
                    >
                      {app.status}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="mt-5 space-y-3 text-sm">
                    <div className="flex items-center gap-2 text-[#7A6A55]">
                      <FiMapPin />
                      <span>
                        {app.jobLocation}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[#7A6A55]">
                      <FiUser />
                      <span>
                        {app.recruiterEmail}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-[#7A6A55]">
                      <FiCalendar />
                      <span>
                        {new Date(
                          app.appliedAt
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div className="mt-4">
                    <p className="text-xs uppercase font-semibold text-[#C8932E] mb-1">
                      Cover Letter
                    </p>

                    <p className="text-sm text-[#7A6A55] line-clamp-3">
                      {app.coverLetter}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex gap-3">
                    <Link
                      href={`/jobs/${app.jobId}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#D4A64F] text-white py-2 rounded-xl font-medium hover:bg-[#C8932E]"
                    >
                      <FiEye />
                      View Job
                    </Link>

                    <a
                      href={app.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-[#D4A64F] rounded-xl text-[#C8932E] font-medium hover:bg-[#FFF8EA]"
                    >
                      Resume
                    </a>
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.max(prev - 1, 1)
                  )
                }
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-[#D4A64F] disabled:opacity-50"
              >
                Previous
              </button>

              {[...Array(totalPages)].map(
                (_, i) => (
                  <button
                    key={i}
                    onClick={() =>
                      setCurrentPage(i + 1)
                    }
                    className={`w-10 h-10 rounded-lg font-semibold ${currentPage ===
                        i + 1
                        ? "bg-[#D4A64F] text-white"
                        : "bg-white border border-[#D4A64F]"
                      }`}
                  >
                    {i + 1}
                  </button>
                )
              )}

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(
                      prev + 1,
                      totalPages
                    )
                  )
                }
                disabled={
                  currentPage === totalPages
                }
                className="px-4 py-2 rounded-lg border border-[#D4A64F] disabled:opacity-50"
              >
                Next
              </button>

            </div>
          )}
        </>
      )}
    </div>
  );
}

