"use client";

import concerns from "@/data/concern";

export default function ConcernStep({ value, onChange, error }) {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">Your Concern</p>

        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          What brings you in today?
        </h2>

        <p className="max-w-2xl text-muted-foreground">
          Choose the concern you'd like to discuss with our dermatologist.
        </p>
      </div>

      <div
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        role="radiogroup"
        aria-label="Choose your concern"
      >
        {concerns.map((concern) => {
          const selected = value === concern.id;

          return (
            <button
              key={concern.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(concern.id)}
              className={[
                "rounded-2xl border p-4 text-left transition",
                "hover:border-primary/50 hover:bg-primary/[0.03]",
                selected
                  ? "border-primary bg-primary/[0.06] ring-1 ring-primary"
                  : "border-border bg-background",
              ].join(" ")}
            >
              <span className="block font-medium">{concern.name}</span>

              {concern.description && (
                <span className="mt-1 block text-sm text-muted-foreground">
                  {concern.description}
                </span>
              )}
            </button>
          );
        })}

        {/* Other / Not Sure */}
        <button
          type="button"
          role="radio"
          aria-checked={value === "other"}
          onClick={() => onChange("other")}
          className={[
            "rounded-2xl border p-4 text-left transition",
            "hover:border-primary/50 hover:bg-primary/[0.03]",
            value === "other"
              ? "border-primary bg-primary/[0.06] ring-1 ring-primary"
              : "border-border bg-background",
          ].join(" ")}
        >
          <span className="block font-medium">Other / Not Sure</span>

          <span className="mt-1 block text-sm text-muted-foreground">
            I'm not sure which concern best describes what I need help with.
          </span>
        </button>
      </div>

      {error && (
        <p className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
