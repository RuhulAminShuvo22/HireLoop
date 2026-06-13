

"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useSession } from "@/lib/auth-client";

import JobInfoSection from "@/components/dashboard/jobs/JobInfoSection";
import JobDescriptionSection from "@/components/dashboard/jobs/JobDescriptionSection";
import CompanyCard from "@/components/dashboard/jobs/CompanyCard";
import PublishButton from "@/components/dashboard/jobs/PublishButton";

export default function NewJobPage() {
  const { data: session } = useSession();

  const [loading, setLoading] = useState(false);
  //console.log(job);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    const job = Object.fromEntries(formData.entries());

    // Checkbox
    job.isRemote = formData.get("isRemote") === "on";

    // Number
    job.salaryMin = Number(job.salaryMin);
    job.salaryMax = Number(job.salaryMax);

    // Recruiter Info
    job.recruiterEmail = session?.user?.email;

    // Temporary Company ID
    // পরে Company Registration করলে এটা automatic হবে
    job.companyId = "6848f9b8d5c6b9f4b0d12345";

    // Default Status
    job.status = "active";
    console.log(job);

    try {
      const response = await fetch("http://localhost:5000/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("🎉 Job posted successfully!");

        form.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);

      toast.error("Failed to publish job.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-7xl mx-auto px-8 py-10 space-y-8"
    >
      <div>
        <h1 className="text-4xl font-bold text-[#3B2F1E]">
          Post a New Job
        </h1>

        <p className="mt-2 text-[#8B6F47]">
          Create a new opportunity for talented professionals.
        </p>
      </div>

      <JobInfoSection />

      <JobDescriptionSection />

      <CompanyCard />

      <PublishButton
        loading={loading}
        companyApproved={true}
        canPostJob={true}
      />
    </form>
  );
}