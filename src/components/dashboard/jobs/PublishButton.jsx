"use client";

import { Button } from "@heroui/react";
import { Loader2, Send } from "lucide-react";

export default function PublishButton({
  loading = false,
  companyApproved = true,
  canPostJob = true,
}) {
  const disabled = loading || !companyApproved || !canPostJob;

  let buttonText = "Publish Job";

  if (!companyApproved) {
    buttonText = "Company Approval Required";
  } else if (!canPostJob) {
    buttonText = "Job Limit Reached";
  }

  return (
    <div className="rounded-3xl border border-[#E6DCC8] bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-[#3B2F1E]">
            Ready to Publish?
          </h3>

          <p className="mt-2 text-sm text-[#8B6F47]">
            Review all information before publishing. Once published, your job
            will become visible to job seekers.
          </p>
        </div>

        <Button
          type="submit"
          size="lg"
          isDisabled={disabled}
          className={`min-w-[220px] rounded-2xl font-semibold transition-all duration-300
            ${
              disabled
                ? "bg-gray-300 text-gray-600"
                : "bg-[#D4A95A] text-white hover:bg-[#C69945]"
            }`}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Publishing...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              {buttonText}
            </>
          )}
        </Button>
      </div>

      {/* Status Message */}
      {!companyApproved && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-600">
            🚫 Your company must be approved before you can publish jobs.
          </p>
        </div>
      )}

      {companyApproved && !canPostJob && (
        <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
          <p className="text-sm text-yellow-700">
            ⚠️ You have reached your current plan is job posting limit. Upgrade
            your subscription to publish more jobs.
          </p>
        </div>
      )}
    </div>
  );
}