// import React from 'react';

// const NewJob = () => {
//     return (
//         <div>
//             <h2>Create new Job</h2>
//         </div>
//     );
// };

// export default NewJob;

"use client";

import JobInfoSection from "@/components/dashboard/jobs/JobInfoSection";
import JobDescriptionSection from "@/components/dashboard/jobs/JobDescriptionSection";
import CompanyCard from "@/components/dashboard/jobs/CompanyCard";
import PublishButton from "@/components/dashboard/jobs/PublishButton";

export default function NewJobPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Publish Job");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <JobInfoSection />
      <JobDescriptionSection />
      <CompanyCard />

      <PublishButton
        loading={false}
        companyApproved={true}
        canPostJob={true}
      />
    </form>
  );
}