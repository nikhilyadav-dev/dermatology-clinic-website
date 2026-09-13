"use client";

import { useState } from "react";
import { updateConsultationStatus } from "@/app/(admin)/consultations/actions";

const statuses = [
  { label: "New", value: "NEW" },
  { label: "Contacted", value: "CONTACTED" },
  { label: "Confirmed", value: "CONFIRMED" },
  { label: "Completed", value: "COMPLETED" },
  { label: "Cancelled", value: "CANCELLED" },
];

export default function ConsultationQuickStatus({
  consultationId,
  initialStatus,
  onStatusChange,
}) {
  const [status, setStatus] = useState(initialStatus);
  const [saving, setSaving] = useState(false);

  async function handleChange(event) {
    const newStatus = event.target.value;

    if (newStatus === status) return;

    const previousStatus = status;

    setStatus(newStatus);
    setSaving(true);

    const result = await updateConsultationStatus(consultationId, newStatus);

    if (!result.success) {
      setStatus(previousStatus);
      return;
    }

    onStatusChange?.(consultationId, newStatus);
    setSaving(false);
  }

  return (
    <div className="relative">
      <select
        value={status}
        onChange={handleChange}
        disabled={saving}
        aria-label="Update consultation status"
        className="h-9 min-w-[125px] rounded-lg border border-border bg-background px-3 pr-8 text-xs font-medium text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {statuses.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {saving && (
        <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-muted">
          ...
        </span>
      )}
    </div>
  );
}
