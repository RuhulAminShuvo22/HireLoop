"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import CompanyHero from "@/components/company-details/CompanyHero";
import CompanyAbout from "@/components/company-details/CompanyAbout";
import CompanyInfo from "@/components/company-details/CompanyInfo";
import CompanyContact from "@/components/company-details/CompanyContact";
import CompanySocial from "@/components/company-details/CompanySocial";
import CompanyStats from "@/components/company-details/CompanyStats";
import CompanySidebar from "@/components/company-details/CompanySidebar";
import SimilarCompanies from "@/components/company-details/SimilarCompanies";

export default function CompanyDetailsPage() {
  const { id } = useParams();

  const [company, setCompany] = useState(null);
  const [similarCompanies, setSimilarCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        setLoading(true);

        // single company
        const res = await fetch(`http://localhost:5000/companies/${id}`);
        const data = await res.json();

        const current = data.company || data;
        setCompany(current);

        // all companies (for similar)
        const allRes = await fetch("http://localhost:5000/companies");
        const allData = await allRes.json();

        const similar = allData.companies
          .filter(
            (c) =>
              c._id !== current._id &&
              c.industry === current.industry &&
              c.isApproved
          )
          .slice(0, 3);

        setSimilarCompanies(similar);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCompany();
  }, [id]);

  // loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F5EF] flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#D4A64F] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // not found
  if (!company) {
    return (
      <div className="min-h-screen bg-[#F8F5EF] flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">
          Company not found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F5EF] py-10 px-5">

      {/* HERO */}
      <CompanyHero company={company} />

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 mt-10">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          <CompanyAbout company={company} />

          <CompanyInfo company={company} />

          <CompanyContact company={company} />

          <CompanySocial company={company} />

          <CompanyStats company={company} />

          <SimilarCompanies companies={similarCompanies} />

        </div>

        {/* RIGHT SIDE */}
        <div>
          <CompanySidebar company={company} />
        </div>

      </div>
    </div>
  );
}