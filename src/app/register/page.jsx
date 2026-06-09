"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

// Form Animation
const formVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Background Floating Animation
const floatingVariants = {
  animate: (i) => ({
    y: [0, -30, 0],
    x: [0, i * 15, 0],
    transition: {
      duration: 6 + i,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const user = Object.fromEntries(formData.entries());

    if (user.password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    try {
      const { error } = await authClient.signUp.email({
        name: user.name,
        email: user.email,
        password: user.password,
        image: user.photoUrl,
      });

      if (error) {
        toast.error(error.message || "Registration failed!");
        return;
      }

      toast.success("Account created successfully! 🎉");

      e.target.reset();

      setTimeout(() => {
        router.push("/");
      }, 1500);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      console.log(error);
      toast.error("Google login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F5EF] px-4 py-12 overflow-hidden relative">
      {/* Background Effects */}
      <motion.div
        custom={1}
        animate="animate"
        variants={floatingVariants}
        className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#D4A95A]/10 blur-3xl"
      />

      <motion.div
        custom={-1}
        animate="animate"
        variants={floatingVariants}
        className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-[#8B6F47]/10 blur-3xl"
      />

      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md bg-white border border-[#E6DCC8] rounded-3xl shadow-xl p-8 md:p-10 z-10"
      >
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-4"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        >
          <Image
            src="/assets/new-logo.png"
            alt="HireLoop"
            width={220}
            height={80}
            priority
          />
        </motion.div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#3B2F1E]">
            Create Your Account
          </h2>

          <p className="text-[#8B6F47] text-sm mt-2">
            Join HireLoop and connect with your next opportunity.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          <motion.div variants={itemVariants}>
            <label className="block mb-2 text-sm font-semibold text-[#3B2F1E]">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-[#E6DCC8] rounded-xl focus:outline-none focus:border-[#D4A95A]"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block mb-2 text-sm font-semibold text-[#3B2F1E]">
              Email
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              className="w-full px-4 py-3 border border-[#E6DCC8] rounded-xl focus:outline-none focus:border-[#D4A95A]"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block mb-2 text-sm font-semibold text-[#3B2F1E]">
              Image URL
            </label>

            <input
              type="url"
              name="photoUrl"
              placeholder="https://example.com/photo.jpg"
              className="w-full px-4 py-3 border border-[#E6DCC8] rounded-xl focus:outline-none focus:border-[#D4A95A]"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block mb-2 text-sm font-semibold text-[#3B2F1E]">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-[#E6DCC8] rounded-xl focus:outline-none focus:border-[#D4A95A]"
            />

            <p className="text-xs text-[#8B6F47] mt-2">
              Password must be at least 6 characters.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#D4A95A] hover:bg-[#C89A47] text-white font-bold rounded-xl"
            >
              Create Account
            </Button>
          </motion.div>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E6DCC8]" />
          </div>

          <span className="relative bg-white px-3 text-xs text-[#8B6F47] font-semibold">
            OR
          </span>
        </div>

        {/* Google Sign Up */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Button
            variant="bordered"
            size="lg"
            onPress={handleGoogleLogin}
            className="w-full border-[#E6DCC8] text-[#3B2F1E] bg-white hover:bg-[#F8F5EF] rounded-xl font-semibold"
          >
            <div className="flex items-center justify-center gap-3 w-full">
              <FcGoogle size={24} />
              <span>Continue with Google</span>
            </div>
          </Button>
        </motion.div>
        {/* Login Link */}
        <div className="text-center mt-8 text-sm text-[#8B6F47]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-[#D4A95A] hover:underline"
          >
            Sign In
          </Link>
        </div>
      </motion.div>
    </div>
  );
}