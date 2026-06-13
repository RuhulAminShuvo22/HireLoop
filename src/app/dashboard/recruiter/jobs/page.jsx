"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import {
  Briefcase,
  MapPin,
  Plus,
  Users,
} from "lucide-react";

const RecruiterJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {
      setLoading(true);

      // Get Session
      const session = await authClient.getSession();

      console.log("Session =>", session);

      const email = session?.data?.user?.email;

      console.log("Recruiter Email =>", email);

      if (!email) {
        console.log("No email found");
        return;
      }

      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/recruiter/jobs/${email}`;

      console.log("Fetching =>", apiUrl);

      const res = await fetch(apiUrl);

      const data = await res.json();

      console.log("API Response =>", data);

      if (data.success) {
        setJobs(data.jobs || []);
      } else {
        setJobs([]);
      }
    } catch (error) {
      console.error("Load Jobs Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold text-[#3B2F1E]">
            My Jobs
          </h1>

          <p className="mt-1 text-[#8B6F47]">
            Manage all your posted jobs
          </p>
        </div>

        <Link
          href="/dashboard/recruiter/jobs/new"
          className="flex items-center gap-2 rounded-xl bg-[#D4A95A] px-5 py-3 font-semibold text-white hover:bg-[#c8973d]"
        >
          <Plus size={18} />
          Create Job
        </Link>

      </div>

      {/* Empty */}

      {jobs.length === 0 ? (
        <div className="rounded-2xl bg-white p-12 text-center shadow">

          <h2 className="text-2xl font-bold">
            No Jobs Found
          </h2>

          <p className="mt-3 text-gray-500">
            You have not created any jobs yet.
          </p>

          <Link
            href="/dashboard/recruiter/jobs/new"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#D4A95A] px-5 py-3 font-semibold text-white hover:bg-[#c8973d]"
          >
            <Plus size={18} />
            Create Your First Job
          </Link>

        </div>
      ) : (

        <div className="grid gap-6">

          {jobs.map((job) => (

            <div
              key={job._id}
              className="rounded-2xl border border-[#E5D8C5] bg-white p-6 shadow-sm"
            >

              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-[#3B2F1E]">
                    {job.title}
                  </h2>

                  <p className="mt-1 text-[#8B6F47]">
                    {job.company?.companyName}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">

                    <span className="flex items-center gap-2">
                      <Briefcase size={16} />
                      {job.type}
                    </span>

                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.city}, {job.country}
                    </span>

                    <span>
                      ${job.salaryMin} - ${job.salaryMax} {job.currency}
                    </span>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
                      {job.status}
                    </span>

                  </div>

                </div>

                <div className="flex flex-wrap gap-3">

                  <button className="rounded-xl border px-4 py-2 hover:bg-gray-100">
                    Edit
                  </button>

                  <button className="rounded-xl border border-red-300 px-4 py-2 text-red-600 hover:bg-red-50">
                    Delete
                  </button>

                  <button className="flex items-center gap-2 rounded-xl bg-[#D4A95A] px-4 py-2 text-white hover:bg-[#c8973d]">
                    <Users size={16} />
                    Applicants ({job.applicants})
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}
    </div>
  );
};

export default RecruiterJobs;