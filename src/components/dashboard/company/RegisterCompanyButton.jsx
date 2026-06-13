"use client";

import { Button } from "@heroui/react";
import { Building2, Loader2 } from "lucide-react";

export default function RegisterCompanyButton({
  loading = false,
  alreadyRegistered = false,
}) {
  const disabled = loading || alreadyRegistered;

  let buttonText = "Register Company";

  if (alreadyRegistered) {
    buttonText = "Company Already Registered";
  }

  return (
    <div className="rounded-3xl border border-[#E6DCC8] bg-white p-8 shadow-sm">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-[#3B2F1E]">
            Ready to Register?
          </h3>

          <p className="mt-2 text-sm text-[#8B6F47]">
            Please review all company information before submitting. Your
            company will be reviewed by an administrator before approval.
          </p>
        </div>

        <Button
          type="submit"
          size="lg"
          isDisabled={disabled}
          className={`min-w-[240px] rounded-2xl font-semibold transition-all duration-300 ${
            disabled
              ? "bg-gray-300 text-gray-600"
              : "bg-[#D4A95A] text-white hover:bg-[#C69945]"
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Registering...
            </>
          ) : (
            <>
              <Building2 className="mr-2 h-5 w-5" />
              {buttonText}
            </>
          )}
        </Button>
      </div>

      {alreadyRegistered && (
        <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
          <p className="text-sm text-yellow-700">
            🏢 You have already registered a company. Please wait for admin
            approval or manage your existing company.
          </p>
        </div>
      )}
    </div>
  );
}