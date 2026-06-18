
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FiCreditCard,
  FiCheckCircle,
} from "react-icons/fi";
import { authClient } from "@/lib/auth-client";

export default function SeekerBillingPage() {
  const router = useRouter();

  const [billingData, setBillingData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { data: session } = authClient.useSession();

  useEffect(() => {
    const fetchBilling = async () => {
      if (!session?.user?.email) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:5000/my-billing?email=${session.user.email}`
        );

        const data = await res.json();

        if (data.success) {
          setBillingData(data);
        }
      } catch (error) {
        console.log("Billing fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBilling();
  }, [session]);

  const handleUpgrade = () => {
    router.push("/pricing?from=billing");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F5EF]">
        <p className="text-lg font-semibold text-[#3B2A1A]">
          Loading billing information...
        </p>
      </div>
    );
  }

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

      {/* Top Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Current Plan */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-3xl border border-[#E5D5B8]"
        >
          <div className="flex items-center gap-3 mb-4">
            <FiCreditCard
              className="text-[#C8932E]"
              size={24}
            />
            <h2 className="text-xl font-bold text-[#3B2A1A]">
              Current Plan
            </h2>
          </div>

          <p className="text-2xl font-bold text-[#D4A64F]">
            {billingData?.subscription?.plan || "Free"}
          </p>

          <p className="text-sm text-[#7A6A55] mt-2">
            Status:{" "}
            {billingData?.subscription?.status || "inactive"}
          </p>

          {billingData?.subscription?.plan !== "Premium" && (
            <button
              onClick={handleUpgrade}
              className="mt-5 bg-[#D4A64F] hover:bg-[#C8932E] text-white px-6 py-3 rounded-xl font-semibold"
            >
              Upgrade Plan
            </button>
          )}
        </motion.div>

        {/* Usage Card */}
        <motion.div
          whileHover={{ y: -5 }}
          className="bg-white p-6 rounded-3xl border border-[#E5D5B8]"
        >
          <div className="flex items-center gap-3 mb-4">
            <FiCheckCircle
              className="text-green-500"
              size={24}
            />
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
              <span className="font-semibold">
                18 / 50
              </span>
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

              {billingData?.payments?.length > 0 ? (
                billingData.payments.map((p) => (
                  <tr
                    key={p._id}
                    className="border-b text-[#3B2A1A]"
                  >
                    <td className="py-3 font-medium">
                      {p._id.slice(-6)}
                    </td>

                    <td>
                      {new Date(
                        p.paidAt
                      ).toLocaleDateString()}
                    </td>

                    <td>{p.planId}</td>

                    <td>${p.amount}</td>

                    <td>
                      <span className="text-green-600 font-semibold flex items-center gap-1">
                        <FiCheckCircle />
                        {p.paymentStatus}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="py-6 text-center text-[#7A6A55]"
                  >
                    No payment history found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

