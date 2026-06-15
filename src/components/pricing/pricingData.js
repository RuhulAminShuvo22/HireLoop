export const jobSeekerPlans = [
  {
    id: "job-free",
    name: "Free",
    badge: null,
    featured: false,

    monthlyPrice: 0,
    yearlyPrice: 0,

    displayPrice: "$0",
    period: "/forever",

    description:
      "Perfect for getting started and exploring job opportunities.",

    buttonText: "Get Started",

    features: [
      "Browse & save up to 10 jobs",
      "Apply to up to 3 jobs per month",
      "Basic profile",
      "Email alerts",
    ],
  },

  {
    id: "job-pro",
    name: "Pro",
    badge: "Most Popular",
    featured: true,

    monthlyPrice: 19,
    yearlyPrice: 190,

    displayPrice: "$19",
    period: "/month",

    description:
      "Ideal for active job seekers who want more visibility and advanced tools.",

    buttonText: "Start Pro Plan",

    features: [
      "Apply to up to 30 jobs per month",
      "Unlimited saved jobs",
      "Application tracking",
      "Salary insights",
    ],
  },

  {
    id: "job-premium",
    name: "Premium",
    badge: "Best Value",
    featured: false,

    monthlyPrice: 39,
    yearlyPrice: 390,

    displayPrice: "$39",
    period: "/month",

    description:
      "Unlock maximum exposure and unlimited applications.",

    buttonText: "Go Premium",

    features: [
      "Everything in Pro",
      "Unlimited applications",
      "Profile boost to recruiters",
      "Early access to new jobs",
      "Priority support",
    ],
  },
];

export const recruiterPlans = [
  {
    id: "recruiter-free",
    name: "Free",
    badge: null,
    featured: false,

    monthlyPrice: 0,
    yearlyPrice: 0,

    displayPrice: "$0",
    period: "/forever",

    description:
      "Great for startups and companies hiring for the first time.",

    buttonText: "Start Hiring",

    features: [
      "Up to 3 active job posts",
      "Basic applicant management",
      "Standard listing visibility",
      "Perfect for a company's first year of hiring",
    ],
  },

  {
    id: "recruiter-growth",
    name: "Growth",
    badge: "Most Popular",
    featured: true,

    monthlyPrice: 49,
    yearlyPrice: 490,

    displayPrice: "$49",
    period: "/month",

    description:
      "Scale your recruitment process with advanced hiring tools.",

    buttonText: "Choose Growth",

    features: [
      "Up to 10 active job posts",
      "Applicant tracking system",
      "Basic analytics",
      "Email support",
    ],
  },

  {
    id: "recruiter-enterprise",
    name: "Enterprise",
    badge: "For Teams",
    featured: false,

    monthlyPrice: 149,
    yearlyPrice: 1490,

    displayPrice: "$149",
    period: "/month",

    description:
      "Designed for growing teams and large-scale recruitment.",

    buttonText: "Contact Sales",

    features: [
      "Up to 50 active job posts",
      "Advanced analytics dashboard",
      "Featured job listings",
      "Team collaboration",
      "Custom branding",
      "Priority support",
    ],
  },
];