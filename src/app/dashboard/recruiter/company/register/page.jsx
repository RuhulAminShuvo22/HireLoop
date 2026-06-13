"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useSession } from "@/lib/auth-client";

import CompanyInfoSection from "@/components/dashboard/company/CompanyInfoSection";
import CompanyContactSection from "@/components/dashboard/company/CompanyContactSection";
import CompanyAboutSection from "@/components/dashboard/company/CompanyAboutSection";
import CompanySocialSection from "@/components/dashboard/company/CompanySocialSection";
import RegisterCompanyButton from "@/components/dashboard/company/RegisterCompanyButton";

export default function CompanyRegisterPage() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    const company = Object.fromEntries(formData.entries());

    // Auto add recruiter email
    company.ownerEmail = session?.user?.email;

    // Default values
    company.isApproved = false;
    company.jobsPosted = 0;
    company.jobLimit = 3;
    company.plan = "Free";

    try {
      const res = await fetch("http://localhost:5000/companies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(company),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "Failed to register company");
        return;
      }

      toast.success("🎉 Company Registered Successfully!");

      form.reset();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-7xl mx-auto px-8 py-10 space-y-8"
    >
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#3B2F1E]">
          Register Your Company
        </h1>

        <p className="mt-2 text-[#8B6F47]">
          Create your company profile to start posting jobs.
        </p>
      </div>

      {/* Sections */}
      <CompanyInfoSection />
      <CompanyContactSection />
      <CompanyAboutSection />
      <CompanySocialSection />

      {/* Submit Button */}
      <RegisterCompanyButton loading={loading} />
    </form>
  );
}