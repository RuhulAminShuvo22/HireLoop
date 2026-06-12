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
// import CompanyCard from "@/components/dashboard/jobs/CompanyCard";
// import PublishButton from "@/components/dashboard/jobs/PublishButton";

export default function NewJobPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10 space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-[#3B2F1E]">
          Post a New Job
        </h1>

        <p className="text-[#8B6F47] mt-2">
          Create a new opportunity for talented professionals.
        </p>
      </div>

      <JobInfoSection />

      <JobDescriptionSection />

      {/* <CompanyCard />

      <PublishButton /> */}

    </div>
  );
}