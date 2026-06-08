"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  BadgeDollarSign,
  Users,
  BarChart3,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Smart Matching",
      description:
        "Our intelligent matching engine analyzes your skills and experience to connect you with the most relevant opportunities.",
    },
    {
      icon: BadgeDollarSign,
      title: "Verified Salary Insights",
      description:
        "Get transparent compensation benchmarks and real market salary intelligence.",
    },
    {
      icon: Users,
      title: "Direct Recruiter Access",
      description:
        "Connect directly with recruiters actively hiring for your expertise.",
    },
    {
      icon: BarChart3,
      title: "Career Growth Analytics",
      description:
        "Track visibility, recruiter engagement and hiring trends with actionable insights.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-20 bg-[#F8F5EF]">
      {/* Glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#D4A95A]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-[#D4A95A]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4A95A]/20 bg-white/70 backdrop-blur-xl mb-5">
            <Sparkles className="w-4 h-4 text-[#D4A95A]" />

            <span className="text-sm font-medium text-[#3B2F1E]">
              Why Professionals Choose HireLoop
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#3B2F1E]">
            Built For Modern
            <span className="block text-[#D4A95A]">
              Career Growth
            </span>
          </h2>

          <p className="mt-6 text-[#6B5A45] text-base md:text-lg leading-8">
            HireLoop combines AI-powered technology, recruiter access and
            real-time career intelligence to help professionals discover
            better opportunities faster.
          </p>
        </div>

        {/* Main Bento Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-6"
        >
          {/* LEFT */}
          <div className="space-y-6">
            {features.slice(0, 2).map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -5,
                  }}
                  className="group h-[250px] rounded-[28px] border border-[#E7DDCA] bg-white/60 backdrop-blur-2xl p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    <div className="w-14 h-14 rounded-2xl bg-[#D4A95A]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4A95A] transition">
                      <Icon className="w-7 h-7 text-[#D4A95A] group-hover:text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-[#3B2F1E] mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-[#6B5A45] leading-7">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-[32px] border border-[#E7DDCA] h-[520px]"
          >
            <Image
              src="/assets/person1.png"
              alt="Professional"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>
        </motion.div>

        {/* Bottom Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6 mt-6"
        >
          {/* Large Image */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-[32px] border border-[#E7DDCA] h-[260px]"
          >
            <Image
              src="/assets/person2.png"
              alt="Professional"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Feature 3 */}
          {features.slice(2).map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group h-[260px] rounded-[28px] border border-[#E7DDCA] bg-white/60 backdrop-blur-2xl p-7 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D4A95A]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4A95A] transition">
                  <Icon className="w-7 h-7 text-[#D4A95A] group-hover:text-white" />
                </div>

                <h3 className="text-xl font-bold text-[#3B2F1E] mb-3">
                  {feature.title}
                </h3>

                <p className="text-[#6B5A45] leading-7">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Premium CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="rounded-[32px] bg-gradient-to-r from-[#3B2F1E] to-[#5A4324] p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                  Ready To Unlock Better Opportunities?
                </h3>

                <p className="text-white/70 mt-3 text-lg">
                  Join thousands of professionals accelerating their careers
                  with HireLoop.
                </p>
              </div>

              <Link
                href="/pricing"
                className="group bg-[#D4A95A] text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:scale-105 transition-all duration-300"
              >
                View Plans

                <ArrowUpRight className="w-5 h-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;