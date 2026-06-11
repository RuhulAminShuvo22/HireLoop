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
    <div className="space-y-6 p-6">
      <h2 className="text-3xl font-bold text-[#3B2F1E]">
        Welcome back, {session?.user?.name} 👋
      </h2>

      <DashboardStats stats={recruiterStats} />
    </div>
  );
}