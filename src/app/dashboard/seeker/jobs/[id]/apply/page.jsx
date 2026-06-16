"use client";

import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function ApplyJobPage({ params }) {
  const { id } = use(params);
  const { data: session } = useSession();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    coverLetter: "",
    resume: "",
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`http://localhost:5000/jobs/${id}`);
        const data = await res.json();

        setJob(data);

        setFormData((prev) => ({
          ...prev,
          email: session?.user?.email || "",
        }));
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id, session]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!job) {
      toast.error("Job data not loaded");
      return;
    }

    const application = {
      jobId: job._id,
      companyId: job.companyId,
      recruiterEmail: job.recruiterEmail,

      jobTitle: job.title,
      jobCategory: job.category,
      jobLocation: `${job.city}, ${job.country}`,

      applicantEmail: session?.user?.email,
      applicantName: formData.fullName,
      phone: formData.phone,

      portfolio: formData.portfolio,
      resume: formData.resume,
      coverLetter: formData.coverLetter,

      status: "pending",
      appliedAt: new Date(),
    };

    try {
      const res = await fetch("http://localhost:5000/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(application),
      });

      const data = await res.json();

      if (res.ok && data.insertedId) {
        toast.success("Application submitted successfully!");

        setFormData({
          fullName: "",
          email: session?.user?.email || "",
          phone: "",
          portfolio: "",
          coverLetter: "",
          resume: "",
        });
      } else {
        toast.error(data.message || "Failed to apply");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error occurred");
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Job not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5EF] p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-4xl rounded-3xl border border-[#E5D5B8] bg-white p-8"
      >
        <h1 className="mb-2 text-3xl font-bold text-[#3B2A1A]">
          Apply for {job.title}
        </h1>

        <p className="mb-8 text-[#8A7356]">
          {job.city}, {job.country}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full rounded-xl border bg-gray-100 p-3"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <input
            type="url"
            name="portfolio"
            placeholder="Portfolio / LinkedIn URL"
            value={formData.portfolio}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <input
            type="url"
            name="resume"
            placeholder="Resume URL (Google Drive)"
            required
            value={formData.resume}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <textarea
            rows={6}
            name="coverLetter"
            placeholder="Cover Letter"
            value={formData.coverLetter}
            onChange={handleChange}
            className="w-full rounded-xl border p-3"
          />

          <button
            type="submit"
            className="rounded-xl bg-[#D4A64F] px-6 py-3 text-white transition hover:bg-[#C8932E]"
          >
            Submit Application
          </button>
        </form>
      </motion.div>
    </div>
  );
}