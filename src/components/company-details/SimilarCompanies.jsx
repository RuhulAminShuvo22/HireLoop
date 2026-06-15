"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SimilarCompanies({ industry, currentId }) {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSimilar = async () => {
      try {
        setLoading(true);

        const res = await fetch("http://localhost:5000/companies");
        const data = await res.json();

        const filtered = data.companies
          .filter(
            (c) =>
              c._id !== currentId &&
              c.industry === industry &&
              c.isApproved
          )
          .slice(0, 3);

        setCompanies(filtered);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (industry) fetchSimilar();
  }, [industry, currentId]);

  if (loading) {
    return (
      <div className="bg-white rounded-3xl border border-[#E5D5B8] p-6 mt-8">
        <div className="h-5 w-40 bg-gray-200 rounded mb-4 animate-pulse"></div>

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-4 animate-pulse"
            >
              <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>

              <div className="flex-1">
                <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
                <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!companies.length) {
    return (
      <div className="bg-white rounded-3xl border border-[#E5D5B8] p-6 mt-8">
        <h3 className="text-lg font-semibold text-[#3B2A1A]">
          Similar Companies
        </h3>

        <p className="text-sm text-[#8A7356] mt-3">
          No similar companies found
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-[#E5D5B8] p-6 mt-8">
      <h3 className="text-lg font-bold text-[#3B2A1A] mb-5">
        Similar Companies
      </h3>

      <div className="space-y-4">
        {companies.map((company, index) => (
          <motion.div
            key={company._id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#F8F5EF] transition"
          >
            <Image
              src={company.logo || "/company.png"}
              alt={company.companyName}
              width={45}
              height={45}
              className="rounded-xl border object-cover"
              unoptimized
            />

            <div className="flex-1">
              <h4 className="font-semibold text-[#3B2A1A] text-sm">
                {company.companyName}
              </h4>

              <p className="text-xs text-[#8A7356]">
                {company.industry}
              </p>
            </div>

            <Link
              href={`/companies/${company._id}`}
              className="text-xs font-medium text-[#D4A64F] hover:text-[#C8932E]"
            >
              View
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}