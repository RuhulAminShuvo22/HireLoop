"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel your subscription at any time from your account settings. Your plan will remain active until the end of your current billing cycle.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Refund requests are reviewed on a case-by-case basis. If you experience any issues with your subscription, our support team will be happy to assist you.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Visa, Mastercard, American Express, PayPal, and other secure payment methods supported by our payment processor.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely. Upgrade or downgrade your plan at any time from your dashboard without losing any of your existing data.",
  },
  {
    question: "What happens when I reach my application limit?",
    answer:
      "Once you reach your monthly application limit, you'll need to wait until your next billing cycle or upgrade your plan.",
  },
  {
    question: "Can recruiters upgrade from Growth to Enterprise?",
    answer:
      "Yes. Recruiters can upgrade anytime to unlock more job postings, advanced analytics, team collaboration, and priority support.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="bg-white border border-[#E7DCC8] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between text-left px-6 py-5"
      >
        <h3 className="font-semibold text-lg text-[#3B2A1A]">
          {faq.question}
        </h3>

        <div className="text-[#D4A54A] text-xl">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-6 text-gray-600 leading-7">
          {faq.answer}
        </div>
      )}

    </div>
  );
}

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative mt-32">

      <div className="absolute left-1/2 top-20 -translate-x-1/2 w-80 h-80 bg-[#D4A54A]/10 blur-[120px] rounded-full" />

      <div className="relative">

        <div className="text-center mb-14">
          <span className="uppercase tracking-[6px] text-[#D4A54A] font-semibold">
            FAQ
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#3B2A1A] mt-4">
            Frequently Asked Questions
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            Find answers to common questions about billing,
            subscriptions, upgrades, cancellations, and more.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}