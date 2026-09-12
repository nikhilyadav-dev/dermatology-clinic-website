"use client";

import { formatDateForDisplay } from "@/lib/booking/dates";
import { formatTimeForDisplay } from "@/lib/booking/time-slots";
import concerns from "@/data/concern";

function getConcernName(concernId) {
  if (concernId === "other") {
    return "Other / Not Sure";
  }

  const concern = concerns.find((item) => item.id === concernId);

  return concern?.name || "Selected concern";
}

function ReviewRow({ label, value, onEdit }) {
  return (
    <div className="flex items-start justify-between gap-6 border-b border-border py-5 last:border-0">
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>

        <p className="mt-1 break-words font-medium text-foreground">{value}</p>
      </div>

      <button
        type="button"
        onClick={onEdit}
        className="shrink-0 text-sm font-medium text-primary transition hover:underline"
      >
        Edit
      </button>
    </div>
  );
}

export default function BookingReview({ data, onEditStep }) {
  const concernName = getConcernName(data.concern);

  const selectedDate = data.preferredDate
    ? new Date(`${data.preferredDate}T00:00:00`)
    : null;

  const formattedDate = selectedDate ? formatDateForDisplay(selectedDate) : "";

  const formattedTime = data.preferredTime
    ? formatTimeForDisplay(data.preferredTime)
    : "";

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <p className="text-sm font-medium text-primary">Review & Request</p>

        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Review your request
        </h2>

        <p className="max-w-2xl text-muted-foreground">
          Please check your details before sending your consultation request.
        </p>
      </div>

      <div className="rounded-2xl border border-border">
        <ReviewRow
          label="Concern"
          value={concernName}
          onEdit={() => onEditStep(0)}
        />

        <ReviewRow
          label="Name"
          value={data.name}
          onEdit={() => onEditStep(1)}
        />

        <ReviewRow
          label="Phone"
          value={data.phone}
          onEdit={() => onEditStep(1)}
        />

        {data.email && (
          <ReviewRow
            label="Email"
            value={data.email}
            onEdit={() => onEditStep(1)}
          />
        )}

        <ReviewRow
          label="Preferred Date"
          value={formattedDate}
          onEdit={() => onEditStep(2)}
        />

        <ReviewRow
          label="Preferred Time"
          value={formattedTime}
          onEdit={() => onEditStep(2)}
        />
      </div>

      <p className="text-sm leading-6 text-muted-foreground">
        Your selected date and time are preferences and are not confirmed until
        our clinic team contacts you.
      </p>
    </div>
  );
}
