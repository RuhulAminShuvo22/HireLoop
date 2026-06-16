"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSession } from "@/lib/auth-client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  FiBookmark,
  FiFileText,
  FiCalendar,
  FiAward,
  FiMail,
  FiEdit,
  FiBriefcase,
} from "react-icons/fi";

export default function SeekerDashboard() {
  const { data: session } = useSession();

  // ===============================
  // Dummy Data (Later connect API)
  // ===============================

  const stats = [
    {
      title: "Saved Jobs",
      value: 12,
      icon: <FiBookmark size={24} />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Applications",
      value: 28,
      icon: <FiFileText size={24} />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Interviews",
      value: 5,
      icon: <FiCalendar size={24} />,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "Offers",
      value: 2,
      icon: <FiAward size={24} />,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const applicationData = [
    {
      name: "Applied",
      value: 18,
    },
    {
      name: "Review",
      value: 6,
    },
    {
      name: "Shortlisted",
      value: 3,
    },
    {
      name: "Rejected",
      value: 4,
    },
    {
      name: "Offered",
      value: 2,
    },
  ];

  const COLORS = [
    "#D4A64F",
    "#4F8EF7",
    "#2ECC71",
    "#E74C3C",
    "#9B59B6",
  ];

  const activities = [
    {
      title: "Frontend Developer",
      company: "Google",
      status: "Application Submitted",
      time: "2 hours ago",
    },
    {
      title: "React Developer",
      company: "Microsoft",
      status: "Under Review",
      time: "Yesterday",
    },
    {
      title: "Backend Engineer",
      company: "Netflix",
      status: "Interview Scheduled",
      time: "2 days ago",
    },
    {
      title: "Software Engineer",
      company: "Amazon",
      status: "Offer Received",
      time: "4 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5EF] p-6">

      {/* Welcome */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-[#3B2A1A]">
          Welcome Back,
          <span className="text-[#D4A64F]">
            {" "}
            {session?.user?.name || "Seeker"}
          </span>
          👋
        </h1>

        <p className="text-[#7A6A55] mt-2">
          Here is a quick overview of your job search progress.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -6,
            }}
            className="bg-white rounded-2xl border border-[#E5D5B8] p-6 shadow-sm hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-[#8A7356] text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-[#3B2A1A] mt-2">
                  {item.value}
                </h2>
              </div>

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
      {/* Profile + Chart */}
      <div className="grid lg:grid-cols-5 gap-6 mt-8">

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white rounded-3xl border border-[#E5D5B8] p-7 shadow-sm"
        >
          <div className="flex flex-col items-center text-center">

            <Image
              src={
                session?.user?.image ||
                "https://i.pravatar.cc/300"
              }
              alt={session?.user?.name || "Profile"}
              width={120}
              height={120}
              className="rounded-full border-4 border-[#D4A64F] object-cover"
            />

            <h2 className="text-2xl font-bold text-[#3B2A1A] mt-5">
              {session?.user?.name}
            </h2>

            <div className="flex items-center gap-2 mt-2 text-[#7A6A55]">
              <FiMail />
              <span className="text-sm">
                {session?.user?.email}
              </span>
            </div>

            <span className="mt-5 px-5 py-2 rounded-full bg-[#F8E8C4] text-[#C8932E] font-semibold">
              Job Seeker
            </span>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/profile/edit"
              className="mt-7 w-full flex items-center justify-center gap-2 bg-[#D4A64F] hover:bg-[#C8932E] text-white py-3 rounded-xl font-semibold transition-all"
            >
              <FiEdit />
              Edit Profile
            </motion.a>

          </div>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 bg-white rounded-3xl border border-[#E5D5B8] p-7 shadow-sm"
        >

          <div className="flex items-center justify-between mb-6">

            <div>
              <h2 className="text-2xl font-bold text-[#3B2A1A]">
                Application Status
              </h2>

              <p className="text-[#8A7356] mt-1">
                Overview of your application progress
              </p>
            </div>

          </div>

          <div className="h-[340px]">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <PieChart>

                <Pie
                  data={applicationData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  innerRadius={55}
                  paddingAngle={3}
                  label
                >
                  {applicationData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />

              </PieChart>
            </ResponsiveContainer>

          </div>

          {/* Legend */}

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">

            {applicationData.map((item, index) => (

              <div
                key={item.name}
                className="flex items-center gap-2"
              >

                <span
                  className="w-4 h-4 rounded-full"
                  style={{
                    backgroundColor:
                      COLORS[index],
                  }}
                ></span>

                <span className="text-sm text-[#6B5B45]">
                  {item.name}
                </span>

              </div>

            ))}

          </div>

        </motion.div>

      </div>
      {/* Recent Activity + Quick Actions */}
      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white rounded-3xl border border-[#E5D5B8] p-7 shadow-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-[#3B2A1A]">
              Recent Activity
            </h2>

            <span className="text-sm text-[#D4A64F] font-medium">
              Latest Updates
            </span>
          </div>

          <div className="space-y-5">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 border-b border-[#F1E4CC] pb-4 last:border-none"
              >
                <div className="w-12 h-12 rounded-full bg-[#F8E8C4] flex items-center justify-center">
                  <FiBriefcase
                    className="text-[#C8932E]"
                    size={22}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-[#3B2A1A]">
                    {activity.title}
                  </h3>

                  <p className="text-sm text-[#7A6A55] mt-1">
                    {activity.company}
                  </p>

                  <div className="flex items-center justify-between mt-2">

                    <span className="text-xs bg-[#F8E8C4] text-[#C8932E] px-3 py-1 rounded-full">
                      {activity.status}
                    </span>

                    <span className="text-xs text-[#8A7356]">
                      {activity.time}
                    </span>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-[#E5D5B8] p-7 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-[#3B2A1A] mb-6">
            Quick Actions
          </h2>

          <div className="space-y-4">

            <a
              href="/dashboard/seeker/jobs"
              className="block bg-[#D4A64F] hover:bg-[#C8932E] text-white rounded-xl p-4 text-center font-semibold transition"
            >
              Browse Jobs
            </a>

            <a
              href="/dashboard/seeker/saved"
              className="block border border-[#D4A64F] text-[#C8932E] hover:bg-[#F8E8C4] rounded-xl p-4 text-center font-semibold transition"
            >
              Saved Jobs
            </a>

            <a
              href="/dashboard/seeker/applications"
              className="block border border-[#D4A64F] text-[#C8932E] hover:bg-[#F8E8C4] rounded-xl p-4 text-center font-semibold transition"
            >
              My Applications
            </a>

            <a
              href="/dashboard/seeker/settings"
              className="block border border-[#D4A64F] text-[#C8932E] hover:bg-[#F8E8C4] rounded-xl p-4 text-center font-semibold transition"
            >
              Update Profile
            </a>

          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-[#6B5B45]">
                Monthly Applications
              </span>

              <span className="font-semibold text-[#3B2A1A]">
                28 / 50
              </span>
            </div>

            <div className="w-full h-3 rounded-full bg-[#F1E4CC] overflow-hidden">
              <div className="w-[56%] h-full bg-[#D4A64F] rounded-full"></div>
            </div>

            <p className="text-xs text-[#8A7356] mt-3">
              You are doing great! Keep applying to reach your dream job.
            </p>
          </div>

        </motion.div>

      </div>

    </div>
  );
}