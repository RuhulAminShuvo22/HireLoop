"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FiCreditCard,
  FiCheckCircle,
  FiClock,
  FiDownload,
} from "react-icons/fi";

export default function SeekerBillingPage() {
  const [plan] = useState("Free");
  const router = useRouter();

  const handleUpgrade = () => {
    router.push("/pricing?from=billing");
  };

  const paymentHistory = [
    {
      id: "TRX-1001",
      date: "2026-06-10",
      plan: "Free",
      amount: "$0",
      status: "Success",
    },
    {
      id: "TRX-1002",
      date: "2026-06-01",
      plan: "Free",
      amount: "$0",
      status: "Success",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F5EF] p-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-[#3B2A1A]">
          Subscription & Billing 💳
        </h1>

        <p className="text-[#7A6A55] mt-2">
          Manage your plan and payment history
        </p>
      </motion.div>

      {/* Current Plan Card */}
      <div className="grid md:grid-cols-2 gap-6">

        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-3xl border border-[#E5D5B8]"
        >
          <div className="flex items-center gap-3 mb-4">
            <FiCreditCard className="text-[#C8932E]" size={24} />
            <h2 className="text-xl font-bold text-[#3B2A1A]">
              Current Plan
            </h2>
          </div>

          <p className="text-2xl font-bold text-[#D4A64F]">
            {plan}
          </p>

          <p className="text-sm text-[#7A6A55] mt-2">
            You are currently on the free plan.
          </p>

          <button
            onClick={handleUpgrade}
            className="mt-5 bg-[#D4A64F] hover:bg-[#C8932E] text-white px-6 py-3 rounded-xl font-semibold"
          >
            Upgrade Plan
          </button>
        </motion.div>

        {/* Usage Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-3xl border border-[#E5D5B8]"
        >
          <div className="flex items-center gap-3 mb-4">
            <FiCheckCircle className="text-green-500" size={24} />
            <h2 className="text-xl font-bold text-[#3B2A1A]">
              Monthly Usage
            </h2>
          </div>

          <p className="text-sm text-[#7A6A55]">
            Applications used this month
          </p>

          <div className="mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Used</span>
              <span className="font-semibold">18 / 50</span>
            </div>

            <div className="w-full bg-[#F1E4CC] h-3 rounded-full">
              <div className="w-[36%] h-3 bg-[#D4A64F] rounded-full"></div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Payment History */}
      <div className="mt-10 bg-white rounded-3xl border border-[#E5D5B8] p-6">

        <h2 className="text-2xl font-bold text-[#3B2A1A] mb-6">
          Payment History 📜
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead>
              <tr className="text-[#7A6A55] text-sm border-b">
                <th className="py-3">Transaction</th>
                <th>Date</th>
                <th>Plan</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {paymentHistory.map((p) => (
                <tr key={p.id} className="border-b text-[#3B2A1A]">

                  <td className="py-3 font-medium">
                    {p.id}
                  </td>

                  <td>{p.date}</td>

                  <td>{p.plan}</td>

                  <td>{p.amount}</td>

                  <td>
                    <span className="text-green-600 font-semibold flex items-center gap-1">
                      <FiCheckCircle />
                      {p.status}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}