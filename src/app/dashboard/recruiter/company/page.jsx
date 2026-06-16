"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSession } from "@/lib/auth-client";

export default function CompanyPage() {
  const { data: session } = useSession();

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("All");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:5000/companies");

        if (!res.ok) {
          throw new Error("Failed to fetch companies");
        }

        const data = await res.json();

        console.log("Session Email:", session?.user?.email);
        console.log("All Companies:", data.companies);

        const filtered = data.companies.filter(
          (company) =>
            company.ownerEmail?.toLowerCase() ===
            session?.user?.email?.toLowerCase()
        );

        console.log("Filtered Companies:", filtered);

        setCompanies(filtered);
      } catch (error) {
        console.error("Company Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.email) {
      fetchCompanies();
    }
  }, [session]);

  const industries = [
    "All",
    ...new Set(companies.map((company) => company.industry)),
  ];

  const filteredCompanies = companies.filter((company) => {
    const matchesSearch = company.companyName
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesIndustry =
      industryFilter === "All" ||
      company.industry === industryFilter;

    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="min-h-screen rounded-3xl border border-[#E5D5B8] bg-[#F8F5EF] p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-[#3B2A1A]">
            My Companies
          </h1>

          <p className="mt-1 text-sm text-[#8A7356]">
            Only companies you created
          </p>
        </div>

        <Link
          href="/dashboard/recruiter/company/register"
          className="rounded-xl bg-[#D4A64F] px-5 py-3 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          + Register Company
        </Link>
      </motion.div>

      {/* Search & Filter */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="🔍 Search company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-xl border border-[#E5D5B8] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A64F] md:w-[350px]"
        />

        <select
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
          className="rounded-xl border border-[#E5D5B8] bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#D4A64F]"
        >
          {industries.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
      </div>

      {/* Count */}
      {!loading && (
        <p className="mb-6 text-sm text-[#8A7356]">
          Found {filteredCompanies.length} compan
          {filteredCompanies.length === 1 ? "y" : "ies"}
        </p>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#D4A64F] border-t-transparent"></div>
        </div>
      )}

      {/* Empty */}
      {!loading && filteredCompanies.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-semibold text-[#3B2A1A]">
            No companies found 😢
          </h3>

          <p className="mt-3 text-[#8A7356]">
            {searchTerm
              ? "No company matches your search."
              : "Create your first company to get started."}
          </p>
        </motion.div>
      )}

      {/* Companies Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCompanies.map((company, index) => (
          <motion.div
            key={company._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="rounded-2xl border border-[#E5D5B8] bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={
                    company.logo?.startsWith("http")
                      ? company.logo
                      : "/company-placeholder.png"
                  }
                  alt={company.companyName}
                  className="h-14 w-14 rounded-xl border bg-gray-100 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      "/company-placeholder.png";
                  }}
                />

                <div>
                  <h2 className="text-lg font-semibold text-[#3B2A1A]">
                    {company.companyName}
                  </h2>

                  <p className="text-xs text-[#8A7356]">
                    {company.industry}
                  </p>
                </div>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  company.isApproved
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {company.isApproved
                  ? "Approved"
                  : "Pending"}
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-[#6B5B45]">
              {company.description}
            </p>

            {/* Info */}
            <div className="mt-5 flex justify-between text-sm text-[#6B5B45]">
              <span>🏢 {company.industry}</span>
              <span>👥 {company.companySize}</span>
            </div>

            {/* Website */}
            {company.website && (
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block font-medium text-[#C8932E] transition hover:text-[#A87416]"
              >
                Visit Website →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}