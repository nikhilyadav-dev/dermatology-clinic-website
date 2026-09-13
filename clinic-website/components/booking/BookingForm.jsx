"use client";

import { useState } from "react";

import { initialBookingData } from "@/data/booking/initialBookingData";
import { bookingConfig } from "@/data/booking/config";

import { createConsultation } from "@/app/book-consultation/actions";

import { validateStep } from "@/lib/booking/validation";

import BookingProgress from "./BookingProgress";
import ConcernStep from "./ConcernStep";
import PersonalDetailsStep from "./PersonalDetailsStep";
import PreferredVisitStep from "./PreferredVisitStep";
import BookingReview from "./BookingReview";
import BookingSuccess from "./BookingSuccess";
import BookingError from "./BookingError";

export default function BookingForm() {
  const [bookingData, setBookingData] = useState(initialBookingData);

  const [currentStep, setCurrentStep] = useState(0);

  const [errors, setErrors] = useState({});

  const [submissionStatus, setSubmissionStatus] = useState("idle");

  const updateBookingData = (field, value) => {
    setBookingData((previous) => ({
      ...previous,
      [field]: value,
    }));

    // Clear the field's error as the user corrects it.
    setErrors((previous) => {
      if (!previous[field]) {
        return previous;
      }

      const next = { ...previous };
      delete next[field];

      return next;
    });
  };

  const handleContinue = async () => {
    const step = bookingConfig.steps[currentStep];

    if (!step) {
      return;
    }

    const stepErrors = validateStep(step.id, bookingData);

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setErrors({});

    // if (currentStep < bookingConfig.steps.length - 1) {
    //   setCurrentStep((previous) => previous + 1);
    // }

    if (currentStep === bookingConfig.steps.length - 1) {
      await handleSubmit();
      return;
    }

    setCurrentStep((previous) => previous + 1);
  };

  const handleBack = () => {
    if (currentStep === 0) {
      return;
    }

    setErrors({});

    setCurrentStep((previous) => previous - 1);
  };

  const renderCurrentStep = () => {
    const step = bookingConfig.steps[currentStep];

    if (!step) {
      return null;
    }

    switch (step.id) {
      case "concern":
        return (
          <ConcernStep
            value={bookingData.concern}
            onChange={(value) => updateBookingData("concern", value)}
            error={errors.concern}
          />
        );

      case "details":
        return (
          <PersonalDetailsStep
            data={bookingData}
            errors={errors}
            onChange={updateBookingData}
          />
        );

      case "visit":
        return (
          <PreferredVisitStep
            preferredDate={bookingData.preferredDate}
            preferredTime={bookingData.preferredTime}
            errors={errors}
            onChange={updateBookingData}
          />
        );

      case "review":
        return <BookingReview data={bookingData} onEditStep={setCurrentStep} />;

      default:
        return (
          <div className="rounded-2xl border border-dashed border-border p-8 text-center text-muted-foreground">
            This step will be built next.
          </div>
        );
    }
  };

  // const handleSubmit = async () => {
  //   const stepErrors = validateStep("review", bookingData);

  //   if (Object.keys(stepErrors).length > 0) {
  //     setErrors(stepErrors);
  //     return;
  //   }

  //   setSubmissionStatus("submitting");

  //   try {
  //     // Temporary simulation.
  //     // This will be replaced with the backend API later.
  //     await new Promise((resolve) => {
  //       setTimeout(resolve, 1500);
  //     });

  //     setSubmissionStatus("success");
  //   } catch (error) {
  //     console.error(error);
  //     setSubmissionStatus("error");
  //   }
  // };

  const handleSubmit = async () => {
    const stepErrors = validateStep("review", bookingData);

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setSubmissionStatus("submitting");

    try {
      const result = await createConsultation(bookingData);

      if (!result.success) {
        throw new Error(result.error);
      }

      setSubmissionStatus("success");
    } catch (error) {
      console.error("Consultation submission error:", error);
      setSubmissionStatus("error");
    }
  };
  const isFirstStep = currentStep === 0;

  if (submissionStatus === "success") {
    return (
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-background p-5 shadow-sm sm:p-8 lg:p-10">
            <BookingSuccess data={bookingData} />
          </div>
        </div>
      </section>
    );
  }

  if (submissionStatus === "error") {
    return (
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-background p-5 shadow-sm sm:p-8 lg:p-10">
            <BookingError onRetry={() => setSubmissionStatus("idle")} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-border bg-background p-5 shadow-sm sm:p-8 lg:p-10">
          <BookingProgress currentStep={currentStep} />

          <div className="mt-10">{renderCurrentStep()}</div>

          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <button
              type="button"
              onClick={handleBack}
              disabled={isFirstStep}
              className="rounded-xl px-5 py-2.5 text-sm font-medium transition hover:bg-muted disabled:pointer-events-none disabled:opacity-40"
            >
              Back
            </button>

            {/* <button
              type="button"
              onClick={handleContinue}
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-50"
            >
              {currentStep === bookingConfig.steps.length - 1
                ? "Request a Consultation"
                : "Continue"}
            </button> */}

            <button
              type="button"
              onClick={handleContinue}
              disabled={submissionStatus === "submitting"}
              className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary-hover disabled:pointer-events-none disabled:opacity-50"
            >
              {currentStep === bookingConfig.steps.length - 1
                ? submissionStatus === "submitting"
                  ? "Requesting..."
                  : "Request a Consultation"
                : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
