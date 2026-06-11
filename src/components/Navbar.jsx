"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiLogOut,
  FiUser,
} from "react-icons/fi";

import { authClient, useSession } from "@/lib/auth-client";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Browse Jobs", href: "/jobs" },
  { name: "Companies", href: "/companies" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const { data: session } = useSession();

  const handleLogout = async () => {
    try {
      await authClient.signOut();

      router.push("/");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 px-4 py-4"
    >
      <nav className="mx-auto max-w-7xl rounded-2xl border border-[#E6DCC8] bg-[#F8F5EF]/95 px-6 py-2 backdrop-blur-xl shadow-sm">
        <div className="flex items-center justify-between min-h-[56px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/new-logo.png"
              alt="HireLoop"
              width={160}
              height={48}
              priority
              className="h-10 w-auto object-contain transition-transform duration-200 hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="group relative font-medium text-[#3B2F1E]/80 hover:text-[#3B2F1E] transition-colors text-[15px]"
              >
                {link.name}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#D4A95A] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop Auth Area */}
          {/* Desktop Auth Area */}
          <div className="hidden lg:flex items-center gap-4">
            {session?.user ? (
              <>
                <Link
                  href="/profile"
                  className="group flex items-center gap-3 rounded-2xl border border-[#E6DCC8] bg-white px-4 py-2 transition-all duration-300 hover:shadow-md"
                >
                  <img
                    src={
                      session.user.image ||
                      "https://ui-avatars.com/api/?name=User"
                    }
                    alt={session.user.name || "User"}
                    className="h-10 w-10 rounded-full object-cover border border-[#E6DCC8]"
                  />

                  <div className="text-left">
                    <p className="text-sm font-bold text-[#3B2F1E]">
                      Hi, {session.user.name?.split(" ")[0]} 👋
                    </p>

                    <div className="flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>

                      <p className="text-xs text-[#8B6F47] group-hover:text-[#D4A95A] transition">
                        {session.user.role === "recruiter"
                          ? "Recruiter"
                          : "Job Seeker"}
                      </p>
                    </div>
                  </div>
                </Link>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-red-500 transition hover:bg-red-50"
                >
                  <FiLogOut size={18} />
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="font-medium text-[#3B2F1E]/80 transition hover:text-[#3B2F1E] text-[15px]"
                >
                  Sign In
                </Link>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/register"
                    className="rounded-xl bg-[#D4A95A] px-5 py-2.5 font-semibold text-white text-[15px] shadow-sm transition hover:bg-[#C69945]"
                  >
                    Get Started
                  </Link>
                </motion.div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[#3B2F1E] p-1 rounded-lg hover:bg-[#E6DCC8]/30 transition"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
              }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-4 border-t border-[#E6DCC8]/60 pt-4 pb-2">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.name}
                      initial={{
                        x: -10,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-1 font-medium text-[#3B2F1E]/90 hover:text-[#3B2F1E]"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}

                  <div className="h-[1px] bg-[#E6DCC8]/60 my-1" />

                  {session?.user ? (
                    <>
                      <Link
                        href="/profile"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 py-2"
                      >
                        <img
                          src={
                            session.user.image ||
                            "https://ui-avatars.com/api/?name=User"
                          }
                          alt=""
                          className="h-10 w-10 rounded-full object-cover"
                        />

                        <div className="text-left">
                          <p className="text-sm font-bold text-[#3B2F1E]">
                            Hi, {session.user.name?.split(" ")[0]} 👋
                          </p>

                          <div className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>

                            <p className="text-xs text-[#8B6F47]">
                              {session.user.role === "recruiter"
                                ? "Recruiter"
                                : "Job Seeker"}
                            </p>
                          </div>
                        </div>
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 py-2 text-red-500"
                      >
                        <FiLogOut />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        onClick={() => setIsOpen(false)}
                        className="py-1 font-medium text-[#3B2F1E]/90 hover:text-[#3B2F1E]"
                      >
                        Sign In
                      </Link>

                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        whileHover={{ scale: 1.01 }}
                      >
                        <Link
                          href="/register"
                          onClick={() => setIsOpen(false)}
                          className="block rounded-xl bg-[#D4A95A] px-5 py-2.5 text-center font-semibold text-white shadow-sm"
                        >
                          Get Started
                        </Link>
                      </motion.div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}