"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";

export default function PremiumCTA() {
  const stats = [
    {
      value: 98,
      suffix: "%",
      label: "Match Accuracy",
    },
    {
      value: 15,
      suffix: "K+",
      label: "Active Jobs",
    },
    {
      value: 500,
      suffix: "+",
      label: "Hiring Companies",
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 px-6 bg-[#F8F5EF]">

      {/* Background Grid */}

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(#D4A95A20 1px, transparent 1px),
            linear-gradient(90deg, #D4A95A20 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Main Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,169,90,.18),transparent_65%)]" />

      {/* Floating Blobs */}

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute left-10 top-10 h-72 w-72 rounded-full bg-[#D4A95A]/10 blur-[120px]"
      />

      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-[#D4A95A]/10 blur-[120px]"
      />

      {/* Floating Particles */}

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#D4A95A]/30"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Badge */}

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
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#D4A95A]/40 bg-white/60 backdrop-blur-xl"
        >
          <Sparkles
            size={16}
            className="text-[#D4A95A]"
          />

          <span className="text-[#3B2F1E] font-medium">
            Trusted by 10,000+ Professionals
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
          }}
          viewport={{ once: true }}
          className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold text-[#3B2F1E] leading-tight"
        >
          Your Next Career Move
          <br />
          Starts Here
        </motion.h2>

        {/* Description */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="mt-8 text-lg md:text-xl text-[#6B5A45] max-w-3xl mx-auto"
        >
          AI-powered matching, verified salary insights,
          and direct access to opportunities that align
          perfectly with your career goals.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.6,
          }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-5"
        >
          {/* Primary Button */}

          <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-[#D4A95A] text-white font-semibold shadow-xl hover:scale-105 transition-all duration-300">

            <span className="relative z-10 flex items-center gap-2">
              Get Started Free

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </span>

            <span className="absolute top-0 -left-20 h-full w-16 rotate-12 bg-white/30 blur-md group-hover:left-[120%] transition-all duration-1000" />
          </button>

          {/* Secondary Button */}

          <button className="px-8 py-4 rounded-2xl border border-[#D4A95A] bg-white/60 backdrop-blur-xl text-[#3B2F1E] font-semibold hover:bg-[#D4A95A] hover:text-white transition-all duration-300">
            View Pricing
          </button>
        </motion.div>

        {/* Stats */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {stats.map((item) => (
            <Tilt
              key={item.label}
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.05}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/70 border border-[#E6DCC8] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-5xl font-bold text-[#D4A95A]">
                  <CountUp
                    end={item.value}
                    duration={2.5}
                    enableScrollSpy
                  />
                  {item.suffix}
                </h3>

                <p className="mt-3 text-[#6B5A45]">
                  {item.label}
                </p>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}