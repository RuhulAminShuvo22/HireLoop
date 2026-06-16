"use client";

import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "@/lib/auth-client";

export default function RecruiterApplicationsPage() {
    const { data: session } = useSession();

    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");

    const [selectedApplication, setSelectedApplication] =
        useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                setLoading(true);

                const res = await fetch(
                    `http://localhost:5000/applications/recruiter/${session?.user?.email}`
                );

                const data = await res.json();

                setApplications(data.applications || []);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        if (session?.user?.email) {
            fetchApplications();
        }
    }, [session]);

    const updateStatus = async (id, status) => {
        try {
            const res = await fetch(
                `http://localhost:5000/applications/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ status }),
                }
            );

            const data = await res.json();

            if (data.success) {
                // UI Update
                setApplications((prev) =>
                    prev.map((app) =>
                        app._id === id
                            ? {
                                ...app,
                                status,
                            }
                            : app
                    )
                );

                // Modal Update
                if (
                    selectedApplication &&
                    selectedApplication._id === id
                ) {
                    setSelectedApplication((prev) => ({
                        ...prev,
                        status,
                    }));
                }

                if (status === "selected") {
                    toast.success("Candidate selected successfully 🎉");
                } else {
                    toast.error("Candidate rejected successfully ❌");
                }
            } else {
                toast.error("Failed to update status");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        }
    };

    const filteredApplications =
        applications.filter((application) => {
            const matchesSearch =
                application.applicantName
                    ?.toLowerCase()
                    .includes(searchTerm.toLowerCase());

            const matchesStatus =
                statusFilter === "All" ||
                application.status === statusFilter;

            return matchesSearch && matchesStatus;
        });

    return (
        <div className="min-h-screen bg-[#F8F5EF] rounded-3xl border border-[#E5D5B8] p-6">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-bold text-[#3B2A1A]">
                    Job Applications
                </h1>

                <p className="text-[#8A7356] mt-2">
                    Manage all candidate applications
                </p>
            </motion.div>

            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <input
                    type="text"
                    placeholder="🔍 Search applicant..."
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                    className="flex-1 px-4 py-3 bg-white border border-[#E5D5B8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A64F]"
                />

                <select
                    value={statusFilter}
                    onChange={(e) =>
                        setStatusFilter(e.target.value)
                    }
                    className="px-4 py-3 bg-white border border-[#E5D5B8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D4A64F]"
                >
                    <option value="All">All Status</option>
                    <option value="pending">
                        Pending
                    </option>
                    <option value="selected">
                        Selected
                    </option>
                    <option value="rejected">
                        Rejected
                    </option>
                </select>
            </div>

            {/* Count */}
            {!loading && (
                <p className="text-[#8A7356] mb-6">
                    Found {filteredApplications.length}
                    {" "}Applications
                </p>
            )}

            {/* Loading */}
            {loading && (
                <div className="flex justify-center py-20">
                    <div className="w-10 h-10 border-4 border-[#D4A64F] border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}

            {/* Empty */}
            {!loading &&
                filteredApplications.length === 0 && (
                    <div className="text-center py-20">
                        <h3 className="text-2xl font-bold text-[#3B2A1A]">
                            No Applications Found
                        </h3>
                    </div>
                )}

            {/* Applications */}
            <div className="grid md:grid-cols-2 gap-6">
                {filteredApplications.map(
                    (application, index) => (
                        <motion.div
                            key={application._id}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: index * 0.05,
                            }}
                            whileHover={{
                                y: -5,
                            }}
                            className="bg-white border border-[#E5D5B8] rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-xl font-bold text-[#3B2A1A]">
                                        {application.applicantName}
                                    </h2>

                                    <p className="text-[#8A7356]">
                                        {application.applicantEmail}
                                    </p>
                                </div>

                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${application.status ===
                                        "selected"
                                        ? "bg-green-100 text-green-700"
                                        : application.status ===
                                            "rejected"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {application.status}
                                </span>
                            </div>

                            <div className="mt-4 space-y-2 text-sm text-[#6B5B45]">
                                <p>
                                    💼 {application.jobTitle}
                                </p>

                                <p>
                                    📂 {application.jobCategory}
                                </p>

                                <p>
                                    📍 {application.jobLocation}
                                </p>

                                <p>
                                    📞 {application.phone}
                                </p>
                            </div>

                            <div className="mt-5 flex gap-3">
                                <button
                                    onClick={() =>
                                        setSelectedApplication(
                                            application
                                        )
                                    }
                                    className="flex-1 bg-[#D4A64F] text-white py-2 rounded-xl"
                                >
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    )
                )}
            </div>

            {/* Modal */}
            {selectedApplication && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
                    <div className="bg-white max-w-2xl w-full rounded-3xl p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-[#3B2A1A]">
                                Candidate Details
                            </h2>

                            <button
                                onClick={() =>
                                    setSelectedApplication(null)
                                }
                                className="text-xl"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="mt-6 space-y-4">
                            <p>
                                <strong>Name:</strong>{" "}
                                {
                                    selectedApplication.applicantName
                                }
                            </p>

                            <p>
                                <strong>Email:</strong>{" "}
                                {
                                    selectedApplication.applicantEmail
                                }
                            </p>

                            <p>
                                <strong>Phone:</strong>{" "}
                                {selectedApplication.phone}
                            </p>

                            <p>
                                <strong>Job:</strong>{" "}
                                {selectedApplication.jobTitle}
                            </p>

                            <p>
                                <strong>Location:</strong>{" "}
                                {
                                    selectedApplication.jobLocation
                                }
                            </p>

                            <p>
                                <strong>Cover Letter:</strong>
                            </p>

                            <div className="bg-gray-50 p-4 rounded-xl">
                                {
                                    selectedApplication.coverLetter
                                }
                            </div>

                            <a
                                href={
                                    selectedApplication.portfolio
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-600"
                            >
                                Portfolio Link
                            </a>

                            <a
                                href={selectedApplication.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-blue-600"
                            >
                                Resume Link
                            </a>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <button
                                onClick={() =>
                                    updateStatus(
                                        selectedApplication._id,
                                        "selected"
                                    )
                                }
                                disabled={
                                    selectedApplication.status ===
                                    "selected"
                                }
                                className={`flex-1 py-3 rounded-xl text-white font-medium transition ${selectedApplication.status ===
                                    "selected"
                                    ? "bg-green-300 cursor-not-allowed"
                                    : "bg-green-600 hover:bg-green-700"
                                    }`}
                            >
                                ✓ Select Candidate
                            </button>

                            <button
                                onClick={() =>
                                    updateStatus(
                                        selectedApplication._id,
                                        "rejected"
                                    )
                                }
                                disabled={
                                    selectedApplication.status ===
                                    "rejected"
                                }
                                className={`flex-1 py-3 rounded-xl text-white font-medium transition ${selectedApplication.status ===
                                    "rejected"
                                    ? "bg-red-300 cursor-not-allowed"
                                    : "bg-red-600 hover:bg-red-700"
                                    }`}
                            >
                                ✕ Reject Candidate
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}