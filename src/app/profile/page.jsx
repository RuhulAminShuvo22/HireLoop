"use client";

import { useState, useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const sessionData = useSession();

  const session = sessionData?.data;

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name ?? "");
      setImage(session.user.image ?? "");
    }
  }, [session]);

  const handleUpdate = async () => {
    try {
      const res = await fetch("/api/profile/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session?.user?.email,
          name,
          image,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Update failed");
        return;
      }

      toast.success("Profile Updated Successfully 🎉");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  if (!session?.user) {
    return (
      <div className="flex justify-center py-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <div className="bg-white border border-[#E6DCC8] rounded-3xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold mb-8 text-[#3B2F1E]">
          Edit Profile
        </h2>

        <div className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 border border-[#E6DCC8] rounded-xl px-4 py-3 outline-none focus:border-[#D4A95A]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Profile Image URL
            </label>

            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full mt-2 border border-[#E6DCC8] rounded-xl px-4 py-3 outline-none focus:border-[#D4A95A]"
            />
          </div>

          {image && (
            <img
              src={image}
              alt="Preview"
              className="h-24 w-24 rounded-full object-cover border"
            />
          )}

          <button
            onClick={handleUpdate}
            className="bg-[#D4A95A] hover:bg-[#C69945] text-white px-6 py-3 rounded-xl font-semibold transition"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}