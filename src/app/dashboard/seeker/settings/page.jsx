"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";
import {
  FiUser,
  FiMail,
  FiImage,
  FiBriefcase,
  FiSave,
} from "react-icons/fi";

export default function SeekerSettingsPage() {
  const { data: session } = useSession();

  const [form, setForm] = useState({
    name: "",
    email: "",
    image: "",
    headline: "",
    skills: "",
    bio: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ FIX: safer effect with guard + timeout (prevents sync warning)
  useEffect(() => {
    if (!session?.user) return;

    const timeout = setTimeout(() => {
      setForm((prev) => ({
        ...prev,
        name: session.user.name || "",
        email: session.user.email || "",
        image: session.user.image || "",
      }));
    }, 0);

    return () => clearTimeout(timeout);
  }, [session]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:5000/users/${session.user.email}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            image: form.image,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to update");
      }

      toast.success("Profile updated successfully 🚀");
    } catch (err) {
      console.log(err);
      toast.error("Update failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-[#E5D5B8]"
      >
        <h1 className="text-3xl font-bold text-[#3B2A1A] mb-6">
          Seeker Settings ⚙️
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            placeholder="Name"
          />

          {/* Email */}
          <input
            name="email"
            value={form.email}
            disabled
            className="w-full p-3 border rounded-xl bg-gray-100"
          />

          {/* Image */}
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            placeholder="Profile Image URL"
          />

          {/* Headline */}
          <input
            name="headline"
            value={form.headline}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            placeholder="Headline"
          />

          {/* Skills */}
          <input
            name="skills"
            value={form.skills}
            onChange={handleChange}
            className="w-full p-3 border rounded-xl"
            placeholder="Skills"
          />

          {/* Bio */}
          <textarea
            name="bio"
            value={form.bio}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border rounded-xl"
            placeholder="Bio"
          />

          {/* Submit */}
          <button
            disabled={loading}
            className="w-full bg-[#D4A64F] hover:bg-[#C8932E] text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
          >
            <FiSave />
            {loading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}