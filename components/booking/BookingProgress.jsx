"use client";

import { bookingConfig } from "@/data/booking/config";

export default function BookingProgress({ currentStep }) {
  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between">
        {bookingConfig.steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div
              key={step.id}
              className="flex items-center flex-1 last:flex-none"
            >
              <div
                className={[
                  "flex items-center gap-3",
                  isActive
                    ? "text-primary"
                    : isCompleted
                      ? "text-foreground"
                      : "text-muted-foreground",
                ].join(" ")}
              >
                <span
                  className={[
                    "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-medium",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground"
                      : isCompleted
                        ? "border-primary bg-primary/10"
                        : "border-border",
                  ].join(" ")}
                >
                  {step.number}
                </span>

                <span className="text-sm font-medium">{step.label}</span>
              </div>

              {index < bookingConfig.steps.length - 1 && (
                <div className="mx-4 h-px flex-1 bg-border" />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">
            Step {currentStep + 1} of {bookingConfig.steps.length}
          </span>

          <span className="text-sm text-muted-foreground">
            {bookingConfig.steps[currentStep]?.label}
          </span>
        </div>

        <div className="mt-3 flex gap-1.5">
          {bookingConfig.steps.map((step, index) => (
            <div
              key={step.id}
              className={[
                "h-1 flex-1 rounded-full",
                index <= currentStep ? "bg-primary" : "bg-muted",
              ].join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
