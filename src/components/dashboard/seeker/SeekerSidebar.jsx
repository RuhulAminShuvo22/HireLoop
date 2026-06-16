"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { signOut, useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

import {
    FiHome,
    FiBriefcase,
    FiHeart,
    FiFileText,
    FiFile,
    FiCreditCard,
    FiSettings,
    FiLogOut,
    FiUser,
} from "react-icons/fi";

export default function SeekerSidebar() {
    const pathname = usePathname();
    const { data: session } = useSession();

    const menuItems = [
        {
            title: "Dashboard",
            href: "/dashboard/seeker",
            icon: FiHome,
        },
        {
            title: "Browse Jobs",
            href: "/dashboard/seeker/jobs",
            icon: FiBriefcase,
        },
        {
            title: "Saved Jobs",
            href: "/dashboard/seeker/saved",
            icon: FiHeart,
        },
        {
            title: "My Applications",
            href: "/dashboard/seeker/applications",
            icon: FiFileText,
        },
        {
            title: "Resume",
            href: "/dashboard/seeker/resume",
            icon: FiFile,
        },
        {
            title: "Billing",
            href: "/dashboard/seeker/billing",
            icon: FiCreditCard,
        },
        {
            title: "Settings",
            href: "/dashboard/seeker/settings",
            icon: FiSettings,
        },
    ];

    const handleLogout = async () => {
        try {
            await signOut();

            toast.success("Logged out successfully!");
        } catch (error) {
            toast.error("Logout failed.");
        }
    };

    return (
        <aside className="hidden lg:flex flex-col w-72 min-h-screen bg-white border-r border-[#E5D5B8] sticky top-0">
            {/* Logo */}
            <div className="px-8 py-8 border-b border-[#E5D5B8]">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="HireLoop"
                        width={42}
                        height={42}
                    />

                    <div>
                        <h2 className="text-2xl font-bold text-[#3B2A1A]">
                            HireLoop
                        </h2>

                        <p className="text-xs text-[#8A7356]">
                            Seeker Dashboard
                        </p>
                    </div>
                </Link>
            </div>

            {/* User */}
            <div className="px-6 py-6 border-b border-[#E5D5B8]">
                <div className="flex items-center gap-4">
                    <img
                        src={
                            session?.user?.image ||
                            "https://i.pravatar.cc/150"
                        }
                        alt="profile"
                        className="w-14 h-14 rounded-full border-2 border-[#D4A64F] object-cover"
                    />

                    <div>
                        <h3 className="font-semibold text-[#3B2A1A]">
                            {session?.user?.name}
                        </h3>

                        <p className="text-xs text-[#8A7356]">
                            Job Seeker
                        </p>
                    </div>
                </div>
            </div>

            {/* Menu */}
            <nav className="flex-1 px-5 py-6 space-y-2">
                {menuItems.map((item, index) => {
                    const Icon = item.icon;

                    const active =
                        pathname === item.href;

                    return (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                delay: index * 0.05,
                            }}
                        >
                            <Link
                                href={item.href}
                                className={`flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 ${active
                                        ? "bg-[#D4A64F] text-white shadow-md"
                                        : "text-[#6B5B45] hover:bg-[#F8F5EF]"
                                    }`}
                            >
                                <Icon size={20} />

                                <span className="font-medium">
                                    {item.title}
                                </span>
                            </Link>
                        </motion.div>
                    );
                })}
            </nav>
            {/* Bottom Section */}
            <div className="border-t border-[#E5D5B8] p-5 space-y-3">

                {/* Profile */}
                <Link
                    href="/profile"
                    className="flex items-center gap-3 px-5 py-3 rounded-xl text-[#6B5B45] hover:bg-[#F8F5EF] transition-all duration-300"
                >
                    <FiUser size={20} />

                    <span className="font-medium">
                        My Profile
                    </span>
                </Link>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-5 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-300"
                >
                    <FiLogOut size={20} />

                    <span className="font-medium">
                        Logout
                    </span>
                </button>

                {/* Footer */}
                <div className="pt-5 text-center border-t border-[#E5D5B8]">
                    <p className="text-xs text-[#8A7356]">
                        © {new Date().getFullYear()} HireLoop
                    </p>

                    <p className="text-[11px] text-[#B69A72] mt-1">
                        Find Your Dream Job 🚀
                    </p>
                </div>

            </div>
        </aside>
    );
}