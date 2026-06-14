"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { FiSave, FiUser, FiImage } from "react-icons/fi";
import toast from "react-hot-toast";

export default function EditProfilePage() {
    const { data: session } = useSession();
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        image: "",
    });

    useEffect(() => {
        if (!session?.user?.email) return;

        const fetchUser = async () => {
            try {
                const res = await fetch(
                    `http://localhost:5000/users/${session.user.email}`
                );

                const data = await res.json();
                const user = data.user || data;

                setFormData({
                    name: user.name || "",
                    image: user.image || "",
                });
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [session]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!session?.user?.email) {
            toast.error("User session not found");
            return;
        }

        try {
            setUpdating(true);

            const res = await fetch(
                `http://localhost:5000/users/${session.user.email}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const result = await res.json();

            if (!res.ok) {
                toast.error(result.message || "Update Failed");
                return;
            }

            toast.success("Profile Updated Successfully!");

            setTimeout(() => {
                router.push("/");
                router.refresh();
            }, 1500);

        } catch (error) {
            console.error("Profile Update Error:", error);
            toast.error("Something went wrong");
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[80vh]">
                <div className="w-12 h-12 border-4 border-[#D4A64F] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F8F5EF] rounded-3xl border border-[#E5D5B8] p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-[#3B2A1A] mb-8">
                    Edit Profile
                </h1>

                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-2xl border border-[#E5D5B8] shadow-sm space-y-6"
                >
                    {/* Name */}
                    <div>
                        <label className="flex items-center gap-2 text-[#3B2A1A] font-medium mb-2">
                            <FiUser />
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-[#DCC7A1] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4A64F]"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="flex items-center gap-2 text-[#3B2A1A] font-medium mb-2">
                            <FiImage />
                            Profile Image URL
                        </label>

                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            className="w-full border border-[#DCC7A1] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#D4A64F]"
                        />
                    </div>

                    {/* Preview */}
                    {formData.image && (
                        <div className="flex justify-center">
                            <img
                                src={formData.image}
                                alt="Preview"
                                className="w-32 h-32 rounded-full object-cover border-4 border-[#D4A64F]"
                            />
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={updating}
                        className="w-full flex items-center justify-center gap-2 bg-[#D4A64F] hover:bg-[#C8932E] text-white font-semibold py-3 rounded-xl transition-all"
                    >
                        <FiSave />

                        {updating ? "Updating..." : "Save Changes"}
                    </button>
                </form>
            </div>
        </div>
    );
}