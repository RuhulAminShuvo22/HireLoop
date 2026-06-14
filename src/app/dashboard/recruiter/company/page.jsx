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

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:5000/companies");
        const data = await res.json();

        const filtered = data.companies.filter(
          (c) => c.ownerEmail === session?.user?.email
        );

        setCompanies(filtered);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.email) {
      fetchCompanies();
    }
  }, [session]);

  // Search Filter
  const filteredCompanies = companies.filter((company) =>
    company.companyName
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8F5EF] rounded-3xl border border-[#E5D5B8] p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold text-[#3B2A1A]">
            My Companies
          </h1>

          <p className="text-[#8A7356] text-sm mt-1">
            Only companies you created
          </p>
        </div>

        <Link
          href="/dashboard/recruiter/company/register"
          className="bg-[#D4A64F] text-white px-5 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          + Register Company
        </Link>
      </motion.div>

      {/* Search Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <input
          type="text"
          placeholder="🔍 Search company by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-[400px] px-4 py-3 bg-white border border-[#E5D5B8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A64F] text-[#3B2A1A]"
        />
      </motion.div>

      {/* Result Count */}
      {!loading && (
        <p className="text-sm text-[#8A7356] mb-6">
          Found {filteredCompanies.length} compan
          {filteredCompanies.length === 1 ? "y" : "ies"}
        </p>
      )}

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-20">
          <div className="w-10 h-10 border-4 border-[#D4A64F] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredCompanies.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-24"
        >
          <h3 className="text-2xl font-semibold text-[#3B2A1A]">
            No companies found 😢
          </h3>

          <p className="text-[#8A7356] mt-3">
            {searchTerm
              ? "No company matches your search."
              : "Create your first company to get started."}
          </p>
        </motion.div>
      )}

      {/* Companies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            className="bg-white border border-[#E5D5B8] rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={company.logo}
                  alt={company.companyName}
                  className="h-12 w-12 rounded-xl object-cover bg-gray-100 border"
                />

                <div>
                  <h2 className="font-semibold text-lg text-[#3B2A1A]">
                    {company.companyName}
                  </h2>

                  <p className="text-xs text-[#8A7356]">
                    {company.industry}
                  </p>
                </div>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  company.isApproved
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {company.isApproved ? "Approved" : "Pending"}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[#6B5B45] mt-4 line-clamp-3 leading-relaxed">
              {company.description}
            </p>

            {/* Info */}
            <div className="mt-5 flex justify-between text-sm text-[#6B5B45]">
              <span>📍 {company.industry}</span>
              <span>👥 {company.companySize}</span>
            </div>

            {/* Website */}
            {company.website && (
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-5 font-medium text-[#C8932E] hover:text-[#A87416] transition"
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