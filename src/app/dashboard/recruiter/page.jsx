"use client";

import { useSession } from "@/lib/auth-client";
import DashboardStats from "@/components/dashboard/DashboardStats";

import {
  FileText,
  Persons,
  CircleCheck,
  ChartColumn,
} from "@gravity-ui/icons";

export default function RecruiterDashboardHomePage() {
  const { data: session, isPending } = useSession();

  const recruiterStats = [
    {
      title: "Total Job Posts",
      value: 48,
      icon: FileText,
    },
    {
      title: "Total Applicants",
      value: "1,284",
      icon: Persons,
    },
    {
      title: "Active Jobs",
      value: 18,
      icon: ChartColumn,
    },
    {
      title: "Jobs Closed",
      value: 32,
      icon: CircleCheck,
    },
  ];

  const recentApplications = [
    {
      name: "John Doe",
      position: "Frontend Developer",
      date: "18 Jun 2026",
      status: "Pending",
    },
    {
      name: "Sarah Ahmed",
      position: "UI/UX Designer",
      date: "17 Jun 2026",
      status: "Selected",
    },
    {
      name: "Alex Martin",
      position: "Backend Engineer",
      date: "16 Jun 2026",
      status: "Reviewing",
    },
    {
      name: "Emma Wilson",
      position: "Project Manager",
      date: "15 Jun 2026",
      status: "Rejected",
    },
  ];

  const topJobs = [
    {
      title: "Frontend Developer",
      applicants: 24,
      status: "Active",
    },
    {
      title: "UI/UX Designer",
      applicants: 18,
      status: "Active",
    },
    {
      title: "Backend Engineer",
      applicants: 12,
      status: "Active",
    },
    {
      title: "Project Manager",
      applicants: 7,
      status: "Closed",
    },
  ];

  if (isPending) {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold text-[#3B2F1E]">
          Welcome back...
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-6 bg-[#F8F5EF] min-h-screen">

      {/* Welcome */}
      <div>
        <h2 className="text-3xl font-bold text-[#3B2F1E]">
          Welcome back, {session?.user?.name} 👋
        </h2>

        <p className="text-[#7A6A55] mt-2">
          Here is what is happening with your jobs today.
        </p>
      </div>

      {/* Stats */}
      <DashboardStats stats={recruiterStats} />

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-3 gap-6">

        {/* Recent Applications */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-[#E5D5B8] p-6 shadow-sm">

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-[#3B2F1E]">
              Recent Applications
            </h3>

            <button className="text-[#C8932E] font-medium hover:underline">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">

              <thead>
                <tr className="border-b text-left text-[#7A6A55]">
                  <th className="pb-3">Candidate</th>
                  <th className="pb-3">Position</th>
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentApplications.map((app, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-[#FFF8EA] transition"
                  >
                    <td className="py-4 font-medium">
                      {app.name}
                    </td>

                    <td>{app.position}</td>

                    <td>{app.date}</td>

                    <td>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          app.status === "Selected"
                            ? "bg-green-100 text-green-700"
                            : app.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : app.status === "Rejected"
                            ? "bg-red-100 text-red-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>

        {/* Top Jobs */}
        <div className="bg-white rounded-3xl border border-[#E5D5B8] p-6 shadow-sm">

          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-[#3B2F1E]">
              Top Jobs
            </h3>

            <button className="text-[#C8932E] font-medium hover:underline">
              View All
            </button>
          </div>

          <div className="space-y-5">

            {topJobs.map((job, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b last:border-none pb-4"
              >
                <div>
                  <h4 className="font-semibold text-[#3B2F1E]">
                    {job.title}
                  </h4>

                  <p className="text-sm text-[#7A6A55]">
                    {job.applicants} Applicants
                  </p>
                </div>

                <span
                  className={`font-semibold ${
                    job.status === "Active"
                      ? "text-[#C8932E]"
                      : "text-gray-500"
                  }`}
                >
                  {job.status}
                </span>
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}