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
        "Our intelligent matching engine analyzes your skills, experience, and goals to connect you with the most relevant opportunities.",
    },
    {
      icon: BadgeDollarSign,
      title: "Verified Salary Insights",
      description:
        "Make informed decisions with transparent compensation benchmarks and real market salary intelligence.",
    },
    {
      icon: Users,
      title: "Direct Recruiter Access",
      description:
        "Skip the noise and connect directly with recruiters actively looking for talent like you.",
    },
    {
      icon: BarChart3,
      title: "Career Growth Analytics",
      description:
        "Track profile visibility, recruiter engagement, and hiring trends through actionable insights.",
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
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
    <section className="relative overflow-hidden py-24 bg-[#F8F5EF]">
      {/* Background Glow */}
      <div className="absolute top-32 left-20 w-80 h-80 bg-[#D4A95A]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#D4A95A]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-[#D4A95A]/30 bg-white/70 backdrop-blur-xl px-4 py-2 rounded-full mb-5">
            <Sparkles className="w-4 h-4 text-[#D4A95A]" />

            <span className="text-sm font-semibold text-[#3B2F1E]">
              Why Professionals Choose HireLoop
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#3B2F1E] leading-tight">
            Built For Modern
            <span className="block text-[#D4A95A]">
              Career Growth
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-[#6B5A45] text-lg">
            HireLoop combines AI-powered technology, recruiter access,
            and real-time career intelligence to help professionals
            discover better opportunities faster.
          </p>
        </div>

        {/* Main Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group bg-white/70 backdrop-blur-xl border border-[#E6DCC8] rounded-3xl p-8 hover:shadow-[0_20px_60px_rgba(212,169,90,0.15)] transition-all duration-500"
          >
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-[#D4A95A]/10 group-hover:bg-[#D4A95A] transition-all duration-500">
                <Brain className="w-8 h-8 text-[#D4A95A] group-hover:text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#3B2F1E] mb-3">
                  {features[0].title}
                </h3>

                <p className="text-[#6B5A45]">
                  {features[0].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Person 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-3xl border border-[#E6DCC8] bg-white"
          >
            <Image
              src="/assets/person1.png"
              alt="Professional"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="group bg-white/70 backdrop-blur-xl border border-[#E6DCC8] rounded-3xl p-8 hover:shadow-[0_20px_60px_rgba(212,169,90,0.15)] transition-all duration-500"
          >
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl bg-[#D4A95A]/10 group-hover:bg-[#D4A95A] transition-all duration-500">
                <BadgeDollarSign className="w-8 h-8 text-[#D4A95A] group-hover:text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#3B2F1E] mb-3">
                  {features[1].title}
                </h3>

                <p className="text-[#6B5A45]">
                  {features[1].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Person 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="overflow-hidden rounded-3xl border border-[#E6DCC8] bg-white"
          >
            <Image
              src="/assets/person2.png"
              alt="Professional"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Bottom Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mt-8"
        >
          {features.slice(2).map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group bg-white/70 backdrop-blur-xl border border-[#E6DCC8] rounded-3xl p-8 hover:shadow-[0_20px_60px_rgba(212,169,90,0.15)] transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="p-4 rounded-2xl bg-[#D4A95A]/10 group-hover:bg-[#D4A95A] transition-all duration-500">
                    <Icon className="w-8 h-8 text-[#D4A95A] group-hover:text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#3B2F1E] mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-[#6B5A45]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-[#E6DCC8] bg-white/70 backdrop-blur-xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-3xl font-bold text-[#3B2F1E]">
              Ready To Unlock Better Opportunities?
            </h3>

            <p className="text-[#6B5A45] mt-3">
              Join thousands of professionals using HireLoop to
              accelerate their careers.
            </p>
          </div>

          <Link
            href="/pricing"
            className="group bg-[#D4A95A] text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            View Plans

            <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;