"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";
import { toast } from "react-hot-toast";

export default function PaymentSuccessPage() {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");


    const verifyPayment = async () => {
      if (!sessionId) {
        toast.error("Invalid payment session");
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:5000/verify-payment?session_id=${sessionId}`
        );

        const data = await res.json();

        if (data.success) {
          setVerified(true);
        } else {
          toast.error(data.message || "Payment verification failed");
        }
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();


  }, []);

  if (loading) {
    return (<div className="min-h-screen flex items-center justify-center"> <h2 className="text-xl font-semibold">
      Verifying your payment... </h2> </div>
    );
  }

  if (!verified) {
    return (<div className="min-h-screen flex items-center justify-center"> <h2 className="text-red-500 text-xl">
      Payment verification failed. </h2> </div>
    );
  }

  return (<div className="min-h-screen flex items-center justify-center bg-[#F8F5EF] p-6"> <div className="bg-white rounded-3xl shadow-lg p-10 text-center max-w-md"> <FiCheckCircle
    className="text-green-500 mx-auto"
    size={70}
  />


    <h1 className="text-3xl font-bold mt-5 text-[#3B2A1A]">
      Payment Successful 🎉
    </h1>

    <p className="mt-3 text-gray-600">
      Your Premium plan is now active.
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
