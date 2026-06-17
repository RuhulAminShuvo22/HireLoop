"use client";

import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F5EF] p-6">
      <div className="bg-white rounded-3xl shadow-lg p-10 text-center max-w-md">
        
        <FiCheckCircle
          className="text-green-500 mx-auto"
          size={70}
        />

        <h1 className="text-3xl font-bold mt-5 text-[#3B2A1A]">
          Payment Successful 🎉
        </h1>

        <p className="mt-3 text-gray-600">
          Thank you for upgrading your plan.
          Your payment has been received successfully.
        </p>

        <Link
          href="/dashboard/seeker/billing"
          className="inline-block mt-6 bg-[#D4A54A] text-white px-6 py-3 rounded-xl"
        >
          Go To Billing
        </Link>

      </div>
    </div>
  );
}