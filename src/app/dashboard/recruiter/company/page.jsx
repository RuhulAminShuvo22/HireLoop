"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";

export default function CompanyPage() {
  const { data: session } = useSession();

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:5000/companies");
        const data = await res.json();

        // শুধু current recruiter এর company filter
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

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white p-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">
            My Companies
          </h1>
          <p className="text-gray-400 text-sm">
            Only companies you created
          </p>
        </div>

        <Link
          href="/dashboard/recruiter/company/register"
          className="bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition"
        >
          + Register Company
        </Link>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-gray-400">Loading companies...</p>
      )}

      {/* Empty state */}
      {!loading && companies.length === 0 && (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-lg">No companies found 😢</p>
          <p className="text-sm mt-2">
            Create your first company to get started
          </p>
        </div>
      )}

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company._id}
            className="bg-[#1A1A1A] border border-gray-800 rounded-2xl p-5 hover:border-gray-600 transition"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={company.logo}
                  alt={company.companyName}
                  className="h-10 w-10 rounded-lg object-cover bg-white"
                />

                <div>
                  <h2 className="font-semibold text-white">
                    {company.companyName}
                  </h2>
                  <p className="text-xs text-gray-400">
                    {company.industry}
                  </p>
                </div>
              </div>

              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  company.isApproved
                    ? "bg-green-600/20 text-green-400"
                    : "bg-yellow-600/20 text-yellow-400"
                }`}
              >
                {company.isApproved ? "Approved" : "Pending"}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-400 mt-3 line-clamp-3">
              {company.description}
            </p>

            {/* Info */}
            <div className="mt-4 text-xs text-gray-400 flex justify-between">
              <span>📍 {company.industry}</span>
              <span>👥 {company.companySize}</span>
            </div>

            {/* Website */}
            {company.website && (
              <a
                href={company.website}
                target="_blank"
                className="block mt-4 text-sm text-blue-400 hover:underline"
              >
                Visit Website →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}