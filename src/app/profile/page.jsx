"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiMail,
  FiUser,
  FiCalendar,
  FiEdit,
  FiShield,
} from "react-icons/fi";
import { useSession } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session } = useSession();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchUser = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `http://localhost:5000/users/${session.user.email}`
        );

        const data = await res.json();

        setUser(data.user || data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [session]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="w-12 h-12 border-4 border-[#D4A64F] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h2 className="text-2xl font-bold text-red-500">
          User not found
        </h2>
      </div>
    );
  }

  const joinedDate = new Date(user.createdAt).toLocaleDateString(
    "en-US",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#F8F5EF] rounded-3xl border border-[#E5D5B8] overflow-hidden"
    >
      {/* Cover */}
      <div className="relative h-56 bg-gradient-to-r from-[#C8932E] via-[#D4A64F] to-[#E9C67A]">
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Avatar */}
      <div className="relative flex justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
          }}
          className="-mt-20"
        >
          <Image
            src={user.image}
            alt={user.name}
            width={150}
            height={150}
            className="rounded-full border-[6px] border-[#F8F5EF] object-cover shadow-xl"
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 pb-10 mt-6">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-[#3B2A1A]"
          >
            {user.name}
          </motion.h1>

          <p className="text-[#7A6A55] mt-2 text-lg">
            {user.email}
          </p>

          <span
            className={`inline-block mt-5 px-5 py-2 rounded-full text-sm font-semibold ${
              user.role === "recruiter"
                ? "bg-green-100 text-green-700"
                : "bg-blue-100 text-blue-700"
            }`}
          >
            {user.role.toUpperCase()}
          </span>
        </div>

                {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* Email Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl border border-[#E5D5B8] p-6 shadow-sm transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#F8E8C4] flex items-center justify-center">
                <FiMail className="text-[#C8932E] text-xl" />
              </div>

              <div>
                <p className="text-sm text-[#8A7356]">Email Address</p>
                <h3 className="font-semibold text-[#3B2A1A]">
                  {user.email}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Role Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl border border-[#E5D5B8] p-6 shadow-sm transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#F8E8C4] flex items-center justify-center">
                <FiShield className="text-[#C8932E] text-xl" />
              </div>

              <div>
                <p className="text-sm text-[#8A7356]">Account Role</p>
                <h3 className="font-semibold capitalize text-[#3B2A1A]">
                  {user.role}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Joined */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl border border-[#E5D5B8] p-6 shadow-sm transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#F8E8C4] flex items-center justify-center">
                <FiCalendar className="text-[#C8932E] text-xl" />
              </div>

              <div>
                <p className="text-sm text-[#8A7356]">Member Since</p>
                <h3 className="font-semibold text-[#3B2A1A]">
                  {joinedDate}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* User ID */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl border border-[#E5D5B8] p-6 shadow-sm transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#F8E8C4] flex items-center justify-center">
                <FiUser className="text-[#C8932E] text-xl" />
              </div>

              <div>
                <p className="text-sm text-[#8A7356]">User ID</p>
                <h3 className="font-semibold text-[#3B2A1A] break-all">
                  {user._id}
                </h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Edit Button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/profile/edit"
            className="inline-flex items-center gap-2 bg-[#D4A64F] hover:bg-[#C8932E] text-white font-semibold px-8 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            <FiEdit size={18} />
            Edit Profile
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
        